import React from 'react';
import "@components/Report-temp/report-temp.scss";
import { useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import Router from 'next/router'
import { Link } from 'react-router-dom';
import { useParams, useRouter } from "next/navigation";
import Popup2 from './popup2';

const Table = ({data}:any) => {
    const [isPopupOpen2, setIsPopupOpen2] = useState(false);
    const togglePopup2 = () => {
        setIsPopupOpen2(!isPopupOpen2);
      };
      const router = useRouter()
      var dataToSend = [{ userGroup: '', note: '' }];
        const handleClick = (items :any) => {
            if (items.userGroup === 'บุคลากรและลูกจ้างของททท.') {
                dataToSend = [
                    { userGroup: '', note: '' }
                ],
                router.push('/masterdata/new/11/11.1');
                
            } else if (items.userGroup === 'ลูกค้า/ผู้ใช้บริการ') {
                dataToSend = [
                    { userGroup: 'นักท่องเที่ยวชาวไทย', note: '' },
                    { userGroup: 'นักท่องเที่ยวชาวต่างชาติ', note: '' }
                ],
                router.push('/masterdata/new/11/11.1');
            } else if (items.userGroup === 'หน่วยงานกำกับดูแล/ผู้ถือหุ้นภาครัฐ') {
                dataToSend = [
                    { userGroup: 'กระทรวงการคลัง.', note: '' },
                    { userGroup: 'สำนักงานคณะกรรมการนโยบายรัฐวิสหากิจ', note: '' },
                    { userGroup: 'กระทรวงการท่องเที่ยวและกีฬา', note: '' },
                    { userGroup: 'สำนักงานการตรวจเงินแผ่นดิน', note: '' }
                ],
                router.push('/masterdata/new/11/11.1');
            } else if (items.userGroup === 'คู่ค้า') {
                dataToSend = [
                    { userGroup: 'ธุรกิจนำเที่ยว', note: '' },
                    { userGroup: 'Online Travel Agency (ต่างประเทศและในประเทศ)', note: '' },
                    { userGroup: 'ธุรกิจโรงแรมที่พัก', note: '' },
                    { userGroup: 'ธุรกิจขนส่ง', note: '' },
                    { userGroup: 'แหล่งท่องเที่ยว/สถานประกอบการ/ชุมชนเจ้าของแหล่งท่องเที่ยว', note: '' },
                    { userGroup: 'อื่นๆ', note: '' }
                ],
                router.push('/masterdata/new/11/11.1');
            } else if (items.userGroup === 'ผู้ส่งมอบ') {
                dataToSend = [
                    { userGroup: 'ผู้ส่งมอบภาครัฐ.', note: '' },
                    { userGroup: 'ผู้ส่งมอบภาคเอกชน', note: '' },
                ],
                router.push('/masterdata/new/11/11.1');
            } else if (items.userGroup === 'คู่ความร่วมมือ') {
                dataToSend = [
                    { userGroup: 'องค์การบริหารการพัฒนาพื้นที่พิเศษเพื่อการท่องเที่ยวอย่างยั่งยืน', note: '' },
                    { userGroup: 'สำนักงานส่งเสริมการจัดประชุมและนิทรรศการ', note: '' },
                    { userGroup: 'สื่อมวลชนทั้ง online และ offline', note: '' },
                    { userGroup: 'บริษัทท่าอากาศยานไทยจำกัด (มหาชน)', note: '' },
                    { userGroup: 'การกีฬาแห่งประเทศไทย', note: '' },
                    { userGroup: 'สำนักงานการท่องเทียวและกีฬา', note: '' },
                    { userGroup: 'องค์การบริหารส่วนตำบล (อบต.)', note: '' },
                    { userGroup: 'องค์การบริหารส่วนจังหวัด (อบจ.)', note: '' },
                    { userGroup: 'สมาคมที่เกี่ยวข้องกับการท่องเที่ยว', note: '' }
                ],
                router.push('/masterdata/new/11/11.1');
            }
        }
      
  return (
    <>
    <div className='section-info d-flex flex-column'>
        <div className="table-container mb-20">
            <table className="table table-striped">
                <thead>
                    <tr className='table-primary'>
                        <th colSpan={5}>
                            <div className="d-flex justify-content-center align-items-center">กลุ่มผู้มีส่วนได้ส่วนเสีย (Stakeholder Group)</div>
                        </th>
                    </tr>
                    <tr className='table-primary'>
                        <th>
                            <div className="wd-50 d-flex justify-content-center align-items-center">แก้ไข</div>
                        </th>
                        <th>
                            <div className="wd-50 d-flex justify-content-center align-items-center">ลบ</div>
                        </th>
                        <th>
                            <div className="wd-300 d-flex justify-content-center align-items-center">ประเด็นที่เกี่ยวข้อง</div>
                        </th>
                        <th>
                            <div className="wd-300 d-flex justify-content-center align-items-center">หมายเหตุ</div>
                        </th>
                    </tr>
                </thead>
                
                <tbody>
                {data.map((items: any, index : any) => (
                    <tr>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">
                                <button className="open-button icon-button bi bi-pencil"></button>
                            </div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">
                                <button className="open-button icon-button bi bi-trash" onClick={togglePopup2}></button>
                                <Popup2 isOpen={isPopupOpen2} onClose={togglePopup2}/>
                            </div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-left align-items-center">{items.userGroup}</div>
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