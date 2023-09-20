import React, { useState } from 'react';
import "@components/Report-temp/report-temp.scss";

const Popup = ({ isOpen, onClose }:any) => {
  return (
    <div className={`popup ${isOpen ? 'open' : ''}`}>
      <div className="popup-content d-flex flex-column justify-content-center align-items-center ">
            <table className="table table-striped">
                <tr className='table-primary fz-32'>
                    <th colSpan={2}>
                        <div className="d-flex justify-content-center align-items-center">คำนิยาม</div>
                    </th>
                </tr>
                <tr>
                    <th>
                        <div className="d-flex justify-content-right align-items-center">หัวข้อ :</div>
                    </th>
                    <th>
                        <div className="wd-600">
                            <div className="filter-field">
                                <input type="text" className="form-control" placeholder="" id="disabledInput"  
                                value={'ชื่อโครงการ'}/>
                            </div>
                        </div>
                    </th>
                </tr>
                <tr>
                    <th>
                        <div className="d-flex justify-content-right align-items-center">คำนิยาม :</div>
                    </th>
                    <th>
                        <div className="wd-600">
                            <div className="filter-field">
                            <textarea
                            className="form-control"
                            placeholder=""
                            id="disabledInput"
                            value={`- ระบุชื่อโครงการให้กระชับ เข้าใจง่าย สื่อความหมายได้ชัดเจน\n- โครงการจะต้องประกอบด้วยกิจกรรมมากกว่า 1 กิจกรรม\n- เฉพาะโครงการ Flagship จะต้องระบุวงเล็บคำว่า (Flagship) ไว้ท้ายชื่อโครงการ`}/>

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
