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
                    <div className="wd-80 d-flex flex-column justify-content-center align-items-center">
                        <div>ประเภท</div>
                        <div>กลุ่มเป้าหมาย</div>
                    </div>
                </th>
                <th>
                    <div className="wd-500 d-flex justify-content-center align-items-center">
                        <div>ชื่อกลุ่มเป้าหมาย (TH+EN)</div>
                    </div>
                </th>
                <th>
                    <div className="wd-80 d-flex justify-content-center align-items-center">
                        <div>หมายเหตุ</div>
                    </div>
                </th>
            </tr>
          {data.map((items: any) => (
            <tr>
              <th>
                <div className="normalText d-flex justify-content-center align-items-center">{items.number}</div>
              </th>
              
              <th>
                <div className="normalText d-flex justify-content-center align-items-center">{items.target}</div>
              </th>
              <th>
                <div className="normalText d-flex justify-content-left align-items-center">{items.targetName}</div>
              </th>
              <th>
                <div className="normalText d-flex justify-content-center align-items-center">{items.note}</div>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportTable;
