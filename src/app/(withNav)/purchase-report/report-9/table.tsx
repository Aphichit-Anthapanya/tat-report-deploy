import React from 'react';
import "@components/Report-temp/report-temp.scss";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect} from "react";
import InfoTable from './table3';
import TotalTable from './table2';

const TestTable = ({data}:any) => {
  const [totalItem, setTotalItem] = useState<any>([]);

  useEffect(() => {
    const item = data.find((item:any) => item.total?.totalItems === '208');
    setTotalItem(item);
  }, [data]);
  return (
    <>
        <div className="table-container mb-20">
            <table className="table">
                <thead>
                <tr className="table-primary">
                                                <th rowSpan={2}>
                                                    <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ลำดับที่</div>
                                                        
                                                    </div>
                                                </th>
                                                <th rowSpan={2}>
                                                    <div className="wd-400 d-flex flex-column justify-content-center align-items-center">
                                                        <div>หน่วยงานที่รับผิดชอบ</div>
                                                        
                                                    </div>
                                                </th>              
                                                <th rowSpan={2}>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>จำนวนรายการ</div>
                                                        
                                                    </div>
                                                </th>
                                                <th rowSpan={2}>
                                                    <div className="wd-160 d-flex flex-column justify-content-center align-items-center">
                                                        <div>วงเงินทำสัญญา</div>
                                                    </div>
                                                </th>
                                                <th colSpan={4}>
                                                    <div className="d-flex justify-content-center align-items-center">ผลการดำเนินงาน(จำนวนเงิน)</div>
                                                </th>
                                                <th rowSpan={2}>
                                                    <div className="wd-200 d-flex flex-column justify-content-center align-items-center">
                                                        <div>คงเหลือยังไม่ส่งมอบงาน</div>
                                                    </div>
                                                </th>
                                                </tr>

                                                <tr>
                                                    <th className="bg-info">
                                                        <div className="wd-160 d-flex justify-content-center align-items-center">ไตรมาสที่ 1</div>
                                                    </th>
                                                    <th className="bg-success">
                                                        <div className="wd-160 d-flex justify-content-center align-items-center">ไตรมาสที่ 2</div>
                                                    </th>
                                                    <th className="bg-warning">
                                                        <div className="wd-160 d-flex justify-content-center align-items-center">ไตรมาสที่ 3</div>
                                                    </th>
                                                    <th className="bg-danger">
                                                        <div className="wd-160 d-flex justify-content-center align-items-center">ไตรมาสที่ 4</div>
                                                    </th>
                                                </tr>
                </thead>
                <tbody>
                <TotalTable data={data}/>
                <InfoTable data={data}/>
                </tbody>
                </table>
            </div>
    </>
  );
};

export default TestTable;
