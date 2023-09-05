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
                    <div className="d-flex flex-column mr-20 ml-70">
                      <div className="wid d-flex flex-row mb-20">
                        <div className="wdth-200 mr-20 d-flex flex-row justify-content-right"><span>สรุปผล Outcome โครงการ</span><div className="fontColor">*</div>:</div>
                      </div>
                      <div className="wid d-flex flex-row mb-20">
                        <div className="wdth-200 mr-20 d-flex flex-row justify-content-right"><span>สรุปผล Output โครงการ</span><div className="fontColor">*</div>:</div>
                      </div>
                      <div className="wid d-flex flex-row mb-20">
                        <div className="wdth-200 mr-20 d-flex flex-row justify-content-right"><span>ความสอดคล้องกับนโยบาย</span><div className="fontColor">*</div>:</div>
                      </div>
                      <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">งบประมาณโครงการเทียบแผนผล ทั้งโครงการ<div className="fontColor">*</div>:</div>
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr className="table-primary">
                                                <th colSpan={3}>
                                                    <div className="d-flex justify-content-center">งบประมาณโครงการเทียบแผนผล ทั้งโครงการ</div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="wd-50 d-flex justify-content-center align-items-center">ลำดับที่</div>
                                                </th>
                                                <th><div className="wd-350 d-flex justify-content-center align-items-center">แผน</div></th>
                                                <th><div className="wd-350 d-flex justify-content-center align-items-center">ผล</div></th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">-</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center">-</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">-</div>
                                                </th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                      </div>
                      <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">สินค้าและบริการ รายกิจกรรม ภาพใหญ่<div className="fontColor">*</div>:</div>
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr className="table-primary">
                                                <th colSpan={3}>
                                                    <div className="d-flex justify-content-center">สินค้าและบริการ รายกิจกรรม ภาพใหญ่</div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="wd-50 d-flex justify-content-center align-items-center">ลำดับที่</div>
                                                </th>
                                                <th><div className="wd-350 d-flex justify-content-center align-items-center">พื้นที่</div></th>
                                                <th><div className="wd-350 d-flex justify-content-center align-items-center">สินค้าและบริการ</div></th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">-</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center">-</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">-</div>
                                                </th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                      </div>
                      <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">พื้นที่ดำเนินโครงการ รายกิจกรรม ภาพใหญ่<div className="fontColor">*</div>:</div>
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr className="table-primary">
                                                <th colSpan={3}>
                                                    <div className="d-flex justify-content-center">พื้นที่ดำเนินโครงการ รายกิจกรรม ภาพใหญ่</div>
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
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">1</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center">ททท. ส่วนกลาง</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">-</div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">2</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center">ททท. สำนักงานสาขาในประเทศ</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">-</div>
                                                </th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                    <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">กลุ่มเป้าหมายระดับโครงการ รายกิจกรรม ภาพใหญ่<div className="fontColor">*</div>:</div>
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr className="table-primary">
                                                <th colSpan={2}>
                                                    <div className="d-flex justify-content-center">กลุ่มเป้าหมายระดับโครงการ รายกิจกรรม ภาพใหญ่</div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="wd-50 d-flex justify-content-center align-items-center">ลำดับที่</div>
                                                </th>
                                                <th><div className="wd-350 d-flex justify-content-center align-items-center">กลุ่มเป้าหมาย</div></th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">1</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center">ผู้บริหาร ททท.</div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">2</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center">พนักงาน ททท. ส่วนกลาง</div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">3</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center">พนักงาน ททท. สำนักงานสาขาต่างประเทศ</div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">4</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center">พนักงาน ททท. สำนักงานสาขาในประเทศ</div>
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
