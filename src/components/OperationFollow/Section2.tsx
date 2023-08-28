"use client";

import { useEffect, useState } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import "./operation-follow.scss";
import TableQuarterSummary from "./Table/TableQuarterSummary";
import TablePolicySuite from "./Table/TablePolicySuite";
import TableStakeHolder from "./Table/TableStakeHolder";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { updateFormField, resetForm } from "@/redux/OperationFollow/reducer";
import {
  fetchSection2dataService,
} from "@/redux/OperationFollow/Section2/service";
import { checkValidity } from "./Validation/section2";
import { Section2 } from "@/redux/OperationFollow/types";
import { paramMapService, saveDraftForm } from "@/redux/OperationFollow/service";
import  AlertModal  from "./Table/AlertModal/AlertModal"
import { createBudgetInfoService, createOperationFormService, updateOperationFormService } from "@/redux/services/operation-follow-api";

interface Section2Props {
  changeSectionHandle: (value: number, isBubble: boolean) => void;
  setIsLoading: (val: boolean) => void
}

export default function Section2(props: Section2Props) {
  const formState = useSelector(
    (state: RootState) => state.operationFollowForm
  );
  const dispatch = useDispatch();
  let id = '0';
  const params = useParams();
  const [quarterSelect, setQuarterSelect] = useState(1);
  const handleQuarterSelect = (value: number) => {
    setQuarterSelect(value);
  };
  const [validationState, setValidationState] = useState([
    {
      name: "budget",
      alias: "งบประมาณโครงการ",
      isValid: true,
    },
    {
      name: "tableQuarterSummary",
      alias: "งบประมาณแยกตามรายเดือน",
      isValid: true,
    },
    {
      name: "tablePolicySuite",
      alias: "ความสอดคล้องกับนโยบาย",
      isValid: true,
    },
    {
      name: "tableStakeholder",
      alias: "กลุ่มผู้มีส่วนได้ส่วนเสีย",
      isValid: true,
    },
    {

    }
  ]);

  const [budgetStatus, setBudgetStatus] = useState(0);
  const [isShowAlert, setIsShowAlert] = useState(false);
  const [headTextAlert, setHeadTextAlert] = useState('');
  const [contentTextAlert, setContentTextAlert] = useState('');

  const [tableQuarterData, settableQuarterData] = useState({
    quarter: {
      quarter1: {
        month1: 0,
        month2: 0,
        month3: 0,
        total: 0,
        porportion: 0,
      },
      quarter2: {
        month1: 0,
        month2: 0,
        month3: 0,
        total: 0,
        porportion: 0,
      },
      quarter3: {
        month1: 0,
        month2: 0,
        month3: 0,
        total: 0,
        porportion: 0,
      },
      quarter4: {
        month1: 0,
        month2: 0,
        month3: 0,
        total: 0,
        porportion: 0,
      },
    },
  });

  const [tablePolicySuiteData, settablePolicySuiteData] = useState({
    isFlagship: false,
    isSla: false,
    isMainPlan: false,
    isPAIndicator: false,
    isClosedGap: false,
    isNone: false,
    isCsrProcess: false,
  });

  const [tableStakeHolderData, settableStakeHolderData] = useState({
    isTatStaff: false,
    isCustomer: false,
    isGovernmentAudit: false,
    isSender: false,
    isProviderCustomer: false,
    isWorkingUnit: false,
  });

  const formattedValue = (value: number) => {
    let val = value + ""

    if (val === "" || Number.isNaN(val)) {
      return 0;
    } else {
      val = val.replace(",", "");
      const result = Number(value).toLocaleString("en-US");
      return result;
    }
  };

  const [budgetTemp, setBudgetTemp] = useState("");

  const [tempMask, setTempMask] = useState({
    quarter1: {
      month1: "0",
      month2: "0",
      month3: "0",
      total: "0",
      porportion: "0"
    },
    quarter2: {
      month1: "0",
      month2: "0",
      month3: "0",
      total: "0",
      porportion: "0"
    },
    quarter3: {
      month1: "0",
      month2: "0",
      month3: "0",
      total: "0",
      porportion: "0"
    },
    quarter4: {
      month1: "0",
      month2: "0",
      month3: "0",
      total: "0",
      porportion: "0"
    },
  });

  const router = useRouter();

  const handleSetTempMask = (value: any) => {
    setTempMask(value);
  };

  const handleSaveDraft = async () => {
    props.setIsLoading(true)
    const formInfo = await paramMapService(formState, 2)

    if(formState.id == '0'){
      await createOperationFormService({...formInfo, formIndex: 2})
    }else{
      await updateOperationFormService(formState.id, { ...formInfo, formIndex: 2})
    }
    props.setIsLoading(false)
    setIsShowAlert(true)
    setHeadTextAlert('แจ้งเตือน')
    setContentTextAlert('บันทึกข้อมูลชั่วคราว')
    setTimeout(() => {
      router.push("/operation-follow");
    }, 2000);
  }

  const handleSection = async (value: number) => {
    props.setIsLoading(true)
    if (
      checkValidity(
        formState,
        validationState,
        setValidationState,
        handleSection
      )
    ) {

      if(budgetStatus != 0){

        isBudgetValidModal(budgetStatus)

      }else{

        calculateValidity()

        let formData:any = await paramMapService(formState, 2)

        //console.log(formData)

        await updateOperationFormService(formState.id, formData)

        // console.log(formData)
        for(let i = 0; i < formData?.projectBudgets.length; i++){
          await createBudgetInfoService(formData.projectBudgets[i])
        }

        props.changeSectionHandle(value,false)
      }

    }
    props.setIsLoading(false)
  };

  const isBudgetValidModal = (budgetStatus: number) => {
    if(budgetStatus == 1){
      setIsShowAlert(true)
      setHeadTextAlert('แจ้งเตือน')
      setContentTextAlert('งบประมาณน้อยกว่าคาดการณ์')
    }else if(budgetStatus == 2){
      setIsShowAlert(true)
      setHeadTextAlert('แจ้งเตือน')
      setContentTextAlert('งบประมาณมากกว่าคาดการณ์')
    }
  }

  const calculateValidity = () => {
    let total_quarter1 = parseFloat(formState.section2.quarter.quarter1.month1) + parseFloat(formState.section2.quarter.quarter1.month2) + parseFloat(formState.section2.quarter.quarter1.month3)
    let total_quarter2 = parseFloat(formState.section2.quarter.quarter2.month1) + parseFloat(formState.section2.quarter.quarter2.month2) + parseFloat(formState.section2.quarter.quarter2.month3)
    let total_quarter3 = parseFloat(formState.section2.quarter.quarter3.month1) + parseFloat(formState.section2.quarter.quarter3.month2) + parseFloat(formState.section2.quarter.quarter3.month3)
    let total_quarter4 = parseFloat(formState.section2.quarter.quarter4.month1) + parseFloat(formState.section2.quarter.quarter4.month2) + parseFloat(formState.section2.quarter.quarter4.month3)

    const sum_total = total_quarter1 + total_quarter2 + total_quarter3 + total_quarter4

    // if(sum_total > parseFloat(formState.section2.budget)){
    //   setBudgetStatus(2)
    //   setIsShowAlert(true)
    //   setHeadTextAlert('แจ้งเตือน')
    //   setContentTextAlert('งบประมาณมากกว่าคาดการณ์')
    // } else if(sum_total < parseFloat(formState.section2.budget)){
    //   setBudgetStatus(1)
    //   setIsShowAlert(true)
    //   setHeadTextAlert('แจ้งเตือน')
    //   setContentTextAlert('งบประมาณน้อยกว่าคาดการณ์')
    // }else{
    //   handleUpdateForm();
    //   props.changeSectionHandle(value, false);
    // }

    setTempMask({
      ...tempMask,
      quarter1: {
        ...tempMask.quarter1,
        total: formattedValue(total_quarter1) + '',
        porportion: ((total_quarter1/sum_total) * 100.0) + ''
      },
      quarter2: {
        ...tempMask.quarter2,
        total: formattedValue(total_quarter2) + '',
        porportion: ((total_quarter2/sum_total) * 100.0) + ''
      },
      quarter3: {
        ...tempMask.quarter3,
        total: formattedValue(total_quarter3) + '',
        porportion: ((total_quarter3/sum_total) * 100.0) + ''
      },
      quarter4: {
        ...tempMask.quarter4,
        total: formattedValue(total_quarter4) + '',
        porportion: ((total_quarter4/sum_total) * 100.0) + ''
      }
    })

    dispatch(updateFormField({
      ...formState,
      section2: {
        ...formState.section2,
        quarter: {
          ...formState.section2.quarter,
          quarter1: {
            ...formState.section2.quarter.quarter1,
            total: total_quarter1,
            porportion: (total_quarter1/sum_total) * 100.0
          },
          quarter2: {
            ...formState.section2.quarter.quarter2,
            total: total_quarter2,
            porportion: (total_quarter2/sum_total) * 100.0
          },
          quarter3: {
            ...formState.section2.quarter.quarter3,
            total: total_quarter3,
            porportion: (total_quarter3/sum_total) * 100.0
          },
          quarter4: {
            ...formState.section2.quarter.quarter4,
            total: total_quarter4,
            porportion: (total_quarter4/sum_total) * 100.0
          }
        }
      }
    }))

  }

  const handleChangeField = (event: any) => {
    const { name, value } = event.target;

    dispatch(
      updateFormField({
        ...formState,
        section2: {
          ...formState.section2,
          [name]: value.replace(',', ''),
        },
      })
    );

    let sanitizedValue = value.replace(/[^0-9.]/g, '');
    let formattedValue = sanitizedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    setBudgetTemp(formattedValue)
    // setBudgetTemp(value)
  };

  const formatCurrency = (name: string) => {
    console.log(formState["section2"]["budget"], "sssss");
    
    let formattedValue = "";
    if (name == "budget") {
      formattedValue = Number(formState["section2"]["budget"]).toLocaleString(
        "en-US");
      setBudgetTemp(formattedValue)
    }
  };

  const handleCloseAlert = () => {
    setIsShowAlert(false)
    setTimeout(()=>{
      window.scrollTo({ top: 0, behavior: "smooth" });
    },300)
  }

  const handleUpdateForm = () => {
    dispatch(
      updateFormField({
        ...formState,
        section2: {
          ...formState.section2,
          quarter: formState.section2.quarter,
          stakeHolder_Group: formState.section2.stakeHolder_Group,
          suite_outside_policy: formState.section2.suite_outside_policy,
          budget: formState.section2.budget.replace(/,/g, ""),
        },
      })
    );
  };

  const handleChangeQuarter = (data: any) => {
    // console.log(data)
    // settableQuarterData(data)
  };

  const handleChangePolicySuite = (data: any) => {
    settablePolicySuiteData(data);
  };

  const handleChangeStakeHolder = (data: any) => {
    settableStakeHolderData(data);
  };

  const fetchMask = () => {
    setBudgetTemp(
      Number(formState.section2.budget).toLocaleString("en-US")
    );
  };

  const setStartBudget = (val: string) => {
    if(val == ''){
      return '0'
    }else{
      return formattedValue(parseFloat(val))
    }
  }

  useEffect(() => {
    fetchMask();
    setTempMask({
      ...tempMask,
      quarter1: {
        ...tempMask.quarter1,
        month1: setStartBudget(formState.section2.quarter.quarter1.month1) + '' ?? '0',
        month2: setStartBudget(formState.section2.quarter.quarter1.month2) + '' ?? '0',
        month3: setStartBudget(formState.section2.quarter.quarter1.month3) + '' ?? '0',
        total:  setStartBudget(formState.section2.quarter.quarter1.total) + '' ?? '0',
        porportion:  setStartBudget(formState.section2.quarter.quarter1.porportion) + '' ?? '0',
      },
      quarter2: {
        ...tempMask.quarter1,
        month1: setStartBudget(formState.section2.quarter.quarter2.month1) + '' ?? '0',
        month2: setStartBudget(formState.section2.quarter.quarter2.month2) + '' ?? '0',
        month3: setStartBudget(formState.section2.quarter.quarter2.month3) + '' ?? '0',
        total:  setStartBudget(formState.section2.quarter.quarter2.total) + '' ?? '0',
        porportion:  setStartBudget(formState.section2.quarter.quarter2.porportion) + '' ?? '0',
      },
      quarter3: {
        ...tempMask.quarter1,
        month1: setStartBudget(formState.section2.quarter.quarter3.month1) + '' ?? '0',
        month2: setStartBudget(formState.section2.quarter.quarter3.month2) + '' ?? '0',
        month3: setStartBudget(formState.section2.quarter.quarter3.month3) + '' ?? '0',
        total:  setStartBudget(formState.section2.quarter.quarter3.total) + '' ?? '0',
        porportion:  setStartBudget(formState.section2.quarter.quarter3.porportion) + '' ?? '0',
      },
      quarter4: {
        ...tempMask.quarter1,
        month1: setStartBudget(formState.section2.quarter.quarter4.month1) + '' ?? '0',
        month2: setStartBudget(formState.section2.quarter.quarter4.month2) + '' ?? '0',
        month3: setStartBudget(formState.section2.quarter.quarter4.month3) + '' ?? '0',
        total:  setStartBudget(formState.section2.quarter.quarter4.total) + '' ?? '0',
        porportion:  setStartBudget(formState.section2.quarter.quarter4.porportion) + '' ?? '0',
      }
    })
  }, []);

  useEffect(() => {
    let total_quarter1 = parseFloat(formState.section2.quarter.quarter1.month1) + parseFloat(formState.section2.quarter.quarter1.month2) + parseFloat(formState.section2.quarter.quarter1.month3)
    let total_quarter2 = parseFloat(formState.section2.quarter.quarter2.month1) + parseFloat(formState.section2.quarter.quarter2.month2) + parseFloat(formState.section2.quarter.quarter2.month3)
    let total_quarter3 = parseFloat(formState.section2.quarter.quarter3.month1) + parseFloat(formState.section2.quarter.quarter3.month2) + parseFloat(formState.section2.quarter.quarter3.month3)
    let total_quarter4 = parseFloat(formState.section2.quarter.quarter4.month1) + parseFloat(formState.section2.quarter.quarter4.month2) + parseFloat(formState.section2.quarter.quarter4.month3)

    const sum_total = total_quarter1 + total_quarter2 + total_quarter3 + total_quarter4

    if(sum_total > parseFloat(formState.section2.budget)){
      setBudgetStatus(2)
    } else if(sum_total < parseFloat(formState.section2.budget)){
      setBudgetStatus(1)
    }else{
      setBudgetStatus(0)
    }
  },[
    tempMask.quarter1.total,
    tempMask.quarter2.total,
    tempMask.quarter3.total,
    tempMask.quarter4.total,
    formState.section2.budget
  ])

  return (
    <>
<div className="d-flex form-group">
        <div className="form-field-label">
          <label>
          <i className="bi bi-info-circle information"></i> งบประมาณโครงการ <span style={{ color: "red" }}> *</span>
          </label>
        </div>
        <div className="d-flex flex-column form-field-fieldzone">
          <div className="d-flex">
            <div>
              <input onChange={(e) => handleChangeField(e)} name="budget" value={budgetTemp} type="text" className="form-control" id="exampleFormControlInput1" placeholder=""/>
            </div>
            <div style={{ marginTop: "10px", marginLeft: "10px" }}>บาท</div>
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
        <div className="d-flex flex-column form-field-fieldzone table-quarter-zone">
          <div>
            {validationState[0].isValid == false && (
              <div className="form-field-fieldzone invalid-text">
                <span style={{ color: "red" }}>
                  โปรดกรอกข้อมูล{validationState[0].alias} ให้ครบ
                </span>
              </div>
            )}
          </div>
          <div className="">
            <TableQuarterSummary
              onChangeQuarter={handleChangeQuarter}
              quarterSelect={quarterSelect}
              setQuarterSelect={handleQuarterSelect}
              tempMask={tempMask}
              setTempMask={handleSetTempMask}
            />
          </div>
        </div>
      </div>
      <div className="d-flex form-group">
        <div className="form-field-label">
          <label>
              รวม
          </label>
        </div>
        <div className="d-flex flex-column form-field-fieldzone">
          <div className="d-flex">
            <div>
              {/* <input onBlur={(e) => formatCurrency('budget')} onChange={(e) => handleChangeField(e)} name="budget" value={formState.section2.budget} type="text" className="form-control" id="exampleFormControlInput1" placeholder=""/> */}
              <input
                name="budget"
                disabled
                value={
                  formattedValue(
                  parseFloat(tempMask.quarter1.total.replaceAll(',','')) +
                  parseFloat(tempMask.quarter2.total.replaceAll(',','')) +
                  parseFloat(tempMask.quarter3.total.replaceAll(',','')) +  
                  parseFloat(tempMask.quarter4.total.replaceAll(',','')) 
                  )
                }
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder=""
              />
            </div>
            <div style={{ marginTop: "10px", marginLeft: "10px" }}>บาท</div>
            <div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex form-group">
        <div className="form-field-label">
        </div>
        <div className="d-flex flex-column form-field-fieldzone">
          <div className="d-flex">
            <div>
              {budgetStatus == 1 &&
                <div>
                  <span style={{ color: "red" }}>งบประมาณรวมน้อยกว่าที่กำหนด</span>
                </div>
              }
              {budgetStatus == 2 &&
                <div>
                  <span style={{ color: "red" }}>งบประมาณรวมมากกว่าที่กำหนด</span>
                </div>
                
              }
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex form-group">
        <div className="form-field-label">
          <label>
          <i className="bi bi-info-circle information"></i> ความสอดคล้องกับนโยบาย<span style={{ color: "red" }}> *</span> <br />{" "}
            (เลือกได้มากกว่า 1)
          </label>
        </div>
        <div className="d-flex flex-column form-field-fieldzone">
          <div>
            {validationState[2].isValid == false && (
              <div className="form-field-fieldzone invalid-text">
                <span style={{ color: "red" }}>
                  โปรดเลือก{validationState[2].alias} อย่างน้อย 1 ค่า
                </span>
              </div>
            )}
          </div>
          <div className="">
            <TablePolicySuite onChangePolicySuite={handleChangePolicySuite} />
          </div>
        </div>
      </div>
      <div className="d-flex form-group">
        <div className="form-field-label">
          <label>
          <i className="bi bi-info-circle information"></i> กลุ่มผู้มีส่วนได้ส่วนเสีย<span style={{ color: "red" }}> *</span>{" "}
            <br /> (เลือกได้มากกว่า 1)
          </label>
        </div>
        <div className="d-flex flex-column form-field-fieldzone">
          <div>
            {validationState[3].isValid == false && (
              <div className="form-field-fieldzone invalid-text">
                <span style={{ color: "red" }}>
                  โปรดเลือก{validationState[3].alias} อย่างน้อย 1 ค่า
                </span>
              </div>
            )}
          </div>
          <div className="">
            <TableStakeHolder onChangeStakeHolder={handleChangeStakeHolder} />
          </div>
        </div>
      </div>
      <div className="button-section">
        <button
          onClick={() => handleSection(3)}
          type="button"
          className="btn btn-primary"
        >
          ต่อไป <i className="bi bi-chevron-right"></i>
        </button>
        <button onClick={handleSaveDraft} type="button" className="btn btn-primary">
          <i className="bi bi-file-earmark"></i> บันทึกข้อมูลชั่วคราว{" "}
        </button>
        <button
          onClick={() => handleSection(1)}
          type="button"
          className="btn btn-primary"
        >
          <i className="bi bi-chevron-left"></i> ย้อนกลับ{" "}
        </button>
      </div>
      <AlertModal setShow={isShowAlert} handleClose={handleCloseAlert} headText={headTextAlert} contentText={contentTextAlert} />
    </>
  );
}
