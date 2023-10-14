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
    <div className='search-wrapper-section d-flex flex-column'>
                <div className="d-flex flex-column justify-content-left">
                                <h4><b>ตัวชี้วัดลำดับที่ 1.1 กินอาหารดีๆ ค่าน้ำหนัก 4</b></h4>
                </div>
                    <div className="d-flex flex-column mr-20 ml-70 ">
                            
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">รายละเอียดค่าเกณฑ์วัด</div>
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
