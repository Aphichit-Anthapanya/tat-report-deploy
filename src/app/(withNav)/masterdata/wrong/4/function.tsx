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
                    <div className="wd-80 d-flex justify-content-center align-items-center">
                        <div>หน่วย</div>
                    </div>
                </th>
                <th>
                    <div className="wd-500 d-flex flex-column justify-content-center align-items-center">
                        <div>ชื่อตัวชี้วัดระดับกิจกรรม (Output)</div>
                    </div>
                </th>
                <th>
                    <div className="wd-100 d-flex justify-content-center align-items-center">
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
                <div className="normalText d-flex justify-content-center align-items-center">{items.planName}</div>
              </th>
              <th>
                <div className="normalText d-flex justify-content-left align-items-center">
                    {items.type == 'รายงานผลจากรวมผลรายละเอียดย่อย' ? 
                        <div className='d-flex flex-column'>
                            <div>รายงานผลจากรวม</div>
                            <div>ผลรายละเอียดย่อย</div>
                        </div>
                    : <div>{items.type}</div>}
                </div>
              </th>
              <th>
                <div className="normalText d-flex justify-content-center align-items-center">{items.calculating}</div>
              </th>
              <th>
                <div className="normalText d-flex justify-content-center align-items-center">
                    {items.measure == 'โครงการ/กิจกรรม' ? 
                        <div className='d-flex flex-column'>
                            <div>โครงการ</div>
                            <div>/กิจกรรม</div>
                        </div>
                    : <div>{items.measure}</div>}</div>
              </th>
              <th>
                <div className="normalText d-flex justify-content-left align-items-center">{items.indicatorsName}</div>
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
