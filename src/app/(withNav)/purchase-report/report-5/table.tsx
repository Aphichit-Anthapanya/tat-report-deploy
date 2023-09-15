import React from 'react';
import "@components/Report-temp/report-temp.scss";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect} from "react";
import Table from './table3';
import Table2 from './table2';

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
                                                <th rowSpan={3}>
                                                    <div className="wd-50 d-flex justify-content-center align-items-center">
                                                        <div>ลำดับที่</div>
                                                    </div>
                                                </th>             
                                                <th rowSpan={3}>
                                                    <div className="wd-500 d-flex flex-column justify-content-center align-items-center">
                                                        <div>รายการ</div>
                                                    </div>
                                                </th>
                                                <th rowSpan={3} colSpan={2}>
                                                    <div className="wd-260 d-flex justify-content-center align-items-center">
                                                        <div>หน่วยงานที่รับผิดชอบ</div>
                                                    </div>
                                                </th>
                                                <th rowSpan={3}>
                                                    <div className="wd-100 d-flex justify-content-center align-items-center">
                                                        <div>จำนวนรายการ</div>
                                                    </div>
                                                </th>
                                                <th rowSpan={3}>
                                                    <div className="wd-160 d-flex justify-content-center align-items-center">
                                                        <div>วงเงินงบประมาณ</div>
                                                    </div>
                                                </th>
                                                <th rowSpan={3} colSpan={2}>
                                                    <div className="wd-200 d-flex justify-content-center align-items-center">
                                                        <div>วงเงินทำสัญญา</div>
                                                    </div>
                                                </th>
                                                <th rowSpan={3} colSpan={2}>
                                                    <div className="wd-200 d-flex flex-column justify-content-center align-items-center">
                                                        <div>อยู่ระหว่างดำเนินการ</div>
                                                        <div>จัดซื้อจัดจ้างตามแผน</div>
                                                    </div>
                                                </th>
                                                <th rowSpan={3}>
                                                    <div className="wd-160 d-flex flex-column justify-content-center align-items-center">
                                                        <div>คงเหลือจากการ</div>
                                                        <div>จัดซื้อจัดจ้าง</div>
                                                    </div>
                                                </th>
                                                <th colSpan={6}>
                                                    <div className="d-flex justify-content-center align-items-center">ผลการดำเนินงานประจำปี 25XX</div>
                                                </th>
                                                <th rowSpan={3}>
                                                    <div className="wd-160 d-flex justify-content-center align-items-center">
                                                        <div>หมายเหตุ</div>
                                                    </div>
                                                </th>
                                                </tr>

                                                <tr>
                                                    <th className="bg-info" colSpan={2}>
                                                        <div className="wd-300 d-flex justify-content-center align-items-center">แล้วเสร็จ</div>
                                                    </th>
                                                    <th className="bg-info" colSpan={2}>
                                                        <div className="wd-300 d-flex justify-content-center align-items-center">ยกเลิก</div>
                                                    </th>
                                                    <th className="bg-info" colSpan={2}>
                                                        <div className="wd-300 d-flex justify-content-center align-items-center">ดำเนินการต่อ ...</div>
                                                    </th>
                                                </tr>

                                                <tr>
                                                    <th className="bg-info">
                                                        <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                            <div>รายการ</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-info">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>จำนวนเงิน</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-info">
                                                        <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                            <div>รายการ</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-info">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>จำนวนเงิน</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-info">
                                                        <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                            <div>รายการ</div>
                                                        </div>
                                                    </th>
                                                    <th className="bg-info">
                                                        <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                            <div>จำนวนเงิน</div>
                                                        </div>
                                                    </th>
                                                </tr>
                </thead>
                <tbody>
                <Table2 data={data}/>
                <Table data={data}/>
                </tbody>
                </table>
            </div>
    </>
  );
};

export default TestTable;
