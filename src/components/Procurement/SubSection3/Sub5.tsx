"use client";
import React, { useEffect, useState } from "react";
import { Formik, Form, FormikProps, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../procurement.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { FormState } from "@/redux/Procurement/types";
import {
  installment,
  ISMAmount,
  ISMQuarter,
  ISMStatus,
} from "@/redux/Procurement/data";
import {
  updateSection,
  updateSubSection3,
  updateProcMethodByKey,
  updateProcMethodByGroup,
  updateObj,
} from "@/redux/Procurement/reducer";
import DatePickerBuddhist from "../DatePickerBuddhist";
import InputCurrency from "../InputCurrency";

const InstallmentKeys: string[] = Object.keys(installment);
const ISMAmountKeys: string[] = Object.keys(ISMAmount);
const ISMQuarterKeys: string[] = Object.keys(ISMQuarter);
const ISMStatusKeys: string[] = Object.keys(ISMStatus);

export default function Sub5() {
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

  const formatCurrency = (value: any) => {
    if (value == "" || value == "." || value == ".." || isNaN(value)) {
      return "0.00";
    }

    return parseFloat(value)
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const RegisterSchema = Yup.object().shape({
    deliver_start_date: Yup.string().required("โปรดเลือกวันที่เริ่มต้น"),
    deliver_end_date: Yup.string().required("โปรดเลือกวันที่สิ้นสุด"),
  });

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={initValue}
        validationSchema={RegisterSchema}
        onSubmit={(values) => {
          let obj: any = {
            deliver_start_date: values.deliver_start_date.toString(),
            deliver_end_date: values.deliver_end_date.toString(),
            installment_1: values.installment_1,
            installment_2: values.installment_2,
            installment_3: values.installment_3,
            installment_4: values.installment_4,
            installment_5: values.installment_5,
            installment_6: values.installment_6,
            installment_7: values.installment_7,
            installment_8: values.installment_8,
            installment_9: values.installment_9,
            installment_10: values.installment_10,
            installment_11: values.installment_11,
            installment_12: values.installment_12,
            ism_amount_1: values.ism_amount_1,
            ism_amount_2: values.ism_amount_2,
            ism_amount_3: values.ism_amount_3,
            ism_amount_4: values.ism_amount_4,
            ism_amount_5: values.ism_amount_5,
            ism_amount_6: values.ism_amount_6,
            ism_amount_7: values.ism_amount_7,
            ism_amount_8: values.ism_amount_8,
            ism_amount_9: values.ism_amount_9,
            ism_amount_10: values.ism_amount_10,
            ism_amount_11: values.ism_amount_11,
            ism_amount_12: values.ism_amount_12,
          };
          console.log(values, "onSubmit");
          dispatch(updateObj(obj));
          dispatch(updateSubSection3(6));
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
                      5. การดำเนินงานตามเงื่อนไขของสัญญา/
                      <br />
                      ส่งมอบงานงวดต่างๆ : วันที่เริ่มต้น :{" "}
                    </label>{" "}
                    &nbsp;
                    <div className="d-flex mb-2">
                      <label htmlFor="deliver_start_date" className="mt-2">
                        วันที่เริ่มต้น <span className="isRequired">*</span>
                        &nbsp;
                      </label>
                      <div>
                        <DatePickerBuddhist
                          callbackValue={(e) => {
                            setFieldValue("deliver_start_date", e.date);
                          }}
                          selectedDate={procurementStore.obj.deliver_start_date}
                          name={"deliver_start_date"}
                          id={"deliver_start_date"}
                          // minDate={
                          //   new Date(
                          //     Number(procurementStore.obj.fiscal_year) -
                          //       544 +
                          //       "-10-01"
                          //   )
                          // }
                        />
                        <ErrorMessage
                          name="deliver_start_date"
                          component="div"
                          className="isError"
                        />
                      </div>
                    </div>
                    &nbsp;&nbsp;
                    <div className="d-flex">
                      <label htmlFor="deliver_end_date" className="mt-2">
                        วันที่สิ้นสุด <span className="isRequired">*</span>
                        &nbsp;
                      </label>
                      <div>
                        <DatePickerBuddhist
                          callbackValue={(e) => {
                            setFieldValue("deliver_end_date", e.date);
                          }}
                          selectedDate={procurementStore.obj.deliver_end_date}
                          name={"deliver_end_date"}
                          id={"deliver_end_date"}
                          // minDate={
                          //   new Date(
                          //     Number(procurementStore.obj.fiscal_year) -
                          //       544 +
                          //       "-10-01"
                          //   )
                          // }
                        />
                        <ErrorMessage
                          name="deliver_end_date"
                          component="div"
                          className="isError"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-3 text-end">
                    <label>งวด :</label>
                  </div>
                  <div className="col-9">
                    <div className="table-responsive">
                      <table
                        className="table table-striped table-sm"
                        style={{ minWidth: "600px" }}
                      >
                        <thead className="table-light text-center">
                          <tr>
                            <th colSpan={4}>งวดการชำระเงิน</th>
                          </tr>
                          <tr>
                            <th>รายละเอียด</th>
                            <th>จำนวนเงิน (บาท)</th>
                            <th>ไตรมาส</th>
                            <th>สถานะการเบิกจ่าย</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Array(12)
                            .fill(null)
                            .map((i, idx) => {
                              return (
                                <tr key={idx}>
                                  <td>
                                    <label
                                      className="form-check-label"
                                      htmlFor={InstallmentKeys[idx]}
                                    >
                                      <Field
                                        className="form-check-input mr-4"
                                        type="checkbox"
                                        name={InstallmentKeys[idx]}
                                        id={InstallmentKeys[idx]}
                                        onChange={(e: any) => {
                                          handleChange(e);
                                        }}
                                      />
                                      &emsp;งวดที่&nbsp;{idx + 1}
                                    </label>
                                  </td>
                                  <td className="text-center">
                                    <Field
                                      id={ISMAmountKeys[idx]}
                                      className="form-control"
                                      name={ISMAmountKeys[idx]}
                                      component={InputCurrency}
                                    />
                                    {/* {formatCurrency(
                                      (procurementStore.obj as any)[
                                        ISMAmountKeys[idx]
                                      ]
                                    )} */}
                                  </td>
                                  <td className="text-center">
                                    ไตรมาสที่
                                    {
                                      (procurementStore.obj as any)[
                                        ISMQuarterKeys[idx]
                                      ]
                                    }
                                  </td>
                                  <td className="text-center">
                                    {(procurementStore.obj as any)[
                                      ISMStatusKeys[idx]
                                    ] ? (
                                      <i
                                        className="bi bi-check-square-fill"
                                        style={{ color: "#34AE21" }}
                                      ></i>
                                    ) : (
                                      ""
                                    )}
                                  </td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-3 text-end">
                    <label htmlFor="deliver_note" className="mt-2">
                      หมายเหตุ :
                    </label>
                  </div>
                  <div className="col-9">
                    <Field
                      id="deliver_note"
                      className="form-control"
                      type="text"
                      name="deliver_note"
                      value={values.deliver_note}
                    />
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-3 text-end">
                    <label htmlFor="deliver_period" className="mt-2">
                      งวดดำเนินงานตามบัญชี :
                    </label>
                  </div>
                  <div className="col-9 col-sm-7 col-md-5 col-lg-4">
                    <div className="form-control divDisabled text-end">
                      {values.deliver_period}
                    </div>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-3 text-end">
                    <label
                      htmlFor="deliver_amount_withdrawn_before"
                      className="mt-2"
                    >
                      จำนวนเงินที่เบิกครั้งก่อน :
                    </label>
                  </div>
                  <div className="col-9 col-sm-7 col-md-5 col-lg-4">
                    <div className="form-control divDisabled text-end">
                      {formatCurrency(values.deliver_amount_withdrawn_before)}
                    </div>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-3 text-end">
                    <label
                      htmlFor="deliver_total_amount_disbursed"
                      className="mt-2"
                    >
                      รวมเป็นเงินที่เบิกจ่าย :
                    </label>
                  </div>
                  <div className="col-9 col-sm-7 col-md-5 col-lg-4">
                    <div className="form-control divDisabled text-end">
                      {formatCurrency(values.deliver_total_amount_disbursed)}
                    </div>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-3 text-end">
                    <label htmlFor="deliver_balance" className="mt-2">
                      เงินคงเหลือ :
                    </label>
                  </div>
                  <div className="col-9 col-sm-7 col-md-5 col-lg-4">
                    <div className="form-control divDisabled text-end">
                      {formatCurrency(values.deliver_balance)}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-end">
              <button
                className="btn btn-secondary"
                type="button"
                onClick={() => dispatch(updateSubSection3(4))}
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
