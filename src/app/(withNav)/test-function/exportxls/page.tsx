"use client";

import React from 'react';
import ExcelGenerator  from './ExportExcelButton';

export default function Page() {

    return (
        <>
            <div className='d-flex flex-column' style={{width: '100%'}}>
            <ExcelGenerator />
           </div>
        </>
    )
}