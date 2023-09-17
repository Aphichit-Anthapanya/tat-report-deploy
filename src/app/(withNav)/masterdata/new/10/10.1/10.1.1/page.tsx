"use client";

import React from "react";
import { useState } from "react";
import "@components/Report-temp/report-temp.scss";
import { useParams, useRouter } from "next/navigation";
import Table from './table';

export default function Page() {
    const router = useRouter()
    const data = [
        {number: '1', nameT: 'ฮอนดูรัส', nameE:'ฮอนดูรัส', description:''},
        {number: '2', nameT: 'ฮ่องกง มาเก๊า', nameE:'ฮ่องกง มาเก๊า', description:''},
        {number: '3', nameT: 'โอมาน', nameE:'โอมาน', description:''},
        {number: '4', nameT: 'แอฟริกาเหนือ', nameE:'แอฟริกาเหนือ', description:''},
        {number: '5', nameT: 'แอฟริกาใต้', nameE:'แอฟริกาใต้', description:''},
        {number: '6', nameT: 'เอลซัลวาดอร์', nameE:'เอลซัลวาดอร์', description:''},
        {number: '7', nameT: 'เอกวาดอร์', nameE:'เอกวาดอร์', description:''},
        {number: '8', nameT: 'อุรุกวัย', nameE:'อุรุกวัย', description:''},
        {number: '9', nameT: 'อิหร่าน', nameE:'อิหร่าน', description:''},
        {number: '10', nameT: 'อิสราเอล', nameE:'อิสราเอล', description:''},
    ];
    return (
        <>
            <div className='d-flex flex-column' style={{width: '100%'}}>
            <div className="breadcrumb-zone fz-20">Master Data {'>'} <span className="bread-crumb-page-name"><b>Master Plan</b></span></div>

                    <div className="d-flex filter-project-button justify-content-right">
                        <div className="p-2"><button className="btn btn-primary" onClick={() => router.push('/masterdata/new/9')}>ย้อนกลับ</button></div>
                    </div>
                    <div className='search-wrapper-section d-flex flex-column'>
                        <h2>ข้อมูลชื่อแผน</h2>
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
                        <div className="d-flex flex-row mb-50">
                            <div><button className="btn btn-secondary" onClick={() => router.push('/masterdata/new/10/10.1/10.1.1')}>ข้อมูลตลาด</button></div>
                            <div><button className="btn btn-primary" onClick={() => router.push('/masterdata/new/10/10.1/10.1.2')}>ข้อมูลกลยุทธ์ภาพรวม</button></div>
                            <div><button className="btn btn-primary" onClick={() => router.push('/masterdata/new/10/10.1/10.1.3')}>ข้อมูลประเด็นยุทธศาสตร์</button></div>
                            <div><button className="btn btn-primary" onClick={() => router.push('/masterdata/new/10/10.1/10.1.4')}>ความสอดคล้องกับนโยบายภายนอก</button></div>
                        </div>
                        <div className="d-flex flex-row justify-content-around">
                            <div className="d-flex flex-column">
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="box">
                                        <b>ชื่อข้อมูลตลาด :</b>
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
                                        <b>รายละเอียด :</b>
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
                        <div className="d-flex filter-project-button justify-content-left">
                            <div className="p-2"><button className="btn btn-primary">เพิ่มข้อมูล</button></div>
                        </div>
                        <div className="table-container mb-20">
                            <Table data={data}/>
                        </div>
                    </div>
                    <div className="d-flex filter-project-button justify-content-right">
                        <div className="p-2"><button className="btn btn-primary" onClick={() => router.push('/masterdata/new/9')}>ย้อนกลับ</button></div>
                        
                    </div>
                </div>
        </>
    )
}