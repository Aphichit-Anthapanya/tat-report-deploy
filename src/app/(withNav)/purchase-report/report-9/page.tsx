"use client";

import React from "react";
import { useState } from "react";
import "@components/Report-temp/report-temp.scss";
import Activities from "@components/Activities/Activities";
import AddActivities from "@components/Activities/Add-Activities";
import ReportTable from "./table";
export default function Page() {
    const data = [
        {
            total:[{
                    totalItems: '208',
                    contractLimitBudget: '529,070,003.31',
                    result: {
                        Q1: '114,315,198.32',
                        Q2: '-',
                        Q3: '-',
                        Q4: '-'
                    },
                    remainBalanceBudget:'21,448,034.89',
                    percentage: {
                        totalItems: '',
                        contractLimitBudget: '100',
                        result: {
                            Q1: '21.61',
                            Q2: '-',
                            Q3: '-',
                            Q4: '-'
                        },
                        remainBalanceBudget:'73.93',
                    }
                }
            ]
        },
        {
            budget:[
                {
                    budgetName: 'งบลงทุน', 
                    totalItems: '6',
                    contractLimitBudget: '20,242,000.00',
                    result: {
                        Q1: '-',
                        Q2: '-',
                        Q3: '-',
                        Q4: '-'
                    },
                    remainBalanceBudget:'-',
                    percentage: {
                        totalItems: '-',
                        contractLimitBudget: '100',
                        result: {
                            Q1: '21.61',
                            Q2: '-',
                            Q3: '-',
                            Q4: '-'
                        },
                        remainBalanceBudget:'73.93',
                    },
                    info:[
                        {
                            budgetNamesub: 'งบลงทุน (เงินงบประมาณ)',
                            totalItems: '3',
                            contractLimitBudget: '17,542,000.00',
                            result: {
                                Q1: '-',
                                Q2: '-',
                                Q3: '-',
                                Q4: '-'
                            },
                            remainBalanceBudget:'-',
                            percentage: {
                                totalItems: '-',
                                contractLimitBudget: '100',
                                result: {
                                    Q1: '-',
                                    Q2: '',
                                    Q3: '-',
                                    Q4: '-'
                                },
                                remainBalanceBudget:'',
                            },
                            subInfo: [
                                {
                                    number: '1',
                                    department: 'ฝ่ายบริหารทั่วไป',
                                    totalItems: '2',
                                    contractLimitBudget: '6,969,000.00',
                                    result: {
                                        Q1: '-',
                                        Q2: '-',
                                        Q3: '-',
                                        Q4: '-'
                                    },
                                    remainBalanceBudget:'-',
                                    percentage: {
                                        totalItems: '',
                                        contractLimitBudget: '100',
                                        result: {
                                            Q1: '-',
                                            Q2: '-',
                                            Q3: '-',
                                            Q4: '-'
                                        },
                                        remainBalanceBudget:'',
                                    }
                                },
                                {
                                    number: '2',
                                    department: 'ฝ่ายดิจิทัลและเทคโนโลยีสารสนเทศ',
                                    totalItems: '1',
                                    contractLimitBudget: '10,573,000.00',
                                    result: {
                                        Q1: '-',
                                        Q2: '-',
                                        Q3: '-',
                                        Q4: '-'
                                    },
                                    remainBalanceBudget:'-',
                                    percentage: {
                                        totalItems: '',
                                        contractLimitBudget: '100',
                                        result: {
                                            Q1: '-',
                                            Q2: '-',
                                            Q3: '-',
                                            Q4: '-'
                                        },
                                        remainBalanceBudget:'',
                                    }
                                }
                            ]
                        },
                        {
                            budgetNamesub: 'งบสำรองกรณีจำเป็นเร่งด่วน',
                            totalItems: '3',
                            contractLimitBudget: '2,700,000.00',
                            result: {
                                Q1: '-',
                                Q2: '-',
                                Q3: '-',
                                Q4: '-'
                            },
                            remainBalanceBudget:'-',
                            percentage: {
                                totalItems: '',
                                contractLimitBudget: '100',
                                result: {
                                    Q1: '-',
                                    Q2: '-',
                                    Q3: '-',
                                    Q4: '-'
                                },
                                remainBalanceBudget:'',
                            },
                            subInfo: [
                                {
                                    number: '1',
                                    department: 'ฝ่ายบริหารทั่วไป',
                                    totalItems: '1',
                                    contractLimitBudget: '1,000,000.00',
                                    result: {
                                        Q1: '-',
                                        Q2: '-',
                                        Q3: '-',
                                        Q4: '-'
                                    },
                                    remainBalanceBudget:'-',
                                    percentage: {
                                        totalItems: '-',
                                        contractLimitBudget: '100',
                                        result: {
                                            Q1: '-',
                                            Q2: '-',
                                            Q3: '-',
                                            Q4: '-'
                                        },
                                        remainBalanceBudget:'',
                                    }
                                },
                                {
                                    number: '2',
                                    department: 'ฝ่ายดิจิทัลและเทคโนโลยีสารสนเทศ',
                                    totalItems: '110',
                                    contractLimitBudget: '1,700,000.00',
                                    result: {
                                        Q1: '-',
                                        Q2: '-',
                                        Q3: '-',
                                        Q4: '-'
                                    },
                                    remainBalanceBudget:'-',
                                    percentage: {
                                        totalItems: '',
                                        contractLimitBudget: '100',
                                        result: {
                                            Q1: '-',
                                            Q2: '-',
                                            Q3: '-',
                                            Q4: '-'
                                        },
                                        remainBalanceBudget:'',
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    budgetName: 'งบอุดหนุน', 
                    totalItems: '1',
                    contractLimitBudget: '16,253,600',
                    result: {
                        Q1: '-',
                        Q2: '-',
                        Q3: '-',
                        Q4: '-'
                    },
                    remainBalanceBudget:'-',
                    percentage: {
                        totalItems: '',
                        contractLimitBudget: '100',
                        result: {
                            Q1: '21.61',
                            Q2: '-',
                            Q3: '-',
                            Q4: '-'
                        },
                        remainBalanceBudget:'73.93',
                    },
                    info:[
                        {
                            budgetNamesub: 'หน่วยงานผู้ว่าการ',
                            totalItems: '1',
                            contractLimitBudget: '16,253,600',
                            result: {
                                Q1: '-',
                                Q2: '-',
                                Q3: '-',
                                Q4: '-'
                            },
                            remainBalanceBudget:'-',
                            percentage: {
                                totalItems: '',
                                contractLimitBudget: '-',
                                result: {
                                    Q1: '-',
                                    Q2: '-',
                                    Q3: '-',
                                    Q4: '-'
                                },
                                remainBalanceBudget:'',
                            },
                            subInfo: [
                                {
                                    number: '1',
                                    department: 'สำนักผู้ว่าการ',
                                    totalItems: '1',
                                    totalBudget: '16,253,600',
                                    contractLimitBudget: '16,253,600',
                                    result: {
                                        Q1: '-',
                                        Q2: '-',
                                        Q3: '-',
                                        Q4: '-'
                                    },
                                    remainBalanceBudget:'-',
                                    percentage: {
                                        totalItems: '',
                                        contractLimitBudget: '-',
                                        result: {
                                            Q1: '-',
                                            Q2: '-',
                                            Q3: '-',
                                            Q4: '-'
                                        },
                                        remainBalanceBudget:'',
                                    },
                                }
                            ]
                        },
                        {
                            budgetNamesub: 'ด้านบริหาร',
                            totalItems: '1',
                            contractLimitBudget: '16,253,600',
                            result: {
                                Q1: '-',
                                Q2: '-',
                                Q3: '-',
                                Q4: '-'
                            },
                            remainBalanceBudget:'-',
                            percentage: {
                                totalItems: '',
                                contractLimitBudget: '-',
                                result: {
                                    Q1: '-',
                                    Q2: '-',
                                    Q3: '-',
                                    Q4: '-'
                                },
                                remainBalanceBudget:'',
                            },
                            subInfo: [
                                {
                                    number: '1',
                                    department: 'ฝ่ายบริหารทั่วไป',
                                    totalItems: '1',
                                    totalBudget: '16,253,600',
                                    contractLimitBudget: '16,253,600',
                                    result: {
                                        Q1: '-',
                                        Q2: '-',
                                        Q3: '-',
                                        Q4: '-'
                                    },
                                    remainBalanceBudget:'-',
                                    percentage: {
                                        totalItems: '',
                                        contractLimitBudget: '',
                                        result: {
                                            Q1: '',
                                            Q2: '',
                                            Q3: '',
                                            Q4: ''
                                        },
                                        remainBalanceBudget:'',
                                    }
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
                <div className="breadcrumb-zone">รายงานจัดซื้อจัดจ้าง {'>'} <span className="bread-crumb-page-name"><b>รายงานสรุปแผน/ผลปฏิบัติการจัดซื้อจัดจ้าง (ระดับฝ่าย) ประจำปีงบประมาณ 25XX ไตรมาสที่ X (แสดงข้อมูลจำนวนเงิน)</b></span></div>
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
                                    <b>รายงานสรุปแผน/ผลปฏิบัติการจัดซื้อจัดจ้าง (ระดับฝ่าย) ประจำปีงบประมาณ 25XX ไตรมาสที่ 1 (แสดงข้อมูลจำนวนเงิน)</b>
                                </div>
                            </div>
                        </div>
                        <ReportTable data={data}/>
                    </div>
                </div>
        </>
    )
}