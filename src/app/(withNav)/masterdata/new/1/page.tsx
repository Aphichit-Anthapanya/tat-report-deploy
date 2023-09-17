"use client";

import React from "react";
import { useState } from "react";
import "@components/Report-temp/report-temp.scss";
import Table from './table';
import { useParams, useRouter } from "next/navigation";
import Popup from '../2/2.1/popup';


export default function Page() {
    const data = [
        {code: '10001', name:'APP_MENU_ICON', value:'fa fa-bars', desT:'Default application menu icon css class', desE:'Default application menu icon css class'},
        {code: '10002', name:'IDLE_MONITOR_TIME', value:'120000', desT:'Primefaces idel monitring time (in milisecond)', desE:'Primefaces idel monitring time (in milisecond)'},
        {code: '10003', name:'DEFAULT_CHAR_PER_PIXEL', value:'8', desT:'Default maximum charector per pixel width', desE:'Default maximum charector per pixel width'},
        {code: '10004', name:'DEFAULT_ROW_PER_PAGE', value:'10, 50, 100, 200, 500', desT:'Default primefaces row per page', desE:'Default primefaces row per page'},
        {code: '10005', name:'DATA_TABLE_SPACE_IN_PIXEL', value:'21', desT:'The table spaceing in Primefaces data table', desE:'The table spaceing in Primefaces data table'},
        {code: '10006', name:'SCREEN_SCOLLBAR_IN_PIXEL', value:'28', desT:'The table spaceing in Primefaces data table', desE:'	The scollbar spaceing in browser'},
        {code: '10007', name:'SCREEN_SCOLLBAR_IN_PIXEL', value:'14', desT:'The no scollbar spaceing in browser', desE:'The no scollbar spaceing in browser'},
        {code: '10008', name:'DATA_TABLE_MAX_COLUMN_VALUE_LENGTH', value:'300', desT:'ขนาดข้อความสำหรับแสดงผลในตาราง กรณีแสดงในรูปแบบ frozenColumns (Pixel)', desE:'ขนาดข้อความสำหรับแสดงผลในตาราง กรณีแสดงในรูปแบบ frozenColumns (Pixel)'},
        {code: '10126', name:'RE2008_REPORT_NAME', value:'RE2004', desT:'RE2002', desE:'RE2002'},
        {code: '11000', name:'UPLOAD_FILE_PATH', value:'E:\JavaServer\UPLOAD', desT:'Upload file on server path', desE:'Upload file on server path'},
    ];

    
    return (
        <>
            <div className='d-flex flex-column' style={{width: '100%'}}>
            <div className="breadcrumb-zone fz-20">Master Data {'>'} <span className="bread-crumb-page-name"><b>Parameter</b></span></div>
                    <div className='search-wrapper-section d-flex flex-column'>
                        <div className="d-flex flex-row justify-content-around">
                            <div className="d-flex flex-column">
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                <div className="box">
                                    <b>Code:</b>
                                </div>
                                <div className="box">
                                    <div className="filter-field">
                                        <input type="text" className="form-control" placeholder="" id="filterOverall" />
                                    </div>
                                </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                <div className="box">
                                    <b>Description:</b>
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
                                        <b>Name:</b>
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
                            <div className="p-2"><button className="btn btn-primary">Reload Cache</button></div>
                        </div>    
                    </div>
                    <Table data={data}/>
                </div>
        </>
    )
}