"use client";
import "@components/PA/ball.scss";
import Section2 from "@/components/PA/Section2";
import Section3 from "@/components/PA/Section3";
import { useEffect, useState } from "react";

export default function Page() {
  const [sectionNumber, setSectionNumber] = useState(2);
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
                className={`circle active`}
              >
                1
              </div>
              <div className="section-zone-text">
              ข้อมูลตัวชี้วัด
              </div>
            </div>
            <div className="flow-line-zone">
              <hr />
            </div>
            <div className="flow-section-zone">
              <div
                onClick={() => handleSection(2, true)}
                className={`circle active`}
              >
                2
              </div>
              <div className="section-zone-text">
              แผนตัวชี้วัด
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
              <div className="section-zone-text">รายงานผลตัวชี้วัด</div>
            </div>
          </div>
        </div>
        <div className={`form-wrapper-section`}>
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
