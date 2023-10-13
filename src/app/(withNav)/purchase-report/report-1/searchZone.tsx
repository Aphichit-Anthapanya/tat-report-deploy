"use client";
import React, { useEffect, useState, useRef } from "react";
import { Formik, Form, FormikProps, Field, FormikValues } from "formik";
import * as Yup from "yup";
import "@components/Report-temp/report-temp.scss";
import axios from "../../../../../service/axios";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import {
  setSearchConditions,
  setSearchData,
  setSearchDataCount,
  setSearchDataCurrentPage,
} from "@/redux/Procurement/reducer";
import { ISearchObj } from "@/redux/Procurement/types";

import { RootState } from "@/redux/store";

export default function Search() {
  const procurementStore = useSelector((state: RootState) => state.procurement);
  const initialSearchObj = {
    fiscal_year: "",
    indicators_name: "",
    indicators_number: 0,
    resp_agency_name: "",
    budget_investment: false,
    budget_investment_budget: false,
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

  const [JSSelect] = useState([
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

  const [searchObj, setSearchObj] = useState<ISearchObj>(
    procurementStore.search_conditions
  );

  const [FYSelect, setFYSelect] = useState<number[]>([]);
  const dispatch = useDispatch();

  const formikRef = useRef<FormikProps<ISearchObj>>(null);

  const [otherBudget, setOtherBudget] = useState(false);
  const [investmentBudget, setInvestmentBudget] = useState(false);

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
      let index = dateNow.getFullYear();
      index >= dateNow.getFullYear() - 5;
      index--
    ) {
      temp.push(index + 543);
    }
    setFYSelect(temp);
  }

  async function getSearchData(page: any = 0, value: ISearchObj) {
    // /procurement-data?name=XXX
    let skip = page == 0 ? 0 : (page - 1) * 10;
    let take = 10;
    await axios
      .get(
        `/procurement-data?name=${value.proj_activ}&skip=${skip}&take=${take}`
      )
      .then((result) => {
        console.log(result);
        dispatch(setSearchData(result.data.procurements));
        dispatch(setSearchDataCount(result.data.count));
      })
      .catch((error) => {});
  }

  return (
      <div className="section-info">
        <Formik
          enableReinitialize
          initialValues={searchObj}
          innerRef={formikRef}
          onSubmit={(values) => {
            console.log(values, "onSubmit");
            dispatch(setSearchConditions(values));
            dispatch(setSearchDataCurrentPage(1));
            getSearchData(0, values);
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
              <div className="col justify-content-left ml-70">
                <div className="d-flex flex-row justify-content-left align-items-center">
                    <div>
                    <label htmlFor="fiscal_year" className="mr-10">
                        ปีงบประมาณ:{" "}
                    </label>
                    </div>
                    <div>
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
                </div>
                <div className="d-flex flex-row justify-content-left mt-20">
                <div>
                  <label htmlFor="" className="mr-20">
                    <span style={{ whiteSpace: 'nowrap' }}>ประเภทงบ</span>:{" "}
                  </label>
                </div>
                <div className="d-flex flex-column">
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
                          setInvestmentBudget(e.target.checked);
                        }}
                      />
                      &nbsp;งบลงทุน&nbsp;
                    </label>
                  </div>
                  {investmentBudget && (
                    <div style={{ marginLeft: "16px" }}>
                      <div className="form-check form-check-inline">
                        <label
                          className="form-check-label"
                          htmlFor="budget_investment_budget"
                        >
                          <Field
                            className="form-check-input"
                            type="checkbox"
                            name="budget_investment_budget"
                            id="budget_investment_budget"
                            onChange={(e: any) => {
                              handleChange(e);
                            }}
                          />
                          งบลงทุน(งบประมาณ)&nbsp;
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
                          งบสำรองกรณีจำเป็นเร่งด่วน&nbsp;
                        </label>
                      </div>
                    </div>
                  )}
                  {/* {investmentBudget && <br />} */}
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
                          setOtherBudget(e.target.checked);
                        }}
                      />
                      งบอื่น ๆ&nbsp;
                    </label>
                  </div>
                  {otherBudget && (
                    <div style={{ marginLeft: "16px" }} className="d-flex flex-column">
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
                  )}
                </div>
                </div>
              </div>
              <div className="col justify-content-left ml-70">
              <div className="d-flex flex-row justify-content-left align-items-center">
                    <div>
                    <label htmlFor="resp_agency_name" className="mr-20">
                        หน่วยงาน:{" "}
                    </label>
                    </div>
                    <div>
                    <Field
                        as="select"
                        id="resp_agency_name"
                        className="form-select"
                        name="resp_agency_name"
                        value={values.resp_agency_name}
                    >
                        <option value="" style={{ color: "gray" }}>
                        ----- เลือก -----
                        </option>
                    </Field>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-left align-items-center mt-20">
                    <div>
                    <label htmlFor="job_status" className="mr-20">
                        <span style={{ whiteSpace: 'nowrap' }}>สถานะงาน</span>:{" "}
                    </label>
                    </div>
                    <div className="wd-200">
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
  );
}
