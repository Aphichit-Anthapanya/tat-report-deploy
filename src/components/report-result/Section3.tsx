"use client";

import { useDispatch, useSelector } from "react-redux";
import "./report-result.scss";
import { RootState } from "@/redux/store";
import TableQuarterSummary from "@components/OperationFollow/Table/TableQuarterSummary";
import { useEffect, useState } from "react";
import { updateFormField } from "@/redux/OperationFollow/reducer";
import { FormState } from "@/redux/OperationFollow/types";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

interface Section3Props {
  changeSectionHandle: (value: number, isBubble: boolean) => void;
  setIsLoading: (val: boolean) => void
}

export default function Section3(props: Section3Props) {
    const formState = useSelector(
        (state: RootState) => state.operationFollowForm
      );
  return (
    <>
    <div className='search-wrapper-section d-flex flex-column justify-content-center align-items-center'>
                
                    <div className="search-wrapper-section d-flex flex-column mr-20">
                      <div className="wid d-flex flex-column mb-20">
                        <div className="wdth-200 mr-20 d-flex flex-row justify-content-ledt"><span>สรุปผล Outcome โครงการ</span><div className="fontColor">*</div>:</div>
                         <div className="years d-flex flex-column p-2 justify-content-center"> 
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr className="">
                                                <th colSpan={14}>
                                                    <div className="d-flex justify-content-center">สรุปผล Outcome โครงการ</div>
                                                </th>
                                            </tr>

                                            <tr>
                                                <th rowSpan={2}>
                                                    <div className="wd-50 d-flex justify-content-center align-items-center">ลำดับที่</div>
                                                </th>
                                                <th rowSpan={2}><div className="wd-300 d-flex justify-content-center align-items-center">รายการตัวชี้วัด/ชื่อกิจกรรม</div></th>
                                                <th rowSpan={2}><div className="wd-80 d-flex justify-content-center align-items-center">หน่วย</div></th>
                                                <th colSpan={5}>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ตัวชี้วัดเป้าหมาย</div>
                                                    </div>
                                                </th>
                                                <th colSpan={5}>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ตัวชี้วัดตามผลที่จัดจริง</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ผลต่าง</div>
                                                    </div>
                                                </th>                           
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ไตรมาสที่ 1</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ไตรมาสที่ 2</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ไตรมาสที่ 3</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ไตรมาสที่ 4</div>
                                                    </div>
                                                </th>  
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>รวม</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ไตรมาสที่ 1</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ไตรมาสที่ 2</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ไตรมาสที่ 3</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ไตรมาสที่ 4</div>
                                                    </div>
                                                </th>  
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>รวม</div>
                                                    </div>
                                                </th>
                                            </tr>

                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">1</div>
                                                </th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                            </tr>

                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">1.1</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">กิจกรรมที่ 1</div>
                                                </th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                            </tr>

                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">1.2</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">กิจกรรมที่ 3</div>
                                                </th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">1.3</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">กิจกรรมที่ 4</div>
                                                </th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">2</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center"></div>
                                                </th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">2.1</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">กิจกรรมที่ 2</div>
                                                </th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">2.2</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">กิจกรรมที่ 3</div>
                                                </th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                      </div>
                      <div className="wid d-flex flex-column mb-20">
                        <div className="wdth-200 mr-20 d-flex flex-row justify-content-ledt"><span>สรุปผล Output โครงการ</span><div className="fontColor">*</div>:</div>
                         <div className="years d-flex flex-column p-2 justify-content-center"> 
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr className="">
                                                <th colSpan={14}>
                                                    <div className="d-flex justify-content-center">สรุปผล Output โครงการ</div>
                                                </th>
                                            </tr>

                                            <tr>
                                                <th rowSpan={2}>
                                                    <div className="wd-50 d-flex justify-content-center align-items-center">ลำดับที่</div>
                                                </th>
                                                <th rowSpan={2}><div className="wd-300 d-flex justify-content-center align-items-center">รายการตัวชี้วัด/ชื่อกิจกรรม</div></th>
                                                <th rowSpan={2}><div className="wd-80 d-flex justify-content-center align-items-center">หน่วย</div></th>
                                                <th colSpan={5}>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ตัวชี้วัดเป้าหมาย</div>
                                                    </div>
                                                </th>
                                                <th colSpan={5}>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ตัวชี้วัดตามผลที่จัดจริง</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ผลต่าง</div>
                                                    </div>
                                                </th>                           
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ไตรมาสที่ 1</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ไตรมาสที่ 2</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ไตรมาสที่ 3</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ไตรมาสที่ 4</div>
                                                    </div>
                                                </th>  
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>รวม</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ไตรมาสที่ 1</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ไตรมาสที่ 2</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ไตรมาสที่ 3</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ไตรมาสที่ 4</div>
                                                    </div>
                                                </th>  
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>รวม</div>
                                                    </div>
                                                </th>
                                            </tr>

                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">1</div>
                                                </th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                            </tr>

                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">1.1</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">กิจกรรมที่ 1</div>
                                                </th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                            </tr>

                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">1.2</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">กิจกรรมที่ 3</div>
                                                </th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">1.3</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">กิจกรรมที่ 4</div>
                                                </th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">2</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center"></div>
                                                </th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">2.1</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">กิจกรรมที่ 2</div>
                                                </th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">2.2</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">กิจกรรมที่ 3</div>
                                                </th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                      </div>
                      <div className="wid d-flex flex-row mb-20">
                        <div className="wdth-200 mr-20 d-flex flex-row justify-content-right"><span>ความสอดคล้องกับนโยบาย</span><div className="fontColor">*</div>:</div>
                        <div className="table-responsive">
                                    <table className="table">
                                        <tbody>
                                            <tr className="table-primary">
                                                <th colSpan={3}>
                                                    <div className="d-flex justify-content-center">ความสอดคล้องกับนโยบายภายนอก</div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="wd-350 d-flex justify-content-left align-items-center">
                                                        <div className="check-box">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="check1" name="option1" value="" disabled/>
                                                                <label className="form-check-label">Flagship Project</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-350 d-flex justify-content-left align-items-center">
                                                        <div className="check-box">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="check1" name="option1" value="" disabled/>
                                                                <label className="form-check-label">CSR in process</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="d-flex justify-content-left align-items-center">
                                                        <div className="check-box">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="check1" name="option1" value="" disabled/>
                                                                <label className="form-check-label">แผนแม่บท</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </th>
                                                <th>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="d-flex justify-content-left align-items-center">
                                                        <div className="check-box">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="check1" name="option1" value="" disabled/>
                                                                <label className="form-check-label">แผนปิดช่องว่าง(Gaps) ตามเกณฑ์ Enablers</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </th>
                                                <th>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="d-flex justify-content-left align-items-center">
                                                        <div className="check-box">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="check1" name="option1" value="" disabled/>
                                                                <label className="form-check-label">SLA</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="d-flex justify-content-left align-items-center">
                                                        <div className="check-box">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="check1" name="option1" value=""/>
                                                                <label className="form-check-label">ตัวชี้วัดตามบันทึกข้อตกลง(PA)</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="d-flex justify-content-left align-items-center">
                                                        <div className="check-box">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="check1" name="option1" value="" disabled/>
                                                                <label className="form-check-label">ไม่มี</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </th>
                                                <th>
                                                </th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                      </div>
                      <div className="wid d-flex flex-column mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-left">งบประมาณโครงการเทียบแผนผล ทั้งโครงการ<div className="fontColor">*</div>:</div>
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr className="table-primary">
                                                <th colSpan={5}>
                                                    <div className="d-flex justify-content-center">งบประมาณโครงการเทียบแผนผล ทั้งโครงการ</div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="wd-140 d-flex justify-content-center align-items-center"></div>
                                                </th>
                                                <th><div className="wd-350 d-flex justify-content-center align-items-center">ชื่อโครงการ/กิจกรรม</div></th>
                                                <th>
                                                    <div className="wd-200 d-flex flex-column justify-content-center align-items-center">
                                                        <div>งบประมาณ</div>
                                                        <div>ตามแผน(บาท)</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-200 d-flex flex-column justify-content-center align-items-center">
                                                        <div>งบประมาณ</div>
                                                        <div>ตามผล(บาท)</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-200 d-flex justify-content-center align-items-center">
                                                        <div>ผลต่าง(บาท)</div>
                                                    </div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">โครงการ</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center"></div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">150,000</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">160,000</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">-10,000</div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">กิจกรรมที่ 1</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center"></div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">80,000</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">90,000</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">-10,000</div>
                                                </th>
                                                
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">กิจกรรมที่ 2</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center"></div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">10,000</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">5,000</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">5,000</div>
                                                </th>
                                                
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">...</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center"></div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">...</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">...</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">....</div>
                                                </th>
                                                
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                      </div>
                      <div className="wid d-flex flex-column mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-left">สินค้าและบริการรายกิจกรรม<div className="fontColor">*</div>:</div>
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr className="table-primary">
                                                <th colSpan={3}>
                                                    <div className="d-flex justify-content-center">สินค้าและบริการรายกิจกรรม</div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="wd-50 d-flex justify-content-center align-items-center">ลำดับที่</div>
                                                </th>
                                                <th><div className="wd-350 d-flex justify-content-center align-items-center">สินค้าและบริการ</div></th>
                                                <th><div className="wd-350 d-flex justify-content-center align-items-center">พื้นที่</div></th>
                                            </tr>
                                            <tr>
                                                <th colSpan={3}>
                                                    <div className="normalText d-flex justify-content-center align-items-center">กิจกรรมที่ 1</div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">1</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center"></div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center"></div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">2</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center"></div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center"></div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">3</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center"></div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center"></div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th colSpan={3}>
                                                    <div className="normalText d-flex justify-content-center align-items-center">กิจกรรมที่ 2</div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">...</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center">...</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">...</div>
                                                </th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                      </div>
                      <div className="wid d-flex flex-column mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-left">พื้นที่ดำเนินโครงการรายกิจกรรม<div className="fontColor">*</div>:</div>
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr className="table-primary">
                                                <th colSpan={3}>
                                                    <div className="d-flex justify-content-center">พื้นที่ดำเนินโครงการรายกิจกรรม</div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="wd-50 d-flex justify-content-center align-items-center">ลำดับที่</div>
                                                </th>
                                                <th><div className="wd-350 d-flex justify-content-center align-items-center">พื้นที่/ประเทศ</div></th>
                                                <th><div className="wd-350 d-flex justify-content-center align-items-center">จังหวัด/เมือง</div></th>
                                            </tr>
                                            <tr>
                                                <th colSpan={3}>
                                                    <div className="normalText d-flex justify-content-center align-items-center">กิจกรรมที่ 1</div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">1</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center"></div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center"></div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">2</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center"></div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center"></div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">3</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center"></div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center"></div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th colSpan={3}>
                                                    <div className="normalText d-flex justify-content-center align-items-center">กิจกรรมที่ 2</div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">...</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center">...</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">...</div>
                                                </th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                    <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">กลุ่มเป้าหมายระดับโครงการรายกิจกรรม<div className="fontColor">*</div>:</div>
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr className="table-primary">
                                                <th colSpan={2}>
                                                    <div className="d-flex justify-content-center">กลุ่มเป้าหมายระดับโครงการรายกิจกรรม</div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="wd-50 d-flex justify-content-center align-items-center">ลำดับที่</div>
                                                </th>
                                                <th><div className="wd-350 d-flex justify-content-center align-items-center">กลุ่มเป้าหมาย</div></th>
                                            </tr>
                                            <tr>
                                                <th colSpan={2}>
                                                    <div className="normalText d-flex justify-content-center align-items-center">กิจกรรมที่ 1</div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">1</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center"></div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">2</div>
                                                </th>
                                                
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center"></div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">3</div>
                                                </th>
                                                
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center"></div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th colSpan={2}>
                                                    <div className="normalText d-flex justify-content-center align-items-center">กิจกรรมที่ 2</div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">...</div>
                                                </th>
                                                
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">...</div>
                                                </th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                    </div>  
                    <div className="wid d-flex flex-row mb-20">
                        <div className="wdth-200 mr-20 d-flex flex-row justify-content-right"><span>ประเด็นที่สอดคล้องกับกลุ่มผู้มีส่วนได้ส่วนเสีย</span><div className="fontColor">*</div>:</div>
                      </div>
                    </div>
                    <div className="wid d-flex flex-column mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-left">ตารางเอกสารแนบ<div className="fontColor">*</div>:</div>
                                <div className="table-responsive">
                    <table className="table table-bordered">
                        <tbody>
                            <tr className="table-primary">
                                <th colSpan={6}>
                                    <div className="d-flex justify-content-center">ตารางเอกสารแนบ</div>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <div className="wd-50 d-flex justify-content-center align-items-center">ลำดับที่</div>
                                </th>
                                <th>
                                    <div className="wd-200 d-flex justify-content-center align-items-center">กิจกรรม</div>
                                </th>
                                <th>
                                    <div className="wd-50 f-column justify-content-center align-items-center">
                                        <div>ลำดับที่</div>
                                        <div>กิจกรรม</div>
                                    </div>
                                </th>
                                <th>
                                    <div className="wd-200 d-flex justify-content-center align-items-center">หัวข้อ</div>
                                </th>
                                <th>
                                    <div className="wd-180 d-flex justify-content-center align-items-center">ตัวชี้วัดที่เกี่ยวข้อง</div>
                                </th>
                                <th>
                                    <div className="wd-100 d-flex justify-content-center align-items-center">เอกสาร</div>
                                </th>
                            </tr>

                            <tr>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">1</div>
                                </th>
                                <th rowSpan={4}>
                                    <div className="normalText d-flex justify-content-center align-items-center">
                                    กิจกรรม 1
                                    </div>
                                </th>
                                <th rowSpan={4}> 
                                    <div className="normalText d-flex justify-content-center align-items-center">1</div>
                                </th>
                                <th rowSpan={3}>
                                    <div className="normalText d-flex justify-content-center align-items-center">กิจกรรมย่อยที่ 1</div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">ตัวชี้วัด 1.1</div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center"><Link href="">link</Link></div>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">2</div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">ตัวชี้วัด 1.2</div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center"><Link href="">link</Link></div>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">3</div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">ตัวชี้วัด 1.3</div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center"><Link href="">link</Link></div>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">4</div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">กิจกรรมย่อยที่ 2</div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">ตัวชี้วัด 1.4</div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center"><Link href="">link</Link></div>
                                </th>
                            </tr>
                        
                            <tr>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">5</div>
                                </th>
                                <th rowSpan={4}>
                                    <div className="normalText d-flex justify-content-center align-items-center">
                                    กิจกรรม 1
                                    </div>
                                </th>
                                <th rowSpan={4}> 
                                    <div className="normalText d-flex justify-content-center align-items-center">2</div>
                                </th>
                                <th rowSpan={3}>
                                    <div className="normalText d-flex justify-content-center align-items-center">กิจกรรมย่อยที่ 1</div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">ตัวชี้วัด 2.1</div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center"><Link href="">link</Link></div>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">6</div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">ตัวชี้วัด 3.1</div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center"><Link href="">link</Link></div>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">7</div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">ตัวชี้วัด 3.2</div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center"><Link href="">link</Link></div>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">8</div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">กิจกรรมย่อยที่ 2</div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">ตัวชี้วัด 1.3</div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center"><Link href="">link</Link></div>
                                </th>
                            </tr>
                        </tbody>
                    </table>
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
