import React from 'react';
import "@components/Report-temp/report-temp.scss";
import { useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import Router from 'next/router'
import { Link } from 'react-router-dom';
import { useParams, useRouter } from "next/navigation";
import Popup2 from './11.1/popup2';
import InfoTable from './infoTable'
const Table = ({data}:any) => {
    const [isPopupOpen2, setIsPopupOpen2] = useState(false);
    const togglePopup2 = () => {
        setIsPopupOpen2(!isPopupOpen2);
      };
      const router = useRouter()
      
      
  return (
    <>
    <div className='section-info d-flex flex-column'>
        <div className="table-container mb-20">
            <table className="table">
                <thead>
                    <tr className='table-primary'>
                        <th colSpan={6}>
                            <div className="d-flex justify-content-center align-items-center">กลุ่มผู้มีส่วนได้ส่วนเสีย (Stakeholder Group)</div>
                        </th>
                    </tr>
                    <tr className='table-primary'>
                    <th>
                            <div className="wd-50 d-flex justify-content-center align-items-center">ลำดับ</div>
                        </th>
                        <th>
                            <div className="wd-50 d-flex justify-content-center align-items-center">แก้ไข</div>
                        </th>
                        <th>
                            <div className="wd-50 d-flex justify-content-center align-items-center">ลบ</div>
                        </th>
                        <th>
                            <div className="wd-80 d-flex justify-content-center align-items-center">รายละเอียด</div>
                        </th>
                        <th>
                            <div className="wd-700 d-flex justify-content-center align-items-center">กลุ่มผู้มีส่วนได้ส่วนเสีย</div>
                        </th>
                        <th>
                            <div className="wd-300 d-flex justify-content-center align-items-center">หมายเหตุ</div>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <InfoTable data = {data}/>
                </tbody>
            </table>
        </div>
    </div>
    </>
    
  );
};

export default Table;