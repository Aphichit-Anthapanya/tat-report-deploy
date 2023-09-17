"use client";

import React from "react";
import { useState } from "react";
import "@components/Report-temp/report-temp.scss";
import { useParams, useRouter } from "next/navigation";
import Table from './table';

export default function Page() {
    const data = [
        {code: '10001', nameT: 'ตลาดต่างประเทศ', nameE:'International markets', description:'ตลาดต่างประเทศ'},
        {code: '10002', nameT: 'ตลาดในประเทศ', nameE:'Support the operation of the market.', description:'ตลาดในประเทศ'},
        {code: '10003', nameT: 'สนับสนุนการดำเนินงานด้านการตลาด', nameE:'Support the operation of the market.', description:'สนับสนุนการดำเนินงานด้านการตลาด'},
    ];
    
    return (
        <>
            <div className='d-flex flex-column' style={{width: '100%'}}>
                <div className="breadcrumb-zone fz-20">Master Data {'>'} <span className="bread-crumb-page-name"><b>Master Plan</b></span></div>
                    <Table data={data}/>
                </div>
        </>
    )
}