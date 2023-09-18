import React from 'react';
import "@components/Report-temp/report-temp.scss";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect} from "react";
import InfomationTable from './infoTable';
import TotalTable from './totalTable';
import NoteTable from './tableNote';
const TestTable = ({data}:any) => {
  return (
    <>
        <div className="table-container mb-20">
            <table className="table">
                <thead>
                                            <tr className="table-primary">
                                                <th rowSpan={3}>
                                                    <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ลำดับที่</div>
                                                        
                                                    </div>
                                                </th>
                                                <th rowSpan={3}>
                                                    <div className="wd-400 d-flex flex-column justify-content-center align-items-center">
                                                        <div>หน่วยงานที่รับผิดชอบ</div>
                                                        
                                                    </div>
                                                </th>              
                                                <th rowSpan={3}>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>จำนวนรายการ</div>
                                                        
                                                    </div>
                                                </th>
                                                <th rowSpan={3}>
                                                    <div className="wd-180 d-flex flex-column justify-content-center align-items-center">
                                                        <div>วงเงินงบประมาณ</div>
                                                        
                                                    </div>
                                                </th>
                                                <th rowSpan={3}>
                                                    <div className="wd-160 d-flex flex-column justify-content-center align-items-center">
                                                        <div>วงเงินทำสัญญา</div>
                                                    </div>
                                                </th>
                                                <th rowSpan={3}>
                                                    <div className="wd-160 d-flex flex-column justify-content-center align-items-center">
                                                        <div>รายการที่ยังไม่ได้</div>
                                                        <div>ดำเนินการจัดซื้อจัดจ้าง</div>
                                                    </div>
                                                </th>
                                                <th rowSpan={3}>
                                                    <div className="wd-200 d-flex flex-column justify-content-center align-items-center">
                                                        <div>คงเหลือจากจัดซื้อจัดจ้าง</div>
                                                    </div>
                                                </th>
                                                <th colSpan={16}>
                                                    <div className="d-flex justify-content-center align-items-center">ผลการดำเนินงาน</div>
                                                </th>
                                                <th rowSpan={3}>
                                                    <div className="wd-160 d-flex flex-column justify-content-center align-items-center">
                                                        <div>หมายเหตุ</div>
                                                    </div>
                                                </th>
                                                </tr>

                                                <tr>
                                                    <th className="bg-info" colSpan={4}>
                                                        <div className="wd-400 d-flex justify-content-center align-items-center">ไตรมาสที่ 1</div>
                                                    </th>
                                                    <th className="bg-success" colSpan={4}>
                                                        <div className="wd-400 d-flex justify-content-center align-items-center">ไตรมาสที่ 2</div>
                                                    </th>
                                                    <th className="bg-warning" colSpan={4}>
                                                        <div className="wd-400 d-flex justify-content-center align-items-center">ไตรมาสที่ 3</div>
                                                    </th>
                                                    <th className="bg-danger" colSpan={4}>
                                                        <div className="wd-400 d-flex justify-content-center align-items-center">ไตรมาสที่ 4</div>
                                                    </th>
                                                </tr>

                                                <tr>
                                                    {/*Quarter 1*/}
                                                    <th className="bg-info">
                                                        <div className="wd-120 d-flex flex-column justify-content-center align-items-center">
                                                            <div>เป็นไปตามแผน</div>
                                                            
                                                        </div>
                                                    </th>
                                                    <th className="bg-info">
                                                        <div className="wd-125 d-flex flex-column justify-content-center align-items-center">
                                                            <div>ไม่เป็นไปตามแผน</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-info">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>แล้วเสร็จ</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-info">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>ยกเลิก</div>
                                                        </div>
                                                    </th>
                                                    {/*Quarter 2*/}
                                                    <th className="bg-success">
                                                        <div className="wd-120 d-flex flex-column justify-content-center align-items-center">
                                                            <div>เป็นไปตามแผน</div>
                                                            
                                                        </div>
                                                    </th>
                                                    <th className="bg-success">
                                                        <div className="wd-125 d-flex flex-column justify-content-center align-items-center">
                                                            <div>ไม่เป็นไปตามแผน</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-success">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>แล้วเสร็จ</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-success">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>ยกเลิก</div>
                                                        </div>
                                                    </th>
                                                    {/*Quarter 3*/}
                                                    <th className="bg-warning">
                                                        <div className="wd-120 d-flex flex-column justify-content-center align-items-center">
                                                            <div>เป็นไปตามแผน</div>
                                                            
                                                        </div>
                                                    </th>
                                                    <th className="bg-warning">
                                                        <div className="wd-125 d-flex flex-column justify-content-center align-items-center">
                                                            <div>ไม่เป็นไปตามแผน</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-warning">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>แล้วเสร็จ</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-warning">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>ยกเลิก</div>
                                                        </div>
                                                    </th>
                                                    {/*Quarter 4*/}
                                                    <th className="bg-danger">
                                                        <div className="wd-120 d-flex flex-column justify-content-center align-items-center">
                                                            <div>เป็นไปตามแผน</div>
                                                            
                                                        </div>
                                                    </th>
                                                    <th className="bg-danger">
                                                        <div className="wd-125 d-flex flex-column justify-content-center align-items-center">
                                                            <div>ไม่เป็นไปตามแผน</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-danger">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>แล้วเสร็จ</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-danger">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>ยกเลิก</div>
                                                        </div>
                                                    </th>
                                                </tr>
                </thead>
                <tbody>
                <InfomationTable data={data}/>
                <TotalTable data={data}/>
                <NoteTable data={data}/>
                </tbody>
                </table>
            </div>
    </>
  );
};

export default TestTable;
