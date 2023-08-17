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
                <div className="breadcrumb-zone">รายงานจัดซื้อจัดจ้าง {'>'} <span className="bread-crumb-page-name">รายงานผลปฏิบัติการจัดซื้อจัดจ้าง ประจำปีงบประมาณ 2565 ไตรมาสที่ X</span> {'>'} <span className="bread-crumb-page-name"><b>งบอุดหนุน</b></span></div>
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
                                <div className="box">
                                    <b>รายงานผลปฏิบัติการจัดซื้อจัดจ้าง (งบอุดหนุน) ประจำปีงบประมาณ 2565 ไตรมาสที่ X</b>
                                </div>
                                <div className="box d-flex">
                                    <div className="content mr-5"><b>หน่วยงาน:</b></div>
                                    <div className="content"><p>ฝ่ายดิจิทัลและเทคโนโลยีสารสนเทศ</p></div>
                                </div>
                                <div className="table-responsive mb-20">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr className="table-primary">
                                                <th rowSpan={3}>
                                                    <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ลำดับที่</div>
                                                        <div>(1)</div>
                                                    </div>
                                                </th>
                                                <th rowSpan={3}>
                                                    <div className="wd-160 d-flex flex-column justify-content-center align-items-center">
                                                        <div>เจ้าของเรื่อง</div>
                                                        <div>(2)</div>
                                                    </div>
                                                </th>              
                                                <th rowSpan={3}>
                                                    <div className="wd-400 d-flex flex-column justify-content-center align-items-center">
                                                        <div>รายการ</div>
                                                        <div>(3)</div>
                                                    </div>
                                                </th>
                                                <th rowSpan={3}>
                                                    <div className="wd-160 d-flex flex-column justify-content-center align-items-center">
                                                        <div>จัดหาโดยใช้วิธี</div>
                                                        <div>(4)</div>
                                                    </div>
                                                </th>

                                                <th rowSpan={3}>
                                                    <div className="wd-160 d-flex flex-column justify-content-center align-items-center">
                                                        <div>เงินงบประมาณ</div>
                                                        <div>(5)</div>
                                                    </div>
                                                </th>

                                                <th rowSpan={3}>
                                                    <div className="wd-160 d-flex flex-column justify-content-center align-items-center">
                                                        <div>วงเงินทำสัญญา</div>
                                                        <div>(6)</div>
                                                    </div>
                                                </th>

                                                <th colSpan={16}>
                                                    <div className="d-flex justify-content-center align-items-center">ผลการดำเนินงาน</div>
                                                </th>
                                                
                                                <th rowSpan={3}>
                                                    <div className="wd-160 d-flex flex-column justify-content-center align-items-center">
                                                        <div>หมายเหตุ</div>
                                                        <div>(11)</div>
                                                    </div>
                                                </th>
                                                </tr>

                                                <tr>
                                                    <th className="bg-info" colSpan={4}>
                                                        <div className="wd-500 d-flex justify-content-center align-items-center">ไตรมาสที่ 1</div>
                                                    </th>
                                                    <th className="bg-success" colSpan={4}>
                                                        <div className="wd-500 d-flex justify-content-center align-items-center">ไตรมาสที่ 2</div>
                                                    </th>
                                                    <th className="bg-warning" colSpan={4}>
                                                        <div className="wd-500 d-flex justify-content-center align-items-center">ไตรมาสที่ 3</div>
                                                    </th>
                                                    <th className="bg-danger" colSpan={4}>
                                                        <div className="wd-500 d-flex justify-content-center align-items-center">ไตรมาสที่ 4</div>
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th className="bg-info">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>เป็นไปตามแผน</div>
                                                            <div>(7)</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-info">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>ไม่เป็นไปตามแผน</div>
                                                            <div>(8)</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-info">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>แล้วเสร็จ</div>
                                                            <div>(9)</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-info">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>ยกเลิก</div>
                                                            <div>(10)</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-success">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>เป็นไปตามแผน</div>
                                                            <div>(7)</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-success">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>ไม่เป็นไปตามแผน</div>
                                                            <div>(8)</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-success">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>แล้วเสร็จ</div>
                                                            <div>(9)</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-success">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>ยกเลิก</div>
                                                            <div>(10)</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-warning">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>เป็นไปตามแผน</div>
                                                            <div>(7)</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-warning">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>ไม่เป็นไปตามแผน</div>
                                                            <div>(8)</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-warning">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>แล้วเสร็จ</div>
                                                            <div>(9)</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-warning">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>ยกเลิก</div>
                                                            <div>(10)</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-danger">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>เป็นไปตามแผน</div>
                                                            <div>(7)</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-danger">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>ไม่เป็นไปตามแผน</div>
                                                            <div>(8)</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-danger">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>แล้วเสร็จ</div>
                                                            <div>(9)</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-danger">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>ยกเลิก</div>
                                                            <div>(10)</div>
                                                        </div>
                                                    </th>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">1</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">งานแผนงานดิจิทัลสารสนเทศ กยท.</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">โครงการจัดทำแผนปฏิบัติการดิจิทัลของการท่องเที่ยวแห่งประเทศไทย พ.ศ. 2566 - 2570</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">3. วิธีเฉพาะเจาะจง</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">2,800,000</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">-</div>  
                                                    </th>
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
                                                        <div className="normalText d-flex justify-content-left align-items-center">งานมาตรฐานและความมั่นคงปลอดภัยสารสนเทศ กยท.</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">โครงการบริการศูนย์คอมพิวเตอร์สำรองและสำรองระบบข้อมูล</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">3. วิธีเฉพาะเจาะจง</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">6,500,000</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">6,500,000</div>  
                                                    </th>
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
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                </tr>
                                                
                                                <tr>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">3</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">งานมาตรฐานและความมั่นคงปลอดภัยสารสนเทศ กยท.</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">โครงการบริหารจัดการความมั่นคงปลอดภัยด้านสารสนเทศตามมาตรฐานสากล ISO 27001 : 2013 </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">3. วิธีเฉพาะเจาะจง</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">1,000,000</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">998,000</div>  
                                                    </th>
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
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">4</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">งานระบบสารสนเทศองค์กร กพร.</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">โครงการจ้างบำรุงรักษาและซ่อมแซมแก้ไขฐานข้อมูล ORACLE และระบบ ERP ด้านบุคลากร</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">3. วิธีเฉพาะเจาะจง</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">3,500,000</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">3,000,000</div>  
                                                    </th>
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
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                </tr>

                                                <tr>
                                                    <th colSpan={4}>
                                                        <div className="d-flex justify-content-center align-items-center">รวมเป็นเงินทั้งสิ้น</div>
                                                    </th>                                                  
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">13,800,000</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">10,498,000</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">4</div>
                                                    </th>
                                                    <th><div className="d-flex justify-content-center align-items-center">-</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">-</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">-</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">-</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">-</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">-</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">-</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">-</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">-</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">-</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">-</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">-</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">-</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">-</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">-</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">-</div></th>
                                                </tr>

                                                <tr>
                                                    <th colSpan={4}>
                                                        <div className="d-flex justify-content-center align-items-center">คงเหลือจากการจัดซื้อจัดจ้าง</div>
                                                    </th>                                                  
                                                    <th><div className="d-flex justify-content-center align-items-center">-</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">-</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">-</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">-</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">-</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">-</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">-</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">-</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">-</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">-</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">-</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">-</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">-</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">-</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">-</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">-</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">-</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">-</div></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">3,302,000</div>
                                                    </th>
                                                </tr>

                                                <tr>
                                                    <th colSpan={23}></th>
                                                </tr>

                                                <tr>
                                                    <th rowSpan={7}>
                                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                                            <div>สรุป</div>
                                                        </div>
                                                    </th>
                                                    <th rowSpan={7}>
                                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                                            <div>จัดหาโดยใช้วิธี</div>
                                                        </div>
                                                    </th>        
                                                    <th>
                                                        <div className="d-flex justify-content-left align-items-center">
                                                            <div>1. วิธีประกาศเชิญชวนทั่วไป</div>
                                                            <div>(e-Market, e-Bidding, สอบราคา)</div>
                                                        </div> 
                                                    </th>
                                                    <th>
                                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                                            <div>-</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                                            <div>-</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                                            <div>-</div>
                                                        </div>
                                                    </th>
                                            
                                                    <th colSpan={16}></th>
                                                    <th>
                                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                                            <div>-</div>
                                                        </div>
                                                    </th>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        <div className="d-flex justify-content-left align-items-center">
                                                            <div>2. วิธีคัดเลือก</div>
                                                        </div> 
                                                    </th>
                                                    <th>
                                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                                            <div>-</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                                            <div>-</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                                            <div>-</div>
                                                        </div>
                                                    </th>
                                            
                                                    <th colSpan={16}></th>
                                                    <th>
                                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                                            <div>-</div>
                                                        </div>
                                                    </th>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        <div className="d-flex justify-content-left align-items-center">
                                                            <div>3. วิธีเฉพาะเจาะจง</div>
                                                        </div> 
                                                    </th>
                                                    <th>
                                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                                            <div>3</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">
                                                            13,800,000
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">
                                                            <div>10,498,000</div>
                                                        </div>
                                                    </th>
                                            
                                                    <th colSpan={16}></th>
                                                    <th>
                                                        <div className="d-flex flex-column justify-content-right align-items-center">
                                                            <div>3,302,000</div>
                                                        </div>
                                                    </th>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        <div className="d-flex justify-content-left align-items-center">
                                                            <div>4. อยู่ระหว่างดำเนินการจัดซื้อจัดจ้างตามแผน</div>
                                                        </div> 
                                                    </th>
                                                    <th>
                                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                                            <div>-</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                                            <div>-</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                                            <div>-</div>
                                                        </div>
                                                    </th>
                                            
                                                    <th colSpan={16}></th>
                                                    <th>
                                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                                            <div>-</div>
                                                        </div>
                                                    </th>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        <div className="d-flex justify-content-left align-items-center">
                                                            <div>5. ยกเลิก</div>
                                                        </div> 
                                                    </th>
                                                    <th>
                                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                                            <div>-</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                                            <div>-</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                                            <div>-</div>
                                                        </div>
                                                    </th>
                                            
                                                    <th colSpan={16}></th>
                                                    <th>
                                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                                            <div>-</div>
                                                        </div>
                                                    </th>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">
                                                            <div>รวมทั้งสิ้น</div>
                                                        </div> 
                                                    </th>
                                                    <th>
                                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                                            <div>4</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex flex-column justify-content-right align-items-center">
                                                            <div>13,900,000</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex flex-column justify-content-right align-items-center">
                                                            <div>10,498,000</div>
                                                        </div>
                                                    </th>
                                            
                                                    <th colSpan={16}></th>
                                                    <th>
                                                        <div className="d-flex flex-column justify-content-right align-items-center">
                                                            <div>3,302,000</div>
                                                        </div>
                                                    </th>
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