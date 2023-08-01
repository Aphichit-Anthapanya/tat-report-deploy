"use client";
import React, { useEffect } from "react";
import OperationTable from "@components/OperationFollow/List";
import { useContext } from "react";
import { MyContext } from "../../MyContext";
export default function Page() {
  const { navId, changeNavHandle } = useContext(MyContext);

  useEffect(() => {
    changeNavHandle(2);
  }, []);

  return (
    <>
      <OperationTable />
    </>
  );
}
