"use client";

import { useEffect, useState } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import "./operation-follow.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { updateFormField, resetForm } from "@/redux/OperationFollow/reducer";
import { fetchSection4dataService } from "@/redux/OperationFollow/Section4/service";
import { checkValidity } from "./Validation/section4";
import { paramMapService, saveDraftForm } from "@/redux/OperationFollow/service";
import AlertModal from "./Table/AlertModal/AlertModal";
import { createOperationFormService, updateOperationFormService } from "@/redux/services/operation-follow-api";
interface Section4Props {
  changeSectionHandle: (value: number, isBubble: boolean) => void;
  setIsLoading: (val: boolean) => void
}

export default function Section4(props: Section4Props) {
  const formState = useSelector(
    (state: RootState) => state.operationFollowForm
  );
  const dispatch = useDispatch();
  let id = '0';
  const router = useRouter();
  const params = useParams();
  const gregorianYear = parseInt(formState.section1.yearBudget, 10) - 543;
  const [validationState, setValidationState] = useState<any[]>([
    {
      name: "project_date",
      alias: "วันที่เริ่มต้นโครงการ - วันที่สิ้นสุดโครงการ",
      isValid: true,
    },
    {
      name: "flagship_risk",
      alias: "ระบุความเสี่ยงโครงการ",
      isValid: true,
    },
    {
      name: "risk_prevention",
      alias: "มาตรการบริหารความเสี่ยง",
      isValid: true,
    },
    {
      name: "benefit",
      alias: "ประโยชน์ที่คาดว่าจะได้รับ",
      isValid: true,
    },
  ]);

  const [isShowAlert, setIsShowAlert] = useState(false);
  const [headTextAlert, setHeadTextAlert] = useState("");
  const [contentTextAlert, setContentTextAlert] = useState("");

  const handleCloseAlert = () => {
    setIsShowAlert(false);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 300);
  };

  const handleSaveDraft = async () => {
    props.setIsLoading(true)
    const formInfo = await paramMapService(formState, 4)

    if(formState.id == '0'){
      await createOperationFormService({...formInfo, formIndex: 4})
    }else{
      await updateOperationFormService(formState.id, { ...formInfo, formIndex: 4})
    }
    props.setIsLoading(false)
    setIsShowAlert(true);
    setHeadTextAlert("แจ้งเตือน");
    setContentTextAlert("บันทึกข้อมูลชั่วคราว");
    setTimeout(() => {
      router.push("/operation-follow");
    }, 2000);
  };

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

      let formInfo = await paramMapService(formState, 4)
      updateOperationFormService(formState.id,formInfo)

      id = params?.id ?? '';
      if (id != '0') {
        router.push("/operation-follow/add-activities/" + id);
      } else {
        router.push("/operation-follow/add-activities/0");
      }
    }
    props.setIsLoading(false)
  };

  const handleChangeField = (event: any) => {
    const { name, value } = event.target;

    if(name == "benefit" && value.length > 4000){
      alert("จำนวนตัวอักษรเกิน 4000 ตัวอักษร");
      return false;
    }

    dispatch(
      updateFormField({
        ...formState,
        section4: {
          ...formState.section4,
          [name]: value,
        },
      })
    );
  };

  const handleUpdateForm = () => {
    dispatch(
      updateFormField({
        ...formState,
        section4: {
          project_start: formState.section4.project_start,
          project_end: formState.section4.project_end,
          flagship_risk: formState.section4.flagship_risk,
          risk_prevention: formState.section4.risk_prevention,
          benefit: formState.section4.benefit,
        },
      })
    );
  };

  return (
    <>
      <div className="d-flex form-group">
        <div className="form-field-label">
          <label>
            <i className="bi bi-info-circle information"></i>{" "}
            วันที่เริ่มต้นโครงการ - วันที่สิ้นสุดโครงการ
            <span style={{ color: "red" }}> *</span>
          </label>
        </div>
        <div className="d-flex flex-column form-field-fieldzone">
          <div className="">
            <input
              onChange={(e) => handleChangeField(e)}
              value={formState.section4.project_start}
              name="project_start"
              type="date"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=""
              style={{
                width: "40%",
                float: "left",
                marginRight: "15px",
              }}
              min={`${gregorianYear - 5}-01-01`}
              max={`${gregorianYear + 5}-12-31`}
            />
            <span
              style={{
                float: "left",
                position: "relative",
                top: "5px",
                right: "7px",
              }}
            >
              -
            </span>
            <input
              onChange={(e) => handleChangeField(e)}
              value={formState.section4.project_end}
              name="project_end"
              type="date"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=""
              style={{
                width: "40%",
              }}
              min={`${gregorianYear - 5}-01-01`}
              max={`${gregorianYear + 5}-12-31`}
            />
          </div>
          <div>
            {validationState[0].isValid == false &&
              !validationState[0].startMoreThanEnd && (
                <div className="form-field-fieldzone invalid-text">
                  <span style={{ color: "red" }}>
                    โปรดกรอกข้อมูล{validationState[0].alias}
                  </span>
                </div>
              )}

            {validationState[0].startMoreThanEnd && (
              <div className="form-field-fieldzone invalid-text">
                <span style={{ color: "red" }}>
                  วันที่เริ่มต้นโครงการต้องน้อยกว่าวันที่สิ้นสุดโครงการ
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className={`d-flex form-group ${
          formState.section2.suite_outside_policy.isFlagship ? "" : "hide"
        }`}
      >
        <div className="form-field-label">
          <label>
            <i className="bi bi-info-circle information"></i>{" "}
            ระบุความเสี่ยงโครงการ<span style={{ color: "red" }}> *</span>
          </label>
        </div>
        <div className="d-flex flex-column form-field-fieldzone">
          <div className="">
            <textarea
              onChange={(e) => handleChangeField(e)}
              name="flagship_risk"
              value={formState.section4.flagship_risk}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={2}
            ></textarea>
            <div className="text-area-control">
              จำนวนตัวอักษรไม่เกิน 4,000 คำ 0/4000
            </div>
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
            <i className="bi bi-info-circle information"></i>{" "}
            มาตรการบริหารความเสี่ยง<span style={{ color: "red" }}> *</span>
          </label>
        </div>
        <div className="d-flex flex-column form-field-fieldzone">
          <div className="">
            <input
              onChange={(e) => handleChangeField(e)}
              name="risk_prevention"
              value={formState.section4.risk_prevention}
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=""
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
            <i className="bi bi-info-circle information"></i>{" "}
            ประโยชน์ที่คาดว่าจะได้รับ (Impact)
            <span style={{ color: "red" }}> *</span>
          </label>
        </div>
        <div className="d-flex flex-column form-field-fieldzone">
          <div className="">
            <textarea
              onChange={(e) => handleChangeField(e)}
              value={formState.section4.benefit}
              name="benefit"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={2}
            ></textarea>
            <div className="text-area-control">
              จำนวนตัวอักษรไม่เกิน 4,000 คำ {formState.section4.benefit?.length}
              /4000
            </div>
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
      <div className="button-section">
        <button
          onClick={() => handleSection(5)}
          type="button"
          className="btn btn-primary"
        >
          ต่อไป <i className="bi bi-chevron-right"></i>
        </button>
        <button onClick={handleSaveDraft} type="button" className="btn btn-primary">
          <i className="bi bi-file-earmark"></i> บันทึกข้อมูลชั่วคราว{" "}
        </button>
        <button
          onClick={() => handleSection(3)}
          type="button"
          className="btn btn-primary"
        >
          <i className="bi bi-chevron-left"></i>ย้อนกลับ{" "}
        </button>
      </div>
      <AlertModal
        setShow={isShowAlert}
        handleClose={handleCloseAlert}
        headText={headTextAlert}
        contentText={contentTextAlert}
      />
    </>
  );
}
