"use client";

import React from "react";
import { useState } from "react";
import "@components/Report-temp/report-temp.scss";
import { useParams, useRouter } from "next/navigation";
import Table from './table';

export default function Page() {
    const data = [
        { number: '1', planName: 'ตลาดในประเทศ', group:'ประเภท 1', type:'รายงานผลโดยตรง', calculating:'ตามสัดส่วนจำนวน', measure:'%', 
        indicatorsName:'จำนวนการจัดงานแถลงข่าว', note:''},
        { number: '2', planName: 'ตลาดในประเทศ', group:'ประเภท 1', type:'รายงานผลโดยตรง', calculating:'ผลรวมจำนวน', measure:'คน-ครั้ง', 
        indicatorsName:'จำนวนการรับรู้สื่อ', note:''},
        { number: '3', planName: 'ตลาดในประเทศ', group:'ประเภท 1', type:'รายงานผลโดยตรง', calculating:'ผลรวมจำนวน', measure:'PAX', 
        indicatorsName:'จำนวนผู้ซื้อสินค้า/บริการท่องเที่ยว', note:''},
        { number: '4', planName: 'ตลาดในประเทศ', group:'ประเภท 1', type:'รายงานผลโดยตรง', calculating:'ผลรวมจำนวน', measure:'Content', 
        indicatorsName:'จำนวน Content', note:''},
        { number: '5', planName: 'ตลาดในประเทศ', group:'ประเภท 1', type:'รายงานผลโดยตรง', calculating:'ผลรวมจำนวน', measure:'ครั้ง', 
        indicatorsName:'จำนวนการเข้าร่วมประชุม/ให้คำแนะนำปรึกษาเพื่อส่งเสริมศักยภาพด้านการตลาดการท่องเที่ยวแก่หน่วยงานภายนอก', note:''},
        { number: '6', planName: 'ตลาดในประเทศ', group:'ประเภท 1', type:'รายงานผลโดยตรง', calculating:'ผลรวมจำนวน', measure:'ครั้ง', 
        indicatorsName:'จำนวนการจัด Agent FAM Trip', note:''},
        { number: '7', planName: 'ตลาดในประเทศ', group:'ประเภท 1', type:'รายงานผลโดยตรง', calculating:'ผลรวมจำนวน', measure:'ครั้ง', 
        indicatorsName:'จำนวนการจัด Media FAM Trip', note:''},
        { number: '8', planName: 'ตลาดในประเทศ', group:'ประเภท 1', type:'รายงานผลโดยตรง', calculating:'ผลรวมจำนวน', measure:'งาน', 
        indicatorsName:'จำนวนการจัด/เข้าร่วมงานส่งเสริมการขาย', note:''},
        { number: '9', planName: 'ตลาดในประเทศ', group:'ประเภท 1', type:'รายงานผลโดยตรง', calculating:'ผลรวมจำนวน', measure:'ครั้ง', 
        indicatorsName:'จำนวนการจัดกิจกรรม Online', note:''},
        { number: '10', planName: 'ตลาดในประเทศ', group:'ประเภท 1', type:'รายงานผลโดยตรง', calculating:'ผลรวมจำนวน', measure:'กิจกรรม', 
        indicatorsName:'จำนวนการจัดกิจกรรม Product Testing', note:''},
        { number: '11', planName: 'ตลาดในประเทศ', group:'ประเภท 1', type:'รายงานผลโดยตรง', calculating:'ผลรวมจำนวน', measure:'ครั้ง', 
        indicatorsName:'จำนวนการจัดกิจกรรมอื่นๆ', note:''},
        { number: '12', planName: 'ตลาดในประเทศ', group:'ประเภท 1', type:'รายงานผลโดยตรง', calculating:'ผลรวมจำนวน', measure:'ครั้ง', 
        indicatorsName:'จำนวนการจัดคาราวาน/แรลลี่', note:''}
    ];
    
    return (
        <>
            <div className='d-flex flex-column' style={{width: '100%'}}>
                <div className="breadcrumb-zone fz-20">Master Data {'>'} <span className="bread-crumb-page-name"><b>Output</b></span></div>
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
                                                <option value="1">ตลาดในประเทศ</option>
                                                <option value="2">ตลาดต่างประเทศ</option>
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