"use client";

import React from "react";
import { useState } from "react";
import "@components/Report-temp/report-temp.scss";
import Table from './table';
import { BrowserRouter } from 'react-router-dom';
import { useParams, useRouter } from "next/navigation";

export default function Page() {
    const data = [
        { 
            userGroup: 'บุคลากรและลูกจ้างของททท.', 
            note: ''
        },
        { 
            userGroup: 'ลูกค้า/ผู้ใช้บริการ', 
            note: '', 
            level2User:[
                { 
                    userGroup: 'นักท่องเที่ยวชาวไทย', 
                    note: '',
                    
                },
                { 
                    userGroup: 'นักท่องเที่ยวชาวต่างชาติ', 
                    note: '',
                    
                }
            ] 
        },
        { 
            userGroup: 'หน่วยงานกำกับดูแล/ผู้ถือหุ้นภาครัฐ', 
            note: '',
            level2User:[
                { 
                    userGroup: 'กระทรวงการคลัง.', 
                    note: '',
                    
                },
                { 
                    userGroup: 'สำนักงานคณะกรรมการนโยบายรัฐวิสหากิจ', 
                    note: '',
                    
                },
                { 
                    userGroup: 'กระทรวงการท่องเที่ยวและกีฬา', 
                    note: '',
                    
                },
                { 
                    userGroup: 'สำนักงานการตรวจเงินแผ่นดิน', 
                    note: '',
                    
                }
            ] 
        },
        { 
            userGroup: 'คู่ค้า', 
            note: '', 
            level2User:[
                { 
                    userGroup: 'ธุรกิจนำเที่ยว', 
                    note: '',
                    
                },
                { 
                    userGroup: 'Online Travel Agency (ต่างประเทศและในประเทศ)', 
                    note: '',
                    
                },
                { 
                    userGroup: 'ธุรกิจโรงแรมที่พัก', 
                    note: '',
                    
                },
                { 
                    userGroup: 'ธุรกิจขนส่ง', 
                    note: '',
                    
                },
                { 
                    userGroup: 'แหล่งท่องเที่ยว/สถานประกอบการ/ชุมชนเจ้าของแหล่งท่องเที่ยว', 
                    note: '',
                    
                },
                { 
                    userGroup: 'อื่นๆ', 
                    note: '',
                    
                }
            ]
        },
        { 
            userGroup: 'ผู้ส่งมอบ', 
            note: '', 
            level2User:[
                { 
                    userGroup: 'ผู้ส่งมอบภาครัฐ.', 
                    note: '',
                    level3User: [
                        { 
                            userGroup: 'กระทรวงมหาดไทย', 
                            note: '' 
                        },
                        { 
                            userGroup: 'กระทรวงสาธารณสุข', 
                            note: '' 
                        },
                        { 
                            userGroup: 'กรมการท่องเที่ยว', 
                            note: '' 
                        },
                        { 
                            userGroup: 'กระทรวงต่างประเทศ', 
                            note: '' 
                        },
                        { 
                            userGroup: 'สำนักงานปลัดกระทรวงการท่องเที่ยวและกีฬา', 
                            note: '' 
                        },
                        { 
                            userGroup: 'อื่นๆ', 
                            note: '' 
                        },
                    ] 
                },
                { 
                    userGroup: 'ผู้ส่งมอบภาคเอกชน', 
                    note: '',
                    level3User: [
                        { 
                            userGroup: 'สถาบันการศึกษา', 
                            note: '' 
                        },
                        { 
                            userGroup: 'บริษัทวิจัย', 
                            note: '' 
                        },
                        { 
                            userGroup: 'ที่ปรึกษา', 
                            note: '' 
                        },
                        { 
                            userGroup: 'อื่นๆ', 
                            note: '' 
                        },
                    ]  
                },
            ]
        },
        { 
            userGroup: 'คู่ความร่วมมือ', 
            note: '', 
            level2User:[
                { 
                    userGroup: 'องค์การบริหารการพัฒนาพื้นที่พิเศษเพื่อการท่องเที่ยวอย่างยั่งยืน', 
                    note: '',
                    
                },
                { 
                    userGroup: 'สำนักงานส่งเสริมการจัดประชุมและนิทรรศการ', 
                    note: '',
                    
                },
                { 
                    userGroup: 'สื่อมวลชนทั้ง online และ offline', 
                    note: '',
                    
                },
                { 
                    userGroup: 'บริษัทท่าอากาศยานไทยจำกัด (มหาชน)', 
                    note: '',
                    
                },
                { 
                    userGroup: 'การกีฬาแห่งประเทศไทย', 
                    note: '',
                    
                },
                { 
                    userGroup: 'สำนักงานการท่องเทียวและกีฬา', 
                    note: '',
                    
                },
                { 
                    userGroup: 'องค์การบริหารส่วนตำบล (อบต.)', 
                    note: '' ,
                },
                { 
                    userGroup: 'องค์การบริหารส่วนจังหวัด (อบจ.)', 
                    note: '',
                },
                { 
                    userGroup: 'สมาคมที่เกี่ยวข้องกับการท่องเที่ยว', 
                    note: '',
                    level3User: [
                        { 
                            userGroup: 'สมาคมมัคคุเทศก์อาชีพแห่งประเทศไทย', 
                            note: '' 
                        },
                        { 
                            userGroup: 'สมาคมโรงแรมไทย', 
                            note: '' 
                        },
                        { 
                            userGroup: 'สมาคมภัตตาคารไทย', 
                            note: '' 
                        },
                        { 
                            userGroup: 'สมาคมผู้ประกอบการร้านค้า', 
                            note: '' 
                        },
                        { 
                            userGroup: 'สมาคมผู้ประกอบการนำเที่ยวไทย', 
                            note: '' 
                        },
                        { 
                            userGroup: 'สภาหอการค้าไทย', 
                            note: '' 
                        },
                        { 
                            userGroup: 'สภาอุตสาหกรรมท่องเที่ยวแห่งประเทศไทย', 
                            note: '' 
                        },
                        { 
                            userGroup: 'สมาคมผู้ค้าปลีกไทย', 
                            note: '' 
                        },
                        { 
                            userGroup: 'สมาคมธุรกิจท่องเที่ยวภายในประเทศ', 
                            note: '' 
                        },
                        { 
                            userGroup: 'สมาคมไทยธุรกิจการท่องเที่ยว (Association of Thai Travel Agents: ATTA)', 
                            note: '' 
                        },
                        { 
                            userGroup: 'สมาคมส่งเสริมการท่องเที่ยวภูมิภาคเอเชียและแปซิฟิก (Pacific Asia Travel Association: PATA)', 
                            note: '' 
                        },
                        { 
                            userGroup: 'สมาคมไทยท่องเที่ยวอย่างรับผิดชอบ', 
                            note: '' 
                        },
                        { 
                            userGroup: 'อื่น', 
                            note: '' 
                        },
                        
                    ] 
                },
            ],
        },
    ];
    
    return (
        <>
            <div className='d-flex flex-column' style={{width: '100%'}}>
                <div className="breadcrumb-zone fz-20">Master Data {'>'} <span className="bread-crumb-page-name"><b>กลุ่มผู้มีส่วนได้ส่วนเสีย</b></span></div>
                    <div className="d-flex filter-project-button justify-content-right">
                        <div className="p-2"><button className="btn btn-primary" >ย้อนกลับ</button></div>
                        <div className="p-2"><button className="btn btn-primary">Submit</button></div>
                    </div>
                    <div className='search-wrapper-section d-flex flex-column'>
                        <h2>กลุ่มผู้มีส่วนได้ส่วนเสีย</h2>
                    </div>
                    <div className='search-wrapper-section d-flex flex-column'>
                        <h2></h2>
                        <div className="d-flex filter-project-button justify-content-left">
                            <div className="p-2"><button className="btn btn-primary">เพิ่มข้อมูล</button></div>
                        </div>
                        <Table data={data}/>
                    </div>
                    <div className="d-flex filter-project-button justify-content-right">
                        <div className="p-2"><button className="btn btn-primary" >ย้อนกลับ</button></div>
                        <div className="p-2"><button className="btn btn-primary">Submit</button></div>
                    </div>
            </div>
            
        </>
    )
}