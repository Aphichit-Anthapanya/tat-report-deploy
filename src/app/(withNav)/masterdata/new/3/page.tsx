"use client";

import React from "react";
import { useState } from "react";
import "@components/Report-temp/report-temp.scss";
import Table from './table';
import { useParams, useRouter } from "next/navigation";


export default function Page() {
    const data = [
        {uname:'rungtong.thas_delete', fname:'รุ้งทอง', lname:'ทศานนท์', status:'ปกติ', phnumber:''},
        {uname:'supaporn.tron', fname:'supaporn', lname:'tron', status:'ปกติ', phnumber:''},
        {uname:'thanaporn.laot', fname:'ธนภร', lname:'เหล่าธนาวิน', status:'ปกติ', phnumber:''},
        {uname:'msdiv_delete', fname:'msdiv', lname:'msdiv', status:'ปกติ', phnumber:''},
        {uname:'patcharee.ngam', fname:'patcharee', lname:'ngam', status:'ปกติ', phnumber:''},
        {uname:'jira.buat', fname:'jira.buat', lname:'บัวทอง', status:'ปกติ', phnumber:''},
        {uname:'charuchet.ruan', fname:'จารุเชฏฐ์', lname:'เรืองสุวรรณ', status:'ปกติ', phnumber:''},
        {uname:'ap6203', fname:'งานระบบคอมพิวเตอร์และงานเครือข่าย', lname:'', status:'ปกติ', phnumber:''},
        {uname:'ap6204', fname:'งานมาตรฐานและความมั่นคงปลอดภัยสารสนเทศ 2', lname:'', status:'ปกติ', phnumber:''},
        {uname:'ap6205', fname:'งานระบบสารสนเทศองค์กร', lname:'', status:'ปกติ', phnumber:''},
    ];
    
    return (
        <>
            <div className='d-flex flex-column' style={{width: '100%'}}>
            <div className="breadcrumb-zone fz-20">Master Data {'>'} <span className="bread-crumb-page-name"><b>ข้อมูลผู้ใช้งาน</b></span></div>
                    <div className='search-wrapper-section d-flex flex-column'>
                        <div className="d-flex flex-row justify-content-around">
                            <div className="d-flex flex-column">
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                <div className="box">
                                    <b>ชื่อผู้ใช้งาน:</b>
                                </div>
                                <div className="box">
                                    <div className="filter-field">
                                        <input type="text" className="form-control" placeholder="" id="filterOverall" />
                                    </div>
                                </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                <div className="box">
                                    <b>ชื่อ:</b>
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
                                        <b>สถานะ:</b>
                                    </div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>  -- เลือก --  </option>
                                                <option value="1">ปกติ</option>
                                                <option value="2">ปิดใช้งาน</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="box">
                                        <b>นามสกุล:</b>
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
                    <Table data={data}/>
                </div>
        </>
    )
}