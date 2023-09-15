import React from 'react';
import "@components/Report-temp/report-temp.scss";
import {useNavigate} from 'react-router-dom';
import Popup2 from './popup2';
import { useState } from "react";
import { BrowserRouter } from 'react-router-dom';

const Table = ({data}:any) => {
    const [x, setX] = useState([]);
    const [dataToSends, setdata] = useState([{}]);
    const [isPopupOpen2, setIsPopupOpen2] = useState(false);
    const togglePopup2 = () => {
        setIsPopupOpen2(!isPopupOpen2);
      };
      const navigate = useNavigate();
      var dataToSend = [{ userGroup: '', note: '' }];
        const handleClick = (items :any) => {
            if (items.userGroup === 'บุคลากรและลูกจ้างของททท.') {
                dataToSend = [
                    { userGroup: '', note: '' }
                ],
                setdata(dataToSend),
                navigate('/masterdata/new/11/11.1', {replace: true, state: {dataToSend} })
                window.location.reload()
            } else if (items.userGroup === 'ลูกค้า/ผู้ใช้บริการ') {
                dataToSend = [
                    { userGroup: 'นักท่องเที่ยวชาวไทย', note: '' },
                    { userGroup: 'นักท่องเที่ยวชาวต่างชาติ', note: '' }
                ],
                navigate('/masterdata/new/11/11.1', {replace: true, state: {dataToSend} })
                window.location.reload()
            } else if (items.userGroup === 'หน่วยงานกำกับดูแล/ผู้ถือหุ้นภาครัฐ') {
                dataToSend = [
                    { userGroup: 'กระทรวงการคลัง.', note: '' },
                    { userGroup: 'สำนักงานคณะกรรมการนโยบายรัฐวิสหากิจ', note: '' },
                    { userGroup: 'กระทรวงการท่องเที่ยวและกีฬา', note: '' },
                    { userGroup: 'สำนักงานการตรวจเงินแผ่นดิน', note: '' }
                ],
                navigate('/masterdata/new/11/11.1', {replace: true, state: {dataToSend} })
                window.location.reload()
            } else if (items.userGroup === 'คู่ค้า') {
                dataToSend = [
                    { userGroup: 'ธุรกิจนำเที่ยว', note: '' },
                    { userGroup: 'Online Travel Agency (ต่างประเทศและในประเทศ)', note: '' },
                    { userGroup: 'ธุรกิจโรงแรมที่พัก', note: '' },
                    { userGroup: 'ธุรกิจขนส่ง', note: '' },
                    { userGroup: 'แหล่งท่องเที่ยว/สถานประกอบการ/ชุมชนเจ้าของแหล่งท่องเที่ยว', note: '' },
                    { userGroup: 'อื่นๆ', note: '' }
                ],
                navigate('/masterdata/new/11/11.1', {replace: true, state: {dataToSend} })
                window.location.reload()
            } else if (items.userGroup === 'ผู้ส่งมอบ') {
                dataToSend = [
                    { userGroup: 'ผู้ส่งมอบภาครัฐ.', note: '' },
                    { userGroup: 'ผู้ส่งมอบภาคเอกชน', note: '' },
                ],
                navigate('/masterdata/new/11/11.1', {replace: true, state: {dataToSend} })
                window.location.reload()
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
                navigate('/masterdata/new/11/11.1', {replace: true, state: {dataToSend} })
                window.location.reload()
            } else {
                navigate('/masterdata/new/11/11.1', {replace: true, state: {dataToSend} })
            }
        }
      
  return (
        <div className="d-flex flex-row mb-50">
            <div><button className="btn btn-primary" onClick={() => navigate('/masterdata/new/11/11.1')}>องค์ประกอบ</button></div>
            <div><button className="btn btn-secondary" onClick={() => navigate('/masterdata/new/11/11.2')}>ประเด็นที่เกี่ยวข้อง</button></div>
        </div>
  );
};

export default Table;


