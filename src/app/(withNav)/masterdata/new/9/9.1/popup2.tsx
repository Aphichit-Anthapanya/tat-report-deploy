import React, { useState } from 'react';
import "@components/Report-temp/report-temp.scss";

const Popup = ({ isOpen, onClose }:any) => {
  return (
    <div className={`popup ${isOpen ? 'open' : ''}`}>
      <div className="popup-content d-flex flex-column justify-content-center align-items-center ">
            <h2>ยืนยันการดำเนินการ</h2>
            <div>ต้องการที่จะดำเนินการ ใช่หรือไม่ ?</div>
        <div>
        <button className="close-button mr-20" onClick={onClose}>
                <div>ยืนยัน</div>
            </button>
            <button className="close-button" onClick={onClose}>
                <div>ยกเลิก</div>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
