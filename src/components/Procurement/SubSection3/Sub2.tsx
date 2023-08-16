"use client";
import React, { useEffect, useState } from "react";
import { Formik, Form, FormikProps, Field } from "formik";
import * as Yup from "yup";
import "../procurement.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { FormState } from "@/redux/Procurement/types";
import { updateSubSection3, updateObj } from "@/redux/Procurement/reducer";
import DatePickerBuddhist from "../DatePickerBuddhist";

export default function Sub2() {
  const procurementStore = useSelector((state: RootState) => state.procurement);
  const dispatch = useDispatch();
  const [initValue, setInitValue] = useState<FormState["obj"]>(
    procurementStore.obj
  );
  const followPlanData: { id: number; name: string }[] = [
    {
      id: 1,
      name: "กำหนด TOR",
    },
    {
      id: 2,
      name: "กำหนด SPEC",
    },
    {
      id: 3,
      name: "จัดทำแบบรูปรายงานการก่อสร้าง",
    },
  ];

  useEffect(() => {
    console.log(procurementStore, procurementStore.obj.fiscal_year);
  });

  const callbackFromDate = (data?: any) => {
    console.log(data, "Dadasadasd");
  };

  const RegisterSchema = Yup.object().shape({
    draft_start_date: Yup.string().required("โปรดเลือกวันที่เริ่มต้น"),
    draft_end_date: Yup.string().required("โปรดเลือกวันที่สิ้นสุด"),
    follow_plan: Yup.string().required("โปรดเลือกข้อมูลสำหรับการปฏิบัติตามแผน"),
    approve_report_start_date: Yup.string().required("โปรดเลือกวันที่เริ่มต้น"),
    approve_report_end_date: Yup.string().required("โปรดเลือกวันที่เริ่มต้น"),
  });

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={initValue}
        validationSchema={RegisterSchema}
        onSubmit={(values) => {
          let obj: any = {
            draft_start_date: values.draft_start_date.toString(),
            draft_end_date: values.draft_end_date.toString(),
            follow_plan: values.follow_plan,
            approve_report_start_date:
              values.approve_report_start_date.toString(),
            approve_report_end_date: values.approve_report_end_date.toString(),
          };
          dispatch(updateObj(obj));
          dispatch(updateSubSection3(3));
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
            <div className={`form-wrapper-section`}>
              <div className="container"></div>
              <div className="row mb-2">
                <div className="col d-flex flex-wrap align-content-start">
                  <label className="mt-2 mb-2">
                    1. จัดทำร่าง TOR / Spec / แบบรูปรายงานก่อสร้าง :{" "}
                  </label>{" "}
                  &nbsp;
                  <div className="d-flex">
                    <label htmlFor="draft_start_date" className="mt-2">
                      วันที่เริ่มต้น <span className="isRequired">*</span>&nbsp;
                    </label>
                    <div>
                      <DatePickerBuddhist
                        callbackValue={(e) => {
                          setFieldValue("draft_start_date", e.date);
                        }}
                        selectedDate={procurementStore.obj.draft_start_date}
                        name={"draft_start_date"}
                        id={"draft_start_date"}
                        // minDate={
                        //   new Date(
                        //     Number(procurementStore.obj.fiscal_year) -
                        //       544 +
                        //       "-10-01"
                        //   )
                        // }
                      />
                      <div className="isError">
                        {errors.draft_start_date &&
                          touched.draft_start_date &&
                          errors.draft_start_date}
                      </div>
                    </div>
                  </div>
                  &nbsp;&nbsp;
                  <div className="d-flex">
                    <label htmlFor="draft_end_date" className="mt-2">
                      วันที่สิ้นสุด <span className="isRequired">*</span>&nbsp;
                    </label>
                    <div>
                      <DatePickerBuddhist
                        callbackValue={(e) => {
                          setFieldValue("draft_end_date", e.date);
                        }}
                        selectedDate={procurementStore.obj.draft_end_date}
                        name={"draft_end_date"}
                        id={"draft_end_date"}
                        // minDate={
                        //   new Date(
                        //     Number(procurementStore.obj.fiscal_year) -
                        //       544 +
                        //       "-10-01"
                        //   )
                        // }
                      />
                      <div className="isError">
                        {errors.draft_end_date &&
                          touched.draft_end_date &&
                          errors.draft_end_date}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-3 text-end mt-2">
                  <label htmlFor="follow_plan" style={{ whiteSpace: "nowrap" }}>
                    ข้อมูลสำหรับการปฏิบัติตามแผน :{" "}
                    <span className="isRequired">*</span>
                  </label>
                </div>
                <div className="col-9">
                  <Field
                    as="select"
                    id="follow_plan"
                    className="form-select"
                    name="follow_plan"
                    value={values.follow_plan}
                  >
                    <option value="" style={{ color: "gray" }}>
                      ----- เลือก -----
                    </option>
                    {followPlanData.map((i) => {
                      return (
                        <option key={i.id} value={i.id}>
                          {i.name}
                        </option>
                      );
                    })}
                  </Field>
                  <div className="isError">
                    {errors.follow_plan &&
                      touched.follow_plan &&
                      errors.follow_plan}
                  </div>
                </div>
              </div>
            </div>
            <div className={`form-wrapper-section`}>
              <div className="container">
                <div className="row">
                  <div className="col d-flex flex-wrap align-content-start">
                    <label className="mt-2 mb-2">
                      2. อนุมัติรายงานขอซื้อ/ขอจ้าง :
                    </label>{" "}
                    &nbsp;
                    <div className="d-flex ">
                      <label
                        htmlFor="approve_report_start_date"
                        className="mt-2"
                      >
                        วันที่เริ่มต้น <span className="isRequired">*</span>
                        &nbsp;
                      </label>
                      <div>
                        <DatePickerBuddhist
                          callbackValue={(e) => {
                            setFieldValue("approve_report_start_date", e.date);
                          }}
                          selectedDate={
                            procurementStore.obj.approve_report_start_date
                          }
                          name={"approve_report_start_date"}
                          id={"approve_report_start_date"}
                          // minDate={
                          //   new Date(
                          //     Number(procurementStore.obj.fiscal_year) -
                          //       544 +
                          //       "-10-01"
                          //   )
                          // }
                        />
                        <div className="isError">
                          {errors.approve_report_start_date &&
                            touched.approve_report_start_date &&
                            errors.approve_report_start_date}
                        </div>
                      </div>
                      &nbsp;&nbsp;
                    </div>
                    <div className="d-flex">
                      <label htmlFor="approve_report_end_date" className="mt-2">
                        วันที่สิ้นสุด <span className="isRequired">*</span>
                        &nbsp;
                      </label>
                      <div>
                        <DatePickerBuddhist
                          callbackValue={(e) => {
                            setFieldValue("approve_report_end_date", e.date);
                          }}
                          selectedDate={
                            procurementStore.obj.approve_report_end_date
                          }
                          name={"approve_report_end_date"}
                          id={"approve_report_end_date"}
                          // minDate={
                          //   new Date(
                          //     Number(procurementStore.obj.fiscal_year) -
                          //       544 +
                          //       "-10-01"
                          //   )
                          // }
                        />
                        <div className="isError">
                          {errors.approve_report_end_date &&
                            touched.approve_report_end_date &&
                            errors.approve_report_end_date}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-end">
              <button
                className="btn btn-secondary"
                type="button"
                onClick={() => dispatch(updateSubSection3(1))}
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
