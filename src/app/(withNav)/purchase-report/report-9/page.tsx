"use client";

import React from "react";
import { useState } from "react";
import "@components/Report-temp/report-temp.scss";
import Activities from "@components/Activities/Activities";
import AddActivities from "@components/Activities/Add-Activities";
import { Bar, Pie } from "react-chartjs-2";
import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto';

export default function Page() {

    Chart.register(CategoryScale);

    const [isOpenAddActivity,setOpenAddActivity] = useState(false);

    const [sectionNumber, setSectionNumber] = useState(1);
    const handleSection = (value: number) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setSectionNumber(value)
    };

    const handleAddActivity = () => {
        setOpenAddActivity(!isOpenAddActivity)
        if(isOpenAddActivity){
            handleSection(1)
        }else{
            handleSection(2)
        }
    }
    
        const barLabels = ["1. วิธีประกาศเชิญชวนทั่วไป (e-Market,e-Bidding,สอบราคา)", "2. วิธีคัดเลือก", "3. วิธีเฉพาะเจาะจง", "4. อยู่ระหว่างดำเนินการจัดซื้อจัดจ้างตามแผน", "5. ยกเลิก", "รวมทั้งสิ้น"];
    const barData = {
    labels: barLabels,
    datasets: [{
        label:"วงเงินงบประมาณ",
        data: [0, 105069977.28, 469301007.85, 137937900, 0, 712308885.13],
        backgroundColor: [
        "rgb(54, 162, 235)",
        "rgb(54, 162, 235)",
        "rgb(54, 162, 235)",
        "rgb(54, 162, 235)",
        "rgb(54, 162, 235)",
        "rgb(54, 162, 235)",
        ],
        borderColor: [
        "rgb(255, 255, 255)",
        "rgb(255, 255, 255)",
        "rgb(255, 255, 255)",
        "rgb(255, 255, 255)",
        "rgb(255, 255, 255)",
        "rgb(255, 255, 255)",
        ],
        borderWidth: 1,
    },
    {
        label:"วงเงินทำสัญญา",
        data: [0, 102436135.6, 453900066.37, 0, 0, 556336201.97],
        backgroundColor: [
        "rgb(136, 8, 8)",
        "rgb(136, 8, 8)",
        "rgb(136, 8, 8)",
        "rgb(136, 8, 8)",
        "rgb(136, 8, 8)",
        "rgb(136, 8, 8)",
        
        ],
        borderColor: [
        "rgb(255, 255, 255)",
        "rgb(255, 255, 255)",
        "rgb(255, 255, 255)",
        "rgb(255, 255, 255)",
        "rgb(255, 255, 255)",
        "rgb(255, 255, 255)",
        ],
        borderWidth: 1,
    },
    {
        label:"รายการที่ยังไม่ได้ดำเนินการจัดซื้อจัดจ้าง",
        data: [0, 0, 0, 248033800, 0, 248033800],
        backgroundColor: [
        "rgb(255, 159, 64)",
        "rgb(255, 159, 64)",
        "rgb(255, 159, 64)",
        "rgb(255, 159, 64)",
        "rgb(255, 159, 64)",
        "rgb(255, 159, 64)",
        ],
        borderColor: [
        "rgb(255, 255, 255)",
        "rgb(255, 255, 255)",
        "rgb(255, 255, 255)",
        "rgb(255, 255, 255)",
        "rgb(255, 255, 255)",
        "rgb(255, 255, 255)",
        ],
        borderWidth: 1,
    }]
    };
    return (
        <>
            <div className='d-flex flex-column' style={{width: '100%'}}>
                <div className="breadcrumb-zone">รายงานจัดซื้อจัดจ้าง {'>'} <span className="bread-crumb-page-name"><b>รายงานกราฟสรุปวิธีการจัดซื้อจัดจ้าง หรือการจัดหาพัสดุ ประจำปีงบประมาณ 25XX ไตรมาสที่ X</b></span></div>
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
                                    <b>รายงานกราฟสรุปวิธีการจัดซื้อจัดจ้าง หรือการจัดหาพัสดุ ประจำปีงบประมาณ 25XX ไตรมาสที่ X</b>
                                </div>
                                    <div className="d-flex justify-content-center mt-20">
                                        <Bar
                                            data={barData}
                                            options={{
                                            maintainAspectRatio: true,
                                            plugins: {
                                                legend: {
                                                display: true,
                                                position: "bottom"
                                                },
                                                },
                                            }}
                                        />
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}