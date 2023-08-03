"use client";

import React from "react";
import { useState } from "react";
import "@components/Activities/activities-add.scss";
import Activities from "@components/Activities/Activities";
import AddActivities from "@components/Activities/Add-Activities";

export default function Page() {
  const [isOpenAddActivity, setOpenAddActivity] = useState(false);

  const [sectionNumber, setSectionNumber] = useState(1);
  const handleSection = (value: number) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setSectionNumber(value);
  };

  const handleAddActivity = () => {
    setOpenAddActivity(!isOpenAddActivity);
    if (isOpenAddActivity) {
      handleSection(1);
    } else {
      handleSection(2);
    }
  };

  return (
    <>
      <div className="d-flex flex-column" style={{ width: "100%" }}>
        <div className="breadcrumb-zone">
          นำเข้าข้อมูล {">"}{" "}
          <span className="bread-crumb-page-name">
            ข้อมูลโครงการด้านบริหารจัดการองค์กร{" "}
          </span>{" "}
          {">"}{" "}
          <span className="bread-crumb-page-name">
            งานระบบสารสนเทศแบบองค์กร
          </span>
        </div>
        <div className="flow-indicator-wrapper">
          <div className="flow-indicator d-flex justify-content-center">
            <div className="flow-section-zone">
              <div className={`circle active`}>1</div>
              <div className="section-zone-text">ภาพรวมกิจกรรม</div>
            </div>
            <div className="flow-line-zone">
              <hr />
            </div>
            <div className="flow-section-zone">
              <div className={`circle ${sectionNumber != 1 ? "active" : ""}`}>
                2
              </div>
              <div className="section-zone-text">เพิ่มกิจกรรมในแผน</div>
            </div>
          </div>
        </div>
        <div
          className={`form-wrapper-section ${
            sectionNumber === 5 ? "section5" : ""
          }`}
        >
          {isOpenAddActivity == true && (
            <AddActivities onChangeAddActivity={handleAddActivity} />
          )}
          {isOpenAddActivity == false && (
            <Activities onChangeAddActivity={handleAddActivity} />
          )}
        </div>
      </div>
    </>
  );
}
