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
                <div className="breadcrumb-zone">รายงานแผนปฏิบัติการและการดำเนินงาน {'>'} <span className="bread-crumb-page-name"><b>รายงานสรุปแผนปฏิบัติการ ททท.(รวมเล่ม)</b></span></div>
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
                                    <b>รายงานสรุปแผนปฏิบัติการ ททท.(รวมเล่ม)</b>
                                </div>
                                <div className="boxes">
                                    <div className="table-area-plan-report d-flex flex-row justify-content-center align-items-center">
                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <tbody>
                                                <tr>
                                                    <th rowSpan={2}>
                                                        <div className="planNproject d-flex justify-content-center align-items-center">กลยุทธ์ แผนงาน และโครงการ</div>
                                                    </th>
                                                    <th rowSpan={2}>
                                                        <div className="responsible-person d-flex justify-content-center align-items-center">ผู้รับผิดชอบ</div>
                                                    </th>
                                                    <th rowSpan={2}>
                                                        <div className="project-area d-flex justify-content-center align-items-center">พื้นที่ดำเนินการ</div>
                                                    </th>
                                                    <th rowSpan={2}>
                                                        <div className="sub-process-project d-flex justify-content-center align-items-center">งบประมาณ (บาท)</div>
                                                    </th>
                                                    <th rowSpan={2}colSpan={2}>
                                                        <div className="indicator d-flex justify-content-center align-items-center">ตัวชี้วัด</div>                                                  
                                                    </th>
                                                    <th rowSpan={2}>
                                                        <div className="sub-process-project d-flex justify-content-center align-items-center">ค่าเป้าหมาย</div>
                                                    </th>
                                                    <th colSpan={4}>
                                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                                            <div>ระยะเวลาดำเนินการ</div>
                                                            <div>ปีงบประมาณ 2566</div> 
                                                         </div> 
                                                    </th>
                                                </tr>

                                                <tr>
                                                    <th><div className="year-quarter d-flex justify-content-center align-items-center">ไตรมาส 1</div></th>
                                                    <th><div className="year-quarter d-flex justify-content-center align-items-center">ไตรมาส 2</div></th>
                                                    <th><div className="year-quarter d-flex justify-content-center align-items-center">ไตรมาส 3</div></th>
                                                    <th><div className="year-quarter d-flex justify-content-center align-items-center">ไตรมาส 4</div></th>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        <div className="overall-strategy d-flex flex-row">
                                                            <div className="overall-strategys"><b>กลยุทธ์: </b></div>
                                                            <div className="overall-sub-strategys"><b>กลยุทธ์ที่ 1 กระตุ้นความถี่ในการเดินทางของกลุ่มกระแสหลัก</b></div>
                                                        </div>
                                                    </th>
                                                    <th colSpan={2}></th>
                                                    <th><div className="d-flex justify-content-right align-items-center">62,495,700</div></th>
                                                    <th colSpan={3}>
                                                        <div className="d-flex justify-content-center align-items-center">โครงการ (44 โครงการ)</div>
                                                    </th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                </tr>

                                                <tr>
                                                    <th rowSpan={6}>
                                                        <div className="overall-strategy d-flex flex-row">
                                                            <div className="overall-strategys"><b>แผนงาน : </b></div>
                                                            <div className="overall-sub-strategys">แผนงาน 1.1 กระตุ้นการเดินทางของนักท่องเที่ยวไทย</div>
                                                        </div>
                                                    </th>
                                                    <th colSpan={2}rowSpan={6}></th>
                                                    <th rowSpan={6}><div className="normalText d-flex justify-content-right align-items-center">17,500,000</div></th>
                                                    <th>
                                                        <div className="indicators normalText d-flex justify-content-left align-items-center">จำนวนการรับรู้สื่อ</div>
                                                    </th>
                                                    <th>
                                                        <div className="indicators-number normalText d-flex justify-content-center align-items-center">คน-ครั้ง</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">7,600,000</div>
                                                    </th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                </tr>
                                                <tr>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">จำนวนผู้ซื้อสินค้า/บริการท่องเที่ยว</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">PAX</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">7450</div>
                                                    </th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                </tr>
                                                <tr>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">อัตราการรับรู้สาระ(Content)ประชาสัมพันธ์ของผู้เยี่ยมเยือนชาวไทยกระแสหลัก</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">%</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">90</div>
                                                    </th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                </tr>    
                                                <tr>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">อัตราการรับรู้สาระ(Content)โฆษณาของผู้เยี่ยมเยือนชาวไทยกระแสหลัก</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">%</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">90</div>
                                                    </th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                </tr>    
                                                <tr>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">อัตราความต้องการเดินทางท่องเที่ยวของผู้เยี่ยมเยือนชาวไทยกระแสหลัก</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">%</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">80</div>
                                                    </th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                </tr>    
                                                <tr>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">อัตราความพึงพอใจในการปฏิบัติงาน</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">%</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">80</div>
                                                    </th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                </tr>

                                                <tr>
                                                    <th colSpan={7}>
                                                        <div className="d-flex justify-content-left align-items-center">โครงการ (19 โครงการ)</div>
                                                    </th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                </tr>

                                                <tr>
                                                    <th rowSpan={4}>
                                                        <div className="normalText d-flex justify-content-left align-items-center"><p>Maehongson on the road (Flagship Project)</p></div>
                                                    </th>
                                                    <th rowSpan={4}>
                                                        <div className="normalText d-flex justify-content-left align-items-center">ททท. สำนักงานแม่ฮ่องสอน</div>
                                                    </th>
                                                    <th rowSpan={4}>
                                                        <div className="normalText d-flex justify-content-left align-items-center">- ประเทศไทย แม่ฮ่องสอน</div>
                                                    </th>
                                                    <th rowSpan={4}>
                                                        <div className="normalText d-flex justify-content-right align-items-center">1,408,000</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">อัตราความต้องการเดินทางท่องเที่ยวของผู้เยี่ยมเยือนชาวไทยกระแสหลัก</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">(%)</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">80</div>
                                                    </th>
                                                    <th rowSpan={4}><div className="d-flex justify-content-center align-items-center">/</div></th>
                                                    <th rowSpan={4}><div className="d-flex justify-content-center align-items-center">/</div></th>
                                                    <th rowSpan={4}><div className="d-flex justify-content-center align-items-center">/</div></th>
                                                    <th rowSpan={4}><div className="d-flex justify-content-center align-items-center">/</div></th>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">จำนวนผู้ซื้อสินค้า/บริการท่องเที่ยว</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">(PAX)</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">800</div>
                                                    </th>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">จำนวนการรับรู้สื่อ</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">(คน-ครั้ง)</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">500,000</div>
                                                    </th>
                                                </tr>       

                                                <tr>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">อัตราการรับรู้สาระ (Content) ประชาสัมพันธ์ของผู้เยี่ยมเยือนชาวไทยกระแสหลัก</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">(%)</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">90</div>
                                                    </th>
                                                </tr>

                                                <tr>
                                                    <th rowSpan={4}>
                                                        <div className="normalText d-flex justify-content-left align-items-center">Fun Fin Food @Phitsanulok พิดโลกที่คิดถึง (Flagship Project)</div>
                                                    </th>
                                                    <th rowSpan={4}>
                                                        <div className="normalText d-flex justify-content-left align-items-center">ททท. สำนักงานพิษณุโลก</div>
                                                    </th>
                                                    <th rowSpan={4}>
                                                        <div className="normalText d-flex justify-content-left align-items-center">- ประเทศไทย พิษณุโลก</div>
                                                    </th>
                                                    <th rowSpan={4}>
                                                        <div className="normalText d-flex justify-content-right align-items-center">1,760,000</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">จำนวนผู้ซื้อสินค้า/บริการท่องเที่ยว</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">(PAX)</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">1000</div>
                                                    </th>
                                                    <th rowSpan={4}><div className="d-flex justify-content-center align-items-center">/</div></th>
                                                    <th rowSpan={4}><div className="d-flex justify-content-center align-items-center">/</div></th>
                                                    <th rowSpan={4}><div className="d-flex justify-content-center align-items-center">/</div></th>
                                                    <th rowSpan={4}><div className="d-flex justify-content-center align-items-center">/</div></th>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">อัตราการรับรู้สาระ (Content) ประชาสัมพันธ์ของผู้เยี่ยมเยือนชาวไทยกระแสหลัก</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">(%)</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">90</div>
                                                    </th>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">จำนวนการรับรู้สื่อ</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">(คน-ครั้ง)</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">1,800,000</div>
                                                    </th>
                                                </tr>  

                                                <tr>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">อัตราความต้องการเดินทางท่องเที่ยวของผู้เยี่ยมเยือนชาวไทยกระแสหลัก</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">(%)</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">80</div>
                                                    </th>
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