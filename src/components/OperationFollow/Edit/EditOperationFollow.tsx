"use client";
import react, { useEffect, useState } from "react";
import "./edit-operation-follow.scss";
import { checkUserRoleService, editSubmit, paramMapService, rejectEdit, updateFormById } from "@/redux/OperationFollow/service";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { FormState } from "@/redux/OperationFollow/types";
import { RootState } from "@/redux/store";
import TableQuarterSummary from "./Table/EditPageTableQuarterSummary";
import EditTableStakeHolder from "./Table/EditTableStakeHolder";
import { initialState } from "./initial_state";
import TablePolicySuite from "./Table/EditPageTablePolicySuite";
import NewEditTablePolicySuite from "./Table/NewEditTablePolicySuite"
import { EditTableOperationArea } from "./Table/EditPageTableOperationArea";
import { EditTableProjectIndicator } from "./Table/EditTableProjectIndicator";
import { EditTableProjectTarget } from "./Table/EditPageTableProjectTarget";
import { OperationFollowTable } from "@/redux/OperationFollowTable/reducer-follow-table";
import CommentModal from "./Modal/CommentModal"
import { mainOutcomeService } from "@/redux/OperationFollow/Section3/service";
import { formatDataService, searchMainplanService, searchStrategicGroupService, updateFormService } from "@/redux/OperationFollow/EditOperationFollow/edit-operation-follow-service";
import { usePathname, useRouter } from "next/navigation";
import { useGetAllStrategyGroupQuery, useSearchBudgetActByIdMutation, useSearchStrategyGroupByIdQuery } from "@/redux/services/master-data";
import { getMainPlanService, getSrategicGroupService } from "@/redux/OperationFollow/Section1/service";
import { useGetProjectByIdQuery } from "@/redux/services/master-data";
import { useRejectServiceMutation } from "@/redux/services/operation-follow-api";


