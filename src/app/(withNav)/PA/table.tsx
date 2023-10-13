import React, {useRef} from 'react';
import "@components/Report-temp/report-temp.scss";
import { useDownloadExcel } from 'react-export-table-to-excel';
import { useParams, useRouter } from "next/navigation";

const Table = ({data}:any) => {
  const router = useRouter()
  return (
    <>
        <div className="table-container mb-20">
            <table className="table">
                <thead>
                    <tr className="table-primary">
                        <th colSpan={14}>
                            <div className="d-flex justify-content-center align-items-center">
                                ตัวชี้วัดตามบันทึกข้อตกลง (PA)
                            </div>
                        </th>
                    </tr>
                    <tr className="table-primary">
                        <th rowSpan={2}>
                            <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                <div>Download</div>
                                <div>รายงาน (PDF)</div>
                            </div>
                        </th>
                        <th rowSpan={2}>
                            <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                <div>แก้ไขข้อมูล</div>
                                <div>ตัวชี้วัด</div>
                            </div>
                        </th>
                        <th rowSpan={2}>
                            <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                <div>เพิ่ม/แก้ไข</div>
                                <div>ข้อมูลแผน</div>
                            </div>
                        </th>
                        <th colSpan={4}>
                            <div className="wd-400 d-flex justify-content-center align-items-center">
                                สถานะการรายงานผล
                            </div>
                        </th>
                        <th rowSpan={2}>
                            <div className="wd-100 d-flex justify-content-center align-items-center">
                                เลขที่ตัวชี้วัด
                            </div>
                        </th>
                        <th rowSpan={2}>
                            <div className="wd-100 d-flex justify-content-center align-items-center">
                                ชื่อตัวชี้วัด
                            </div>
                        </th>
                        <th rowSpan={2}>
                            <div className="wd-100 d-flex justify-content-center align-items-center">
                                ระดับคะแนน
                            </div>
                        </th>
                        <th rowSpan={2}>
                            <div className="wd-100 d-flex justify-content-center align-items-center">
                                PO
                            </div>
                        </th>
                        <th rowSpan={2}>
                            <div className="wd-100 d-flex justify-content-center align-items-center">
                                PM
                            </div>
                        </th>
                        <th rowSpan={2}>
                            <div className="wd-100 d-flex justify-content-center align-items-center">
                                Update By
                            </div>
                        </th>
                        <th rowSpan={2}>
                            <div className="wd-100 d-flex justify-content-center align-items-center">
                                Data Report
                            </div>
                        </th>
                    </tr>    
                    <tr className="table-primary">
                        <th>
                            <div className="wd-100 d-flex justify-content-center align-items-center">
                                ไตรมาสที่ 1       
                            </div>
                        </th>
                        <th>
                            <div className="wd-100 d-flex justify-content-center align-items-center">
                                ไตรมาสที่ 2       
                            </div>
                        </th>
                        <th>
                            <div className="wd-100 d-flex justify-content-center align-items-center">
                                ไตรมาสที่ 3       
                            </div>
                        </th>
                        <th>
                            <div className="wd-100 d-flex justify-content-center align-items-center">
                                ไตรมาสที่ 4       
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">
                                <button className="open-button icon-button bi bi-file-arrow-down"></button>       
                            </div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">
                                <button className="open-button icon-button bi bi-pencil"></button>       
                            </div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">
                                <button className="open-button icon-button bi bi-pencil" onClick={() => router.push('/PA/ball')}></button>       
                            </div>
                        </th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
  );
};

export default Table;
