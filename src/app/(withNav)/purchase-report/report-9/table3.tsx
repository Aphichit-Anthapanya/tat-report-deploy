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
        return items.budget?.map((budgetItem: any, budgetIndex: any) => {
            return budgetItem.info && budgetItem.info.map((infoItem: any, infoIndex: any) => {
                return infoItem.subInfo.map((item:any, itemIndex:any) => {
                    let rows = [];
                    if (items.budget.length > budgetIndex) {
                        const successRowKey = `success-${budgetIndex}-${budgetItem?.budgetName}`;
                        if (!uniqueRows.has(successRowKey)) {
                            rows.push(
                                <tr className="table-success" key={successRowKey}>
                                    <th></th>
                                                    <th>
                                                        <div className="d-flex justify-content-left align-items-center ml-5">{budgetItem?.budgetName}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{budgetItem.totalItems}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{budgetItem.contractLimitBudget}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{budgetItem.result.Q1}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{budgetItem.result.Q2}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{budgetItem.result.Q3}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{budgetItem.result.Q4}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{budgetItem.remainBalanceBudget}</div>
                                                    </th>
                                </tr>
                                );
                            uniqueRows.add(successRowKey);
                            }
                            
                            if (items.budget.length > budgetIndex) {
                                const successRowKey = `success-คิดเป็นร้อยละ-${budgetIndex}-${budgetItem?.budgetName}`;
                                if (!uniqueRows.has(successRowKey)) {
                                    rows.push(
                                        <tr className="table-success" key={successRowKey}>
                                            <th></th>
                                                            <th>
                                                                <div className="d-flex justify-content-center align-items-center">คิดเป็นร้อยละ</div>
                                                            </th>
                                                            <th>
                                                                <div className="d-flex justify-content-center align-items-center">{budgetItem.percentage.totalItems}</div>
                                                            </th>
                                                            <th>
                                                                <div className="d-flex justify-content-right align-items-center">{budgetItem.percentage.contractLimitBudget}</div>
                                                            </th>
                                                            <th>
                                                                <div className="d-flex justify-content-right align-items-center">{budgetItem.percentage.result.Q1}</div>
                                                            </th>
                                                            <th>
                                                                <div className="d-flex justify-content-right align-items-center">{budgetItem.percentage.result.Q2}</div>
                                                            </th>
                                                            <th>
                                                                <div className="d-flex justify-content-right align-items-center">{budgetItem.percentage.result.Q3}</div>
                                                            </th>
                                                            <th>
                                                                <div className="d-flex justify-content-right align-items-center">{budgetItem.percentage.result.Q4}</div>
                                                            </th>
                                                            <th>
                                                                <div className="d-flex justify-content-center align-items-center">{budgetItem.percentage.remainBalanceBudget}</div>
                                                            </th>
                                        </tr>
                                        );
                                    uniqueRows.add(successRowKey);
                                }
                            }
                        
                        
                        if (infoIndex < budgetItem.info.length) {
                            const warningRowKey = `warning-${infoIndex}-${budgetItem?.budgetName}-${infoItem.budgetNamesub}`;
                            if (!uniqueRows.has(warningRowKey)) {
                                rows.push(
                                    <tr className="table-warning" key={warningRowKey}>
                                                    <th></th>
                                                    <th>
                                                        <div className="ml-25 d-flex justify-content-left align-items-center">{infoItem.budgetNamesub}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{infoItem.totalItems}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{infoItem.contractLimitBudget}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{infoItem.result.Q1}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{infoItem.result.Q2}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{infoItem.result.Q3}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{infoItem.result.Q4}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{infoItem.remainBalanceBudget}</div>
                                                    </th>
                                    </tr>
                                );
                                uniqueRows.add(warningRowKey);
                            }
                            if (infoIndex < budgetItem.info.length) {
                                const warningRowKey = `warning-คิดเป็นร้อยละ-${infoIndex}-${budgetItem?.budgetName}-${infoItem.budgetNamesub}`;
                                if (!uniqueRows.has(warningRowKey)) {
                                    rows.push(
                                        <tr className="table-warning" key={warningRowKey}>
                                                        <th></th>
                                                        <th>
                                                            <div className="d-flex justify-content-center align-items-center">คิดเป็นร้อยละ</div>
                                                        </th>
                                                        <th>
                                                            <div className="d-flex justify-content-center align-items-center">{infoItem.percentage.totalItems}</div>
                                                        </th>
                                                        <th>
                                                            <div className="d-flex justify-content-right align-items-center">{infoItem.percentage.contractLimitBudget}</div>
                                                        </th>
                                                        <th>
                                                            <div className="d-flex justify-content-right align-items-center">{infoItem.percentage.result.Q1}</div>
                                                        </th>
                                                        <th>
                                                            <div className="d-flex justify-content-right align-items-center">{infoItem.percentage.result.Q2}</div>
                                                        </th>
                                                        <th>
                                                            <div className="d-flex justify-content-right align-items-center">{infoItem.percentage.result.Q3}</div>
                                                        </th>
                                                        <th>
                                                            <div className="d-flex justify-content-right align-items-center">{infoItem.percentage.result.Q4}</div>
                                                        </th>
                                                        <th>
                                                            <div className="d-flex justify-content-center align-items-center">{infoItem.percentage.remainBalanceBudget}</div>
                                                        </th>
                                        </tr>
                                    );
                                    uniqueRows.add(warningRowKey);
                                }
                            }
                            
                            rows.push(
                                <tr>
                                            <th>
                                                <div className="normalText d-flex justify-content-center align-items-center ml-5">{item.number}</div>
                                                </th>
                                            <th>
                                                <div className="ml-40 normalText d-flex justify-content-left align-items-center ml-5">{item.department}</div>
                                            </th>
                                            <th>
                                                <div className="normalText d-flex justify-content-center align-items-center">{item.totalItems}</div>
                                            </th>
                                            <th>
                                                <div className="normalText d-flex justify-content-right align-items-center">{item.contractLimitBudget}</div>
                                            </th>
                                            <th>
                                                <div className="normalText d-flex justify-content-right align-items-center">{item.result.Q1}</div>
                                            </th>
                                            <th>
                                                <div className="normalText d-flex justify-content-right align-items-center">{item.result.Q2}</div>
                                            </th>
                                            <th>
                                                <div className="normalText d-flex justify-content-right align-items-center">{item.result.Q3}</div>
                                            </th>
                                            <th>
                                                <div className="normalText d-flex justify-content-right align-items-center">{item.result.Q4}</div>
                                            </th>
                                            <th>
                                                <div className="normalText d-flex justify-content-center align-items-center">{item.remainBalanceBudget}</div>
                                            </th>
                                </tr>
                            );
                                
                        }
                    }
                    return rows;
                })})})})}
        </>  
    );
};

export default Table;
