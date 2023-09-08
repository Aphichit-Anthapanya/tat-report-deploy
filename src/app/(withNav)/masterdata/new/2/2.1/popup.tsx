import React, { useState } from 'react';
import "@components/Report-temp/report-temp.scss";

const Popup = ({ isOpen, onClose }:any) => {
  return (
    <div className={`popup ${isOpen ? 'open' : ''}`}>
      <div className="popup-content d-flex flex-column justify-content-center align-items-center ">
            <table className="table table-striped">
                <tr className='table-primary fz-32'>
                    <th colSpan={2}>
                        <div className="d-flex justify-content-center align-items-center">Lov Type:</div>
                    </th>
                </tr>
                <tr>
                    <th>
                        <div className="d-flex justify-content-right align-items-center">Lov Type:</div>
                    </th>
                    <th>
                        <div className="box">
                            <div className="filter-field">
                                <input type="text" className="form-control" placeholder="" id="disabledInput"  value={'ACTIVITY_GROUP_TYPE'} disabled/>
                            </div>
                        </div>
                    </th>
                </tr>
                <tr>
                    <th>
                        <div className="d-flex justify-content-right align-items-center">Value:</div>
                    </th>
                    <th>
                        <div className="box">
                            <div className="filter-field">
                            <input type="text" className="form-control" placeholder="" id="disabledInput"  value={'00'} disabled/>
                            </div>
                        </div>
                    </th>
                </tr>
                <tr>
                    <th>
                        <div className="d-flex justify-content-right align-items-center">Name(TH):</div>
                    </th>
                    <th>
                        <div className="box">
                            <div className="filter-field">
                                <input type="text" className="form-control" placeholder="" id="filterOverall" value={'ในแผน'}/>
                            </div>
                        </div>
                    </th>
                </tr>
                <tr>
                    <th>
                        <div className="d-flex justify-content-right align-items-center">Name(EN):</div>
                    </th>
                    <th>
                        <div className="box">
                            <div className="filter-field">
                                <input type="text" className="form-control" placeholder="" id="filterOverall" value={'ในแผน'}/>
                            </div>
                        </div>
                    </th>
                </tr>
                <tr>
                    <th>
                        <div className="d-flex justify-content-right align-items-center">Condition 1:</div>
                    </th>
                    <th>
                        <div className="box">
                            <div className="filter-field">
                                <input type="text" className="form-control" placeholder="" id="filterOverall" value={'0'}/>
                            </div>
                        </div>
                    </th>
                </tr>
                <tr>
                    <th>
                        <div className="d-flex justify-content-right align-items-center">Condition 2:</div>
                    </th>
                    <th>
                        <div className="box">
                            <div className="filter-field">
                                <input type="text" className="form-control" placeholder="" id="filterOverall" value={''}/>
                            </div>
                        </div>
                    </th>
                </tr>
                <tr>
                    <th>
                        <div className="d-flex justify-content-right align-items-center">Condition 3:</div>
                    </th>
                    <th>
                        <div className="box">
                            <div className="filter-field">
                                <input type="text" className="form-control" placeholder="" id="filterOverall" value={''}/>
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
