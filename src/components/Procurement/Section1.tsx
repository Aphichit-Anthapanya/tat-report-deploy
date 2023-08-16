"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Formik, Form, FormikProps, Field, FormikValues } from "formik";
import * as Yup from "yup";
import "./procurement.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { FormState } from "@/redux/Procurement/types";
import { updateSection, updateObj } from "@/redux/Procurement/reducer";
import InputCurrency from "./InputCurrency";
import { Modal } from "react-bootstrap";
import ActionPlanTable from "./ActionPlanTable";

type MyProps = {
  type?: string | undefined;
};

interface ITempItem {
  id: string;
  project_name: string;
  activity: string;
  budget: string;
}

export default function Section1(props: MyProps) {
  const procurementStore = useSelector((state: RootState) => state.procurement);
  const dispatch = useDispatch();
  const params = useParams();
  const [FYSelect, setFYSelect] = useState<number[]>([]);
  const [initValue, setInitValue] = useState<FormState["obj"]>(
    procurementStore.obj
  );
  const [actionPlanDataSearch, setActionPlanDataSearch] = useState<any>([]);
  const [tempActionPlan, setTempActionPlan] = useState<ITempItem[]>([]);

  let type = typeof params?.type === "string" ? parseInt(params?.type) : 0;

  const tempActionPlanData = [
    {
      id: 1,
      name: "โครงการ 1",
      activity: [
        { id: 10001, name: "กิจกรรม 1-1" },
        { id: 10002, name: "กิจกรรม 1-2" },
      ],
    },
    {
      id: 2,
      name: "โครงการ 2",
      activity: [],
    },
    {
      id: 3,
      name: "โครงการ 3",
      activity: [{ id: 30001, name: "กิจกรรม 3-1" }],
    },
  ];

  useEffect(() => {
    genFYSelect();
    getTypeOfStatement();

    // temp actionPlanDataSearch
    let temp = [];
    for (let index = 1; index <= 60; index++) {
      let obj: any = {
        id: index.toString(),
        project_name: "โครงการ " + index.toString(),
        activity: "กิจกรรม " + index.toString(),
        budget: "1000000.00",
      };
      temp.push(obj);
    }
    setActionPlanDataSearch(temp);
  }, [tempActionPlan]);

  function genFYSelect() {
    let dateNow = new Date();
    let temp = [];
    for (
      let index = dateNow.getFullYear() + 5;
      index >= dateNow.getFullYear() - 5;
      index--
    ) {
      temp.push(index + 543);
    }
    setFYSelect(temp);
  }

  function getTypeOfStatement() {
    let dataType = [
      "",
      "เพิ่มงบลงทุน",
      "เพิ่มงบสำรองกรณีจำเป็นเร่งด่วน",
      "เพิ่มงบอุดหนุน",
      "เพิ่มงบรายได้",
      "งบอื่น ๆ",
    ];

    const updated: FormState["obj"] = {
      ...initValue,
      type_of_statement: dataType[type],
    };
    setInitValue(updated);
  }

  function handleRadio(e: any) {
    console.log(e, "eeeeeee");
  }

  const handleCheckbox = (e: any) => {
    if (Number(e.target.value) == 2) {
      getActionPlanDataFromAPI();
    }
  };

  const formatCurrency = (value: any) => {
    if (value == "" || value == "." || value == ".." || isNaN(value)) {
      return "0.00";
    }
    return parseFloat(value)
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  function actionPlanSelect(data: any) {
    console.log(data);
    let temp = [...tempActionPlan];
    for (const iterator of data) {
      let find = tempActionPlan.find((f) => f.id == iterator.id);
      if (!find) {
        temp.push(iterator);
      }
    }
    setTempActionPlan(temp);
  }

  function removeActionPlanItem(id: any) {
    setTempActionPlan(tempActionPlan.filter((i) => i.id !== id));
  }

  const sumBudget = (data: ITempItem[]) =>
    data.reduce((budget, entry) => budget + (parseFloat(entry.budget) || 0), 0);

  function getActionPlanDataFromAPI() {
    // get จาก ปีงบประมาณ
  }

  function nextSection2() {
    dispatch(updateSection(2));
  }

  const RegisterSchema = Yup.object().shape({
    fiscal_year: Yup.string().required("โปรดเลือกปีงบประมาณ"),
    type_of_statement: Yup.string().required("โปรดเลือกประเภทงบ"),
    purchasing_hiring_list: Yup.string().required(
      "โปรดเลือกรายการจัดซื้อ / จัดจ้าง"
    ),
    other_budget: Yup.string().when("type_of_statement", {
      is: "งบอื่น ๆ",
      then: (schema) => schema.required("โปรดเลือกงบ"),
    }),
    add_manually: Yup.object({
      event_name: Yup.string().when("$purchasing_hiring_list", {
        is: "1",
        then: (schema) => schema.required("โปรดกรอกโครงการ / กิจกรรม"),
      }),
      procurement_list: Yup.string().when("$purchasing_hiring_list", {
        is: "1",
        then: (schema) => schema.required("โปรดกรอกรายการจัดซื้อ / จัดจ้าง"),
      }),
      budget_limit: Yup.string().when("$purchasing_hiring_list", {
        is: "1",
        then: (schema) => schema.required("โปรดกรอกวงเงินงบประมาณ"),
      }),
    }),
    action_plan_fiscal_fear: Yup.string(),
    action_plan_project_name: Yup.string(),
    resp_department: Yup.string(),
    nature_of_work: Yup.string().required("โปรดเลือกลักษณะงาน"),
    number_of_years: Yup.string(),
    department: Yup.string(),
    person_in_charge_project: Yup.string(),
    tel: Yup.string().required("โปรดกรอกเบอร์ติดต่อ"),
  });

  return (
    <>
      <div className={`form-wrapper-section`}>
        <div className="container">
          <Formik
            enableReinitialize
            initialValues={initValue}
            validationSchema={RegisterSchema}
            onSubmit={(values) => {
              console.log(values, "sdfsdfsdf");
              let obj: any = {
                fiscal_year: values.fiscal_year,
                type_of_statement: values.type_of_statement,
                purchasing_hiring_list: values.purchasing_hiring_list,
                resp_department: values.resp_department,
                nature_of_work: values.nature_of_work,
                department: values.department,
                person_in_charge_project: values.person_in_charge_project,
                tel: values.tel,
              };
              if (values.nature_of_work == "2") {
                obj["number_of_years"] = values.number_of_years;
              } else {
                obj["number_of_years"] = "";
              }
              dispatch(updateObj(obj));
              dispatch(updateSection(2));
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              setFieldValue,
              submitForm,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="row mb-2">
                  <div className="col-3 text-end mt-2">
                    <label htmlFor="fiscal_year">
                      ปีงบประมาณ : <span className="isRequired">*</span>
                    </label>
                  </div>
                  <div className="col-9">
                    <Field
                      as="select"
                      id="fiscal_year"
                      className="form-select"
                      name="fiscal_year"
                      value={values.fiscal_year}
                    >
                      <option value="" style={{ color: "gray" }}>
                        ----- เลือก -----
                      </option>
                      {FYSelect.map((i) => {
                        return (
                          <option key={i} value={i}>
                            {i}
                          </option>
                        );
                      })}
                    </Field>
                    <div className="isError">
                      {errors.fiscal_year &&
                        touched.fiscal_year &&
                        errors.fiscal_year}
                    </div>
                  </div>
                </div>
                <div className="row mb-1">
                  <div className="col-3 text-end mt-2">
                    <label htmlFor="type_of_statement">
                      ประเภทของงบ : <span className="isRequired">*</span>
                    </label>
                  </div>
                  <div className="col-9">
                    <div className="form-control divDisabled">
                      {values.type_of_statement}
                    </div>
                    <div className="isError">
                      {errors.type_of_statement &&
                        touched.type_of_statement &&
                        errors.type_of_statement}
                    </div>
                  </div>
                </div>
                {type === 5 && (
                  <div className="row mb-2">
                    <div className="col-3 text-end mt-2">
                      <label htmlFor="other_budget">
                        ประเภทของงบอื่น ๆ :{" "}
                        <span className="isRequired">*</span>
                      </label>
                    </div>
                    <div className="col-9 mt-2">
                      <div className="form-check form-check-inline">
                        <label
                          className="form-check-label"
                          htmlFor="other_budget_1"
                        >
                          <Field
                            className="form-check-input mr-4"
                            type="radio"
                            name="other_budget"
                            value="1"
                            id="other_budget_1"
                          />
                          งบกลาง
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <label
                          className="form-check-label"
                          htmlFor="other_budget_2"
                        >
                          <Field
                            className="form-check-input"
                            type="radio"
                            name="other_budget"
                            value="2"
                            id="other_budget_2"
                          />
                          งบเงินกู้ฯ
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <label
                          className="form-check-label"
                          htmlFor="other_budget_3"
                        >
                          <Field
                            className="form-check-input"
                            type="radio"
                            name="other_budget"
                            value="3"
                            id="other_budget_3"
                          />
                          งบอื่น ๆ
                        </label>
                      </div>
                      <div className="isError">
                        {errors.other_budget &&
                          touched.other_budget &&
                          errors.other_budget}
                      </div>
                    </div>
                  </div>
                )}
                <div className="row mb-3">
                  <div className="col-3 text-end mt-2">
                    <label htmlFor="type_of_statement">
                      รายการจัดซื้อ / จัดจ้าง :{" "}
                      <span className="isRequired">*</span>
                    </label>
                  </div>
                  <div className="col-9 mt-2">
                    <div className="form-check form-check-inline">
                      <label
                        className="form-check-label"
                        htmlFor="purchasing_hiring_list_1"
                      >
                        <Field
                          className="form-check-input mr-4"
                          type="radio"
                          name="purchasing_hiring_list"
                          value="1"
                          id="purchasing_hiring_list_1"
                          onChange={(e: any) => {
                            handleChange(e);
                            handleCheckbox(e);
                          }}
                        />
                        เพิ่มข้อมูลด้วยตนเอง
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <label
                        className="form-check-label"
                        htmlFor="purchasing_hiring_list_2"
                      >
                        <Field
                          className="form-check-input"
                          type="radio"
                          name="purchasing_hiring_list"
                          value="2"
                          id="purchasing_hiring_list_2"
                          onChange={(e: any) => {
                            handleChange(e);
                            handleCheckbox(e);
                          }}
                        />
                        เพิ่มข้อมูลจาก Action Plan
                      </label>
                    </div>
                    <div className="isError">
                      {errors.purchasing_hiring_list &&
                        touched.purchasing_hiring_list &&
                        errors.purchasing_hiring_list}
                    </div>
                  </div>
                </div>
                {values.purchasing_hiring_list == "1" ? (
                  <>
                    <div className="row mb-3">
                      <div className="col-3 text-end mt-2"></div>
                      <div className="col-9">
                        <div className="formInner">
                          <div className="row mb-2">
                            <div className="col-4 text-end mt-2">
                              <label htmlFor="event_name">
                                โครงการ / กิจกรรม :{" "}
                                <span className="isRequired">*</span>
                              </label>
                            </div>
                            <div className="col">
                              <Field
                                id="event_name"
                                className="form-control"
                                type="text"
                                name="add_manually.event_name"
                                value={values.add_manually.event_name}
                              />
                              <div className="isError">
                                {touched.add_manually?.event_name &&
                                  errors.add_manually?.event_name &&
                                  errors.add_manually.event_name}
                              </div>
                            </div>
                          </div>
                          <div className="row mb-2">
                            <div className="col-4 text-end mt-2">
                              <label htmlFor="procurement_list">
                                รายการจัดซื้อ / จัดจ้าง :{" "}
                                <span className="isRequired">*</span>
                              </label>
                            </div>
                            <div className="col">
                              <Field
                                id="procurement_list"
                                className="form-control"
                                type="text"
                                name="add_manually.procurement_list"
                                value={values.add_manually.procurement_list}
                              />
                              <div className="isError">
                                {touched.add_manually?.procurement_list &&
                                  errors.add_manually?.procurement_list &&
                                  errors.add_manually.procurement_list}
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-4 text-end mt-2">
                              <label htmlFor="budget_limit">
                                วงเงินงบประมาณ :{" "}
                                <span className="isRequired">*</span>
                              </label>
                            </div>
                            <div className="col">
                              <Field
                                id="budget_limit"
                                className="form-control"
                                name="add_manually.budget_limit"
                                component={InputCurrency}
                                value={values.add_manually.budget_limit}
                              />
                              {/* <Field
                                id="budget_limit"
                                className="form-control"
                                type="text"
                                name="add_manually.budget_limit"
                                value={values.add_manually.budget_limit}
                              /> */}
                              <div className="isError">
                                {touched.add_manually?.budget_limit &&
                                  errors.add_manually?.budget_limit &&
                                  errors.add_manually.budget_limit}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}
                {values.purchasing_hiring_list == "2" ? (
                  <>
                    <ActionPlanTable
                      data={actionPlanDataSearch}
                      callBackValue={actionPlanSelect}
                    />

                    <div className="row mb-3">
                      <div className="col-3"></div>
                      <div className="col-9">
                        <table className="table table-bordered table-striped">
                          <thead className="table-light">
                            <tr>
                              <th></th>
                              <th>โครงการ</th>
                              <th>กิจกรรม</th>
                              <th>งบประมาณ</th>
                            </tr>
                          </thead>
                          <tbody>
                            {tempActionPlan.length > 0 ? (
                              tempActionPlan.map((i, idx) => {
                                return (
                                  <tr key={idx}>
                                    <td>
                                      <i
                                        onClick={() =>
                                          removeActionPlanItem(i.id)
                                        }
                                        className="bi bi-trash-fill"
                                        style={{
                                          color: "red",
                                          cursor: "pointer",
                                        }}
                                      ></i>
                                    </td>
                                    <td>{i.project_name}</td>
                                    <td>{i.activity}</td>
                                    <td>{formatCurrency(i.budget)}</td>
                                  </tr>
                                );
                              })
                            ) : (
                              <tr className="text-center">
                                <td colSpan={4}>ยังไม่ได้เลือกข้อมูล</td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                        <span>
                          รวมงบประมาณ :{" "}
                          {formatCurrency(sumBudget(tempActionPlan))} บาท
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}
                <div className="row mb-2">
                  <div className="col-3 text-end mt-2">
                    <label htmlFor="resp_department">
                      หน่วยงานที่รับผิดชอบ :{" "}
                      <span className="isRequired">*</span>
                    </label>
                  </div>
                  <div className="col-9">
                    <div className="form-control divDisabled">
                      {values.resp_department}
                    </div>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-3 text-end mt-2">
                    <label htmlFor="type_of_statement">
                      ลักษณะงาน : <span className="isRequired">*</span>
                    </label>
                  </div>
                  <div className="col-9 mt-2">
                    <div className="form-check form-check-inline">
                      <label
                        className="form-check-label"
                        htmlFor="nature_of_work_1"
                      >
                        <Field
                          className="form-check-input mr-4"
                          type="radio"
                          name="nature_of_work"
                          value="1"
                          id="nature_of_work_1"
                        />
                        งานเสร็จภายในปีงบประมาณ
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <label
                        className="form-check-label"
                        htmlFor="nature_of_work_2"
                      >
                        <Field
                          className="form-check-input"
                          type="radio"
                          name="nature_of_work"
                          value="2"
                          id="nature_of_work_2"
                        />
                        งานต่อเนื่องที่ ครม.อนุมัติผูกพันงบประมาณปีต่อไป
                      </label>
                    </div>
                    <div className="isError">
                      {errors.nature_of_work &&
                        touched.nature_of_work &&
                        errors.nature_of_work}
                    </div>
                  </div>
                </div>
                {values.nature_of_work == "2" ? (
                  <>
                    <div className="row mb-3">
                      <div className="col-3 text-end mt-2">
                        <label htmlFor="fiscal_year">จำนวนปี :</label>
                      </div>
                      <div className="col-9">
                        <Field
                          as="select"
                          id="number_of_years"
                          className="form-select"
                          name="number_of_years"
                          value={values.number_of_years}
                        >
                          <option value="" style={{ color: "gray" }}>
                            ----- เลือก -----
                          </option>
                          {[...Array(10)].map((i, idx) => {
                            return (
                              <option key={idx} value={idx + 1}>
                                {idx + 1 + " ปี"}
                              </option>
                            );
                          })}
                        </Field>
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}
                <div className="row mb-3">
                  <div className="col-3 text-end mt-2">
                    <label htmlFor="department">
                      ฝ่าย : <span className="isRequired">*</span>
                    </label>
                  </div>
                  <div className="col-9">
                    <div className="form-control divDisabled">
                      {values.department}
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-3 text-end mt-2">
                    <label htmlFor="person_in_charge_project">
                      ผู้รับผิดชอบโครงการ :{" "}
                      <span className="isRequired">*</span>
                    </label>
                  </div>
                  <div className="col-9">
                    <div className="form-control divDisabled">
                      {values.person_in_charge_project}
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-3 text-end mt-2">
                    <label htmlFor="tel">
                      เบอร์ติดต่อ : <span className="isRequired">*</span>
                    </label>
                  </div>
                  <div className="col-9">
                    <Field
                      id="tel"
                      name="tel"
                      className="form-control"
                      type="text"
                      value={values.tel}
                    />
                    <div className="isError">
                      {errors.tel && touched.tel && errors.tel}
                    </div>
                  </div>
                </div>
                <div className="text-end">
                  <button className="btn btn-primary" type="submit">
                    <i className="bi bi-chevron-right"></i> ต่อไป
                  </button>
                </div>
              </form>
            )}
          </Formik>
          {/* <button
            className="btn btn-primary"
            type="button"
            onClick={nextSection2}
          >
            <i className="bi bi-chevron-right"></i> ต่อไป {">"}
          </button> */}
        </div>
      </div>
    </>
  );
}
