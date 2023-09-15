import React from 'react';
import "@components/Report-temp/report-temp.scss";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
const Table = ({data}:any) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
      };

      const router = useRouter()
  return (
    <>
        <div className="table-container mb-20">
            <table className="table table-striped">
                <thead>
                        <tr className="table-primary">
                                            <th rowSpan={2}>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div>(1)</div>
                                                    <div>ลำดับ</div>
                                                </div>
                                            </th>
                                            <th rowSpan={2}>
                                                <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                    <div>(2)</div>
                                                    <div>ชื่อกิจกรรม</div>
                                                    <div>/งาน</div>
                                                </div>
                                            </th>
                                            <th rowSpan={2}>
                                                <div className="wd-200 d-flex flex-column justify-content-center align-items-center">
                                                    <div>(3)</div>
                                                    <div>รายการจัดซื้อ/จัดจ้าง</div>
                                                </div>
                                            </th>
                                            <th rowSpan={2}colSpan={2}>
                                                <div className="wd-120 d-flex flex-column justify-content-center align-items-center">
                                                    <div>(4)</div>
                                                    <div>หน่วยงาน</div>
                                                    <div>ที่รับผิดชอบ</div>
                                                </div>
                                            </th>
                                            <th rowSpan={2}>
                                                <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                    <div>(5)</div>
                                                    <div>วงเงิน</div>
                                                    <div>งบประมาณ</div>
                                                    <div>ปี 2565</div>
                                                    <div>(บาท)</div>
                                                </div>
                                            </th>
                                            <th colSpan={13}>
                                                <div className="d-flex flex-column align-items-center">
                                                    <div>(6)</div>
                                                    <div>แผนปฏิบัติการ</div>
                                                </div>
                                            </th>
                                            <th rowSpan={2}>
                                                <div className="wd-100 d-flex flex-column align-items-center">
                                                    <div>หมาย</div>
                                                    <div>เหตุ</div>
                                                </div>
                                            </th>
                                        </tr>
                                            
                                        <tr className="table-primary">
                                            <th>
                                                <div className="wd-200 d-flex flex-column justify-content-center align-items-center">
                                                    <div>ขั้นตอน</div>
                                                </div> 
                                            </th>
                                            <th>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div>ต.ค</div>
                                                    <div>2565</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div>พ.ย</div>
                                                    <div>2565</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div>ธ.ค</div>
                                                    <div>2565</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div>ม.ค</div>
                                                    <div>2565</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div>ก.พ</div>
                                                    <div>2565</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div>ม.ค.</div>
                                                    <div>2565</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div>เม.ย.</div>
                                                    <div>2565</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div>พ.ค.</div>
                                                    <div>2565</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div>มิ.ย.</div>
                                                    <div>2565</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div>ก.ค.</div>
                                                    <div>2565</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div>ส.ค.</div>
                                                    <div>2565</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div>ก.ย</div>
                                                    <div>2565</div>
                                                </div> 
                                            </th>
                                        </tr>
                </thead>
                <tbody>
                {data.map((items: any) => (
                    <tr>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">{items.number}</div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">{items.name}</div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">{items.list}</div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-left align-items-center">{items.description}</div>
                        </th>
                  </tr>
                ))}
                </tbody>
            </table>
        </div>
    </>
  );
};

export default Table;
