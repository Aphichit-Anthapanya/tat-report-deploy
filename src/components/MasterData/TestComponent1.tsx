// ParentComponent.jsx

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

const ParentComponent = () => {
  const [selectedItem, setSelectedItem] = useState<any>([]);
  const [selectedItem2, setSelectedItem2] = useState<any>([]);
  const [sectionNumber, setSectionNumber] = useState(1);
  const [savedData, setSavedData] = useState<any>([]);

  const history = useNavigate ();
  const handleChildRoute = (id:any) => {
    history(`/masterdata/new/12/${id}`);
  };

  const handleChildSection = (value: any) => {
      setSectionNumber(value);
  };

  const handleChildClick2 = (item:any) => {
    setSelectedItem2(item);
  };

  const handleChildClick = (item:any) => {
    setSelectedItem(item);
  };

  var dataToSend2 = [] as any;
  if (selectedItem2.userGroup === 'ผู้ส่งมอบภาครัฐ.') {
    dataToSend2 = [
        { userGroup: 'กระทรวงมหาดไทย', note: '' },
        { userGroup: 'กระทรวงสาธารณสุข', note: '' },
        { userGroup: 'กรมการท่องเที่ยว', note: '' },
        { userGroup: 'กระทรวงต่างประเทศ', note: '' },
        { userGroup: 'สำนักงานปลัดกระทรวงการท่องเที่ยวและกีฬา', note: '' },
        { userGroup: 'อื่นๆ', note: '' },
    ]
  } else if (selectedItem2.userGroup === 'ผู้ส่งมอบภาคเอกชน') {
      dataToSend2 = [
          { userGroup: 'สถาบันการศึกษา', note: '' },
          { userGroup: 'บริษัทวิจัย', note: '' },
          { userGroup: 'ที่ปรึกษา', note: '' },
          { userGroup: 'อื่นๆ', note: '' },
      ]
  } else if (selectedItem2.userGroup === 'สมาคมที่เกี่ยวข้องกับการท่องเที่ยว') {
      dataToSend2 = [
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
      ]
  }

  var dataToSend = [] as any;
  if (selectedItem.userGroup === 'บุคลากรและลูกจ้างของททท.') {
    dataToSend = [
        { userGroup: '', note: '' }
      ]
  } else if (selectedItem.userGroup === 'ลูกค้า/ผู้ใช้บริการ') {
      dataToSend = [
          { userGroup: 'นักท่องเที่ยวชาวไทย', note: '' },
          { userGroup: 'นักท่องเที่ยวชาวต่างชาติ', note: '' }
      ]
  } else if (selectedItem.userGroup === 'หน่วยงานกำกับดูแล/ผู้ถือหุ้นภาครัฐ') {
      dataToSend = [
          { userGroup: 'กระทรวงการคลัง.', note: '' },
          { userGroup: 'สำนักงานคณะกรรมการนโยบายรัฐวิสหากิจ', note: '' },
          { userGroup: 'กระทรวงการท่องเที่ยวและกีฬา', note: '' },
          { userGroup: 'สำนักงานการตรวจเงินแผ่นดิน', note: '' }
      ]
  } else if (selectedItem.userGroup === 'คู่ค้า') {
      dataToSend = [
          { userGroup: 'ธุรกิจนำเที่ยว', note: '' },
          { userGroup: 'Online Travel Agency (ต่างประเทศและในประเทศ)', note: '' },
          { userGroup: 'ธุรกิจโรงแรมที่พัก', note: '' },
          { userGroup: 'ธุรกิจขนส่ง', note: '' },
          { userGroup: 'แหล่งท่องเที่ยว/สถานประกอบการ/ชุมชนเจ้าของแหล่งท่องเที่ยว', note: '' },
          { userGroup: 'อื่นๆ', note: '' }
      ]
  } else if (selectedItem.userGroup === 'ผู้ส่งมอบ') {
      dataToSend = [
          { userGroup: 'ผู้ส่งมอบภาครัฐ.', note: '' },
          { userGroup: 'ผู้ส่งมอบภาคเอกชน', note: '' },
      ]
  } else if (selectedItem.userGroup === 'คู่ความร่วมมือ') {
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
      ]
  }

  const inputData = [
        { userGroup: 'บุคลากรและลูกจ้างของททท.', note: '' },
        { userGroup: 'ลูกค้า/ผู้ใช้บริการ', note: '' },
        { userGroup: 'หน่วยงานกำกับดูแล/ผู้ถือหุ้นภาครัฐ', note: '' },
        { userGroup: 'คู่ค้า', note: '' },
        { userGroup: 'ผู้ส่งมอบ', note: '' },
        { userGroup: 'คู่ความร่วมมือ', note: '' },
  ];
  
  return (
      <div className={`form-wrapper-section`}>
        {sectionNumber === 1 && (
          <div>
            <>Section Number = {sectionNumber}(1)</>
            <Page1 inputData={inputData} handleClick={handleChildClick} handleSection={handleChildSection} handleRoute= {handleChildRoute}/>
            
          </div>
        )}
        {sectionNumber === 2 && (
          <div>
            <>Section Number = {sectionNumber}(2)</>
            <Page2 inputData={dataToSend} handleClick={handleChildClick2} handleSection={handleChildSection} handleRoute= {handleChildRoute}/>  
          </div>
        )}
        {sectionNumber === 3 && (
          <div>
            <>Section Number = {sectionNumber}(3)</>
            <Page3 inputData={dataToSend2} handleClick={handleChildClick} handleSection={handleChildSection} handleRoute= {handleChildRoute}/>
          </div>  
        )}
      </div>
  );
}
export default ParentComponent;
