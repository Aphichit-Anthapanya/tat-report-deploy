import React from 'react';
import "@components/Report-temp/report-temp.scss";

const ReportTable = ({data}:{data: any}) => {
  return (
    <div className="table-responsive mb-20">
      <table className="table table-bordered">
        <tbody>
            <tr className="table-primary">
                                                <th>
                                                    <div className="wd-300 d-flex justify-content-center align-items-center">
                                                        <div>วัตถุประสงค์เชิงยุทธศาสตร์</div>
                                                    </div>
                                                </th>             
                                                <th>
                                                    <div className="wd-500 d-flex flex-column justify-content-center align-items-center">
                                                        <div>กลยุทธ์</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-480 d-flex justify-content-center align-items-center">
                                                        <div>แผนงาน</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-350 d-flex justify-content-center align-items-center">
                                                        <div>หมวด พ.ร.บ.งบประมาณ</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-450 d-flex justify-content-center align-items-center">
                                                        <div>รายการค่าใช้จ่าย</div>
                                                    </div>
                                                </th>
                                            </tr>
          {data.map((items: any) => (
            <tr>
              <th>
                <div className="normalText d-flex justify-content-left align-items-center">{items.goal}</div>
              </th>
              
              <th>
                <div className="normalText d-flex justify-content-left align-items-center">{items.strategy}</div>
              </th>
              <th>
                <div className="normalText d-flex justify-content-left align-items-center">{items.plan}</div>
              </th>
              <th>
                <div className="normalText d-flex justify-content-left align-items-center">{items.actCategory}</div>
              </th>
              <th>
                <div className="normalText d-flex justify-content-left align-items-center">{items.payment}</div>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportTable;
