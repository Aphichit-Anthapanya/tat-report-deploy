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
            budget:[
                {
                    budgetName: 'งบลงทุน', 
                    totalItems: '6',
                    totalBudget: '20,242,000.00',
                    contractLimitBudget: '-',
                    notOnProgressBudget: '20,242,000.00',
                    remainBalanceBudget:'-',
                    Q1:[
                        {
                        ATP:'4',
                        notATP: '2',
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
                    note:'',
                    info:[
                        {
                            budgetNamesub: 'งบลงทุน(เงินงบประมาณ)',
                            totalItems: '3',
                            totalBudget: '17,542,000.00',
                            contractLimitBudget: '-',
                            notOnProgressBudget: '20,242,000.00',
                            remainBalanceBudget:'-',
                            Q1:[
                                {
                                ATP:'2',
                                notATP: '1',
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
                            note:'',
                            subInfo: [
                                {
                                    number: '1',
                                    department: 'ฝ่ายบริหารทั่วไป',
                                    totalItems: '1',
                                    totalBudget: '16,253,600',
                                    contractLimitBudget: '-',
                                    notOnProgressBudget: '20,242,000.00',
                                    remainBalanceBudget:'-',
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
                                        },
                                    ],
                                    note:'',
                                },
                                {
                                    number: '2',
                                    department: 'ฝ่ายทรัพยากรบุคคล',
                                    totalItems: '2',
                                    totalBudget: '10,573,000.00',
                                    contractLimitBudget: '-',
                                    notOnProgressBudget: '10,573,000.00',
                                    remainBalanceBudget:'-',
                                    Q1:[
                                        {
                                        ATP:'1',
                                        notATP: '1',
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
                                        },
                                    ],
                                    note:'',
                                }
                            ]
                        },
                        {
                            budgetNamesub: 'งบสำรองกรณีจำเป็นเร่งด่วน+สำรองราคา (เงินรายได้)',
                            totalItems: '3',
                            totalBudget: '2,700,000.00',
                            contractLimitBudget: '-',
                            notOnProgressBudget: '2,700,000.00',
                            remainBalanceBudget:'-',
                            Q1:[
                                {
                                ATP:'2',
                                notATP: '1',
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
                            note:'',
                            subInfo: [
                                {
                                    number: '1',
                                    department: 'ฝ่ายบริหารทั่วไป',
                                    totalItems: '1',
                                    totalBudget: '1,000,000.00',
                                    contractLimitBudget: '-',
                                    notOnProgressBudget: '1,000,000.00',
                                    remainBalanceBudget:'-',
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
                                    note:'',
                                },
                                {
                                    number: '2',
                                    department: 'ฝ่ายดิจิทัลและเทคโนโลยีสารสนเทศ',
                                    totalItems: '1',
                                    totalBudget: '1,700,000.00',
                                    contractLimitBudget: '-',
                                    notOnProgressBudget: '1,700,000.00',
                                    remainBalanceBudget:'-',
                                    Q1:[
                                        {
                                        ATP:'1',
                                        notATP: '1',
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
                                    note:'',
                                }
                            ]
                        }
                    ]
                },
            ]  
        },
        {
            total:{
                totalItems: '494',
                totalBudget: '1,396,175,770.26',
                contractLimitBudget: '1,112,102,403.94',
                notOnProgressBudget: '248,033,800.00',
                remainBalanceBudget:'36,039,566.32',
                Q1:[
                    {
                        ATP:'476',
                        notATP: '16',
                        done:'2',
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
                note:'',
                totalEachQuarter:
                    {
                        totalItems: '',
                        totalBudget: '494',
                        contractLimitBudget: '198',
                        notOnProgressBudget: '55',
                        remainBalanceBudget:'-',
                        Q1: '494',
                        Q2: '',
                        Q3: '',
                        Q4: '',
                    }
                ,
                percentage:
                {
                    totalItems: '100',
                    totalBudget: '100',
                    contractLimitBudget: '79.55',
                    notOnProgressBudget: '17.77',
                    remainBalanceBudget:'2.58',
                    Q1:[
                        {
                            ATP:'96.36',
                            notATP: '3.24',
                            done:'0.40',
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
                    ]
                }

            }
        },
        {
            note:[{
                procurementOfFiscalYear: 
                {
                    name: 'แผนปฏิบัติการจัดซื้อจัดจ้าง ต้นปีงบประมาณ',
                    measure: 'จำนวน',
                    value: '201',
                    measureOfUnit: 'รายการ'
                },
                addInQ1:
                {
                    name: 'เพิ่มแผนในไตรมาสที่ 1',
                    measure: 'จำนวน',
                    value: '52',
                    measureOfUnit: 'รายการ'
                },
                total:
                {
                    measure: 'รวม',
                    value: '253',
                    measureOfUnit: 'รายการ'
                },
                doneInQ1:
                {
                    name:'ดำเนินการแล้วเสร็จ',
                    value: '1',
                    measureOfUnit: 'รายการ'
                },
                continueInQuarter2:
                {
                    name:'ดำเนินการต่อไตรมาสที่ 2',
                    value: '252',
                    measureOfUnit: 'รายการ'
                }
            }]
        }

    ];
    
    return (
        <>
            <div className='d-flex flex-column' style={{width: '100%'}}>
                <div className="breadcrumb-zone">รายงานจัดซื้อจัดจ้าง {'>'} <span className="bread-crumb-page-name"><b>รายงานสรุปแผน/ผลปฏิบัติการจัดซื้อจัดจ้าง (ระดับฝ่าย) ประจำปีงบประมาณ 25XX ไตรมาสที่ X</b></span></div>
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
                                    <b>รายงานสรุปแผน/ผลปฏิบัติการจัดซื้อจัดจ้าง (ระดับฝ่าย) ประจำปีงบประมาณ 25XX ไตรมาสที่ X</b>
                                </div>
                            </div>
                        </div>
                        <ReportTable data={data}/>
                    </div>
                </div>
        </>
    )
}