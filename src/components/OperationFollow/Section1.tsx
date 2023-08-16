"use client";

import { useDispatch, useSelector } from "react-redux";
import "./operation-follow.scss";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { updateFormField } from "@/redux/OperationFollow/reducer";
import { FormState } from "@/redux/OperationFollow/types";
import { useParams, useRouter } from "next/navigation";

import { getYearsService, paramMapService, updateFormById } from "@/redux/OperationFollow/service";
import { checkValidity } from "./Validation/section1";
import AlertModal from "./Table/AlertModal/AlertModal";
import { getMainPlanService, getSrategicGroupService } from "@/redux/OperationFollow/Section1/service";
import { createOperationFormService, updateOperationFormService } from "@/redux/services/operation-follow-api";
import { masterDataApi, useGetAllBudgetActQuery, useGetBudgetActByIdQuery } from "@/redux/services/master-data";
import masterDataApiService from "@/redux/services/master-data-api";

interface Section1Props {
  changeSectionHandle: (value: number, isBubble: boolean) => void;
  setIsLoading: (val: boolean) => void
}

export default function Section1(props: Section1Props) {
  const formState: FormState = useSelector(
    (state: RootState) => state.operationFollowForm
  );
  const [formValid, setFormValid] = useState<boolean>(true);
  const router = useRouter();
  const [validationState, setValidationState] = useState([
    {
      name: "yearBudget",
      alias: "ปีงบประมาณแผนสนับสนุนดำเนินงานด้านการตลาด",
      isValid: true,
    },
    {
      name: "budgetSource",
      alias: "แหล่งงบประมาณ",
      isValid: true,
    },
    {
      name: "paymentList",
      alias: "รายการค่าใช้จ่าย",
      isValid: true,
    },
    // {
    //   name: "act_group",
    //   alias: "หมวด พ.ร.บ. งบประมาณ",
    //   isValid: true,
    // },
    {
      name: "strategic_goal",
      alias: "วัตถุประสงค์เชิงยุทธศาสตร์ (SO)",
      isValid: true,
    },
    {
      name: "strategic",
      alias: "กลยุทธ์",
      isValid: true,
    },
    {
      name: "planning",
      alias: "แผนงาน",
      isValid: true,
    },
    {
      name: "project_name",
      alias: "ชื่อโครงการ",
      isValid: true,
    },
  ]);
  const dispatch = useDispatch();
  let id = '0';
  let mode = 0;
  const params = useParams();

  const [strategyParams, setStrategyParams] = useState({
    masterPlanId: '',
    strategyGroupYear: 2567,
    overviewStrategyId: '',
    mainPlanDataId: ''
  })

  const getExpenseItemData = async () => {
    const response = await masterDataApiService.getAllExpenseItems()
    setExpenseItemData(response.data)
  }

  const { data: strategyGroupData, refetch: refetchStrategyGroupData } = getSrategicGroupService(strategyParams);
  const { data: mainPlanData, refetch: refetchMainPlanData } = getMainPlanService(strategyParams);


  const [isShowAlert, setIsShowAlert] = useState(false);
  const [headTextAlert, setHeadTextAlert] = useState('');
  const [contentTextAlert, setContentTextAlert] = useState('');
  const [overviewStrategiesData, setOverviewStrategiesData] = useState([]);
  const [sgIndex, setSgIndex] = useState(0);
  const [stragtegicGoalTemp, setStragtegicGoalTemp] = useState('DEFAULT');
  const [stragtegicTemp, setStragtegicTemp] = useState('DEFAULT');
  const [mainPlanTemp, setMainPlanTemp] = useState('');
  const [budgetActTemp, setBudgetActTemp] = useState('');
  const [expenseItemTemp, setExpenseItemTemp] = useState('');
  const { data: yearsData } = getYearsService();
  const { data: budgetActData, refetch: budgetActRefetch } = useGetBudgetActByIdQuery(strategyParams)
  const [expenseItemsData, setExpenseItemData] = useState([]);
  const [filterExpenseItemData, setFilterExpenseItemData] = useState([])

  const handleSection = async (value: number) => {
    props.setIsLoading(true)
    if(formState.id == '0'){
      const formInfo = await paramMapService(formState, 1)
      const response:any = await createOperationFormService(formInfo)
      dispatch(updateFormField({
        ...formState,
        id: response.data.projectId
      }))
    }else{
      const formInfo = await paramMapService(formState, 1)
      await updateOperationFormService(formState.id,formInfo)
    }

    //handleUpdateForm();
    props.changeSectionHandle(value, false);
    props.setIsLoading(false)
  };

  const handleSaveDraft = async () => {
    props.setIsLoading(true)
    const formInfo = await paramMapService(formState, 1)

    if(formState.id  == '0'){
      await createOperationFormService({...formInfo, formIndex: 1})
    }else{
      await updateOperationFormService(id, { ...formInfo, formIndex: 1})
    }

    props.setIsLoading(false)

    setIsShowAlert(true)
    setHeadTextAlert('แจ้งเตือน')
    setContentTextAlert('บันทึกข้อมูลชั่วคราว')
    setTimeout(() => {
      props.setIsLoading(false)
      router.push("/operation-follow");
    }, 2000);
  }

  const handleCloseAlert = () => {
    setIsShowAlert(false)
    setTimeout(()=>{
      window.scrollTo({ top: 0, behavior: "smooth" });
    },300)
  }

  const handleUpdateForm = () => {
    const updateForm = {
      yearBudget: formState.section1.yearBudget,
      budgetSource: formState.section1.budgetSource,
      paymentList: formState.section1.paymentList,
      organizationManageMent: formState.section1.organizationManageMent,
      act_group: formState.section1.act_group,
      strategic_goal: formState.section1.strategic_goal,
      strategic: formState.section1.strategic,
      planning: formState.section1.planning,
      project_type: formState.section1.project_type,
      project_name: formState.section1.project_name,
    };

    dispatch(
      updateFormField({
        ...formState,
        section1: {
          yearBudget: updateForm.yearBudget,
          budgetSource: updateForm.budgetSource,
          paymentList: updateForm.paymentList,
          organizationManageMent: updateForm.organizationManageMent,
          act_group: updateForm.act_group,
          strategic_goal: updateForm.strategic_goal,
          strategic: updateForm.strategic,
          planning: updateForm.planning,
          project_type: updateForm.project_type,
          project_name: updateForm.project_name,
        },
      })
    );
  };

  useEffect(() => {
    id = typeof params?.id === "string" ? params?.id : '0';
    console.log(id + 'view id')
    if (id != '0') {
      console.log('update forn')
      updateFormById(id, dispatch);
    }

    let mode = typeof params?.mode === "string" ? parseInt(params?.mode) : 0;
    if(mode == 1){
      setStrategyParams({
        ...strategyParams,
        masterPlanId: '10003',
        strategyGroupYear: id == '0' ? (new Date().getFullYear())+ 543 : parseInt(formState.section1.yearBudget)
      })
    }else if(mode == 2){
      setStrategyParams({
        ...strategyParams,
        masterPlanId: '10002',
        strategyGroupYear: id == '0' ? (new Date().getFullYear())+ 543 : parseInt(formState.section1.yearBudget)
      })
    }else{
      setStrategyParams({
        ...strategyParams,
        masterPlanId: '10001',
        strategyGroupYear: id == '0' ? (new Date().getFullYear())+ 543 : parseInt(formState.section1.yearBudget)
      })
    }

    refetchStrategyGroupData()
    getExpenseItemData()

  }, []);

  const handleChangeField = (e: any) => {
    let { name, value, key } = e.target;

    if(name == 'strategic_goal'){
      setOverviewStrategiesData(strategyGroupData[value]['overviewStrategies'])
      // value = strategyGroupData[value]['strategyGroupTh']
      // console.log(value)
      dispatch(
        updateFormField({
          ...formState,
          section1: {
            ...formState.section1,
            [name]: strategyGroupData[value]['strategyGroupId'],
          },
        })
      );

      setStragtegicGoalTemp(value)
    }else if(name == 'strategic'){

      setStrategyParams({
        ...strategyParams,
        overviewStrategyId: overviewStrategiesData[value]['overviewStrategyId']
      })

      refetchMainPlanData()

      dispatch(
        updateFormField({
          ...formState,
          section1: {
            ...formState.section1,
            [name]: overviewStrategiesData[value]['overviewStrategyId'],
          },
        })
      );

      setStragtegicTemp(value)
    }else if(name == 'planning'){

      dispatch(
        updateFormField({
          ...formState,
          section1: {
            ...formState.section1,
            [name]: mainPlanData[value]['mainPlanId'],
          },
        })
      );

      setStrategyParams({
        ...strategyParams,
        mainPlanDataId: mainPlanData[value]['mainPlanId']
      })

      setMainPlanTemp(value)

    }else if (name == 'act_group'){
      dispatch(
        updateFormField({
          ...formState,
          section1: {
            ...formState.section1,
            [name]: budgetActData[value]['budgetActId'],
          },
        })
      );

      setBudgetActTemp(value)

      let filterData = expenseItemsData.filter((items:any) => 
        items.budgetActId == budgetActData[value]['budgetActId']
      )

      setFilterExpenseItemData(filterData)

    } else if(name == 'paymentList'){

      setExpenseItemTemp(value)

      dispatch(
        updateFormField({
          ...formState,
          section1: {
            ...formState.section1,
            [name]: value,
          },
        })
      );

    }else{
      dispatch(
        updateFormField({
          ...formState,
          section1: {
            ...formState.section1,
            [name]: value,
          },
        })
      );
    }

    if( name == 'yearBudget'){
      setStrategyParams({
        ...strategyParams,
        strategyGroupYear: value
      })

      refetchStrategyGroupData()
    }

  };

  useEffect(() => {
    budgetActRefetch()
  },[mainPlanTemp])

  useEffect(() => {

    async function getMainPlanDataById(id: string){
      const response:any = await masterDataApiService.getMainPlanByOverview(id)
      const filteredData = response.data.filter((items:any) => 
      items.overviewStrategyId == id)
      let findIndx = filteredData?.findIndex((items:any) => 
        items.mainPlanId == formState.section1.planning)
      setMainPlanTemp(findIndx)

      const response2:any = await masterDataApiService.getBudgetActByMainPlan(formState.section1.planning)
      let findIndx2 = response2.data?.findIndex((items:any) => 
        items.budgetActId == formState.section1.act_group)
      console.log(response2.data)
        setBudgetActTemp(findIndx2)
    }

    if(formState.id != '0'){

      if(formState.section1.strategic_goal != ''){
        console.log(strategyGroupData)
        console.log(formState.section1.strategic_goal)
        let findIndx = strategyGroupData?.findIndex((items:any) => 
        items.strategyGroupId == formState.section1.strategic_goal)
        setStragtegicGoalTemp(findIndx)
  
        if(strategyGroupData != undefined && strategyGroupData?.length > 0 && findIndx != -1){
          setOverviewStrategiesData(strategyGroupData[findIndx]['overviewStrategies'])
        
          if(formState.section1.strategic != ''){
  
            let _overviewStrategiesData = strategyGroupData[findIndx]['overviewStrategies']
        
            findIndx = _overviewStrategiesData?.findIndex((items:any) => 
            items.overviewStrategyId == formState.section1.strategic)

            setStragtegicTemp(findIndx + "")

            if(formState.section1.planning != ''){
              setStrategyParams({
                ...strategyParams,
                overviewStrategyId: formState.section1.strategic
              })

              getMainPlanDataById(formState.section1.strategic)
            
            }
      
          }
        
        }
        
      }
  
      if(formState.section1.planning != ''){
        setMainPlanTemp(formState.section1.planning)
      }
    }

  },[formState])

  return (
    <>
      <div className="d-flex form-group">
        <div className="form-field-label">
          <label>
          <i className="bi bi-info-circle information"></i> ชื่อโครงการ {}<span style={{ color: "red" }}> *</span><span> : </span>
          </label>
        </div>
        <div className="d-flex flex-column form-field-fieldzone">
          <div className="">
            <input
              type="text"
              onChange={handleChangeField}
              name="project_name"
              value={formState.section1.project_name}
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=""
            />
          </div>
          <div>
            {/* {validationState[8].isValid == false && (
              <div className="form-field-fieldzone invalid-text">
                <span style={{ color: "red" }}>
                  โปรดกรอกข้อมูล{validationState[8].alias}
                </span>
              </div>
            )} */}
          </div>
        </div>
      </div>
      <div className="d-flex form-group">
        <div className="form-field-label">
          <label>
          <i className="bi bi-info-circle information"></i> ปีงบประมาณ
            <span style={{ color: "red" }}> *</span><span> : </span>
          </label>
        </div>
        <div className="d-flex flex-column form-field-fieldzone">
          <div className="">
            <select
              defaultValue={"DEFAULT"}
              onChange={handleChangeField}
              name="yearBudget"
              value={formState["section1"]["yearBudget"]}
              className="form-select"
              aria-label="Default select example"
            >
              {/* {Array.from({ length: 5 }, (_, index) => {
                const currentDate = new Date();
                const currentYear = currentDate.getFullYear();
                const buddhistYear = currentYear + 543 - index;
                return (
                  <option key={buddhistYear} value={buddhistYear}>
                    {buddhistYear}
                  </option>
                );
              })} */}
              <option value="DEFAULT">--เลือก--</option>
                    {yearsData?.map((items:any, index: number) => (
                      <option key={index} value={items}>
                        {items}
                      </option>
                    ))}
            </select>
          </div>
          <div>
            {validationState[0].isValid == false && (
              <div className="form-field-fieldzone invalid-text">
                <span style={{ color: "red" }}>
                  โปรดกรอกข้อมูล{validationState[0].alias}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="d-flex form-group">
        <div className="form-field-label">
          <label>
          <i className="bi bi-info-circle information"></i> ชื่อแผน<span style={{ color: "red" }}> *</span><span> : </span>
          </label>
        </div>
        <div className="form-field-fieldzone">
          <input
            disabled
            type="text"
            onChange={handleChangeField}
            name="organizationManageMent"
            value={formState["section1"]["organizationManageMent"]}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder=""
          />
        </div>
      </div>
      <div className="d-flex form-group">
        <div className="form-field-label">
          <label>
          <i className="bi bi-info-circle information"></i> แหล่งงบประมาณ<span style={{ color: "red" }}> *</span><span> : </span>
          </label>
        </div>
        <div className="d-flex flex-column form-field-fieldzone">
          <div className="">
            <input
              onChange={handleChangeField}
              name="budgetSource"
              value={formState["section1"]["budgetSource"]}
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=""
            />
          </div>
          <div>
            {validationState[1].isValid == false && (
              <div className="form-field-fieldzone invalid-text">
                <span style={{ color: "red" }}>
                  โปรดกรอกข้อมูล{validationState[1].alias}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="d-flex form-group">
        <div className="form-field-label">
          <label>
          <i className="bi bi-info-circle information"></i> วัตถุประสงค์เชิงยุทธศาสตร์ (SO)
            <span style={{ color: "red" }}> *</span><span> : </span>
          </label>
        </div>
        <div className="d-flex flex-column form-field-fieldzone">
          <div className="">
            <select className="form-select" name="strategic_goal" id="selectInput" defaultValue={"DEFAULT"} value={stragtegicGoalTemp} onChange={handleChangeField}>
              <option value="DEFAULT">---- เลือก ----</option>
              {strategyGroupData?.map((items:any, index: number) => (
                <option key={index} value={index}>
                  {items.strategyGroupTh}
                </option>
              ))}
            </select>
          </div>
          <div>
            {validationState[4].isValid == false && (
              <div className="form-field-fieldzone invalid-text">
                <span style={{ color: "red" }}>
                  โปรดกรอกข้อมูล{validationState[4].alias}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="d-flex form-group">
        <div className="form-field-label">
          <label>
          <i className="bi bi-info-circle information"></i> กลยุทธ์<span style={{ color: "red" }}> *</span><span> : </span>
          </label>
        </div>
        <div className="d-flex flex-column form-field-fieldzone">
          <div className="">
            <select className="form-select" name="strategic" id="selectInput" defaultValue={"DEFAULT"} value={stragtegicTemp} onChange={handleChangeField}>
                <option value="DEFAULT">---- เลือก ----</option>
                {overviewStrategiesData?.map((items:any, index:number) => (
                  <option key={items.overviewStrategyId} value={index}>
                    {items.overviewStrategyNameTh}
                  </option>
                ))}
            </select>
          </div>
          <div>
            {validationState[5].isValid == false && (
              <div className="form-field-fieldzone invalid-text">
                <span style={{ color: "red" }}>
                  โปรดกรอกข้อมูล{validationState[5].alias}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="d-flex form-group">
        <div className="form-field-label">
          <label>
          <i className="bi bi-info-circle information"></i> แผนงาน<span style={{ color: "red" }}> *</span><span> : </span>
          </label>
        </div>
        <div className="d-flex flex-column form-field-fieldzone">
          <div className="">
            <div className="">
            <select className="form-select" name="planning" id="selectInput" defaultValue={""} value={mainPlanTemp} onChange={handleChangeField}>
                <option value="">---- เลือก ----</option>
                {mainPlanData?.map((items:any, index:number) => (
                  <option key={items.mainPlanId} value={index}>
                    {items.mainPlanNameTh}
                  </option>
                ))}
            </select>
          </div>
          </div>
          <div>
            {validationState[6].isValid == false && (
              <div className="form-field-fieldzone invalid-text">
                <span style={{ color: "red" }}>
                  โปรดกรอกข้อมูล{validationState[6].alias}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="d-flex form-group">
        <div className="form-field-label">
          <label>
          <i className="bi bi-info-circle information"></i> หมวด พ.ร.บ. งบประมาณ<span style={{ color: "red" }}> *</span><span> : </span>
          </label>
        </div>
        <div className="d-flex flex-column form-field-fieldzone">
          <div className="">
            <select onChange={handleChangeField} className="form-select" name="act_group" id="selectInput" defaultValue={""} value={budgetActTemp}>
                <option value="">---- เลือก ----</option>
                {budgetActData?.map((items:any, index:number) => (
                  <option key={items.budgetActId} value={index}>
                    {items.budgetActName}
                  </option>
                ))}
            </select>
          </div>
          <div>
            {validationState[2].isValid == false && (
              <div className="form-field-fieldzone invalid-text">
                <span style={{ color: "red" }}>
                  โปรดกรอกข้อมูล{validationState[3].alias}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="d-flex form-group">
        <div className="form-field-label">
          <label>
          <i className="bi bi-info-circle information"></i> รายการค่าใช้จ่าย<span style={{ color: "red" }}> *</span><span> : </span>
          </label>
        </div>
        <div className="d-flex flex-column form-field-fieldzone">
          {/* <div className="">
            <input
              onChange={handleChangeField}
              name="paymentList"
              value={formState["section1"]["paymentList"]}
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=""
            />
          </div> */}
          <div className="">
            <select onChange={handleChangeField} className="form-select" name="paymentList" id="selectInput" defaultValue={""} value={expenseItemTemp}>
                <option value="">---- เลือก ----</option>
                { budgetActTemp != '' &&
                  <>
                    {filterExpenseItemData?.map((items:any, index:number) => (
                      <option key={items.expenseItemId} value={items.expenseItemId}>
                        {items.expenseItemName}
                      </option>
                    ))}
                  </>
                }
            </select>
          </div>
          <div>
            {validationState[2].isValid == false && (
              <div className="form-field-fieldzone invalid-text">
                <span style={{ color: "red" }}>
                  โปรดกรอกข้อมูล{validationState[2].alias}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="d-flex form-group">
        <div className="form-field-label">
          <label>
            <i className="bi bi-info-circle information"></i> ประเภทโครงการ<span style={{ color: "red" }}> *</span><span> : </span>
          </label>
        </div>
        <div className="d-flex flex-column form-field-fieldzone">
          <div className="">
            <select
              defaultValue={"ในแผน"}
              onChange={handleChangeField}
              name="project_type"
              value={formState.section1.project_type}
              className="form-select"
              aria-label="Default select example"
            >
              <option value="00">ในแผน</option>
              <option value="01">นอกแผน</option>
            </select>
          </div>
          <div>
            {validationState[6].isValid == false && (
              <div className="form-field-fieldzone invalid-text">
                <span style={{ color: "red" }}>
                  โปรดกรอกข้อมูล{validationState[7].alias}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="button-section">
        {/* <button onClick={() => handleSection(2)} type="button" className="btn btn-primary">ต่อไป <i className="bi bi-chevron-right"></i></button> */}
        <button
          onClick={() =>
            checkValidity(
              formState,
              validationState,
              setValidationState,
              setFormValid,
              handleSection
            )
          }
          type="button"
          className="btn btn-primary"
        >
          ต่อไป <i className="bi bi-chevron-right"></i>
        </button>
        <button onClick={() => handleSaveDraft()} type="button" className="btn btn-primary">
          <i className="bi bi-file-earmark"></i> บันทึกข้อมูลชั่วคราว{" "}
        </button>
      </div>
      <AlertModal setShow={isShowAlert} handleClose={handleCloseAlert} headText={headTextAlert} contentText={contentTextAlert} />
    </>
  );
}
