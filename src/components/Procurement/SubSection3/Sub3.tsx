"use client";
import React, { useEffect, useState } from "react";
import { Formik, Form, FormikProps, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../procurement.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { FormState } from "@/redux/Procurement/types";
import {
  updateObj,
  updateSubSection3,
  updateProcMethod,
  updateProcMethodByKey,
  updateProcMethodByGroup,
} from "@/redux/Procurement/reducer";
import DatePickerBuddhist from "../DatePickerBuddhist";

interface IProcMethodDataData {
  id: string;
  name: string;
  is_active: boolean;
}

interface IProcMethodData {
  id: string;
  name: string;
  data: Array<IProcMethodDataData>;
}

export default function Sub3() {
  const procurementStore = useSelector((state: RootState) => state.procurement);
  const dispatch = useDispatch();
  const [initValue, setInitValue] = useState<FormState["obj"]>(
    procurementStore.obj
  );

  const [procMethodData, setProcMethodData] = useState<IProcMethodData[]>([
    {
      id: "proc",
      name: "การจัดซื้อ/จัดจ้าง",
      data: [
        {
          id: "proc_e_mkt",
          name: "1.1 วิธีประกาศเชิญชวนทั่วไป <br />ตลาดอิเล็กทรอ-นิกส์ (e-Market)",
          is_active: true,
        },
        {
          id: "proc_e_bid",
          name: "1.2 วิธีประกาศเชิญชวนทั่วไป <br />ประกวดราคาอิเล็กทรอนิกส์ (e-Bidding)",
          is_active: true,
        },
        {
          id: "proc_announce",
          name: "1.3 วิธีประกาศเชิญชวนทั่วไป <br />สอบราคา",
          is_active: true,
        },
        {
          id: "proc_select",
          name: "2. วิธีคัดเลือก",
          is_active: true,
        },
        {
          id: "proc_specific",
          name: "3. วิธีเฉพาะเจาะจง",
          is_active: true,
        },
      ],
    },
    {
      id: "rental",
      name: "การเช่า",
      data: [
        {
          id: "rental_select",
          name: "1. วิธีคัดเลือก",
          is_active: true,
        },
        {
          id: "rental_specific",
          name: "2. วิธีเฉพาะเจาะจง",
          is_active: true,
        },
        {
          id: "",
          name: "",
          is_active: false,
        },
        {
          id: "",
          name: "",
          is_active: false,
        },
        {
          id: "",
          name: "",
          is_active: false,
        },
      ],
    },
    {
      id: "hire_cst",
      name: "งานจ้างที่ปรึกษา",
      data: [
        {
          id: "hire_cst_announce",
          name: "1. วิธีประกาศเชิญชวนทั่วไป",
          is_active: true,
        },
        {
          id: "hire_cst_select",
          name: "2. วิธีคัดเลือก",
          is_active: true,
        },
        {
          id: "hire_cst_specific",
          name: "3. วิธีเฉพาะเจาะจง",
          is_active: true,
        },
        {
          id: "",
          name: "",
          is_active: false,
        },
        {
          id: "",
          name: "",
          is_active: false,
        },
      ],
    },
    {
      id: "hire_design",
      name: "งานจ้างออกแบบหรือ<br />ควบคุมงานก่อนสร้าง",
      data: [
        {
          id: "hire_design_announce",
          name: "1. วิธีประกาศเชิญชวนทั่วไป",
          is_active: true,
        },
        {
          id: "hire_design_select",
          name: "2. วิธีคัดเลือก",
          is_active: true,
        },
        {
          id: "hire_design_specific",
          name: "3. วิธีเฉพาะเจาะจง",
          is_active: true,
        },
        {
          id: "hire_design_contest",
          name: "4. วิธีประกวดแบบ",
          is_active: true,
        },
        {
          id: "",
          name: "",
          is_active: false,
        },
      ],
    },
  ]);

  const [cbAll, setCbAll] = useState([false, false, false, false]);

  useEffect(() => {
    checkboxInit();
    console.log(procurementStore, procurementStore.obj.fiscal_year);
  }, [procurementStore.obj.proc_method]);

  const callbackFromDate = (data?: any) => {
    console.log(data, "Dadasadasd");
  };

  const handleCheckbox = (e: any, id: any) => {
    console.log(e, id);
    dispatch(updateProcMethodByKey({ key: id, value: e.target.checked }));
  };

  function checkboxInit() {
    let proc = procurementStore.obj.proc_method;
    let updatedCbAll = [...cbAll];
    if (
      proc.proc_announce &&
      proc.proc_e_bid &&
      proc.proc_e_mkt &&
      proc.proc_select &&
      proc.proc_specific
    ) {
      updatedCbAll[0] = true;
      setCbAll(updatedCbAll);
    } else {
      updatedCbAll[0] = false;
      setCbAll(updatedCbAll);
    }

    if (proc.rental_select && proc.rental_specific) {
      updatedCbAll[1] = true;
      setCbAll(updatedCbAll);
    } else {
      updatedCbAll[1] = false;
      setCbAll(updatedCbAll);
    }

    if (
      proc.hire_cst_announce &&
      proc.hire_cst_select &&
      proc.hire_cst_specific
    ) {
      updatedCbAll[2] = true;
      setCbAll(updatedCbAll);
    } else {
      updatedCbAll[2] = false;
      setCbAll(updatedCbAll);
    }

    if (
      proc.hire_design_announce &&
      proc.hire_design_select &&
      proc.hire_design_specific &&
      proc.hire_design_contest
    ) {
      updatedCbAll[3] = true;
      setCbAll(updatedCbAll);
    } else {
      updatedCbAll[3] = false;
      setCbAll(updatedCbAll);
    }
  }

  function checkedHederAll(id: any, idx: number) {
    return cbAll[idx];
  }

  function handleCheckboxHeader(e: any, idx: any, id: any, setFieldValue: any) {
    const updatedCbAll = [...cbAll];
    updatedCbAll[idx] = e.target.checked;
    setCbAll(updatedCbAll);
    console.log(id, e.target.checked);

    dispatch(updateProcMethodByGroup({ key: id, value: e.target.checked }));

    switch (id) {
      case "proc":
        setFieldValue("proc_method.proc_e_mkt", e.target.checked);
        setFieldValue("proc_method.proc_e_bid", e.target.checked);
        setFieldValue("proc_method.proc_announce", e.target.checked);
        setFieldValue("proc_method.proc_select", e.target.checked);
        setFieldValue("proc_method.proc_specific", e.target.checked);
      case "rental":
        setFieldValue("proc_method.rental_select", e.target.checked);
        setFieldValue("proc_method.rental_specific", e.target.checked);

        break;
      case "hire_cst":
        setFieldValue("proc_method.hire_cst_announce", e.target.checked);
        setFieldValue("proc_method.hire_cst_select", e.target.checked);
        setFieldValue("proc_method.hire_cst_specific", e.target.checked);
        break;
      case "hire_design":
        setFieldValue("proc_method.hire_design_announce", e.target.checked);
        setFieldValue("proc_method.hire_design_select", e.target.checked);
        setFieldValue("proc_method.hire_design_specific", e.target.checked);
        setFieldValue("proc_method.hire_design_contest", e.target.checked);
        break;
      default:
        break;
    }
  }

  const RegisterSchema = Yup.object().shape({
    proc_approve_start_date: Yup.string().required("โปรดเลือกวันที่เริ่มต้น"),
    proc_approve_end_date: Yup.string().required("โปรดเลือกวันที่สิ้นสุด"),

    proc_method: Yup.object().test(
      "at-least-one-checked",
      "โปรดเลือกวิธีการจัดซื้อจัดจ้างอย่างน้อย 1 ตัวเลือก",
      (values: any) => {
        return (
          values && Object.values(values).some((checked) => checked === true)
        );
      }
    ),
  });

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={initValue}
        validationSchema={RegisterSchema}
        onSubmit={(values) => {
          let obj: any = {
            proc_approve_start_date: values.proc_approve_start_date.toString(),
            proc_approve_end_date: values.proc_approve_end_date.toString(),
          };
          dispatch(updateObj(obj));
          let objProc: any = values.proc_method;
          dispatch(updateProcMethod(objProc));
          console.log(values, "onSubmit", objProc);
          dispatch(updateSubSection3(4));
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
                      3. อนุมัติจัดซื้อจัดจ้าง : วันที่เริ่มต้น :{" "}
                    </label>{" "}
                    &nbsp;
                    <div className="d-flex">
                      <label htmlFor="proc_approve_start_date" className="mt-2">
                        วันที่เริ่มต้น <span className="isRequired">*</span>
                        &nbsp;
                      </label>
                      <div>
                        <DatePickerBuddhist
                          callbackValue={(e) => {
                            setFieldValue("proc_approve_start_date", e.date);
                          }}
                          selectedDate={
                            procurementStore.obj.proc_approve_start_date
                          }
                          name={"proc_approve_start_date"}
                          id={"proc_approve_start_date"}
                          // minDate={
                          //   new Date(
                          //     Number(procurementStore.obj.fiscal_year) -
                          //       544 +
                          //       "-10-01"
                          //   )
                          // }
                        />
                        <div className="isError">
                          {errors.proc_approve_start_date &&
                            touched.proc_approve_start_date &&
                            errors.proc_approve_start_date}
                        </div>
                      </div>
                    </div>
                    &nbsp;&nbsp;
                    <div className="d-flex">
                      <label htmlFor="proc_approve_end_date" className="mt-2">
                        วันที่สิ้นสุด <span className="isRequired">*</span>
                        &nbsp;
                      </label>
                      <div>
                        <DatePickerBuddhist
                          callbackValue={(e) => {
                            setFieldValue("proc_approve_end_date", e.date);
                          }}
                          selectedDate={
                            procurementStore.obj.proc_approve_end_date
                          }
                          name={"proc_approve_end_date"}
                          id={"proc_approve_end_date"}
                          // minDate={
                          //   new Date(
                          //     Number(procurementStore.obj.fiscal_year) -
                          //       544 +
                          //       "-10-01"
                          //   )
                          // }
                        />
                        <ErrorMessage
                          name="proc_approve_end_date"
                          component="div"
                          className="isError"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-2 text-end mt-2 align-self-center">
                    <label>
                      วิธีการจัดซื้อจัดจ้าง :{" "}
                      <span className="isRequired">*</span>
                    </label>
                  </div>
                  <div className="col-10">
                    <div className="table-responsive">
                      <table
                        className="table table-bordered"
                        style={{ minWidth: "910px" }}
                      >
                        <thead className="table-light align-top">
                          <tr>
                            {procMethodData.map((i, idx) => {
                              return (
                                <th key={i.id}>
                                  <input
                                    id={i.id}
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    checked={cbAll[idx]}
                                    onChange={(e) =>
                                      handleCheckboxHeader(
                                        e,
                                        idx,
                                        i.id,
                                        setFieldValue
                                      )
                                    }
                                  />
                                  &nbsp;
                                  <label
                                    htmlFor={i.id}
                                    dangerouslySetInnerHTML={{ __html: i.name }}
                                  />
                                </th>
                              );
                            })}
                          </tr>
                        </thead>
                        {/* <tbody>
                        {[0, 1, 2, 3, 4].map((i) => {
                          return (
                            <tr
                              key={i}
                              style={{
                                borderBottom: "none",
                                borderTop: "none",
                              }}
                            >
                              {[0, 1, 2, 3].map((j) => {
                                return (
                                  <td key={j}>
                                    {procMethodData[j].data[i].is_active ? (
                                      <>
                                        <input
                                          id={procMethodData[j].data[i].id}
                                          className="form-check-input"
                                          type="checkbox"
                                          onChange={(e: any) => {
                                            handleChange(e);
                                            handleCheckbox(e, procMethodData[0].data[0].id)
                                            setFieldValue(
                                              "proc_method[" +
                                                j +
                                                "]." +
                                                procMethodData[j].data[i].id,
                                              true
                                            );
                                          }}
                                          name={
                                            "proc_method[" +
                                            j +
                                            "]." +
                                            procMethodData[j].data[i].id
                                          }
                                          checked={

                                          }
                                          // value={
                                          //   "proc_method[" +
                                          //   j +
                                          //   "]." +
                                          //   procMethodData[j].data[i].id
                                          // }
                                        />
                                        &nbsp;
                                        <label
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              procMethodData[j].data[i].name,
                                          }}
                                          htmlFor={procMethodData[j].data[i].id}
                                        />
                                      </>
                                    ) : (
                                      ""
                                    )}
                                  </td>
                                );
                              })}
                            </tr>
                          );
                        })}
                      </tbody> */}
                        <tbody>
                          <tr>
                            <td>
                              <input
                                id={procMethodData[0].data[0].id}
                                className="form-check-input"
                                type="checkbox"
                                onChange={(e: any) => {
                                  handleChange(e);
                                  handleCheckbox(
                                    e,
                                    procMethodData[0].data[0].id
                                  );
                                }}
                                checked={
                                  procurementStore.obj.proc_method.proc_e_mkt ==
                                  true
                                    ? true
                                    : false
                                }
                                name={"proc_method.proc_e_mkt"}
                                value={values.proc_method.proc_e_mkt}
                              />
                              &nbsp;
                              <label
                                dangerouslySetInnerHTML={{
                                  __html: procMethodData[0].data[0].name,
                                }}
                                htmlFor={procMethodData[0].data[0].id}
                              />
                            </td>
                            <td>
                              <input
                                id={procMethodData[1].data[0].id}
                                className="form-check-input"
                                type="checkbox"
                                onChange={(e: any) => {
                                  handleChange(e);
                                  handleCheckbox(
                                    e,
                                    procMethodData[1].data[0].id
                                  );
                                }}
                                checked={
                                  procurementStore.obj.proc_method
                                    .rental_select == true
                                    ? true
                                    : false
                                }
                                name={"proc_method.rental_select"}
                                value={values.proc_method.rental_select}
                              />
                              &nbsp;
                              <label
                                dangerouslySetInnerHTML={{
                                  __html: procMethodData[1].data[0].name,
                                }}
                                htmlFor={procMethodData[1].data[0].id}
                              />
                            </td>
                            <td>
                              <input
                                id={procMethodData[2].data[0].id}
                                className="form-check-input"
                                type="checkbox"
                                onChange={(e: any) => {
                                  handleChange(e);
                                  handleCheckbox(
                                    e,
                                    procMethodData[2].data[0].id
                                  );
                                }}
                                checked={
                                  procurementStore.obj.proc_method
                                    .hire_cst_announce == true
                                    ? true
                                    : false
                                }
                                name={"proc_method.hire_cst_announce"}
                                value={values.proc_method.hire_cst_announce}
                              />
                              &nbsp;
                              <label
                                dangerouslySetInnerHTML={{
                                  __html: procMethodData[2].data[0].name,
                                }}
                                htmlFor={procMethodData[2].data[0].id}
                              />
                            </td>
                            <td>
                              <input
                                id={procMethodData[3].data[0].id}
                                className="form-check-input"
                                type="checkbox"
                                onChange={(e: any) => {
                                  handleChange(e);
                                  handleCheckbox(
                                    e,
                                    procMethodData[3].data[0].id
                                  );
                                }}
                                checked={
                                  procurementStore.obj.proc_method
                                    .hire_design_announce == true
                                    ? true
                                    : false
                                }
                                name={"proc_method.hire_design_announce"}
                                value={values.proc_method.hire_design_announce}
                              />
                              &nbsp;
                              <label
                                dangerouslySetInnerHTML={{
                                  __html: procMethodData[3].data[0].name,
                                }}
                                htmlFor={procMethodData[3].data[0].id}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input
                                id={procMethodData[0].data[1].id}
                                className="form-check-input"
                                type="checkbox"
                                onChange={(e: any) => {
                                  handleChange(e);
                                  handleCheckbox(
                                    e,
                                    procMethodData[0].data[1].id
                                  );
                                }}
                                checked={
                                  procurementStore.obj.proc_method.proc_e_bid ==
                                  true
                                    ? true
                                    : false
                                }
                                name={"proc_method.proc_e_bid"}
                                value={values.proc_method.proc_e_bid}
                              />
                              &nbsp;
                              <label
                                dangerouslySetInnerHTML={{
                                  __html: procMethodData[0].data[1].name,
                                }}
                                htmlFor={procMethodData[0].data[1].id}
                              />
                            </td>
                            <td>
                              <input
                                id={procMethodData[1].data[1].id}
                                className="form-check-input"
                                type="checkbox"
                                onChange={(e: any) => {
                                  handleChange(e);
                                  handleCheckbox(
                                    e,
                                    procMethodData[1].data[1].id
                                  );
                                }}
                                checked={
                                  procurementStore.obj.proc_method
                                    .rental_specific == true
                                    ? true
                                    : false
                                }
                                name={"proc_method.rental_specific"}
                                value={values.proc_method.rental_specific}
                              />
                              &nbsp;
                              <label
                                dangerouslySetInnerHTML={{
                                  __html: procMethodData[1].data[1].name,
                                }}
                                htmlFor={procMethodData[1].data[1].id}
                              />
                            </td>
                            <td>
                              <input
                                id={procMethodData[2].data[1].id}
                                className="form-check-input"
                                type="checkbox"
                                onChange={(e: any) => {
                                  handleChange(e);
                                  handleCheckbox(
                                    e,
                                    procMethodData[2].data[1].id
                                  );
                                }}
                                checked={
                                  procurementStore.obj.proc_method
                                    .hire_cst_select == true
                                    ? true
                                    : false
                                }
                                name={"proc_method.hire_cst_select"}
                                value={values.proc_method.hire_cst_select}
                              />
                              &nbsp;
                              <label
                                dangerouslySetInnerHTML={{
                                  __html: procMethodData[2].data[1].name,
                                }}
                                htmlFor={procMethodData[2].data[1].id}
                              />
                            </td>
                            <td>
                              <input
                                id={procMethodData[3].data[1].id}
                                className="form-check-input"
                                type="checkbox"
                                onChange={(e: any) => {
                                  handleChange(e);
                                  handleCheckbox(
                                    e,
                                    procMethodData[3].data[1].id
                                  );
                                }}
                                checked={
                                  procurementStore.obj.proc_method
                                    .hire_design_select == true
                                    ? true
                                    : false
                                }
                                name={"proc_method.hire_design_select"}
                                value={values.proc_method.hire_design_select}
                              />
                              &nbsp;
                              <label
                                dangerouslySetInnerHTML={{
                                  __html: procMethodData[3].data[1].name,
                                }}
                                htmlFor={procMethodData[3].data[1].id}
                              />
                            </td>
                          </tr>
                          <tr style={{ borderBottom: "none" }}>
                            <td style={{ border: "solid 1px #dee2e6" }}>
                              <input
                                id={procMethodData[0].data[2].id}
                                className="form-check-input"
                                type="checkbox"
                                onChange={(e: any) => {
                                  handleChange(e);
                                  handleCheckbox(
                                    e,
                                    procMethodData[0].data[2].id
                                  );
                                }}
                                checked={
                                  procurementStore.obj.proc_method
                                    .proc_announce == true
                                    ? true
                                    : false
                                }
                                name={"proc_method.proc_announce"}
                                value={values.proc_method.proc_announce}
                              />
                              &nbsp;
                              <label
                                dangerouslySetInnerHTML={{
                                  __html: procMethodData[0].data[2].name,
                                }}
                                htmlFor={procMethodData[0].data[2].id}
                              />
                            </td>
                            <td style={{ border: "none" }}></td>
                            <td style={{ border: "solid 1px #dee2e6" }}>
                              <input
                                id={procMethodData[2].data[2].id}
                                className="form-check-input"
                                type="checkbox"
                                onChange={(e: any) => {
                                  handleChange(e);
                                  handleCheckbox(
                                    e,
                                    procMethodData[2].data[2].id
                                  );
                                }}
                                checked={
                                  procurementStore.obj.proc_method
                                    .hire_cst_specific == true
                                    ? true
                                    : false
                                }
                                name={"proc_method.hire_cst_specific"}
                                value={values.proc_method.hire_cst_specific}
                              />
                              &nbsp;
                              <label
                                dangerouslySetInnerHTML={{
                                  __html: procMethodData[2].data[2].name,
                                }}
                                htmlFor={procMethodData[2].data[2].id}
                              />
                            </td>
                            <td style={{ border: "solid 1px #dee2e6" }}>
                              <input
                                id={procMethodData[3].data[2].id}
                                className="form-check-input"
                                type="checkbox"
                                onChange={(e: any) => {
                                  handleChange(e);
                                  handleCheckbox(
                                    e,
                                    procMethodData[3].data[2].id
                                  );
                                }}
                                checked={
                                  procurementStore.obj.proc_method
                                    .hire_design_specific == true
                                    ? true
                                    : false
                                }
                                name={"proc_method.hire_design_specific"}
                                value={values.proc_method.hire_design_specific}
                              />
                              &nbsp;
                              <label
                                dangerouslySetInnerHTML={{
                                  __html: procMethodData[3].data[2].name,
                                }}
                                htmlFor={procMethodData[3].data[2].id}
                              />
                            </td>
                          </tr>
                          <tr
                            style={{ borderTop: "none", borderBottom: "none" }}
                          >
                            <td style={{ border: "solid 1px #dee2e6" }}>
                              <input
                                id={procMethodData[0].data[3].id}
                                className="form-check-input"
                                type="checkbox"
                                onChange={(e: any) => {
                                  handleChange(e);
                                  handleCheckbox(
                                    e,
                                    procMethodData[0].data[3].id
                                  );
                                }}
                                checked={
                                  procurementStore.obj.proc_method
                                    .proc_select == true
                                    ? true
                                    : false
                                }
                                name={"proc_method.proc_select"}
                                value={values.proc_method.proc_select}
                              />
                              &nbsp;
                              <label
                                dangerouslySetInnerHTML={{
                                  __html: procMethodData[0].data[3].name,
                                }}
                                htmlFor={procMethodData[0].data[3].id}
                              />
                            </td>
                            <td style={{ border: "none" }}></td>
                            <td style={{ border: "none" }}></td>
                            <td style={{ border: "solid 1px #dee2e6" }}>
                              <input
                                id={procMethodData[3].data[3].id}
                                className="form-check-input"
                                type="checkbox"
                                onChange={(e: any) => {
                                  handleChange(e);
                                  handleCheckbox(
                                    e,
                                    procMethodData[3].data[3].id
                                  );
                                }}
                                checked={
                                  procurementStore.obj.proc_method
                                    .hire_design_contest == true
                                    ? true
                                    : false
                                }
                                name={"proc_method.hire_design_contest"}
                                value={values.proc_method.hire_design_contest}
                              />
                              &nbsp;
                              <label
                                dangerouslySetInnerHTML={{
                                  __html: procMethodData[3].data[3].name,
                                }}
                                htmlFor={procMethodData[3].data[3].id}
                              />
                            </td>
                          </tr>
                          <tr
                            style={{ borderTop: "none", borderBottom: "none" }}
                          >
                            <td style={{ border: "solid 1px #dee2e6" }}>
                              <input
                                id={procMethodData[0].data[4].id}
                                className="form-check-input"
                                type="checkbox"
                                onChange={(e: any) => {
                                  handleChange(e);
                                  handleCheckbox(
                                    e,
                                    procMethodData[0].data[4].id
                                  );
                                }}
                                checked={
                                  procurementStore.obj.proc_method
                                    .proc_specific == true
                                    ? true
                                    : false
                                }
                                name={"proc_method.proc_specific"}
                                value={values.proc_method.proc_specific}
                              />
                              &nbsp;
                              <label
                                dangerouslySetInnerHTML={{
                                  __html: procMethodData[0].data[4].name,
                                }}
                                htmlFor={procMethodData[0].data[4].id}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <ErrorMessage
                      name="proc_method"
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
                onClick={() => dispatch(updateSubSection3(2))}
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
