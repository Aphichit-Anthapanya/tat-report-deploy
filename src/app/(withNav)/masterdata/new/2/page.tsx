"use client";

import React from "react";
import { useState } from "react";
import "@components/Report-temp/report-temp.scss";
import Table from './table';
import { useParams, useRouter } from "next/navigation";


export default function Page() {
    const data = [
        {lovType:'ACTIVITY_GROUP_TYPE', value:'00', nameT:'ในแผน', nameE:'ในแผน', con1:'0', con2:'', con3:''},
        {lovType:'ACTIVITY_GROUP_TYPE', value:'01', nameT:'นอกแผน', nameE:'นอกแผน', con1:'0', con2:'', con3:''},
        {lovType:'BUDGET_BALANCE_TYPE', value:'00', nameT:'ขออนุมัติจัดทำโครงการเพิ่มเติม', nameE:'ขออนุมัติจัดทำโครงการเพิ่มเติม', con1:'1', con2:'', con3:''},
        {lovType:'BUDGET_BALANCE_TYPE', value:'01', nameT:'ไม่ใช้', nameE:'ไม่ใช้', con1:'1', con2:'', con3:''},
        {lovType:'CONTRACT_PARTY_TYPE', value:'00', nameT:'บุคคล', nameE:'บุคคล', con1:'1', con2:'', con3:''},
        {lovType:'CONTRACT_PARTY_TYPE', value:'01', nameT:'ห้างหุ้นส่วนจำกัด', nameE:'ห้างหุ้นส่วนจำกัด', con1:'1', con2:'', con3:''},
        {lovType:'CONTRACT_PARTY_TYPE', value:'02', nameT:'บริษัท', nameE:'บริษัท', con1:'1', con2:'', con3:''},
        {lovType:'CONTRACT_STATUS', value:'00', nameT:'เรียบร้อย', nameE:'เรียบร้อย', con1:'1', con2:'', con3:''},
        {lovType:'CONTRACT_STATUS', value:'01', nameT:'อยู่ระหว่างดำเนินการร่างสัญญา', nameE:'อยู่ระหว่างดำเนินการร่างสัญญา', con1:'1', con2:'', con3:''},
        {lovType:'CONTRACT_STATUS', value:'1001', nameT:'ตลาดต่างประเทศ', nameE:'ตลาดต่างประเทศ', con1:'1', con2:'', con3:''},
    ];
    
    return (
        <>
            <div className='d-flex flex-column' style={{width: '100%'}}>
            <div className="breadcrumb-zone fz-20">Master Data {'>'} <span className="bread-crumb-page-name"><b>List of Value</b></span></div>
                    <div className='search-wrapper-section d-flex flex-column'>
                        <div className="d-flex flex-row justify-content-around">
                            <div className="d-flex flex-column">
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                <div className="box">
                                    <b>Lov Type:</b>
                                </div>
                                <div className="box">
                                    <div className="filter-field">
                                        <input type="text" className="form-control" placeholder="" id="filterOverall" />
                                    </div>
                                </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                <div className="box">
                                    <b>Name:</b>
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
                                        <b>Value:</b>
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
                    <Table data={data}/>
                </div>
        </>
    )
}