export default function EditOperationFollow() {
  const [isEditStatus, setIsEditStatus] = useState(false);
  const [formId, setFormId] = useState('0');
  const dispatch = useDispatch();
  const params = useParams();
  let id = typeof params?.id === "string" ? params?.id : '0';
  const [roleDebug, setRoleDebug] = useState('user');
  const formState: any[] = useSelector(
    (state: RootState) => state.operationFollowTable.data
  );
  const role = checkUserRoleService();
  const { push } = useRouter();

  // const [formData, setFormData] = useState<any>(initialState);
  const [formData, setFormData] = useState<any>(initialState);

  const [isOpenCommentModal, setOpenCommentModal] = useState(false);

  const [commentName,setCommentName] = useState('');

  const [commentSection, setCommentSection] = useState(0);

  const [isViewForm, setIsViewForm] = useState(false)

  const [sendRejectService] = useRejectServiceMutation()

  const [searchBudgetActById] = useSearchBudgetActByIdMutation()

  const handleOpenModal = (val: string, section: number) => {
    setCommentName(val)
    setCommentSection(section)
    setOpenCommentModal(true);
  }

  const handleCloseComment = () => {
    setOpenCommentModal(false)
  }

  const handleChangeFieldSection1 = (e: any) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      section1: {
        ...formData.section1,
        [name]: value,
      },
    });
  };

  const handleChangeFieldSection2 = (e: any) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      section2: {
        ...formData.section2,
        [name]: value,
      },
    });
  };

  const handleChangeFieldSection3 = (e: any) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      section3: {
        ...formData.section3,
        [name]: value,
      },
    });

    if (
      name == "objective1" ||
      name == "objective2" ||
      name == "objective3" ||
      name == "objective4"
    ) {
      setFormData({
        ...formData,
        section3: {
          ...formData.section3,
          project_objective: {
            ...formData.section3.project_objective,
            [name]: value,
          },
        },
      });
    } else {
      setFormData({
        ...formData,
        section3: {
          ...formData.section3,
          [name]: value,
        },
      });
    }
  };

  const handleChangeFieldSection4 = (e: any) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      section4: {
        ...formData.section4,
        [name]: value,
      },
    });
  };

  const handleSubmit = async () => {
    const formParam = await paramMapService(formData, -1)
    await updateFormService(formId, formParam)
    setIsEditStatus(false)
  };

  const handleRejectionEdit = () => {
    // rejectEdit(formId,dispatch, formData);
    sendRejectService(formId)
    alert('ส่งกลับแก้ไขแล้ว');
    push('/operation-follow')
  }

  const formattedValue = (value: string) => {
    const result = Number(value).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return result;
  };

  const updateProjectObjective = (e: any, index: number) => {
    const { name, value } = e.target;

    let updatedList = [...formData.section3.project_objective2]

    updatedList[index] = value

    setFormData({
      ...formData,
      section3: {
        ...formData.section3,
        [name]: updatedList,
      },
    })
  }

  const addProjectObjective = () => {
    let updatedList = [...formData.section3.project_objective2]
    updatedList.push('')
    setFormData({
      ...formData,
      section3: {
        ...formData.section3,
        project_objective2: updatedList,
      },
    })
  }

  const {data:OperationFollowData, isLoading, refetch: operationFollowRefetch} = useGetProjectByIdQuery({projectId: id})

  const [strategicGroupName, setStrategicGroupName] = useState('');
  const [strategicName, setStrategicName] = useState('');
  const [strategicPlanningName, setPlanningName] = useState('');
  const [budgetActName, setBudgetActName] = useState('')

  const searchStrategicGroup = async (id: string, strategicId: string) => {
    if(id != undefined){
      const response: any = await searchStrategicGroupService(id)
      const getStrategicGroupData = response.data
      setStrategicGroupName(String(getStrategicGroupData.strategyGroupTh))
      const overviewStrategyData = getStrategicGroupData.overviewStrategies.find((item: any) => item.overviewStrategyId === strategicId);
      setStrategicName(String(overviewStrategyData.overviewStrategyNameTh))
    }
  };

  const searchMainplan = async (id: string) => {
    if(id != undefined){
      const response: any = await searchMainplanService(id)
      const getMainPlanData = response.data
      setPlanningName(String(getMainPlanData.mainPlanNameTh))
    }
  };

  const searchBudgetActName = async (id: string) => {
    if(id != undefined){
      const response: any = await searchBudgetActById(id)
      const budgetActData = response.data
      setBudgetActName(String(budgetActData.budgetActName))
    }
  }

   
  useEffect(() => {
    let result = formatDataService(OperationFollowData)
    setFormData(result)
    setFormId(result.id)
    searchStrategicGroup(result.section1.strategic_goal,result.section1.strategic)
    searchMainplan(result.section1.planning)
    searchBudgetActName(result.section1.act_group)
  },[isLoading])

    return (
      <>
        <CommentModal setShow={isOpenCommentModal} formData={formData} setFormData={setFormData} closeModal={handleCloseComment} commentName={commentName} commentSection={commentSection}/>
        <div className="operationfollow-edit-wrapper" style={{ width: "100%" }}>
          <div className="upper-zone d-flex justify-content-spacebetween">
            <div className="header-text">
              <h3>ระบบข้อมูลแผนปฎิบัติการและการติดตามประเมินผล</h3>
              <h4>เพิ่มแผนสนับสนุนการดำเนินงานด้านการตลาด</h4>
            </div>
                      {role == 'user' &&
              <div className="mode-select d-flex">
                <div
                  onClick={() => setIsEditStatus(false)}
                  className={`mode-select-button ${isEditStatus ? "" : "active"}`}
                >
                  ดู
                </div>
                <div
                  onClick={() => setIsEditStatus(true)}
                  className={`mode-select-button ${isEditStatus ? "active" : ""}`}
                >
                  แก้ไข
                </div>
              </div>
            }
            <div className="button-zone d-flex">
              <div className={`p-2 ${isEditStatus ? "" : "hide"}`}>
                <button
                  onClick={handleSubmit}
                  className="btn btn-success add-button"
                >
                  ยืนยันการแก้ไข
                </button>
              </div>
              { role == 'admin' &&
                <div className={`p-2`}>
                  <button
                    onClick={handleRejectionEdit}
                    className="btn btn-secondary"
                  >
                    ส่งกลับแก้ไข
                  </button>
                </div>
              }
              <div className="p-2">
                <button onClick={() => {push('/operation-follow')}} className="btn btn-primary add-button">ย้อนกลับ</button>
              </div>
            </div>
          </div>
          <div className="breadcrumb-zone">
            <div className="breadcrumb-text">
              นำเข้าข้อมูล {">"}{" "}
              ข้อมูลโครงการของการสนับสนุนการดำเนินงานด้านการตลาด {">"}{" "}
              งานระบบสารสนเทศองค์กร {">"} โครงการพัฒนาระบบแพลตฟอร์มกลาง ททท.
              (Single Sign on)
            </div>
          </div>
          <div className="form-zone">
            <div className="d-flex p-2">
              <div className="form-label">
                <label>
                  ชื่อโครงการ <span className="alterisk">*</span>
                </label>
              </div>
              <div className="d-flex form-field">
                <input
                    onChange={(e) => handleChangeFieldSection1(e)}
                    name="project_name"
                    value={formData.section1.project_name}
                    // disabled={formData.section1.comment.project_name == '' ? true : !isEditStatus}
                    disabled={!isEditStatus}
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder=""
                  />
                  {role == 'admin' && <i onClick={() => handleOpenModal('project_name', 1)} className="bi bi-pencil-fill comment-icon"></i>}
                  {role == 'user' && <i onClick={() => handleOpenModal('project_name', 1)} className={`bi bi-exclamation-circle-fill commentex-icon ${formData.section1.comment.project_name == '' ? 'hide' : ''}`} ></i>}
              </div>
            </div>
            <div className="d-flex p-2">
              <div className="form-label">
                <label>ปีงบประมาณ </label>
              </div>
              <div className="form-field">2566</div>
            </div>
            <div className="d-flex p-2">
              <div className="form-label">
                <label>
                  ชื่อแผน <span className="alterisk">*</span>
                </label>
              </div>
              <div className="form-field">สนับสนุนการดำเนินงานด้านการตลาด</div>
            </div>
            <div className="d-flex p-2">
              <div className="form-label">
                <label>
                วัตถุประสงค์เชิงยุทธศาสตร์ (SO) <span className="alterisk">*</span>
                </label>
              </div>
              <div className="form-field d-flex">
                <input
                  onChange={(e) => handleChangeFieldSection1(e)}
                  name="strategic_goal"
                  value={strategicGroupName}
                  // disabled={formData.section1.comment.strategic_goal == '' ? true : !isEditStatus}
                  disabled={!isEditStatus}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                />
                {role == 'admin' && <i onClick={() => handleOpenModal('strategic_goal', 1)} className="bi bi-pencil-fill comment-icon"></i>}
                {role == 'user' && <i onClick={() => handleOpenModal('strategic_goal', 1)} className={`bi bi-exclamation-circle-fill commentex-icon ${formData.section1.comment.strategic_goal == '' ? 'hide' : ''}`} ></i>}
              </div>
            </div>
            <div className="d-flex p-2">
              <div className="form-label">
                <label>
                  กลยุทธ์ <span className="alterisk">*</span>
                </label>
              </div>
              <div className="form-field d-flex">
                <input
                  type="text"
                  onChange={(e) => handleChangeFieldSection1(e)}
                  name="strategic"
                  value={strategicName}
                  // disabled={formData.section1.comment.strategic == '' ? true : !isEditStatus}
                  disabled={!isEditStatus}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                />
                {role == 'admin' && <i onClick={() => handleOpenModal('strategic', 1)} className="bi bi-pencil-fill comment-icon"></i>}
                {role == 'user' && <i onClick={() => handleOpenModal('strategic', 1)} className={`bi bi-exclamation-circle-fill commentex-icon ${formData.section1.comment.strategic == '' ? 'hide' : ''}`} ></i>}
              </div>
            </div>
            <div className="d-flex p-2">
              <div className="form-label">
                <label>
                  แผนงาน <span className="alterisk">*</span>
                </label>
              </div>
              <div className="form-field">
                <input
                  disabled={true}
                  value={strategicPlanningName}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                />
              </div>
            </div>
            <div className="d-flex p-2">
              <div className="form-label">
                <label>
                  หมวด พ.ร.บ. งบประมาณ  <span className="alterisk">*</span>
                </label>
              </div>
              <div className="form-field">
                <input
                  disabled={true}
                  value={budgetActName}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                />
              </div>
            </div>
            <div className="d-flex p-2">
              <div className="form-label">
                <label>
                  โครงการหลัก <span className="alterisk">*</span>
                </label>
              </div>
              <div className="form-field">
                <input
                  disabled={!isEditStatus}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                />
              </div>
            </div>
            <div className="d-flex p-2">
              <div className="form-label">
                <label>
                  ประเภทโครงการ <span className="alterisk">*</span>
                </label>
              </div>
              <div className="form-field d-flex">
                <input
                  onChange={(e) => handleChangeFieldSection1(e)}
                  name="project_type"
                  value={formData.section1.project_type == '00' ?
                    'แผนบริหารจัดการองค์กร' :
                    formData.section1.project_type == '01' ?
                    'แผนบริหารจัดการในประเทศ' :
                    formData.section1.project_type == '02' ?
                    'แผนบริหารจัดการต่างประเทศ' :
                    ''
                  }
                  // disabled={formData.section1.comment.project_type == '' ? true : !isEditStatus}
                  disabled={!isEditStatus}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                />
                {role == 'admin' && <i onClick={() => handleOpenModal('project_type', 1)} className="bi bi-pencil-fill comment-icon"></i>}
                {role == 'user' && <i onClick={() => handleOpenModal('project_type', 1)} className={`bi bi-exclamation-circle-fill commentex-icon ${formData.section1.comment.project_type == '' ? 'hide' : ''}`} ></i>}
              </div>
            </div>
            <div className="d-flex p-2">
              <div className="form-label">
                <label>
                  ลำดับที่โครงการ <span className="alterisk">*</span>
                </label>
              </div>
              <div className="form-field">
                <input
                  disabled={true}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                />
              </div>
            </div>
            <div className="d-flex p-2">
              <div className="form-label">
                <label>
                  แหล่งงบประมาณ  <span className="alterisk">*</span>
                </label>
              </div>
              <div className="form-field d-flex">
                <input
                  onChange={(e) => handleChangeFieldSection1(e)}
                  name="budgetSource"
                  value={formData.section1.budgetSource}
                  // disabled={formData.section1.comment.budgetSource == '' ? true : !isEditStatus}
                  disabled={!isEditStatus}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                />
                {role == 'admin' && <i onClick={() => handleOpenModal('budgetSource', 1)} className="bi bi-pencil-fill comment-icon"></i>}
                {role == 'user' && <i onClick={() => handleOpenModal('budgetSource', 1)} className={`bi bi-exclamation-circle-fill commentex-icon ${formData.section1.comment.budgetSource == '' ? 'hide' : ''}`} ></i>}
              </div>
            </div>
            <div className="d-flex p-2">
              <div className="form-label">
                <label>
                  รายการค่าใช้จ่าย <span className="alterisk">*</span>
                </label>
              </div>
              <div className="form-field">
                <input
                  disabled={true}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                />
              </div>
            </div>
            <div className="d-flex p-2">
              <div className="form-label">
                <label>
                  งบประมาณโครงการแผน (บาท) <span className="alterisk">*</span>
                </label>
              </div>
              <div className="form-field d-flex">
                <input
                  onChange={(e) => handleChangeFieldSection2(e)}
                  name="budget"
                  value={
                    isEditStatus
                      ? formData.section2.budget
                      : formattedValue(formData.section2.budget)
                  }
                  // disabled={formData.section2.comment.budget == '' ? true : !isEditStatus}
                  disabled={!isEditStatus}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                />
                {role == 'admin' && <i onClick={() => handleOpenModal('budget', 2)} className="bi bi-pencil-fill comment-icon"></i>}
                {role == 'user' && <i onClick={() => handleOpenModal('budget', 2)} className={`bi bi-exclamation-circle-fill commentex-icon ${formData.section2.comment.budget == '' ? 'hide' : ''}`} ></i>}
              </div>
            </div>
            <div className="table-summary-wrapper">
              <TableQuarterSummary
                formData={formData}
                setFormData={setFormData}
                // isEditStatus={formData.section2.comment.quarter == '' ? false : isEditStatus}
                isEditStatus={isEditStatus}
                handleOpenModal={handleOpenModal}
              />
            </div>
            <div className="table-policy-suite-wrapper">
              <NewEditTablePolicySuite formData={formData} setFormData={setFormData} handleOpenModal={handleOpenModal} 
              // isEditStatus={formData.section2.comment.suite_outside_policy == '' ? false : isEditStatus}
              isEditStatus={isEditStatus}
              />
            </div>
            <div style={{marginBottom:20}} className="table-policy-suite-wrapper">
              <EditTableStakeHolder
                formData={formData}
                setFormData={setFormData}
                // isEditStatus={formData.section2.comment.quarter == '' ? false : isEditStatus}
                isEditStatus={isEditStatus}
                handleOpenModal={handleOpenModal}
              />
            </div>
            <div className="d-flex p-2">
              <div className="form-label">
                <label>
                  หลักการและเหตุผล <span className="alterisk">*</span>
                </label>
              </div>
              <div className="form-field d-flex">
                <textarea
                  // disabled={formData.section3.comment.principal_reason == '' ? true : !isEditStatus}
                  disabled={!isEditStatus}
                  name="principal_reason"
                  value={formData.section3.principal_reason}
                  onChange={(e) => handleChangeFieldSection3(e)}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={10}
                ></textarea>
                {role == 'admin' && <i onClick={() => handleOpenModal('principal_reason', 3)} className="bi bi-pencil-fill comment-icon"></i>}
                {role == 'user' && <i onClick={() => handleOpenModal('principal_reason', 3)} className={`bi bi-exclamation-circle-fill commentex-icon ${formData.section3.comment.principal_reason == '' ? 'hide' : ''}`} ></i>}
              </div>
            </div>
            {formData.section3.project_objective2.map((data: any, index: number) => (
              <div className="d-flex p-2">
                <div className="form-label">
                  {index == 0 &&
                    <label>
                    วัตถุประสงค์โครงการ <span className="alterisk">*</span>
                    </label>
                  }
                </div>
                <div className="form-field">
                  <textarea
                    onChange={(e) => updateProjectObjective(e,index)}
                    // disabled={formData.section3.comment.project_objective2 == '' ? true : !isEditStatus}
                    disabled={!isEditStatus}
                    value={formData.section3.project_objective2[index]}
                    name="project_objective2"
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={10}
                  ></textarea>
                </div>
              </div>
            ))
            }
            {/* {formData.section3.comment.project_objective2 == '' ? false : isEditStatus && */}
            {isEditStatus &&
              <div className="d-flex p-2">
                <div className="form-label">
                </div>
                <div className="form-field">
                  <button onClick={addProjectObjective} className="btn btn-primary">เพิ่ม</button>
                </div>
              </div>
            }
            <div className="table-summary-wrapper">
              <EditTableOperationArea
                formData={formData}
                setFormData={setFormData}
                // isEditStatus={formData.section3.comment.list_operation_area == '' ? false : isEditStatus}
                isEditStatus={isEditStatus}
                handleOpenModal={handleOpenModal}
              />
            </div>
            <div className="table-summary-wrapper table-project-indicator activities">
              <EditTableProjectIndicator
                formData={formData}
                setFormData={setFormData}
                // isEditStatus={formData.section3.comment.project_outcome == '' ? false : isEditStatus}
                isEditStatus={isEditStatus}
                handleOpenModal={handleOpenModal}
              />
            </div>
            <div className="table-project-target-wrapper">
              <EditTableProjectTarget
                formData={formData}
                setFormData={setFormData}
                // isEditStatus={formData.section3.comment.project_target == '' ? false : isEditStatus}
                isEditStatus={isEditStatus}
                handleOpenModal={handleOpenModal}
              />
            </div>
            <div className="d-flex p-2">
              <div className="form-label">
                <label>
                  วันเริ่มโครงการ - วันสิ้นสุดโครงการ
                  <span className="alterisk">*</span>
                </label>
              </div>
              <div className="form-field">
                <div className="d-flex flex-column form-field-fieldzone">
                  <div className="d-flex">
                    <input
                      onChange={(e) => handleChangeFieldSection4(e)}
                      // disabled={formData.section4.comment.project_start == '' ? true : !isEditStatus}
                      disabled={!isEditStatus}
                      name="project_start"
                      value={formData.section4.project_start}
                      type="date"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder=""
                      style={{
                        width: "40%",
                        float: "left",
                        marginRight: "15px",
                      }}
                    />
                    {role == 'admin' && <i onClick={() => handleOpenModal('project_start', 4)} className="bi bi-pencil-fill comment-icon" style={{left:'-7px'}}></i>}
                    {role == 'user' && <i onClick={() => handleOpenModal('project_start', 4)} className={`bi bi-exclamation-circle-fill commentex-icon ${formData.section4.comment.project_start == '' ? 'hide' : ''}`} style={{left:'-7px'}}></i>}
                    <input
                      onChange={(e) => handleChangeFieldSection4(e)}
                      // disabled={formData.section4.comment.project_end == '' ? true : !isEditStatus}
                      disabled={!isEditStatus}
                      name="project_end"
                      value={formData.section4.project_end}
                      type="date"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder=""
                      style={{
                        width: "40%",
                        float: 'left'
                      }}
                    />
                    <span>
                      {role == 'admin' && <i onClick={() => handleOpenModal('project_end', 4)} className="bi bi-pencil-fill comment-icon"></i>}
                      {role == 'user' && <i onClick={() => handleOpenModal('project_end', 4)} className={`bi bi-exclamation-circle-fill commentex-icon ${formData.section4.comment.project_end == '' ? 'hide' : ''}`} ></i>}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex p-2">
              <div className="form-label">
                <label>
                  ระบุความเสี่ยงโครงการ (เฉพาะ​ Flagship​ project/ ถ้าไม่ใช่​
                  Flagship​ Project ให้ใส่เครื่องหมาย{" "}
                  <span className="alterisk">*</span>
                </label>
              </div>
              <div className="form-field d-flex">
                <textarea
                  // disabled={formData.section4.comment.flagship_risk == '' ? true : !isEditStatus}
                  disabled={!isEditStatus}
                  onChange={(e) => handleChangeFieldSection4(e)}
                  value={formData.section4.flagship_risk}
                  name="flagship_risk"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={10}
                ></textarea>
                {role == 'admin' && <i onClick={() => handleOpenModal('flagship_risk', 4)} className="bi bi-pencil-fill comment-icon"></i>}
                {role == 'user' && <i onClick={() => handleOpenModal('flagship_risk', 4)} className={`bi bi-exclamation-circle-fill commentex-icon ${formData.section4.comment.flagship_risk == '' ? 'hide' : ''}`} ></i>}
              </div>
            </div>
            <div className="d-flex p-2">
              <div className="form-label">
                <label>
                  มาตรการบริหารความเสี่ยง <span className="alterisk">*</span>
                </label>
              </div>
              <div className="form-field d-flex">
                <textarea
                  // disabled={formData.section4.comment.risk_prevention == '' ? true : !isEditStatus}
                  disabled={!isEditStatus}
                  onChange={(e) => handleChangeFieldSection4(e)}
                  value={formData.section4.risk_prevention}
                  name="risk_prevention"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={10}
                ></textarea>
                {role == 'admin' && <i onClick={() => handleOpenModal('risk_prevention', 4)} className="bi bi-pencil-fill comment-icon"></i>}
                {role == 'user' && <i onClick={() => handleOpenModal('risk_prevention', 4)} className={`bi bi-exclamation-circle-fill commentex-icon ${formData.section4.comment.flagship_risk == '' ? 'hide' : ''}`} ></i>}
              </div>
            </div>
            <div className="d-flex p-2">
              <div className="form-label">
                <label>
                  ประโยชน์ที่คาดว่าจะได้รับ <span className="alterisk">*</span>
                </label>
              </div>
              <div className="form-field d-flex">
                <textarea
                  // disabled={formData.section4.comment.benefit == '' ? true : !isEditStatus}
                  disabled={!isEditStatus}
                  onChange={(e) => handleChangeFieldSection4(e)}
                  value={formData.section4.benefit}
                  name="benefit"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={10}
                ></textarea>
                {role == 'admin' && <i onClick={() => handleOpenModal('benefit', 4)} className="bi bi-pencil-fill comment-icon"></i>}
                {role == 'user' && <i onClick={() => handleOpenModal('benefit', 4)} className={`bi bi-exclamation-circle-fill commentex-icon ${formData.section4.comment.benefit == '' ? 'hide' : ''}`} ></i>}
              </div>
            </div>
            <div className="d-flex p-2">
              <div className="form-label">
                <label>
                  ปัญหา/อุปสรรค การดำเนินงานโครงการ{" "}
                  <span className="alterisk">*</span>
                </label>
              </div>
              <div className="form-field">
                <textarea
                  disabled={true}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={10}
                ></textarea>
              </div>
            </div>
            <div className="d-flex p-2">
              <div className="form-label">
                <label>
                  ข้อเสนอแนะ/ปรับปรุง การดำเนินงานโครงการ{" "}
                  <span className="alterisk">*</span>
                </label>
              </div>
              <div className="form-field">
                <textarea
                  disabled={true}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={10}
                ></textarea>
              </div>
            </div>
            <div className="file-add-wrapper">
              <div
                className="outside-compatable-header right-section-table-header"
                style={{ textAlign: "center" }}
              >
                เอกสารแนบ
              </div>
              <div className="outside-content justify-content-center">
                <div className="content-header d-flex justify-content-center">
                  <div className="p-2 flex-row upload-font-size">ลำดับที่</div>
                  <div className="p-2 flex-row upload-font-size">ดาวน์โหลด</div>
                  <div className="p-2 flex-row upload-font-size">ชื่อกิจกรรม</div>
                  <div className="p-2 flex-row upload-font-size">
                    หัวข้อผลการดำเนินงาน
                  </div>
                  <div className="p-2 flex-row upload-font-size">ชื่อเอกสาร</div>
                  <div className="p-2 flex-row upload-font-size">ขนาด</div>
                  <div className="p-2 flex-row upload-font-size">วันอัพโหลด</div>
                </div>
                <div className="outside-content-row d-flex  justify-content-center">
                  <div
                    style={{
                      marginTop: "5px",
                      marginBottom: "15px",
                    }}
                  >
                    <input
                      disabled={!isEditStatus}
                      type="file"
                      name="file"
                      style={{
                        position: "relative",
                        left: "29px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="edit-date-zone">
              วันที่แก้ไขข้อมูลล่าสุด XX/XX/XXXX เวลา xx:xx
            </div>
            <div className="button-zone d-flex justify-content-center">
              <div className="p-2">
                <button className="btn btn-primary add-button">รายงานผล</button>
              </div>
              <div className="p-2">
                <button className="btn btn-primary add-button">
                  เรียกดูรายงาน (View Report)
                </button>
              </div>
              <div className={`p-2 ${isEditStatus ? "" : "hide"}`}>
                <button
                  onClick={handleSubmit}
                  className="btn btn-success add-button"
                >
                  ยืนยันการแก้ไข
                </button>
              </div>
              { role == 'admin' &&
                <div className={`p-2`}>
                  <button
                    onClick={handleRejectionEdit}
                    className="btn btn-secondary"
                  >
                    ส่งกลับแก้ไข
                  </button>
                </div>
              }
              <div className="p-2">
                <button onClick={() => {push('/operation-follow')}} className="btn btn-primary add-button">ย้อนกลับ</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );

}
