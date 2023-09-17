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
            <div className="breadcrumb-zone fz-20">Master Data {'>'} <span className="bread-crumb-page-name"><b>Outcome</b></span></div>

                    <div className="d-flex filter-project-button justify-content-right">
                        <div className="p-2"><button className="btn btn-primary" onClick={() => router.push('/masterdata/new/8')}>ย้อนกลับ</button></div>
                        <div className="p-2"><button className="btn btn-primary">Submit</button></div>
                    </div>
                    <div className='search-wrapper-section d-flex flex-column'>
                        <h2>Outcome</h2>
                        <div className="d-flex flex-row justify-content-around">
                            <div className="d-flex flex-column">
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="box">
                                        <b>ชื่อแผน :</b>
                                    </div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>ตลาดในประเทศ</option>
                                                <option value="2">ตลาดต่างประเทศ</option>
                                                <option value="3">สนับสนุนด้านการตลาด</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="box">
                                        <b>รูปแบบการคำนวณตัวชี้วัด :</b>
                                    </div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected> รายงานผลโดยตรง</option>
                                                <option value="2">รายงานผลจากรวมผลรายละเอียดย่อย</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="box">
                                        <b>หน่วย :</b>
                                    </div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>%</option>
                                                <option value="2">คน</option>
                                                <option value="3">PAX</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="box">
                                        <b>ชื่อตัวชี้วัด(TH) :</b>
                                    </div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <input type="text" className="form-control" placeholder="" id="filterOverall" value={'(A1 : Aware) อัตราการรับรู้ Content หลักของภูมิภาคจากการเข้าร่วมงาน '}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="box">
                                        <b>หมายเหตุ :</b>
                                    </div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <input type="text" className="form-control" placeholder="" id="filterOverall" value={''}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-column">
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="box">
                                        <b>กลุ่มข้อมูล :</b>
                                    </div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>ประเภท 1</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="box">
                                        <b>วิธีการคำนวณตัวชี้วัด :</b>
                                    </div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>ตามสัดส่วนจำนวน</option>
                                                <option value="1">ผลรวมจำนวน</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="box">
                                        <b></b>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="box">
                                        <b>ชื่อตัวชี้วัด(EN) :</b>
                                    </div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <input type="text" className="form-control" placeholder="" id="filterOverall" value={'(A1 : Aware) อัตราการรับรู้ Content หลักของภูมิภาคจากการเข้าร่วมงาน '}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='search-wrapper-section d-flex flex-column'>
                        <h2>Outcome Detail (Level 3)</h2>
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
                        <div className="p-2"><button className="btn btn-primary" onClick={() => router.push('/masterdata/new/8')}>ย้อนกลับ</button></div>
                        <div className="p-2"><button className="btn btn-primary">Submit</button></div>
                    </div>
                </div>
        </>
    )
}