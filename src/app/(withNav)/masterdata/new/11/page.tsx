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
            number: 1,
            userGroup: 'บุคลากรและลูกจ้างของททท.', 
            note: ''
        },
        { 
            number: 2,
            userGroup: 'ลูกค้า/ผู้ใช้บริการ', 
            note: '', 
            level2User:[
                { 
                    number: 1,
                    userGroup: 'นักท่องเที่ยวชาวไทย', 
                    note: '',
                    
                },
                { 
                    number: 2,
                    userGroup: 'นักท่องเที่ยวชาวต่างชาติ', 
                    note: '',
                    
                }
            ] 
        },
        { 
            number: 3,
            userGroup: 'หน่วยงานกำกับดูแล/ผู้ถือหุ้นภาครัฐ', 
            note: '',
            level2User:[
                { 
                    number: 1,
                    userGroup: 'กระทรวงการคลัง.', 
                    note: '',
                    
                },
                { 
                    number: 2,
                    userGroup: 'สำนักงานคณะกรรมการนโยบายรัฐวิสหากิจ', 
                    note: '',
                    
                },
                { 
                    number: 3,
                    userGroup: 'กระทรวงการท่องเที่ยวและกีฬา', 
                    note: '',
                    
                },
                { 
                    number: 4,
                    userGroup: 'สำนักงานการตรวจเงินแผ่นดิน', 
                    note: '',
                    
                }
            ] 
        },
        { 
            number: 4,
            userGroup: 'คู่ค้า', 
            note: '', 
            level2User:[
                { 
                    number: 1,
                    userGroup: 'ธุรกิจนำเที่ยว', 
                    note: '',
                    
                },
                { 
                    number: 2,
                    userGroup: 'Online Travel Agency (ต่างประเทศและในประเทศ)', 
                    note: '',
                    
                },
                { 
                    number: 3,
                    userGroup: 'ธุรกิจโรงแรมที่พัก', 
                    note: '',
                    
                },
                { 
                    number: 4,
                    userGroup: 'ธุรกิจขนส่ง', 
                    note: '',
                    
                },
                { 
                    number: 5,
                    userGroup: 'แหล่งท่องเที่ยว/สถานประกอบการ/ชุมชนเจ้าของแหล่งท่องเที่ยว', 
                    note: '',
                    
                },
                { 
                    number: 6,
                    userGroup: 'อื่นๆ', 
                    note: '',
                    
                }
            ]
        },
        { 
            number: 5,
            userGroup: 'ผู้ส่งมอบ', 
            note: '', 
            level2User:[
                { 
                    number: 1,
                    userGroup: 'ผู้ส่งมอบภาครัฐ', 
                    note: '',
                    level3User: [
                        { 
                            number: 1,
                            userGroup: 'กระทรวงมหาดไทย', 
                            note: '' 
                        },
                        { 
                            number: 2,
                            userGroup: 'กระทรวงสาธารณสุข', 
                            note: '' 
                        },
                        { 
                            number: 3,
                            userGroup: 'กรมการท่องเที่ยว', 
                            note: '' 
                        },
                        { 
                            number: 4,
                            userGroup: 'กระทรวงต่างประเทศ', 
                            note: '' 
                        },
                        { 
                            number: 5,
                            userGroup: 'สำนักงานปลัดกระทรวงการท่องเที่ยวและกีฬา', 
                            note: '' 
                        },
                        { 
                            number: 6,
                            userGroup: 'อื่นๆ', 
                            note: '' 
                        },
                    ] 
                },
                { 
                    number: 2,
                    userGroup: 'ผู้ส่งมอบภาคเอกชน', 
                    note: '',
                    level3User: [
                        { 
                            number: 1,
                            userGroup: 'สถาบันการศึกษา', 
                            note: '' 
                        },
                        { 
                            number: 2,
                            userGroup: 'บริษัทวิจัย', 
                            note: '' 
                        },
                        { 
                            number: 3,
                            userGroup: 'ที่ปรึกษา', 
                            note: '' 
                        },
                        { 
                            number: 4,
                            userGroup: 'อื่นๆ', 
                            note: '' 
                        },
                    ]  
                },
            ]
        },
        { 
            number: 6,
            userGroup: 'คู่ความร่วมมือ', 
            note: '', 
            level2User:[
                { 
                    number: 1,
                    userGroup: 'องค์การบริหารการพัฒนาพื้นที่พิเศษเพื่อการท่องเที่ยวอย่างยั่งยืน', 
                    note: '',
                    
                },
                { 
                    number: 2,
                    userGroup: 'สำนักงานส่งเสริมการจัดประชุมและนิทรรศการ', 
                    note: '',
                    
                },
                { 
                    number: 3,
                    userGroup: 'สื่อมวลชนทั้ง online และ offline', 
                    note: '',
                    
                },
                { 
                    number: 4,
                    userGroup: 'บริษัทท่าอากาศยานไทยจำกัด (มหาชน)', 
                    note: '',
                    
                },
                { 
                    number: 5,
                    userGroup: 'การกีฬาแห่งประเทศไทย', 
                    note: '',
                    
                },
                { 
                    number: 6,
                    userGroup: 'สำนักงานการท่องเทียวและกีฬา', 
                    note: '',
                    
                },
                { 
                    number: 7,
                    userGroup: 'องค์การบริหารส่วนตำบล (อบต.)', 
                    note: '' ,
                },
                { 
                    number: 8,
                    userGroup: 'องค์การบริหารส่วนจังหวัด (อบจ.)', 
                    note: '',
                },
                { 
                    number: 9,
                    userGroup: 'สมาคมที่เกี่ยวข้องกับการท่องเที่ยว', 
                    note: '',
                    level3User: [
                        { 
                            number: 1,
                            userGroup: 'สมาคมมัคคุเทศก์อาชีพแห่งประเทศไทย', 
                            note: '' 
                        },
                        { 
                            number: 2,
                            userGroup: 'สมาคมโรงแรมไทย', 
                            note: '' 
                        },
                        { 
                            number: 3,
                            userGroup: 'สมาคมภัตตาคารไทย', 
                            note: '' 
                        },
                        { 
                            number: 4,
                            userGroup: 'สมาคมผู้ประกอบการร้านค้า', 
                            note: '' 
                        },
                        { 
                            number: 5,
                            userGroup: 'สมาคมผู้ประกอบการนำเที่ยวไทย', 
                            note: '' 
                        },
                        { 
                            number: 6,
                            userGroup: 'สภาหอการค้าไทย', 
                            note: '' 
                        },
                        { 
                            number: 7,
                            userGroup: 'สภาอุตสาหกรรมท่องเที่ยวแห่งประเทศไทย', 
                            note: '' 
                        },
                        { 
                            number: 8,
                            userGroup: 'สมาคมผู้ค้าปลีกไทย', 
                            note: '' 
                        },
                        { 
                            number: 9,
                            userGroup: 'สมาคมธุรกิจท่องเที่ยวภายในประเทศ', 
                            note: '' 
                        },
                        { 
                            number: 10,
                            userGroup: 'สมาคมไทยธุรกิจการท่องเที่ยว (Association of Thai Travel Agents: ATTA)', 
                            note: '' 
                        },
                        { 
                            number: 11,
                            userGroup: 'สมาคมส่งเสริมการท่องเที่ยวภูมิภาคเอเชียและแปซิฟิก (Pacific Asia Travel Association: PATA)', 
                            note: '' 
                        },
                        { 
                            number: 12,
                            userGroup: 'สมาคมไทยท่องเที่ยวอย่างรับผิดชอบ', 
                            note: '' 
                        },
                        { 
                            number: 13,
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