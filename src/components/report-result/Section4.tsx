"use client";

import { useDispatch, useSelector } from "react-redux";
import "./report-result.scss";
import { RootState } from "@/redux/store";
import TableQuarterSummary from "@components/OperationFollow/Table/TableQuarterSummary";
import { useEffect, useState } from "react";
import { updateFormField } from "@/redux/OperationFollow/reducer";
import { FormState } from "@/redux/OperationFollow/types";
import { useParams, useRouter } from "next/navigation";

interface Section4Props {
  changeSectionHandle: (value: number, isBubble: boolean) => void;
  setIsLoading: (val: boolean) => void
}

export default function Section4(props: Section4Props) {
    const formState = useSelector(
        (state: RootState) => state.operationFollowForm
      );

  return (
    <>
    <div className='search-wrapper-section d-flex flex-column justify-content-center align-items-center'>
        <div className="d-flex flex-column mr-20 ml-70">
        <div className="wid d-flex flex-row mb-20">
                        <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">
                        <div className="f-column">
                          <div>วันเริ่มโครงการ -</div>
                          <div>
                            วันสิ้นสุดโครงการ
                          </div>
                        </div>
                        <div className="fontColor">*</div>:</div>
                        <div>01/12/2565 - 30/09/2566</div>
                      </div>
                      <div className="wid d-flex flex-row mb-20">
                        <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">
                            <div className="d-flex flex-column">
                                <div className="d-flex justify-content-right">ระบุความเสี่ยงโครงการ</div>
                                <div className="d-flex justify-content-right">(เฉพาะ​ Flagship</div>
                                
                                <div className="d-flex justify-content-right"> ​project/ ถ้าไม่ใช่​ </div>
                                <div className="d-flex justify-content-right">Flagship​ Project </div>
                                <div className="d-flex justify-content-right"> ให้ใส่เครื่องหมาย​ -)</div>
                               
                        </div>
                        <div className="fontColor">*</div>:</div>
                        <div>-</div>
                    </div>
                    <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">มาตรการบริหารความเสี่ยง<div className="fontColor">*</div>:</div>
                                <div>-</div>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ประโยชน์ที่คาดว่าจะได้รับ(Impact)<div className="fontColor">*</div>:</div>
                                <div className="d-flex flex-column">
                                    <div>- ผู้ดูแลระบบสามารถบริหารจัดการผู้ใช้งานในระบบได้ง่ายขึ้น</div>
                                    <div>- เพิ่มประสิทธิภาพด้านการรักษาความมั่นคงปลอดภัยในองค์กร</div>
                                </div>
                    </div>     
        </div>
                              
                    </div>
                    <div className="button-section">
                        <button type="button" className="btn btn-primary">ต่อไป <i className="bi bi-chevron-right"></i></button>
                        <button type="button" className="btn btn-primary"><i className="bi bi-file-earmark mr-5"></i>บันทึกชั่วคราว</button>
                        <button type="button" className="btn btn-primary">ย้อนกลับ <i className="bi bi-chevron-left"></i></button>
                    </div>
    </>
  );
}
