import React, { useState } from 'react';
import "@components/Report-temp/report-temp.scss";

const Popup = ({ isOpen, onClose }:any) => {
  return (
    <div className={`popup ${isOpen ? 'open' : ''}`}>
      <div className="popup-content d-flex flex-column justify-content-center align-items-center ">
            <table className="table table-striped">
                <tr className='table-primary fz-32'>
                    <th colSpan={2}>
                        <div className="d-flex justify-content-center align-items-center">ข้อมูลชื่อแผน</div>
                    </th>
                </tr>
                <tr>
                    <th>
                        <div className="d-flex justify-content-right align-items-center">รหัสแผน :</div>
                    </th>
                    <th>
                        <div className="box">
                            <div className="filter-field">
                                <input type="text" className="form-control" placeholder="" id="disabledInput"  value={'10001'} disabled/>
                            </div>
                        </div>
                    </th>
                </tr>
                <tr>
                    <th>
                        <div className="d-flex justify-content-right align-items-center">ชื่อแผน(TH) :</div>
                    </th>
                    <th>
                        <div className="box">
                            <div className="filter-field">
                                <input type="text" className="form-control" placeholder="" id="filterOverall" value={'ตลาดต่างประเทศ'}/>
                            </div>
                        </div>
                    </th>
                </tr>
                <tr>
                    <th>
                        <div className="d-flex justify-content-right align-items-center">ชื่อแผน(EN) :</div>
                    </th>
                    <th>
                        <div className="box">
                            <div className="filter-field">
                                <input type="text" className="form-control" placeholder="" id="filterOverall" value={'International markets'}/>
                            </div>
                        </div>
                    </th>
                </tr>
                <tr>
                    <th>
                        <div className="d-flex justify-content-right align-items-center">รายละเอียด :</div>
                    </th>
                    <th>
                        <div className="box">
                            <div className="filter-field">
                                <input type="text" className="form-control" placeholder="" id="filterOverall" value={'ตลาดต่างประเทศ'}/>
                            </div>
                        </div>
                    </th>
                </tr>
            </table>
        <div>
            <button className="close-button mr-20" onClick={onClose}>
                <div>ยกเลิก</div>
            </button>
            <button className="close-button" onClick={onClose}>
                <div>ตกลง</div>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
