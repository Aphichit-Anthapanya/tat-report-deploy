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
import { clear as clearState } from "@/redux/Procurement/reducer";
import Sub1 from "./SubSection3/Sub1";
import Sub2 from "./SubSection3/Sub2";
import Sub3 from "./SubSection3/Sub3";
import Sub4 from "./SubSection3/Sub4";
import Sub5 from "./SubSection3/Sub5";
import Sub6 from "./SubSection3/Sub6";

export default function Section3() {
  const procurementStore = useSelector((state: RootState) => state.procurement);
  const dispatch = useDispatch();
  const [initValue, setInitValue] = useState<FormState["obj"]>(
    procurementStore.obj
  );

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, [dispatch]);

  return (
    <>
      {procurementStore.subSection3 === 1 && <Sub1 />}
      {procurementStore.subSection3 === 2 && <Sub2 />}
      {procurementStore.subSection3 === 3 && <Sub3 />}
      {procurementStore.subSection3 === 4 && <Sub4 />}
      {procurementStore.subSection3 === 5 && <Sub5 />}
      {procurementStore.subSection3 === 6 && <Sub6 />}
    </>
  );
}
