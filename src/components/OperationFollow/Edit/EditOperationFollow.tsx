"use client";
import react, { useEffect, useState } from "react";
import "./edit-operation-follow.scss";
import { editSubmit, updateFormById } from "@/redux/OperationFollow/service";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { FormState } from "@/redux/OperationFollow/types";
import { RootState } from "@/redux/store";
import TableQuarterSummary from "./Table/EditPageTableQuarterSummary";
import { initialState } from "./initial_state";
import TablePolicySuite from "./Table/EditPageTablePolicySuite";
import { EditTableOperationArea } from "./Table/EditPageTableOperationArea";
import { EditTableProjectIndicator } from "./Table/EditTableProjectIndicator";
import { EditTableProjectTarget } from "./Table/EditPageTableProjectTarget";
import { OperationFollowTable } from "@/redux/OperationFollowTable/reducer";

export default function EditOperationFollow() {
  const [isEditStatus, setIsEditStatus] = useState(false);
  const [formId, setFormId] = useState(0);
  const dispatch = useDispatch();
  let id = 0;
  const params = useParams();
  const formState: any[] = useSelector(
    (state: RootState) => state.operationFollowTable.data
  );

  const [formData, setFormData] = useState<any>(initialState);

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

  const handleSubmit = () => {
    editSubmit(formId,dispatch, formData);
    alert('edit submit');
    setIsEditStatus(false)
  };

  const formattedValue = (value: string) => {
    const result = Number(value).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return result;
  };

  useEffect(() => {
    id = typeof params?.id === "string" ? parseInt(params?.id) : 0;
    if (id != 0) {
      updateFormById(id, dispatch);
    }
    setFormData(formState.find((item: { id: number }) => item.id === id))
    setFormId(id);
  }, []);

  return (
    <>
      <div className="operationfollow-edit-wrapper" style={{ width: "100%" }}>
        <div className="upper-zone d-flex justify-content-spacebetween">
          <div className="header-text">
            <h3>ระบบข้อมูลแผนปฎิบัติการและการติดตามประเมินผล</h3>
            <h4>เพิ่มแผนสนับสนุนการดำเนินงานด้านการตลาด</h4>
          </div>
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
          <div className="button-zone d-flex">
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
            <div className="p-2">
              <button className="btn btn-primary add-button">ย้อนกลับ</button>
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
            <div className="form-field">
              <input
                onChange={(e) => handleChangeFieldSection1(e)}
                name="project_name"
                value={formData?.section1?.project_name}
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
                ประเด็นยุทธศาสตร์ <span className="alterisk">*</span>
              </label>
            </div>
            <div className="form-field">
              <input
                type="text"
                onChange={(e) => handleChangeFieldSection1(e)}
                name="strategic"
                value={formData.section1.strategic}
                disabled={!isEditStatus}
                className="form-control"
                id="exampleFormControlInput1"
                placeholder=""
              />
            </div>
          </div>
          <div className="d-flex p-2">
            <div className="form-label">
              <label>
                ชื่อกลยุทธ์ภาพรวม <span className="alterisk">*</span>
              </label>
            </div>
            <div className="form-field">
              <input
                onChange={(e) => handleChangeFieldSection1(e)}
                name="strategic_goal"
                value={formData.section1.strategic_goal}
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
                ชื่อแผนงาน <span className="alterisk">*</span>
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
            <div className="form-field">
              <input
                onChange={(e) => handleChangeFieldSection1(e)}
                name="project_type"
                value={formData.section1.project_type}
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
                ลำดับที่โครงการ <span className="alterisk">*</span>
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
                งบประมาณโครงการแผน (บาท) <span className="alterisk">*</span>
              </label>
            </div>
            <div className="form-field">
              <input
                onChange={(e) => handleChangeFieldSection2(e)}
                name="budget"
                value={
                  isEditStatus
                    ? formData.section2.budget
                    : formattedValue(formData.section2.budget)
                }
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
                แหล่งงบประมาณ <span className="alterisk">*</span>
              </label>
            </div>
            <div className="form-field">
              <input
                onChange={(e) => handleChangeFieldSection1(e)}
                name="budgetSource"
                value={formData.section1.budgetSource}
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
                รายการค่าใช้จ่าย <span className="alterisk">*</span>
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
          <div className="table-summary-wrapper">
            <TableQuarterSummary
              formData={formData}
              isEditStatus={isEditStatus}
            />
          </div>
          <div className="table-policy-suite-wrapper">
            <TablePolicySuite formData={formData} isEditStatus={isEditStatus} />
          </div>
          <div className="d-flex p-2">
            <div className="form-label">
              <label>
                หลักการและเหตุผล <span className="alterisk">*</span>
              </label>
            </div>
            <div className="form-field">
              <textarea
                value={formData.section3.principal_reason}
                onChange={(e) => handleChangeFieldSection3(e)}
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={10}
              ></textarea>
            </div>
          </div>
          {formData.section3.project_objective.objective1 != "" && (
            <div className="d-flex p-2">
              <div className="form-label">
                <label>
                  วัตถุประสงค์โครงการ <span className="alterisk">*</span>
                </label>
              </div>
              <div className="form-field">
                <textarea
                  onChange={(e) => handleChangeFieldSection3(e)}
                  value={formData.section3.project_objective.objective1}
                  name="objective1"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={10}
                ></textarea>
              </div>
            </div>
          )}
          {formData.section3.project_objective.objective2 != "" && (
            <div className="d-flex p-2">
              <div className="form-label">
                <label>
                  วัตถุประสงค์โครงการ <span className="alterisk">*</span>
                </label>
              </div>
              <div className="form-field">
                <textarea
                  onChange={(e) => handleChangeFieldSection3(e)}
                  value={formData.section3.project_objective.objective2}
                  name="objective2"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={10}
                ></textarea>
              </div>
            </div>
          )}
          {formData.section3.project_objective.objective3 != "" && (
            <div className="d-flex p-2">
              <div className="form-label">
                <label>
                  วัตถุประสงค์โครงการ <span className="alterisk">*</span>
                </label>
              </div>
              <div className="form-field">
                <textarea
                  onChange={(e) => handleChangeFieldSection3(e)}
                  value={formData.section3.project_objective.objective3}
                  name="objective3"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={10}
                ></textarea>
              </div>
            </div>
          )}
          {formData.section3.project_objective.objective4 != "" && (
            <div className="d-flex p-2">
              <div className="form-label">
                <label>
                  วัตถุประสงค์โครงการ <span className="alterisk">*</span>
                </label>
              </div>
              <div className="form-field">
                <textarea
                  onChange={(e) => handleChangeFieldSection3(e)}
                  value={formData.section3.project_objective.objective4}
                  name="objective4"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={10}
                ></textarea>
              </div>
            </div>
          )}
          <div className="table-summary-wrapper">
            <EditTableOperationArea
              formData={formData}
              isEditStatus={isEditStatus}
            />
          </div>
          <div className="table-summary-wrapper table-project-indicator activities">
            <EditTableProjectIndicator
              formData={formData}
              isEditStatus={isEditStatus}
            />
          </div>
          <div className="d-flex p-2">
            <div className="form-label">
              <label>
                ตัวชี้วัดระดับโครงการ(Outcome){" "}
                <span className="alterisk">*</span>
              </label>
            </div>
            <div className="form-field">
              <input
                onChange={(e) => handleChangeFieldSection3(e)}
                disabled={!isEditStatus}
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder=""
              />
            </div>
          </div>
          <div className="table-project-target-wrapper">
            <EditTableProjectTarget
              formData={formData}
              isEditStatus={isEditStatus}
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
                <div className="">
                  <input
                    onChange={(e) => handleChangeFieldSection4(e)}
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
                    onChange={(e) => handleChangeFieldSection4(e)}
                    disabled={!isEditStatus}
                    name="project_end"
                    value={formData.section4.project_end}
                    type="date"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder=""
                    style={{
                      width: "40%",
                    }}
                  />
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
            <div className="form-field">
              <textarea
                onChange={(e) => handleChangeFieldSection4(e)}
                value={formData.section4.flagship_risk}
                name="flagship_risk"
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={10}
              ></textarea>
            </div>
          </div>
          <div className="d-flex p-2">
            <div className="form-label">
              <label>
                มาตรการบริหารความเสี่ยง <span className="alterisk">*</span>
              </label>
            </div>
            <div className="form-field">
              <textarea
                onChange={(e) => handleChangeFieldSection4(e)}
                value={formData.section4.risk_prevention}
                name="risk_prevention"
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={10}
              ></textarea>
            </div>
          </div>
          <div className="d-flex p-2">
            <div className="form-label">
              <label>
                ประโยชน์ที่คาดว่าจะได้รับ <span className="alterisk">*</span>
              </label>
            </div>
            <div className="form-field">
              <textarea
                onChange={(e) => handleChangeFieldSection4(e)}
                value={formData.section4.benefit}
                name="benefit"
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={10}
              ></textarea>
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
            <div className="p-2">
              <button className="btn btn-primary add-button">ย้อนกลับ</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
