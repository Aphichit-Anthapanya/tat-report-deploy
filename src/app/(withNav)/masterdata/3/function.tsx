import React from 'react';
import "@components/Report-temp/report-temp.scss";

const ReportTable = ({data}:{data: any}) => {
  return (
    <div className="table-responsive mb-20">
      <table className="table table-bordered">
        <tbody>
            <tr className="table-primary">
                <th>
                    <div className="wd-25 d-flex justify-content-center align-items-center">
                        <div>ลำดับ</div>
                    </div>
                </th>             
                <th>
                    <div className="wd-120 d-flex flex-column justify-content-center align-items-center">
                        <div>ชื่อแผน</div>
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
                        <div>วิธีการคำนวณตัวชี้วัด</div>
                    </div>
                </th>
                <th>
                    <div className="wd-125 d-flex justify-content-center align-items-center">
                        <div>หน่วย</div>
                    </div>
                </th>
                <th>
                    <div className="wd-500 d-flex flex-column justify-content-center align-items-center">
                        <div>ชื่อตัวชี้วัดระดับโครงการ (Outcome)</div>
                    </div>
                </th>
                <th>
                    <div className="wd-140 d-flex flex-column justify-content-center align-items-center">
                        <div>ตัวชี้วัดกลยุทธ์</div>
                        <div>ปี 2567</div>
                    </div>
                </th>
            </tr>
          {data.map((items: any) => (
            <tr>
              <th>
                <div className="normalText d-flex justify-content-center align-items-center">{items.number}</div>
              </th>
              
              <th>
                <div className="normalText d-flex justify-content-center align-items-center">{items.planName}</div>
              </th>
              <th>
                <div className="normalText d-flex justify-content-left align-items-center">{items.type}</div>
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
                <div className="normalText d-flex justify-content-center align-items-center">{items.indicatorsYear}</div>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportTable;
