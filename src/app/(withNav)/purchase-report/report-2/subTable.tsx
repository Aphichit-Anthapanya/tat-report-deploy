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
                    return item.activity.map((aItime:any, aItimeIndex:any) => {
                        let rows = [];
                        if (items.budget.length > budgetIndex) {
                            const successRowKey = `success-${budgetIndex}`;
                            if (!uniqueRows.has(successRowKey)) {
                                rows.push(
                                    <tr className="table-success" key={successRowKey}>
                                        <th></th>
                                        <th></th>
                                        <th>
                                            <div className="d-flex justify-content-left align-items-center">
                                                <div className='mr-5'></div>
                                                    {budgetItem?.budgetName}
                                                </div>
                                        </th>
                                        <th></th>
                                        <th></th>
                                        <th>
                                            <div className="d-flex justify-content-center align-items-center">
                                                {budgetItem?.totalItemPerBudget}
                                            </div>
                                        </th>
                                        <th>
                                            <div className="d-flex justify-content-right align-items-center">
                                                {budgetItem?.totalBudgets}
                                            </div>
                                        </th>
                                        <th></th>
                                    </tr>
                                    );
                                uniqueRows.add(successRowKey);
                            }
                            
                            
                            if (infoIndex < budgetItem.info.length) {
                                const warningRowKey = `warning-${infoIndex}-${budgetItem?.budgetName}`;
                                if (!uniqueRows.has(warningRowKey)) {
                                    rows.push(
                                        <tr className="table-success" key={warningRowKey}>
                                            <th></th>
                                            <th></th>
                                            <th>
                                                <div className="d-flex justify-content-left align-items-center">
                                                    <div className='mr-20'></div>
                                                    {infoItem.budgetNamesub}
                                                </div>
                                            </th>
                                            <th></th>
                                            <th></th>
                                            <th>
                                                <div className="d-flex justify-content-center align-items-center">
                                                    {infoItem.totalItemPerbudgetsub}
                                                </div>
                                            </th>
                                            <th>
                                                <div className="d-flex justify-content-right align-items-center">
                                                    {infoItem.totalbSumBudgetsub}
                                                </div>
                                            </th>
                                            <th></th>
                                        </tr>
                                    );
                                    uniqueRows.add(warningRowKey);
                                }
                                
                                if (itemIndex < infoItem.subInfo.length+1) {
                                    const infoRowKey = `info-${itemIndex}-${budgetItem?.budgetName}-${infoItem.totalbSumBudgetsub}-${infoItem.totalItemPerBudget}`;
                                    if (!uniqueRows.has(infoRowKey)) {
                                        rows.push(
                                            <tr className="table-warning" key={infoRowKey}>
                                                <th></th>
                                                <th></th>
                                                <th>
                                                    <div className="d-flex justify-content-left align-items-center">
                                                        <div className='mr-35'></div>
                                                        {item.department}
                                                    </div>
                                                </th>
                                                <th></th>
                                                <th></th>
                                                <th>
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        {item.NumberItems}
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="d-flex justify-content-right align-items-center">
                                                        {item.budget}
                                                    </div>
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
                                                        </div></th>
                                                    <th><div className="normalText d-flex justify-content-center align-items-center">{aItime.activityName}</div></th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">
                                                            {aItime.purchasement}
                                                        </div>
                                                    </th>
                                                    <th><div className="normalText d-flex justify-content-center align-items-center">{aItime.subDepartment}</div></th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">
                                                            {aItime.departmentShort}
                                                        </div>
                                                    </th>
                                                    <th></th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">
                                                            {aItime.budget}
                                                        </div>
                                                    </th>
                                                    <th></th>
                                                </tr>
                                            );
                                    
                                }
                            }
                        }
                        return rows;
                    })
                })
            })})
        })}
        </>  
    );
};

export default Table;
