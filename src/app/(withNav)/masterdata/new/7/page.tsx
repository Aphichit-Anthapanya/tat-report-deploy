"use client";

import React from "react";
import { useState } from "react";
import "@components/Report-temp/report-temp.scss";
import { useParams, useRouter } from "next/navigation";
import Table from './table';

export default function Page() {
    const data = [
        {number:'1', codeTarget:'', typeTarget:'ในประเทศ', nameTargetTH:'Active Senior', nameTargetEN:'Active Senior', note:''},
        {number:'2', codeTarget:'', typeTarget:'ต่างประเทศ', nameTargetTH:'Anniversary', nameTargetEN:'Anniversary', note:'Anniversary'},
        {number:'3', codeTarget:'', typeTarget:'ต่างประเทศ', nameTargetTH:'Asian Americans', nameTargetEN:'Asian Americans', note:''},
        {number:'4', codeTarget:'', typeTarget:'ต่างประเทศ', nameTargetTH:'Athlete (นักกีฬา)', nameTargetEN:'Athlete (นักกีฬา)', note:'Athlete (นักกีฬา)'},
        {number:'5', codeTarget:'', typeTarget:'ต่างประเทศ', nameTargetTH:'Baby Boomer', nameTargetEN:'Baby Boomer', note:'Baby Boomer'},
        {number:'6', codeTarget:'', typeTarget:'ต่างประเทศ', nameTargetTH:'Bleisure', nameTargetEN:'Bleisure', note:''},
        {number:'7', codeTarget:'', typeTarget:'ต่างประเทศ', nameTargetTH:'Bloggers/Influencers', nameTargetEN:'Bloggers/Influencers', note:'Bloggers/Influencers'},
        {number:'8', codeTarget:'', typeTarget:'ต่างประเทศ', nameTargetTH:'Buyer', nameTargetEN:'Buyer', note:'Buyer'},
        {number:'9', codeTarget:'', typeTarget:'ต่างประเทศ', nameTargetTH:'	Celebrity', nameTargetEN:'Celebrity', note:'Celebrity'},
        {number:'10', codeTarget:'', typeTarget:'ต่างประเทศ', nameTargetTH:'Celebrity', nameTargetEN:'Celebrity', note:'Celebrity'}
    ];
    
    return (
        <>
            <div className='d-flex flex-column' style={{width: '100%'}}>
                <div className="breadcrumb-zone fz-20">Master Data {'>'} <span className="bread-crumb-page-name"><b>กลุ่มเป้าหมาย</b></span></div>
                    <div className='search-wrapper-section d-flex flex-column'>
                        <div className="d-flex flex-row justify-content-around">
                            <div className="d-flex flex-column">
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="box">
                                        <b>รหัสกลุ่มเป้าหมาย :</b>
                                    </div>
                                    <div className="box">
                                        <div className="filter-field">
                                            <input type="text" className="form-control" placeholder="" id="filterOverall" />
                                        </div>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="box">
                                        <b>ชื่อกลุ่มเป้าหมาย :</b>
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
                                        <b>ประเภทกลุ่มเป้าหมาย :</b>
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