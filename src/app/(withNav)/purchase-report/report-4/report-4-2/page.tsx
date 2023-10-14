"use client";

import React from "react";
import { useState } from "react";
import "@components/Report-temp/report-temp.scss";
import SearchZone from "../searchZone";
import ReportTable from '../mainTable';
export default function Page() {
    const data = [
        {
            info:[
                {
                    number: '1', 
                    activityName: '', 
                    purchasement: 'ปรับปรุงห้องประชุมระดับฝ่ายและโถงลิฟท์ ชั้น 4, 6, 8 และ 14',
                    department:[
                        {
                            fullName: 'งานสถาปัตยกรรม',
                            shortName: 'กอส.'
                        }
                    ],
                    method: '1.วิธีประกาศเชิญชวนทั่วไป (e-Bidding)',
                    budget: '6,969,000.00',
                    contractBudget: '-',
                    Q1:[
                        {
                        ATP:'1',
                        notATP: '-',
                        done:'-',
                        cancel:'-'   
                        }
                    ],
                    Q2:[
                        {
                        ATP:'-',
                        notATP: '-',
                        done:'-',
                        cancel:'-'   
                        }
                    ],
                    Q3:[
                        {
                        ATP:'-',
                        notATP: '-',
                        done:'-',
                        cancel:'-'   
                        }
                    ],
                    Q4:[
                        {
                        ATP:'-',
                        notATP: '-',
                        done:'-',
                        cancel:'-'   
                        }
                    ],
                },
            ],
            total : [
                {
                    text: 'รวมเป็นเงินทั้งสิ้น',
                    value: '6,969,000.00',
                    contractBudget: '-',
                    Q1:[
                        {
                        ATP:'1',
                        notATP: '-',
                        done:'-',
                        cancel:'-'   
                        }
                    ],
                    Q2:[
                        {
                        ATP:'-',
                        notATP: '-',
                        done:'-',
                        cancel:'-'   
                        }
                    ],
                    Q3:[
                        {
                        ATP:'-',
                        notATP: '-',
                        done:'-',
                        cancel:'-'   
                        }
                    ],
                    Q4:[
                        {
                        ATP:'-',
                        notATP: '-',
                        done:'-',
                        cancel:'-'   
                        }
                    ],
                    note:'-'
                }
        ],
        remaining : [
            {
                text: 'คงเหลือจากการจัดซื้อจัดจ้าง',
                value: '-',
                contractBudget: '-',
                Q1:[
                    {
                    ATP:'-',
                    notATP: '-',
                    done:'-',
                    cancel:'-'   
                    }
                ],
                Q2:[
                    {
                    ATP:'-',
                    notATP: '-',
                    done:'-',
                    cancel:'-'   
                    }
                ],
                Q3:[
                    {
                    ATP:'-',
                    notATP: '-',
                    done:'-',
                    cancel:'-'   
                    }
                ],
                Q4:[
                    {
                    ATP:'-',
                    notATP: '-',
                    done:'-',
                    cancel:'-'   
                    }
                ],
                note:'6,969,000.00'
            }
        ],
        },
        {
            note:[{
                    conclusion: 'สรุป',
                    name: 'จัดหาโดยใช้วิธี',
                        method1: { 
                            name: '1. วิธีประกาศเชิญชวนทั่วไป (e-Market, e-Bidding, สอบราคา)',
                            method: '-',
                            budget: '-',
                            contractBudget: '-',
                            note: '-'          
                        },
                        method2: {
                            name: '2. วิธีคัดเลือก',
                            method: '-',
                            budget: '-',
                            contractBudget: '-',
                            note: '-' 
                        },
                        method3: {
                            name: '3. วิธีเฉพาะเจาะจง',
                            method: '1',
                            budget: '6,969,000.00',
                            contractBudget: '-',
                            note: '6,969,000.00' 
                        },
                        method4: {
                            name: '4. อยู่ระหว่างดำเนินการจัดซื้อจัดจ้างตามแผน',
                            method: '-',
                            budget: '-',
                            contractBudget: '-',
                            note: '-' 
                        },method5: {
                                name: '5. ยกเลิก',
                                method: '-',
                                budget: '-',
                                contractBudget: '-',
                                note: '-' 
                            },
                            total: {
                                name: 'รวมทั้งสิ้น',
                                method: '4',
                                budget: '6,969,000.00',
                                contractBudget: '-',
                                note: '6,969,000.00' 
                            },
            }]
        }
    ];
    return (
        <>
            <div className='d-flex flex-column' style={{width: '100%'}}>
                <div className="breadcrumb-zone">รายงานจัดซื้อจัดจ้าง {'>'} <span className="bread-crumb-page-name">รายงานแผน/ผลปฏิบัติการจัดซื้อจัดจ้าง(งบลงทุน)  ประจำปีงบประมาณ 25XX ไตรมาสที่ X</span> {'>'} <span className="bread-crumb-page-name"><b>งบสำรองกรณีจำเป็นเร่งด่วน</b></span></div>
                    <SearchZone/>
                    <div className='search-wrapper-section d-flex flex-column'>
                        <div className="d-flex justify-content-between justify-content-center align-items-center">
                            <div className="years d-flex flex-column p-2 justify-content-center">
                                <div className="box">
                                    <b>รายงานแผน/ผลปฏิบัติการจัดซื้อจัดจ้าง(งบสำรองกรณีจำเป็นเร่งด่วน)  ประจำปีงบประมาณ 25XX ไตรมาสที่ 1</b>
                                </div>
                                <div className="box d-flex">
                                    <div className="content mr-5"><b>หน่วยงาน:</b></div>
                                    <div className="content"><p>ฝ่ายบริหารทั่วไป</p></div>
                                </div>
                            </div>
                        </div>
                        <ReportTable data = {data}/>
                    </div>
                </div>
        </>
    )
}