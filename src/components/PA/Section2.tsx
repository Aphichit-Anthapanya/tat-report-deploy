"use client";

import { useDispatch, useSelector } from "react-redux";
import "./ball.scss";
import { RootState } from "@/redux/store";
import TableQuarterSummary from "@components/OperationFollow/Table/TableQuarterSummary";
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
    <div className='search-wrapper-section d-flex flex-column'>
                    <div className="wid d-flex flex-column mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-left">
                                    <h3><b>ตัวชี้วัดลำดับที่ 1.1 กินอาหารดีๆ ค่าน้ำหนัก 4</b></h3>
                                </div>
                            </div>
                    <div className="sets d-flex flex-column mr-20">
                            <div className="wid d-flex flex-row mb-20 align-items-center">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">งบประมาณตัวชี้วัด:</div>
                                <div className="mr-10">
                                    <input type="text" className="form-control" placeholder="" id="filterOverall" value={1}/>
                                </div>
                                <div>
                                    บาท
                                </div>
                            </div>
                            <div className="wid d-flex flex-row mb-10">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ตารางค่าเกณฑ์วัด 2:</div>
                            </div>
                            <Table/>
                            
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
