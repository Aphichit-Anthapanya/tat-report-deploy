"use client";
import React, { useEffect, useState, useRef } from "react";
import { Formik, Form, FormikProps, Field, FormikValues } from "formik";
import * as Yup from "yup";
import "@/components/Procurement/procurement.scss";
import Link from "next/link";

interface ISearchObj {
  fiscal_year: string;
  resp_agency_name: string;
  // type_of_statement: string;
  budget_investment: boolean;
  budget_reserve_urgent: boolean;
  budget_support: boolean;
  budget_income: boolean;
  budget_other: boolean;
  budget_other_central: boolean;
  budget_other_loan: boolean;
  budget_other_other: boolean;
  proc_method: string;
  proj_activ: string;
  job_status: string;
}

export default function Search() {
  const initialSearchObj = {
    fiscal_year: "",
    resp_agency_name: "",
    budget_investment: false,
    budget_reserve_urgent: false,
    budget_support: false,
    budget_income: false,
    budget_other: false,
    budget_other_central: false,
    budget_other_loan: false,
    budget_other_other: false,
    proc_method: "",
    proj_activ: "",
    job_status: "",
  };
  const [searchObj, setSearchObj] = useState<ISearchObj>(initialSearchObj);
  const [FYSelect, setFYSelect] = useState<number[]>([]);

  const [JSSelect, setJSSelect] = useState([
    {
      id: "",
      name: "บันทึกข้อมูลชั่วคราว",
    },
    {
      id: "",
      name: "เสนอผู้บังคับบัญชา เห็นชอบแผน",
    },
    {
      id: "",
      name: "เสนอผู้บังคับบัญชา เห็นชอบรายงานผล ไตรมาส 1",
    },
    {
      id: "",
      name: "เสนอผู้บังคับบัญชา เห็นชอบรายงานผล ไตรมาส 2",
    },
    {
      id: "",
      name: "เสนอผู้บังคับบัญชา เห็นชอบรายงานผล ไตรมาส 3",
    },
    {
      id: "",
      name: "เสนอผู้บังคับบัญชา เห็นชอบรายงานผล ไตรมาส 4",
    },
    {
      id: "",
      name: "ผู้บังคับบัญชา ส่งกลับแก้ไข(แผน)",
    },
    {
      id: "",
      name: "ผู้บังคับบัญชา ส่งกลับแก้ไข(รายงานผล) ไตรมาส 1",
    },
    {
      id: "",
      name: "ผู้บังคับบัญชา ส่งกลับแก้ไข(รายงานผล) ไตรมาส 2",
    },
    {
      id: "",
      name: "ผู้บังคับบัญชา ส่งกลับแก้ไข(รายงานผล) ไตรมาส 3",
    },
    {
      id: "",
      name: "ผู้บังคับบัญชา ส่งกลับแก้ไข(รายงานผล) ไตรมาส 4",
    },
    {
      id: "",
      name: "ผู้บังคับบัญชา เห็นชอบแผน",
    },
    {
      id: "",
      name: "ผู้บังคับบัญชา เห็นชอบรายงานผล ไตรมาส 1",
    },
    {
      id: "",
      name: "ผู้บังคับบัญชา เห็นชอบรายงานผล ไตรมาส 2",
    },
    {
      id: "",
      name: "ผู้บังคับบัญชา เห็นชอบรายงานผล ไตรมาส 3",
    },
    {
      id: "",
      name: "ผู้บังคับบัญชา เห็นชอบรายงานผล ไตรมาส 4",
    },
    {
      id: "",
      name: "กบจ. รับทราบแผน",
    },
    {
      id: "",
      name: "กบจ. ส่งกลับแก้ไข",
    },
    {
      id: "",
      name: "ยกเลิก",
    },
  ]);

  const formikRef = useRef<FormikProps<ISearchObj>>(null);

  useEffect(() => {
    genFYSelect();
    if (formikRef.current) {
      formikRef.current.resetForm({ values: searchObj });
    }
  }, [searchObj]);

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

  return (
    <div className={`form-wrapper-section`}>
      <div className="container">
        <Formik
          enableReinitialize
          initialValues={searchObj}
          innerRef={formikRef}
          onSubmit={(values) => {
            console.log(values, "onSubmit");
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
              <div className="row">
                <div className="col-3 text-end">
                  <label htmlFor="fiscal_year" className="mt-2">
                    ปีงบประมาณ:{" "}
                  </label>
                </div>
                <div className="col-9 col-md-3 mb-2">
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
                </div>
                <div className="col-3 text-end">
                  <label htmlFor="resp_agency_name" className="mt-2">
                    ชื่อหน่วยงานที่รับผิดชอบ:{" "}
                  </label>
                </div>
                <div className="col-9 col-md-3 mb-2">
                  <Field
                    id="resp_agency_name"
                    className="form-control"
                    name="resp_agency_name"
                    value={values.resp_agency_name}
                  ></Field>
                </div>
              </div>
              <div className="row">
                <div className="col-2 text-end">
                  <label htmlFor="" className="mt-2">
                    ประเภทงบ:{" "}
                  </label>
                </div>
                <div className="col-10 col-md-4 mb-2 mt-2">
                  <div className="form-check form-check-inline">
                    <label
                      className="form-check-label"
                      htmlFor="budget_investment"
                    >
                      <Field
                        className="form-check-input mr-4"
                        type="checkbox"
                        name="budget_investment"
                        id="budget_investment"
                        onChange={(e: any) => {
                          handleChange(e);
                        }}
                      />
                      &nbsp;งบลงทุน&nbsp;
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <label
                      className="form-check-label"
                      htmlFor="budget_reserve_urgent"
                    >
                      <Field
                        className="form-check-input"
                        type="checkbox"
                        name="budget_reserve_urgent"
                        id="budget_reserve_urgent"
                        onChange={(e: any) => {
                          handleChange(e);
                        }}
                      />
                      งบสำรอง ฯ&nbsp;
                      {/* กรณีจำเป็นเร่งด่วน */}
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <label
                      className="form-check-label"
                      htmlFor="budget_support"
                    >
                      <Field
                        className="form-check-input"
                        type="checkbox"
                        name="budget_support"
                        id="budget_support"
                        onChange={(e: any) => {
                          handleChange(e);
                        }}
                      />
                      งบอุดหนุน&nbsp;
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <label className="form-check-label" htmlFor="budget_income">
                      <Field
                        className="form-check-input"
                        type="checkbox"
                        name="budget_income"
                        id="budget_income"
                        onChange={(e: any) => {
                          handleChange(e);
                        }}
                      />
                      งบรายได้&nbsp;
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <label className="form-check-label" htmlFor="budget_other">
                      <Field
                        className="form-check-input"
                        type="checkbox"
                        name="budget_other"
                        id="budget_other"
                        onChange={(e: any) => {
                          handleChange(e);
                        }}
                      />
                      งบอื่น ๆ&nbsp;
                    </label>
                  </div>
                  <br />
                  <div className="form-check form-check-inline">
                    <label
                      className="form-check-label"
                      htmlFor="budget_other_central"
                    >
                      <Field
                        className="form-check-input"
                        type="checkbox"
                        name="budget_other_central"
                        id="budget_other_central"
                        onChange={(e: any) => {
                          handleChange(e);
                        }}
                      />
                      งบกลาง&nbsp;
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <label
                      className="form-check-label"
                      htmlFor="budget_other_loan"
                    >
                      <Field
                        className="form-check-input"
                        type="checkbox"
                        name="budget_other_loan"
                        id="budget_other_loan"
                        onChange={(e: any) => {
                          handleChange(e);
                        }}
                      />
                      งบเงินกู้ ฯ&nbsp;
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <label
                      className="form-check-label"
                      htmlFor="budget_other_other"
                    >
                      <Field
                        className="form-check-input"
                        type="checkbox"
                        name="budget_other_other"
                        id="budget_other_other"
                        onChange={(e: any) => {
                          handleChange(e);
                        }}
                      />
                      งบอื่น ๆ&nbsp;
                    </label>
                  </div>
                </div>
                <div className="col-3 text-end">
                  <label htmlFor="proc_method" className="mt-2">
                    วิธีการจัดซื้อจัดจ้าง:{" "}
                  </label>
                </div>
                <div className="col-9 col-md-3">
                  <Field
                    as="select"
                    id="proc_method"
                    className="form-select"
                    name="proc_method"
                    value={values.proc_method}
                  >
                    <option value="" style={{ color: "gray" }}>
                      ----- เลือก -----
                    </option>
                  </Field>
                </div>
              </div>
              <div className="row">
                <div className="col-3 text-end">
                  <label htmlFor="proj_activ" className="mt-2">
                    โครงการ/กิจกรรม:{" "}
                  </label>
                </div>
                <div className="col-9 col-md-3">
                  <Field
                    id="proj_activ"
                    className="form-control"
                    name="proj_activ"
                    value={values.proj_activ}
                  ></Field>
                </div>
                <div className="col-3 text-end">
                  <label htmlFor="job_status" className="mt-2">
                    สถานะงาน:{" "}
                  </label>
                </div>
                <div className="col-9 col-md-3">
                  <Field
                    as="select"
                    id="job_status"
                    className="form-select"
                    name="job_status"
                    value={values.job_status}
                  >
                    <option value="" style={{ color: "gray" }}>
                      ----- เลือก -----
                    </option>
                    {JSSelect.map((i, idx) => {
                      return (
                        <option key={idx} value={i.name}>
                          {i.name}
                        </option>
                      );
                    })}
                  </Field>
                  <span
                    style={{ fontSize: "12px", color: "gray" }}
                    className="mt-1"
                  >
                    {values.job_status}
                  </span>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col text-center">
                  <button className="btn btn-primary" type="submit">
                    <i className="bi bi-search"></i> ค้นหา
                  </button>
                  <button
                    onClick={() => setSearchObj(initialSearchObj)}
                    className="btn btn-secondary"
                    style={{ marginLeft: "14px" }}
                    type="button"
                  >
                    <i className="bi bi-eraser-fill"></i> ล้างค่า
                  </button>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
