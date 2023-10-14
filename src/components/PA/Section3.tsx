"use client";

import { useDispatch, useSelector } from "react-redux";
import "./ball.scss";
import { RootState } from "@/redux/store";
import TableQuarterSummary from "@components/OperationFollow/Table/TableQuarterSummary";
import { useEffect, useState } from "react";
import { updateFormField } from "@/redux/OperationFollow/reducer";
import { FormState } from "@/redux/OperationFollow/types";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Table from './Table/table-s3'
import TableForm from './Table/table-form'

interface Section3Props {
  changeSectionHandle: (value: number, isBubble: boolean) => void;
  setIsLoading: (val: boolean) => void
}

export default function Section3(props: Section3Props) {
    const formState = useSelector(
        (state: RootState) => state.operationFollowForm
      );
  return (
    <>
     <div className='search-wrapper-section d-flex flex-column'>
            <div className="wid d-flex flex-column mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-lrf">
                                    <h3><b>ตัวชี้วัดลำดับที่ 1.1 กินอาหารดีๆ ค่าน้ำหนัก 4</b></h3>
                                </div>
                            </div>
                    <div className="sets d-flex flex-column mr-20 ">
                            <div className="wid d-flex flex-row mb-10">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ตารางค่าเกณฑ์วัด 3:</div>
                            </div>
                            <div className="mb-20">
                                <Table/>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ตารางเอกสารแนบ:</div>
                                <TableForm/>
                            </div>
                            <div className="wid d-flex flex-row mb-20 align-items-center">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ปัญหา / อุปสรรค:</div>
                                    <div className="wd-200px">
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>-- เลือก --</option>
                                            <option value={1}>มี</option>
                                            <option value={2}>ไม่มี</option>
                                        </select>
                                    </div>
                            </div>
                            <div className="wid d-flex flex-row mb-20 align-items-center">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ระบุปัญหา / อุปสรรค:</div>
                                <div>
                                    <input type="text" className="form-control" placeholder="" id="filterOverall"/>
                                </div>
                            </div>
                            <div className="wid d-flex flex-row mb-20 align-items-center">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">วิธีการแก้ไข:</div>
                                <div>
                                    <input type="text" className="form-control" placeholder="" id="filterOverall"/>
                                </div>
                            </div>
                            <div className="wid d-flex flex-row mb-20 align-items-center">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ปัจจัยสนับสนุนต่อตัวชี้วัด:</div>
                                <div>
                                    <input type="text" className="form-control" placeholder="" id="filterOverall"/>
                                </div>
                            </div>
                            <div className="wid d-flex flex-row mb-20 align-items-center">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ปัจจัยอุปสรรคต่อตัวชี้วัด:</div>
                                <div>
                                    <input type="text" className="form-control" placeholder="" id="filterOverall"/>
                                </div>
                            </div>
                    </div>
    </div>
                    <div className="button-section">
                        <button type="button" className="btn btn-primary">ต่อไป <i className="bi bi-chevron-right"></i></button>
                        <button type="button" className="btn btn-primary"><i className="bi bi-file-earmark mr-5"></i>บันทึกชั่วคราว</button>
                        <button type="button" className="btn btn-primary">ย้อนกลับ <i className="bi bi-chevron-left"></i></button>
                    </div>
    </>
  );
}
