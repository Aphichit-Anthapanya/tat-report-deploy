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

const Popup = ({ isOpen, onClose }:any) => {
    const [JSSelect] = useState([
        {
          id: "",
          name: "---- เลือก ----",
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
    <div className={`popup ${isOpen ? 'open' : ''}`}>
      <div className="d-flex flex-column mt-10 mb-10">
            <div className="d-flex justify-content-center mb-20">
                <h4>การเพิ่มข้อมูลตัวชี้วัดตามบันทึกข้อตกลง</h4>
            </div>
            <div className="d-flex flex-column ml-50 mr-50">
                <div className="d-flex flex-row justify-content-left">
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
                            <div className="d-flex flex-column">
                                <div className="d-flex flex-row justify-content-right align-items-center mb-20">
                                    <div>
                                        <label htmlFor="fiscal_year" className="mr-10">
                                            <b>ปีงบประมาณ:{" "}</b>
                                        </label>
                                    </div>
                                    <div className="wd-250 mr-150">
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
                                <div className="d-flex flex-row justify-content-right align-items-center mb-20 mr-320">
                                    <div>
                                        <label htmlFor="" className="ml-5 mr-10">
                                            <b>ลำดับตัวชี้วัด:</b>
                                        </label>
                                    </div>
                                    <div className="wd-200px mr-200">
                                        <Field
                                            type="text"
                                            className="form-control"
                                            placeholder=""
                                            name="indicators_number"
                                            id="filterOverall"
                                            value={values.indicators_number}
                                        >
                                        </Field>
                                    </div>
                                </div>
                                <div className="d-flex flex-row justify-content-right align-items-center mb-20">
                                    <div>
                                        <label htmlFor="" className="ml-20 mr-10">
                                            <b>ชื่อตัวชี้วัด:</b>
                                        </label>
                                    </div>
                                    <div className="wd-400">
                                        <Field
                                            type="text"
                                            className="form-control"
                                            placeholder=""
                                            name="indicators_name"
                                            id="filterOverall"
                                            value={values.indicators_name}
                                        >
                                        </Field>
                                    </div>
                                </div>
                                <div className="d-flex flex-row justify-content-right align-items-center mb-20">
                                        <div>
                                        <label htmlFor="resp_agency_name" className="mr-20">
                                        <span style={{ whiteSpace: 'nowrap' }}><b>ประเภทหมวดตัวชี้วัด</b></span>:{" "}
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
                        )}
                    </Formik>
                </div>
                <div className="d-flex flex-row justify-content-left mb-10">
                    <div className="mr-10 d-flex flex-row justify-content-left"><b>การแบ่งค่าน้ำหนัก:</b></div>
                </div>
                <div className="table-container mb-20">
                    <table className="table">
                        <thead>
                            <tr className='table-primary'>
                                <th>
                                    <div className="wd-100 d-flex justify-content-center align-items-center">ไตรมาสที่ 1</div>
                                </th>
                                <th>
                                    <div className="wd-100 d-flex justify-content-center align-items-center">ไตรมาสที่ 2</div>
                                    </th>
                                <th>
                                    <div className="wd-100 d-flex justify-content-center align-items-center">ไตรมาสที่ 3</div>
                                </th>
                                <th>
                                    <div className="wd-100 d-flex justify-content-center align-items-center">ไตรมาสที่ 4</div>
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <th>
                                     <div className="mr-10 ml-10">
                                        <input type="text" className="form-control" placeholder="" id="filterOverall"/>
                                    </div>
                                </th>
                                <th>
                                     <div className="mr-10 ml-10">
                                        <input type="text" className="form-control" placeholder="" id="filterOverall"/>
                                    </div>
                                </th>
                                <th>
                                     <div className="mr-10 ml-10">
                                        <input type="text" className="form-control" placeholder="" id="filterOverall"/>
                                    </div>
                                </th>
                                <th>
                                     <div className="mr-10 ml-10">
                                        <input type="text" className="form-control" placeholder="" id="filterOverall"/>
                                    </div>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="d-flex flex-row justify-content-left mb-20">
                    <div className="mr-10 d-flex flex-row justify-content-left">
                        <span style={{ whiteSpace: 'nowrap' }}><b>รหัสผ่านสำหรับตัวชี้วัด:</b></span>{" "}
                    </div>
                    <div>แบ่งปันรหัสผ่านนี้กับบุคคลที่ท่านต้องการให้สามารถจัดการข้อมูลโครงการกับตัวชี้วัดนี้เท่านั้นผู้ที่รู้รหัสผ่านนี้เท่านั้น จึงจะสามารถเข้าถึงตัวชี้วัดของท่านได้</div>
                </div>
                <div className="d-flex flex-row justify-content-center align-items-center mb-20">
                    <div className="mr-10 d-flex flex-row justify-content-left">
                        <span style={{ whiteSpace: 'nowrap' }}><b>รหัสผ่าน:</b></span>{" "}
                    </div>
                    <div className="wd-200">
                        <input type="text" className="form-control" placeholder="" id="disabledInput" disabled/>
                    </div>
                </div>
            </div>
            
        <div className="d-flex justify-content-center">
            <button className="close-button mr-20 bordR" onClick={onClose}>
                <div>ยกเลิก</div>
            </button>
            <button className="close-button bordR" onClick={onClose}>
                <div>ยืนยัน</div>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
