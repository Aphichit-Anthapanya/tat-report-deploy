"use client";

import React from "react";
import { useState } from "react";
import "@components/Report-temp/report-temp.scss";
import Table from './table';
import { useLocation } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { useParams, useRouter } from "next/navigation";

export default function Page() {
    
    const router = useRouter();
    return (
        <BrowserRouter>
        <div className='d-flex flex-column' style={{width: '100%'}}>
                    <div className="d-flex filter-project-button justify-content-right">
                    </div>
                    <div className='search-wrapper-section d-flex flex-column'>
                        <h2>กลุ่มผู้มีส่วนได้ส่วนเสีย</h2>
                    </div>
                    
                    <div className='search-wrapper-section d-flex flex-column'>
                        <div className="d-flex flex-row mb-50">
                            <div><button className="btn btn-secondary" onClick={() => router.push('/masterdata/new/11/11.1')}>องค์ประกอบ</button></div>
                            <div><button className="btn btn-primary" onClick={() => router.push('/masterdata/new/11/11.2')}>ประเด็นที่เกี่ยวข้อง</button></div>
                        </div>
                        <div className="d-flex filter-project-button justify-content-left">
                            <div className="p-2"><button className="btn btn-primary">เพิ่มข้อมูล</button></div>
                        </div>
                        <div className="table-container mb-20">
                            <Table/>
                        </div>
                    </div>
                    <div className="d-flex filter-project-button justify-content-right">
                        
                    </div>
                </div>
                </BrowserRouter>
    )
}