import React from 'react';
import "@components/Report-temp/report-temp.scss";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import Popup from './popup';
import Popup2 from './popup2';

const Table = ({data}:any) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
      };

      const [isPopupOpen2, setIsPopupOpen2] = useState(false);
      const togglePopup2 = () => {
          setIsPopupOpen2(!isPopupOpen2);
        };
        
  return (
    <div className='search-wrapper-section d-flex flex-column'>
        <div className="table-container mb-20">
            <table className="table">
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
                            <div className="wd-200 d-flex justify-content-center align-items-center">หัวข้อ</div>
                        </th>
                        <th>
                            <div className="wd-1050 d-flex justify-content-center align-items-center">คำนิยาม</div>
                        </th>         
                    </tr>
                </thead>
                <tbody>
                {data.map((items: any, index:any) => (
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
                                <button className="open-button icon-button bi bi-trash" onClick={togglePopup2}></button>
                                <Popup2 isOpen={isPopupOpen2} onClose={togglePopup2}/>
                            </div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-left align-items-center">{items.title}</div>
                        </th>
                        <th>
                            <div className="d-flex flex-column">
                                <div className="normalText d-flex justify-content-left align-items-center">{items.definition.definition1}</div>
                                <div className="normalText d-flex justify-content-left align-items-center">{items.definition.definition2}</div>
                                <div className="normalText d-flex justify-content-left align-items-center">{items.definition.definition3}</div>
                            </div>
                        </th>
                </tr>
                ))}
                </tbody>
            </table>
        </div>
    </div>
    
  );
};

export default Table;
