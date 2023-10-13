import React from 'react';
import "@components/Report-temp/report-temp.scss";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import Popup from './10.1/popup';

const Table = ({data}:any) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
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
                            <div className="wd-80 d-flex justify-content-center align-items-center">แก้ไข</div>
                        </th>
                        <th>
                            <div className="wd-50 d-flex justify-content-center align-items-center">เพิ่มรายละเอียด</div>
                        </th>
                        <th>
                            <div className="wd-120 d-flex flex-column justify-content-center align-items-center">
                                <div>รหัสแผน</div>
                            </div>
                        </th>
                        <th>
                            <div className="wd-120 d-flex flex-column justify-content-center align-items-center">
                                <div>ชื่อแผน(TH)</div>
                            </div>
                        </th>
                        <th>
                            <div className="wd-140 d-flex justify-content-center align-items-center">
                                <div>ชื่อแผน(EN)</div>
                            </div>
                        </th>
                        <th>
                            <div className="wd-125 d-flex justify-content-center align-items-center">
                                <div>รายละเอียด</div>
                            </div>
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
                                <button className="open-button icon-button bi bi-pencil" onClick={togglePopup}></button>
                                <Popup isOpen={isPopupOpen} onClose={togglePopup}/>
                            </div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">
                                <button className="open-button icon-button bi bi-file-earmark-text-fill" onClick={() => router.push('/masterdata/new/10/10.1/10.1.1')}></button>
                                
                            </div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">{items.code}</div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">{items.nameT}</div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">{items.nameE}</div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-left align-items-center">{items.description}</div>
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
