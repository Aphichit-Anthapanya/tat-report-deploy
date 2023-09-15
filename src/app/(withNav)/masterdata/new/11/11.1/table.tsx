import React from 'react';
import "@components/Report-temp/report-temp.scss";
import { useParams, useRouter } from "next/navigation";
import Popup2 from './popup2';
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
      const router = useRouter();
      const navigate = useNavigate();
      var dataToSend = [{ userGroup: '', note: '' },] as any;
        const handleClick = (items :any) => {
            
            if (items.userGroup === 'ผู้ส่งมอบภาครัฐ.') {
                dataToSend = [
                    { userGroup: 'กระทรวงมหาดไทย', note: '' },
                    { userGroup: 'กระทรวงสาธารณสุข', note: '' },
                    { userGroup: 'กรมการท่องเที่ยว', note: '' },
                    { userGroup: 'กระทรวงต่างประเทศ', note: '' },
                    { userGroup: 'สำนักงานปลัดกระทรวงการท่องเที่ยวและกีฬา', note: '' },
                    { userGroup: 'อื่นๆ', note: '' },
                ],
                setdataTokeep(data),
                navigate('/masterdata/new/11/11.1/11.1.1', {replace: true, state: {dataToSend},  })
                window.location.reload()
            } else if (items.userGroup === 'ผู้ส่งมอบภาคเอกชน') {
                dataToSend = [
                    { userGroup: 'สถาบันการศึกษา', note: '' },
                    { userGroup: 'บริษัทวิจัย', note: '' },
                    { userGroup: 'ที่ปรึกษา', note: '' },
                    { userGroup: 'อื่นๆ', note: '' },
                ],
                navigate('/masterdata/new/11/11.1/11.1.1', {replace: true, state: {dataToSend} })
                window.location.reload()
            } else if (items.userGroup === 'สมาคมที่เกี่ยวข้องกับการท่องเที่ยว') {
                dataToSend = [
                    { userGroup: 'สมาคมมัคคุเทศก์อาชีพแห่งประเทศไทย', note: '' },
                    { userGroup: 'สมาคมโรงแรมไทย', note: '' },
                    { userGroup: 'สมาคมภัตตาคารไทย', note: '' },
                    { userGroup: 'สมาคมผู้ประกอบการร้านค้า', note: '' },
                    { userGroup: 'สมาคมผู้ประกอบการนำเที่ยวไทย', note: '' },
                    { userGroup: 'สภาหอการค้าไทย', note: '' },
                    { userGroup: 'สภาอุตสาหกรรมท่องเที่ยวแห่งประเทศไทย', note: '' },
                    { userGroup: 'สมาคมผู้ค้าปลีกไทย', note: '' },
                    { userGroup: 'สมาคมธุรกิจท่องเที่ยวภายในประเทศ', note: '' },
                    { userGroup: 'สมาคมไทยธุรกิจการท่องเที่ยว (Association of Thai Travel Agents: ATTA)', note: '' },
                    { userGroup: 'สมาคมส่งเสริมการท่องเที่ยวภูมิภาคเอเชียและแปซิฟิก (Pacific Asia Travel Association: PATA)', note: '' },
                    { userGroup: 'สมาคมไทยท่องเที่ยวอย่างรับผิดชอบ', note: '' },
                    { userGroup: 'อื่น', note: '' },
                ],
                navigate('/masterdata/new/11/11.1/11.1.1', {replace: true, state: {dataToSend} })
                window.location.reload()
            }
        }   
        
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
                            <div className="wd-100 d-flex justify-content-center align-items-center">รายละเอียด</div>
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
                                <Popup2 isOpen={isPopupOpen2} onClose={togglePopup2}/>
                            </div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">
                                <button className="open-button icon-button bi bi-file-earmark-text-fill" onClick={() => handleClick(items)}></button>
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
