import React from 'react';
import "@components/Report-temp/report-temp.scss";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect} from "react";
import Table from './subTable';

const ReportTable = ({data}:any) => {
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
                                                <th>
                                                    <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                        <div className="content-sub">ลำดับ</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-140 d-flex flex-column justify-content-center align-items-center">
                                                        <div className="content-sub">ชื่อกิจกรรม</div>
                                                        <div className="content-sub">/งาน</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-300 d-flex flex-column justify-content-center align-items-center">
                                                        รายการจัดซื้อ/จัดจ้าง
                                                    </div>
                                                </th>
                                                <th colSpan={2}>
                                                    <div className="wd-180 d-flex flex-column justify-content-center align-items-center">
                                                        <div className="content-sub">หน่วยงาน</div>
                                                        <div className="content-sub">ที่รับผิดชอบ</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-25 d-flex justify-content-center align-items-center">
                                                        <div>จำนวน</div>
                                                        <div>รายการ</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-140 d-flex flex-column justify-content-center align-items-center">
                                                        <div className="content-sub">วงเงิน</div>
                                                        <div className="content-sub">งบประมาณ</div>
                                                        <div className="content-sub">(บาท)</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        หมายเหตุ
                                                    </div>
                                                </th>
                        </tr>
                </thead>
                <tbody>
                <tr className='table-primary'>
                    <th></th>
                    <th></th>
                    <th>
                        <div className="d-flex justify-content-center align-items-center">รวมทั้งสิ้น</div>
                    </th>
                    <th></th>
                    <th></th>
                    <th>
                        <div className="d-flex justify-content-center align-items-center">{totalItem.total?.totalItems}</div>
                    </th>
                    <th>
                        <div className="d-flex justify-content-right align-items-center">{totalItem.total?.totalBudget}</div>
                    </th>
                    <th></th>
                </tr>
                <Table data={data}/>
                </tbody>
                </table>
            </div>
    </>
  );
};

export default ReportTable;
