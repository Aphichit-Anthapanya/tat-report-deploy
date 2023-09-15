import React from 'react';
import "@components/Report-temp/report-temp.scss";
import { useParams, useRouter } from "next/navigation";
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import {useNavigate} from 'react-router-dom';

const Table = () => {
    const [isPopupOpen2, setIsPopupOpen2] = useState(false);
    const togglePopup2 = () => {
        setIsPopupOpen2(!isPopupOpen2);
      };
      const location = useLocation();
      var data = location.state.dataToSend;
      const [dataTokeep, setdataTokeep] = useState(data);
      setdataTokeep(data)
      const router = useRouter();
        
  return (
    <>
    <div className='section-info d-flex flex-column'>
        <div className="table-container mb-20">
            <table className="table table-striped">
                <thead>
                    <tr className='table-primary'>
                        <th>
                            <div className="wd-50 d-flex justify-content-center align-items-center">แก้ไข</div>
                        </th>
                        <th>
                            <div className="wd-50 d-flex justify-content-center align-items-center">ลบ</div>
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
                {dataTokeep.map((items: any) => (
                    <tr>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">
                                <button className="open-button icon-button bi bi-pencil" onClick={() => router.push('/masterdata/new/11/11.1')}></button>
                            </div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">
                                <button className="open-button icon-button bi bi-trash" onClick={togglePopup2}></button>
                            </div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-left align-items-center">{items.userGroup}</div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-left align-items-center">{items.note}</div>
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
