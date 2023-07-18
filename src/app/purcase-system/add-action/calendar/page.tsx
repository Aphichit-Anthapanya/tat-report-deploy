"use client";

import React from "react";
import { useState } from "react";
import "@components/Activities/activities-add.scss";
import Activities from "@components/Activities/Activities";
import AddActivities from "@components/Activities/Add-Activities";
import Form from 'react-bootstrap/Form';

export default function Page() {

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
    
    return (
        <>
            <div className='d-flex flex-column' style={{width: '100%', height: '100%'}}>
                <div className="breadcrumb-zone">นำเข้าข้อมูล {'>'} <span className="bread-crumb-page-name">เพิ่มงบลงทุน(งบประมาณ)</span> {'>'} <span className="bread-crumb-page-name"><b>ข้อมูลโครงการของแผนปฏิบัติการจัดซื้อจัดจ้าง</b></span></div>
                    <div className="d-flex align-items-center justify-content-right">
                            <div className="p-2"><button className="btn btn-primary">เพิ่มข้อมูล</button></div>
                    </div>
                    <div className='d-flex flex-column align-items-center'>
                    <table className="table table-bordered ">
                        <thead>
                            <tr>
                            <th ><div className="d-flex flex-column align-items-center">
                                    <div>{'< > '} ประจำปีงบประมาณ 2566</div>
                                </div>
                            </th>
                            <th scope="col">
                                <div className="d-flex flex-column align-items-center">ต.ค.</div></th>
                            <th scope="col">
                                <div className="d-flex flex-column align-items-center">พ.ย.</div></th>
                            <th scope="col">
                                <div className="d-flex flex-column align-items-center">ธ.ค.</div></th>
                            <th scope="col">
                                <div className="d-flex flex-column align-items-center">ม.ค.</div></th>
                            <th scope="col">
                                <div className="d-flex flex-column align-items-center">ก.พ.</div></th>
                            <th scope="col">
                                <div className="d-flex flex-column align-items-center">มี.ค.</div></th>
                            <th scope="col">
                                <div className="d-flex flex-column align-items-center">เม.ย.</div></th>
                            <th scope="col">
                                <div className="d-flex flex-column align-items-center">พ.ค.</div></th>
                            <th scope="col">
                                <div className="d-flex flex-column align-items-center">มิ.ย.</div></th>
                            <th scope="col">
                                <div className="d-flex flex-column align-items-center">ก.ค.</div></th>
                            <th scope="col">
                                <div className="d-flex flex-column align-items-center">ส.ค.</div></th>
                            <th scope="col">
                                <div className="d-flex flex-column align-items-center">ก.ย.</div></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1. จัดทำร่างขอบเขตของงาน</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            </tr>
                            <tr>
                            <th scope="row">2. จัดทำรายงานขอซื้อ/ขอจ้าง</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            </tr>
                            <tr>
                            <th scope="row">3. อนุมัติจัดซื้อจัดจ้าง</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            </tr>
                            <tr>
                            <th scope="row">4. ทำสัญญา/ข้อตกลงเป็นหนังสือ</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            </tr>
                            <tr>
                            <th scope="row">5. ดำเนินงานตามเงื่อนไขของสัญญา/ส่งมอบงานงวดต่างๆ</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            </tr>
                            <tr>
                            <th scope="row">6. วันที่สิ้นสุดสัญญา/วันที่แล้วเสร็จ</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    <div className="d-flex align-items-center justify-content-right">
                            <div className="p-3"><button className="btn btn-primary">ย้อนกลับ</button></div>
                            <div className="p-3"><button className="btn btn-primary">บันทึกข้อมูลชั่วคราว</button></div>
                            <div className="p-3"><button className="btn btn-primary">เสนอผู้บังคับบัญชา</button></div>
                    </div>
            </div>
        </>
    )
}