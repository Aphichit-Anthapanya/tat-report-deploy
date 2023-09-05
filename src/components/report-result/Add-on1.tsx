"use client";

import { useDispatch, useSelector } from "react-redux";
import "./report-result.scss";
import { RootState } from "@/redux/store";
import TableQuarterSummary from "@components/OperationFollow/Table/TableQuarterSummary";
import { useEffect, useState } from "react";
import { updateFormField } from "@/redux/OperationFollow/reducer";
import { FormState } from "@/redux/OperationFollow/types";
import { useParams, useRouter } from "next/navigation";
import DatePicker from 'react-datepicker';

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
    <div className='search-wrapper-section d-flex flex-column justify-content-center align-items-center'>
        <div className="d-flex flex-column mr-20 ml-70">
            <div className="wid d-flex flex-row mb-20 align-items-center">
                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ชื่อกิจกรรม<div className="fontColor">*</div>:</div>
                    <div className="filter-field-4 mr-10">
                        <input type="text" className="form-control" placeholder="" id="filterOverall" />
                </div>
            </div>
            <div className="wid d-flex flex-row mb-20 align-items-center">
                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">งบประมาณ(กิจกรรม)<div className="fontColor">*</div>:</div>
                    <div className="filter-field-4 mr-10">
                        <input type="text" className="form-control" placeholder="" id="filterOverall" />
                </div>
            </div>
            <div className="wid d-flex flex-row mb-20">
                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ประเภทโครงการ<div className="fontColor">*</div>:</div>
                <div>ในแผน</div>
            </div>
            <div className="wid d-flex flex-row mb-20 align-items-center">
                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">สัดส่วนกิจกรรมต่อโครงการ<div className="fontColor">*</div>:</div>
                    <div className="filter-field-4 mr-10">
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
                                                    <div className="d-flex justify-content-center">สินค้าและบริการ</div>
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
                                                    <div className="d-flex justify-content-center">พื้นที่ดำเนินโครงการ</div>
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
            <div className="wid d-flex flex-column mb-20">
                        <div className="d-flex justify-content-right align-items-end">
                                <div><button className="btn color-org bi bi-file-earmark-plus mb-2">เพิ่ม</button></div>  
                            </div>  
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-left">ตัวชี้วัดระดับโครงการ(Outcome)<div className="fontColor">*</div>:</div>
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <th colSpan={7}>
                                                    <div className="d-flex justify-content-center">ตัวชี้วัดระดับโครงการ(Outcome)</div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="wd-50 d-flex justify-content-center align-items-center">ลำดับที่</div>
                                                </th>
                                                <th><div className="wd-400 d-flex justify-content-center align-items-center">ชื่อตัวชี้วัด</div></th>
                                                <th><div className="wd-100 d-flex justify-content-center align-items-center">รวม (%)</div></th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ไตรมาสที่ 1</div>
                                                        <div>(%)</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ไตรมาสที่ 2</div>
                                                        <div>(%)</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ไตรมาสที่ 3</div>
                                                        <div>(%)</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ไตรมาสที่ 4</div>
                                                        <div>(%)</div>
                                                    </div>
                                                </th>
                                            </tr>
                                           
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">-</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center"></div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center"></div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center filter-field-3">
                                                        
                                                        <input type="text" className="form-control" placeholder="" id="filterOverall" />
                                                        
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center filter-field-3">
                                                        
                                                        <input type="text" className="form-control" placeholder="" id="filterOverall" />
                                                        
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center filter-field-3">
                                                        
                                                        <input type="text" className="form-control" placeholder="" id="filterOverall" />
                                                        
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center filter-field-3">
                                                        
                                                        <input type="text" className="form-control" placeholder="" id="filterOverall" />
                                                        
                                                    </div>
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
                                            <tr className="">
                                                <th colSpan={9}>
                                                    <div className="d-flex justify-content-center">ตัวชี้วัดระดับกิจกรรม(Output)</div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="wd-50 d-flex justify-content-center align-items-center">ลำดับที่</div>
                                                </th>
                                                <th><div className="wd-50 d-flex justify-content-center align-items-center">แก้ไข</div></th>
                                                <th><div className="wd-50 d-flex justify-content-center align-items-center">ลบ</div></th>
                                                <th><div className="wd-300 d-flex justify-content-center align-items-center">หัวข้อ</div></th>
                                                <th><div className="wd-140 d-flex justify-content-center align-items-center">งบประมาณ</div></th>
                                                <th><div className="wd-100 d-flex justify-content-center align-items-center">วันที่เริ่มต้น</div></th>
                                                <th><div className="wd-100 d-flex justify-content-center align-items-center">วันที่สิ้นสุด</div></th>
                                                <th><div className="wd-100 d-flex justify-content-center align-items-center">ไฟล์แนบ</div></th>
                                                <th><div className="wd-100 d-flex justify-content-center align-items-center">วันที่รายงานผล</div></th>                                               
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">-</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center"><i className="bi bi-pencil"></i></div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center"></div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center"></div>
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
                                                <th></th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center"></div>
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
        </div>
                              
                    </div>
                    <div className="button-section">
                        <button type="button" className="btn btn-primary">เพิ่มกิจกรรม <i className="bi bi-chevron-right"></i></button>
                        <button type="button" className="btn btn-primary"><i className="bi bi-file-earmark mr-5"></i>บันทึกชั่วคราว</button>
                        <button type="button" className="btn btn-primary">ย้อนกลับ <i className="bi bi-chevron-left"></i></button>
                    </div>
    </>
  );
}
