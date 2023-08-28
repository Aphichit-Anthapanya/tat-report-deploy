"use client";

import { useDispatch, useSelector } from "react-redux";
import "./report-result.scss";
import { RootState } from "@/redux/store";
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
    <div className='search-wrapper-section d-flex flex-column justify-content-center'>
                        <div className="wid d-flex flex-row mb-20 color-org p-2">
                            <div className="d-flex flex-row justify-content-left">กิจกรรมที่ 1</div>
                        </div>
                        <div className="d-flex flex-column ma">
                            <div className="d-flex flex-column">
                                <div className="wid d-flex flex-row mb-20">
                                    <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">หมวดกิจกรรม:</div>
                                    <div>โครงการพัฒนาระบบแพลตฟอร์มกลาง ททท. (Single Sign on)</div>
                                </div>
                                <div className="wid d-flex flex-row mb-20">
                                    <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ประเภทกิจกรรม:</div>
                                    <div>สนับสนุนตลาด</div>
                                </div>
                                <div className="wid d-flex flex-row mb-20">
                                    <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ลำดับที่กิจกรรม:</div>
                                    <div>4</div>
                                </div>
                                <div className="wid d-flex flex-row mb-20">
                                    <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ชื่อกิจกรรม:</div>
                                    <div>การจัดซื้อจัดจ้าง</div>
                                </div>
                                <div className="wid d-flex flex-row mb-20">
                                    <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">รายละเอียดกิจกรรม:</div>
                                    <div>-</div>
                                </div>
                                <div className="wid d-flex flex-row mb-20">
                                    <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">สัดส่วนของกิจกรรมต่อโครงการ:</div>
                                    <div>20%</div>
                                </div>
                            </div>
                            <div className="d-flex mb-20 justify-content-center">
                                <div className="d-flex flex-row justify-content-center"><b>ผลการจัดกิจกรรม</b></div>
                            </div>
                            <div className="d-flex">
                                <div className="wid d-flex flex-row mb-20">
                                    <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">สถานะกิจกรรม:</div>
                                    <div>อยู่ระหว่างดำเนินการ</div>
                                </div>
                            </div>
                            <div className="d-flex flex-row mb-20 color-gry p-2 justify-content-center">
                                <div className="d-flex flex-row justify-content-center"><b>รายละเอียดและผลการดำเนินงาน</b></div>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">งบประมาณ<div className="fontColor">*</div>:</div>
                                <div>0.00 บาท (แผน)</div>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ช่วงเวลาจัดกิจกรรม (เริ่มต้น)<div className="fontColor">*</div>:</div>
                                <div>01/12/2566  (แผน)</div>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ช่วงเวลาจัดกิจกรรม (สิ้นสุด)<div className="fontColor">*</div>:</div>
                                <div>28/02/2566  (แผน)</div>
                            </div>                   
                        </div>

                        <div className="wid d-flex flex-column mb-20 justify-content-center">
                                <div className="d-flex justify-content-right align-items-end">
                                    <div><button onClick={() => router.push('/report/ball/add-on/3')} className="btn color-org bi bi-file-earmark-plus mb-2">เพิ่ม</button></div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <th colSpan={12}>
                                                    <div className="d-flex justify-content-center">ตารางผลการดำเนินงาน</div>
                                                </th>
                                            </tr>

                                            <tr>
                                                <th>
                                                    <div className="wd-50 d-flex justify-content-center align-items-center">ลำดับที่</div>
                                                </th>
                                                <th><div className="wd-50 d-flex justify-content-center align-items-center">ดูข้อมูล</div></th>
                                                <th><div className="wd-50 d-flex justify-content-center align-items-center">แก้ไข</div></th>
                                                <th><div className="wd-50 d-flex justify-content-center align-items-center">ลบ</div></th>
                                                <th><div className="wd-300 d-flex flex-column justify-content-center align-items-center">หัวข้อ</div></th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>งบประมาณ</div>
                                                        <div>(จัดจริง)</div>
                                                    </div>
                                                </th>
                                                <th><div className="wd-100 d-flex flex-column justify-content-center align-items-center">วันที่เริ่มต้น</div></th>
                                                <th><div className="wd-100 d-flex flex-column justify-content-center align-items-center">วันที่สิ้นสุด</div></th>
                                                <th><div className="wd-100 d-flex flex-column justify-content-center align-items-center">เอกสารแนบ</div></th>
                                                <th><div className="wd-100 d-flex flex-column justify-content-center align-items-center">วันที่เริ่มต้น</div></th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>วันที่แก้ไข</div>
                                                        <div>ข้อมูลล่าสุด</div>
                                                    </div>
                                                </th>
                                                <th><div className="wd-100 d-flex flex-column justify-content-center align-items-center">แก้ไขโดย</div></th>
                                            </tr>

                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">1</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center bi bi-search"></div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center bi bi-pencil"></div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center bi bi-trash"></div>
                                                </th>
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
                                                    <div className="normalText d-flex justify-content-center align-items-center bi bi-search"></div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center bi bi-pencil"></div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center bi bi-trash"></div>
                                                </th>
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
                            
                            <div className="wid d-flex flex-column mb-20 justify-content-center"> 
                            <div className="d-flex justify-content-right align-items-end">
                                <div><button className="btn color-org bi bi-file-earmark-plus mb-2">เพิ่ม</button></div>  
                            </div>
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr className="">
                                                <th colSpan={9}>
                                                    <div className="d-flex justify-content-center">ตารางตัวชี้วัดระดับโครงการและค่าเป้าหมาย</div>
                                                </th>
                                            </tr>

                                            <tr>
                                                <th>
                                                    <div className="wd-50 d-flex justify-content-center align-items-center">ลำดับที่</div>
                                                </th>
                                                <th><div className="wd-300 d-flex justify-content-center align-items-center">ชื่อตัวชี้วัด</div></th>
                                                <th><div className="wd-80 d-flex justify-content-center align-items-center">หน่วย</div></th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>เป้าหมาย</div>
                                                        <div>ไตรมาสที่ 1</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ผล</div>
                                                        <div>ไตรมาสที่ 1</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>เป้าหมาย</div>
                                                        <div>ไตรมาสที่ 2</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ผล</div>
                                                        <div>ไตรมาสที่ 2</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>เป้าหมาย</div>
                                                        <div>ไตรมาสที่ 3</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ผล</div>
                                                        <div>ไตรมาสที่ 3</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>เป้าหมาย</div>
                                                        <div>ไตรมาสที่ 4</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ผล</div>
                                                        <div>ไตรมาสที่ 4</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ผลรวม</div>
                                                        <div>เป้าหมาย</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ผลรวม</div>
                                                        <div>(ปัจจุบัน)</div>
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
                                                    <div className="normalText d-flex justify-content-center align-items-center">2</div>
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
                                                    <div className="normalText d-flex justify-content-center align-items-center">3</div>
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
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="wid d-flex flex-column mb-20 justify-content-center"> 
                            <div className="d-flex justify-content-right align-items-end">
                                <div><button className="btn color-org bi bi-file-earmark-plus mb-2">เพิ่ม</button></div>  
                            </div>
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr className="">
                                                <th colSpan={9}>
                                                    <div className="d-flex justify-content-center">ตารางตัวชี้วัดระดับกิจกรรมและค่าเป้าหมาย</div>
                                                </th>
                                            </tr>

                                            <tr>
                                                <th>
                                                    <div className="wd-50 d-flex justify-content-center align-items-center">ลำดับที่</div>
                                                </th>
                                                <th><div className="wd-300 d-flex justify-content-center align-items-center">ชื่อตัวชี้วัด</div></th>
                                                <th><div className="wd-80 d-flex justify-content-center align-items-center">หน่วย</div></th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>เป้าหมาย</div>
                                                        <div>ไตรมาสที่ 1</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ผล</div>
                                                        <div>ไตรมาสที่ 1</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>เป้าหมาย</div>
                                                        <div>ไตรมาสที่ 2</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ผล</div>
                                                        <div>ไตรมาสที่ 2</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>เป้าหมาย</div>
                                                        <div>ไตรมาสที่ 3</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ผล</div>
                                                        <div>ไตรมาสที่ 3</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>เป้าหมาย</div>
                                                        <div>ไตรมาสที่ 4</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ผล</div>
                                                        <div>ไตรมาสที่ 4</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ผลรวม</div>
                                                        <div>เป้าหมาย</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ผลรวม</div>
                                                        <div>(ปัจจุบัน)</div>
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
                                                    <div className="normalText d-flex justify-content-center align-items-center">2</div>
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
                                                    <div className="normalText d-flex justify-content-center align-items-center">3</div>
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
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="wid d-flex flex-column mb-20 justify-content-center"> 
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr className="">
                                                <th colSpan={2}>
                                                    <div className="d-flex justify-content-center">ตารางงบประมาณกิจกรรมตามแผน(บาท)</div>
                                                </th>
                                            </tr>

                                            <tr>
                                                <th>
                                                    <div className="wd-80 normalText d-flex justify-content-center align-items-center">แผน</div>
                                                </th>
                                                <th><div className="wd-180 normalText d-flex justify-content-center align-items-center"></div></th>                                 
                                            </tr>

                                            <tr>
                                                <th>
                                                    <div className="wd-100 normalText d-flex justify-content-center align-items-center">จัดจ้าง</div>
                                                </th>
                                                <th><div className="wd-180 normalText d-flex justify-content-center align-items-center"></div></th> 
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="wid d-flex flex-column mb-20 justify-content-center">
                            <div className="d-flex justify-content-right align-items-end">
                                <div><button className="btn color-org bi bi-file-earmark-plus mb-2">เพิ่ม</button></div>  
                            </div>  
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <th colSpan={3}>
                                                    <div className="d-flex justify-content-center">สินค้าและบริการระดับกิจกรรม</div>
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
                            <div className="wid d-flex flex-column mb-20 justify-content-center">
                            <div className="d-flex justify-content-right align-items-end">
                                <div><button className="btn color-org bi bi-file-earmark-plus mb-2">เพิ่ม</button></div>  
                            </div>  
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <th colSpan={3}>
                                                    <div className="d-flex justify-content-center">พื้นที่ดำเนินโครงการระดับกิจกรรม</div>
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

                            <div className="wid d-flex flex-column mb-20 justify-content-center">
                            <div className="d-flex justify-content-right align-items-end">
                                <div><button className="btn color-org bi bi-file-earmark-plus mb-2">เพิ่ม</button></div>  
                            </div>  
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <th colSpan={2}>
                                                    <div className="d-flex justify-content-center">กลุ่มเป้าหมายระดับกิจกรรม</div>
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
                                                    <div className="normalText d-flex justify-content-center align-items-center">-</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center">-</div>
                                                </th>
                                            </tr>
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                    </div>
                    <div className="button-section">
                        <button type="button" className="btn btn-primary">รายงานผลกิจกรรม <i className="bi bi-chevron-right"></i></button>
                        <button type="button" className="btn btn-primary"><i className="bi bi-file-earmark mr-5"></i>บันทึกชั่วคราว</button>
                        <button type="button" className="btn btn-primary">ย้อนกลับ <i className="bi bi-chevron-left"></i></button>
                    </div>
    </>
  );
}
