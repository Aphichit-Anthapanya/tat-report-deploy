"use client";

import React from "react";
import { useState } from "react";
import "@components/Report-temp/report-temp.scss";
import { useParams, useRouter } from "next/navigation";
import Popup2 from './popup2';
import Table from "./table";
import { Tab } from "react-bootstrap";

export default function Page() {
    const router = useRouter()

    const [isPopupOpen2, setIsPopupOpen2] = useState(false);
    const togglePopup2 = () => {
        setIsPopupOpen2(!isPopupOpen2);
      };
      const dataToSend = [
        { userGroup: '', note: '' },
        { userGroup: '', note: '' }
    ]
    return (
        <>
            <div className='d-flex flex-column' style={{width: '100%'}}>
            <div className="breadcrumb-zone fz-20">Master Data {'>'} <span className="bread-crumb-page-name"><b>กลุ่มผู้มีส่วนได้ส่วนเสีย</b></span></div>

                    <div className="d-flex filter-project-button justify-content-right">
                        <div className="p-2"><button className="btn btn-primary" >ย้อนกลับ</button></div>
                        <div className="p-2"><button className="btn btn-primary">Submit</button></div>
                    </div>
                    <div className='search-wrapper-section d-flex flex-column'>
                        <h2>กลุ่มผู้มีส่วนได้ส่วนเสีย</h2>
                    </div>
                    <div className='search-wrapper-section d-flex flex-column'>
                        <div className="d-flex flex-row mb-50">
                            <div><button className="btn btn-primary" onClick={() => router.push('/masterdata/new/11/11.1')}>องค์ประกอบ</button></div>
                            <div><button className="btn btn-secondary" onClick={() => router.push('/masterdata/new/11/11.2')}>ประเด็นที่เกี่ยวข้อง</button></div>
                        </div>

                        <div className="d-flex filter-project-button justify-content-left">
                            <div className="p-2"><button className="btn btn-primary">เพิ่มข้อมูล</button></div>
                        </div>
                        <Table data={dataToSend}/>
                    </div>
                    <div className="d-flex filter-project-button justify-content-right">
                        <div className="p-2"><button className="btn btn-primary" >ย้อนกลับ</button></div>
                        <div className="p-2"><button className="btn btn-primary">Submit</button></div>
                    </div>
            </div>
            
        </>
    )
}