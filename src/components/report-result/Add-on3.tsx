"use client";


import "./report-result.scss";
import { addMonths } from 'date-fns';
import React from "react";
import { useState } from "react";
import "@components/Report-temp/report-temp.scss";
import TableQuarterSummary from "@components/OperationFollow/Table/TableQuarterSummary";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { updateFormField, resetForm } from "@/redux/OperationFollow/reducer";
import Link from "next/link";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 

interface Section5Props {
  changeSectionHandle: (value: number, isBubble: boolean) => void;
  setIsLoading: (val: boolean) => void
}

export default function Section5(props: Section5Props) {
    const formState = useSelector(
        (state: RootState) => state.operationFollowForm
      );
      const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date:any) => {
    setSelectedDate(date);
  };
    
  return (
    <>
    <div className='search-wrapper-section d-flex flex-column justify-content-right align-items-center'>
        <div className="d-flex flex-column mr-20 ml-70">
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
            <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ชื่อกิจกรรมย่อย<div className="fontColor">*</div>:</div>
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
        </div>
        <div className="sets d-flex flex-column mb-20">
                <div className="d-flex justify-content-right align-items-end">
                                <div><button className="btn color-org bi bi-file-earmark-plus mb-2">เพิ่ม</button></div>  
                            </div>
            <div className="wdth-200 mr-20 d-flex flex-row justify-content-left mb-10">รายงานผลตัวชี้วัดระดับโครงการ (Outcome)<div className="fontColor">*</div>:</div>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <th colSpan={10}>
                                    <div className="d-flex justify-content-center">รายงานผลตัวชี้วัดระดับโครงการ (Outcome)</div>
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
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="wd-140 d-flex flex-column justify-content-center align-items-center">
                                                            <div>จำนวนคน</div>
                                                            <div>ที่ตอบแบบสอบถาม</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="wd-140 d-flex flex-column justify-content-center align-items-center">
                                                            <div>รายละเอียด</div>
                                                            <div>ผลการดำเนินงาน</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="wd-140 d-flex flex-column justify-content-center align-items-center">
                                                            <div>หัวข้อไฟล์แนบ</div>
                                                        </div>
                                                    </th>
                                                    <th colSpan={2}>
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>จำนวนเอกสาร</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="wd-140 d-flex flex-column justify-content-center align-items-center">
                                                            <div>สถานะ</div>
                                                            <div>การอัพโหลด</div>
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
                                                </tr>
                                            </tbody>
                            </table>
                        </div>
        </div>

        <div className="sets d-flex flex-column mb-20">
        <div className="d-flex justify-content-right align-items-end">
                                <div><button className="btn color-org bi bi-file-earmark-plus mb-2">เพิ่ม</button></div>  
                            </div>
            <div className="wdth-200 mr-20 d-flex flex-row justify-content-left mb-10">รายงานผลตัวชี้วัดระดับกิจกรรม (Output)<div className="fontColor">*</div>:</div>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <th colSpan={10}>
                                    <div className="d-flex justify-content-center">รายงานผลตัวชี้วัดระดับกิจกรรม (Output)</div>
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
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="wd-140 d-flex flex-column justify-content-center align-items-center">
                                                            <div>จำนวนคน</div>
                                                            <div>ที่ตอบแบบสอบถาม</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="wd-140 d-flex flex-column justify-content-center align-items-center">
                                                            <div>รายละเอียด</div>
                                                            <div>ผลการดำเนินงาน</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="wd-140 d-flex flex-column justify-content-center align-items-center">
                                                            <div>หัวข้อไฟล์แนบ</div>
                                                        </div>
                                                    </th>
                                                    <th colSpan={2}>
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>จำนวนเอกสาร</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="wd-140 d-flex flex-column justify-content-center align-items-center">
                                                            <div>สถานะ</div>
                                                            <div>การอัพโหลด</div>
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
                
                <div className="wid d-flex flex-row mb-20 justify-content-center mt-20">
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
        
        </div>               
                    
                    <div className="button-section">
                        <button type="button" className="btn btn-primary">รายงานผลการดำเนินงาน<i className="bi bi-chevron-right"></i></button>
                        <button type="button" className="btn btn-primary"><i className="bi bi-file-earmark mr-5"></i>บันทึกชั่วคราว</button>
                        <button type="button" className="btn btn-primary">ย้อนกลับ<i className="bi bi-chevron-left"></i></button>
                    </div>
    </>
  );
}
