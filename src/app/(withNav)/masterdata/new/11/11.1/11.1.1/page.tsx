"use client";

import "@components/Report-temp/report-temp.scss";
import Table from './table';
import { useLocation } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
export default function Page() {
    const { y } = useParams();
    const [x, setX] = useState("0");

    useEffect(() => {
        const savedX = localStorage.getItem('x');
        if (savedX) {
          setX(savedX);
        }
      }, []);
    return (
        <BrowserRouter>
        <div className='d-flex flex-column' style={{width: '100%'}}>
                    <div className="d-flex filter-project-button justify-content-right">
                    </div>
                    <div className='search-wrapper-section d-flex flex-column'>
                        <h2>กลุ่มผู้มีส่วนได้ส่วนเสีย</h2>
                    </div>
                    
                    <div className='search-wrapper-section d-flex flex-column'>
                        
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