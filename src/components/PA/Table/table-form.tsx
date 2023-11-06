import React, { useState } from 'react';
import "../ball.scss";

const TableComponent = () => {
  const [data, setData] = useState([
    {id: 1, name: '' },
    {id: 2, name: '' },
    {id: 3, name: '' },
    {id: 4, name: '' },
    {id: 5, name: '' },
  ]);

  const handleAddRow = (id: number) => {
    const newData = data.map(item => {
      if (item.id === id) {
        return [{ id: item.id, name: item.name }, { id: parseFloat(`${item.id}.${data.length}`), name: item.name}]
      }  else {
        return item;
      }
    }).flat();
    setData(newData);
  };

  const handleDeleteRow = (id: number) => {
    setData(data.filter((row) => row.id !== id));
  };

  return (
      <div className='d-flex flex-row mt-10'>
        <table className="table">
            <thead>
            <tr className='table-primary'>
                <th>
                    <div className="wd-120 d-flex justify-content-center align-items-center">ค่าระดับ</div>
                </th>
                <th>
                    <div className="wd-200 d-flex justify-content-center align-items-center">ค่าเกณฑ์วัด</div>
                </th>
                <th><div className="wd-25 d-flex justify-content-center align-items-center"></div></th>
            </tr>
            </thead>
            <tbody>
            {data.map((row: any) => (
                <tr key={row.id}>
                    <th>
                        <div className="normalText d-flex justify-content-center align-items-center">{Math.floor(row.id)}</div>
                    </th>
                    <th>
                        <div className="normalText d-flex justify-content-center align-items-center">[ดึงค่า]</div>
                    </th>
                    <th>
                        <div className="normalText add-button d-flex justify-content-center align-items-center">
                            <span onClick={() => handleAddRow(row.id)} style={{cursor: 'pointer'}}>เพิ่ม</span>
                        </div>
                    </th>
                </tr>
            ))}
            </tbody>
        </table>
      </div>
  );
};

export default TableComponent;
