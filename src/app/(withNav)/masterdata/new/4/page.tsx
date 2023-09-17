"use client";

import React from "react";
import { useState } from "react";
import "@components/Report-temp/report-temp.scss";
import { useParams, useRouter } from "next/navigation";
import Table from './table';

export default function Page() {
    const data = [
        {nameT:'หัวหน้างาน_กลยุทธ์การตลาด', nameE:'Manager', dateEdit:'06/10/2563 15:19:43', editBy:''},
        {nameT:'กลุ่มหัวหน้างาน (ไม่เห็น Master)', nameE:'Manager', dateEdit:'06/10/2563 15:19:18', editBy:''},
        {nameT:'กลุ่มผู้ดูแลระบบ', nameE:'Manager', dateEdit:'06/10/2563 15:18:59', editBy:''},
        {nameT:'กลุ่มผู้ใช้งานทั่วไป', nameE:'User Level 1 Group', dateEdit:'06/10/2563 15:18:59', editBy:''},
        {nameT:'กลุ่มจัดซื้อจัดจ้าง', nameE:'กลุ่มจัดซื้อจัดจ้าง', dateEdit:'06/10/2563 15:18:59', editBy:''},
        {nameT:'กลุ่ม Dashboard', nameE:'Dashboard Group', dateEdit:'26/06/2560 16:15:58', editBy:''}
    ];
    
    return (
        <>
            <div className='d-flex flex-column' style={{width: '100%'}}>
            <div className="breadcrumb-zone fz-20">Master Data {'>'} <span className="bread-crumb-page-name"><b>สิทธิการใช้งาน (Group)</b></span></div>
                    <div className='search-wrapper-section d-flex flex-column'>
                        <div className="d-flex flex-row justify-content-around">
                            <div className="d-flex flex-column">
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                <div className="box">
                                    <b>ชื่อกลุ่ม:</b>
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