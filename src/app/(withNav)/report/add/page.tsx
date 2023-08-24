"use client";

import React from "react";
import { useState } from "react";
import "@components/Report-temp/report-temp.scss";
import TableQuarterSummary from "@components/OperationFollow/Table/TableQuarterSummary";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { updateFormField, resetForm } from "@/redux/OperationFollow/reducer";
import Popup from '../add/pop-up';
import Link from "next/link";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 

export default function Page() {
    const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date:any) => {
    setSelectedDate(date);
  };
    return (
        <>
            <div className='d-flex flex-column' style={{width: '100%'}}>
                
                <div className='search-wrapper-section d-flex flex-column justify-content-center align-items-center'>
        <div className="wid d-flex flex-row mb-20 justify-content-center">
            <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">วันเริ่มการดำเนินงาน<div className="fontColor">*</div>:</div>
            <div className="date-picker-container">
                <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="MM/dd/yyyy"
                    placeholderText="Select a date"
                />
            </div>
        </div>
        <div className="wid d-flex flex-row mb-20 justify-content-center">
            <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">วันสิ้นสุดการดำเนินงาน<div className="fontColor">*</div>:</div>
            <div className="date-picker-container">
                <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="MM/dd/yyyy"
                    placeholderText="Select a date"
                />
            </div>
        </div>
        <div className="wid d-flex flex-row mb-20 justify-content-center">
            <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ชื่อกิจกรรม<div className="fontColor">*</div>:</div>
                <div className="filter-field-4">
                    <input type="text" className="form-control" placeholder="" id="filterOverall" />
            </div>
        </div>
        <div className="wid d-flex flex-row mb-20 justify-content-center">
            <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">งบประมาณ(จัดจริง)<div className="fontColor">*</div>:</div>
                <div className="filter-field-4">
                    <input type="text" className="form-control" placeholder="" id="filterOverall" />
            </div>
        </div>

        <div className="sets d-flex flex-column mb-20">
            <div className="wdth-200 mr-20 d-flex flex-row justify-content-left mb-10">ตัวชี้วัดระดับโครงการ (Outcome)<div className="fontColor">*</div>:</div>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <th colSpan={10}>
                                    <div className="d-flex justify-content-center">รายงานผลตัวชี้วัดระดับโครงการ</div>
                                </th>
                                                </tr>
                                                <tr>
                                                    <th>
                                                        <div className="wd-100 d-flex justify-content-center align-items-center">ลำดับที่</div>
                                                    </th>
                                                    <th>
                                                        <div className="wd-140 d-flex justify-content-center align-items-center">ลบ</div>
                                                    </th>
                                                    <th>
                                                        <div className="wd-140 d-flex justify-content-center align-items-center">ตัวชี้วัด</div>
                                                    </th>
                                                    <th>
                                                        <div className="wd-140 d-flex justify-content-center align-items-center">หน่วย</div>
                                                    </th>
                                                    <th>
                                                        <div className="wd-140 d-flex flex-column justify-content-center align-items-center">
                                                            <div>ผลตัวชี้วัด</div>
                                                            <div>ไตรมาสที่ 1</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="wd-140 d-flex flex-column justify-content-center align-items-center">
                                                            <div>ผลตัวชี้วัด</div>
                                                            <div>ไตรมาสที่ 2</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="wd-140 d-flex flex-column justify-content-center align-items-center">
                                                            <div>ผลตัวชี้วัด</div>
                                                            <div>ไตรมาสที่ 3</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="wd-140 d-flex flex-column justify-content-center align-items-center">
                                                            <div>ผลตัวชี้วัด</div>
                                                            <div>ไตรมาสที่ 4</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="wd-140 d-flex flex-column justify-content-center align-items-center">
                                                            <div>จำนวนคนที่ตอบ</div>
                                                            <div>แบบสอบถาม</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="wd-140 d-flex flex-column justify-content-center align-items-center">
                                                            <div>รายละเอียด</div>
                                                            <div>ผลการดำเนินงาน</div>
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
                                                </tr>
                                            </tbody>
                            </table>
                        </div>
        </div>

        <div className="sets d-flex flex-column mb-20">
            <div className="wdth-200 mr-20 d-flex flex-row justify-content-left mb-10">ตัวชี้วัดระดับกิจกรรม (Output)<div className="fontColor">*</div>:</div>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <th colSpan={10}>
                                    <div className="d-flex justify-content-center">รายงานผลตัวชี้วัดระดับกิจกรรม</div>
                                </th>
                                                </tr>
                                                <tr>
                                                    <th>
                                                        <div className="wd-100 d-flex justify-content-center align-items-center">ลำดับที่</div>
                                                    </th>
                                                    <th>
                                                        <div className="wd-140 d-flex justify-content-center align-items-center">ลบ</div>
                                                    </th>
                                                    <th>
                                                        <div className="wd-140 d-flex justify-content-center align-items-center">ตัวชี้วัด</div>
                                                    </th>
                                                    <th>
                                                        <div className="wd-140 d-flex justify-content-center align-items-center">หน่วย</div>
                                                    </th>
                                                    <th>
                                                        <div className="wd-140 d-flex flex-column justify-content-center align-items-center">
                                                            <div>ผลตัวชี้วัด</div>
                                                            <div>ไตรมาสที่ 1</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="wd-140 d-flex flex-column justify-content-center align-items-center">
                                                            <div>ผลตัวชี้วัด</div>
                                                            <div>ไตรมาสที่ 2</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="wd-140 d-flex flex-column justify-content-center align-items-center">
                                                            <div>ผลตัวชี้วัด</div>
                                                            <div>ไตรมาสที่ 3</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="wd-140 d-flex flex-column justify-content-center align-items-center">
                                                            <div>ผลตัวชี้วัด</div>
                                                            <div>ไตรมาสที่ 4</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="wd-140 d-flex flex-column justify-content-center align-items-center">
                                                            <div>จำนวนคนที่ตอบ</div>
                                                            <div>แบบสอบถาม</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="wd-140 d-flex flex-column justify-content-center align-items-center">
                                                            <div>รายละเอียด</div>
                                                            <div>ผลการดำเนินงาน</div>
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
                                                </tr>
                                            </tbody>
                            </table>
                </div>
        </div>

        <div className="sets d-flex flex-column mb-20 mr-20 ml-20">
            <div className="wdth-200 mr-20 d-flex flex-row justify-content-left mb-10">ตารางแนบเอกสาร<div className="fontColor">*</div>:</div>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <th colSpan={4}>
                                    <div className="d-flex justify-content-center">ตารางแนบเอกสาร</div>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <div className="wd-100 d-flex justify-content-center align-items-center">ลำดับที่</div>
                                </th>
                                <th>
                                    <div className="wd-180 d-flex justify-content-center align-items-center">ตัวชี้วัดที่เกี่ยวข้อง</div>
                                </th>
                                <th>
                                    <div className="wd-100 d-flex justify-content-center align-items-center">เอกสาร</div>
                                </th>
                                <th>
                                    <div className="wd-100 d-flex justify-content-center align-items-center">สถานะการอัพโหลด</div>
                                </th>
                            </tr>

                            <tr>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">1</div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">

                                    </div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center"></div>
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
                                    <div className="normalText d-flex justify-content-center align-items-center">

                                    </div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center"></div>
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
                                    <div className="normalText d-flex justify-content-center align-items-center">

                                    </div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center"></div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center"></div>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
        
            <div className="sets d-flex flex-column mb-20 mr-20 ml-20">
            <div className="wdth-200 mr-20 d-flex flex-row justify-content-left mb-10">ตัวชี้วัดระดับกิจกรรม (Output)<div className="fontColor">*</div>:</div>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <th colSpan={4}>
                                    <div className="d-flex justify-content-center">ตารางแนบเอกสาร</div>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <div className="wd-100 d-flex justify-content-center align-items-center">ลำดับที่</div>
                                </th>
                                <th>
                                    <div className="wd-180 d-flex justify-content-center align-items-center">ตัวชี้วัดที่เกี่ยวข้อง</div>
                                </th>
                                <th>
                                    <div className="wd-100 d-flex justify-content-center align-items-center">เอกสาร</div>
                                </th>
                                <th>
                                    <div className="wd-100 d-flex justify-content-center align-items-center">สถานะการอัพโหลด</div>
                                </th>
                            </tr>

                            <tr>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">1</div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">

                                    </div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center"></div>
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
                                    <div className="normalText d-flex justify-content-center align-items-center">

                                    </div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center"></div>
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
                                    <div className="normalText d-flex justify-content-center align-items-center">

                                    </div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center"></div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center"></div>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div className="wid d-flex flex-row mb-20 justify-content-center">
            <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">
                <div className='f-column'>
                    <div className='d-flex justify-content-right'>ปัญหา/อุปสรรค </div>
                    <div className='d-flex justify-content-right'>การดำเนินงานกิจกรรม</div>
                </div>
                <div className="fontColor">*</div>:</div>
                <div className="filter-field-4">
                    <input type="text" className="form-control" placeholder="" id="filterOverall" />
            </div>
        </div>

        <div className="wid d-flex flex-row mb-20 justify-content-center">
            <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">
                <div className='f-column'>
                    <div className='d-flex justify-content-right'>ข้อเสนอแนะ/ปรับปรุง</div>
                    <div className='d-flex justify-content-right'>การดำเนินงานกิจกรรม</div>
                </div>
                
                <div className="fontColor">*</div>:</div>
                <div className="filter-field-4">
                    <input type="text" className="form-control" placeholder="" id="filterOverall" />
            </div>
        </div>
        </div>    


                    
            </div>
        </>
    )
}