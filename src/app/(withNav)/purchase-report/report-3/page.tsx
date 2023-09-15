"use client";

import React from "react";
import { useState, useEffect } from "react";
import "@components/Report-temp/report-temp.scss";
import Activities from "@components/Activities/Activities";
import AddActivities from "@components/Activities/Add-Activities";
import Table from "./table3";
import TestTable from "./table"

export default function Page() {
    const data = [
        {
            total:{
                totalItems: '208',
                totalBudget: '529,070,003.31'
            }
        },
        {
            budget:[
                {
                    budgetName: 'งบลงทุน', 
                    totalItemPerBudget: '6', 
                    totalBudgets: '20,242,000.00',
                    info:[
                        {
                            budgetNamesub: 'งบลงทุน(เงินงบประมาณ)',
                            totalItemPerbudgetsub: '3',
                            totalbSumBudgetsub: '17,542,000.00',
                            subInfo: [
                                {
                                    number: '1',
                                    department: 'ฝ่ายบริหารทั่วไป',
                                    NumberItems: '1',
                                    budget:'6,969,000.00'
                                },
                                {
                                    number: '2',
                                    department: 'ฝ่ายดิจิทัลและเทคโนโลยีสารสนเทศ',
                                    NumberItems: '2',
                                    budget:'10,573,000.00'
                                }
                            ]
                        },
                        {
                            budgetNamesub: 'งบสำรองกรณีจำเป็นเร่งด่วน',
                            totalItemPerbudgetsub: '3',
                            totalbSumBudgetsub: '2,700,000.00',
                            subInfo: [
                                {
                                    number: '1',
                                    department: 'ฝ่ายบริหารทั่วไป',
                                    NumberItems: '1',
                                    budget:'1,000,000.00'
                                },
                                {
                                    number: '2',
                                    department: 'ฝ่ายดิจิทัลและเทคโนโลยีสารสนเทศ',
                                    NumberItems: '2',
                                    budget:'1,700,000.00'
                                }
                            ]
                        }
                    ]
                },
                {
                    budgetName: 'งบอุดหนุน', 
                    totalItemPerBudget: '198', 
                    totalBudgets: '505,128,003.31',
                    info:[
                        {
                            budgetNamesub: 'หน่วยงานผู้ว่าการ',
                            totalItemPerbudgetsub: '3',
                            totalbSumBudgetsub: '4,500,000.00',
                            subInfo: [
                                {
                                    number: '1',
                                    department: 'สำนักผู้ว่าการ',
                                    NumberItems: '1',
                                    budget:'4,500,000.00'
                                },
                                {
                                    number: '1',
                                    department: 'ฝ่ายตรวจสอบภายใน',
                                    NumberItems: '-',
                                    budget:'-'
                                }
                            ]
                        },
                        {
                            budgetNamesub: 'ด้านบริหาร',
                            totalItemPerbudgetsub: '24',
                            totalbSumBudgetsub: '142,843,237.28',
                            subInfo: [
                                {
                                    number: '2',
                                    department: 'กลุ่มงานอำนวยการด้านบริหาร',
                                    NumberItems: '-',
                                    budget:'-'
                                },
                                {
                                    number: '2',
                                    department: 'ฝ่ายบริหารทั่วไป',
                                    NumberItems: '17',
                                    budget:'76,691,400.00'
                                },
                                {
                                    number: '2',
                                    department: 'A',
                                    NumberItems: '-',
                                    budget:'-'
                                },
                                {
                                    number: '2',
                                    department: 'B',
                                    NumberItems: '17',
                                    budget:'76,691,400.00'
                                }
                            ]
                        }
                    ]
                },
            ]
        }
    ];


    return (
        <>
            <div className='d-flex flex-column' style={{width: '100%'}}>
                <div className="breadcrumb-zone">รายงานจัดซื้อจัดจ้าง {'>'} <span className="bread-crumb-page-name"><b>รายงานสรุปแผนปฏิบัติการจัดซื้อจัดจ้าง(ระดับฝ่าย) ประจำปีงบประมาณ 25XX</b></span></div>
                    <div className='search-wrapper-section d-flex flex-column'>
                        <div className="d-flex justify-content-around justify-content-center align-items-center">
                            <div className="content-search-box d-flex p-2 justify-content-center align-items-center">
                                <div className="mr-10 purchase-report">
                                    <label>ปีงบประมาณ:</label>
                                </div>
                                <div className="purchase-report">
                                    <div className="filter-field">
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>2566</option>
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
                                <div className="mr-10 purchase-report">
                                    <label>สถานะงาน:</label>
                                </div>
                                <div className="purchase-report">
                                    <div className="filter-field">
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
                                <div className="mr-10 purchase-report">
                                    <label>หน่วยงาน:</label>
                                </div>
                                <div className="purchase-report">
                                    <div className="filter-field">
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
                        <div className="years d-flex flex-column p-2 justify-content-center mb-20">
                            <div className="box">
                                <b>รายงานสรุปแผนปฏิบัติการจัดซื้อจัดจ้าง(ระดับฝ่าย) ประจำปีงบประมาณ 25XX</b>
                            </div>
                        </div>
                        <TestTable data={data} />
                    </div>
                </div>
        </>
    )
}