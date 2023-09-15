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
            return budgetItem.contractLimitBudget && budgetItem.contractLimitBudget.map((CLBItem: any, CLBIIndex: any) => {
                return budgetItem.onProgressBudget && budgetItem.onProgressBudget.map((OPDItem: any, OPDIndex: any) => {
                    return budgetItem.done && budgetItem.done.map((doneItem: any, doneIndex: any) => {
                        return budgetItem.cancel && budgetItem.cancel.map((cancelItem: any, cancelIndex: any) => {
                            return budgetItem.nextYear && budgetItem.nextYear.map((nextYearItem: any, nextYearIndex: any) => {
                                return budgetItem.info && budgetItem.info.map((infoItem: any, infoIndex: any) => {
                                    return infoItem.contractLimitBudget && infoItem.contractLimitBudget.map((infoCLBItem: any, infoCLBIIndex: any) => {
                                        return infoItem.onProgressBudget && infoItem.onProgressBudget.map((infoOPDItem: any, infoOPDIndex: any) => {
                                            return infoItem.done && infoItem.done.map((infodoneItem: any, infodoneIndex: any) => {
                                                return infoItem.cancel && infoItem.cancel.map((infocancelItem: any, infocancelIndex: any) => {
                                                    return infoItem.nextYear && infoItem.nextYear.map((infonextYearItem: any, infonextYearIndex: any) => {
                                                        return infoItem.subInfo.map((item:any, itemIndex:any) => {
                                                            return item.contractLimitBudget && item.contractLimitBudget.map((itemCLBItem: any, itemCLBIIndex: any) => {
                                                                return item.onProgressBudget && item.onProgressBudget.map((itemOPDItem: any, itemOPDIndex: any) => {
                                                                    return item.done && item.done.map((itemdoneItem: any, itemdoneIndex: any) => {
                                                                        return item.cancel && item.cancel.map((itemcancelItem: any, itemcancelIndex: any) => {
                                                                            return item.nextYear && item.nextYear.map((itemnextYearItem: any, itemnextYearIndex: any) => {
                                                                            return item.activity.map((aItime:any, aItimeIndex:any) => {
                                                                                return aItime.contractLimitBudget && aItime.contractLimitBudget.map((aItimeCLBItem: any, aItimeCLBIIndex: any) => {
                                                                                    return aItime.onProgressBudget && aItime.onProgressBudget.map((aItimeOPDItem: any, aItimeOPDIndex: any) => {
                                                                                        return aItime.done && aItime.done.map((aItimedoneItem: any, aItimedoneIndex: any) => {
                                                                                            return aItime.cancel && aItime.cancel.map((aItimecancelItem: any, aItimecancelIndex: any) => {
                                                                                                return aItime.nextYear && aItime.nextYear.map((aItimenextYearItem: any, aItimenextYearIndex: any) => {
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
                                                        <div className="d-flex justify-content-center align-items-center">{CLBItem.items}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{CLBItem.budget}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{OPDItem.items}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{OPDItem.budget}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{budgetItem?.remainBalanceBudget}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{doneItem.items}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{doneItem.budget}</div>  
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
                                                        <div className="d-flex justify-content-center align-items-center">{nextYearItem.budget}</div>  
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
                                                        <div className="d-flex justify-content-center align-items-center">{infoCLBItem.items}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{infoCLBItem.budget}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{infoOPDItem.items}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{infoOPDItem.budget}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{infoItem?.remainBalanceBudget}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{infodoneItem.items}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{infodoneItem.budget}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{infocancelItem.items}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{infocancelItem.budget}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{infonextYearItem.items}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{infonextYearItem.budget}</div>  
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
                                                        <div className="d-flex justify-content-center align-items-center">{infoCLBItem.items}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{infoCLBItem.budget}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{infoOPDItem.items}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{infoOPDItem.budget}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{item?.remainBalanceBudget}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{infodoneItem.items}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{infodoneItem.budget}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{infocancelItem.items}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{infocancelItem.budget}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{infonextYearItem.items}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{infonextYearItem.budget}</div>  
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
                                                <div className="d-flex justify-content-center align-items-center">{aItimeCLBItem.items}</div>  
                                                </th>
                                                <th>
                                                    <div className="d-flex justify-content-center align-items-center">{aItimeCLBItem.budget}</div>  
                                                </th>
                                                <th>
                                                    <div className="d-flex justify-content-center align-items-center">{aItimeOPDItem.items}</div>  
                                                </th>
                                                <th>
                                                    <div className="d-flex justify-content-right align-items-center">{aItimeOPDItem.budget}</div>  
                                                </th>
                                                <th>
                                                    <div className="d-flex justify-content-center align-items-center">{aItime.remainBalanceBudget}</div>  
                                                </th>
                                                <th>
                                                    <div className="d-flex justify-content-center align-items-center">{aItimedoneItem.items}</div>  
                                                </th>
                                                <th>
                                                    <div className="d-flex justify-content-center align-items-center">{aItimedoneItem.budget}</div>  
                                                </th>
                                                <th>
                                                    <div className="d-flex justify-content-center align-items-center">{aItimecancelItem.items}</div>  
                                                </th>
                                                <th>
                                                    <div className="d-flex justify-content-center align-items-center">{aItimecancelItem.budget}</div>  
                                                </th>
                                                <th>
                                                    <div className="d-flex justify-content-center align-items-center">{aItimenextYearItem.items}</div>  
                                                </th>
                                                <th>
                                                    <div className="d-flex justify-content-center align-items-center">{aItimenextYearItem.budget}</div>  
                                                </th>
                                                <th></th>
                                            </tr>
                            );
                            }
                                
                        }
                    }
                    return rows;
                })})})})})})})})})})
                })})})})})})})
            })})})})})
            })})
        })}
        </>  
    );
};

export default Table;
