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
                <div className="breadcrumb-zone">รายงานจัดซื้อจัดจ้าง {'>'} <span className="bread-crumb-page-name"><b>รายงานสรุปแผน/ผลปฏิบัติการจัดซื้อจัดจ้าง(รายโครงการ) ประจำปีงบประมาณ 25XX</b></span></div>
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
                                    <b>รายงานสรุปแผน/ผลปฏิบัติการจัดซื้อจัดจ้าง(รายโครงการ) ประจำปีงบประมาณ 2566</b>
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
                                                    <div className="wd-160 d-flex justify-content-center align-items-center">
                                                        <div>วงเงินงบประมาณ</div>
                                                    </div>
                                                </th>
                                                <th rowSpan={3} colSpan={2}>
                                                    <div className="wd-200 d-flex justify-content-center align-items-center">
                                                        <div>วงเงินทำสัญญา</div>
                                                    </div>
                                                </th>
                                                <th rowSpan={3} colSpan={2}>
                                                    <div className="wd-200 d-flex flex-column justify-content-center align-items-center">
                                                        <div>อยู่ระหว่างดำเนินการ</div>
                                                        <div>จัดซื้อจัดจ้างตามแผน</div>
                                                    </div>
                                                </th>
                                                <th rowSpan={3}>
                                                    <div className="wd-160 d-flex flex-column justify-content-center align-items-center">
                                                        <div>คงเหลือจากการ</div>
                                                        <div>จัดซื้อจัดจ้าง</div>
                                                    </div>
                                                </th>
                                                <th colSpan={6}>
                                                    <div className="d-flex justify-content-center align-items-center">ผลการดำเนินงานประจำปี 25XX</div>
                                                </th>
                                                <th rowSpan={3}>
                                                    <div className="wd-160 d-flex justify-content-center align-items-center">
                                                        <div>หมายเหตุ</div>
                                                    </div>
                                                </th>
                                                </tr>

                                                <tr>
                                                    <th className="bg-info" colSpan={2}>
                                                        <div className="wd-300 d-flex justify-content-center align-items-center">แล้วเสร็จ</div>
                                                    </th>
                                                    <th className="bg-info" colSpan={2}>
                                                        <div className="wd-300 d-flex justify-content-center align-items-center">ยกเลิก</div>
                                                    </th>
                                                    <th className="bg-info" colSpan={2}>
                                                        <div className="wd-300 d-flex justify-content-center align-items-center">ดำเนินการต่อ ...</div>
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th className="bg-info">
                                                        <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                            <div>รายการ</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-info">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>จำนวนเงิน</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-info">
                                                        <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                            <div>รายการ</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-info">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>จำนวนเงิน</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-info">
                                                        <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                            <div>รายการ</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-info">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
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
                                                        <div className="d-flex justify-content-center align-items-center">237</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">625,038,930.29</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">21</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">506,072,666.72</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">24</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">98,047,988.68</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">21,448,034.89</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">2</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">460,095,786.44</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">0</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">0</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">4</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">14,786,570.28</div>
                                                    </th>
                                                    <th></th>
                                                </tr>

                                                <tr className="table-success">
                                                    <th></th>
                                                    <th>
                                                        <div className="d-flex justify-content-left align-items-center ml-5">1. งบลงทุน</div>
                                                    </th>
                                                    <th colSpan={2}></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">1</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">16,253,600</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">1</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">16,253,600</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
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
                                                    <th></th>
                                                </tr>

                                                <tr className="table-success">
                                                <th></th>
                                                    <th>
                                                        <div className="d-flex justify-content-left align-items-center ml-5">1.1 งบลงทุน (เงินงบประมาณ)</div>
                                                    </th>
                                                    <th colSpan={2}></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">1</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">16,253,600</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">1</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">16,253,600</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">1</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">0</div>  
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
                                                        <div className="normalText d-flex justify-content-left align-items-center">โครงการปรับปรุงห้องประชุมระดับฝ่ายและโถงลิฟท์(ส่วนต่อเนื่อง) อาคาร ททท. สำนักงานใหญ่</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">งานสถาปัตยกรรม</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">กอส.</div>
                                                    </th>
                                                    <th></th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">16,253,600</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">1</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">16,253,600</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">1</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">0</div>  
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

                                                <tr className="table-success">
                                                    <th></th>
                                                    <th>
                                                        <div className="d-flex justify-content-left align-items-center ml-5">2. งบอุดหนุน</div>
                                                    </th>
                                                    <th colSpan={2}></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">236</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">608,785,330.29</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">21</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">506,072,666.72</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">23</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">81,794,388.68</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">21,448,034.89</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">1</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">460,095,786.44</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">4</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">14,786,570.28</div>  
                                                    </th>
                                                    <th></th>
                                                </tr>

                                                <tr className="table-success">
                                                    <th></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center ml-5">1. หน่วยงานผู้ว่าการ</div>
                                                    </th>
                                                    <th colSpan={2}></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">1</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">1,000,000.00</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">1</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">1,000,000.00</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
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
                                                    <th></th>
                                                </tr>

                                                <tr className="table-warning">
                                                    <th></th>
                                                    <th>
                                                        <div className="d-flex justify-content-left align-items-center ml-5">สำนักผู้ว่าการ</div>
                                                    </th>
                                                    <th colSpan={2}></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">1</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">1,000,000.00</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">1</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">1,000,000.00</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
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
                                                    <th></th>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">1</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">กิจกรรม TAT Innovation Showcase 2023</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">งานนวัตกรรมองค์กร</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">กบย.</div>
                                                    </th>
                                                    <th></th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">1,000,000.00</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">1</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">1,000,000.00</div>  
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
                                                    <th></th>
                                                </tr>

                                                <tr className="table-success">
                                                    <th></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center ml-5">2. ด้านบริหาร</div>
                                                    </th>
                                                    <th colSpan={2}></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">21</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">88,253,692.68</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">16</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">68,341,186.91</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">5</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">17,879,996.68</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">2,032,509.09</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">67,342,186.91</div>  
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
                                                        <div className="d-flex justify-content-right align-items-center">999,000.00</div>  
                                                    </th>
                                                    <th></th>
                                                </tr>

                                                <tr className="table-warning">
                                                    <th></th>
                                                    <th>
                                                        <div className="d-flex justify-content-left align-items-center ml-5">2.1 ฝ่ายบริหารทั่วไป</div>
                                                    </th>
                                                    <th colSpan={2}></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">18</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">84,053,692.68</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">14</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">66,342,186.91</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">4</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">15,679,996.68</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">2,031,509.09</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">66,342,186.91</div>  
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
                                                        <div className="normalText d-flex justify-content-left align-items-center">จ้างเหมาบริการให้ความเห็นด้านการบริหารและกฎหมาย</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">งานปรึกษาด้านกฎหมาย</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">กกร.</div>
                                                    </th>
                                                    <th></th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">570,000.00</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">1</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">570,000.00</div>  
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
                                                        <div className="normalText d-flex justify-content-right align-items-center">570,000.00</div>  
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
                                                        <div className="normalText d-flex justify-content-left align-items-center">จัดซื้อกระดาษถ่ายเอกสาร สำรองคลังพัสดุ ประจำปี 2566</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">งานบริหารพัสดุ</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">กบจ.</div>
                                                    </th>
                                                    <th></th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center"> 700,000.00</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">-</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">1</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">700,000.00</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">-</div>  
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