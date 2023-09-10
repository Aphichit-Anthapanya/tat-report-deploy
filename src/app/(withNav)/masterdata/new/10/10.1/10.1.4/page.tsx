"use client";

import React from "react";
import { useState } from "react";
import "@components/Report-temp/report-temp.scss";
import { useParams, useRouter } from "next/navigation";
import Table from './table';

export default function Page() {
    const router = useRouter()
    const data = [
        {number: '1', code:'20010', type:'ตลาดต่างประเทศ', nameT: 'เสริมสร้างการเรียนรู้ และความผูกพันในครอบครัว', nameE:'เสริมสร้างการเรียนรู้ และความผูกพันในครอบครัว', note:''},
        {number: '2', code:'1003', type:'ตลาดต่างประเทศ', nameT: 'เศรษฐกิจพอเพียง', nameE:'เศรษฐกิจพอเพียง', note:''},
        {number: '3', code:'20009', type:'ตลาดต่างประเทศ', nameT: '	เยาวชน', nameE:'	เยาวชน', note:''},
        {number: '4', code:'1004', type:'ตลาดต่างประเทศ', nameT: 'ไม่มี', nameE:'ไม่มี', note:''},
        {number: '5', code:'20528', type:'ตลาดต่างประเทศ', nameT: 'แผนปิดช่องว่าง (Gaps) ตามเกณฑ์ Enablers', nameE:'แผนปิดช่องว่าง (Gaps) ตามเกณฑ์ Enablers', note:''},
        {number: '6', code:'1002', type:'ตลาดต่างประเทศ', nameT: 'ผู้สูงอายุ', nameE:'ผู้สูงอายุ', note:''},
        {number: '7', code:'1001', type:'ตลาดต่างประเทศ', nameT: 'ผู้ด้อยโอกาส', nameE:'ผู้ด้อยโอกาส', note:''},
        {number: '8', code:'20539', type:'ตลาดต่างประเทศ', nameT: 'Flagship', nameE:'Flagship', note:''},
        {number: '9', code:'20539', type:'ตลาดต่างประเทศ', nameT: 'CSR in process', nameE:'CSR in process', note:''},
        {number: '10', code:'20570', type:'ตลาดต่างประเทศ', nameT: 'Big Project', nameE:'Big Project', note:''},
    ];
    return (
        <>
            <div className='d-flex flex-column' style={{width: '100%'}}>
                    <div className="d-flex filter-project-button justify-content-right">
                        <div className="p-2"><button className="btn btn-primary" onClick={() => router.push('/masterdata/new/10')}>ย้อนกลับ</button></div>
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
                            <div><button className="btn btn-primary" onClick={() => router.push('/masterdata/new/10/10.1/10.1.3')}>ข้อมูลประเด็นยุทธศาสตร์</button></div>
                            <div><button className="btn btn-secondary" onClick={() => router.push('/masterdata/new/10/10.1/10.1.4')}>ความสอดคล้องกับนโยบายภายนอก</button></div>
                        </div>
                        <div className="d-flex flex-row justify-content-around">
                            <div className="d-flex flex-column">
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="box">
                                        <b>รหัสความสอดคล้อง :</b>
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
                                        <b>ชื่อความสอดคล้อง :</b>
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
                        <div className="p-2"><button className="btn btn-primary" onClick={() => router.push('/masterdata/new/10')}>ย้อนกลับ</button></div>
                        
                    </div>
                </div>
        </>
    )
}