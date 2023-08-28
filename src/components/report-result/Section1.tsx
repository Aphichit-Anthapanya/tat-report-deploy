"use client";

import { useDispatch, useSelector } from "react-redux";
import "./report-result.scss";
import { RootState } from "@/redux/store";

interface Section1Props {
  changeSectionHandle: (value: number, isBubble: boolean) => void;
  setIsLoading: (val: boolean) => void
}

export default function Section1(props: Section1Props) {
    const formState = useSelector(
        (state: RootState) => state.operationFollowForm
      );   
   
  return (
    <>
    <div className='search-wrapper-section d-flex flex-column justify-content-center align-items-center'>
                    <div className="d-flex flex-column mr-20 ml-70">
                        <div className="wid d-flex flex-row mb-20 align-items-center">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right align-items-center">
                                    <div className="f-column">
                                        <div className="d-flex justify-content-right">ความคืบหน้า</div>
                                        <div className="d-flex justify-content-right">การดำเนินโครงการ</div>
                                    </div>
                                <div className="fontColor">*</div>:</div>
                                <div>75%</div>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ชื่อโครงการ<div className="fontColor">*</div>:</div>
                                <div>โครงการพัฒนาระบบแพลตฟอร์มกลาง ททท. (Single Sign on)</div>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ประเภทโครงการ<div className="fontColor">*</div>:</div>
                                <div>ในแผน</div>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ลำดับที่โครงการ<div className="fontColor">*</div>:</div>
                                <div>4</div>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ปีงบประมาณ<div className="fontColor">*</div>:</div>
                                <div>2566</div>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ชื่อแผน<div className="fontColor">*</div>:</div>
                                <div>สนับสนุนการดำเนินงานด้านการตลาด</div>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ประเด็นยุทธศาสตร์<div className="fontColor">*</div>:</div>
                                <div>งบฟื้นฟูประเทศด้วยการท่องเที่ยว (งบคงเหลือ 65)</div>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ชื่อกลยุทธ์ภาพรวม<div className="fontColor">*</div>:</div>
                                <div>กลยุทธ์ที่ 3 พัฒนาระบบเทคโนโลยีสารสนเทศ นวัตกรรม เพื่อปรับปรุงการทำงาน(งบคงเหลือ 65)</div>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ชื่อแผนงาน<div className="fontColor">*</div>:</div>
                                <div>แผนงาน 3.1 พัฒนาระบบเทคโนโลยีสารสนเทศ(งบคงเหลือ 65)</div>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">รายการค่าใช้จ่าย<div className="fontColor">*</div>:</div>
                                <div>-</div>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">หมวดพ.ร.บ. งบประมาณ<div className="fontColor">*</div>:</div>
                                <div>*********</div>
                            </div>
                        </div>               
                    </div>
                    <div className="button-section">
                        <button type="button" className="btn btn-primary">ต่อไป <i className="bi bi-chevron-right"></i></button>
                    </div>
    </>
  );
}
