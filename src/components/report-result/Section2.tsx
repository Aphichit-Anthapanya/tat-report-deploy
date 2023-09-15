"use client";

import { useDispatch, useSelector } from "react-redux";
import "./report-result.scss";
import { RootState } from "@/redux/store";
import addOn1 from "./Add-on1";
import TableQuarterSummary from "@components/OperationFollow/Table/TableQuarterSummary";
import { useEffect, useState } from "react";
import { updateFormField } from "@/redux/OperationFollow/reducer";
import { FormState } from "@/redux/OperationFollow/types";
import { useParams, useRouter } from "next/navigation";

interface Section5Props {
  changeSectionHandle: (value: number, isBubble: boolean) => void;
  setIsLoading: (val: boolean) => void
}

export default function Section5(props: Section5Props) {
    const formState = useSelector(
        (state: RootState) => state.operationFollowForm
      );
      const router = useRouter()
  return (
    <>
    <div className='search-wrapper-section d-flex flex-column justify-content-center align-items-center'>
                <div className='search-wrapper-section d-flex flex-column'>
                        <div className="years d-flex flex-column p-2 justify-content-center">
                          <div className="d-flex flex-column justify-content-center align-items-center mb-10">
                                <b>ตารางภาพรวมกิจกรรม</b>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr className="table-primary">
                                            <th>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div>ดูข้อมูล</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-80 d-flex flex-column justify-content-center align-items-center">
                                                    <div>รายงานผล</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div>ลำดับที่</div>
                                                    <div>กิจกรรม</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-140 d-flex flex-column justify-content-center align-items-center">
                                                    <div>ประเภทกิจกรรม</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-350 d-flex flex-column justify-content-center align-items-center">
                                                    <div>ชื่อกิจกรรม</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                    <div>หมวดกิจกรรม</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-140 d-flex flex-column justify-content-center align-items-center">
                                                    <div>ความคืบหน้า</div>
                                                    <div>การดำเนินกิจกรรม</div>
                                                    
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-80 d-flex flex-column justify-content-center align-items-center">
                                                    <div>สัดส่วนของ</div>
                                                    <div>กิจกรรม</div>
                                                    <div>ต่อโครงการ</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-140 d-flex flex-column justify-content-center align-items-center">
                                                    <div>สถานะการ</div>
                                                    <div>รายงานผล</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-140 d-flex flex-column justify-content-center align-items-center">
                                                    <div>ยอดงบประมาณ</div>
                                                    <div>กิจกรรมตามแผน</div>
                                                    <div>(บาท)</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-140 d-flex flex-column justify-content-center align-items-center">
                                                    <div>ยอดงบประมาณ</div>
                                                    <div>กิจกรรมตามผล</div>
                                                    <div>(บาท)</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-140 d-flex flex-column justify-content-center align-items-center">
                                                    <div>ยอดงบประมาณ</div>
                                                    <div>กิจกรรมคงเหลือ</div>
                                                    <div>(บาท)</div>
                                                </div>
                                            </th>
                                            <th>
                                            <div className="wd-140 d-flex flex-column justify-content-center align-items-center">
                                                    <div>วันที่แก้ไข</div>
                                                    <div>ข้อมูลล่าสุด</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                    <div>แก้ไขโดย</div>
                                                </div>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th><div className="d-flex justify-content-center">
                                              <button className="icon-button" onClick={() => router.push('/report/ball/add-on/2')}><i className="bi bi-search"></i>
                                                  </button></div></th>
                                            <th><div className="d-flex justify-content-center">
                                                  <button className="icon-button" onClick={() => router.push('')}><i className="bi bi-file-earmark-text-fill"></i>
                                                  </button>
                                              </div></th>
                                              <th>
                                                <div className="normalText d-flex justify-content-center">
                                                    1
                                                </div>
                                            </th>
                                           
                                            <th>
                                                <div className="normalText d-flex justify-content-center">
                                                    สนับสนุนตลาด
                                                </div>
                                            </th>
                                            <th>
                                                <div className="normalText d-flex justify-content-left">
                                                    การจัดซื้อจัดจ้าง
                                                </div>
                                            </th>
                                            <th>
                                                <div className="normalText d-flex justify-content-center">
                                                    ในแผน
                                                </div>
                                            </th>
                                            <th>
                                                <div className="normalText d-flex justify-content-center">
                                                    อยู่ระหว่างดำเนินการ
                                                </div>
                                            </th>
                                            <th>
                                                <div className="normalText d-flex justify-content-center">
                                                    20
                                                </div> 
                                            </th>
                                            
                                            <th>
                                                <div className="normalText d-flex justify-content-center">
                                                    รายงานผล
                                                </div>
                                            </th>
                                            <th>
                                                <div className="normalText d-flex justify-content-center">
                                                    7,000,000
                                                </div>
                                            </th>
                                            <th>
                                                <div className="normalText d-flex justify-content-center">
                                                    5,000,000
                                                </div>
                                            </th>
                                            <th>
                                                <div className="normalText d-flex justify-content-center">
                                                    2,000,000
                                                </div>
                                            </th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </tbody>
                                </table>
                              </div>
                        </div>
                        <div className='search-wrapper-section d-flex flex-column'>
                        <div className="years d-flex flex-column p-2 justify-content-center">
                            <div className="d-flex flex-column justify-content-center align-items-center mb-10">
                                <b>แผนปฏิบัติการในการจัดกิจกรรม</b>
                            </div>
                            <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr className="table-primary">
                                            <th>
                                                <div className="wd-350 d-flex flex-column justify-content-center align-items-center">
                                                    <div className="content-sub">รายการ</div>
                                                </div> 
                                            </th>
                                            <th>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div className="content-sub">ต.ค</div>
                                                    <div className="content-sub">2565</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div className="content-sub">พ.ย</div>
                                                    <div className="content-sub">2565</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div className="content-sub">ธ.ค</div>
                                                    <div className="content-sub">2565</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div className="content-sub">ม.ค</div>
                                                    <div className="content-sub">2566</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div className="content-sub">ก.พ</div>
                                                    <div className="content-sub">2566</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div className="content-sub">มี.ค.</div>
                                                    <div className="content-sub">2566</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div className="content-sub">เม.ย.</div>
                                                    <div className="content-sub">2566</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div className="content-sub">พ.ค.</div>
                                                    <div className="content-sub">2566</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div className="content-sub">มิ.ย.</div>
                                                    <div className="content-sub">2566</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div className="content-sub">ก.ค.</div>
                                                    <div className="content-sub">2566</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div className="content-sub">ส.ค.</div>
                                                    <div className="content-sub">2566</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div className="content-sub">ก.ย</div>
                                                    <div className="content-sub">2566</div>
                                                </div> 
                                            </th>
                                            <th>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div className="content-sub">ต.ค</div>
                                                    <div className="content-sub">2566</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div className="content-sub">พ.ย</div>
                                                    <div className="content-sub">2566</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div className="content-sub">ธ.ค</div>
                                                    <div className="content-sub">2566</div>
                                                </div>
                                            </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left">                                                 
                                                        แผน : การจัดซื้อจัดจ้าง (01/12/2565-28/02/2566)
                                                    </div>
                                                </th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th className="bg-info"></th>
                                                <th className="bg-info"></th>
                                                <th className="bg-info"></th>
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
                                                    <div className="normalText d-flex justify-content-left">                                                 
                                                        ผล : การจัดซื้อจัดจ้าง (01/12/2565-23/03/2566)
                                                    </div>
                                                </th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th className="bg-warning"></th>
                                                <th className="bg-warning"></th>
                                                <th className="bg-warning"></th>
                                                <th className="bg-warning"></th>
                                                
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
                                                    <div className="normalText d-flex flex-column justify-content-left">                                                 
                                                        <div>แผน : ศึกษาความต้องการของผู้ใช้งานและดำเนินการพัฒนาระบบ</div>
                                                        <div>(01/03/2566-31/08/2566)</div>
                                                    </div>
                                                </th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th className="bg-info"></th>
                                                <th className="bg-info"></th>
                                                <th className="bg-info"></th>
                                                <th className="bg-info"></th>
                                                <th className="bg-info"></th>
                                                <th className="bg-info"></th>
                                                
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex flex-column justify-content-left">                                                 
                                                        <div>ผล : ศึกษาความต้องการของผู้ใช้งานและดำเนินการพัฒนาระบบ</div>
                                                        <div>(23/03/2566-07/04/2566)</div>
                                                    </div>
                                                </th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th className="bg-warning"></th>
                                                <th className="bg-warning"></th>
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
                                                    <div className="normalText d-flex flex-column justify-content-left">                                                 
                                                        <div>แผน : ทดสอบการใช้งาน อบรมการใช้ระบบ และเผยแพร่ประชาสัมพันธ์</div>
                                                        <div>ระบบและตรวจรับโครงการ (01/07/2566-30/09/2566)</div>
                                                    </div>
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
                                                <th className="bg-info"></th>
                                                <th className="bg-info"></th>
                                                <th className="bg-info"></th>
                                                <th></th>
                                                
                                                <th></th>
                                            </tr> 
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex flex-column justify-content-left">                                                 
                                                        <div>ผล : ทดสอบการใช้งาน อบรมการใช้ระบบ และเผยแพร่ประชาสัมพันธ์</div>
                                                        <div>ระบบและตรวจรับโครงการ (10/09/2566-30/11/2566)</div>
                                                    </div>
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
                                                <th className="bg-warning"></th>
                                                <th className="bg-warning"></th>
                                                <th className="bg-warning"></th>
                                                
                                            </tr>                                      
                                        </tbody>
                                    </table>
                            </div>
                        </div>
                      </div>

                    </div>
                    <div className="d-flex flex-column mr-20 ml-70">
                        
                    </div>               
                    </div>
                    <div className="button-section">
                        <button type="button" className="btn btn-primary">ต่อไป <i className="bi bi-chevron-right"></i></button>
                        <button type="button" className="btn btn-primary" onClick={() => router.push('/report/ball/add-on/1')}><i className="bi bi-file-earmark mr-5"></i>เพิ่มกิจกรรม(นอกแผน)</button>
                        <button type="button" className="btn btn-primary">ย้อนกลับ <i className="bi bi-chevron-left"></i></button>
                    </div>
    </>
  );
}
