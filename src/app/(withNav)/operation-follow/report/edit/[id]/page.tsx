"use client";
import React, { useEffect, useState } from "react";
import ReportPage from "@/components/OperationFollow/Report/ReportPage";
import { useParams } from "next/navigation";
export default function Page() {
  return (
    <>
      <ReportPage mode={"edit"} />
    </>
  );
}
