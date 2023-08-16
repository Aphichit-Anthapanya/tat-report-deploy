"use client";

import { useEffect, useState } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import "./operation-follow.scss";
import TableOperationArea from "./Table/TableOperationArea";
import TableProductAndService from "./Table/TableProductAndService";
import TableProjectIndicator from "./Table/TableProjectIndicator";
import TableGroupProjectGoal from "./Table/TableGroupProjectGoal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { updateFormField, resetForm } from "@/redux/OperationFollow/reducer";
import { fetchSection3dataService } from "@/redux/OperationFollow/Section3/service";
import { checkValidity } from "./Validation/section3";
import { addProjectObjectiveService, removeProjectObjectiveService, updateProjectObjective2Service } from "@/redux/OperationFollow/Section2/service";
import { paramMapService, saveDraftForm } from "@/redux/OperationFollow/service";
import AlertModal from "./Table/AlertModal/AlertModal";
import { createOperationFormService, updateOperationFormService } from "@/redux/services/operation-follow-api";

interface Section3Props {
  changeSectionHandle: (value: number, isBubble: boolean) => void;
  setIsLoading: (val: boolean) => void
}

export default function Section3(props: Section3Props) {
  const formState: any = useSelector(
    (state: RootState) => state.operationFollowForm
  );
  const dispatch = useDispatch();
  let id = '0';
  const params = useParams();
  const router = useRouter();
  let mode = typeof params?.mode === "string" ? parseInt(params?.mode) : 0;

  const handleSaveDraft = async () => {
    props.setIsLoading(true)
    const formInfo:any = await paramMapService(formState, 3)

    if(formState.id == '0'){
      await createOperationFormService({...formInfo, formIndex: 3})
    }else{
      await updateOperationFormService(formState.id, { ...formInfo, formIndex: 3})
    }
    props.setIsLoading(false)
    setIsShowAlert(true)
    setHeadTextAlert('แจ้งเตือน')
    setContentTextAlert('บันทึกข้อมูลชั่วคราว')
    setTimeout(() => {
      router.push("/operation-follow");
    }, 2000);
  }

  const [validationState, setValidationState] = useState([
    {
      name: "principal_reason",
      alias: "งบประมาณโครงการ",
      isValid: true,
    },
    {
      name: "objective",
      alias: "วัตถุประสงค์โครงการ",
      isValid: true,
    },
    {
      name: "operationArea",
      alias: "พื้นที่ดำเนินโครงการ",
      isValid: true,
    },
    {
      name: "project_indicator",
      alias: "ตัวชี้วัดระดับโครงการ",
      isValid: true,
    },
    {
      name: "project_outcome_field",
      alias: "ลำดับตัวชี้วัดระดับโครงการ (outcome)",
      isValid: true,
    },
    {
      name: "group_project_goal",
      alias: "กลุ่มเป้าหมายระดับโครงการ",
      isValid: true,
    },
  ]);

  const [isShowAlert, setIsShowAlert] = useState(false);
  const [headTextAlert, setHeadTextAlert] = useState('');
  const [contentTextAlert, setContentTextAlert] = useState('');

  const [tableOperationArea, setTableOperationArea] = useState([]);

  const [tableProjectIndicator, setTableProjectIndicator] = useState([]);

  const [tableGroupProjectGoal, setTableGroupProjectGoal] = useState([]);

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
      //handleUpdateForm();
      let formInfo = await paramMapService(formState, 3)
      updateOperationFormService(formState.id,formInfo)
      props.changeSectionHandle(value, false);
    }
    props.setIsLoading(false)
  };

  const handleCloseAlert = () => {
    setIsShowAlert(false)
    setTimeout(()=>{
      window.scrollTo({ top: 0, behavior: "smooth" });
    },300)
  }

  const handleTableOperationArea = (data: any) => {
    setTableOperationArea(data);
  };

  const handleTableProjectIndicator = (data: any) => {
    setTableProjectIndicator(data);
  };

  const handleTableGroupProjectGoal = (data: any) => {
    setTableGroupProjectGoal(data);
  };

  const handleUpdateForm = () => {
    dispatch(
      updateFormField({
        ...formState,
        section3: {
          ...formState.section3,
          principal_reason: formState?.section3.principal_reason,
          project_objective: {
            objective1: formState?.section3.project_objective.objective1,
            objective2: formState?.section3.project_objective.objective2,
            objective3: formState?.section3.project_objective.objective3,
            objective4: formState?.section3.project_objective.objective4,
          },
          list_operation_area: formState?.section3.list_operation_area,
          project_outcome: formState?.section3.project_outcome,
          project_outcome_field: formState?.section3.project_outcome_field,
          project_target: formState?.section3.project_target,
        },
      })
    );
  };

  const handleChangeField = (event: any) => {
    const { name, value } = event.target;
    if(name == "principal_reason" && value.length > 4000){
      alert("จำนวนตัวอักษรเกิน 4000 ตัวอักษร");
      return false;
    }
    console.log("handleChangeField: name, value",name, value)
    dispatch(
      updateFormField({
        ...formState,
        section3: {
          ...formState.section3,
          [name]: value,
        },
      })
    );
  };

  const handleChangeFieldObjective = (event: any, index: number) => {
    const { id, value } = event.target;
    if(id == ("project_obejective2_"+index) && value.length > 4000){
      alert("จำนวนตัวอักษรเกิน 4000 ตัวอักษร");
      return false;
    }
    updateProjectObjective2Service(dispatch,index,value)

  }

  const handleAddObjective = () => {
    addProjectObjectiveService(dispatch)
  }

  const handleRemoveObjective = () => {
    removeProjectObjectiveService(dispatch)
  }

  return (
    <>
      <div className="d-flex form-group">
        <div className="form-field-label">
          <label>
            <i className="bi bi-info-circle information"></i> หลักการและเหตุผล<span style={{ color: "red" }}> *</span>
          </label>
        </div>
        <div className="d-flex flex-column form-field-fieldzone">
          <div className="">
            <textarea
              onChange={(e) => handleChangeField(e)}
              value={formState?.section3.principal_reason}
              name="principal_reason"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={2}
            ></textarea>
            <div className="text-area-control">
                จำนวนตัวอักษรไม่เกิน 4,000 คำ{" "}
                {formState?.section3.principal_reason?.length}/4000
            </div>
            {formState?.section3.principal_reason?.length >= 4000 && (
              <div className="invalid-text">
                <span style={{ color: "red" }}>
                  ครบจำนวน 4,000 ตัวอักษร
                </span>
              </div>
            )}          
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
      {formState?.section3.project_objective2.map((data: any, index: number) => (
        <div className="d-flex form-group">
          <div className="form-field-label">
            {index == 0 &&
              <label style={{marginRight: 11}}>
                <i className="bi bi-info-circle information"></i> วัตถุประสงค์โครงการ<span style={{ color: "red" }}> *</span>
              </label>
            }
          </div>
          <div style={{ position: 'relative'}} className="d-flex flex-column form-field-fieldzone">
            <span className="objective-number">{index + 1}.</span>
            <div className="">
              <textarea
                onChange={(e) => handleChangeFieldObjective(e, index)}
                value={formState?.section3.project_objective2[index]}
                name="project_obejective2"
                className="form-control"
                id={"project_obejective2_"+index}
                rows={2}
              ></textarea>
              { index > 2 &&
                <i
                onClick={handleRemoveObjective}
                style={{ color: "red", cursor: "pointer", float: 'left', marginRight:'6px' }}
                className="bi bi-trash-fill"
                ></i>
              }
              <div className="text-area-control">
                จำนวนตัวอักษรไม่เกิน 4,000 คำ{" "}
                {formState?.section3.project_objective2[index].length}/4000
              </div>
              {formState?.section3.project_objective2[index].length >= 4000 && (
              <div className="invalid-text">
                <span style={{ color: "red" }}>
                  ครบจำนวน 4,000 ตัวอักษร
                </span>
              </div>
              )}
            </div>
          </div>
        </div>
      ))}
      <div className="d-flex form-group">
        <div className="form-field-label"></div>
        <div className="form-field-fieldzone">
            <button onClick={handleAddObjective} className="btn btn-primary">เพิ่ม</button>
        </div>
      </div>
      <div className="d-flex form-group">
        <div className="form-field-label">
          <label>
            <i className="bi bi-info-circle information"></i> พื้นที่ดำเนินโครงการ<span style={{ color: "red" }}> *</span>
          </label>
        </div>
        <div className="d-flex flex-column form-field-fieldzone">
          <div className="">
            <TableProductAndService />
          </div>
          <div>
            {/* {validationState[2].isValid == false && (
              <div className="form-field-fieldzone invalid-text">
                <span style={{ color: "red" }}>
                  โปรดกรอกข้อมูล{validationState[2].alias}
                </span>
              </div>
            )} */}
          </div>
        </div>
      </div>
      <div className="d-flex form-group">
        <div className="form-field-label">
          <label>
            <i className="bi bi-info-circle information"></i> พื้นที่ดำเนินโครงการ<span style={{ color: "red" }}> *</span>
          </label>
        </div>
        <div className="d-flex flex-column form-field-fieldzone">
          <div className="">
            <TableOperationArea
              onChangeTableOperationArea={handleTableOperationArea} modeSelect={mode + ''}
            />
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
            <i className="bi bi-info-circle information"></i> ตัวชี้วัดระดับโครงการ<span style={{ color: "red" }}> *</span>
          </label>
        </div>
        <div className="d-flex flex-column form-field-fieldzone">
          <div className="">
            <TableProjectIndicator
              onChangeTableProjectIndicator={handleTableProjectIndicator}
            />
          </div>
          <div>
            {validationState[3].isValid == false && (
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
            <i className="bi bi-info-circle information"></i> กลุ่มเป้าหมายระดับโครงการ<span style={{ color: "red" }}> *</span>
          </label>
        </div>
        <div className="d-flex flex-column form-field-fieldzone">
          <div className="">
            <TableGroupProjectGoal
              onChangeTableGroupProjectGoal={handleTableGroupProjectGoal}
            />
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
      <div className="button-section">
        <button
          onClick={() => handleSection(4)}
          type="button"
          className="btn btn-primary"
        >
          ต่อไป <i className="bi bi-chevron-right"></i>
        </button>
        <button onClick={handleSaveDraft} type="button" className="btn btn-primary">
          <i className="bi bi-file-earmark"></i> บันทึกข้อมูลชั่วคราว{" "}
        </button>
        <button
          onClick={() => handleSection(2)}
          type="button"
          className="btn btn-primary"
        >
          <i className="bi bi-chevron-left"></i>ย้อนกลับ{" "}
        </button>
      </div>
      <AlertModal setShow={isShowAlert} handleClose={handleCloseAlert} headText={headTextAlert} contentText={contentTextAlert} />
    </>
  );
}
