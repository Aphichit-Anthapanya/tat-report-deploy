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
            console.log(items.total?.contractLimitBudget)
            return items.total?.contractLimitBudget && items.total?.contractLimitBudget.map((totalItem: any, totalIndex: any) => {
                return items.total?.onProgressBudget && items.total?.onProgressBudget.map((CLIItem: any, CLIIndex: any) => {
                    return items.total?.done && items.total?.done.map((RBItem: any, RBIndex: any) => {
                            return items.total?.cancel && items.total?.cancel.map((cancelItem: any, cancelIndex: any) => {
                                return items.total?.nextYear && items.total?.nextYear.map((nextYearItem: any, nextYearIndex: any) => {
                                    return(
                                        <>
                                        <tr className="table-info">
                                                    <th></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">รวมทั้งสิ้น</div>
                                                    </th>
                                                    <th colSpan={2}></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{items.total?.totalItems}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{items.total?.totalBudget}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{totalItem.items}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{totalItem.budget}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{CLIItem.items}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{CLIItem.budget}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{items.total?.remainBalanceBudget}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{RBItem.items}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{RBItem.budget}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{cancelItem.items}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{cancelItem.budget}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{nextYearItem.items}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{nextYearItem.budget}</div>
                                                    </th>
                                                    <th></th>
                                                </tr>
                                        </>
                                    );
            })})})})})})}
        </>  
    );
};

export default Table;
