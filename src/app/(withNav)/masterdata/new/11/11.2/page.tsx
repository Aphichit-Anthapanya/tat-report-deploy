"use client";

import React from "react";
import { useState } from "react";
import "@components/Report-temp/report-temp.scss";
import Table from './table';
import { useLocation } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { useParams, useRouter } from "next/navigation";
import Button from './button';

export default function Page() {
    
    const router = useRouter();
    const data = [
        { topic: '', note: '' },
        { topic: '', note: '' },
        { topic: '', note: '' },
        { topic: '', note: '' },
        { topic: '', note: '' },
        { topic: '', note: '' },
    ];
    return (
        <BrowserRouter>
        <div className='d-flex flex-column' style={{width: '100%'}}>
                    <div className="d-flex filter-project-button justify-content-right">
                    </div>
                    <div className='search-wrapper-section d-flex flex-column'>
                        <h2>กลุ่มผู้มีส่วนได้ส่วนเสีย</h2>
                    </div>
                    
                    <div className='search-wrapper-section d-flex flex-column'>
                        <Button/>
                        <div className="d-flex filter-project-button justify-content-left">
                            <div className="p-2"><button className="btn btn-primary">เพิ่มข้อมูล</button></div>
                        </div>
                        <div className="table-container mb-20">
                            <Table data = {data}/>
                        </div>
                    </div>
                    <div className="d-flex filter-project-button justify-content-right">
                        
                    </div>
                </div>
                </BrowserRouter>
    )
}