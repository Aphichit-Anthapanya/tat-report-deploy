import React from 'react';
import "@components/Report-temp/report-temp.scss";
import { useParams, useRouter } from "next/navigation";
import Popup from './2.1/popup';
import { useState } from "react";

const Table = ({data}:any) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
      };
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
                            <div className="wd-100 d-flex justify-content-center align-items-center">Lov Type</div>
                            </th>
                        <th>
                            <div className="wd-50 d-flex justify-content-center align-items-center">Value</div>
                        </th>
                        <th>
                            <div className="wd-300 d-flex justify-content-center align-items-center">Name(TH)</div>
                        </th>
                        <th>
                            <div className="wd-300 d-flex justify-content-center align-items-center">Name(EN)</div>
                        </th>
                        <th>
                            <div className="wd-100 d-flex justify-content-center align-items-center">Condition 1</div>
                        </th>
                        <th>
                            <div className="wd-100 d-flex justify-content-center align-items-center">Condition 2</div>
                        </th> 
                        <th>
                            <div className="wd-100 d-flex justify-content-center align-items-center">Condition 3</div>
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
                            <div className="normalText d-flex justify-content-center align-items-center">{items.lovType}</div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">{items.value}</div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-left align-items-center">{items.nameT}</div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-left align-items-center">{items.nameE}</div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">{items.con1}</div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">{items.con2}</div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">{items.con3}</div>
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
