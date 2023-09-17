"use client";

import React from "react";
import { useState } from "react";
import "@components/Report-temp/report-temp.scss";
import { useParams, useRouter } from "next/navigation";
import Table from './table';

export default function Page() {
    const data = [
        {number:'1', SAI:'20001', SAT:'จังหวัด', SANTH:'กระบี่', SANEN:'กระบี่'},
        {number:'2', SAI:'20002', SAT:'จังหวัด', SANTH:'กรุงเทพมหานคร', SANEN:'กรุงเทพมหานคร'},
        {number:'3', SAI:'20003', SAT:'จังหวัด', SANTH:'กาญจนบุรี', SANEN:'กาญจนบุรี'},
        {number:'4', SAI:'20004', SAT:'จังหวัด', SANTH:'กาฬสินธุ์', SANEN:'กาฬสินธุ์'},
        {number:'5', SAI:'20005', SAT:'จังหวัด', SANTH:'กำแพงเพชร', SANEN:'กำแพงเพชร'},
        {number:'6', SAI:'20006', SAT:'จังหวัด', SANTH:'ขอนแก่น', SANEN:'ขอนแก่น'},
        {number:'7', SAI:'20007', SAT:'จังหวัด', SANTH:'จันทบุรี', SANEN:'จันทบุรี'},
        {number:'8', SAI:'20008', SAT:'จังหวัด', SANTH:'ฉะเชิงเทรา', SANEN:'ฉะเชิงเทรา'},
        {number:'9', SAI:'20009', SAT:'จังหวัด', SANTH:'ชลบุรี', SANEN:'ชลบุรี'},
        {number:'10', SAI:'20010', SAT:'จังหวัด', SANTH:'ชัยนาท', SANEN:'ชัยนาท'}
    ];
    
    return (
        <>
            <div className='d-flex flex-column' style={{width: '100%'}}>
                <div className="breadcrumb-zone fz-20">Master Data {'>'} <span className="bread-crumb-page-name"><b>Service Area</b></span></div>
                    <div className='search-wrapper-section d-flex flex-column'>
                        <div className="d-flex flex-row justify-content-around">
                            <div className="d-flex flex-column">
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="box">
                                        <b>Service Area Id :</b>
                                    </div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <input type="text" className="form-control" placeholder="" id="filterOverall" />
                                        </div>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="box">
                                        <b>Service Area Name :</b>
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
                                        <b>Service Area Type :</b>
                                    </div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>  -- เลือก --  </option>
                                                <option value="1">จังหวัด</option>
                                                <option value="2">ประเทศ</option>
                                                <option value="3">ภูมิภาค</option>
                                            </select>
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