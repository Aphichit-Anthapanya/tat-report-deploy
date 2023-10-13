"use client";

import React from "react";
import { useState } from "react";
import "@components/Report-temp/report-temp.scss";
import SearchZone from "./searchZone";
import ExportExcelButton from "@/app/(withNav)/test-function/exportxls/copy";
import Popup from './popup';
import Table from './table';

export default function Page() {
    const data = [
        {
            info:[
                {
                    number: '1', 
                    activityName: 'เทศกาลเที่ยวเมืองไทย', 
                    purchasement: 'ปรับปรุงห้องประชุมระดับฝ่ายและโถงลิฟท์ ชั้น 4, 6, 8 และ 14',
                    department:[
                        {
                            fullName: 'งานสถาปัตยกรรม',
                            shortName: 'กอส.'
                        }
                    ],
                    budget:'6,969,000.00',
                    actionPlan: [
                        {
                            step1: {
                                    SEDate: '(01/09/2564 - 30/09/2564)',
                                    october: 'bg-info',
                                    november: '',
                                    december: '',
                                    january: '',
                                    february: '',
                                    march: '',
                                    april: '',
                                    may: '',
                                    june: '',
                                    july: '',
                                    august: '',
                                    september: ''
                            },
                            step2: {
                                SEDate: '(15/09/2564 - 30/09/2564)',
                                october: '',
                                november: 'bg-info',
                                december: 'bg-info',
                                january: '',
                                february: '',
                                march: '',
                                april: '',
                                may: '',
                                june: '',
                                july: '',
                                august: '',
                                september: ''
                            },
                            step3: {
                                SEDate: '(01/10/2564 - 31/12/2564)',
                                october: '',
                                november: '',
                                december: '',
                                january: 'bg-info',
                                february: '',
                                march: '',
                                april: '',
                                may: '',
                                june: '',
                                july: '',
                                august: '',
                                september: ''
                            },
                            step4: {
                                SEDate: '(01/01/2565 - 31/01/2565)',
                                october: '',
                                november: '',
                                december: '',
                                january: '',
                                february: 'bg-info',
                                march: 'bg-info',
                                april: '',
                                may: '',
                                june: '',
                                july: '',
                                august: '',
                                september: ''
                            },
                            step5: {
                                SEDate: '(01/02/2565 - 31/08/2565)',
                                october: '',
                                november: '',
                                december: '',
                                january: '',
                                february: 'bg-info',
                                march: 'bg-info',
                                april: 'bg-info',
                                may: 'bg-info',
                                june: 'bg-info',
                                july: 'bg-info',
                                august: 'bg-info',
                                september: ''
                            },
                            step6: {
                                SEDate: '(30/09/2566 - 30/09/2566)',
                                october: '',
                                november: '',
                                december: '',
                                january: '',
                                february: '',
                                march: '',
                                april: '',
                                may: '',
                                june: '',
                                july: '',
                                august: '',
                                september: 'bg-info'
                            },
                        }
                    ]
                },
            ]  
        }
    ];

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
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
                            <button className="btn btn-primary mr-10" type="submit">
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
        </>
    )
}