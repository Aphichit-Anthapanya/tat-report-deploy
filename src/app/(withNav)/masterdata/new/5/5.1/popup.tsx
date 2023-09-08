import React, { useState } from 'react';
import "@components/Report-temp/report-temp.scss";

const Popup = ({ isOpen, onClose }:any) => {
  return (
    <div className={`popup ${isOpen ? 'open' : ''}`}>
      <div className="popup-content d-flex flex-column justify-content-center align-items-center ">
            <table className="table table-striped">
                <tr className='table-primary fz-32'>
                    <th colSpan={2}>
                        <div className="d-flex justify-content-center align-items-center">Service Area</div>
                    </th>
                </tr>
                <tr>
                    <th>
                        <div className="d-flex justify-content-right align-items-center">Service Area ID :</div>
                    </th>
                    <th>
                        <div className="box">
                            <div className="filter-field">
                                <input type="text" className="form-control" placeholder="" id="disabledInput"  value={'20001'} disabled/>
                            </div>
                        </div>
                    </th>
                </tr>
                <tr>
                    <th>
                        <div className="d-flex justify-content-right align-items-center">Service Area Type :</div>
                    </th>
                    <th>
                        <div className="box">
                            <div className="filter-field">
                                  <select className="form-select" aria-label="Default select example">
                                        <option selected>  -- เลือก --  </option>
                                        <option value="1">จังหวัด</option>
                                        <option value="2">ประเทศ</option>
                                        <option value="3">ภูมิภาค</option>
                                        </select>
                            </div>
                        </div>
                    </th>
                </tr>
                <tr>
                    <th>
                        <div className="d-flex justify-content-right align-items-center">Service Area Name(TH):</div>
                    </th>
                    <th>
                        <div className="box">
                            <div className="filter-field">
                                <input type="text" className="form-control" placeholder="" id="filterOverall" value={'กระบี่'}/>
                            </div>
                        </div>
                    </th>
                </tr>
                <tr>
                    <th>
                        <div className="d-flex justify-content-right align-items-center">Service Area Name(EN):</div>
                    </th>
                    <th>
                        <div className="box">
                            <div className="filter-field">
                                <input type="text" className="form-control" placeholder="" id="filterOverall" value={'กระบี่'}/>
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
