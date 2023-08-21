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
                <div className="breadcrumb-zone">รายงานแผนปฏิบัติการและการดำเนินงาน {'>'} <span className="bread-crumb-page-name"><b>รายงานสรุปงบประมาณรายโครงการเปรียบเทียบแผน-ผล รายเดือน</b></span></div>
                    <div className='search-wrapper-section d-flex flex-column'>
                    <div className="d-flex flex-row justify-content-around">
                            <div className="d-flex flex-column">
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="boxs">
                                        <b>ด้าน:</b>
                                    </div>
                                    <div className="boxs">
                                        <div className="filter-field">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>  -- เลือกทั้งหมด --  </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="boxs">
                                        <b>ฝ่าย/สำนัก:</b>
                                    </div>
                                    <div className="boxs">
                                        <div className="filter-field">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>  -- เลือกทั้งหมด --  </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="boxs">
                                        <b>กอง/กลุ่ม:</b>
                                    </div>
                                    <div className="boxs">
                                        <div className="filter-field">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>  -- เลือกทั้งหมด --  </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="boxs">
                                        <b>หน่วยงาน:</b>
                                    </div>
                                    <div className="boxs">
                                        <div className="filter-field">
                                        <input type="text" className="form-control" placeholder="" id="filterOverall" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex flex-column">
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="boxs">
                                        <b>ปีงบประมาณ:</b>
                                    </div>
                                    <div className="boxs">
                                        <div className="filter-field">
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
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="boxs">
                                        <b>ชื่อแผน:</b>
                                    </div>
                                    <div className="boxs">
                                        <div className="filter-field">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>ประเด็นยุทธศาสตร์</option>
                                                <option value="1">ตลาดต่างประเทศ</option>
                                                <option value="2">ตลาดในประเทศ</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="boxs">
                                        <b>ประเด็นยุทธศาสตร์:</b>
                                    </div>
                                    <div className="boxs">
                                        <div className="filter-field">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>  -- เลือกทั้งหมด --  </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="boxs">
                                        <b>ชื่อกลยุทธ์ภาพรวม:</b>
                                    </div>
                                    <div className="boxs">
                                        <div className="filter-field">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>  -- เลือกทั้งหมด --  </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="d-flex flex-column">
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="boxs">
                                        <b>กลยุทธ์ภูมิภาค:</b>
                                    </div>
                                    <div className="boxs">
                                        <div className="filter-field">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>  -- เลือกทั้งหมด --  </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="boxs">
                                        <b>ชื่อแผนงาน:</b>
                                    </div>
                                    <div className="boxs">
                                        <div className="filter-field">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>  -- เลือกทั้งหมด --  </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="boxs">
                                        <b>ตลาด:</b>
                                    </div>
                                    <div className="boxs">
                                        <div className="filter-field">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>  -- เลือกทั้งหมด --  </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="boxs">
                                        <b>โครงการหลัก:</b>
                                    </div>
                                    <div className="boxs">
                                        <div className="filter-field">
                                        <input type="text" className="form-control" placeholder="" id="filterOverall" />
                                        </div>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="boxs">
                                        <b>โครงการ:</b>
                                    </div>
                                    <div className="boxs">
                                        <div className="filter-field">
                                        <input type="text" className="form-control" placeholder="" id="filterOverall" />
                                        </div>
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
                        <div className="d-flex justify-content-between justify-content-center align-items-center overflow-auto">
                            <div className="years d-flex flex-column p-2 justify-content-center">
                                <div className="box">
                                    <b>รายงานสรุปงบประมาณรายโครงการเปรียบเทียบแผน-ผล รายเดือน ประจำปีงบประมาณ 2566</b>
                                </div>
                                <div className="box d-flex">
                                    <div className="content"><b>หน่วยงาน:</b></div>
                                    <div className="content"><p>ด้านตลาดในประเทศ</p></div>
                                </div>
                                <div className="boxes">
                                    <div className="table-area-plan-report d-flex flex-row justify-content-center align-items-center">
                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <tbody>
                                                <tr className="table-primary">
                                                <th rowSpan={2}>
                                                    <div className="name-project d-flex justify-content-center align-items-center">ชื่อโครงการ</div>
                                                </th>
                                                <th rowSpan={2}>
                                                    <div className="process-project d-flex justify-content-center align-items-center">ประเด็นยุทธศาสตร์</div>
                                                </th>
                                                <th rowSpan={2}>
                                                    <div className="process-project d-flex justify-content-center align-items-center">กลยุทธ์</div>
                                                </th>
                                                <th rowSpan={2}>
                                                    <div className="process-project d-flex justify-content-center align-items-center">แผนงาน</div>
                                                </th>
                                                <th colSpan={2}>
                                                    <div className="process-project d-flex justify-content-center align-items-center">ตุลาคม</div>
                                                </th>
                                                <th colSpan={2}>
                                                    <div className="process-project d-flex justify-content-center align-items-center">พฤศจิกายน</div>
                                                </th>
                                                <th colSpan={2}>
                                                    <div className="process-project d-flex justify-content-center align-items-center">ธันวาคม</div>
                                                </th>
                                                <th colSpan={2}>
                                                    <div className="process-project d-flex justify-content-center align-items-center">มกราคม</div>
                                                </th>
                                                <th colSpan={2}>
                                                    <div className="process-project d-flex justify-content-center align-items-center">กุมภาพันธ์</div>
                                                </th>
                                                <th colSpan={2}>
                                                    <div className="process-project d-flex justify-content-center align-items-center">มีนาคม</div>
                                                </th>
                                                <th colSpan={2}>
                                                    <div className="process-project d-flex justify-content-center align-items-center">เมษายน</div>
                                                </th>
                                                <th colSpan={2}>
                                                    <div className="process-project d-flex justify-content-center align-items-center">พฤษภาคม</div>
                                                </th>
                                                <th colSpan={2}>
                                                    <div className="process-project d-flex justify-content-center align-items-center">มิถุนายน</div>
                                                </th>

                                                <th colSpan={2}>
                                                    <div className="process-project d-flex justify-content-center align-items-center">กรกฎาคม</div>
                                                </th>
                                                <th colSpan={2}>
                                                    <div className="process-project d-flex justify-content-center align-items-center">สิงหาคม</div>
                                                </th>
                                                <th colSpan={2}>
                                                    <div className="process-project d-flex justify-content-center align-items-center">กันยายน</div>
                                                </th>
                                                <th colSpan={2}>
                                                    <div className="process-project d-flex justify-content-center align-items-center">รวม</div>
                                                </th>
                                                </tr>

                                                <tr className="table-primary">
                                                <th><div className="detail-money d-flex justify-content-center align-items-center">แผน</div></th>
                                                <th><div className="detail-money d-flex justify-content-center align-items-center">ผล</div></th>
                                                <th><div className="detail-money d-flex justify-content-center align-items-center">แผน</div></th>
                                                <th><div className="detail-money d-flex justify-content-center align-items-center">ผล</div></th>
                                                <th><div className="detail-money d-flex justify-content-center align-items-center">แผน</div></th>
                                                <th><div className="detail-money d-flex justify-content-center align-items-center">ผล</div></th>
                                                <th><div className="detail-money d-flex justify-content-center align-items-center">แผน</div></th>
                                                <th><div className="detail-money d-flex justify-content-center align-items-center">ผล</div></th>
                                                <th><div className="detail-money d-flex justify-content-center align-items-center">แผน</div></th>
                                                <th><div className="detail-money d-flex justify-content-center align-items-center">ผล</div></th>
                                                <th><div className="detail-money d-flex justify-content-center align-items-center">แผน</div></th>
                                                <th><div className="detail-money d-flex justify-content-center align-items-center">ผล</div></th>
                                                <th><div className="detail-money d-flex justify-content-center align-items-center">แผน</div></th>
                                                <th><div className="detail-money d-flex justify-content-center align-items-center">ผล</div></th>
                                                <th><div className="detail-money d-flex justify-content-center align-items-center">แผน</div></th>
                                                <th><div className="detail-money d-flex justify-content-center align-items-center">ผล</div></th>
                                                <th><div className="detail-money d-flex justify-content-center align-items-center">แผน</div></th>
                                                <th><div className="detail-money d-flex justify-content-center align-items-center">ผล</div></th>
                                                <th><div className="detail-money d-flex justify-content-center align-items-center">แผน</div></th>
                                                <th><div className="detail-money d-flex justify-content-center align-items-center">ผล</div></th>
                                                <th><div className="detail-money d-flex justify-content-center align-items-center">แผน</div></th>
                                                <th><div className="detail-money d-flex justify-content-center align-items-center">ผล</div></th>
                                                <th><div className="detail-money d-flex justify-content-center align-items-center">แผน</div></th>
                                                <th><div className="detail-money d-flex justify-content-center align-items-center">ผล</div></th>
                                                <th><div className="detail-money d-flex justify-content-center align-items-center">แผน</div></th>
                                                <th><div className="detail-money d-flex justify-content-center align-items-center">ผล</div></th>
                                                </tr>

                                                <tr className="table-warning">
                                                <th colSpan={4}>หน่วยงาน: งานภาคตะวันออก 1</th>
                                                <th><div className="d-flex justify-content-right align-items-center">326,100</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">86,459.7</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">1,368,500</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">541,680</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">635,650</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">1,814,455</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">5,518,300</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">400,000</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">3,235,650</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">242,968</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">2,368,300</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">1,499,930.72</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">1,995,900</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">2,035,650</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">105,000</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">1,318,300</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">485,650</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">318,300</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">118,300</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">19,724,600</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">19,724,600</div></th>
                                                </tr>

                                                <tr>
                                                <th><div className="detail d-flex justify-content-left align-items-center">ชวนเพื่อนเที่ยวเมืองไทย...ให้กำลังใจผู้ประกอบการรถทัวร์</div></th>
                                                <th><div className="detail d-flex justify-content-left align-items-center">งบฟื้นฟูประเทศด้วยการท่องเที่ยว(งบคงเหลือ 65)</div></th>
                                                <th><div className="detail d-flex justify-content-left align-items-center">กลยุทธ์ที่ 1 กระตุ้นความถี่ในการเดินทางของกลุ่มกระแสหลัก(งบคงเหลือ 65)</div></th>
                                                <th><div className="detail d-flex justify-content-left align-items-center">แผนงาน 1.1 กระตุ้นการเดินทางของนักท่องเที่ยวไทย(งบคงเหลือ 65)</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">5,000,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">400,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">2,000,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">1,500,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">1,000,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">300,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">200,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">10,000,000</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">400,000</div></th>
                                                </tr>

                                                <tr>
                                                <th><div className="detail d-flex justify-content-left align-items-center">Workation วันธรรมดา</div></th>
                                                <th><div className="detail d-flex justify-content-left align-items-center">ยุทธศาสตร์ที่ 1 (SO1) มุ่งเน้นการท่องเที่ยวเชิงคุณภาพอย่างยั่งยืน</div></th>
                                                <th><div className="detail d-flex justify-content-left align-items-center">กลยุทธ์ที่ 1 กระตุ้นความถี่ในการเดินทางของกลุ่มกระแสหลัก</div></th>
                                                <th><div className="detail d-flex justify-content-left align-items-center">แผนงาน 1.3 ส่งเสริมการท่องเที่ยวในวันธรรมดา</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">207,600</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">86,459.70</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">1,200,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">541,680</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">400,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">1,767,430</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">400,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">1,000,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">700,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">1,361,830.72</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">727,600</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">1,000,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">1,500,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">105,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">1,000,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">300,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">200,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">7,635,200</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">3,862,400.42</div></th>
                                                </tr>

                                                <tr>
                                                <th><div className="detail d-flex justify-content-left align-items-center">Ease At East</div></th>
                                                <th><div className="detail d-flex justify-content-left align-items-center">ยุทธศาสตร์ที่ 1 (SO1) มุ่งเน้นการท่องเที่ยวเชิงคุณภาพอย่างยั่งยืน</div></th>
                                                <th><div className="detail d-flex justify-content-left align-items-center">กลยุทธ์ที่ 2 กระตุ้นการเดินทางและการใช้จ่ายของกลุ่มคุณภาพ</div></th>
                                                <th><div className="detail d-flex justify-content-left align-items-center">แผนงาน 2.1 ส่งเสริมให้เกิดการขยายวันพักจากประสบการณ์ท่องเที่ยว</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">100,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">150,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">217,350</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">100,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">217,350</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">242,968</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">150,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">91,075</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">250,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">217,350</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">100,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">167,350</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">100,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">100,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">1,869,400</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">334,043</div></th>
                                                </tr>

                                                <tr>
                                                <th><div className="detail d-flex justify-content-left align-items-center">จ้างเหมาลูกจ้างโครงการทำหน้าที่ประสานงานส่งเสริมการตลาดของกองตลาดภาคตะวันออก</div></th>
                                                <th><div className="detail d-flex justify-content-left align-items-center">ยุทธศาสตร์ที่ 1 (SO1) มุ่งเน้นการท่องเที่ยวเชิงคุณภาพอย่างยั่งยืน</div></th>
                                                <th><div className="detail d-flex justify-content-left align-items-center">กลยุทธ์ที่ 1 กระตุ้นความถี่ในการเดินทางของกลุ่มกระแสหลัก</div></th>
                                                <th><div className="detail d-flex justify-content-left align-items-center">แผนงาน 1.3 ส่งเสริมการท่องเที่ยวในวันธรรมดา</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">18,500</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">18,500</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">18,300</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">47,025</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">18,300</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">18,300</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">18,300</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">47,025</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">18,300</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">18,300</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">18,300</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">18,300</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">18,300</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">18,300</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">220,000</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">94,050</div></th>
                                                </tr>

                                                <tr className="table-warning">
                                                <th colSpan={4}>หน่วยงาน: งานภาคตะวันออก 2</th>
                                                <th><div className="d-flex justify-content-right align-items-center">300,000</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">300,000</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">1,200,000</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">98,889</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">350,000</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">700,000</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">356,208</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">550,000</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">70,396</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">550,000</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">1,356,730</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">550,000</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">500,000</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">350,000</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">650,000</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">350,000	</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">250,000</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">6,300,000</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">2,108,537</div></th>
                                                </tr>

                                                <tr>
                                                <th><div className="detail d-flex justify-content-left align-items-center">365 วัน สบ๊าย สบายตะวันออก (Flagship Project)</div></th>
                                                <th><div className="detail d-flex justify-content-left align-items-center">ยุทธศาสตร์ที่ 1 (SO1) มุ่งเน้นการท่องเที่ยวเชิงคุณภาพอย่างยั่งยืน</div></th>
                                                <th><div className="detail d-flex justify-content-left align-items-center">กลยุทธ์ที่ 1 กระตุ้นความถี่ในการเดินทางของกลุ่มกระแสหลัก</div></th>
                                                <th><div className="detail d-flex justify-content-left align-items-center">แผนงาน 1.1 กระตุ้นการเดินทางของนักท่องเที่ยวไทย</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">200,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">226,314</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">200,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">46,012</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">300,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">600,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">201,526</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">500,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">500,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">1,331,850</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">500,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">450,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">300,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">150,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">50,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">50,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">3,800,000</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">1,805,702</div></th>
                                                </tr>
                                                
                                                <tr>
                                                <th><div className="detail d-flex justify-content-left align-items-center">เที่ยวเมืองรอง สบ๊าย สบาย สไตล์ตะวันออก</div></th>
                                                <th><div className="detail d-flex justify-content-left align-items-center">ยุทธศาสตร์ที่ 1 (SO1) มุ่งเน้นการท่องเที่ยวเชิงคุณภาพอย่างยั่งยืน</div></th>
                                                <th><div className="detail d-flex justify-content-left align-items-center">กลยุทธ์ที่ 1 กระตุ้นความถี่ในการเดินทางของกลุ่มกระแสหลัก</div></th>
                                                <th><div className="detail d-flex justify-content-left align-items-center">แผนงาน 1.2 ส่งเสริมการท่องเที่ยวเมืองรองตามอัตลักษณ์พื้นที่</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">100,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">1,000,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">52,877</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">50,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">100,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">154,682</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">50,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">70,396</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">50,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">24,880</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">50,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">50,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">50,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">500,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">300,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">200,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">2,500,000</div></th>
                                                <th><div className="d-flex justify-content-right align-items-center">302,835</div></th>
                                                </tr>
                                            
                                            </tbody>
                                            </table>
                                    </div>                               
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}