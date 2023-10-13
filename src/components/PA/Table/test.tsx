import React, { useState } from 'react';

const YourComponent = () => {
  const [data, setData] = useState([
    { id: 1, name: 'Row 1', span: 1},
    { id: 2, name: 'Row 2', span: 1},
    { id: 3, name: 'Row 3', span: 1},
    { id: 4, name: 'Row 4', span: 1},
    { id: 5, name: 'Row 5', span: 1},
  ]);

  const [data2, setData2] = useState<any>([]);

  const handleAddRow = (id: number) => {
    const newRow = { id: id, name: `New Row ${data2.length + 1}`};
    const oldData = data.map(item => {
        if (item.id === id) {
          return [
            { id: item.id, name: `Row ${item.id}`, span: item.span+1}
          ];
        }
        return item;
      }).flat();
    setData(oldData);
    setData2([...data2, newRow]);
  };

  const result = data.map((row) => {
    const mappedData2 = data2.map((item: any) => {
      return (
        <tr key={item.id}>
          <th>
            <div className="normalText delete-button d-flex justify-content-center align-items-center">
              <span onClick={() => handleAddRow(row.id)} style={{cursor: 'pointer'}}>ลบ</span>
            </div>
          </th>
          <th>
            <div className="normalText d-flex justify-content-center align-items-center">
              {item.name}
            </div>
          </th>
        </tr>
      );
    });
  
    return (
      <React.Fragment key={row.id}>
        <tr>
          <th>
            <div className="normalText add-button d-flex justify-content-center align-items-center">
              <span onClick={() => handleAddRow(row.id)} style={{cursor: 'pointer'}}>เพิ่ม</span>
            </div>
          </th>
          <th rowSpan={row.span}>
            <div className="normalText d-flex justify-content-center align-items-center">
              {row.id}
            </div>
          </th>
          <th colSpan={9}>
            <div className="normalText d-flex justify-content-center align-items-center">
              {row.name}
            </div>
          </th>
        </tr>
        {mappedData2}
      </React.Fragment>
    );
  });
  return (
    <div className='table-responsive'>
      <table className="table">
          <thead className='table-primary'>
              <tr>
                  <th rowSpan={2}><div className="wd-25 d-flex justify-content-center align-items-center"></div></th>
                  <th rowSpan={2}>
                      <div className="wd-120 d-flex justify-content-center align-items-center">ค่าระดับ</div>
                  </th>
                  <th rowSpan={2}>
                      <div className="wd-200 d-flex justify-content-center align-items-center">ค่าเกณฑ์วัด</div>
                  </th>
                  <th rowSpan={2}>
                      <div className="wd-120 d-flex justify-content-center align-items-center">โครงการตัวแทน</div>
                  </th>
                  <th rowSpan={2}>
                      <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                          <div>หน่วยงานที่</div>
                          <div>รับผิดชอบ</div>
                      </div>
                  </th>
                  <th colSpan={2}>
                      <div className="wd-200 d-flex justify-content-center align-items-center">ระยะเวลาที่ดำเนินการ</div>
                  </th>
                  <th colSpan={4}>
                      <div className="wd-400 d-flex justify-content-center align-items-center">ค่าน้ำหนัก</div>
                  </th>
              </tr>
              <tr>
                  <th>
                      <div className="wd-100 d-flex justify-content-center align-items-center">วันที่เริ่มต้น</div>
                  </th>
                  <th>
                      <div className="wd-100 d-flex justify-content-center align-items-center">วันที่สิ้นสุด</div>
                  </th>
                  <th>
                      <div className="wd-100 d-flex justify-content-center align-items-center">ไตรมาส 1</div>
                  </th>
                  <th>
                      <div className="wd-100 d-flex justify-content-center align-items-center">ไตรมาส 2</div>
                  </th>
                  <th>
                      <div className="wd-100 d-flex justify-content-center align-items-center">ไตรมาส 3</div>
                  </th>
                  <th>
                      <div className="wd-100 d-flex justify-content-center align-items-center">ไตรมาส 4</div>
                  </th>
              </tr>
          </thead>
          <tbody>
            {result}
          </tbody>
      </table>
    </div>
);
}

export default YourComponent;