"use client";
import React, { useEffect, useState } from "react";
import { Formik, Form, FormikProps, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../procurement.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { FormState } from "@/redux/Procurement/types";
import {
  updateSubSection3,
  updateProcMethodByKey,
  updateObj,
} from "@/redux/Procurement/reducer";
import DatePickerBuddhist from "../DatePickerBuddhist";
import InputCurrency from "../InputCurrency";

export default function Sub4() {
  const procurementStore = useSelector((state: RootState) => state.procurement);
  const dispatch = useDispatch();
  const [initValue, setInitValue] = useState<FormState["obj"]>(
    procurementStore.obj
  );

  useEffect(() => {
    console.log(procurementStore, procurementStore.obj.fiscal_year);
  }, []);

  const callbackFromDate = (data?: any) => {
    console.log(data, "Dadasadasd");
  };

  const handleCheckbox = (e: any, id: any) => {
    console.log(e, id);
    dispatch(updateProcMethodByKey({ key: id, value: e.target.checked }));
  };

  const RegisterSchema = Yup.object().shape({
    contract_start_date: Yup.string().required("โปรดเลือกวันที่เริ่มต้น"),
    contract_end_date: Yup.string().required("โปรดเลือกวันที่สิ้นสุด"),
    contract_name: Yup.string().required("โปรดกรอกชื่อคู่สัญญา"),
    contract_status: Yup.string().required("โปรดกรอกสถานะสัญญา"),
    contract_number: Yup.string().required(
      "โปรดกรอกเลขที่สัญญา/ใบสั่งซื้อสั่งจ้าง"
    ),
    contract_s_date: Yup.string().required("โปรดเลือกวันที่ทำสัญญา"),
    contract_e_date: Yup.string().required("โปรดเลือกวันสิ้นสุดสัญญา"),
    contract_budget: Yup.string().required("โปรดกรอกวงเงินทำสัญญา"),
    contract_term_delivery: Yup.string().required(
      "โปรดกรอกเงื่อนไขการส่งมอบงาน"
    ),
    contract_remain_budget: Yup.string(),
    // .required(      "โปรดกรอกเงินคงเหลือจากซื้อจ้าง"    ),
  });

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={initValue}
        validationSchema={RegisterSchema}
        onSubmit={(values) => {
          let obj: any = {
            contract_start_date: values.contract_start_date.toString(),
            contract_end_date: values.contract_end_date.toString(),
            contract_name: values.contract_name,
            contract_status: values.contract_status,
            contract_number: values.contract_number,
            contract_s_date: values.contract_s_date.toString(),
            contract_e_date: values.contract_e_date.toString(),
            contract_budget: values.contract_budget,
            contract_term_delivery: values.contract_term_delivery,
            contract_remain_budget: values.contract_remain_budget,
          };
          dispatch(updateObj(obj));
          dispatch(updateSubSection3(5));
          console.log(values, "sdfsdfsdf");
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
            <div className={`form-wrapper-section`}>
              <div className="container">
                <div className="row mb-2">
                  <div className="col d-flex flex-wrap align-content-start">
                    <label className="mt-2 mb-2">
                      4. ทำสัญญาจัดซื้อ/จัดจ้าง : วันที่เริ่มต้น :{" "}
                    </label>{" "}
                    &nbsp;
                    <div className="d-flex">
                      <label htmlFor="contract_start_date" className="mt-2">
                        วันที่เริ่มต้น <span className="isRequired">*</span>
                        &nbsp;
                      </label>
                      <div>
                        <DatePickerBuddhist
                          callbackValue={(e) => {
                            setFieldValue("contract_start_date", e.date);
                          }}
                          selectedDate={
                            procurementStore.obj.contract_start_date
                          }
                          name={"contract_start_date"}
                          id={"contract_start_date"}
                          // minDate={
                          //   new Date(
                          //     Number(procurementStore.obj.fiscal_year) -
                          //       544 +
                          //       "-10-01"
                          //   )
                          // }
                        />
                        <ErrorMessage
                          name="contract_start_date"
                          component="div"
                          className="isError"
                        />
                      </div>
                    </div>
                    &nbsp;&nbsp;
                    <div className="d-flex">
                      <label htmlFor="contract_end_date" className="mt-2">
                        วันที่สิ้นสุด <span className="isRequired">*</span>
                        &nbsp;
                      </label>
                      <div>
                        <DatePickerBuddhist
                          callbackValue={(e) => {
                            setFieldValue("contract_end_date", e.date);
                          }}
                          selectedDate={procurementStore.obj.contract_end_date}
                          name={"contract_end_date"}
                          id={"contract_end_date"}
                          // minDate={
                          //   new Date(
                          //     Number(procurementStore.obj.fiscal_year) -
                          //       544 +
                          //       "-10-01"
                          //   )
                          // }
                        />
                        <ErrorMessage
                          name="contract_end_date"
                          component="div"
                          className="isError"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-3 text-end mt-2 align-self-center">
                    <label htmlFor="contract_name">
                      ชื่อคู่สัญญา : <span className="isRequired">*</span>
                    </label>
                  </div>
                  <div className="col-9">
                    <Field
                      id="contract_name"
                      className="form-control"
                      type="text"
                      name="contract_name"
                      value={values.contract_name}
                    />
                    <ErrorMessage
                      name="contract_name"
                      component="div"
                      className="isError"
                    />
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-3 text-end mt-2 align-self-center">
                    <label htmlFor="contract_status">
                      สถานะสัญญา : <span className="isRequired">*</span>
                    </label>
                  </div>
                  <div className="col-9">
                    <Field
                      id="contract_status"
                      className="form-control"
                      type="text"
                      name="contract_status"
                      value={values.contract_status}
                    />
                    <ErrorMessage
                      name="contract_status"
                      component="div"
                      className="isError"
                    />
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-3 text-end mt-2 align-self-center">
                    <label htmlFor="contract_number">
                      เลขที่สัญญา/ใบสั่งซื้อสั่งจ้าง :{" "}
                      <span className="isRequired">*</span>
                    </label>
                  </div>
                  <div className="col-9">
                    <Field
                      id="contract_number"
                      className="form-control"
                      type="text"
                      name="contract_number"
                      value={values.contract_number}
                    />
                    <ErrorMessage
                      name="contract_number"
                      component="div"
                      className="isError"
                    />
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-3 text-end mt-2 align-self-center">
                    <label htmlFor="contract_s_date">
                      วันที่ทำสัญญา : <span className="isRequired">*</span>
                    </label>
                  </div>
                  <div className="col-9">
                    <DatePickerBuddhist
                      callbackValue={(e) => {
                        setFieldValue("contract_s_date", e.date);
                      }}
                      selectedDate={procurementStore.obj.contract_s_date}
                      name={"contract_s_date"}
                      id={"contract_s_date"}
                      // minDate={
                      //   new Date(
                      //     Number(procurementStore.obj.fiscal_year) -
                      //       544 +
                      //       "-10-01"
                      //   )
                      // }
                    />
                    <ErrorMessage
                      name="contract_s_date"
                      component="div"
                      className="isError"
                    />
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-3 text-end mt-2 align-self-center">
                    <label htmlFor="contract_e_date">
                      วันสิ้นสุดสัญญา : <span className="isRequired">*</span>
                    </label>
                  </div>
                  <div className="col-9">
                    <DatePickerBuddhist
                      callbackValue={(e) => {
                        setFieldValue("contract_e_date", e.date);
                      }}
                      selectedDate={procurementStore.obj.contract_e_date}
                      name={"contract_e_date"}
                      id={"contract_e_date"}
                      // minDate={
                      //   new Date(
                      //     Number(procurementStore.obj.fiscal_year) -
                      //       544 +
                      //       "-10-01"
                      //   )
                      // }
                    />
                    <ErrorMessage
                      name="contract_e_date"
                      component="div"
                      className="isError"
                    />
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-3 text-end mt-2 align-self-center">
                    <label htmlFor="contract_budget">
                      วงเงินทำสัญญา : <span className="isRequired">*</span>
                    </label>
                  </div>
                  <div className="col-9">
                    <Field
                      id="contract_budget"
                      className="form-control"
                      name="contract_budget"
                      component={InputCurrency}
                      value={values.contract_budget}
                    />
                    <ErrorMessage
                      name="contract_budget"
                      component="div"
                      className="isError"
                    />
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-3 text-end mt-2 align-self-center">
                    <label htmlFor="contract_term_delivery">
                      เงื่อนไขการส่งมอบงาน :{" "}
                      <span className="isRequired">*</span>
                    </label>
                  </div>
                  <div className="col-9">
                    <Field
                      id="contract_term_delivery"
                      className="form-control"
                      type="text"
                      name="contract_term_delivery"
                      value={values.contract_term_delivery}
                    />
                    <ErrorMessage
                      name="contract_term_delivery"
                      component="div"
                      className="isError"
                    />
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-3 text-end mt-2 align-self-center">
                    <label htmlFor="contract_remain_budget">
                      รายงานเงินคงเหลือ : <span className="isRequired">*</span>
                    </label>
                  </div>
                  <div className="col-9">
                    <div className="form-control divDisabled">
                      {values.contract_remain_budget}
                    </div>
                    <ErrorMessage
                      name="contract_remain_budget"
                      component="div"
                      className="isError"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-end">
              <button
                className="btn btn-secondary"
                type="button"
                onClick={() => dispatch(updateSubSection3(3))}
              >
                <i className="bi bi-chevron-left"></i> ย้อนกลับ
              </button>
              <button
                className="btn btn-primary"
                style={{ marginLeft: "20px" }}
                type="submit"
              >
                <i className="bi bi-chevron-right"></i> ต่อไป
              </button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}
