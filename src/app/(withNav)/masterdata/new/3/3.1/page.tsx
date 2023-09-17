"use client";

import React from "react";
import { useState } from "react";
import "@components/Report-temp/report-temp.scss";
import { useParams, useRouter } from "next/navigation";


export default function Page() {
    const router = useRouter()
    return (
        <>
            <div className='d-flex flex-column' style={{width: '100%'}}>
            <div className="breadcrumb-zone fz-20">Master Data {'>'} <span className="bread-crumb-page-name"><b>ข้อมูลผู้ใช้งาน</b></span></div>
                    <div className="d-flex filter-project-button justify-content-right">
                        <div className="p-2"><button className="btn btn-primary" onClick={() => router.push('/masterdata/new/3/')}>ย้อนกลับ</button></div>
                        <div className="p-2"><button className="btn btn-primary">Submit</button></div>
                    </div>
                    <div className='search-wrapper-section d-flex flex-column'>
                        <h2>รายละเอียดผู้ใช้งาน</h2>
                        <div className="d-flex flex-row justify-content-around">
                        <div className='d-flex flex-column'>
                                <div className='d-flex flex-row content-search-box d-flex p-2 justify-content-right align-items-center'>
                                    <div className="d-flex justify-content-right align-items-center mr-5">ชื่อ(ไทย) :</div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <input type="text" className="form-control" placeholder="" id="filterOverall" value={'รุ้งทอง'}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='content-search-box d-flex p-2 justify-content-right align-items-center'>
                                    <div className="d-flex justify-content-right align-items-center mr-5">ชื่อ(อังกฤษ) :</div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <input type="text" className="form-control" placeholder="" id="filterOverall" value={'ทศานนท์'}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='content-search-box d-flex p-2 justify-content-right align-items-center'>
                                    <div className="d-flex justify-content-right align-items-center mr-5">ชื่อผู้ใช้งาน :</div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <input type="text" className="form-control" placeholder="" id="filterOverall" value={'rungtong.thas_delete'}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='content-search-box d-flex p-2 justify-content-right align-items-center'>
                                    <div className="d-flex justify-content-right align-items-center mr-5">รหัสผ่านใหม่ :</div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <input type="text" className="form-control" placeholder="" id="filterOverall" value={''}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='content-search-box d-flex p-2 justify-content-right align-items-center'>
                                    <div className="d-flex justify-content-right align-items-center mr-5">อีเมล :</div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <input type="text" className="form-control" placeholder="" id="filterOverall" value={''}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='content-search-box d-flex p-2 justify-content-right align-items-center'>
                                    <div className="d-flex justify-content-right align-items-center mr-5">เบอร์โทรศัพท์ :</div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <input type="text" className="form-control" placeholder="" id="filterOverall" value={''}/>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className='d-flex flex-column'>
                                <div className='content-search-box d-flex p-2 justify-content-right align-items-center'>
                                    <div className="d-flex justify-content-right align-items-center mr-5">นามสกุล(ไทย) :</div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <input type="text" className="form-control" placeholder="" id="filterOverall" value={'รุ้งทอง'}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='content-search-box d-flex p-2 justify-content-right align-items-center'>
                                    <div className="d-flex justify-content-right align-items-center mr-5">นามสกุล(อังกฤษ) :</div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <input type="text" className="form-control" placeholder="" id="filterOverall" value={'ทศานนท์'}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='content-search-box d-flex p-2 justify-content-right align-items-center'>
                                    <div className="d-flex justify-content-right align-items-center mr-5">หน่วยงาน :</div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>  -- เลือก --  </option>
                                                <option value="1">-</option>
                                                <option value="2">-</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className='content-search-box d-flex p-2 justify-content-right align-items-center'>
                                    <div className="d-flex justify-content-right align-items-center mr-5">ยืนยันรหัสผ่าน :</div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <input type="text" className="form-control" placeholder="" id="filterOverall" value={''}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='content-search-box d-flex p-2 justify-content-right align-items-center'>
                                    <div className="d-flex justify-content-right align-items-center mr-5">สถานะ  :</div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>  -- เลือก --  </option>
                                                <option value="1">ปกติ</option>
                                                <option value="2">ปิดใช้งาน</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className='content-search-box d-flex p-2 justify-content-right align-items-center'>
                                    <div className="d-flex justify-content-right align-items-center mr-5">ชื่อผู้ติดต่อ :</div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <input type="text" className="form-control" placeholder="" id="filterOverall" value={''}/>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        </div>
                        <div className="d-flex filter-project-button justify-content-center">
                            <div className="p-2"><button className="btn btn-primary">ค้นหา</button></div>
                            <div className="p-2"><button className="btn btn-primary">ล้างค่า</button></div>
                        </div>    
                    </div>
                    <div className='search-wrapper-section d-flex flex-column'>
                        <h2>รายละเอียดกลุ่มผู้ใช้</h2>
                        <div className="d-flex filter-project-button justify-content-left">
                            <div className="p-2"><button className="btn btn-primary">เพิ่มข้อมูล</button></div>
                        </div>
                        <div className="table-container mb-20">
                            <table className="table table-striped">
                                <thead>
                                    <tr className='table-primary'>
                                        <th>
                                            <div className="wd-80 d-flex justify-content-center align-items-center">ลำดับที่</div>
                                        </th>
                                        <th>
                                            <div className="wd-50 d-flex justify-content-center align-items-center">ลบ</div>
                                        </th>
                                        <th>
                                            <div className="wd-300 d-flex justify-content-center align-items-center">ชื่อกลุ่ม(ไทย)</div>
                                            </th>
                                        <th>
                                            <div className="wd-300 d-flex justify-content-center align-items-center">ชื่อกลุ่ม(ไทย)</div>
                                        </th>
                                        <th>
                                            <div className="wd-100 d-flex justify-content-center align-items-center">วันที่สร้าง</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th colSpan={5}>
                                            <div className="normalText colorR d-flex justify-content-center align-items-center">ไม่พบรายการข้อมูล</div>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="d-flex filter-project-button justify-content-right">
                        <div className="p-2"><button className="btn btn-primary" onClick={() => router.push('/masterdata/new/3/')}>ย้อนกลับ</button></div>
                        <div className="p-2"><button className="btn btn-primary">Submit</button></div>
                    </div>
                </div>
        </>
    )
}