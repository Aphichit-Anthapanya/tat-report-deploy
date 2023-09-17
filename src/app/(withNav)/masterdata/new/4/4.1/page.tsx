"use client";

import React from "react";
import { useState } from "react";
import "@components/Report-temp/report-temp.scss";
import { useParams, useRouter } from "next/navigation";
import Table from './table';

export default function Page() {
    const data = [
        {menuT:'แผนปฏิบัติการและการติดตามประเมินผล', menuE:'Project Plan', createDate:'26/06/2560 16:11:16'},
        {menuT:'ระบบรายงานแผนปฏิบัติการจัดซื้อจัดจ้าง', menuE:'Procurement', createDate:'26/06/2560 16:11:16'},
        {menuT:'1.รายงานแผนปฏิบัติการด้านการตลาดของ ททท.', menuE:'RE0001', createDate:'26/06/2560 16:11:16'},
        {menuT:'2.รายงานรายละเอียดโครงการแผน', menuE:'RE0002', createDate:'26/06/2560 16:11:16'},
        {menuT:'3.รายงานสรุปงบประมาณโครงการแผน', menuE:'RE0003', createDate:'26/06/2560 16:11:16'},
        {menuT:'4.รายงานผลการปฏิบัติงานของ ททท.', menuE:'RE0004', createDate:'26/06/2560 16:11:16'},
        {menuT:'5.สรุปผลการดำเนินงานระดับ Outcome โครงการ', menuE:'RE0005', createDate:'26/06/2560 16:11:16'},
        {menuT:'6.สรุปผลการดำเนินงานโครงการ/กิจกรรม(Output)', menuE:'RE0006', createDate:'26/06/2560 16:11:16'},
        {menuT:'7.สรุปความคืบหน้าการดำเนินงานโครงการ', menuE:'RE0007', createDate:'26/06/2560 16:11:16'},
        {menuT:'8.รายงานผลงบประมาณโครงการ', menuE:'RE0008', createDate:'26/06/2560 16:11:16'},
        
    ];
    const router = useRouter()
    return (
        <>
            <div className='d-flex flex-column' style={{width: '100%'}}>
            <div className="breadcrumb-zone fz-20">Master Data {'>'} <span className="bread-crumb-page-name"><b>สิทธิการใช้งาน (Group)</b></span></div>

                    <div className="d-flex filter-project-button justify-content-right">
                        <div className="p-2"><button className="btn btn-primary" onClick={() => router.push('/masterdata/new/4')}>ย้อนกลับ</button></div>
                        <div className="p-2"><button className="btn btn-primary">Submit</button></div>
                    </div>
                    <div className='search-wrapper-section d-flex flex-column'>
                        <h2>รายละเอียดผู้ใช้งาน</h2>
                        <div className="d-flex flex-row justify-content-around">
                        <div className='d-flex flex-column'>
                                <div className='d-flex flex-row content-search-box d-flex p-2 justify-content-right align-items-center'>
                                    <div className="d-flex justify-content-right align-items-center mr-5">ชื่อกลุ่ม(ไทย) :</div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <input type="text" className="form-control" placeholder="" id="filterOverall" value={'หัวหน้างาน_กลยุทธ์การตลาด'}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='content-search-box d-flex p-2 justify-content-right align-items-center'>
                                    <div className="d-flex justify-content-right align-items-center mr-5">สร้างโดย :</div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <input type="text" className="form-control" placeholder="" id="filterOverall" value={''} disabled/>
                                        </div>
                                    </div>
                                </div>
                                <div className='content-search-box d-flex p-2 justify-content-right align-items-center'>
                                    <div className="d-flex justify-content-right align-items-center mr-5">แก้ไขโดย :</div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <input type="text" className="form-control" placeholder="" id="filterOverall" value={''} disabled/>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className='d-flex flex-column'>
                                <div className='content-search-box d-flex p-2 justify-content-right align-items-center'>
                                    <div className="d-flex justify-content-right align-items-center mr-5">ชื่อกลุ่ม(อังกฤษ) :</div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <input type="text" className="form-control" placeholder="" id="filterOverall" value={'Manager'}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='content-search-box d-flex p-2 justify-content-right align-items-center'>
                                    <div className="d-flex justify-content-right align-items-center mr-5">วันที่สร้าง :</div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <input type="text" className="form-control" placeholder="" id="filterOverall" value={'20/02/2560 11:42:56'} disabled/>
                                        </div>
                                    </div>
                                </div>
                                <div className='content-search-box d-flex p-2 justify-content-right align-items-center'>
                                    <div className="d-flex justify-content-right align-items-center mr-5">วันที่แก้ไข :</div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <input type="text" className="form-control" placeholder="" id="filterOverall" value={'20/02/2560 11:42:56'} disabled/>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        </div>   
                    </div>
                    <div className='search-wrapper-section d-flex flex-column'>
                        <h2>รายการเมนู</h2>
                        <div className="d-flex filter-project-button justify-content-left">
                            <div className="p-2"><button className="btn btn-primary">เพิ่มข้อมูล</button></div>
                        </div>
                        <Table data={data}/>
                    </div>
                    <div className="d-flex filter-project-button justify-content-right">
                        <div className="p-2"><button className="btn btn-primary" onClick={() => router.push('/masterdata/new/4')}>ย้อนกลับ</button></div>
                        <div className="p-2"><button className="btn btn-primary">Submit</button></div>
                    </div>
                </div>
        </>
    )
}