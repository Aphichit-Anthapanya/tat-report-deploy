import React, { useState } from "react";

import "./activities-add.scss";
import TableProjectIndicator from "./Table/TableProjectIndicator";
import TableOperationArea from "./Table/TableOperationArea";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  updateFormField,
  appendActivity,
} from "@/redux/OperationFollow/reducer";
import { checkValidity } from "./Validation/add-activities";

interface ActivityProps {
  onChangeAddActivity: () => void;
}

export default function AddActivities({ onChangeAddActivity }: ActivityProps) {
  const formState = useSelector(
    (state: RootState) => state.operationFollowForm
  );
  const dispatch = useDispatch();

  const [tableProjectIndicator, setTableProjectIndicator] = useState([]);
  const [tableOperationArea, setTableOperationArea] = useState([]);
  const [formData, setFormData] = useState({
    budget: "ในแผน",
    catname: "",
    activity_type: "ในแผน",
    activity_order: formState.activitiesList.length + 1 + "",
    activity_name: "",
    activity_description: "",
    activity_shared: "",
    activity_shared_by_project: "",
    activity_start: "",
    activity_end: "",
  });

  const [validationState, setValidationState] = useState([
    {
      name: "catname",
      alias: "หมวดกิจกรรม",
      isValid: true,
    },
    {
      name: "activity_order",
      alias: "ลำดับที่กิจกรรม",
      isValid: true,
    },
    {
      name: "activity_name",
      alias: "ชื่อกิจกรรม",
      isValid: true,
    },
    {
      name: "activity_shared_by_project",
      alias: "สัดส่วนกิจกรรมต่อโครงการ",
      isValid: true,
    },
    {
      name: "activity_start",
      alias: "ช่วงเวลาจัดกิจกรรม (เริ่มต้น)",
      isValid: true,
    },
    {
      name: "activity_end",
      alias: "ช่วงเวลาจัดกิจกรรม (สิ้นสุด)",
      isValid: true,
    },
    {
      name: "tableOperationArea",
      alias: "พื้นที่ดำเนินกิจกรรม",
      isValid: true,
    },
    {
      name: "tableProjectIndicator",
      alias: "ตัวชี้วัดระดับกิจกรรม",
      isValid: true,
    },
    {
      name: "activity_description",
      alias: "รายละเอียดกิจกรรม",
      isValid: true,
    },
  ]);

  const handleChangeField = (e: any) => {
    const { name, value } = e.target;

    const updatedSection1 = {
      ...formData,
      [name]: value,
    };

    setFormData(updatedSection1);
  };

  const handleUpdateForm = () => {
    if (
      checkValidity(
        formData,
        validationState,
        setValidationState,
        tableOperationArea,
        tableProjectIndicator
      )
    ) {
      dispatch(
        updateFormField({
          ...formState,
          activityForm: {
            ...formState.activityForm,
            list_operation_area: tableOperationArea,
            project_outcome: tableProjectIndicator,
            budget: formData.budget,
            catname: formData.catname,
            activity_type: formData.activity_type,
            activity_order: formData.activity_order,
            activity_name: formData.activity_name,
            activity_description: formData.activity_description,
            activity_shared: formData.activity_shared,
            activity_shared_by_project: formData.activity_shared_by_project,
            activity_start: formData.activity_start,
            activity_end: formData.activity_end,
          },
        })
      );

      dispatch(
        appendActivity({
          catname: formData.catname,
          activity_type: formData.activity_type,
          activity_name: formData.activity_name,
          activity_order: formData.activity_order,
          activity_shared: formData.activity_shared,
          act_status: "",
          work_status: "",
          budget: formData.budget,
          total_act_budget: formData.budget,
        })
      );

      onChangeAddActivity();
    }
  };

  const handleTableOperationArea = (data: any) => {
    setTableOperationArea(data);
  };

  const handleTableProjectIndicator = (data: any) => {
    setTableProjectIndicator(data);
  };

  return (
    <>
      <div className="d-flex form-group">
        <div className="form-field-label">
          <label>
            งบประมาณกิจกรรม (บาท)<span style={{ color: "red" }}> *</span>
          </label>
        </div>
        <div className="form-field-fieldzone">
          <input className="form-control" type="number" />
        </div>
      </div>
      <div className="d-flex form-group">
        <div className="form-field-label">
          <label>
            ลำดับที่กิจกรรม<span style={{ color: "red" }}> *</span>
          </label>
        </div>
        <div className="d-flex flex-column form-field-fieldzone">
          <div className="">
            <input
              style={{ width: "69px", textAlign: "center" }}
              disabled={true}
              onChange={(e) => handleChangeField(e)}
              value={formData.activity_order}
              name="activity_order"
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
            ชื่อกิจกรรม<span style={{ color: "red" }}> *</span>
          </label>
        </div>
        <div className="d-flex flex-column form-field-fieldzone">
          <div className="">
            <input
              type="text"
              onChange={(e) => handleChangeField(e)}
              value={formData.activity_name}
              name="activity_name"
              className="form-control"
              id="exampleFormControlTextarea1"
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
            หมวดกิจกรรม<span style={{ color: "red" }}> *</span>
          </label>
        </div>
        <div className="d-flex flex-column form-field-fieldzone">
          <div className="">
            <input
              type="text"
              onChange={(e) => handleChangeField(e)}
              value={formData.catname}
              name="catname"
              className="form-control"
              id="exampleFormControlTextarea1"
            />
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
            ประเภทกิจกรรม<span style={{ color: "red" }}> *</span>
          </label>
        </div>
        <div className="d-flex flex-column form-field-fieldzone">
          <div className="">
            <select
              defaultValue={"ในแผน"}
              onChange={(e) => handleChangeField(e)}
              name="activity_type"
              value={formData.activity_type}
              className="form-select"
              aria-label="Default select example"
            >
              <option value="ในแผน">ในแผน</option>
              <option value="นอกแผน">นอกแผน</option>
            </select>
          </div>
          <div>
            {/* {validationState[1].isValid == false && (
              <div className="form-field-fieldzone invalid-text">
                <span style={{ color: "red" }}>
                  โปรดกรอกข้อมูล{validationState[1].alias}
                </span>
              </div>
            )} */}
          </div>
        </div>
      </div>
      <div className="d-flex form-group">
        <div className="form-field-label">
          <label>
            รายละเอียดกิจกรรม<span style={{ color: "red" }}> *</span>
          </label>
        </div>
        <div className="d-flex flex-column form-field-fieldzone">
          <div className="">
            <textarea
              onChange={(e) => handleChangeField(e)}
              value={formData.activity_description}
              name="activity_description"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={2}
            ></textarea>
            <div className="text-area-control">
              จำนวนตัวอักษรไม่เกิน 4,000 คำ{" "}
              {formData.activity_description.length}/4000
            </div>
          </div>
          <div>
            {validationState[9]?.isValid == false && (
              <div className="form-field-fieldzone invalid-text">
                <span style={{ color: "red" }}>
                  โปรดกรอกข้อมูล{validationState[9].alias}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="d-flex form-group">
        <div className="form-field-label">
          <label>
            ตัวชี้วัดระดับกิจกรรม (Output)
            <span style={{ color: "red" }}> *</span>
          </label>
        </div>
        <div className="d-flex flex-column form-field-fieldzone">
          <div>
            {validationState[8].isValid == false && (
              <div className="form-field-fieldzone invalid-text">
                <span style={{ color: "red" }}>
                  โปรดกรอกข้อมูล{validationState[8].alias}
                </span>
              </div>
            )}
          </div>
          <div className="">
            <TableProjectIndicator
              onChangeTableProjectIndicator={handleTableProjectIndicator}
            />
          </div>
        </div>
      </div>
      <div className="d-flex form-group">
        <div className="form-field-label">
          <label>
            สัดส่วนกิจกรรมต่อโครงการ<span style={{ color: "red" }}> *</span>
          </label>
        </div>
        <div className="d-flex flex-column form-field-fieldzone">
          <div className="d-flex">
            <div className="">
              <input
                onInput={(e: any) => {
                  e.target.value = Math.abs(e.target.value);
                }}
                onChange={(e) => handleChangeField(e)}
                value={formData.activity_shared_by_project}
                name="activity_shared_by_project"
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder=""
              />
            </div>
            <div style={{ position: "relative", top: "10px", left: "10px" }}>
              {" "}
              % (แผน)
            </div>
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
            ช่วงเวลาจัดกิจกรรม (เริ่มต้น)
            <span style={{ color: "red" }}> *</span>
          </label>
        </div>
        <div className="d-flex flex-column form-field-fieldzone">
          <div className="d-flex">
            <div className="">
              <input
                onChange={(e) => handleChangeField(e)}
                value={formData.activity_start}
                name="activity_start"
                type="date"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder=""
              />
            </div>
            {/* <div style={{ position: "relative", top: "10px", left: "10px" }}>
              {" "}
              (แผน)
            </div> */}
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
            ช่วงเวลาจัดกิจกรรม (สิ้นสุด)<span style={{ color: "red" }}> *</span>
          </label>
        </div>
        <div className="d-flex flex-column form-field-fieldzone">
          <div className="d-flex">
            <div className="">
              <input
                onChange={(e) => handleChangeField(e)}
                value={formData.activity_end}
                name="activity_end"
                type="date"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder=""
              />
            </div>
            {/* <div style={{ position: "relative", top: "10px", left: "10px" }}>
              {" "}
              (แผน)
            </div> */}
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
            พื้นที่ดำเนินกิจกรรม<span style={{ color: "red" }}> *</span>
          </label>
        </div>
        <div className="d-flex flex-column form-field-fieldzone">
          <div>
            {validationState[7].isValid == false && (
              <div className="form-field-fieldzone invalid-text">
                <span style={{ color: "red" }}>
                  โปรดกรอกข้อมูล{validationState[7].alias}
                </span>
              </div>
            )}
          </div>
          <div className="">
            <TableOperationArea
              onChangeTableOperationArea={handleTableOperationArea}
            />
          </div>
        </div>
      </div>

      <div className="button-section">
        <button
          onClick={handleUpdateForm}
          type="button"
          className="btn btn-success"
        >
          เพิ่มกิจกรรม
        </button>
        <button type="button" className="btn btn-primary">
          <i className="bi bi-file-earmark"></i> บันทึกข้อมูลชั่วคราว{" "}
        </button>
        <button
          onClick={onChangeAddActivity}
          type="button"
          className="btn btn-primary"
        >
          <i className="bi bi-chevron-left"></i> ย้อนกลับ{" "}
        </button>
      </div>
    </>
  );
}
