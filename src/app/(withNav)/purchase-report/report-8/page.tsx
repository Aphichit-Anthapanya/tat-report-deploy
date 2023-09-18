"use client";

import React from "react";
import { useState } from "react";
import "@components/Report-temp/report-temp.scss";
import Activities from "@components/Activities/Activities";
import AddActivities from "@components/Activities/Add-Activities";
import ReportTable from './table'

export default function Page() {
    const data = [
        {
            total: [
                {
                    nameOfMethod: 'รวมทั้งสิ้น',
                        numberOfItem: '253',
                        budget: {
                            value: '712,308,885.13',
                            percentage: '100.00'
                        },
                        contractBudget: {
                            value: '556,336,201.97',
                            percentage: '78.10'
                        },
                        notOnProgress: {
                            value: '248,033,800.00',
                            percentage: '34.82'
                        },
                        remainingBudget: {
                            value: '- 92,061,116.84',
                            percentage: '- 12.92'
                        },
                }
            ]
        },
        {
            procurementMethod:[
                {
                    nameOfMethod: '1. วิธีประกาศเชิญชวนทั่วไป (e-Market, e-Bidding, สอบราคา)',
                    numberOfItem: '-',
                    budget: {
                        value: '-',
                        percentage: '-'
                    },
                    contractBudget: {
                        value: '-',
                        percentage: '-'
                    },
                    notOnProgress: {
                        value: '-',
                        percentage: '-'
                    },
                    remainingBudget: {
                        value: '-',
                        percentage: '-'
                    },
                },
                {
                    nameOfMethod: '2. วิธีคัดเลือก',
                    numberOfItem: '20',
                    budget: {
                        value: '105,069,977.28',
                        percentage: '14.75'
                    },
                    contractBudget: {
                        value: '102,436,135.60',
                        percentage: '14.38'
                    },
                    notOnProgress: {
                        value: '-',
                        percentage: '-'
                    },
                    remainingBudget: {
                        value: '2,633,841.68',
                        percentage: '0.37'
                    },
                },
                {
                    nameOfMethod: '3. วิธีเฉพาะเจาะจง',
                    numberOfItem: '178',
                    budget: {
                        value: '469,301,007.85',
                        percentage: '65.88'
                    },
                    contractBudget: {
                        value: '453,900,066.37',
                        percentage: '63.72'
                    },
                    notOnProgress: {
                        value: '-',
                        percentage: '-'
                    },
                    remainingBudget: {
                        value: '15,400,941.48',
                        percentage: '2.16'
                    },
                },
                {
                    nameOfMethod: '4. อยู่ระหว่างดำเนินการจัดซื้อจัดจ้างตามแผน',
                    numberOfItem: '55',
                    budget: {
                        value: '137,937,900.00',
                        percentage: '19.36'
                    },
                    contractBudget: {
                        value: '-',
                        percentage: '-'
                    },
                    notOnProgress: {
                        value: '248,033,800.00',
                        percentage: '34.82'
                    },
                    remainingBudget: {
                        value: '- 110,095,900.00',
                        percentage: '- 15.46'
                    },
                },
                {
                    nameOfMethod: '5. ยกเลิก',
                    numberOfItem: '-',
                    budget: {
                        value: '-',
                        percentage: '-'
                    },
                    contractBudget: {
                        value: '-',
                        percentage: '-'
                    },
                    notOnProgress: {
                        value: '-',
                        percentage: '-'
                    },
                    remainingBudget: {
                        value: '-',
                        percentage: '-'
                    },
                },
            ]
            
        }
    ];
    
    return (
        <>
            <div className='d-flex flex-column' style={{width: '100%'}}>
                <div className="breadcrumb-zone">รายงานจัดซื้อจัดจ้าง {'>'} <span className="bread-crumb-page-name"><b>รายงานสรุปวิธีการจัดซื้อจัดจ้าง หรือการจัดหาพัสดุ ประจำปีงบประมาณ 25XX ไตรมาสที่ X</b></span></div>
                    <div className='search-wrapper-section d-flex flex-column'>
                        <div className="d-flex justify-content-between justify-content-center align-items-center">
                            <div className="content-search-box d-flex p-2 justify-content-center align-items-center">
                                <div className="box">
                                    <label>ปีงบประมาณ:</label>
                                </div>
                                <div className="box">
                                    <div className="filter-field-search">
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
                                <div className="content-search-box d-flex p-2 justify-content-between justify-content-center align-items-center">
                                    <div className="box">
                                        <label>สถานะงาน:</label>
                                    </div>
                                    <div className="box">
                                    <div className="filter-field-search">
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>  -- เลือกทั้งหมด --  </option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-between justify-content-center align-items-center">
                                    <div className="box">
                                        <label>หน่วยงาน:</label>
                                    </div>
                                    <div className="box">
                                        <div className="filter-field-search">
                                        <input type="text" className="form-control" placeholder="" id="filterOverall" />
                                        </div>
                                    </div>
                                </div>
                        </div>
                        
                            <div className="d-flex filter-project-button justify-content-center">
                                <div className="p-2"><button className="btn btn-primary">ดูรายงาน</button></div>
                                <div className="p-2"><button className="btn btn-secondary">ล้างค่า</button></div>
                            </div>    
                    </div>

                    <div className='search-wrapper-section d-flex flex-column'>
                        <div className="d-flex justify-content-between justify-content-center align-items-center">
                            <div className="years d-flex flex-column p-2 justify-content-center">
                                <div className="box mb-20">
                                    <b>รายงานสรุปวิธีการจัดซื้อจัดจ้าง หรือการจัดหาพัสดุ ประจำปีงบประมาณ 25XX ไตรมาสที่ 1</b>
                                </div>
                            </div>
                        </div>
                        <ReportTable data={data}/>
                    </div>
                </div>
        </>
    )
}