"use client";
import "@components/report-result/report-result.scss";
import AddOn1 from "@/components/report-result/Add-on1";
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
                ภาพรวมโครงการ
              </div>
            </div>
            <div className="flow-line-zone">
              <hr />
            </div>
            <div className="flow-section-zone">
              <div className="circle active">2</div>
              <div className="section-zone-text">
              แหล่งงบประมาณโครงการ และความสอดคล้องกับนโยบายเพิ่มเติม
              </div>
            </div>
            <div className="flow-line-zone">
              <hr />
            </div>
            <div className="flow-section-zone">
              <div
                
                className="circle active">
                3
              </div>
              <div className="section-zone-text">รายละเอียดโครงการ</div>
            </div>
            <div className="flow-line-zone">
              <hr />
            </div>
            <div className="flow-section-zone">
              <div
                
                className="circle active">
                4
              </div>
              <div className="section-zone-text">เวลาดำเนินโครงการ</div>
            </div>
            <div className="flow-line-zone">
              <hr />
            </div>
            <div className="flow-section-zone">
              <div
                onClick={() => handleSection(5, true)}
                className="circle active">
                5
              </div>
              <div className="section-zone-text">ภาพรวมกิจกรรม</div>
            </div>
            <div className="flow-line-zone">
              <hr />
            </div>
            <div className="flow-section-zone">
              <div
                
                className={`circle ${
                  sectionNumber != 5 &&
                  sectionNumber != 4 &&
                  sectionNumber != 3 &&
                  sectionNumber != 2 &&
                  sectionNumber != 1
                    ? "active"
                    : ""
                }`}
              >
                6
              </div>
              <div className="section-zone-text">เอกสารแนบ</div>
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
