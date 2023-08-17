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
                <div className="breadcrumb-zone">รายงานจัดซื้อจัดจ้าง {'>'} <span className="bread-crumb-page-name"><b>รายงานสรุปแผน/ผลปฏิบัติการจัดซื้อจัดจ้าง (ระดับฝ่าย) ประจำปีงบประมาณ 25XX ไตรมาสที่ X</b></span></div>
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
                                    <b>รายงานสรุปแผน/ผลปฏิบัติการจัดซื้อจัดจ้าง (ระดับฝ่าย) ประจำปีงบประมาณ 25XX ไตรมาสที่ X</b>
                                </div>
                                <div className="table-responsive mb-20">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr className="table-primary">
                                                <th rowSpan={3}>
                                                    <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ลำดับที่</div>
                                                        
                                                    </div>
                                                </th>
                                                <th rowSpan={3}>
                                                    <div className="wd-400 d-flex flex-column justify-content-center align-items-center">
                                                        <div>หน่วยงานที่รับผิดชอบ</div>
                                                        
                                                    </div>
                                                </th>              
                                                <th rowSpan={3}>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>จำนวนรายการ</div>
                                                        
                                                    </div>
                                                </th>
                                                <th rowSpan={3}>
                                                    <div className="wd-160 d-flex flex-column justify-content-center align-items-center">
                                                        <div>วงเงินงบประมาณ</div>
                                                        
                                                    </div>
                                                </th>
                                                <th rowSpan={3}>
                                                    <div className="wd-160 d-flex flex-column justify-content-center align-items-center">
                                                        <div>วงเงินทำสัญญา</div>
                                                    </div>
                                                </th>
                                                <th rowSpan={3}>
                                                    <div className="wd-160 d-flex flex-column justify-content-center align-items-center">
                                                        <div>รายการที่ยังไม่ได้</div>
                                                        <div>ดำเนินการจัดซื้อจัดจ้าง</div>
                                                    </div>
                                                </th>
                                                <th rowSpan={3}>
                                                    <div className="wd-200 d-flex flex-column justify-content-center align-items-center">
                                                        <div>คงเหลือจากจัดซื้อจัดจ้าง</div>
                                                    </div>
                                                </th>
                                                <th colSpan={16}>
                                                    <div className="d-flex justify-content-center align-items-center">ผลการดำเนินงาน</div>
                                                </th>
                                                <th rowSpan={3}>
                                                    <div className="wd-160 d-flex flex-column justify-content-center align-items-center">
                                                        <div>หมายเหตุ</div>
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
                                                            
                                                        </div>
                                                    </th>
                                                    <th className="bg-info">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>ไม่เป็นไปตามแผน</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-info">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>แล้วเสร็จ</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-info">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>ยกเลิก</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-success">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>เป็นไปตามแผน</div>
                                                            
                                                        </div>
                                                    </th>
                                                    <th className="bg-success">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>ไม่เป็นไปตามแผน</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-success">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>แล้วเสร็จ</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-success">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>ยกเลิก</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-warning">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>เป็นไปตามแผน</div>
                                                            
                                                        </div>
                                                    </th>
                                                    <th className="bg-warning">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>ไม่เป็นไปตามแผน</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-warning">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>แล้วเสร็จ</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-warning">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>ยกเลิก</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-danger">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>เป็นไปตามแผน</div>
                                                            
                                                        </div>
                                                    </th>
                                                    <th className="bg-danger">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>ไม่เป็นไปตามแผน</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-danger">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>แล้วเสร็จ</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-danger">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>ยกเลิก</div>
                                                        </div>
                                                    </th>
                                                </tr>

                                                <tr>
                                                    <th></th>
                                                    <th>
                                                        <div className="d-flex justify-content-left align-items-center">1. งบลงทุน</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">6</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">20,242,000.00</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">20,242,000.00</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">4</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">2</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                </tr>

                                                <tr>
                                                    <th></th>
                                                    <th>
                                                        <div className="d-flex justify-content-left align-items-center ml-10">1.1 งบลงทุน (เงินงบประมาณ)</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">3</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">17,542,000.00</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">17,542,000.00</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">2</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">1</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
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
                                                        <div className="normalText d-flex justify-content-left align-items-center">ฝ่ายบริหารทั่วไป</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">1</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">6,969,000.00</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">6,969,000.00</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">1</div>  
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
                                                        <div className="normalText d-flex justify-content-left align-items-center">ฝ่ายทรัพยากรบุคคล</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">2</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">  10,573,000.00 </div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">  10,573,000.00 </div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">1</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">1</div>  
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
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th></th>
                                                </tr>
                                                
                                                <tr>
                                                    <th></th>
                                                    <th>
                                                        <div className="d-flex justify-content-left align-items-center ml-10">1.2 งบสำรองกรณีจำเป็นเร่งด่วน+สำรองราคา (เงินรายได้)</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">3</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">  2,700,000.00 </div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">  2,700,000.00 </div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">2</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">1</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
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
                                                        <div className="normalText d-flex justify-content-left align-items-center">ฝ่ายบริหารทั่วไป</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">1</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">  1,000,000.00 </div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">  1,000,000.00 </div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">1</div>  
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
                                                        <div className="normalText d-flex justify-content-left align-items-center">ฝ่ายดิจิทัลและเทคโนโลยีสารสนเทศ</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">2</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">  1,700,000.00 </div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">  1,700,000.00 </div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">1</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">1</div>  
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
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th></th>
                                                </tr>
                                            

                                                <tr>
                                                    <th></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">รวมเป็นเงินทั้งสิ้น</div>
                                                    </th>                                                  
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">  494 </div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">  1,396,175,770.26 </div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">  1,112,102,403.94</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">  248,033,800.00</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">  36,039,566.32 </div>
                                                    </th>
                                                    <th><div className="d-flex justify-content-center align-items-center">  476 </div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">  16 </div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">2</div></th>
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
                                                    <th></th>
                                                </tr>

                                                <tr>
                                                    <th></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">รวมรายการแต่ละไตรมาส</div>
                                                    </th> 
                                                    <th></th>                                                 
                                                    <th><div className="d-flex justify-content-center align-items-center">494</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">198</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">55</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">-</div></th>
                                                    <th colSpan={3}>
                                                        <div className="d-flex justify-content-center align-items-center">494</div>
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
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>
                                                    </th>
                                                    <th></th>
                                                </tr>

                                                <tr>
                                                    <th colSpan={2}>
                                                        <div className="d-flex justify-content-center align-items-center">คิดเป็นร้อยละ</div>
                                                    </th>                                               
                                                    <th><div className="d-flex justify-content-center align-items-center">100</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">100</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">79.65</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">17.77</div></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">2.58</div>
                                                    </th>
                                                    <th><div className="d-flex justify-content-center align-items-center">96.36</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">3.24</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">0.40</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">-</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">-</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">-</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">-</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">-</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">-</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">-</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">-</div></th> 
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>
                                                    </th>
                                                    <th><div className="d-flex justify-content-center align-items-center">-</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">-</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">-</div></th> 
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>
                                                    </th>
                                                    <th></th>
                                                </tr>          
                                                <tr>
                                                    <th colSpan={24}></th>
                                                </tr>

                                                <tr>
                                                    <th colSpan={24}>
                                                        <div className="d-flex justify-content-left align-items-center">หมายเหตุ</div>
                                                    </th> 
                                                </tr>

                                                <tr>
                                                    <th></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">แผนปฏิบัติการจัดซื้อจัดจ้าง ต้นปีงบประมาณ</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">จำนวน</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">201</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">รายการ</div>
                                                    </th>
                                                    <th colSpan={20}></th>
                                                </tr>

                                                <tr>
                                                    <th></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">เพิ่มแผนในไตรมาสที่ 1 </div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">จำนวน</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">52</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">รายการ</div>
                                                    </th>
                                                    <th colSpan={20}></th>
                                                </tr> 

                                                <tr>
                                                    <th colSpan={2}></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">รวม</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">253</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">รายการ</div>
                                                    </th>
                                                    <th colSpan={20}></th>
                                                </tr>
                                                <tr>
                                                    <th colSpan={2}></th>
                                                    <th>
                                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                                            <div>ดำเนินการ</div>
                                                            <div>แล้วเสร็จ</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">1</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">รายการ</div>
                                                    </th>
                                                    <th colSpan={20}></th>
                                                </tr> 
                                                <tr>
                                                    <th colSpan={2}></th>
                                                    <th>
                                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                                            <div>ดำเนินการต่อ</div>
                                                            <div>ไตรมาสที่ 2</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">252</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">รายการ</div>
                                                    </th>
                                                    <th colSpan={20}></th>
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