"use client";

import { useDispatch, useSelector } from "react-redux";
import "./ball.scss";
import { RootState } from "@/redux/store";
import TableQuarterSummary from "@components/OperationFollow/Table/TableQuarterSummary";
import { useEffect, useState } from "react";
import { updateFormField } from "@/redux/OperationFollow/reducer";
import { FormState } from "@/redux/OperationFollow/types";
import { useParams, useRouter } from "next/navigation";
import Table from './Table/table-s2'
interface Section5Props {
  changeSectionHandle: (value: number, isBubble: boolean) => void;
  setIsLoading: (val: boolean) => void
}

export default function Section5(props: Section5Props) {
    const formState = useSelector(
        (state: RootState) => state.operationFollowForm
      );
      const router = useRouter()
  return (
    <>
    <div className='search-wrapper-section d-flex flex-column justify-content-center align-items-center'>
                    <div className="sets d-flex flex-column mr-20 ml-70">
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
                            <div className="wid d-flex flex-row mb-20 align-items-center">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">งบประมาณตัวชี้วัด:</div>
                                <div className="mr-10">
                                    <input type="text" className="form-control" placeholder="" id="filterOverall" value={1}/>
                                </div>
                                <div>
                                    บาท
                                </div>
                            </div>
                            <div className="wid d-flex flex-row mb-20 ">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ตารางค่าเกณฑ์วัด 2:</div>
                            </div>
                            <div className="table-container"><Table/></div>
                            
                    </div>
    </div>
                    <div className="button-section">
                        <button type="button" className="btn btn-primary">ต่อไป <i className="bi bi-chevron-right"></i></button>
                        <button type="button" className="btn btn-primary" onClick={() => router.push('/report/ball/add-on/1')}><i className="bi bi-file-earmark mr-5"></i>เพิ่มกิจกรรม(นอกแผน)</button>
                        <button type="button" className="btn btn-primary">ย้อนกลับ <i className="bi bi-chevron-left"></i></button>
                    </div>
    </>
  );
}
