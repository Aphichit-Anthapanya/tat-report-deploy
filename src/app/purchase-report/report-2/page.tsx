"use client";

import React from "react";
import { useState } from "react";
import "@components/Activities/activities-add.scss";
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
                <div className="breadcrumb-zone">รายงานจัดซื้อจัดจ้าง {'>'} <span className="bread-crumb-page-name"><b>รายงานสรุปแผนปฏิบัติการจัดซื้อจัดจ้าง (รายโครงการ) ประจำปีงบประมาณ 25XX</b></span></div>
                    <div className='search-wrapper-section d-flex flex-column'>
                        <div className="d-flex justify-content-around justify-content-center align-items-center">
                            <div className="content-search-box d-flex p-2 justify-content-center align-items-center">
                                <div className="purchase-report">
                                    <label>ปีงบประมาณ:</label>
                                </div>
                                <div className="purchase-report">
                                    <div className="filter-field">
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>2566</option>
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
                                <div className="purchase-report">
                                    <label>สถานะงาน:</label>
                                </div>
                                <div className="purchase-report">
                                    <div className="filter-field">
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
                                <div className="purchase-report">
                                    <label>หน่วยงาน:</label>
                                </div>
                                <div className="purchase-report">
                                    <div className="filter-field">
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
                        <div className="years d-flex flex-column p-2 justify-content-center">
                            <div className="box">
                                <b>รายงานสรุปแผนปฏิบัติการจัดซื้อจัดจ้าง (รายโครงการ) ประจำปีงบประมาณ 25XX</b>
                            </div>

                            <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr className="table-primary">
                                                <th>
                                                    <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                        <div className="content-sub">ลำดับ</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-140 d-flex flex-column justify-content-center align-items-center">
                                                        <div className="content-sub">ชื่อกิจกรรม</div>
                                                        <div className="content-sub">/งาน</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-300 d-flex flex-column justify-content-center align-items-center">
                                                        รายการจัดซื้อ/จัดจ้าง
                                                    </div>
                                                </th>
                                                <th colSpan={2}>
                                                    <div className="wd-180 d-flex flex-column justify-content-center align-items-center">
                                                        <div className="content-sub">หน่วยงาน</div>
                                                        <div className="content-sub">ที่รับผิดชอบ</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-50 d-flex justify-content-center align-items-center">
                                                        <div className="content-sub">จำนวนรายการ</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-140 d-flex flex-column justify-content-center align-items-center">
                                                        <div className="content-sub">วงเงิน</div>
                                                        <div className="content-sub">งบประมาณ</div>
                                                        <div className="content-sub">(บาท)</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        หมายเหตุ
                                                    </div>
                                                </th>
                                            </tr>

                                            <tr className="table-info">
                                                <th colSpan={2}></th>
                                                <th>
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        <div>รวมทั้งสิ้น</div>
                                                    </div>
                                                </th>
                                                <th colSpan={2}></th>
                                                <th>
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        <div>208</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="d-flex justify-content-right align-items-center">
                                                        <div>529,070,003.31</div>
                                                    </div>
                                                </th>
                                                <th></th>
                                            </tr>

                                            <tr className="table-success">
                                                <th colSpan={2}></th>
                                                <th>
                                                    <div className="d-flex justify-content-left align-items-center">
                                                        <div>1. งบลงทุน</div>
                                                    </div>
                                                </th>
                                                <th colSpan={2}></th>
                                                <th>
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        <div>6</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="d-flex justify-content-right align-items-center">
                                                        <div>20,242,000.00</div>
                                                    </div>
                                                </th>
                                                <th></th>
                                            </tr>

                                            <tr className="table-success">
                                                <th colSpan={2}></th>
                                                <th>
                                                    <div className="ml-10 d-flex justify-content-left align-items-center">
                                                        <div>1.1 งบลงทุน (เงินงบประมาณ)</div>
                                                    </div>
                                                </th>
                                                <th colSpan={2}></th>
                                                <th>
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        <div>3</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="d-flex justify-content-right align-items-center">
                                                        <div>17,542,000.00</div>
                                                    </div>
                                                </th>
                                                <th></th>
                                            </tr>

                                            <tr className="table-warning">
                                                <th colSpan={2}></th>
                                                <th>
                                                    <div className="d-flex justify-content-left align-items-center">
                                                        <div>ฝ่ายบริหารทั่วไป</div>
                                                    </div>
                                                </th>
                                                <th colSpan={2}></th>
                                                <th>
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        <div>1</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="d-flex justify-content-right align-items-center">
                                                        <div>6,969,000.00</div>
                                                    </div>
                                                </th>
                                                <th></th>
                                            </tr>

                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">
                                                            <div>1</div>
                                                        </div>
                                                    </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center">
                                                        <div>ปรับปรุงอาคาร ททท.</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center">
                                                        <div>ปรับปรุงห้องประชุมระดัลฝ่ายและโถ่งลิฟท์ ชั้น 4,6,8</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center">
                                                        <div>งานสถาปัตยกรรม</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-25 normalText d-flex justify-content-left align-items-center">
                                                        <div>กอส.</div>
                                                    </div>
                                                </th>
                                                <th></th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-right align-items-center">
                                                        <div>6,969,000.00</div>
                                                    </div>
                                                </th>
                                                <th></th>
                                            </tr>

                                            <tr className="table-warning">
                                                <th colSpan={2}></th>
                                                <th>
                                                    <div className="d-flex justify-content-left align-items-center">
                                                        <div>ฝ่ายดิจิทัลและเทคโนโลยีสารสนเทศ</div>
                                                    </div>
                                                </th>
                                                <th colSpan={2}></th>
                                                <th>
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        <div>2</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="d-flex justify-content-right align-items-center">
                                                        <div>10,573,000.00</div>
                                                    </div>
                                                </th>
                                                <th></th>
                                            </tr>

                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">
                                                            <div>2</div>
                                                        </div>
                                                    </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center">
                                                        <div>ปรับปรุงระบบภายในองค์กร</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center">
                                                        <div>โครงการจัดหาและบํารุงเครื่องคอมพิวเตอร์แม่ข่าย Oracle SPARC T๔-๔ พร้อม License</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center">
                                                        <div>งานระบบเครือข่าย</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-25 normalText d-flex justify-content-left align-items-center">
                                                        <div>กคค.</div>
                                                    </div>
                                                </th>
                                                <th></th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-right align-items-center">
                                                        <div>5,000,000.00</div>
                                                    </div>
                                                </th>
                                                <th></th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">
                                                            <div>3</div>
                                                        </div>
                                                    </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center">
                                                        <div>ปรับปรุงระบบภายในองค์กร</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center">
                                                        <div>โครงการจัดหาเครื่องคอมพิวเตอร์และอุปกรณ์คอมพิวเตอร์</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center">
                                                        <div>งานระบบเครือข่าย</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-25 normalText d-flex justify-content-left align-items-center">
                                                        <div>กคค.</div>
                                                    </div>
                                                </th>
                                                <th></th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-right align-items-center">
                                                        <div>5,573,000.00</div>
                                                    </div>
                                                </th>
                                                <th></th>
                                            </tr>
                                        </tbody>
                                    </table>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}