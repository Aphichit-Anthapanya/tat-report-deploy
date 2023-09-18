import React from 'react';
import "@components/Report-temp/report-temp.scss";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect} from "react";
import InfomationTable from './infoTable';
import TotalTable from './totalTable';
const TestTable = ({data}:any) => {
  return (
    <>
        <div className="table-container mb-20">
            <table className="table">
                <thead>
                    <tr className="table-primary">
                                                    <th>
                                                        <div className="wd-500 d-flex flex-column justify-content-center align-items-center">
                                                            <div>วิธีการจัดหา</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="wd-160 d-flex flex-column justify-content-center align-items-center">
                                                            <div>จำนวนรายการ</div>
                                                        </div>
                                                    </th>              
                                                    <th>
                                                        <div className="wd-160 d-flex flex-column justify-content-center align-items-center">
                                                            <div>วงเงินงบประมาณ</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>ร้อยละ</div>
                                                        </div>
                                                    </th>
                                                
                                                    <th>
                                                        <div className="wd-160 d-flex flex-column justify-content-center align-items-center">
                                                            <div>วงเงินทำสัญญา</div>
                                                        </div>
                                                    </th>

                                                    <th>
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>ร้อยละ</div>
                                                        </div>
                                                    </th>
                                                    
                                                    <th>
                                                        <div className="wd-160 d-flex flex-column justify-content-center align-items-center">
                                                            <div>รายการที่ยังไม่ได้</div>
                                                            <div>ดำเนินการจัดซื้อจัดจ้าง</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>ร้อยละ</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="wd-200 d-flex flex-column justify-content-center align-items-center">
                                                            <div>คงเหลือจากจัดซื้อจัดจ้าง</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>ร้อยละ</div>
                                                        </div>
                                                    </th>
                    </tr>                        
                </thead>
                <tbody>
                    <InfomationTable data={data}/>
                    <TotalTable data={data}/>
                </tbody>
                </table>
            </div>
    </>
  );
};

export default TestTable;
