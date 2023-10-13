"use client";
import React, { useEffect, useState, useRef } from "react";
import { Formik, Form, FormikProps, Field, FormikValues } from "formik";
import * as Yup from "yup";
import "@components/Report-temp/report-temp.scss";
import axios from "../../../../service/axios";
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
  const [JSSelect] = useState([
    {
      id: "",
      name: "ทั้งหมด",
    },
    {
      id: "",
      name: "หมวดที่ 1 การดำเนินงานตาม",
    },
    {
      id: "",
      name: "หมวดที่ 2 ผลการดำเนินงานของรัฐวิสาหกิจ",
    }
  ]);

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
              <div className="col justify-content-left">
                <div className="d-flex flex-row justify-content-right align-items-center mr-50">
                    <div>
                    <label htmlFor="fiscal_year" className="mr-10">
                        ปีงบประมาณ:{" "}
                    </label>
                    </div>
                    <div className="wd-250">
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
              </div>
              <div className="col justify-content-left ml-70">
              <div className="d-flex flex-row justify-content-left align-items-center">
                    <div>
                    <label htmlFor="resp_agency_name" className="mr-20">
                    <span style={{ whiteSpace: 'nowrap' }}>ประเภทหมวดตัวชี้วัด</span>:{" "}
                    </label>
                    </div>
                    <div className="">
                    <Field
                        as="select"
                        id="resp_agency_name"
                        className="form-select"
                        name="resp_agency_name"
                        value={values.resp_agency_name}
                    >
                        {JSSelect.map((i, idx) => {
                        return (
                            <option key={idx} value={i.name}>
                            {i.name}
                            </option>
                        );
                        })}
                    </Field>
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
