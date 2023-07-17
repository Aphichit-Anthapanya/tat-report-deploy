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
            <div className='d-flex flex-column' style={{width: '100%'}}>
                <div className="breadcrumb-zone">นำเข้าข้อมูล {'>'} <span className="bread-crumb-page-name"><b>ข้อมูลโครงการของแผนปฏิบัติการจัดซื้อจัดจ้าง</b></span></div>
                    <div className='search-wrapper-section d-flex flex-column'>
                        <div className="d-flex flex-row justify-content-around">
                            <div className="d-flex flex-column">
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="box">
                                        <b>ปีงบประมาณ:</b>
                                    </div>
                                    <div className="box">
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
                                <div className="content-search-box d-flex p-2 justify-content-right">
                                    <div className="box">
                                        <b>ประเภทงบ:</b>
                                    </div>
                                    <div className="box">
                                        <div className="d-flex flex-column">
                                            <div className="d-flex flex-row">
                                                <div className="check-box">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="check1" name="option1" value=""/>
                                                        <label className="form-check-label">งบลงทุน</label>
                                                    </div>
                                                </div>
                                                <div className="check-box">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="check1" name="option1" value=""/>
                                                        <label className="form-check-label">งบอุดหนุน</label>
                                                    </div>
                                                </div> 
                                                <div className="check-box">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="check1" name="option1" value=""/>
                                                        <label className="form-check-label">งบรายได้</label>
                                                    </div>
                                                </div>   
                                            </div>
                                            <div className="sub-check-box">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="check1" name="option1" value="" disabled/>
                                                        <label className="form-check-label">งบลงทุน(งบประมาณ)</label>
                                                    </div>
                                                </div>
                                                <div className="sub-check-box">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="check1" name="option1" value="" disabled/>
                                                        <label className="form-check-label">งบสำรองกรณีจำเป็นเร่งด่วน</label>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                <div className="box">
                                    <b>โครงการ/กิจกรรม:</b>
                                </div>
                                <div className="box">
                                    <div className="filter-field">
                                        <input type="text" className="form-control" placeholder="" id="filterOverall" />
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="d-flex flex-column">
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="box">
                                        <b>ชื่อหน่วยงานที่รับผิดชอบ:</b>
                                    </div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <input type="text" className="form-control" placeholder="" id="filterOverall" />
                                        </div>
                                    </div>                                   
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="box">
                                        <b>วิธีการจัดซื้อจัดจ้าง:</b>
                                    </div>
                                    <div className="box">
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
                                    <div className="box">
                                        <b>สถานะงาน:</b>
                                    </div>
                                    <div className="box">
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
                            </div>
                        </div>
                        <div className="d-flex filter-project-button justify-content-center">
                            <div className="p-2"><button className="btn btn-primary">ดูรายงาน</button></div>
                            <div className="p-2"><button className="btn btn-secondary">ล้างค่า</button></div>
                        </div>    
                    </div>
                    <div className="d-flex flex-row">
                            <div className="p-2"><button className="btn btn-primary">เพิ่มงบลงทุน(งบประมาณ)</button></div>
                            <div className="p-2"><button className="btn btn-primary">เพิ่มงบสำรองกรณีจำเป็นเร่งด่วน</button></div>
                            <div className="p-2"><button className="btn btn-primary">เพิ่มงบอุดหนุน</button></div>
                            <div className="p-2"><button className="btn btn-primary">เพิ่มงบรายได้</button></div>
                        </div>
                </div>
        </>
    )
}