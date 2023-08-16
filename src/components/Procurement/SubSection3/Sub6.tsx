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
  updateProcMethodByGroup,
  updateObjByKey,
} from "@/redux/Procurement/reducer";
import DatePickerBuddhist from "../DatePickerBuddhist";

export default function Sub6() {
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
    schedule_complete: Yup.string(),
    commander: Yup.string(),
    define_department_name: Yup.string(),
  });

  function offerSupervisor(values: any) {}

  function informToLetAware(values: any) {
    // ส่ง กบจ. รับทราบ
    console.log("informToLetAware", values, procurementStore.obj);
  }

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={initValue}
        validationSchema={RegisterSchema}
        onSubmit={(values, actions) => {
          const buttonName = actions;

          console.log(values, "sdfsdfsdf", buttonName);
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
                    <label className="mt-2 mb-2">6. กำหนดแล้วเสร็จ :</label>{" "}
                    &nbsp;
                    <div className="d-flex mb-2">
                      <label htmlFor="schedule_complete" className="mt-2">
                        วันที่แล้วเสร็จ : &nbsp;
                      </label>
                      <div>
                        <DatePickerBuddhist
                          callbackValue={(e) => {
                            setFieldValue("schedule_complete", e.date);
                            dispatch(
                              updateObjByKey({
                                key: "schedule_complete",
                                value: e.date?.toString(),
                              })
                            );
                          }}
                          selectedDate={procurementStore.obj.schedule_complete}
                          name={"schedule_complete"}
                          id={"schedule_complete"}
                          // minDate={
                          //   new Date(
                          //     Number(procurementStore.obj.fiscal_year) -
                          //       544 +
                          //       "-10-01"
                          //   )
                          // }
                        />
                        <ErrorMessage
                          name="schedule_complete"
                          component="div"
                          className="isError"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-3 text-end mt-2 align-self-center">
                    <label htmlFor="commander">ผู้บังคับบัญชา :</label>
                  </div>
                  <div className="col-9">
                    <div className="form-control divDisabled">
                      {values.commander}
                    </div>
                    <ErrorMessage
                      name="commander"
                      component="div"
                      className="isError"
                    />
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-3 text-end mt-2 align-self-center">
                    <label htmlFor="define_department_name">
                      กำหนดชื่อหน่วยงาน :
                    </label>
                  </div>
                  <div className="col-9">
                    <div className="form-control divDisabled">
                      {values.define_department_name}
                    </div>
                    <ErrorMessage
                      name="commander"
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
                onClick={() => dispatch(updateSubSection3(5))}
              >
                <i className="bi bi-chevron-left"></i> ย้อนกลับ
              </button>
              <button
                onClick={() => offerSupervisor(values)}
                className="btn btn-primary"
                type="submit"
                style={{ marginLeft: "16px" }}
              >
                <i className="bi bi-send"></i> เสนอผู้บังคับบัญชา
              </button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}
