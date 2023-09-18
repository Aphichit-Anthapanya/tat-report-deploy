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
            return items.total?.map((totalItem: any, budgetIndex: any) => {
                                    return(
                                        <>
                                        <tr className="table-info">
                                                    <th></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">รวมทั้งสิ้น</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{totalItem.totalItems}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{totalItem.contractLimitBudget}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{totalItem.result.Q1}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{totalItem.result.Q2}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{totalItem.result.Q3}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{totalItem.result.Q4}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{totalItem.remainBalanceBudget}</div>
                                                    </th>
                                        </tr>
                                        <tr className="table-info">
                                                    <th></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">คิดเป็นร้อยละ</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{totalItem.percentage.totalItems}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{totalItem.percentage.contractLimitBudget}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{totalItem.percentage.result.Q1}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{totalItem.percentage.result.Q2}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{totalItem.percentage.result.Q3}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{totalItem.percentage.result.Q4}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{totalItem.remainBalanceBudget}</div>
                                                    </th>
                                        </tr>
                                        </>
                                    );
                                })})}
        </>  
    );
};

export default Table;
