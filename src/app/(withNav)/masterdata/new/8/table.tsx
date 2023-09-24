import React from 'react';
import "@components/Report-temp/report-temp.scss";
import { useParams, useRouter } from "next/navigation";
import Popup from './8.1/page';
import Popup2 from './8.1/popup2';
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
                    <tr className='table-primary'>
                        <th>
                            <div className="wd-50 d-flex justify-content-center align-items-center">ลำดับที่</div>
                        </th>
                        <th>
                            <div className="wd-50 d-flex justify-content-center align-items-center">แก้ไข</div>
                        </th>
                        <th>
                            <div className="wd-50 d-flex justify-content-center align-items-center">ลบ</div>
                        </th>
                        <th>
                            <div className="wd-120 d-flex flex-column justify-content-center align-items-center">
                                <div>ชื่อแผน</div>
                            </div>
                        </th>
                        <th>
                            <div className="wd-120 d-flex flex-column justify-content-center align-items-center">
                                <div>กลุ่มข้อมูล</div>
                            </div>
                        </th>
                        <th>
                            <div className="wd-140 d-flex flex-column justify-content-center align-items-center">
                                <div>รูปแบบการ</div>
                                <div>คำนวณตัวชี้วัด</div>
                            </div>
                        </th>
                        <th>
                            <div className="wd-140 d-flex justify-content-center align-items-center">
                                <div>วิธีการคำนวณตัวชี้วัด</div>
                            </div>
                        </th>
                        <th>
                            <div className="wd-125 d-flex justify-content-center align-items-center">
                                <div>หน่วย</div>
                            </div>
                        </th>
                        <th>
                            <div className="wd-500 d-flex flex-column justify-content-center align-items-center">
                                <div>ชื่อตัวชี้วัดระดับโครงการ (Outcome)</div>
                            </div>
                        </th>
                        <th>
                            <div className="wd-140 d-flex flex-column justify-content-center align-items-center">
                                <div>หมายเหตุ</div>
                            </div>
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
                                <button className="open-button icon-button bi bi-pencil" onClick={() => router.push('/masterdata/new/8/8.1')}></button>
                            </div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">
                                <button className="open-button icon-button bi bi-trash" onClick={togglePopup2}></button>
                                <Popup2 isOpen={isPopupOpen2} onClose={togglePopup2}/>
                            </div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">{items.planName}</div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">{items.group}</div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content- align-items-center">
                                {items.type == 'รายงานผลจากรวมผลรายละเอียดย่อย' ? 
                                    <div className='d-flex flex-column'>
                                        <div>รายงานผลจากรวม</div>
                                        <div>ผลรายละเอียดย่อย</div>
                                    </div>
                                : <div>{items.type}</div>}
                            </div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">{items.calculating}</div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">
                                {items.measure == 'โครงการ/กิจกรรม' ? 
                                    <div className='d-flex flex-column'>
                                        <div>โครงการ</div>
                                        <div>/กิจกรรม</div>
                                    </div>
                                : <div>{items.measure}</div>}
                            </div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-left align-items-center">{items.indicatorsName}</div>
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
