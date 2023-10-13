"use client";

import { useDispatch, useSelector } from "react-redux";
import "./ball.scss";
import TableComponent from "./Table/table-s1";
import { RootState } from "@/redux/store";
import { FormState } from "@/redux/OperationFollow/types";
import TableQuarterSummary from "@components/OperationFollow/Table/TableQuarterSummary";
import { useEffect, useState } from "react";
import { updateFormField } from "@/redux/OperationFollow/reducer";

interface Section1Props {
  changeSectionHandle: (value: number, isBubble: boolean) => void;
  setIsLoading: (val: boolean) => void
}

export default function Section1(props: Section1Props) {

  return (
    <>
    <div className='search-wrapper-section d-flex flex-column justify-content-center align-items-center'>
                    <div className="d-flex flex-column mr-20 ml-70">
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ปีงบประมาณ:</div>
                                <div>2566</div>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ลำดับตัวชี้วัด:</div>
                                <div>1</div>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ประเภทหมวด:</div>
                                <div>หมวด 1</div>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ชื่อตัวชี้วัด:</div>
                                <div>A</div>
                            </div>
                            <div className="wid d-flex flex-row">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ค่าน้ำหนัก:</div>
                                <div className="table-container">
                                    <table className="table">
                                        <thead>
                                            <tr className='table-primary'>
                                                <th>
                                                    <div className="wd-100 d-flex justify-content-center align-items-center">ไตรมาสที่ 1</div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex justify-content-center align-items-center">ไตรมาสที่ 2</div>
                                                    </th>
                                                <th>
                                                    <div className="wd-100 d-flex justify-content-center align-items-center">ไตรมาสที่ 3</div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex justify-content-center align-items-center">ไตรมาสที่ 4</div>
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <th>
                                                    <div className="mr-10 ml-10">
                                                        <input type="text" className="form-control left-align" placeholder="" id="filterOverall"  value={1}/>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="mr-10 ml-10">
                                                        <input type="text" className="form-control" placeholder="" id="filterOverall" value={1}/>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="mr-10 ml-10">
                                                        <input type="text" className="form-control" placeholder="" id="filterOverall" value={1}/>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="mr-10 ml-10">
                                                        <input type="text" className="form-control" placeholder="" id="filterOverall" value={1}/>
                                                    </div>
                                                </th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">คำอธิบายหัวข้อ:</div>
                                <div></div>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ตารางค่าเกณฑ์วัด:</div>
                                <TableComponent/>
                            </div>
                            <div className="wid d-flex flex-row mb-20 align-items-center">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ผู้รับผิดชอบระดับ PO:</div>
                                <div>
                                    <input type="text" className="form-control" placeholder="" id="filterOverall"/>
                                </div>
                            </div>
                            <div className="wid d-flex flex-row mb-20 align-items-center">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ผู้รับผิดชอบระดับ PM:</div>
                                <div>
                                    <input type="text" className="form-control" placeholder="" id="filterOverall"/>
                                </div>
                            </div>
                    </div>
    </div>
                    <div className="button-section">
                        <button type="button" className="btn btn-primary">ต่อไป <i className="bi bi-chevron-right"></i></button>
                    </div>

    </>
  );
}
