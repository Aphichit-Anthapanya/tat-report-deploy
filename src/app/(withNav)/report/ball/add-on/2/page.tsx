"use client";
import "@components/report-result/report-result.scss";
import AddOn1 from "@/components/report-result/Add-on2";
import { useEffect, useState } from "react";

export default function Page() {
  const [sectionNumber, setSectionNumber] = useState(1);
  const debugMode = true;

  const handleSection = (value: number, isBubble: boolean) => {
    if (isBubble) {
      if (sectionNumber > value || debugMode) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setSectionNumber(value);
      }
    } else {
      setSectionNumber(value);
    }
  };

  let mode = 0;
  let id = 0;

  return (
    <>
      <div className="d-flex flex-column" style={{ width: "100%" }}>  
        <div className="flow-indicator-wrapper">
          <div className="flow-indicator d-flex justify-content-center">
            <div className="flow-section-zone">
              <div className="circle active">1</div>
              <div className="section-zone-text">
              ข้อมูลแผน
              </div>
            </div>
            <div className="flow-line-zone">
              <hr />
            </div>
            <div className="flow-section-zone">
              <div className="circle active">2</div>
              <div className="section-zone-text">
              ภาพรวมกิจกรรม
              </div>
            </div>
            <div className="flow-line-zone">
              <hr />
            </div>
            <div className="flow-section-zone">
              <div
                className="circle">
                3
              </div>
              <div className="section-zone-text">ภาพรวมโครงการ</div>
            </div>
          </div>
        </div>
        <div className={`form-wrapper-section`}>
          <AddOn1 changeSectionHandle={handleSection} setIsLoading={function (val: boolean): void {
              throw new Error("Function not implemented.");
            } } />
        </div>
      </div>
    </>
  );
}
