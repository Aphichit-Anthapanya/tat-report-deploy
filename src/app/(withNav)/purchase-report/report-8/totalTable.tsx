import React from 'react';
import "@components/Report-temp/report-temp.scss";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect} from "react";

const Table = ({data}:any) => {
  return (
        <>
        {data.map((items: any, index: any) => {
        return items.total?.map((totalItem: any, totalIndex: any) => {
            return(
                <>
                    <tr>
                        <th>
                            <div className="d-flex justify-content-center align-items-center">{totalItem.nameOfMethod}</div>
                        </th>
                        <th>
                            <div className="d-flex justify-content-center align-items-center">{totalItem.numberOfItem}</div>
                        </th>
                        <th>
                            <div className="d-flex justify-content-right align-items-center">{totalItem.budget.value}</div>
                        </th>
                        <th>
                            <div className="d-flex justify-content-center align-items-center">{totalItem.budget.percentage}</div>
                        </th>
                        <th>
                            <div className="d-flex justify-content-right align-items-center">{totalItem.contractBudget.value}</div>
                        </th>
                        <th>
                            <div className="d-flex justify-content-center align-items-center">{totalItem.contractBudget.percentage}</div>
                        </th>
                        <th>
                            <div className="d-flex justify-content-right align-items-center">{totalItem.notOnProgress.value}</div>
                        </th>
                        <th>
                            <div className="d-flex justify-content-center align-items-center">{totalItem.notOnProgress.percentage}</div>
                        </th>
                        <th>
                            <div className="d-flex justify-content-right align-items-center">{totalItem.remainingBudget.value}</div>
                        </th>
                        <th>
                            <div className="d-flex justify-content-center align-items-center">{totalItem.remainingBudget.percentage}</div>
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
