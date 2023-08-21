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
                <div className="breadcrumb-zone">รายงานแผนปฏิบัติการและการดำเนินงาน {'>'} <span className="bread-crumb-page-name"><b>รายงานสรุปงบประมาณรายเดือนตามหมวด พ.ร.บ.งบประมาณ</b></span></div>
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
                                    <b>รายงานสรุปงบประมาณรายเดือนตามหมวด พ.ร.บ.งบประมาณ</b>
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
                                                <tr className="table-warning">
                                                <th>
                                                    <div className="sub-process-project d-flex justify-content-center align-items-center">ปีงบประมาณ</div>
                                                </th>
                                                <th>
                                                    <div className="sub-process-project d-flex justify-content-center align-items-center">ด้าน</div>
                                                </th>
                                                <th>
                                                    <div className="sub-process-project d-flex justify-content-center align-items-center">ฝ่าย</div>
                                                </th>
                                                <th>
                                                    <div className="sub-process-project d-flex justify-content-center align-items-center">กอง</div>
                                                </th>
                                                <th>
                                                    <div className="process-project d-flex justify-content-center align-items-center">งาน</div>
                                                </th>
                                                <th>
                                                    <div className="process-project d-flex justify-content-center align-items-center">โครงการ</div>
                                                </th>
                                                <th>
                                                    <div className="process-project d-flex justify-content-center align-items-center">กลยุทธ์</div>
                                                </th>
                                                <th>
                                                    <div className="process-project d-flex justify-content-center align-items-center">แผนงาน</div>
                                                </th>
                                                <th>
                                                    <div className="process-project d-flex justify-content-center align-items-center">หมวด พ.ร.บ งบประมาณ</div>
                                                </th>
                                                <th>
                                                    <div className="process-project d-flex justify-content-center align-items-center">รายการค่าใช้จ่าย</div>
                                                </th>
                                                <th>
                                                    <div className="detail-money d-flex justify-content-center align-items-center">ตุลาคม</div>
                                                </th>
                                                <th>
                                                    <div className="detail-money d-flex justify-content-center align-items-center">พฤศจิกายน</div>
                                                </th>
                                                <th>
                                                    <div className="detail-money d-flex justify-content-center align-items-center">ธันวาคม</div>
                                                </th>
                                                <th>
                                                    <div className="detail-money d-flex justify-content-center align-items-center">มกราคม</div>
                                                </th>
                                                <th>
                                                    <div className="detail-money d-flex justify-content-center align-items-center">กุมภาพันธ์</div>
                                                </th>
                                                <th>
                                                    <div className="detail-money d-flex justify-content-center align-items-center">มีนาคม</div>
                                                </th>
                                                <th>
                                                    <div className="detail-money d-flex justify-content-center align-items-center">เมษายน</div>
                                                </th>
                                                <th>
                                                    <div className="detail-money d-flex justify-content-center align-items-center">พฤษภาคม</div>
                                                </th>
                                                <th>
                                                    <div className="detail-money d-flex justify-content-center align-items-center">มิถุนายน</div>
                                                </th>

                                                <th>
                                                    <div className="detail-money d-flex justify-content-center align-items-center">กรกฎาคม</div>
                                                </th>
                                                <th>
                                                    <div className="detail-money d-flex justify-content-center align-items-center">สิงหาคม</div>
                                                </th>
                                                <th>
                                                    <div className="detail-money d-flex justify-content-center align-items-center">กันยายน</div>
                                                </th>
                                                <th>
                                                    <div className="process-project d-flex justify-content-center align-items-center">รวมงบประมาณ 12 เดือน</div>
                                                </th>
                                                </tr>

                                                <tr>
                                                <th><div className="detail d-flex justify-content-center align-items-center">2566</div></th>
                                                <th><div className="detail d-flex justify-content-center align-items-center">รผน.</div></th>
                                                <th><div className="detail d-flex justify-content-center align-items-center">ภภน.</div></th>
                                                <th><div className="detail d-flex justify-content-center align-items-center">สพล.</div></th>
                                                <th><div className="detail d-flex justify-content-left align-items-center">ททท. สำนักงานพิษณุโลก</div></th>
                                                <th><div className="detail d-flex justify-content-left align-items-center">เพชรบูรณ์ไฉไล</div></th>
                                                <th><div className="detail d-flex justify-content-left align-items-center">กลยุทธ์ที่ 1 กระตุ้นความถี่ในการเดินทางของกลุ่มกระแสหลัก</div></th>
                                                <th><div className="detail d-flex justify-content-left align-items-center">แผนงาน 1.2 ส่งเสริมการท่องเที่ยวเมืองรองตามอัตลักษณ์พื้นที่</div></th>
                                                <th><div className="detail d-flex justify-content-left align-items-center">บ.11 กระจายพื้นที่และช่วงเวลาท่องเที่ยว </div></th>
                                                <th><div className="detail d-flex justify-content-left align-items-center">บ11.1 ส่งเสริมการท่องเที่ยวในพื้นที่รอง (รผน.)</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">20,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">20,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">100,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">100,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">300,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">10,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">220,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">40,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">15,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">250,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">15,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">10,000</div></th>
                                                <th><div className="process-project d-flex justify-content-right align-items-center">1,100,000</div></th>
                                                </tr>

                                                <tr>
                                                <th><div className="detail d-flex justify-content-center align-items-center">2566</div></th>
                                                <th><div className="detail d-flex justify-content-center align-items-center">รผน.</div></th>
                                                <th><div className="detail d-flex justify-content-center align-items-center">ภภน.</div></th>
                                                <th><div className="detail d-flex justify-content-center align-items-center">สพล.</div></th>
                                                <th><div className="detail d-flex justify-content-left align-items-center">ททท. สำนักงานพิษณุโลก</div></th>
                                                <th><div className="detail d-flex justify-content-left align-items-center">Fun Fin Food @Phitsanulok พิดโลกที่คิดถึง (Flagship Project)</div></th>
                                                <th><div className="detail d-flex justify-content-left align-items-center">กลยุทธ์ที่ 1 กระตุ้นความถี่ในการเดินทางของกลุ่มกระแสหลัก</div></th>
                                                <th><div className="detail d-flex justify-content-left align-items-center">แผนงาน 1.1 กระตุ้นการเดินทางของนักท่องเที่ยวไทย</div></th>
                                                <th><div className="detail d-flex justify-content-left align-items-center">บ.9 กระตุ้นการเดินทางของนักท่องเที่ยวไทย</div></th>
                                                <th><div className="detail d-flex justify-content-left align-items-center">บ9.1 ส่งเสริมตลาดนักท่องเที่ยวกระแสหลัก (รผน.)</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">50,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">300,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">90,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">250,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">20,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">170,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">300,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">120,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">20,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">280,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">140,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">20,000</div></th>
                                                <th><div className="process-project d-flex justify-content-right align-items-center">1,760,000</div></th>
                                                </tr>

                                                <tr>
                                                <th><div className="detail d-flex justify-content-center align-items-center">2566</div></th>
                                                <th><div className="detail d-flex justify-content-center align-items-center">รผน.</div></th>
                                                <th><div className="detail d-flex justify-content-center align-items-center">ภภน.</div></th>
                                                <th><div className="detail d-flex justify-content-center align-items-center">กภน.</div></th>
                                                <th><div className="detail d-flex justify-content-left align-items-center">งานภาคเหนือ 4</div></th>
                                                <th><div className="detail d-flex justify-content-left align-items-center">NorthXClusive</div></th>
                                                <th><div className="detail d-flex justify-content-left align-items-center">กลยุทธ์ที่ 2 กระตุ้นการเดินทางและการใช้จ่ายของกลุ่มคุณภาพ</div></th>
                                                <th><div className="detail d-flex justify-content-left align-items-center">แผนงาน 2.2 กระตุ้นการใช้จ่ายด้วยสินค้ามูลค่าสูง</div></th>
                                                <th><div className="detail d-flex justify-content-left align-items-center">บ.19 เพิ่มการใช้จ่ายของนักท่องเที่ยว</div></th>
                                                <th><div className="detail d-flex justify-content-left align-items-center">บ19.2 กระตุ้นการใช้จ่ายด้วยสินค้ามูลค่าสูง (Thailand Premium)</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">1,000,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">1,000,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">80,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">30,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">12,800</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">400,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">120,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">91,400</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">400,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">120,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">91,400</div></th>
                                                <th><div className="process-project d-flex justify-content-right align-items-center">2,445,600</div></th>
                                                </tr>

                                                <tr>
                                                <th><div className="detail d-flex justify-content-center align-items-center">2566</div></th>
                                                <th><div className="detail d-flex justify-content-center align-items-center">รผน.</div></th>
                                                <th><div className="detail d-flex justify-content-center align-items-center">ภภน.</div></th>
                                                <th><div className="detail d-flex justify-content-center align-items-center">กภน.</div></th>
                                                <th><div className="detail d-flex justify-content-left align-items-center">งานภาคเหนือ 4</div></th>
                                                <th><div className="detail d-flex justify-content-left align-items-center">NorthXClusive</div></th>
                                                <th><div className="detail d-flex justify-content-left align-items-center">กลยุทธ์ที่ 2 กระตุ้นการเดินทางและการใช้จ่ายของกลุ่มคุณภาพ</div></th>
                                                <th><div className="detail d-flex justify-content-left align-items-center">แผนงาน 2.2 กระตุ้นการใช้จ่ายด้วยสินค้ามูลค่าสูง</div></th>
                                                <th><div className="detail d-flex justify-content-left align-items-center">บ.19 เพิ่มการใช้จ่ายของนักท่องเที่ยว</div></th>
                                                <th><div className="detail d-flex justify-content-left align-items-center">บ19.2 กระตุ้นการใช้จ่ายด้วยสินค้ามูลค่าสูง (Thailand Premium)</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">0</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">1,000,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">1,000,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">80,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">30,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">12,800</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">400,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">120,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">91,400</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">400,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">120,000</div></th>
                                                <th><div className="detail d-flex justify-content-right align-items-center">91,400</div></th>
                                                <th><div className="process-project d-flex justify-content-right align-items-center">2,445,600</div></th>
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