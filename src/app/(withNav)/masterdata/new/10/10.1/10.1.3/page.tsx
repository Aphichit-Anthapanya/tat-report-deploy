"use client";

import React from "react";
import { useState } from "react";
import "@components/Report-temp/report-temp.scss";
import { useParams, useRouter } from "next/navigation";
import Table from './table';

export default function Page() {
    const router = useRouter()
    const data = [
        {number: '1', budgetYear:'2566', num:'6', nameT: 'งบกลางปี 2566', nameE:'งบกลางปี 2566'},
        {number: '2', budgetYear:'2566', num:'3', nameT: 'งบคงเหลือเดิมส่วนกลาง', nameE:'งบคงเหลือเดิมส่วนกลาง'},
        {number: '3', budgetYear:'2566', num:'4', nameT: 'งบคงเหลือเดิมสำนักงานสาขา', nameE:'งบคงเหลือเดิมสำนักงานสาขา'},
        {number: '4', budgetYear:'2566', num:'5', nameT: 'งบฟื้นฟูประเทศด้วยการท่องเที่ยว (งบคงเหลือ 65)', nameE:'งบฟื้นฟูประเทศด้วยการท่องเที่ยว (งบคงเหลือ 65)'},
        {number: '5', budgetYear:'2566', num:'1', nameT: 'กลยุทธ์ที่ 1 กระตุ้นความถี่ในการเดินทางของกลุ่มกระแสหลัก', nameE:'กลยุทธ์ที่ 1 กระตุ้นความถี่ในการเดินทางของกลุ่มกระแสหลัก'},
        {number: '6', budgetYear:'2566', num:'2', nameT: 'ยุทธศาสตร์ที่ 2 (SO2) สร้างคุณค่าและยกระดับอุตสาหกรรมท่องเที่ยว', nameE:'ยุทธศาสตร์ที่ 2 (SO2) สร้างคุณค่าและยกระดับอุตสาหกรรมท่องเที่ยว'},
    ];
    return (
        <>
            <div className='d-flex flex-column' style={{width: '100%'}}>
                    <div className="d-flex filter-project-button justify-content-right">
                        <div className="p-2"><button className="btn btn-primary" onClick={() => router.push('/masterdata/new/9')}>ย้อนกลับ</button></div>
                    </div>
                    <div className='search-wrapper-section d-flex flex-column'>
                        <h2>ข้อมูลชื่อแผน</h2>
                        <div className="d-flex flex-row justify-content-around">
                            <div className="d-flex flex-column">
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="box">
                                        <b>รหัสแผน :</b>
                                    </div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <input type="text" className="form-control" placeholder="" id="filterOverall" value={'10001'} disabled/>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="box">
                                        <b>ชื่อแผน(TH) :</b>
                                    </div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <input type="text" className="form-control" placeholder="" id="filterOverall" value={'ตลาดต่างประเทศ'} disabled/>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="box">
                                        <b>รายละเอียด :</b>
                                    </div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <input type="text" className="form-control" placeholder="" id="filterOverall" value={'ตลาดต่างประเทศ'} disabled/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-column">
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="box">
                                        <b></b>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="box">
                                        <b>ชื่อแผน(EN) :</b>
                                    </div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <input type="text" className="form-control" placeholder="" id="filterOverall" value={'International markets'} disabled/>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="box">
                                        <b></b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='search-wrapper-section d-flex flex-column'>
                        <div className="d-flex flex-row mb-50">
                            <div><button className="btn btn-primary" onClick={() => router.push('/masterdata/new/10/10.1/10.1.1')}>ข้อมูลตลาด</button></div>
                            <div><button className="btn btn-primary" onClick={() => router.push('/masterdata/new/10/10.1/10.1.2')}>ข้อมูลกลยุทธ์ภาพรวม</button></div>
                            <div><button className="btn btn-secondary" onClick={() => router.push('/masterdata/new/10/10.1/10.1.3')}>ข้อมูลประเด็นยุทธศาสตร์</button></div>
                            <div><button className="btn btn-primary" onClick={() => router.push('/masterdata/new/10/10.1/10.1.4')}>ความสอดคล้องกับนโยบายภายนอก</button></div>
                        </div>
                        <h3>ข้อมูลประเด็นยุทธศาสตร์</h3>
                        <div className="d-flex flex-row justify-content-around">
    
                            <div className="d-flex flex-column">
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="box">
                                        <b>ปีงบประมาณ :</b>
                                    </div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>  -- เลือก --  </option>
                                                <option value="1">2566</option>
                                                <option value="2">2565</option>
                                                <option value="3">2564</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-column">
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="box">
                                        <b>ชื่อประเด็นยุทธศาสตร์ :</b>
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
                        <div className="d-flex filter-project-button justify-content-left">
                            <div className="p-2"><button className="btn btn-primary">เพิ่มข้อมูล</button></div>
                        </div>
                        <div className="table-container mb-20">
                            <Table data={data}/>
                        </div>
                    </div>
                    <div className="d-flex filter-project-button justify-content-right">
                        <div className="p-2"><button className="btn btn-primary" onClick={() => router.push('/masterdata/new/9')}>ย้อนกลับ</button></div>
                        
                    </div>
                </div>
        </>
    )
}