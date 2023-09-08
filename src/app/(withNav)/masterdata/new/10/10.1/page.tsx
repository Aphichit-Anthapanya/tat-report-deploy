"use client";

import React from "react";
import { useState } from "react";
import "@components/Report-temp/report-temp.scss";
import { useParams, useRouter } from "next/navigation";
import Table from './table';

export default function Page() {
    const router = useRouter()
    return (
        <>
            <div className='d-flex flex-column' style={{width: '100%'}}>
                    <div className="d-flex filter-project-button justify-content-right">
                        <div className="p-2"><button className="btn btn-primary" onClick={() => router.push('/masterdata/new/9')}>ย้อนกลับ</button></div>
                        <div className="p-2"><button className="btn btn-primary">Submit</button></div>
                    </div>
                    <div className='search-wrapper-section d-flex flex-column'>
                        <h2>Output</h2>
                        <div className="d-flex flex-row justify-content-around">
                            <div className="d-flex flex-column">
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="box">
                                        <b>รหัสแผน :</b>
                                    </div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <input type="text" className="form-control" placeholder="" id="filterOverall" value={'10001'} disabled/>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="box">
                                        <b>ชื่อแผน(TH) :</b>
                                    </div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <input type="text" className="form-control" placeholder="" id="filterOverall" value={'ตลาดต่างประเทศ'} disabled/>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="box">
                                        <b>รายละเอียด :</b>
                                    </div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <input type="text" className="form-control" placeholder="" id="filterOverall" value={'ตลาดต่างประเทศ'} disabled/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-column">
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="box">
                                        <b></b>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="box">
                                        <b>ชื่อแผน(EN) :</b>
                                    </div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <input type="text" className="form-control" placeholder="" id="filterOverall" value={'International markets'} disabled/>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="box">
                                        <b></b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='search-wrapper-section d-flex flex-column'>
                        <h2>Output details</h2>
                        <div className="d-flex filter-project-button justify-content-left">
                            <div className="p-2"><button className="btn btn-primary">เพิ่มข้อมูล</button></div>
                        </div>
                        <div className="table-container mb-20">
                            <table className="table table-striped">
                                <thead>
                                    <tr className='table-primary'>
                                        <th>
                                            <div className="wd-80 d-flex justify-content-center align-items-center">แก้ไข</div>
                                        </th>
                                        <th>
                                            <div className="wd-50 d-flex justify-content-center align-items-center">ลบ</div>
                                        </th>
                                        <th>
                                            <div className="wd-140 d-flex flex-column justify-content-center align-items-center">
                                                <div>รูปแบบการ</div>
                                                <div>คำนวณตัวชี้วัด</div>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="wd-140 d-flex justify-content-center align-items-center">วิธีการคำนวณตัวชี้วัด</div>
                                        </th>
                                        <th>
                                            <div className="wd-125 d-flex justify-content-center align-items-center">หน่วย</div>
                                        </th>
                                        <th>
                                            <div className="wd-300 d-flex justify-content-center align-items-center">ชื่อตัวชี้วัด(TH)</div>
                                        </th>
                                        <th>
                                            <div className="wd-300 d-flex justify-content-center align-items-center">ชื่อตัวชี้วัด(EN)</div>
                                        </th>
                                        <th>
                                            <div className="wd-100 d-flex justify-content-center align-items-center">หมายเหตุ</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th colSpan={8}>
                                            <div className="normalText colorR d-flex justify-content-center align-items-center">ไม่พบรายการข้อมูล</div>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="d-flex filter-project-button justify-content-right">
                        <div className="p-2"><button className="btn btn-primary" onClick={() => router.push('/masterdata/new/9')}>ย้อนกลับ</button></div>
                        <div className="p-2"><button className="btn btn-primary">Submit</button></div>
                    </div>
                </div>
        </>
    )
}