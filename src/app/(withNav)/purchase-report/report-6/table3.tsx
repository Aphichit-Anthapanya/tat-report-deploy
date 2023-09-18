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
                    return budgetItem.doneInQ1 && budgetItem.doneInQ1.map((doneInQ1Item: any, doneInQ1Index: any) => {
                        return budgetItem.doneInQ2 && budgetItem.doneInQ2.map((doneInQ2Item: any, doneInQ2Index: any) => {
                            return budgetItem.doneInQ3 && budgetItem.doneInQ3.map((doneInQ3Item: any, doneInQ3Index: any) => {
                                return budgetItem.doneInQ4 && budgetItem.doneInQ4.map((doneInQ4Item: any, doneInQ4Index: any) => {
                                    return budgetItem.info && budgetItem.info.map((infoItem: any, infoIndex: any) => {
                                        return infoItem.doneInQ1 && infoItem.doneInQ1.map((infodoneInQ1Item: any, infodoneInQ1Index: any) => {
                                            return infoItem.doneInQ2 && infoItem.doneInQ2.map((infodoneInQ2Item: any, infodoneInQ2Index: any) => {
                                                return infoItem.doneInQ3 && infoItem.doneInQ3.map((infodoneInQ3Item: any, infodoneInQ3Index: any) => {
                                                    return infoItem.doneInQ4 && infoItem.doneInQ4.map((infodoneInQ4Item: any, infodoneInQ4Index: any) => {
                                                        return infoItem.subInfo.map((item:any, itemIndex:any) => {
                                                            return item.doneInQ1 && item.doneInQ1.map((itemdoneInQ1Item: any, itemdoneInQ1Index: any) => {
                                                                return item.doneInQ2 && item.doneInQ2.map((itemdoneInQ2Item: any, itemdoneInQ2Index: any) => {
                                                                    return item.doneInQ3 && item.doneInQ3.map((itemdoneInQ3Item: any, itemdoneInQ3Index: any) => {
                                                                        return item.doneInQ4 && item.doneInQ4.map((itemdoneInQ4Item: any, itemdoneInQ4Index: any) => {
                                                                            return item.activity.map((aItime:any, aItimeIndex:any) => {
                                                                                return aItime.doneInQ1 && aItime.doneInQ1.map((aItimedoneInQ1Item: any, aItimedoneInQ1Index: any) => {
                                                                                    return aItime.doneInQ2 && aItime.doneInQ2.map((aItimedoneInQ2Item: any, aItimedoneInQ2Index: any) => {
                                                                                        return aItime.doneInQ3 && aItime.doneInQ3.map((aItimedoneInQ3Item: any, aItimedoneInQ3Index: any) => {
                                                                                            return aItime.doneInQ4 && aItime.doneInQ4.map((aItimedoneInQ4Item: any, aItimedoneInQ4Index: any) => {
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
                                                    <th colSpan={2}></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{budgetItem?.totalItems}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{budgetItem?.totalBudget}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{doneInQ1Item.items}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{doneInQ1Item.budget}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{doneInQ2Item.items}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{doneInQ2Item.budget}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{doneInQ3Item.items}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{doneInQ3Item.budget}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{doneInQ4Item.items}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{doneInQ4Item.budget}</div>  
                                                    </th>
                                                    <th></th>
                                </tr>
                                );
                            uniqueRows.add(successRowKey);
                        }
                        
                        
                        if (infoIndex < budgetItem.info.length) {
                            const success2RowKey = `success2-${infoIndex}-${budgetItem?.budgetName}-${infoItem.budgetNamesub}`;
                            if (!uniqueRows.has(success2RowKey)) {
                                rows.push(
                                    <tr className="table-success" key={success2RowKey}>
                                                    <th></th>
                                                    <th>
                                                        <div className="d-flex justify-content-left align-items-center ml-5">{infoItem.budgetNamesub}</div>
                                                    </th>
                                                    <th colSpan={2}></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{infoItem?.totalItems}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{infoItem?.totalBudget}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{infodoneInQ1Item.items}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{infodoneInQ1Item.budget}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{infodoneInQ2Item.items}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{infodoneInQ2Item.budget}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{infodoneInQ3Item.items}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{infodoneInQ3Item.budget}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{infodoneInQ4Item.items}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{infodoneInQ4Item.budget}</div>  
                                                    </th>
                                                    <th></th>
                                    </tr>
                                );
                                uniqueRows.add(success2RowKey);
                            }
                            
                            if (itemIndex < infoItem.subInfo.length) {
                                const infoRowKey = `info-$-${budgetItem?.budgetName}-${item.department}`;
                                if (!uniqueRows.has(infoRowKey)) {
                                    rows.push(
                                        <tr className='table-warning' >
                                                    <th></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center ml-5">{item.department}</div>
                                                    </th>
                                                    <th colSpan={2}></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{item?.totalItems}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{item?.totalBudget}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{itemdoneInQ1Item.items}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{itemdoneInQ1Item.budget}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{itemdoneInQ2Item.items}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{itemdoneInQ2Item.budget}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{itemdoneInQ3Item.items}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{itemdoneInQ3Item.budget}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{itemdoneInQ4Item.items}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{itemdoneInQ4Item.budget}</div>  
                                                    </th>
                                                    <th></th>
                                        </tr>
                                    );
                                    uniqueRows.add(infoRowKey);
                                }
                                rows.push(
                                            <tr>
                                                <th><div className="normalText d-flex justify-content-center align-items-center">
                                                    {aItime.activityNumber}
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center">{aItime.activityName}</div>
                                                </th>
                                                <th><div className="normalText d-flex justify-content-left align-items-center">{aItime.subDepartment}</div></th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">
                                                        {aItime.departmentShort}
                                                    </div>
                                                </th>
                                                <th></th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-right align-items-center">
                                                        {aItime.totalBudget}
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="d-flex justify-content-center align-items-center">{aItimedoneInQ1Item.items}</div>  
                                                </th>
                                                <th>
                                                    <div className="d-flex justify-content-right align-items-center">{aItimedoneInQ1Item.budget}</div>  
                                                </th>
                                                <th>
                                                    <div className="d-flex justify-content-center align-items-center">{aItimedoneInQ2Item.items}</div>  
                                                </th>
                                                <th>
                                                    <div className="d-flex justify-content-right align-items-center">{aItimedoneInQ2Item.budget}</div>  
                                                </th>
                                                <th>
                                                    <div className="d-flex justify-content-center align-items-center">{aItimedoneInQ3Item.items}</div>  
                                                </th>
                                                <th>
                                                    <div className="d-flex justify-content-right align-items-center">{aItimedoneInQ3Item.budget}</div>  
                                                </th>
                                                <th>
                                                    <div className="d-flex justify-content-center align-items-center">{aItimedoneInQ4Item.items}</div>  
                                                </th>
                                                <th>
                                                    <div className="d-flex justify-content-right align-items-center">{aItimedoneInQ4Item.budget}</div>  
                                                </th>
                                                <th></th>
                                            </tr>
                            );
                            }
                        }
                    }
                    return rows;
                })})})})})})})})})})
                })})})})})})})})})})})
            }
        </>  
    );
};

export default Table;
