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
                                        <th colSpan={8}>
                                            <div className="d-flex justify-content-center align-items-center">ข้อมูลกลยุทธ์ภาพรวม</div>
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
                                            <div className="wd-80 d-flex flex-column justify-content-center align-items-center">
                                                <div>ข้อมูลชื่อ</div>
                                                <div>แผนงาน</div>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="wd-300 d-flex justify-content-center align-items-center">ชื่อกลยุทธ์รายภูมิภาค(TH)</div>
                                        </th>
                                        <th>
                                            <div className="wd-300 d-flex justify-content-center align-items-center">ชื่อกลยุทธ์รายภูมิภาค(EN)</div>
                                        </th>
                                        <th>
                                            <div className="wd-300 d-flex justify-content-center align-items-center">รายละเอียด</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                {data.map((items: any) => (
                                    <tr>
                                        <th>
                                            <div className="normalText d-flex justify-content-center align-items-center">{items.number}</div>
                                        </th>
                                        <th>
                                            <div className="normalText d-flex justify-content-center align-items-center">
                                                <button className="open-button icon-button bi bi-pencil" onClick={togglePopup}></button>
                                                <Popup isOpen={isPopupOpen} onClose={togglePopup}/>
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
                                                <button className="open-button icon-button bi bi-file-earmark-text-fill" onClick={() => router.push('/masterdata/new/10/10.1/10.1.2/10.1.2.1/10.1.2.1.1')}></button>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="normalText d-flex justify-content-left align-items-center">{items.nameT}</div>
                                        </th>
                                        <th>
                                            <div className="normalText d-flex justify-content-left align-items-center">{items.nameE}</div>
                                        </th>
                                        <th>
                                            <div className="normalText d-flex justify-content-center align-items-center">{items.description}</div>
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
