"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Formik, Form, FormikProps, Field } from "formik";
import * as Yup from "yup";
import "./procurement.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { FormState } from "@/redux/Procurement/types";
import TableFiscalYear from "./TableFiscalYear";
import { updateSection } from "@/redux/Procurement/reducer";

type MyProps = {
  type?: string | undefined;
};

export default function Section2(props: MyProps) {
  const procurementStore = useSelector((state: RootState) => state.procurement);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(procurementStore, procurementStore.obj.fiscal_year);
  });

  function nextSection1() {
    dispatch(updateSection(1));
  }

  function offerSupervisor() {
    console.log(props.type, "type");
    if (props.type == "edit") {
    } else {
      // create
    }
  }

  function saveDraft() {
    console.log(props.type);
    if (props.type == "edit") {
    } else {
      // create
    }
  }

  return (
    <>
      <div className="container mt-4">
        <TableFiscalYear />
        <div className="row mt-4">
          <div className="col text-end">
            <button
              className="btn btn-primary"
              type="button"
              onClick={offerSupervisor}
            >
              <i className="bi bi-send"></i> เสนอผู้บังคับบัญชา
            </button>
            <button
              style={{ marginLeft: "16px" }}
              className="btn btn-primary"
              type="button"
              onClick={nextSection1}
            >
              <i className="bi bi-chevron-left"></i> ย้อนกลับ
            </button>
            <button
              onClick={saveDraft}
              style={{ marginLeft: "16px" }}
              className="btn btn-primary"
              type="button"
            >
              <i className="bi bi-file-earmark-post"></i> บันทึกชั่วคราว
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
