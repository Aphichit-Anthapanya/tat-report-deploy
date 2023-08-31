"use client";

import React from "react";
import { useState } from "react";
import "@components/Report-temp/report-temp.scss";
import Link from "next/link";
import { PDFViewer, Document, Page, Text } from '@react-pdf/renderer';

export default function () {
    const MyDocument = () => (
        <Document>
          <Page>
            <Text>PDF Content Goes Here</Text>
          </Page>
        </Document>
      );
    
    return (
        <>
            <div className='d-flex flex-column' style={{width: '100%'}}>
              <div className='search-wrapper-section d-flex flex-column justify-content-center align-items-center'>
              <div>
                <PDFViewer width="500" height="400">
                    <MyDocument />
                </PDFViewer>
            </div>      
              </div>
           </div>
        </>
    )
}