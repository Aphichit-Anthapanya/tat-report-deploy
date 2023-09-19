import React, {useRef} from 'react';
import "@components/Report-temp/report-temp.scss";
import { useDownloadExcel } from 'react-export-table-to-excel';
import InfoTable from './infoTable';
import TotalTable from './totalTable';
import NoteTable from './noteTable'
const Table = ({data}:any) => {
  return (
    <>
        <div className="table-container mb-20">
            <table className="table">
                <thead>
                                            <tr className="table-primary">
                                                <th rowSpan={3}>
                                                    <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ลำดับที่</div>
                                                        <div>(1)</div>
                                                    </div>
                                                </th>
                                                <th rowSpan={3}>
                                                    <div className="wd-160 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ชื่อกิจกรรม/งาน</div>
                                                        <div>(2)</div>
                                                    </div>
                                                </th>              
                                                <th rowSpan={3}>
                                                    <div className="wd-500 d-flex flex-column justify-content-center align-items-center">
                                                        <div>รายการจัดซื้อ/จัดจ้าง</div>
                                                        <div>(3)</div>
                                                    </div>
                                                </th>
                                                <th rowSpan={3}colSpan={2}>
                                                    <div className="wd-200 d-flex flex-column justify-content-center align-items-center">
                                                        <div>หน่วยงานที่รับผิดชอบ</div>
                                                        <div>(4)</div>
                                                    </div>
                                                </th>

                                                <th rowSpan={3}>
                                                    <div className="wd-160 d-flex flex-column justify-content-center align-items-center">
                                                        <div>จัดหาโดยใช้วิธี</div>
                                                        <div>(5)</div>
                                                    </div>
                                                </th>

                                                <th rowSpan={3}>
                                                    <div className="wd-160 d-flex flex-column justify-content-center align-items-center">
                                                        <div>เงินงบประมาณ</div>
                                                        <div>(6)</div>
                                                    </div>
                                                </th>

                                                <th rowSpan={3}>
                                                    <div className="wd-160 d-flex flex-column justify-content-center align-items-center">
                                                        <div>วงเงินทำสัญญา</div>
                                                        <div>/จำนวนเงินตามงวด</div>
                                                        <div>ที่ส่งมอบงานสะสม</div>
                                                        <div>(7)</div>
                                                    </div>
                                                </th>

                                                <th colSpan={16}>
                                                    <div className="d-flex justify-content-center align-items-center">ผลการดำเนินงาน</div>
                                                </th>
                                                
                                                <th rowSpan={3}>
                                                    <div className="wd-160 d-flex flex-column justify-content-center align-items-center">
                                                        <div>หมายเหตุ</div>
                                                        <div>(12)</div>
                                                    </div>
                                                </th>
                                                </tr>

                                                <tr>
                                                    <th className="bg-info" colSpan={4}>
                                                        <div className="wd-500 d-flex justify-content-center align-items-center">ไตรมาสที่ 1</div>
                                                    </th>
                                                    <th className="bg-success" colSpan={4}>
                                                        <div className="wd-500 d-flex justify-content-center align-items-center">ไตรมาสที่ 2</div>
                                                    </th>
                                                    <th className="bg-warning" colSpan={4}>
                                                        <div className="wd-500 d-flex justify-content-center align-items-center">ไตรมาสที่ 3</div>
                                                    </th>
                                                    <th className="bg-danger" colSpan={4}>
                                                        <div className="wd-500 d-flex justify-content-center align-items-center">ไตรมาสที่ 4</div>
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th className="bg-info">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>เป็นไปตามแผน</div>
                                                            <div>(8)</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-info">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>ไม่เป็นไปตามแผน</div>
                                                            <div>(9)</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-info">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>แล้วเสร็จ</div>
                                                            <div>(10)</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-info">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>ยกเลิก</div>
                                                            <div>(11)</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-success">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>เป็นไปตามแผน</div>
                                                            <div>(8)</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-success">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>ไม่เป็นไปตามแผน</div>
                                                            <div>(9)</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-success">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>แล้วเสร็จ</div>
                                                            <div>(10)</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-success">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>ยกเลิก</div>
                                                            <div>(11)</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-warning">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>เป็นไปตามแผน</div>
                                                            <div>(8)</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-warning">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>ไม่เป็นไปตามแผน</div>
                                                            <div>(9)</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-warning">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>แล้วเสร็จ</div>
                                                            <div>(10)</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-warning">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>ยกเลิก</div>
                                                            <div>(11)</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-danger">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>เป็นไปตามแผน</div>
                                                            <div>(8)</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-danger">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>ไม่เป็นไปตามแผน</div>
                                                            <div>(9)</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-danger">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>แล้วเสร็จ</div>
                                                            <div>(10)</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-danger">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>ยกเลิก</div>
                                                            <div>(11)</div>
                                                        </div>
                                                    </th>
                                                </tr>
                </thead>
                <tbody>
                <InfoTable data = {data}/>
                <TotalTable data = {data}/>
                <NoteTable data = {data}/>
                </tbody>
            </table>
        </div>
    </>
  );
};

export default Table;
