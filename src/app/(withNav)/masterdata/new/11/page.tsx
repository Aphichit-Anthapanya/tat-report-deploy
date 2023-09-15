"use client";

import React from "react";
import { useState } from "react";
import "@components/Report-temp/report-temp.scss";
import Table from './table';
import { BrowserRouter } from 'react-router-dom';
import { useParams, useRouter } from "next/navigation";

export default function Page() {
    const data = [
        { userGroup: 'บุคลากรและลูกจ้างของททท.', note: '' },
        { userGroup: 'ลูกค้า/ผู้ใช้บริการ', note: '' },
        { userGroup: 'หน่วยงานกำกับดูแล/ผู้ถือหุ้นภาครัฐ', note: '' },
        { userGroup: 'คู่ค้า', note: '' },
        { userGroup: 'ผู้ส่งมอบ', note: '' },
        { userGroup: 'คู่ความร่วมมือ', note: '' },
    ];
    
    return (
        <>
        <BrowserRouter>
        <div className='d-flex flex-column' style={{width: '100%'}}>
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
                    </div>
                    <div className="d-flex filter-project-button justify-content-right">
                        <div className="p-2"><button className="btn btn-primary" >ย้อนกลับ</button></div>
                        <div className="p-2"><button className="btn btn-primary">Submit</button></div>
                    </div>
                </div>
      </BrowserRouter>
            
        </>
    )
}