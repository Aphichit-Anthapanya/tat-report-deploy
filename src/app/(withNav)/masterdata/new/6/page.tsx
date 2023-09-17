"use client";

import React from "react";
import { useState } from "react";
import "@components/Report-temp/report-temp.scss";
import { useParams, useRouter } from "next/navigation";
import Table from './table';

export default function Page() {
    const data = [
        {number:'1', codeArea:'103004', typeArea:'ต่างประเทศ', Area:'Argentina', Areas:'All Area'},
        {number:'2', codeArea:'103005', typeArea:'ต่างประเทศ', Area:'Australia', Areas:'All Area'},
        {number:'3', codeArea:'103006', typeArea:'ต่างประเทศ', Area:'Austria', Areas:'All Area'},
        {number:'4', codeArea:'20392', typeArea:'ต่างประเทศ', Area:'Bahrain', Areas:'All Area'},
        {number:'5', codeArea:'103007', typeArea:'ต่างประเทศ', Area:'Bangladesh', Areas:'All Area'},
        {number:'6', codeArea:'103008', typeArea:'ต่างประเทศ', Area:'Belgium', Areas:'All Area'},
        {number:'7', codeArea:'103009', typeArea:'ต่างประเทศ', Area:'Bhutan', Areas:'All Area'},
        {number:'8', codeArea:'103010', typeArea:'ต่างประเทศ', Area:'	Brazil', Areas:'All Area'},
        {number:'9', codeArea:'103011', typeArea:'ต่างประเทศ', Area:'	Brunei', Areas:'All Area'},
        {number:'10', codeArea:'20402', typeArea:'ต่างประเทศ', Area:'Bulgaria', Areas:'All Area'}
    ];
    
    return (
        <>
            <div className='d-flex flex-column' style={{width: '100%'}}>
                <div className="breadcrumb-zone fz-20">Master Data {'>'} <span className="bread-crumb-page-name"><b>พื้นที่ดำเนินการ</b></span></div>
                    <div className='search-wrapper-section d-flex flex-column'>
                        <div className="d-flex flex-row justify-content-around">
                            <div className="d-flex flex-column">
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="box">
                                        <b>รหัสพื้นที่ :</b>
                                    </div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <input type="text" className="form-control" placeholder="" id="filterOverall" />
                                        </div>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="box">
                                        <b>พื้นที่/ประเทศ :</b>
                                    </div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <input type="text" className="form-control" placeholder="" id="filterOverall" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-column">
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="box">
                                        <b>พื้นที่/ประเทศ :</b>
                                    </div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>  -- เลือก --  </option>
                                                <option value="1">ในประเทศ</option>
                                                <option value="2">ต่างประเทศ</option>
                                                <option value="3">สนับสนุนด้านการตลาด</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="box">
                                        <b>จังหวัด/เมือง :</b>
                                    </div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <input type="text" className="form-control" placeholder="" id="filterOverall" />
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
                    <div className="d-flex filter-project-button justify-content-left">
                        <div className="p-2"><button className="btn btn-primary">เพิ่มข้อมูล</button></div>
                    </div>
                    <Table data={data}/>
                </div>
        </>
    )
}