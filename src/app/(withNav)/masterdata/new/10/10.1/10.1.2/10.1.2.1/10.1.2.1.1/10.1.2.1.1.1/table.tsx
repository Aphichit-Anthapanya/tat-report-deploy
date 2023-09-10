import React from 'react';
import "@components/Report-temp/report-temp.scss";
import { useParams, useRouter } from "next/navigation";
import Popup from './popup';
import Popup2 from './popup2';
import { useState } from "react";

const Table = ({data}:any) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
      };

    const [isPopupOpen2, setIsPopupOpen2] = useState(false);
    const togglePopup2 = () => {
        setIsPopupOpen2(!isPopupOpen2);
      };

      const router = useRouter()
  return (
    <>
    <div className='section-info d-flex flex-column'>
        <div className="table-container mb-20">
                        <table className="table table-striped">
                                <thead>
                                    <tr className='table-primary bt-border'>
                                        <th colSpan={6}>
                                            <div className="d-flex justify-content-center align-items-center">ข้อมูลชื่อแผนงาน</div>
                                        </th>
                                    </tr>
                                    <tr className='table-primary'>
                                        <th>
                                            <div className="wd-50 d-flex justify-content-center align-items-center">ลำดับที่</div>
                                        </th>
                                        <th>
                                            <div className="wd-80 d-flex justify-content-center align-items-center">แก้ไข</div>
                                        </th>
                                        <th>
                                            <div className="wd-50 d-flex justify-content-center align-items-center">ลบ</div>
                                        </th>
                                        <th>
                                            <div className="wd-100 d-flex justify-content-center align-items-center">ปีงบประมาณ</div>
                                        </th>
                                        <th>
                                            <div className="wd-300 d-flex justify-content-center align-items-center">ชื่อโครงการหลัก(TH)</div>
                                        </th>
                                        <th>
                                            <div className="wd-300 d-flex justify-content-center align-items-center">ชื่อโครงการหลัก(EN)</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th colSpan={6}>
                                            <div className="normalText colorR d-flex justify-content-center align-items-center">ไม่พบรายการข้อมูล</div>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
        </div>
    </div>
    </>
    
  );
};

export default Table;
