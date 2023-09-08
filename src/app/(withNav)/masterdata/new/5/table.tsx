import React from 'react';
import "@components/Report-temp/report-temp.scss";
import { useParams, useRouter } from "next/navigation";
import Popup from './5.1/popup';
import Popup2 from './5.1/popup2';
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
                            <div className="wd-80 d-flex justify-content-center align-items-center">ลำดับที่</div>
                        </th>
                        <th>
                            <div className="wd-50 d-flex justify-content-center align-items-center">แก้ไข</div>
                        </th>
                        <th>
                            <div className="wd-50 d-flex justify-content-center align-items-center">ลบ</div>
                        </th>
                        <th>
                            <div className="wd-100 d-flex justify-content-center align-items-center">Service Area ID</div>
                            </th>
                        <th>
                            <div className="wd-100 d-flex justify-content-center align-items-center">Service Area Type</div>
                        </th>
                        <th>
                            <div className="wd-300 d-flex justify-content-center align-items-center">Service Area Name(TH)</div>
                        </th>
                        <th>
                            <div className="wd-300 d-flex justify-content-center align-items-center">Service Area Name(EN)</div>
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
                            <div className="normalText d-flex justify-content-center align-items-center">{items.SAI}</div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">{items.SAT}</div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-left align-items-center">{items.SANTH}</div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-left align-items-center">{items.SANEN}</div>
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
