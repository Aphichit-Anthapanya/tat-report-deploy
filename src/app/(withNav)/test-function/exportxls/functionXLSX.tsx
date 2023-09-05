import React from 'react';
import "@components/Report-temp/report-temp.scss";

const ReportTable = ({data}:{data: any}) => {
  return (
    <div className="table-responsive mb-20">
      <table className="table table-bordered">
        <tbody>
            <tr>
                                                <th colSpan={7}>
                                                    <div className="d-flex justify-content-center">ตัวชี้วัดระดับโครงการ(Outcome)</div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="wd-50 d-flex justify-content-center align-items-center">ลำดับที่</div>
                                                </th>
                                                <th><div className="wd-400 d-flex justify-content-center align-items-center">ชื่อตัวชี้วัด</div></th>
                                                <th><div className="wd-100 d-flex justify-content-center align-items-center">รวม (%)</div></th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ไตรมาสที่ 1</div>
                                                        <div>(%)</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ไตรมาสที่ 2</div>
                                                        <div>(%)</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ไตรมาสที่ 3</div>
                                                        <div>(%)</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ไตรมาสที่ 4</div>
                                                        <div>(%)</div>
                                                    </div>
                                                </th>
                                            </tr>
          {data.map((items: any) => (
            <tr>
              <th>
                <div className="normalText d-flex justify-content-center align-items-center">{items.Name}</div>
              </th>
              <th>
                <div className="normalText d-flex justify-content-center align-items-center">{items.Age}</div>
              </th>
              <th>
                <div className="normalText d-flex justify-content-center align-items-center">{items.Country}</div>
              </th>
              <th>
                <div className="normalText d-flex justify-content-center align-items-center">{items.q1}</div>
              </th>
              <th>
                <div className="normalText d-flex justify-content-center align-items-center">{items.q2}</div>
              </th>
              <th>
                <div className="normalText d-flex justify-content-center align-items-center">{items.q3}</div>
              </th>
              <th>
                <div className="normalText d-flex justify-content-center align-items-center">{items.q4}</div>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportTable;
