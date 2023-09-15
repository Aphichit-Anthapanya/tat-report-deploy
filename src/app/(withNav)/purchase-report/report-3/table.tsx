import React from 'react';
import "@components/Report-temp/report-temp.scss";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect} from "react";
import Table from './table3';

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
                    <tr className='table-primary'>
                        <th>
                            <div className="wd-50 d-flex justify-content-center align-items-center">ลำดับ</div>
                        </th>
                        <th>
                            <div className="wd-400 d-flex justify-content-center align-items-center">หน่วยงานที่รับผิดชอบ</div>
                        </th>
                        <th>
                            <div className="wd-100 d-flex justify-content-center align-items-center">จำนวนรายการ</div>
                        </th>
                        <th>
                            <div className="wd-300 d-flex justify-content-center align-items-center">วงเงินงบประมาณ(บาท)</div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                <tr className='table-primary'>
                    <th></th>
                    <th>
                        <div className="d-flex justify-content-center align-items-center">รวมทั้งสิ้น</div>
                    </th>
                    <th>
                        <div className="d-flex justify-content-center align-items-center">{totalItem.total?.totalItems}</div>
                    </th>
                    <th>
                        <div className="d-flex justify-content-right align-items-center">{totalItem.total?.totalBudget}</div>
                    </th>
                </tr>
                <Table data={data}/>
                </tbody>
                </table>
            </div>
    </>
  );
};

export default TestTable;
