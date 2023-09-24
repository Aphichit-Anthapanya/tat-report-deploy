import React from 'react';
import "@components/Report-temp/report-temp.scss";
import { useParams, useRouter } from "next/navigation";
import Popup2 from './popup2';
import { useState } from "react";

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
            <table className="table table-striped">
                <thead>
                    <tr className='table-primary'>
                        <th>
                            <div className="wd-50 d-flex justify-content-center align-items-center">ลำดับ</div>
                        </th>
                        <th>
                            <div className="wd-50 d-flex justify-content-center align-items-center">ลบ</div>
                        </th>
                        <th>
                            <div className="wd-300 d-flex justify-content-center align-items-center">ชื่อเมนู(ไทย)</div>
                        </th>
                        <th>
                            <div className="wd-300 d-flex justify-content-center align-items-center">ชื่อเมนู(อังกฤษ)</div>
                        </th>
                        <th>
                            <div className="wd-100 d-flex justify-content-center align-items-center">วันที่สร้าง</div>
                        </th>
                    </tr>
                </thead>
                
                <tbody>
                {data.map((items: any, index: number) => (
                    <tr>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">{index+1}</div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">
                                <button className="open-button icon-button bi bi-trash" onClick={togglePopup2}></button>
                                <Popup2 isOpen={isPopupOpen2} onClose={togglePopup2}/>
                            </div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-left align-items-center">{items.menuT}</div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-left align-items-center">{items.menuE}</div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">{items.createDate}</div>
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
