import React from 'react';
import "@components/Report-temp/report-temp.scss";
import { useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import Router from 'next/router'
import { Link } from 'react-router-dom';
import { useParams, useRouter } from "next/navigation";
import Popup2 from './popup2';

const Table = ({data}:any) => {
    const [isPopupOpen2, setIsPopupOpen2] = useState(false);
    const togglePopup2 = () => {
        setIsPopupOpen2(!isPopupOpen2);
      };
      const router = useRouter()
      var dataToSend = [{ userGroup: '', note: '' }];
        const handleClick = (items :any) => {
            if (items.userGroup === 'สมาคมที่เกี่ยวข้องกับการท่องเที่ยว') {
                console.log('checked')
                router.push('/masterdata/new/11/11.1/11.1.1');
            }
        }
      
  return (
    <>
    <div className='section-info d-flex flex-column'>
        <div className="table-container mb-20">
            <table className="table table-striped">
                <thead>
                    <tr className='table-primary'>
                        <th colSpan={5}>
                            <div className="d-flex justify-content-center align-items-center">กลุ่มผู้มีส่วนได้ส่วนเสีย (Stakeholder Group)</div>
                        </th>
                    </tr>
                    <tr className='table-primary'>
                        <th>
                            <div className="wd-50 d-flex justify-content-center align-items-center">แก้ไข</div>
                        </th>
                        <th>
                            <div className="wd-50 d-flex justify-content-center align-items-center">ลบ</div>
                        </th>
                        <th>
                            <div className="wd-50 d-flex justify-content-center align-items-center">รายละเอียด</div>
                        </th>
                        <th>
                            <div className="wd-300 d-flex justify-content-center align-items-center">กลุ่มผู้มีส่วนได้ส่วนเสีย</div>
                        </th>
                        <th>
                            <div className="wd-300 d-flex justify-content-center align-items-center">หมายเหตุ</div>
                        </th>
                    </tr>
                </thead>
                
                <tbody>
                {data.map((items: any, index : any) => (
                    <tr>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">
                                <button className="open-button icon-button bi bi-pencil"></button>
                            </div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">
                                <button className="open-button icon-button bi bi-trash" onClick={togglePopup2}></button>
                                <Popup2 isOpen={isPopupOpen2} onClose={togglePopup2}/>
                            </div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">
                                <button className="open-button icon-button bi bi-file-earmark-text-fill" onClick={() => handleClick(items)}></button>
                            </div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-left align-items-center">{items.userGroup}</div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">{items.note}</div>
                        </th>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </div>
    </>
    
  );
};

export default Table;