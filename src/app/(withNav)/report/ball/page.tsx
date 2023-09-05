"use client";
import "@components/report-result/report-result.scss";
import Section1 from "@/components/report-result/Section1";
import Section2 from "@/components/report-result/Section2";
import Section3 from "@/components/report-result/Section3";
import Section4 from "@/components/report-result/Section4";
import Section5 from "@/components/report-result/Section5";
import Section6 from "@/components/report-result/Section6";
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
              <div
                onClick={() => handleSection(1, true)}
                className={`circle active`}
              >
                1
              </div>
              <div className="section-zone-text">
              ข้อมูลแผน
              </div>
            </div>
            <div className="flow-line-zone">
              <hr />
            </div>
            <div className="flow-section-zone">
              <div
                onClick={() => handleSection(2, true)}
                className={`circle ${sectionNumber != 1 ? "active" : ""}`}
              >
                2
              </div>
              <div className="section-zone-text">
              ภาพรวมกิจกรรม
              </div>
            </div>
            <div className="flow-line-zone">
              <hr />
            </div>
            <div className="flow-section-zone">
              <div
                onClick={() => handleSection(3, true)}
                className={`circle ${
                  sectionNumber != 2 && sectionNumber != 1 ? "active" : ""
                }`}
              >
                3
              </div>
              <div className="section-zone-text">ภาพรวมโครงการ</div>
            </div>
          </div>
        </div>
        <div className={`form-wrapper-section`}>
          {sectionNumber === 1 && (
            <Section1 changeSectionHandle={handleSection} setIsLoading={function (val: boolean): void {
              throw new Error("Function not implemented.");
            } } />
          )}
          {sectionNumber === 2 && (
            <Section2 changeSectionHandle={handleSection} setIsLoading={function (val: boolean): void {
              throw new Error("Function not implemented.");
            } } />
          )}
          {sectionNumber === 3 && (
            <Section3 changeSectionHandle={handleSection} setIsLoading={function (val: boolean): void {
              throw new Error("Function not implemented.");
            } } />
          )}
        </div>
      </div>
    </>
  );
}
