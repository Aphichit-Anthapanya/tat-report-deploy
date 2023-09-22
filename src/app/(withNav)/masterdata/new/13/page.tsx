"use client";

import React from "react";
import { useState } from "react";
import "@components/Report-temp/report-temp.scss";
import Table from './table';
import { useParams, useRouter } from "next/navigation";

export default function Page() {
    
    return (
        <>
            <div className='d-flex flex-column' style={{width: '100%'}}>
                    <Table/>
                </div>
        </>
    )
}