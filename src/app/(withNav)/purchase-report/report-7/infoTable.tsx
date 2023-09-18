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
                    return budgetItem.Q1 && budgetItem.Q1.map((Q1Item: any, Q1Index: any) => {
                        return budgetItem.Q2 && budgetItem.Q2.map((Q2Item: any, Q2Index: any) => {
                            return budgetItem.Q3 && budgetItem.Q3.map((Q3Item: any, Q3Index: any) => {
                                return budgetItem.Q4 && budgetItem.Q4.map((Q4Item: any, Q4Index: any) => {
                                    return budgetItem.info && budgetItem.info.map((infoItem: any, infoIndex: any) => {
                                        return infoItem.Q1 && infoItem.Q1.map((infoQ1Item: any, infoQ1Index: any) => {
                                            return infoItem.Q2 && infoItem.Q2.map((infoQ2Item: any, infoQ2Index: any) => {
                                                return infoItem.Q3 && infoItem.Q3.map((infoQ3Item: any, infoQ3Index: any) => {
                                                    return infoItem.Q4 && infoItem.Q4.map((infoQ4Item: any, infoQ4Index: any) => {
                                                        return infoItem.subInfo.map((item:any, itemIndex:any) => {
                                                            return item.Q1 && item.Q1.map((itemQ1Item: any, itemQ1Index: any) => {
                                                                return item.Q2 && item.Q2.map((itemQ2Item: any, itemQ2Index: any) => {
                                                                    return item.Q3 && item.Q3.map((itemQ3Item: any, itemQ3Index: any) => {
                                                                        return item.Q4 && item.Q4.map((itemQ4Item: any, itemQ4Index: any) => {
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
                                                        <div className="d-flex justify-content-center align-items-center">{budgetItem?.totalItems}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{budgetItem?.totalBudget}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{budgetItem?.contractLimitBudget}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{budgetItem?.notOnProgressBudget}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{budgetItem?.remainBalanceBudget}</div>
                                                    </th>
                                                    {/* Quarter 1*/}
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{Q1Item.ATP}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{Q1Item.notATP}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{Q1Item.done}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{Q1Item.cancel}</div>  
                                                    </th>
                                                    {/* Quarter 2*/}
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{Q2Item.ATP}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{Q2Item.notATP}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{Q2Item.done}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{Q2Item.cancel}</div>  
                                                    </th>
                                                    {/* Quarter 3*/}
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{Q3Item.ATP}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{Q3Item.notATP}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{Q3Item.done}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{Q3Item.cancel}</div>  
                                                    </th>
                                                    {/* Quarter 4*/}
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{Q4Item.ATP}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{Q4Item.notATP}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{Q4Item.done}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{Q4Item.cancel}</div>  
                                                    </th>
                                                    <th></th>
                                </tr>
                                );
                            uniqueRows.add(successRowKey);
                        }
                        
                        
                        if (infoIndex < budgetItem.info.length) {
                            const warningRowKey = `warning-${infoIndex}-${budgetItem?.budgetName}-${infoItem.budgetNamesub}`;
                            if (!uniqueRows.has(warningRowKey)) {
                                rows.push(
                                    <tr className="table-warning" key={warningRowKey}>
                                                    <th></th>
                                                    <th>
                                                        <div className="ml-25 d-flex justify-content-left align-items-center ml-5">{infoItem.budgetNamesub}</div>
                                                    </th>
                                                    
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{infoItem?.totalItems}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{infoItem?.totalBudget}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{infoItem?.contractLimitBudget}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{infoItem?.notOnProgressBudget}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{infoItem?.remainBalanceBudget}</div>
                                                    </th>
                                                    {/* Quarter 1*/}
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{infoQ1Item.ATP}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{infoQ1Item.notATP}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{infoQ1Item.done}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{infoQ1Item.cancel}</div>  
                                                    </th>
                                                    {/* Quarter 2*/}
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{infoQ2Item.ATP}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{infoQ2Item.notATP}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{infoQ2Item.done}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{infoQ2Item.cancel}</div>  
                                                    </th>
                                                    {/* Quarter 3*/}
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{infoQ3Item.ATP}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{infoQ3Item.notATP}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{infoQ3Item.done}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{infoQ3Item.cancel}</div>  
                                                    </th>
                                                    {/* Quarter 4*/}
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{infoQ4Item.ATP}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{infoQ4Item.notATP}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{infoQ4Item.done}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{infoQ4Item.cancel}</div>  
                                                    </th>
                                                    {/*note*/}
                                                    <th></th>
                                    </tr>
                                );
                                uniqueRows.add(warningRowKey);
                            }
                            rows.push(
                                <tr>
                                            <th><div className="normalText d-flex justify-content-center align-items-center">{item.number}</div></th>
                                            <th>
                                                <div className="normalText ml-40 d-flex justify-content-left align-items-center">{item.department}</div>
                                            </th>
                                            
                                            <th>
                                                <div className="normalText d-flex justify-content-center align-items-center">{item?.totalItems}</div>
                                            </th>
                                            <th>
                                                <div className="normalText d-flex justify-content-right align-items-center">{item?.totalBudget}</div>
                                            </th>
                                            <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">{item?.contractLimitBudget}</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">{item?.notOnProgressBudget}</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">{item?.remainBalanceBudget}</div>
                                                    </th>
                                            {/* Quarter 1*/}
                                            <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">{itemQ1Item.ATP}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">{itemQ1Item.notATP}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">{itemQ1Item.done}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">{itemQ1Item.cancel}</div>  
                                                    </th>
                                                    {/* Quarter 2*/}
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">{itemQ2Item.ATP}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">{itemQ2Item.notATP}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">{itemQ2Item.done}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">{itemQ2Item.cancel}</div>  
                                                    </th>
                                                    {/* Quarter 3*/}
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">{itemQ3Item.ATP}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">{itemQ3Item.notATP}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">{itemQ3Item.done}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">{itemQ3Item.cancel}</div>  
                                                    </th>
                                                    {/* Quarter 4*/}
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">{itemQ4Item.ATP}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">{itemQ4Item.notATP}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">{itemQ4Item.done}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">{itemQ4Item.cancel}</div>  
                                                    </th>
                                                    {/*note*/}
                                                    <th></th>
                                </tr>
                            );
                            
                        }
                    }
                    return rows;
                })})})})})})})})})})
                })})})})})})
            }
        </>  
    );
};

export default Table;
