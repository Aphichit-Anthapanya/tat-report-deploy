import React from 'react';
import "@components/Report-temp/report-temp.scss";

const ReportTable = ({data}:{data: any}) => {
    const parsedItems = data.map((items: any) => ({
        number: parseInt(items.number, 10), // Use parseInt to convert to integer
        info: items.info,
        measure: items.measure
      }));
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
                    <div className="wd-500 d-flex flex-column justify-content-center align-items-center">
                        <div>ข้อมูล Master : ตัวชี้วัด-Outcome</div>
                    </div>
                </th>
                <th>
                    <div className="wd-140 d-flex justify-content-center align-items-center">
                        <div>หน่วยวัด</div>
                    </div>
                </th>
            </tr>
          {parsedItems.map((items: any) => {
            if (items.number < 66) {
                return (
                    <tr>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">{items.number}</div>
                        </th>
                        <th>
                            <div  className="normalText d-flex justify-content-left align-items-center">{items.info}</div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">{items.measure}</div>
                        </th>
                    </tr>
                );
            } else {
                return (
                    <tr>
                        <th>
                            <div className="normalText colorG d-flex justify-content-center align-items-center">{items.number}</div>
                        </th>
                        <th>
                            <div  className="normalText colorG d-flex justify-content-left align-items-center">{items.info}</div>
                        </th>
                        <th>
                            <div className="normalText colorG d-flex justify-content-center align-items-center">{items.measure}</div>
                        </th>
                  </tr>
                );
            }
        })}
        </tbody>
      </table>
    </div>
  );
};

export default ReportTable;
