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
            total:{
                totalItems: '208',
                totalBudget: '529,070,003.31',
                contractLimitBudget: [
                    {
                    items:'21',
                    budget:'506,072,666.72'  
                    }
                ],
                onProgressBudget:[
                    {
                    items:'24',
                    budget:'98,047,988.68'  
                    }
                ],
                remainBalanceBudget:'21,448,034.89',
                done:[
                    {
                     items:'2',
                     budget:'460,095,786.44'   
                    }
                ],
                cancel:[
                     {
                     items:'0',
                     budget:'0'   
                    }
                ],
                nextYear:[
                     {
                     items:'4',
                     budget:'14,786,570.28'   
                    }
                ],
                note:''

            }
        },
        {
            budget:[
                {
                    budgetName: 'งบลงทุน', 
                    totalItems: '1',
                    totalBudget: '16,253,600',
                    contractLimitBudget: [
                        {
                        items:'-',
                        budget:'-'  
                        }
                    ],
                    onProgressBudget:[
                        {
                        items:'1',
                        budget:'16,253,600'  
                        }
                    ],
                    remainBalanceBudget:'-',
                    done:[
                        {
                        items:'1',
                        budget:'-'   
                        }
                    ],
                    cancel:[
                        {
                        items:'-',
                        budget:'-'   
                        }
                    ],
                    nextYear:[
                        {
                        items:'-',
                        budget:'-'   
                        }
                    ],
                    note:'',
                    info:[
                        {
                            budgetNamesub: 'งบลงทุน(เงินงบประมาณ)',
                            totalItems: '1',
                            totalBudget: '16,253,600',
                            contractLimitBudget: [
                                {
                                items:'-',
                                budget:'-'  
                                }
                            ],
                            onProgressBudget:[
                                {
                                items:'1',
                                budget:'16,253,600'  
                                }
                            ],
                            remainBalanceBudget:'-',
                            done:[
                                {
                                items:'1',
                                budget:'0'   
                                }
                            ],
                            cancel:[
                                {
                                items:'-',
                                budget:'-'   
                                }
                            ],
                            nextYear:[
                                {
                                items:'-',
                                budget:'-'   
                                }
                            ],
                            note:'',
                            subInfo: [
                                {
                                    number: '1',
                                    department: 'ฝ่ายบริหารทั่วไป',
                                    totalItems: '1',
                                    totalBudget: '16,253,600',
                                    contractLimitBudget: [
                                        {
                                        items:'-',
                                        budget:'-'  
                                        }
                                    ],
                                    onProgressBudget:[
                                        {
                                        items:'1',
                                        budget:'16,253,600'  
                                        }
                                    ],
                                    remainBalanceBudget:'-',
                                    done:[
                                        {
                                        items:'1',
                                        budget:'0'   
                                        }
                                    ],
                                    cancel:[
                                        {
                                        items:'-',
                                        budget:'-'   
                                        }
                                    ],
                                    nextYear:[
                                        {
                                        items:'-',
                                        budget:'-'   
                                        }
                                    ],
                                    note:'',
                                    activity: [
                                        {
                                            activityNumber:'1',
                                            activityName:'โครงการปรับปรุงห้องประชุมระดับฝ่ายและโถงลิฟท์(ส่วนต่อเนื่อง) อาคาร ททท. สำนักงานใหญ่',
                                            subDepartment:'งานสถาปัตยกรรม',
                                            departmentShort:'กอส.',
                                            totalBudget: '16,253,600',
                                            contractLimitBudget: [
                                                {
                                                items:'-',
                                                budget:'-'  
                                                }
                                            ],
                                            onProgressBudget:[
                                                {
                                                items:'1',
                                                budget:'16,253,600'  
                                                }
                                            ],
                                            remainBalanceBudget:'-',
                                            done:[
                                                {
                                                items:'1',
                                                budget:'0'   
                                                }
                                            ],
                                            cancel:[
                                                {
                                                items:'-',
                                                budget:'-'   
                                                }
                                            ],
                                            nextYear:[
                                                {
                                                items:'-',
                                                budget:'-'   
                                                }
                                            ],
                                            note:'',
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    budgetName: 'งบอุดหนุน', 
                    totalItems: '1',
                    totalBudget: '16,253,600',
                    contractLimitBudget: [
                        {
                        items:'-',
                        budget:'-'  
                        }
                    ],
                    onProgressBudget:[
                        {
                        items:'1',
                        budget:'16,253,600'  
                        }
                    ],
                    remainBalanceBudget:'-',
                    done:[
                        {
                        items:'1',
                        budget:'-'   
                        }
                    ],
                    cancel:[
                        {
                        items:'-',
                        budget:'-'   
                        }
                    ],
                    nextYear:[
                        {
                        items:'-',
                        budget:'-'   
                        }
                    ],
                    note:'',
                    info:[
                        {
                            budgetNamesub: 'หน่วยงานผู้ว่าการ',
                            totalItems: '1',
                            totalBudget: '16,253,600',
                            contractLimitBudget: [
                                {
                                items:'-',
                                budget:'-'  
                                }
                            ],
                            onProgressBudget:[
                                {
                                items:'1',
                                budget:'16,253,600'  
                                }
                            ],
                            remainBalanceBudget:'-',
                            done:[
                                {
                                items:'1',
                                budget:'0'   
                                }
                            ],
                            cancel:[
                                {
                                items:'-',
                                budget:'-'   
                                }
                            ],
                            nextYear:[
                                {
                                items:'-',
                                budget:'-'   
                                }
                            ],
                            note:'',
                            subInfo: [
                                {
                                    number: '1',
                                    department: 'สำนักผู้ว่าการ',
                                    totalItems: '1',
                                    totalBudget: '16,253,600',
                                    contractLimitBudget: [
                                        {
                                        items:'-',
                                        budget:'-'  
                                        }
                                    ],
                                    onProgressBudget:[
                                        {
                                        items:'1',
                                        budget:'16,253,600'  
                                        }
                                    ],
                                    remainBalanceBudget:'-',
                                    done:[
                                        {
                                        items:'1',
                                        budget:'0'   
                                        }
                                    ],
                                    cancel:[
                                        {
                                        items:'-',
                                        budget:'-'   
                                        }
                                    ],
                                    nextYear:[
                                        {
                                        items:'-',
                                        budget:'-'   
                                        }
                                    ],
                                    note:'',
                                    activity: [
                                        {
                                            activityNumber:'1',
                                            activityName:'โครงการปรับปรุงห้องประชุมระดับฝ่ายและโถงลิฟท์(ส่วนต่อเนื่อง) อาคาร ททท. สำนักงานใหญ่',
                                            subDepartment:'งานสถาปัตยกรรม',
                                            departmentShort:'กอส.',
                                            totalBudget: '16,253,600',
                                            contractLimitBudget: [
                                                {
                                                items:'-',
                                                budget:'-'  
                                                }
                                            ],
                                            onProgressBudget:[
                                                {
                                                items:'1',
                                                budget:'16,253,600'  
                                                }
                                            ],
                                            remainBalanceBudget:'-',
                                            done:[
                                                {
                                                items:'1',
                                                budget:'0'   
                                                }
                                            ],
                                            cancel:[
                                                {
                                                items:'-',
                                                budget:'-'   
                                                }
                                            ],
                                            nextYear:[
                                                {
                                                items:'-',
                                                budget:'-'   
                                                }
                                            ],
                                            note:'',
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            budgetNamesub: 'ด้านบริหาร',
                            totalItems: '1',
                            totalBudget: '16,253,600',
                            contractLimitBudget: [
                                {
                                items:'-',
                                budget:'-'  
                                }
                            ],
                            onProgressBudget:[
                                {
                                items:'1',
                                budget:'16,253,600'  
                                }
                            ],
                            remainBalanceBudget:'-',
                            done:[
                                {
                                items:'1',
                                budget:'0'   
                                }
                            ],
                            cancel:[
                                {
                                items:'-',
                                budget:'-'   
                                }
                            ],
                            nextYear:[
                                {
                                items:'-',
                                budget:'-'   
                                }
                            ],
                            note:'',
                            subInfo: [
                                {
                                    number: '1',
                                    department: 'ฝ่ายบริหารทั่วไป',
                                    totalItems: '1',
                                    totalBudget: '16,253,600',
                                    contractLimitBudget: [
                                        {
                                        items:'-',
                                        budget:'-'  
                                        }
                                    ],
                                    onProgressBudget:[
                                        {
                                        items:'1',
                                        budget:'16,253,600'  
                                        }
                                    ],
                                    remainBalanceBudget:'-',
                                    done:[
                                        {
                                        items:'1',
                                        budget:'0'   
                                        }
                                    ],
                                    cancel:[
                                        {
                                        items:'-',
                                        budget:'-'   
                                        }
                                    ],
                                    nextYear:[
                                        {
                                        items:'-',
                                        budget:'-'   
                                        }
                                    ],
                                    note:'',
                                    activity: [
                                        {
                                            activityNumber:'1',
                                            activityName:'จ้างเหมาบริการให้ความเห็นด้านการบริหารและกฎหมาย',
                                            subDepartment:'งานปรึกษาด้านกฎหมาย',
                                            departmentShort:'กกร.',
                                            totalBudget: '570,000.00',
                                            contractLimitBudget: [
                                                {
                                                items:'-',
                                                budget:'-'  
                                                }
                                            ],
                                            onProgressBudget:[
                                                {
                                                items:'1',
                                                budget:'16,253,600'  
                                                }
                                            ],
                                            remainBalanceBudget:'-',
                                            done:[
                                                {
                                                items:'1',
                                                budget:'0'   
                                                }
                                            ],
                                            cancel:[
                                                {
                                                items:'-',
                                                budget:'-'   
                                                }
                                            ],
                                            nextYear:[
                                                {
                                                items:'-',
                                                budget:'-'   
                                                }
                                            ],
                                            note:'',
                                        },
                                        {
                                            activityNumber:'2',
                                            activityName:'จัดซื้อกระดาษถ่ายเอกสาร สำรองคลังพัสดุ ประจำปี 2566',
                                            subDepartment:'งานบริหารพัสดุ',
                                            departmentShort:'กบจ.',
                                            totalBudget: '700,000.00',
                                            contractLimitBudget: [
                                                {
                                                items:'-',
                                                budget:'-'  
                                                }
                                            ],
                                            onProgressBudget:[
                                                {
                                                items:'1',
                                                budget:'16,253,600'  
                                                }
                                            ],
                                            remainBalanceBudget:'-',
                                            done:[
                                                {
                                                items:'1',
                                                budget:'0'   
                                                }
                                            ],
                                            cancel:[
                                                {
                                                items:'-',
                                                budget:'-'   
                                                }
                                            ],
                                            nextYear:[
                                                {
                                                items:'-',
                                                budget:'-'   
                                                }
                                            ],
                                            note:'',
                                        }
                                    ]
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
                <div className="breadcrumb-zone">รายงานจัดซื้อจัดจ้าง {'>'} <span className="bread-crumb-page-name"><b>รายงานสรุปแผน/ผลปฏิบัติการจัดซื้อจัดจ้าง(รายโครงการ) ประจำปีงบประมาณ 25XX</b></span></div>
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
                                    <b>รายงานสรุปแผน/ผลปฏิบัติการจัดซื้อจัดจ้าง(รายโครงการ) ประจำปีงบประมาณ 2566</b>
                                </div>
                            </div>
                        </div>
                        <ReportTable data={data}/>
                    </div>
                </div>
        </>
    )
}