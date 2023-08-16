"use client";
import React, { useEffect, useState } from "react";
import { Formik, Form, FormikProps, Field } from "formik";
import * as Yup from "yup";
import "../procurement.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { FormState } from "@/redux/Procurement/types";
import { updateSubSection3, updateObj } from "@/redux/Procurement/reducer";
import { useRouter } from "next/navigation";

export default function Sub1() {
  const procurementStore = useSelector((state: RootState) => state.procurement);
  const dispatch = useDispatch();
  const router = useRouter();
  const [initValue, setInitValue] = useState<FormState["obj"]>(
    procurementStore.obj
  );

  useEffect(() => {
    console.log(procurementStore, procurementStore.obj.fiscal_year);
  }, []);

  const [fiscalYearModalDetail, setFiscalYearModalDetail] = useState([
    {
      topic: 1,
      name: "1. จัดทำร่าง TOR/Spec/ แบบรูปรายงานก่อสร้าง",
      startDateId: "1-start-date",
      endDateId: "1-end-date",
    },
    {
      topic: 2,
      name: "2. อนุมัติรายงานขอซื้อ/ขอจ้าง",
      startDateId: "2-start-date",
      endDateId: "2-end-date",
    },
    {
      topic: 3,
      name: "3. อนุมัติจัดซื้อจัดจ้าง",
      startDateId: "3-start-date",
      endDateId: "3-end-date",
    },
    {
      topic: 4,
      name: "4. ทำสัญญาจัดซื้อ/จัดจ้าง",
      startDateId: "4-start-date",
      endDateId: "4-end-date",
    },
    {
      topic: 5,
      name: " 5. ดำเนินงานตามเงื่อนไขของสัญญาส่งมอบงานงวดต่างๆ",
      startDateId: "5-start-date",
      endDateId: "5-end-date",
    },
    {
      topic: 6,
      name: "6. วันที่สิ้นสุดสัญญา/วันที่แล้วเสร็จ",
      startDateId: "6-start-date",
      endDateId: "6-end-date",
    },
  ]);

  const [notAccordingToPlan, setNotAccordingToPlan] = useState(false);

  const [resultData, setResultData] = useState([
    { id: 1, name: "เป็นไปตามแผน" },
    { id: 2, name: "ไม่เป็นไปตามแผน" },
    { id: 3, name: "ยกเลิก" },
  ]);

  function resultSelect(e: any) {
    e.target.value == "ไม่เป็นไปตามแผน"
      ? setNotAccordingToPlan(true)
      : setNotAccordingToPlan(false);
  }
  let extFile: any = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "application/pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "video/mp4",
  ];
  const RegisterSchema = Yup.object().shape({
    fiscal_year: Yup.string(),
    // .required("โปรดเลือกปีงบประมาณ"),
    type_of_statement: Yup.string(),
    // .required("โปรดเลือกประเภทงบ"),
    quarter: Yup.string().required("โปรดเลือกไตรมาส"),
    event_name: Yup.string(),
    department: Yup.string(),
    result: Yup.string().required("โปรดเลือกผลการดำเนินงาน"),
    attachment: Yup.mixed()
      .when("result", {
        is: "ไม่เป็นไปตามแผน",
        then: (schema) => schema.required("โปรดเลือกไฟล์แนบ"),
      })
      .test("fileSize", "ไฟล์แนบต้องมีขนาดไม่เกิน 25 MB", (value: any) => {
        if (!value) return true; // attachment is optional
        return value.size <= 25000000;
      })
      .test("fileType", "รูปแบบไฟล์แนบไม่ถูกต้อง", (value: any) => {
        if (value) {
          let fi = extFile.findIndex((fi: any) => fi == value.type);
          return fi >= 0 ? true : false;
        } else {
          return true;
        }
      }),
    note: Yup.string().when("result", {
      is: "ไม่เป็นไปตามแผน",
      then: (schema) => schema.required("โปรดกรอกหมายเหตุ"),
    }),
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
              let obj: any = {
                quarter: values.quarter,
                result: values.result,
              };
              //  เหลือ flow ไม่เป็นไปตามแผน
              // เหลือ flow ยกเลิก
              dispatch(updateObj(obj));
              dispatch(updateSubSection3(2));
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
                <div className="row mb-2">
                  <div className="col-3 text-end mt-2">
                    <label htmlFor="fiscal_year">ปีงบประมาณ :</label>
                  </div>
                  <div className="col-9">
                    <div className="form-control divDisabled">
                      {values.fiscal_year.toString()}
                    </div>
                    <div className="isError">
                      {errors.fiscal_year &&
                        touched.fiscal_year &&
                        errors.fiscal_year}
                    </div>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-3 text-end mt-2">
                    <label htmlFor="fiscal_year">
                      ไตรมาส : <span className="isRequired">*</span>
                    </label>
                  </div>
                  <div className="col-9">
                    <Field
                      as="select"
                      id="quarter"
                      className="form-select"
                      name="quarter"
                      value={values.quarter}
                    >
                      <option value="" style={{ color: "gray" }}>
                        ----- เลือก -----
                      </option>
                      {[1, 2, 3, 4].map((i) => {
                        return (
                          <option key={i} value={i}>
                            ไตรมาสที่ {i}
                          </option>
                        );
                      })}
                    </Field>
                    <div className="isError">
                      {errors.quarter && touched.quarter && errors.quarter}
                    </div>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-3 text-end mt-2">
                    <label htmlFor="type_of_statement">ประเภทของงบ :</label>
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
                <div className="row mb-2">
                  <div className="col-3 text-end mt-2">
                    <label htmlFor="event_name">
                      ชื่อโครงการทำสัญญาจัดซื้อจัดจ้าง :
                    </label>
                  </div>
                  <div className="col-9">
                    <div className="form-control divDisabled">
                      {values.add_manually.event_name}
                    </div>
                    <div className="isError">
                      {errors.add_manually?.event_name &&
                        touched.add_manually?.event_name &&
                        errors.add_manually?.event_name}
                    </div>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-3 text-end mt-2">
                    <label htmlFor="department">ฝ่าย :</label>
                  </div>
                  <div className="col-9">
                    <div className="form-control divDisabled">
                      {values.department}
                    </div>
                    <div className="isError">
                      {errors.department &&
                        touched.department &&
                        errors.department}
                    </div>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-3 text-end mt-2"></div>
                  <div className="col-9">
                    <table className="table table-bordered table-striped">
                      <thead className="text-center">
                        <tr>
                          <th>แผนปฏิบัติการ</th>
                          <th>วันที่เริ่มต้น</th>
                          <th>วันที่สิ้นสุด</th>
                        </tr>
                      </thead>
                      <tbody>
                        {fiscalYearModalDetail.map((i) => {
                          return (
                            <tr key={i.topic}>
                              <td>{i.name}</td>
                              <td></td>
                              <td></td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-3 text-end mt-2">
                    <label htmlFor="fiscal_year">
                      ผลการดำเนินงาน : <span className="isRequired">*</span>
                    </label>
                  </div>
                  <div className="col-9">
                    <Field
                      as="select"
                      id="result"
                      className="form-select"
                      name="result"
                      value={values.result}
                      onChange={(e: any) => {
                        handleChange(e);
                        resultSelect(e);
                      }}
                    >
                      <option value="" style={{ color: "gray" }}>
                        ----- เลือก -----
                      </option>
                      {resultData.map((i) => {
                        return (
                          <option key={i.id} value={i.name}>
                            {i.name}
                          </option>
                        );
                      })}
                    </Field>
                    <div className="isError">
                      {errors.result && touched.result && errors.result}
                    </div>
                  </div>
                </div>
                {notAccordingToPlan === true && (
                  <>
                    <div className="row mb-2">
                      <div className="col-3 mt-2"></div>
                      <div className="col-9">
                        <label
                          htmlFor="attachment"
                          className="btn btn-outline-dark"
                        >
                          เลือกไฟล์
                        </label>
                        <span style={{ marginLeft: "6px" }}>
                          {values.attachment?.name}
                        </span>
                        <input
                          style={{ display: "none" }}
                          id="attachment"
                          type="file"
                          name="attachment"
                          onChange={(e) => {
                            if (e.currentTarget.files) {
                              setFieldValue(
                                "attachment",
                                e.currentTarget.files[0]
                              );
                            }
                          }}
                        />{" "}
                        <div
                          style={{
                            marginTop: "4px",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "14px",
                              color: "gray",
                            }}
                          >
                            ไฟล์แนบ ขนาดไม่เกิน 25 MB (.jpg .jpeg .png .pdf
                            .docx .xlxs .pttx .mp4)
                          </span>
                        </div>
                        <div className="isError">
                          {errors.attachment &&
                            touched.attachment &&
                            errors.attachment}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3 text-end mt-2">
                        <label htmlFor="note">
                          หมายเหตุ : <span className="isRequired">*</span>
                        </label>
                      </div>
                      <div className="col-9">
                        <Field
                          id="note"
                          className="form-control"
                          type="text"
                          name="note"
                          value={values.note}
                        />
                        <div className="isError">
                          {touched.note && errors.note && errors.note}
                        </div>
                      </div>
                    </div>
                  </>
                )}

                <div className="text-end">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    onClick={() => router.push("/procurement")}
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
        </div>
      </div>
    </>
  );
}
