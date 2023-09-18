import React from 'react';
import "@components/Report-temp/report-temp.scss";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect} from "react";

const Table = ({data}:any) => {

  return (
        <>
        {data.map((items: any, index: any) => {
            return items.note && items.note.map((noteItem: any, Q1Index: any) => {
                                        return(
                                            <>
                                            <tr>
                                                    <th colSpan={24}></th>
                                                </tr>

                                                <tr>
                                                    <th></th>
                                                    <th colSpan={2}>
                                                        <div className="d-flex justify-content-center align-items-center">หมายเหตุ</div>
                                                    </th>
                                                    <th colSpan={22}></th> 
                                                </tr>

                                                <tr>
                                                    <th></th>
                                                    <th colSpan={2}>
                                                        <div className="d-flex justify-content-center align-items-center">{noteItem.procurementOfFiscalYear.name}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{noteItem.procurementOfFiscalYear.measure}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{noteItem.procurementOfFiscalYear.value}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{noteItem.procurementOfFiscalYear.measureOfUnit}</div>
                                                    </th>
                                                    <th colSpan={19}></th>
                                                </tr>

                                                <tr>
                                                    <th></th>
                                                    <th colSpan={2}>
                                                        <div className="d-flex justify-content-center align-items-center">{noteItem.addInQ1.name}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{noteItem.addInQ1.measure}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{noteItem.addInQ1.value}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{noteItem.addInQ1.measureOfUnit}</div>
                                                    </th>
                                                    <th colSpan={19}></th>
                                                </tr> 

                                                <tr>
                                                    <th></th>
                                                    <th colSpan={2}></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{noteItem.total.measure}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{noteItem.total.value}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{noteItem.total.measureOfUnit}</div>
                                                    </th>
                                                    <th colSpan={19}></th>
                                                </tr>
                                                <tr>
                                                <th></th>
                                                    <th colSpan={2}></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{noteItem.doneInQ1.name}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{noteItem.doneInQ1.value}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{noteItem.doneInQ1.measureOfUnit}</div>
                                                    </th>
                                                    <th colSpan={19}></th>
                                                </tr> 
                                                <tr>
                                                <th></th>
                                                    <th colSpan={2}></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{noteItem.continueInQuarter2.name}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{noteItem.continueInQuarter2.value}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{noteItem.continueInQuarter2.measureOfUnit}</div>
                                                    </th>
                                                    <th colSpan={19}></th>
                                                </tr>
                                            </>
                                        );
            })})
        }
        </>  
    );
};

export default Table;