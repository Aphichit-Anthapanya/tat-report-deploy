import React, { useState } from 'react';
import "../ball.scss";

const Popup = ({ isOpen, onClose, name, id }:any) => {
    const handleConfirm = () => {
        onClose(id, name);
      }
  return (
    <div className={`popup ${isOpen ? 'open' : ''}`}>
      <div className="d-flex flex-column justify-content-center align-items-center ">
        <div className='fz-32 mb-20'>ตัวชี้วัดจากโครงการตัวแทน</div>
            <div className='d-flex flex-row justify-content-around mr-20 ml-20 mb-20'>
                <div className="d-flex flex-row align-items-center mr-20">
                    <div className="mr-5 d-flex flex-row justify-content-right cl-black">โครงการ:</div>
                    <div>
                        <input type="text" className="form-control" placeholder="" id="filterOverall"/>
                    </div>
                </div>
                <div className="wid d-flex flex-row align-items-center mr-20 cl-black">
                    <div className="mr-5 d-flex flex-row justify-content-right">Outcome / Output:</div>
                    <div>
                        <input type="text" className="form-control" placeholder="" id="filterOverall"/>
                    </div>
                </div>
                <div className="wid d-flex flex-row align-items-center mr-20 cl-black">
                    <div className="mr-5 d-flex flex-row justify-content-right">ชื่อตัวชี้วัด:</div>
                    <div>
                        <input type="text" className="form-control" placeholder="" id="filterOverall"/>
                    </div>
                </div>
            </div>
            <div className='table-responsive sets'>
            <table className="table">
                <thead>
                <tr className='table-primary'>
                    <th colSpan={8}>
                        <div className="wd-25 d-flex justify-content-center align-items-center">ตัวชี้วัดจากโครงการตัวแทน</div>
                    </th>
                </tr>
                <tr className='table-primary'>
                    <th>
                        <div className="wd-25 d-flex justify-content-center align-items-center">เลือก</div>
                    </th>
                    <th>
                        <div className="wd-120 d-flex justify-content-center align-items-center">โครงการ</div>
                    </th>
                    <th>
                        <div className="wd-200 d-flex justify-content-center align-items-center">Outcome / Output</div>
                    </th>
                    <th>
                        <div className="wd-200 d-flex justify-content-center align-items-center">ชื่อตัวชี้วัด</div>
                    </th>
                    <th>
                        <div className="wd-200 d-flex justify-content-center align-items-center">ผลไตรมาสที่ 1</div>
                    </th>
                    <th>
                        <div className="wd-200 d-flex justify-content-center align-items-center">ผลไตรมาสที่ 2</div>
                    </th>
                    <th>
                        <div className="wd-200 d-flex justify-content-center align-items-center">ผลไตรมาสที่ 3</div>
                    </th>
                    <th>
                        <div className="wd-200 d-flex justify-content-center align-items-center">ผลไตรมาสที่ 4</div>
                    </th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>
                            <div className="form-chec d-flex justify-content-center align-items-center">
                                <input className="form-check-input" type="checkbox" id="check1" name="option1" value=""/>
                            </div>
                        </th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th>
                            <div className="form-chec d-flex justify-content-center align-items-center">
                                <input className="form-check-input" type="checkbox" id="check1" name="option1" value=""/>
                            </div>
                        </th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th>
                            <div className="form-chec d-flex justify-content-center align-items-center">
                                <input className="form-check-input" type="checkbox" id="check1" name="option1" value=""/>
                            </div>
                        </th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </tbody>
            </table>
            </div>
        <div>
            <button className="close-button mr-20" onClick={onClose}>
                <div>ยกเลิก</div>
            </button>
            <button className="close-button" onClick={handleConfirm}>
                <div>ตกลง</div>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
