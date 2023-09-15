"use client";

import React from "react";
import { useState } from "react";
import "@components/Report-temp/report-temp.scss";
import ParentComponent from "@components/MasterData/TestComponent1";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page2 from '@components/MasterData/Page2';
export default function Page() {
  return (
    <Router>
      <Routes>
        <Route path="/masterdata/new/12" element={<ParentComponent/>} />
        <Route path="/masterdata/new/12/:id" element={<ParentComponent/>} />
      </Routes>
    </Router>
  );
}