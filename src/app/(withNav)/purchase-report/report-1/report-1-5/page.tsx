"use client";

import React from "react";
import { useState } from "react";
import "@components/Report-temp/report-temp.scss";
import ReportTable from '../mainTable'
import SearchZone from "../searchZone";

export default function Page() {
    const data = [] as any;
    return (
        <>
            <div className='d-flex flex-column' style={{width: '100%'}}>
                <div className="breadcrumb-zone">รายงานจัดซื้อจัดจ้าง {'>'} <span className="bread-crumb-page-name">รายงานแผนปฏิบัติการจัดซื้อจัดจ้าง ประจำปีงบประมาณ 25XX </span> {'>'} <span className="bread-crumb-page-name"><b>งบอื่น ๆ</b></span></div>
                    <SearchZone/>
                    <div className='search-wrapper-section d-flex flex-column'>
                        <div className="years d-flex flex-column p-2 justify-content-center">
                            <div className="box">
                                <b>รายงานแผนปฏิบัติการจัดซื้อจัดจ้าง (งบอื่น ๆ) ประจำปีงบประมาณ 2565</b>
                            </div>
                            <div className="box d-flex">
                                <div className="content mr-10"><b>หน่วยงาน:</b></div>
                                <div className="content"><p>สำนักผู้ว่าการ</p></div>
                            </div>
                        </div>
                        <ReportTable data = {data}/>
                    </div>
                </div>
        </>
    )
}