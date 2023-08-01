"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Section1 from "@/components/OperationFollow/Section1";
import Section2 from "@/components/OperationFollow/Section2";
import Section3 from "@/components/OperationFollow/Section3";
import Section4 from "@/components/OperationFollow/Section4";
import Section5 from "@/components/OperationFollow/Section5";
import { useState } from "react";
import { useParams } from "next/navigation";
import { resetNew, updateFormById } from "@/redux/OperationFollow/service";
import EditOperationFollow from "@/components/OperationFollow/Edit/EditOperationFollow";

export default function Page() {
  const [sectionNumber, setSectionNumber] = useState(1);
  const dispatch = useDispatch();
  let id = 0;
  let mode = 0;
  const params = useParams();

  const handleSection = (value: number) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setSectionNumber(value);
  };

  useEffect(() => {
    // id = typeof params?.id === "string" ? parseInt(params?.id) : 0;
    // if (id != 0) {
    //   updateFormById(id, dispatch);
    // }
  }, []);

  return (
    <>
      {/* <div className='d-flex flex-column' style={{width: '100%'}}>
        <div className="breadcrumb-zone">นำเข้าข้อมูล {'>'} <span className="bread-crumb-page-name">ข้อมูลโครงการด้านบริหารจัดการองค์กร </span> {'>'} <span className="bread-crumb-page-name">งานระบบสารสนเทศแบบองค์กร</span></div>
            <div className="flow-indicator-wrapper">
            <div className="flow-indicator d-flex justify-content-center">
                <div className="flow-section-zone">
                <div onClick={() => handleSection(1)} className={`circle active`}>1</div>
                <div className="section-zone-text">ข้อมูลโครงการงานระบบสารสนเทศองค์กร</div>
                </div>
                <div className="flow-line-zone"><hr /></div>
                <div className="flow-section-zone">
                <div onClick={() => handleSection(2)}  className={`circle ${
                    sectionNumber != 1 
                 ? 'active' : ''}`}>2</div>
                <div className="section-zone-text">งบประมาณโครงการและความสอดคล้องกับนโยบาย</div>
                </div>
                <div className="flow-line-zone"><hr /></div>
                <div className="flow-section-zone">
                <div onClick={() => handleSection(3)}  className={`circle ${
                    sectionNumber != 2 &&
                    sectionNumber != 1  
                ? 'active' : ''}`}>3</div>
                <div className="section-zone-text">รายละเอียดโครงการ</div>
                </div>
                <div className="flow-line-zone"><hr /></div>
                <div className="flow-section-zone">
                <div onClick={() => handleSection(4)}  className={`circle ${
                    sectionNumber != 3 &&
                    sectionNumber != 2 &&
                    sectionNumber != 1 
                ? 'active' : ''}`}>4</div>
                <div className="section-zone-text">เวลาดำเนินโครงการ</div>
                </div>
                <div className="flow-line-zone"><hr /></div>
                <div className="flow-section-zone">
                <div onClick={() => handleSection(5)} className={`circle ${
                    sectionNumber != 4 &&
                    sectionNumber != 3 &&
                    sectionNumber != 2 &&
                    sectionNumber != 1 
                ? 'active' : ''}`}>5</div>
                <div className="section-zone-text">ความคุ้มค่าโครงการ</div>
                </div>
            </div>
            </div>
            <div className={`form-wrapper-section`}>
                {sectionNumber === 1 && <Section1 changeSectionHandle={handleSection} />}
                {sectionNumber === 2 && <Section2 changeSectionHandle={handleSection} />}
                {sectionNumber === 3 && <Section3 changeSectionHandle={handleSection} />}
                {sectionNumber === 4 && <Section4 changeSectionHandle={handleSection} />}
                {sectionNumber === 5 && <Section5 changeSectionHandle={handleSection} />}
            </div>
        </div> */}
      <EditOperationFollow />
    </>
  );
}
