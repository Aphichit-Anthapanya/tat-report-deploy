import React from 'react';
import "@components/Report-temp/report-temp.scss";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect} from "react";

const Table = ({data}:any) => {

  return (
        <> 
        {data.map((items: any, index: any) => {
            return items.note?.map((noteItem: any, Q1Index: any) => {
                                        return(
                                            <>
                                            <tr>
                                                    <th rowSpan={7}>
                                                        <div className="d-flex justify-content-center align-items-center">
                                                            <div>{noteItem.conclusion}</div>
                                                        </div>
                                                    </th>
                                                    <th rowSpan={7}>
                                                        <div className="d-flex justify-content-center align-items-center">
                                                            <div>{noteItem.name}</div>
                                                        </div>
                                                    </th>        
                                                    <th>
                                                        <div className="d-flex justify-content-left align-items-center">
                                                            {noteItem.method1.name}
                                                        </div> 
                                                    </th>
                                                    <th colSpan={2}></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">
                                                        {noteItem.method1.method}
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">
                                                        {noteItem.method1.budget}
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">
                                                        {noteItem.method1.contractBudget}
                                                        </div>
                                                    </th>
                                            
                                                    <th colSpan={16}></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">
                                                        {noteItem.method1.note}
                                                        </div>
                                                    </th>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        <div className="d-flex justify-content-left align-items-center">
                                                        {noteItem.method2.name}
                                                        </div> 
                                                    </th>
                                                    <th colSpan={2}></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">
                                                        {noteItem.method2.method}
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">
                                                        {noteItem.method2.budget}
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">
                                                        {noteItem.method2.contractBudget}
                                                        </div>
                                                    </th>
                                            
                                                    <th colSpan={16}></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">
                                                        {noteItem.method2.note}
                                                        </div>
                                                    </th>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        <div className="d-flex justify-content-left align-items-center">
                                                        {noteItem.method3.name}
                                                        </div> 
                                                    </th>
                                                    <th colSpan={2}></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">
                                                        {noteItem.method3.method}
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">
                                                        {noteItem.method3.budget}
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">
                                                        {noteItem.method3.contractBudget}
                                                        </div>
                                                    </th>
                                            
                                                    <th colSpan={16}></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">
                                                        {noteItem.method3.note}
                                                        </div>
                                                    </th>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        <div className="d-flex justify-content-left align-items-center">
                                                        {noteItem.method4.name}
                                                        </div> 
                                                    </th>
                                                    <th colSpan={2}></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">
                                                        {noteItem.method4.method}
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">
                                                        {noteItem.method4.budget}
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">
                                                        {noteItem.method4.contractBudget}
                                                        </div>
                                                    </th>
                                            
                                                    <th colSpan={16}></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">
                                                        {noteItem.method4.note}
                                                        </div>
                                                    </th>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        <div className="d-flex justify-content-left align-items-center">
                                                        {noteItem.method5.name}
                                                        </div> 
                                                    </th>
                                                    <th colSpan={2}></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">
                                                        {noteItem.method5.method}
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">
                                                        {noteItem.method5.budget}
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">
                                                        {noteItem.method5.contractBudget}
                                                        </div>
                                                    </th>
                                            
                                                    <th colSpan={16}></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">
                                                        {noteItem.method5.note}
                                                        </div>
                                                    </th>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">
                                                        {noteItem.total.name}
                                                        </div> 
                                                    </th>
                                                    <th colSpan={2}></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">
                                                        {noteItem.total.method}
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex  justify-content-right align-items-center">
                                                        {noteItem.total.budget}
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">
                                                        {noteItem.total.contractBudget}
                                                        </div>
                                                    </th>
                                            
                                                    <th colSpan={16}></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">
                                                        {noteItem.total.note}
                                                        </div>
                                                    </th>
                                                </tr>
                                            </>
                                        );
            })})
        }
        </>  
    );
};

export default Table;