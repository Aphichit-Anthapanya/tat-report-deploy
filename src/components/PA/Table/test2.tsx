import React from 'react';
import "@components/Report-temp/report-temp.scss";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect} from "react";

const Table = () => {
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
              <th>
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
        <>
        {data.map((row: any, rowIdex: any) => {
            return data2.map((items:any) => {
                let rows = [];
                    rows.push(
                        <tr>
                            <th>
                                <div className="normalText add-button d-flex justify-content-center align-items-center">
                                    <span onClick={() => handleAddRow(row.id)}  style={{cursor: 'pointer'}}>เพิ่ม</span>
                                </div>
                            </th>
                            <th rowSpan={row.span}>
                                <div className="normalText d-flex justify-content-center align-items-center">
                                    {row.id}
                                </div>
                            </th>
                            <th>
                                <div className="normalText d-flex justify-content-center align-items-center">
                                    {row.name}
                                </div>
                            </th>
                        </tr>
                    );
                    rows.push(
                        <tr>
                            <th>
                                <div className="normalText delete-button d-flex justify-content-center align-items-center">
                                    <span onClick={() => handleAddRow(row.id)}  style={{cursor: 'pointer'}}>ลบ</span>
                                </div>
                            </th>
                            <th>
                                <div className="normalText d-flex justify-content-center align-items-center">
                                    {items.name}
                                </div>
                            </th>
                        </tr>
                    );
            })
        })}
        </>
  );
}

export default Table;