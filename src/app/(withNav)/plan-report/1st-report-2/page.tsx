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
                <div className="breadcrumb-zone">รายงานแผนปฏิบัติการและการดำเนินงาน {'>'} <span className="bread-crumb-page-name"><b>รายงานรายละเอียดโครงการแผน/กิจกรรมตามที่ได้รับอนุมัติจากคณะกรรมการ ททท.</b></span></div>
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
                                    <b>รายงานรายละเอียดโครงการแผน/กิจกรรมตามที่ได้รับอนุมัติจากคณะกรรมการ ททท.</b>
                                </div>
                                <div className="box d-flex">
                                    <div className="content mr-5"><b>หน่วยงาน:</b></div>
                                    <div className="content"><p>ด้านบริหาร</p></div>
                                </div>
                                <div className="boxes">
                                    <div className="table-area-plan-report d-flex flex-row justify-content-center align-items-center">
                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <tbody>
                                            <tr>
                                            <th rowSpan={1}>
                                                <div className="wd-400 d-flex justify-content-center align-items-center">กลยุทธ์-แผนงาน-โครงการ-กิจกรรม</div>
                                            </th>
                                            <th rowSpan={1}>
                                                <div className="wd-400 d-flex justify-content-center align-items-center">รายละเอียดกิจกรรม</div>
                                            </th>
                                            <th rowSpan={1}>
                                                <div className="wd-260 d-flex justify-content-center align-items-center">เป้าหมาย/ตัวชี้วัด</div>
                                            </th>
                                            <th rowSpan={1}>
                                                <div className="wd-180 d-flex justify-content-center align-items-center">กลุ่มเป้าหมายโครงการ/กิจกรรม</div>
                                            </th>
                                            <th rowSpan={1}>
                                                <div className="wd-140 d-flex justify-content-center align-items-center">สินค้าเสนอขายโครงการ/กิจกรรม</div>
                                            </th>
                                            <th rowSpan={1}>
                                                <div className="wd-140 d-flex justify-content-center align-items-center">งบประมาณ(บาท)</div>
                                            </th>
                                            <th colSpan={1}>
                                                <div className="wd-140 d-flex justify-content-center align-items-center">พื้นที่ดำเนินโครงการ/กิจกรรม</div>
                                            </th>
                                            <th rowSpan={1}>
                                                <div className="wd-120 d-flex justify-content-center align-items-center">ระยะเวลาดำเนินโครงการ/กิจกรรม</div>
                                            </th>
                                            </tr>

                                            <tr>
                                            <th colSpan={2}>
                                                <div className="content normalText d-column flex-row">
                                                    <div className="content-sub"><b>กลยุทธ์:</b> กลยุทธ์ที่ 1 บริหารจัดการข้อมูลและต่อยอดธุรกิจทางการท่องเที่ยว</div>
                                                    <div className="content-sub"><b>แผนงาน:</b> แผนงาน 1.1 พัฒนาข้อมูลด้านตลาดท่องเที่ยว</div>
                                                    <div className="content-sub"><b>หมวด พ.ร.บ. งบประมาณ:</b> บ7 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
                                                    <div className="content-sub"><b>รายการค่าใช้จ่าย :</b> บ7.1 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
                                                </div> 
                                            </th>
                                            <th>
                                            </th>
                                            <th>
                                            </th>
                                            <th>
                                            </th>
                                            <th>
                                                <div className="content normalText d-flex justify-content-right align-items-center">4,000,000</div>
                                            </th>
                                            <th>
                                            </th>
                                            <th>
                                            </th>
                                            </tr>

                                            <tr>
                                            <th colSpan={2}>
                                                <div className="content normalText d-flex flex-column ">
                                                    <div className="content d-flex flex-row">
                                                        <div className="content-sub mr-5"><b>โครงการ: </b></div>
                                                        <div className="content-sub">3. โครงการวิเคราะห์สถานการณ์ท่องเที่ยวตลาดต่างประเทศ (Flagship)/(ฺBig Project)</div>
                                                    </div>
                                                    <div className="content d-flex flex-row">
                                                        <div className="content-sub mr-5"><b>หลักการและเหตุผล:</b> ด้วยภารกิจของงานวิเคราะห์ตลาดต่างประเทศต้องติดตามสถานการณ์ท่องเที่ยวตลาดต่างประเทศ 
                                                        ทั้งสถานการณ์ปกติและการเกิดวิกฤตต่าง ๆ จำเป็นต้องมีข้อมูลในการติดตาม 
                                                        ทันต่อเหตุการณ์ เก็บรวบรวมข้อมูลและสังเกตสถานการณ์การท่องเที่ยว 
                                                        อาทิ แนวโน้มพฤติกรรมการเดินทาง การจองบัตรโดยสารเครื่องบินล่วงหน้า จำนวนนักท่องเที่ยวเดินทางออกนอกประเทศ 
                                                        การแข่งขันของประเทศคู่แข่ง ข่าวสาร บทวิเคราะห์ ความเคลื่อนไหวในอุตสาหกรรมท่องเที่ยว รวมทั้งปัจจัยอื่นที่มีผลต่อการเดินทางท่องเที่ยวประเทศไทยของชาวต่างชาติ 
                                                        จึงเห็นควรต้องมีข้อมูลและบทวิเคราะห์เพื่อใช้ในการประมวลผลคาดการณ์สถานการณ์นำเสนอของผู้บริหารและด้านตลาดต่างประเทศในการดำเนินกิจกรรมทางการตลาดได้ทันกาลตามบริบทที่เปลี่ยนแปลงไปอย่างรวดเร็ว</div>
 
                                                    </div>
                                                    <div className="content d-flex flex-column">
                                                        <div className="content-sub"><b>วัตถุประสงค์: </b></div>
                                                        <div className="content-sub ml-10">1. เพื่อจัดทำและพัฒนาข้อมูลสำหรับติดตามและวิเคราะห์สถานการณ์ท่องเที่ยวตลาดต่างประเทศ ให้มีความทันสมัย และตรงกับความต้องการผู้ใช้งานภายใน ททท.</div>
                                                        <div className="content-sub ml-10">2. เพิ่มพูนทักษะด้านการวิเคราะห์เพื่อนำมาใช้ประกอบการวิเคราะห์สถานการณ์ท่องเที่ยวตลาดต่างประเทศ</div>
                                                    </div>  
                                                </div> 
                                            </th>
                                            <th>
                                                <div className="content normalText d-flex flex-column">
                                                    <div className="content">
                                                        <div className="content-sub"><b>Outcome</b></div>
                                                    </div>
                                                    <div className="content">
                                                        <div className="content-sub mb-10">- ระดับความพึงพอใจของผู้ใช้ข้อมูลภายในจากททท. ไม่ต่ำกว่า 4.5 คะแนน</div>
                                                    </div>
                                                    <div className="content mt-20">
                                                        <div className="content-sub"><b>แผนความคืบหน้าการดำเนินโครงการรายไตรมาส</b></div>
                                                    </div>
                                                    <div className="content d-flex flex-row">
                                                        <div className="content-sub mr-5">ไตรมาส 1</div>
                                                        <div className="content-sub">ร้อยละ 24.00</div>
                                                    </div>
                                                    <div className="content d-flex flex-row">
                                                        <div className="content-sub mr-5">ไตรมาส 2</div>
                                                        <div className="content-sub">ร้อยละ 26.00</div>
                                                    </div>
                                                    <div className="content d-flex flex-row">
                                                        <div className="content-sub mr-5">ไตรมาส 3</div>
                                                        <div className="content-sub">ร้อยละ 26.00</div>
                                                    </div>
                                                    <div className="content d-flex flex-row">
                                                        <div className="content-sub mr-5">ไตรมาส 4</div>
                                                        <div className="content-sub">ร้อยละ 24.00</div>
                                                    </div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="content normalText d-flex flex-column">
                                                    <div className="content">- ผู้บริหาร ททท.</div>
                                                    <div className="content">- พนักงาน ททท. ส่วนกลาง</div>
                                                    <div className="content">- พนักงาน ททท. สำนักงานสาขาต่างประเทศ</div> 
                                                </div>
                                            </th>
                                            <th>
                                                <div className="content d-flex justify-content-center align-items-center">
                                                    <div className="content-sub">-</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="content normalText d-flex justify-content-right align-items-center">2,500,000</div>
                                            </th>
                                            <th>
                                                <div className="content normalText d-flex flex-column justify-content-left">
                                                        <div className="content-sub">- ภูมิภาคต่างประเทศ</div>
                                                        <div className="content-sub">- ททท. ส่วนกลาง</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="content normalText justify-content-center align-items-center">01 ต.ค. 2564 - 30 ก.ย. 2565</div>
                                            </th>
                                        </tr>

                                        <tr>
                                            <th>
                                                <div className="content d-flex justify-content-center align-items-center">กิจกรรม</div>
                                            </th>
                                            <th>
                                                <div className="content d-flex justify-content-center align-items-center">รายละเอียดกิจกรรม</div>
                                            </th>
                                            <th>
                                                <div className="content d-flex justify-content-center align-items-center">Output</div>
                                            </th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                        </tr>

                                        <tr>
                                            <th>
                                                <div className="content d-flex flex-column">
                                                    <div className="content">สนับสนุนตลาด</div>
                                                    <div className="content normalText">1. จัดหาข้อมูลที่สำคัญและทันสมัยประกอบการวิเคราะห์สถานการณ์ตลาดต่างประเทศ</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="content d-flex flex-column justify-content-center align-items-center">
                                                    <div className="content normalText">
                                                        - จัดหาข้อมูลที่สำคัญทางการตลาดออนไลน์ อาทิ บทความหรืองานวิจัยทางการตลาดจากหน่วยงานระดับโลก บริษัทวิจัยหรือ agency ในไทยและต่างประเทศที่ได้รับการยอมรับในระดับสากล
                                                    </div>
                                                    <div className="content normalText">
                                                        - หารือแลกเปลี่ยนข้อมูลกับหน่วยงานภายนอกเพื่อรวบรวมข้อมูลประกอบการจัดทำรายงานในรูปแบบต่างๆ อาทิ รายงานสถานการณ์ท่องเที่ยว บทวิเคราะห์เฉพาะเรื่อง รวมถึงการทำข้อมูลตามที่ได้รับการร้องขอ (Data on Demand)
                                                    </div>
                                                </div> 
                                            </th>
                                            <th>
                                                <div className="content normalText d-flex flex-column justify-content-left align-items-center">
                                                        <div className="content normalText">- รายงานสถานการณ์ท่องเที่ยวอย่างน้อย 3 ชิ้น</div>
                                                        <div>- สรุปข้อมูลการให้บริการในรูปแบบ Data on demand/บทวิเคราะห์เฉพาะเรื่อง อย่างน้อย 3 ชิ้น</div>
                                                    <div className="d-flex flex-row justify-content-left align-items-center">
                                                        <div className="content normalText">สัดส่วนกิจกรรมต่อโครงการ 30.00 %</div>
                                                    </div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="content d-flex flex-column">
                                                    <div className="content normalText">- ผู้บริหาร ททท.</div>
                                                    <div className="content normalText">- พนักงาน ททท. ส่วนกลาง</div>
                                                    <div className="content normalText">- พนักงาน ททท. สำนักงานสาขาต่างประเทศ</div> 
                                                </div>
                                            </th>
                                            <th></th>
                                            <th>
                                                <div className="content normalText d-flex justify-content-right align-items-center">1,000,000</div>
                                            </th>
                                            <th>
                                            <div className="content d-flex flex-column justify-content-left">
                                                    <div className="content normalText">- ภูมิภาคต่างประเทศ</div>
                                                    <div className="content normalText">- ททท. ส่วนกลาง</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="content normalText justify-content-center align-items-center">01 ต.ค. 2565 - 30 ก.ย. 2566</div>
                                            </th>
                                        </tr>
                                        
                                        <tr>
                                            <th>
                                                <div className="content d-flex flex-column">
                                                    <div className="content">สนับสนุนตลาด</div>
                                                    <div className="content normalText">2. เข้าร่วมประชุม/สัมมนา/อบรมสำหรับสนับสนุนการทำงานวิเคราะห์สถานการณ์ท่องเที่ยวต่างประเทศ</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="content d-flex flex-column justify-content-center align-items-center">
                                                    <div className="content normalText">
                                                    - เข้าร่วมหรือจัดการอบรมเพื่อพัฒนาทักษะสำหรับนำมาพัฒนาการทำงานของงานวิเคราะห์ตลาดต่างประเทศ(Online/Onsite) 
                                                    </div>
                                                    <div className="content normalText">
                                                    - เข้าร่วมประชุม/Workshop/สัมมนาเชิงวิชาการด้านการท่องเที่ยวกับหน่วยงานที่สำคัญของอุตสาหกรรมท่องเที่ยวโลกและบริษัทวิจัยระดับโลก อาทิ UNWTO, WTCC, Euromonitor และ  ททท. สำนักต่างประเทศ
                                                    </div>
                                                </div> 
                                            </th>
                                            <th>
                                                <div className="content d-flex flex-column justify-content-center align-items-center">
                                                    <div className="content d-flex flex-row justify-content-center align-items-center">
                                                        <div className="content normalText">
                                                            - จำนวนเข้าร่วมอบรมอย่างน้อย 1 ครั้ง - ร้อยละ 100 ของพนักงานที่เข้ารับการอบรมผ่านการอบรม - รายงานสรุปข้อมูลจากการเข้าร่วมประชุมเชิงวิชาการด้านการท่องเที่ยวอย่างน้อย 1 ชิ้น
                                                        </div>
                                                    </div>
                                                    <div className="content d-flex flex-row justify-content-center align-items-center">
                                                        <div className="content normalText">สัดส่วนกิจกรรมต่อโครงการ 15.00 %</div>
                                                    </div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="content d-flex flex-column">
                                                    <div className="content normalText">- ผู้บริหาร ททท.</div>
                                                    <div className="content normalText">- พนักงาน ททท. ส่วนกลาง</div>
                                                </div>
                                            </th>
                                            <th></th>
                                            <th>
                                                <div className="content normalText d-flex justify-content-right align-items-center">200,000</div>
                                            </th>
                                            <th>
                                            <div className="content d-flex flex-column justify-content-left">
                                                    <div className="content normalText">- ภูมิภาคต่างประเทศ</div>
                                                    <div className="content normalText">- ททท. ส่วนกลาง</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="content normalText justify-content-center align-items-center">01 ต.ค. 2565 - 30 มิ.ย. 2565</div>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th>
                                                <div className="content d-flex flex-column">
                                                    <div className="content">สนับสนุนตลาด</div>
                                                    <div className="content normalText">3. เก็บข้อมูลและสังเกตสถานการณ์การเดินทางของนักท่องเที่ยวต่างชาติ</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="content d-flex flex-column justify-content-center align-items-center">
                                                    <div className="content normalText">
                                                    - เก็บข้อมูลและสังเกตสถานการณ์การเดินทางของนักท่องเที่ยวต่างชาติตามแหล่งท่องเที่ยวสำคัญ
                                                    </div>
                                                    <div className="content normalText">
                                                    - เข้าร่วมสัมมนาหรือประชุมเพื่อเก็บข้อมูลลูกค้านักท่องเที่ยวต่างชาติ</div>
                                                </div> 
                                            </th>
                                            <th>
                                                <div className="content d-flex flex-column justify-content-center align-items-center">
                                                    <div className="content d-flex flex-row justify-content-center align-items-center">
                                                        <div className="content normalText">
                                                            - ข้อมูลรายงานวิเคราะห์สถานการณ์ท่องเที่ยวตลาดต่างประเทศอย่างน้อย 2 รายงาน
                                                        </div>
                                                    </div>
                                                    <div className="content d-flex flex-row justify-content-center align-items-center">
                                                        <div className="content normalText">
                                                            - จำนวนเข้าร่วมสัมมนาหรือประชุมอย่างน้อย 2 ครั้ง
                                                        </div>
                                                    </div>
                                                    <div className="content d-flex flex-row justify-content-center align-items-center">
                                                        <div className="content normalText">สัดส่วนกิจกรรมต่อโครงการ 15.00 %</div>
                                                    </div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="content d-flex flex-column justify-content-left">
                                                    <div className="content normalText">- ผู้บริหาร ททท.</div>
                                                    <div className="content normalText">- พนักงาน ททท. ส่วนกลาง</div>
                                                    <div className="content normalText">- พนักงาน ททท. สำนักงานสาขาต่างประเทศ</div> 
                                                </div>
                                            </th>
                                            <th></th>
                                            <th>
                                                <div className="content normalText d-flex justify-content-right align-items-center">200,000</div>
                                            </th>
                                            <th>
                                            <div className="content d-flex flex-column justify-content-left">
                                                    <div className="content-sub normalText">- ภูมิภาคต่างประเทศ</div>
                                                    <div className="content-sub normalText">- ททท. ส่วนกลาง</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="content normalText justify-content-center align-items-center ">01 ต.ค. 2565 - 30 ก.ย. 2565</div>
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