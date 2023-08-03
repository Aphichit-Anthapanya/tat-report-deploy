"use client";

import { useDispatch, useSelector } from "react-redux";
import "./operation-follow.scss";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import {
  updateFormField,
  resetForm,
  updateSection1,
} from "@/redux/OperationFollow/reducer";
import { FormState } from "@/redux/OperationFollow/types";
import { useParams } from "next/navigation";

import { updateFormById } from "@/redux/OperationFollow/service";
import { checkValidity } from "./Validation/section1";

interface Section1Props {
  changeSectionHandle: (value: number, isBubble: boolean) => void;
}

export default function Section1(props: Section1Props) {
  const formState: FormState = useSelector(
    (state: RootState) => state.operationFollowForm
  );
  const [formValid, setFormValid] = useState<boolean>(true);
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
    {
      name: "act_group",
      alias: "หมวด พ.ร.บ. งบประมาณ",
      isValid: true,
    },
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
      name: "project_type",
      alias: "ประเภทโครงการ",
      isValid: true,
    },
    {
      name: "project_name",
      alias: "ชื่อโครงการ",
      isValid: true,
    },
  ]);
  const dispatch = useDispatch();
  let id = 0;
  let mode = 0;
  const params = useParams();

  const handleSection = (value: number) => {
    handleUpdateForm();
    props.changeSectionHandle(value, false);
  };

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
    id = typeof params?.id === "string" ? parseInt(params?.id) : 0;
    if (id != 0) {
      updateFormById(id, dispatch);
    }
  }, []);

  const handleChangeField = (e: any) => {
    const { name, value } = e.target;

    dispatch(
      updateFormField({
        ...formState,
        section1: {
          ...formState.section1,
          [name]: value,
        },
      })
    );
  };

  return (
    <>
      <div className="d-flex form-group">
        <div className="form-field-label">
          <label>
            ปีงบประมาณ{formState.section1.organizationManageMent}
            <span style={{ color: "red" }}> *</span>
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
              <option value="DEFAULT">---- เลือก ----</option>
              {Array.from({ length: 5 }, (_, index) => {
                const currentDate = new Date();
                const currentYear = currentDate.getFullYear();
                const buddhistYear = currentYear + 543 - index;
                return (
                  <option key={buddhistYear} value={buddhistYear}>
                    {buddhistYear}
                  </option>
                );
              })}
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
            แผนบริหารจัดการองค์กร<span style={{ color: "red" }}> *</span>
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
            แหล่งงบประมาณ<span style={{ color: "red" }}> *</span>
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
            หมวด พ.ร.บ. งบประมาณ<span style={{ color: "red" }}> *</span>
          </label>
        </div>
        <div className="d-flex flex-column form-field-fieldzone">
          <div className="">
            <select
              defaultValue={"DEFAULT"}
              onChange={handleChangeField}
              name="act_group"
              value={formState["section1"]["act_group"]}
              className="form-select"
              aria-label="Default select example"
            >
              <option value="DEFAULT">---- เลือก ----</option>
              <option value="act1">Act 1</option>
              <option value="act2">Act 2</option>
              <option value="act3">Act 3</option>
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
            รายการค่าใช้จ่าย<span style={{ color: "red" }}> *</span>
          </label>
        </div>
        <div className="d-flex flex-column form-field-fieldzone">
          <div className="">
            <input
              onChange={handleChangeField}
              name="paymentList"
              value={formState["section1"]["paymentList"]}
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
            วัตถุประสงค์เชิงยุทธศาสตร์ (SO)
            <span style={{ color: "red" }}> *</span>
          </label>
        </div>
        <div className="d-flex flex-column form-field-fieldzone">
          <div className="">
            <select
              defaultValue={"DEFAULT"}
              onChange={handleChangeField}
              name="strategic_goal"
              value={formState["section1"]["strategic_goal"]}
              className="form-select"
              aria-label="Default select example"
            >
              <option value="DEFAULT">---- เลือก ----</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
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
            กลยุทธ์<span style={{ color: "red" }}> *</span>
          </label>
        </div>
        <div className="d-flex flex-column form-field-fieldzone">
          <div className="">
            <select
              defaultValue={"DEFAULT"}
              onChange={handleChangeField}
              name="strategic"
              value={formState.section1.strategic}
              className="form-select"
              aria-label="Default select example"
            >
              <option value="DEFAULT">---- เลือก ----</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
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
            แผนงาน<span style={{ color: "red" }}> *</span>
          </label>
        </div>
        <div className="d-flex flex-column form-field-fieldzone">
          <div className="">
            <select
              defaultValue={"DEFAULT"}
              onChange={handleChangeField}
              name="planning"
              value={formState.section1.planning}
              className="form-select"
              aria-label="Default select example"
            >
              <option value="DEFAULT">---- เลือก ----</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
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
            ประเภทโครงการ<span style={{ color: "red" }}> *</span>
          </label>
        </div>
        <div className="d-flex flex-column form-field-fieldzone">
          <div className="">
            <select
              defaultValue={"DEFAULT"}
              onChange={handleChangeField}
              name="project_type"
              value={formState.section1.project_type}
              className="form-select"
              aria-label="Default select example"
            >
              <option value="DEFAULT">---- เลือก ----</option>
              {formState.masterData.section1.project_type.map((item) => (
                <option value={item.id}>{item.name}</option>
              ))}
            </select>
          </div>
          <div>
            {validationState[7].isValid == false && (
              <div className="form-field-fieldzone invalid-text">
                <span style={{ color: "red" }}>
                  โปรดกรอกข้อมูล{validationState[7].alias}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="d-flex form-group">
        <div className="form-field-label">
          <label>
            ชื่อโครงการ<span style={{ color: "red" }}> *</span>
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
            {validationState[8].isValid == false && (
              <div className="form-field-fieldzone invalid-text">
                <span style={{ color: "red" }}>
                  โปรดกรอกข้อมูล{validationState[8].alias}
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
        <button type="button" className="btn btn-primary">
          <i className="bi bi-file-earmark"></i> บันทึกข้อมูลชั่วคราว{" "}
        </button>
      </div>
    </>
  );
}
