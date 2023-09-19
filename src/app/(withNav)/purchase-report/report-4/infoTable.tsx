import React from 'react';
import "@components/Report-temp/report-temp.scss";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect} from "react";
const Table = ({data}:any) => {
  return (
        <>
        {data.map((items: any, index: any) => {
        return items.info?.map((infoItem: any, infoIndex: any) => {
            return infoItem.department.map((departmentItem: any, departmentIndex: any) => { 
            return infoItem.Q1.map((Q1Item: any, Q1Index:any) => {
            return infoItem.Q2.map((Q2Item: any, Q2Index:any) => {
            return infoItem.Q3.map((Q3Item: any, Q3Index:any) => {
            return infoItem.Q4.map((Q4Item: any, Q4Index:any) => {
                        let rows = [];
                        if (items.info.length > infoIndex) {
                                rows.push(
                                                <tr>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">{infoItem.number}</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">
                                                            {infoItem.activityName}
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">
                                                            {infoItem.purchasement}
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText wd-160 d-flex justify-content-left align-items-center">{departmentItem.fullName}</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText wd-25 d-flex justify-content-left align-items-center">{departmentItem.shortName}</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">{infoItem.method}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">{infoItem.budget}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">{infoItem.contractBudget}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">{Q1Item.ATP}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">{Q1Item.notATP}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">{Q1Item.done}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">{Q1Item.cancel}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">{Q2Item.ATP}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">{Q2Item.notATP}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">{Q2Item.done}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">{Q2Item.cancel}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">{Q3Item.ATP}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">{Q3Item.notATP}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">{Q3Item.done}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">{Q3Item.cancel}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">{Q4Item.ATP}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">{Q4Item.notATP}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">{Q4Item.done}</div>  
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">{Q4Item.cancel}</div>  
                                                    </th>
                                                    <th></th>
                                                </tr>
                                    );
                        }
                        return rows;
                    })
                })
            })})})})})
        }
        </>  
    );
};

export default Table;
