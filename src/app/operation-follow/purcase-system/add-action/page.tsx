"use client";

import React from "react";
import { useState } from "react";
import "@components/Activities/activities-add.scss";
import Activities from "@components/Activities/Activities";
import AddActivities from "@components/Activities/Add-Activities";
import Form from 'react-bootstrap/Form';

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
            <div className='d-flex flex-column' style={{width: '100%', height: '100%'}}>
                <div className="breadcrumb-zone">นำเข้าข้อมูล {'>'} <span className="bread-crumb-page-name">เพิ่มงบลงทุน(งบประมาณ)</span> {'>'} <span className="bread-crumb-page-name"><b>ข้อมูลโครงการของแผนปฏิบัติการจัดซื้อจัดจ้าง</b></span></div>
                    <div className='search-wrapper-section d-flex flex-column '>
                            <div className="add-action-space d-flex flex-column">
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="add-action-box">
                                        <b>ปีงบประมาณ:*</b>
                                    </div>
                                    <div className="add-action-box">
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
                                    <div className="add-action-box">
                                        <b>ประเภทของงบ:*</b>
                                    </div>
                                    <div className="add-action-box">
                                        <div className="filter-field">
                                            <input type="text" className="form-control" placeholder="งบประมาณ" id="filterOverall" />
                                        </div>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-left align-items-center">
                                    <div className="add-action-box">
                                        <b>รายการจัดซื้อ/จัดจ้าง:*</b>
                                    </div>
                                    <div className="add-action-box">
                                        <div className="d-flex flex-column">
                                            <div className="d-flex flex-row">
                                                <div className="check-box">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="check1" name="option1" value=""/>
                                                        <label className="form-check-label">เพิ่มข้อมูลด้วยตนเอง</label>
                                                    </div>
                                                </div>
                                                <div className="check-box">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="check1" name="option1" value=""/>
                                                        <label className="form-check-label">เพิ่มข้อมูลจาก Action Plan</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="add-action-box">
                                        <b>ประเภทของงบ:*</b>
                                    </div>
                                    <div className="add-action-box">
                                        <div className="filter-field">
                                            <input type="text" className="form-control" placeholder="" id="filterOverall" />
                                        </div>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-left align-items-center">
                                    <div className="add-action-box">
                                        <b>ลักษณะงาน:*</b>
                                    </div>
                                    <div className="add-action-box">
                                        <div className="d-flex flex-column">
                                            <div className="d-flex flex-row">
                                                <div className="check-box">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="check1" name="option1" value=""/>
                                                        <label className="form-check-label">งานเสร็จภายในปีงบประมาณ</label>
                                                    </div>
                                                </div>
                                                <div className="check-box">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="check1" name="option1" value=""/>
                                                        <label className="form-check-label">งานต่อเนื่องที่ ครม.อนุมัติผูกพันงบประมาณปีต่อไป</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="add-action-box">
                                        <b>ฝ่าย:</b>
                                    </div>
                                    <div className="add-action-box">
                                        <div className="filter-field">
                                            <input type="text" className="form-control" placeholder="ฝ่ายบริหารทั่วไป" id="filterOverall" />
                                        </div>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="add-action-box">
                                        <b>ผู้รับผิดชอบโครงการ:</b>
                                    </div>
                                    <div className="add-action-box">
                                        <div className="filter-field">
                                            <input type="text" className="form-control" placeholder="กองบริหารจัดซื้อจัดจ้าง" id="filterOverall" />
                                        </div>
                                    </div>
                                </div> 
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="add-action-box">
                                        <b>เบอร์ติดต่อ:*</b>
                                    </div>
                                    <div className="add-action-box">
                                        <div className="filter-field">
                                            <input type="text" className="form-control" placeholder="" id="filterOverall" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="d-flex filter-project-button align-items-end justify-content-right">
                            <div className="p-2"><button className="btn btn-primary">ต่อไป</button></div>
                    </div>
            </div>
        </>
    )
}