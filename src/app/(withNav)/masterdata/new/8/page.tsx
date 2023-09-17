"use client";

import React from "react";
import { useState } from "react";
import "@components/Report-temp/report-temp.scss";
import { useParams, useRouter } from "next/navigation";
import Table from './table';

export default function Page() {
    const data = [
        { number: '1', planName: 'ตลาดในประเทศ', group:'ประเภท 1', type:'รายงานผลโดยตรง', calculating:'ตามสัดส่วนจำนวน', measure:'%', 
        indicatorsName:'(A1 : Aware) อัตราการรับรู้ Content หลักของภูมิภาคจากการเข้าร่วมงาน', note:''},
        { number: '2', planName: 'ตลาดในประเทศ', group:'ประเภท 1', type:'รายงานผลโดยตรง', calculating:'ตามสัดส่วนจำนวน', measure:'%', 
        indicatorsName:'(A1 : Aware) อัตราการรับรู้อัตลักษณ์พื้นที่รองที่ ททท. นำเสนอ', note:''},
        { number: '3', planName: 'ตลาดในประเทศ', group:'ประเภท 1', type:'รายงานผลโดยตรง', calculating:'ตามสัดส่วนจำนวน', measure:'%', 
        indicatorsName:'(A1 : Aware) อัตราการรับรู้อัตลักษณ์เมืองรองจากการเข้าร่วมงาน', note:''},
        { number: '4', planName: 'ตลาดในประเทศ', group:'ประเภท 1', type:'รายงานผลโดยตรง', calculating:'ตามสัดส่วนจำนวน', measure:'%', 
        indicatorsName:'(A1 : Aware) อัตราการรับรู้ภาพลักษณ์องค์กรในฐานะหน่วยงานที่มีความรับผิดชอบต่อสังคมและสิ่งแวดล้อม (วัดผู้มีส่วนได้ส่วนเสีย)', note:''},
        { number: '5', planName: 'ตลาดในประเทศ', group:'ประเภท 1', type:'รายงานผลโดยตรง', calculating:'ตามสัดส่วนจำนวน', measure:'%', 
        indicatorsName:'(A2 : Appeal) อัตราความต้องการเดินทางท่องเที่ยวของคนไทย', note:''},
        { number: '6', planName: 'ตลาดในประเทศ', group:'ประเภท 1', type:'รายงานผลโดยตรง', calculating:'ตามสัดส่วนจำนวน', measure:'%', 
        indicatorsName:'(A2 : Appeal) อัตราความต้องการเดินทางท่องเที่ยวของคนไทยเพื่อสัมผัสคุณค่าแบรนด์ประเทศไทยที่ ททท. กำหนด', note:''},
        { number: '7', planName: 'ตลาดในประเทศ', group:'ประเภท 1', type:'รายงานผลโดยตรง', calculating:'ตามสัดส่วนจำนวน', measure:'%', 
        indicatorsName:'(A2 : Appeal) อัตราความต้องการเดินทางบ่อยครั้งขึ้นจากการรับข้อมูลข่าวสารจาก ททท.', note:''},
        { number: '8', planName: 'ตลาดในประเทศ', group:'ประเภท 1', type:'รายงานผลโดยตรง', calculating:'ตามสัดส่วนจำนวน', measure:'%', 
        indicatorsName:'(A2 : Appeal) อัตราความต้องการเดินทางสัมผัสอัตลักษณ์พื้นที่รองตามที่ ททท. นำเสนอ', note:''},
        { number: '9', planName: 'ตลาดในประเทศ', group:'ประเภท 1', type:'รายงานผลโดยตรง', calculating:'ตามสัดส่วนจำนวน', measure:'%', 
        indicatorsName:'(A2 : Appeal) อัตราความต้องการมีส่วนร่วมของนักท่องเที่ยวในการท่องเที่ยวอย่างรับผิดชอบต่อสังคมและสิ่งแวดล้อมจากการรับรู้สื่อของ ททท.', note:''},
        { number: '10', planName: 'ตลาดในประเทศ', group:'ประเภท 1', type:'รายงานผลโดยตรง', calculating:'ผลรวมจำนวน', measure:'ครั้ง', 
        indicatorsName:'(A4 : Act) จำนวนความถี่ที่ต้องการเดินทางกลับมายังภูมิภาคเพิ่มขึ้นจากกิจกรรมการตลาดตามทิศทางภูมิภาค', note:''},
    ];
    
    return (
        <>
            <div className='d-flex flex-column' style={{width: '100%'}}>
                <div className="breadcrumb-zone fz-20">Master Data {'>'} <span className="bread-crumb-page-name"><b>Outcome</b></span></div>
                    <div className='search-wrapper-section d-flex flex-column'>
                        <div className="d-flex flex-row justify-content-around">
                            <div className="d-flex flex-column">
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="box">
                                        <b>ชื่อแผน :</b>
                                    </div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>  -- เลือก --  </option>
                                                <option value="1">ในประเทศ</option>
                                                <option value="2">ต่างประเทศ</option>
                                                <option value="3">สนับสนุนด้านการตลาด</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="box">
                                        <b>รูปแบบการคำนวณตัวชี้วัด :</b>
                                    </div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>  -- เลือก --  </option>
                                                <option value="1">รายงานผลโดยตรง</option>
                                                <option value="2">รายงานผลจากรวมผลรายละเอียดย่อย</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="box">
                                        <b>หน่วย :</b>
                                    </div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>  -- เลือก --  </option>
                                                <option value="1">%</option>
                                                <option value="2">คน</option>
                                                <option value="3">PAX</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-column">
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="box">
                                        <b>กลุ่มข้อมูล :</b>
                                    </div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>  -- เลือก --  </option>
                                                <option value="1">ประเภท 1</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="box">
                                        <b>วิธีการคำนวณตัวชี้วัด :</b>
                                    </div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>  -- เลือก --  </option>
                                                <option value="1">ผลรวมจำนวน</option>
                                                <option value="2">ผลรายละเอียดย่อย</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="box">
                                        <b>ชื่อตัวชี้วัด :</b>
                                    </div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <input type="text" className="form-control" placeholder="" id="filterOverall" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex filter-project-button justify-content-center">
                            <div className="p-2"><button className="btn btn-primary">ค้นหา</button></div>
                            <div className="p-2"><button className="btn btn-primary">ล้างค่า</button></div>
                        </div>    
                    </div>
                    <div className="d-flex filter-project-button justify-content-left">
                        <div className="p-2"><button className="btn btn-primary">เพิ่มข้อมูล</button></div>
                    </div>
                    <Table data={data}/>
                </div>
        </>
    )
}