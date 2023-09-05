"use client";

import React from 'react';
import ExcelGenerator  from './ExportExcelButton';
import ReportTable from "./functionXLSX";
import * as XLSX from 'xlsx';

export default function Page() {
    const data2 = [
        { number: '1', idName: 'ร้อยละความคืบหน้าการดำเนินโครงการ', sumid: 100, q1:'', q2:'', q3:'', q4:''},
        { number: '2', idName: 'ร้อยละความคืบหน้าการดำเนินโครงการ', sumid: 100, q1:'', q2:'', q3:'', q4:''},
        // ... other data rows
      ];
      const data = [
        { Name: '', Age: '', Country: ''},
        { Name: 'John', Age: '30', Country: 'USA', TimeZone:'UTC'},
        { Name: 'Alice', Age: '25', Country: 'Canada', TimeZone:'UTC' },
        { Name: 'Bob', Age: '35', Country: 'UK', TimeZone:'UTC' },
      ];
    return (
        <>
            <div className='d-flex flex-column' style={{width: '100%'}}>
            <ReportTable data={data}/>
            <ExcelGenerator data={data} filename="exported-data.xlsx" />
           </div>
        </>
    )
}