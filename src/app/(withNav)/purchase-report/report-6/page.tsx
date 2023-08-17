"use client";

import React from "react";
import { useState } from "react";
import "@components/Report-temp/report-temp.scss";
import Activities from "@components/Activities/Activities";
import AddActivities from "@components/Activities/Add-Activities";

export default function Page() {

    const [isOpenAddActivity,setOpenAddActivity] = useState(false);

    const [sectionNumber, setSectionNumber] = useState(1);
    const handleSection = (value: number) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setSectionNumber(value)
    };

    const handleAddActivity = () => {
        setOpenAddActivity(!isOpenAddActivity)
        if(isOpenAddActivity){
            handleSection(1)
        }else{
            handleSection(2)
        }
    }
    
    return (
        <>
            <div className='d-flex flex-column' style={{width: '100%'}}>
                <div className="breadcrumb-zone">รายงานจัดซื้อจัดจ้าง {'>'} <span className="bread-crumb-page-name"><b>รายงานสรุปแผน-ผลปฏิบัติการจัดซื้อจัดจ้าง (รายโครงการ) ประจำปีงบประมาณ 25XX ดำเนิน การต่อในปีงบประมาณ 25xx+1</b></span></div>
                    <div className='search-wrapper-section d-flex flex-column'>
                        <div className="d-flex justify-content-between justify-content-center align-items-center">
                            <div className="content-search-box d-flex p-2 justify-content-center align-items-center">
                                <div className="box">
                                    <label>ปีงบประมาณ:</label>
                                </div>
                                <div className="box">
                                    <div className="filter-field-search">
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>  -- เลือก --  </option>
                                            <option value="1">2566</option>
                                            <option value="2">2565</option>
                                            <option value="3">2564</option>
                                            <option value="4">2563</option>
                                            <option value="5">2562</option>
                                            <option value="6">2561</option>
                                            <option value="7">2560</option>
                                            <option value="8">2559</option>
                                            <option value="9">2558</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                                <div className="content-search-box d-flex p-2 justify-content-between justify-content-center align-items-center">
                                    <div className="box">
                                        <label>สถานะงาน:</label>
                                    </div>
                                    <div className="box">
                                    <div className="filter-field-search">
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>  -- เลือกทั้งหมด --  </option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-between justify-content-center align-items-center">
                                    <div className="box">
                                        <label>หน่วยงาน:</label>
                                    </div>
                                    <div className="box">
                                        <div className="filter-field-search">
                                        <input type="text" className="form-control" placeholder="" id="filterOverall" />
                                        </div>
                                    </div>
                                </div>
                        </div>
                        
                            <div className="d-flex filter-project-button justify-content-center">
                                <div className="p-2"><button className="btn btn-primary">ดูรายงาน</button></div>
                                <div className="p-2"><button className="btn btn-secondary">ล้างค่า</button></div>
                            </div>    
                    </div>
                    <div className='search-wrapper-section d-flex flex-column'>
                        <div className="d-flex justify-content-between justify-content-center align-items-center">
                            <div className="years d-flex flex-column p-2 justify-content-center">
                                <div className="box mb-20">
                                    <b>รายงานสรุปแผน-ผลปฏิบัติการจัดซื้อจัดจ้าง (รายโครงการ) ประจำปีงบประมาณ 25XX ดำเนิน การต่อในปีงบประมาณ 25xx+1</b>
                                </div>
                                <div className="table-responsive mb-20">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr className="table-primary">
                                                <th rowSpan={3}>
                                                    <div className="wd-50 d-flex justify-content-center align-items-center">
                                                        <div>ลำดับที่</div>
                                                    </div>
                                                </th>             
                                                <th rowSpan={3}>
                                                    <div className="wd-500 d-flex flex-column justify-content-center align-items-center">
                                                        <div>รายการ</div>
                                                    </div>
                                                </th>
                                                <th rowSpan={3} colSpan={2}>
                                                    <div className="wd-260 d-flex justify-content-center align-items-center">
                                                        <div>หน่วยงานที่รับผิดชอบ</div>
                                                    </div>
                                                </th>
                                                <th rowSpan={3}>
                                                    <div className="wd-100 d-flex justify-content-center align-items-center">
                                                        <div>จำนวนรายการ</div>
                                                    </div>
                                                </th>
                                                <th rowSpan={3}>
                                                    <div className="wd-200 d-flex justify-content-center align-items-center">
                                                        <div>วงเงินทำสัญญา</div>
                                                    </div>
                                                </th>
                                                <th colSpan={8}>
                                                    <div className="d-flex justify-content-center align-items-center">ผลการดำเนินงาน</div>
                                                </th>
                                                <th rowSpan={3}>
                                                    <div className="wd-160 d-flex justify-content-center align-items-center">
                                                        <div>หมายเหตุ</div>
                                                    </div>
                                                </th>
                                                </tr>

                                                <tr>
                                                    <th className="bg-info" colSpan={2}>
                                                        <div className="wd-300 d-flex justify-content-center align-items-center">แล้วเสร็จไตรมาสที่ 1</div>
                                                    </th>
                                                    <th className="bg-success" colSpan={2}>
                                                        <div className="wd-300 d-flex justify-content-center align-items-center">แล้วเสร็จไตรมาสที่ 2</div>
                                                    </th>
                                                    <th className="bg-warning" colSpan={2}>
                                                        <div className="wd-300 d-flex justify-content-center align-items-center">แล้วเสร็จไตรมาสที่ 3</div>
                                                    </th>
                                                    <th className="bg-danger" colSpan={2}>
                                                        <div className="wd-300 d-flex justify-content-center align-items-center">แล้วเสร็จไตรมาสที่ 4</div>
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th className="bg-info">
                                                        <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                            <div>รายการ</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-info">
                                                        <div className="wd-250 d-flex flex-column justify-content-center align-items-center">
                                                            <div>จำนวนเงิน</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-success">
                                                        <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                            <div>รายการ</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-success">
                                                        <div className="wd-250 d-flex flex-column justify-content-center align-items-center">
                                                            <div>จำนวนเงิน</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-warning">
                                                        <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                            <div>รายการ</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-warning">
                                                        <div className="wd-250 d-flex flex-column justify-content-center align-items-center">
                                                            <div>จำนวนเงิน</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-danger">
                                                        <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                            <div>รายการ</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-danger">
                                                        <div className="wd-250 d-flex flex-column justify-content-center align-items-center">
                                                            <div>จำนวนเงิน</div>
                                                        </div>
                                                    </th>
                                                    
                                                </tr>

                                                <tr className="table-info">
                                                    <th></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">รวมทั้งสิ้น</div>
                                                    </th>
                                                    <th colSpan={2}></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">18</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">61,405,690.16</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">12</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">41,565,440.16 </div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">-</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">-</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">-</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>
                                                    </th>
                                                    <th></th>
                                                </tr>

                                                <tr className="table-success">
                                                    <th></th>
                                                    <th>
                                                        <div className="d-flex justify-content-left align-items-center ml-5">2. งบอุดหนุน</div>
                                                    </th>
                                                    <th colSpan={2}></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">18</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">61,405,690.16</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">12</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">41,565,440.16</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">-</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">-</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">-</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>
                                                    </th>
                                                    <th></th>
                                                </tr>

                                                <tr className="table-success">
                                                    <th></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center ml-5">2. ด้านบริหาร</div>
                                                    </th>
                                                    <th colSpan={2}></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">5</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">7,000,547.06</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">4</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">  5,305,547.06 </div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">-</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">-</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">-</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>
                                                    </th>
                                                    <th></th>
                                                </tr>

                                                <tr className="table-warning">
                                                    <th></th>
                                                    <th>
                                                        <div className="d-flex justify-content-left align-items-center ml-5">2.2 ฝ่ายทรัพยากรบุคคล</div>
                                                    </th>
                                                    <th colSpan={2}></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">5</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">7,000,547.06</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">4</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">  5,305,547.06 </div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">-</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">-</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">-</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>
                                                    </th>
                                                    <th></th>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">1</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">โครงการจัดจ้างที่ปรึกษาเพื่อทบทวนโครงสร้างองค์กร ระยะที่ 2</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">งานกลยุทธ์บริหารทรัพยากรบุคคล</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">กบค.</div>
                                                    </th>
                                                    <th></th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">1,695,000.00</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th></th>
                                                </tr>
                                                <tr>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">2</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">จ้างที่ปรึกษาโครงการพัฒนาระบบประเมินผลการปฏิบัติงาน(PMS)</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">งานกลยุทธ์บริหารทรัพยากรบุคคล</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">กบค.</div>
                                                    </th>
                                                    <th></th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">2,193,500.00</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">1</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">2,193,500.00</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th></th>
                                                </tr>
                                                <tr>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">3</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">โครงการพัฒนาระบบแผนสืบทอดตำแหน่ง (Succession Planning) ปี 2565</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">งานวางแผนการพัฒนาบุคลากร</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">กพบ.</div>
                                                    </th>
                                                    <th></th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">  1,362,000.00 </div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">1</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">  1,362,000.00 </div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th></th>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">4</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">โครงการพัฒนาระบบบริหารคนเก่ง(Talent Management) ปี 2565</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">งานวางแผนการพัฒนาบุคลากร</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">กพบ.</div>
                                                    </th>
                                                    <th></th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">979,647.06</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">1</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">979,647.06</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th></th>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">5</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">หลักสูตร “การจัดปฐมนิเทศสำหรับผู้เข้าปฏิบัติงานใหม่” ประจำปี 2565</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">งานบริหารการฝึกอบรม</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">กพบ.</div>
                                                    </th>
                                                    <th></th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">770,400.00</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">1</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">770,400.00</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th></th>
                                                </tr>
                                        </tbody>
                                    </table>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}