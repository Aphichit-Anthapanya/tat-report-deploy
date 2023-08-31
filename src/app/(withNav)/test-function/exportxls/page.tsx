"use client";

import React from 'react';
import ExportExcelButton from './ExportExcelButton';

export default function Page() {
  const data = [
  { name: 'Alice', age: 28 },
  { name: 'Bob', age: 35 },
  // ... other data rows
];

    return (
        <>
            <div className='d-flex flex-column' style={{width: '100%'}}>
            <div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Age</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <ExportExcelButton data={data} />
            </div>
           </div>
        </>
    )
}