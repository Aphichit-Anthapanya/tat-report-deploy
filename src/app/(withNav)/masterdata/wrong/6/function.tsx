import React from 'react';
import "@components/Report-temp/report-temp.scss";

const ReportTable = ({data}:{data: any}) => {
  return (
    <div className="table-container mb-20">
      <table className="table table-striped">
        <thead>
            <tr className="table-primary">
                <th>
                    <div className="wd-120 d-flex justify-content-center align-items-center">
                        <div>หน่วยงาน</div>
                    </div>
                </th>
                <th>
                    <div className="wd-140 d-flex flex-column justify-content-center align-items-center">
                        <div>รูปแบบการ</div>
                        <div>คำนวณตัวชี้วัด</div>
                    </div>
                </th>
                <th>
                    <div className="wd-140 d-flex justify-content-center align-items-center">
                        <div>วิธีการคำนวนตัวชี้วัด</div>
                    </div>
                </th>
                <th>
                    <div className="wd-80 d-flex justify-content-center align-items-center">
                        <div>หน่วย</div>
                    </div>
                </th>
                <th>
                    <div className="wd-500 d-flex justify-content-center align-items-center">
                        <div>ตัวชี้วัด</div>
                    </div>
                </th>
                <th>
                    <div className="wd-100 d-flex justify-content-center align-items-center">
                        <div>แผนงาน</div>
                    </div>
                </th>
                <th>
                    <div className="wd-200 d-flex justify-content-center align-items-center">
                        <div>หมายเหตุ</div>
                    </div>
                </th>
                <th>
                    <div className="wd-80 d-flex justify-content-center align-items-center">
                        <div>สถานะ</div>
                    </div>
                </th>
            </tr>
        </thead>
        <tbody>
          {data.map((items: any) => (
            <tr>
              <th>
                <div className="normalText d-flex justify-content-center align-items-center">{items.planName}</div>
              </th>
              
              <th>
                <div className="normalText d-flex justify-content-center align-items-center">{items.type}</div>
              </th>
              <th>
                <div className="normalText d-flex justify-content-center align-items-center">{items.calculating}</div>
              </th>
              <th>
                <div className="normalText d-flex justify-content-center align-items-center">{items.measure}</div>
              </th>
              <th>
                <div className="normalText d-flex justify-content-left align-items-center">{items.indicatorsName}</div>
              </th>
              <th>
                <div className="normalText d-flex justify-content-left align-items-center">{items.planNumber}</div>
              </th>
              <th>
                <div className="normalText d-flex justify-content-left align-items-center">{items.note}</div>
              </th>
              <th>
                <div className="normalText d-flex justify-content-center align-items-center">{items.status}</div>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportTable;
