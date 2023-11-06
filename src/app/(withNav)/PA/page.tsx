"use client";

import React from "react";
import { useState } from "react";
import "@components/Report-temp/report-temp.scss";
import SearchZone from "./searchZone";
import ExportExcelButton from "@/app/(withNav)/test-function/exportxls/copy";
import Popup from './popup';
import Popup2 from './popup-2';
import Popup3 from './popup-edit';
import Table from './table';

export default function Page() {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    const [isPopupOpen2, setIsPopupOpen2] = useState(false);

    const togglePopup2 = () => {
        setIsPopupOpen2(!isPopupOpen2);
    };

    const [isPopupOpen3, setIsPopupOpen3] = useState(false);

    const togglePopup3 = () => {
        setIsPopupOpen3(!isPopupOpen3);
    };
    return (
        <>
            <div className='d-flex flex-column' style={{width: '100%'}}>
                <div className="mb-10 mt-10">
                    <h2>ระบบตัวชี้วัดบันทึกการตกลง</h2>
                </div>
                <SearchZone />
                <div className="mb-10 mt-10">
                    <h2>ตารางแสดงข้อมูลรายละเอียดตัวชี้วัด</h2>
                </div>
                    <div className='section-info d-flex flex-column'>
                        <div className="d-flex justify-content-right mr-20 mb-10">
                            <button className="btn btn-primary mr-10" type="submit" onClick={togglePopup2}>
                                เอกสารบันทึกข้อตกลง
                            </button>
                            <button className="btn btn-primary" type="submit" onClick={togglePopup}>
                                เพิ่มข้อมูลตัวชี้วัด
                            </button>
                        </div>
                        <div className="mr-20 ml-20">
                            <Table/>
                        </div>
                    </div>
                </div>
                <Popup isOpen={isPopupOpen} onClose={togglePopup}/>
                <Popup2 isOpen={isPopupOpen2} onClose={togglePopup2}/>
        </>
    )
}