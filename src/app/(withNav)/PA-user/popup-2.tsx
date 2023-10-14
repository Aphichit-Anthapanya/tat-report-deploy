"use client";

import React, { useEffect, useState, useRef } from "react";
import { Formik, Form, FormikProps, Field, FormikValues } from "formik";
import * as Yup from "yup";
import "@components/Report-temp/report-temp.scss";
const Popup = ({ isOpen, onClose }:any) => {
    
  return (
    <div className={`popup ${isOpen ? 'open' : ''}`}>
      <div className="d-flex flex-column mt-10 mb-10">
            <div className="d-flex justify-content-center">
                <h4>เอกสารบันทึกข้อตกลง</h4>
            </div>
            <div className="d-flex flex-column ml-50 mr-50">
                <div className="d-flex flex-row justify-content-left mb-10">
                    <button className="close-button mr-20 bordR">
                        <div>อัพโหลด</div>
                    </button>
                </div>
                <div className="table-container mb-20">
                    <table className="table">
                        <thead>
                            <tr className='table-primary'>
                                <th>
                                    <div className="wd-100 d-flex justify-content-center align-items-center">รายการ</div>
                                </th>
                                <th>
                                    <div className="wd-100 d-flex justify-content-center align-items-center">ปีงบประมาณ</div>
                                    </th>
                                <th>
                                    <div className="wd-100 d-flex justify-content-center align-items-center">ดาวน์โหลด</div>
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">1</div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">2566</div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">
                                        <button className="open-button icon-button bi bi-file-arrow-down"></button>       
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">2</div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">2565</div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">
                                        <button className="open-button icon-button bi bi-file-arrow-down"></button>       
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">3</div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">2564</div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">
                                        <button className="open-button icon-button bi bi-file-arrow-down"></button>       
                                    </div>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
        <div className="d-flex justify-content-center">
            <button className="close-button mr-20 bordR" onClick={onClose}>
                <div>ยกเลิก</div>
            </button>
            <button className="close-button bordR" onClick={onClose}>
                <div>ยืนยัน</div>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
