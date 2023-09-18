import React from 'react';
import "@components/Report-temp/report-temp.scss";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect} from "react";

const Table = ({data}:any) => {
    {JSON.stringify(data)}
    let uniqueRows = new Set();
  return (
        <>
        {data.map((items: any, index: any) => {
        return items.procurementMethod?.map((PMItem: any, PMIndex: any) => {
            return(
                <>
                    <tr>
                        <th>
                            <div className="normalText d-flex justify-content-left align-items-center">{PMItem.nameOfMethod}</div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">{PMItem.numberOfItem}</div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-right align-items-center">{PMItem.budget.value}</div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">{PMItem.budget.percentage}</div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-right align-items-center">{PMItem.contractBudget.value}</div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">{PMItem.contractBudget.percentage}</div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-right align-items-center">{PMItem.notOnProgress.value}</div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">{PMItem.notOnProgress.percentage}</div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-right align-items-center">{PMItem.remainingBudget.value}</div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">{PMItem.remainingBudget.percentage}</div>
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
