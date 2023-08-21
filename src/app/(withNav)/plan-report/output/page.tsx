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
                <div className="breadcrumb-zone">รายงานแผนปฏิบัติการและการดำเนินงาน {'>'} <span className="bread-crumb-page-name"><b>รายงานสรุปสถิติของหัวข้อที่เกิดความผิดพลาดบ่อยครั้ง</b></span></div>
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
                                <div className="content-search-box d-flex justify-content-right align-items-center">
                                    <div className="d-flex flex-column justify-content-right">
                                        <div className="d-flex flex-row justify-content-right">
                                            <div className="boxs d-flex filter-project-button justify-content-center align-items-center">
                                                <b>ตัวชี้วัด:</b>
                                            </div>
                                            <div className="boxs d-flex filter-project-button justify-content-center align-items-center">
                                                <div className="p-2"><button className="btn btn-primary">เลือกตัวชี้วัด</button></div>
                                                <div className="p-2"><button className="btn btn-primary">ล้างตัวชี้วัด</button></div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row justify-content-right">
                                            <div className="boxs pr-2">
                                                <div className="filter-field">
                                                <input type="text" className="form-control" placeholder="" id="filterOverall" /></div>
                                            </div>
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
                            <div className="years d-flex flex-column p-2 justify-content-center ">
                                <div className="box">
                                    <b>รายงานสรุปสถิติของหัวข้อที่เกิดความผิดพลาดบ่อยครั้ง</b>
                                </div>

                                <div className="boxes d-flex justify-content-center align-items-center">
                                    
                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <tbody>
                                                <tr className="table-primary">
                                                    <th colSpan={9}></th>
                                                    <th colSpan={2}>
                                                        <div className="twoH d-flex justify-content-center align-items-center">จำนวนสื่อมวลชน</div>
                                                    </th>
                                                </tr>
                                                <tr className="table-primary">
                                                    <th>
                                                        <div className="project-area d-flex justify-content-center align-items-center">หน่วยงาน</div>
                                                    </th>
                                                    <th>
                                                        <div className="oneHeight d-flex justify-content-center align-items-center">ตลาด</div>
                                                    </th>
                                                    <th>
                                                        <div className="indicators d-flex justify-content-center align-items-center">กลยุทธ์</div>
                                                    </th>
                                                    <th>
                                                        <div className="indicators d-flex justify-content-center align-items-center">แผนงาน</div>
                                                    </th>
                                                    <th>
                                                        <div className="indicators d-flex justify-content-center align-items-center">โครงการหลัก</div>
                                                    </th>
                                                    <th>
                                                        <div className="indicator d-flex justify-content-center align-items-center">โครงการ</div>
                                                    </th>
                                                    <th>
                                                        <div className="oneHfour d-flex justify-content-center align-items-center">ลำดับกิจกรรม</div>
                                                    </th>
                                                    <th>
                                                        <div className="indicators d-flex justify-content-center align-items-center">กิจกรรม</div>
                                                    </th>
                                                    <th>
                                                        <div className="oneHeight d-flex justify-content-center align-items-center">สถานะกิจกรรม</div>
                                                    </th>
                                                    <th>
                                                        <div className="oneH d-flex justify-content-center align-items-center">แผน</div>
                                                    </th>
                                                    <th>
                                                        <div className="oneH d-flex justify-content-center align-items-center">ผล</div>
                                                    </th>
                                                
                                                </tr>

                                                <tr className="table-warning">
                                                    <th colSpan={5}></th>
                                                    <th>
                                                        <div className="d-flex justify-content-left">โครงการ Manifest Your Purpose in Amazing Thailand ขยายระยะเวลาดำเนินโครงการถึง พ.ย. 64</div>
                                                    </th>
                                                    <th colSpan={3}></th>
                                                    <th>
                                                        <div className="d-flex justify-content-right">0</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right">10</div>
                                                    </th>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left">ททท. สำนักงานนิวยอร์ก</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left">อเมริกา (ฝั่งตะวันออก)</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left">กลยุทธ์ 1 กระตุ้นการเดินทางตลาดนักท่องเที่ยวคุณภาพ</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left">แผนงาน 1.1 เจาะกลุ่มตลาดใหม่ (First Visit)</div>
                                                    </th>
                                                    <th></th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left">โครงการ Manifest Your Purpose in Amazing Thailand ขยายระยะเวลาดำเนินโครงการถึง พ.ย. 64</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center">1</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left">Brand Partnership ร่วมกับเว็บไซต์ท่องเที่ยวและช่องทาง social media</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center">รายงานผล</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">0</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">10</div>   
                                                    </th>
                                                </tr>

                                                <tr className="table-warning">
                                                    <th colSpan={5}></th>
                                                    <th>
                                                        <div className="d-flex justify-content-left">โครงการ Find Your Amazing Story in Amazing Thailand</div>
                                                    </th>
                                                    <th colSpan={3}></th>
                                                    <th>
                                                        <div className="d-flex justify-content-right">0</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right">0</div>
                                                    </th>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left">ททท. สำนักงานนิวยอร์ก</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left">อเมริกา (ฝั่งตะวันออก)</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left">กลยุทธ์ 3 ตอกย้ำความเชื่อมั่นคุณค่าแบรนด์ท่องเที่ยว</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left">แผนงาน 3.1 พัฒนาแบรนด์ท่องเที่ยวไทยสู่การเป็น Preferred Destination</div>
                                                    </th>
                                                    <th></th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left">โครงการ Find Your Amazing Story in Amazing Thailand</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center">2</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left">ร่วมกับบริษัทหรือสื่อที่มีชื่อเสียงจัดทำ Joint PR หรือ Brand Partnership หรือ (virtual) event marketing</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center">รายงานผล</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">0</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">0</div>   
                                                    </th>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left">ททท. สำนักงานนิวยอร์ก</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left">อเมริกา (ฝั่งตะวันออก)</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left">กลยุทธ์ 3 ตอกย้ำความเชื่อมั่นคุณค่าแบรนด์ท่องเที่ยว</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left">แผนงาน 3.1 พัฒนาแบรนด์ท่องเที่ยวไทยสู่การเป็น Preferred Destination</div>
                                                    </th>
                                                    <th></th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left">โครงการ Find Your Amazing Story in Amazing Thailand</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center">1</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left">จัดจ้างบริษัทประชาสัมพันธ์ร่วมของตลาดอเมริกา และ กิจกรรสื่อสารต่าง ๆ สร้างการรับรู้และพันธมิตรร่วม อาทิ Virtual event, PR Clip</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center">รายงานผล</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">0</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">0</div>   
                                                    </th>
                                                </tr> 

                                                <tr className="table-warning">
                                                    <th colSpan={5}></th>
                                                    <th>
                                                        <div className="d-flex justify-content-left">Aussie & Kiwi are Foodies</div>
                                                    </th>
                                                    <th colSpan={3}></th>
                                                    <th>
                                                        <div className="d-flex justify-content-right">0</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right">40</div>
                                                    </th>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left">ททท. สำนักงานซิดนีย์</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left">ออสเตรเลีย</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left">กลยุทธ์ 1 กระตุ้นการเดินทางตลาดนักท่องเที่ยวคุณภาพ</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left">แผนงาน 1.1 เจาะกลุ่มตลาดใหม่ (First Visit)</div>
                                                    </th>
                                                    <th></th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left">Aussie & Kiwi are Foodies</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center">2</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left">ประชาสัมพันธ์</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center">รายงานผล</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">0</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">40</div>   
                                                    </th>
                                                </tr> 

                                                <tr className="table-warning">
                                                    <th colSpan={5}></th>
                                                    <th>
                                                        <div className="d-flex justify-content-left">Super Great Health</div>
                                                    </th>
                                                    <th colSpan={3}></th>
                                                    <th>
                                                        <div className="d-flex justify-content-right">0</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right">10</div>
                                                    </th>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left">กองตลาดอาเซียน เอเชียใต้ และแปซิฟิกใต้</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left">ไม่ระบุตลาด</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left">กลยุทธ์ 3 ตอกย้ำความเชื่อมั่นคุณค่าแบรนด์ท่องเที่ยว</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left">แผนงาน 3.1 พัฒนาแบรนด์ท่องเที่ยวไทยสู่การเป็น Preferred Destination</div>
                                                    </th>
                                                    <th></th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left">Super Great Health</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center">4</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left">ประชุมและสัมมนากับเครือข่ายพันธมิตรทางการท่องเที่ยว  และเจรจาพบปะหารือกับผู้ประกอบการท่องเที่ยว</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center">รายงานผล</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">0</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">10</div>   
                                                    </th>
                                                </tr>

                                                <tr className="table-warning">
                                                    <th colSpan={5}></th>
                                                    <th>
                                                        <div className="d-flex justify-content-left">การจัดทำ The Michelin Guide Thailand</div>
                                                    </th>
                                                    <th colSpan={3}></th>
                                                    <th>
                                                        <div className="d-flex justify-content-right">0</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right">442</div>
                                                    </th>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left">กองเผยแพร่โฆษณาต่างประเทศ</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left">ไม่ระบุตลาด</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left">กลยุทธ์ 3 ตอกย้ำความเชื่อมั่นคุณค่าแบรนด์ท่องเที่ยว</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left">แผนงาน 3.3 The Michelin Guide Thailand</div>
                                                    </th>
                                                    <th></th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left">การจัดทำ The Michelin Guide Thailand</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center">1</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left">ดำเนินการโฆษณาประชาสัมพันธ์ และจัดทำคู่มือ The Michelin Guide Thailand</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center">รายงานผล</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">0</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">442</div>   
                                                    </th>
                                                </tr>
                                                
                                                <tr className="table-warning">
                                                    <th colSpan={5}></th>
                                                    <th>
                                                        <div className="d-flex justify-content-left">โครงการเผยแพร่ประชาสัมพันธ์แคมเปญ Amazing Thailand สำหรับตลาดต่างประเทศ</div>
                                                    </th>
                                                    <th colSpan={3}></th>
                                                    <th>
                                                        <div className="d-flex justify-content-right">100</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right">0</div>
                                                    </th>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left">กลุ่มงานอำนวยการด้านสื่อสารการตลาด</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left">ไม่ระบุตลาด</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left">กลยุทธ์ 3 ตอกย้ำความเชื่อมั่นคุณค่าแบรนด์ท่องเที่ยว</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left">แผนงาน 3.1 พัฒนาแบรนด์ท่องเที่ยวไทยสู่การเป็น Preferred Destination</div>
                                                    </th>
                                                    <th></th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left">โครงการเผยแพร่ประชาสัมพันธ์แคมเปญ Amazing Thailand สำหรับตลาดต่างประเทศ</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center">1</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left">ประชาสัมพันธ์แคมเปญ Amazing Thailand ในงานส่งเสริมการขาย งานประชุม งานเทศกาล และการจัดการแข่งขันกีฬานานาชาติ</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center">รายงานผล</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">100</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">0</div>   
                                                    </th>
                                                </tr>

                                                <tr className="table-primary">
                                                    <th colSpan={8}></th>
                                                    <th>
                                                        <div className="d-flex justify-content-right">รวมทั้งหมด</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right">100</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right">502</div>
                                                    </th>
                                                </tr>                                                          
                                            </tbody>
                                        </table>
                                    </div>                               
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="normalText d-flex flex-column justify-content-left">
                        <div>- วันที่ออกรายงาน:19 ก.ค. 2566 12:34:14</div>
                    </div>
                </div>
        </>
    )
}