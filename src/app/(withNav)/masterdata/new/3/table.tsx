import React from 'react';
import "@components/Report-temp/report-temp.scss";
import { useParams, useRouter } from "next/navigation";
import Popup from './3.1/page';
import Popup2 from './3.1/popup2';
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
    <div className='search-wrapper-section d-flex flex-column'>
        <div className="table-container mb-20">
            <table className="table table-striped">
                <thead>
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
                            <div className="wd-100 d-flex justify-content-center align-items-center">ชื่อผู้ใช้งาน</div>
                            </th>
                        <th>
                            <div className="wd-50 d-flex justify-content-center align-items-center">ชื่อ</div>
                        </th>
                        <th>
                            <div className="wd-300 d-flex justify-content-center align-items-center">นามสกุล</div>
                        </th>
                        <th>
                            <div className="wd-80 d-flex justify-content-center align-items-center">สถานะ</div>
                        </th>
                        <th>
                            <div className="wd-140 d-flex justify-content-center align-items-center">เบอร์โทรศัพท์</div>
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
                                <button className="open-button icon-button bi bi-pencil" onClick={() => router.push('/masterdata/new/3/3.1')}></button>
                            </div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">
                                <button className="open-button icon-button bi bi-trash" onClick={togglePopup2}></button>
                                <Popup2 isOpen={isPopupOpen2} onClose={togglePopup2}/>
                            </div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">{items.uname}</div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-left align-items-center">{items.fname}</div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-left align-items-center">{items.lname}</div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">{items.status}</div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">{items.phnumber}</div>
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
