import React, { useState } from 'react';
import "@components/Report-temp/report-temp.scss";

const Popup = ({ isOpen, onClose }:any) => {
  return (
    <div className={`popup ${isOpen ? 'open' : ''}`}>
      <div className="popup-content d-flex flex-column justify-content-center align-items-center ">
            <table className="table table-striped">
                <tr className='table-primary fz-32'>
                    <th colSpan={2}>
                        <div className="d-flex justify-content-center align-items-center">ข้อมูลประเด็นยุทธศาสตร์</div>
                    </th>
                </tr>
                <tr>
                    <th>
                        <div className="d-flex justify-content-right align-items-center">ลำดับ :</div>
                    </th>
                    <th>
                        <div className="box">
                            <div className="filter-field">
                                <input type="text" className="form-control" placeholder="" id="filterOverall" value={'6'}/>
                            </div>
                        </div>
                    </th>
                </tr>
                <tr>
                    <th>
                        <div className="d-flex justify-content-right align-items-center">ปีงบประมาณ :</div>
                    </th>
                    <th>
                    <div className="box">
                                        <div className="filter-field">
                                            <select className="form-select" aria-label="Default select example">
                                                <option value="1">  -- เลือก --  </option>
                                                <option selected>2566</option>
                                                <option value="2">2565</option>
                                                <option value="3">2564</option>
                                            </select>
                                        </div>
                                    </div>
                    </th>
                </tr>
                <tr>
                    <th>
                        <div className="d-flex justify-content-right align-items-center">ประเด็นยุทธศาสตร์(TH) :</div>
                    </th>
                    <th>
                        <div className="box">
                            <div className="filter-field">
                                <input type="text" className="form-control" placeholder="" id="filterOverall" value={'งบกลางปี 2566'}/>
                            </div>
                        </div>
                    </th>
                </tr>
                <tr>
                    <th>
                        <div className="d-flex justify-content-right align-items-center">ประเด็นยุทธศาสตร์(EN) :</div>
                    </th>
                    <th>
                        <div className="box">
                            <div className="filter-field">
                                <input type="text" className="form-control" placeholder="" id="filterOverall" value={'งบกลางปี 2566'}/>
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
