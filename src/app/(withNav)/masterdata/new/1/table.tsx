import React from 'react';
import "@components/Report-temp/report-temp.scss";
import { useParams, useRouter } from "next/navigation";
import Popup from '../2/2.1/popup';
import { useState } from "react";

const Table = ({data}:any) => {
    const router = useRouter();
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
      };
  return (
    <div className='search-wrapper-section d-flex flex-column'>
        <div className="table-container mb-20">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>
                            <div className="wd-50 d-flex justify-content-center align-items-center">ลำดับ</div>
                        </th>
                        <th>
                            <div className="wd-50 d-flex justify-content-center align-items-center">แก้ไข</div>
                        </th>
                        <th>
                            <div className="wd-100 d-flex justify-content-center align-items-center">Code</div>
                            </th>
                        <th>
                            <div className="wd-200 d-flex justify-content-center align-items-center">Name</div>
                        </th>
                        <th>
                            <div className="wd-180 d-flex justify-content-center align-items-center">Value</div>
                        </th>
                        <th>
                            <div className="wd-300 d-flex justify-content-center align-items-center">Description(Thai)</div>
                        </th>
                        <th>
                            <div className="wd-300 d-flex justify-content-center align-items-center">Description(English)</div>
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
                            </div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">{items.code}</div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">{items.name}</div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">{items.value}</div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-left align-items-center">{items.desT}</div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-left align-items-center">{items.desE}</div>
                        </th>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        <Popup isOpen={isPopupOpen} onClose={togglePopup} />
    </div>
    
  );
};

export default Table;
