import React from 'react';
import "@components/Report-temp/report-temp.scss";

const TotalTable = ({data}:any) => {
  return (
        <>
        {data.map((items: any, index: any) => {
            return items.total?.map((totaltem: any, totalIndex: any) => {
            return items.remaining?.map((remainingItem: any, remainingIndex: any) => {
                return totaltem.Q1.map((Q1tem: any, Q1Index: any) => {
                return totaltem.Q2.map((Q2tem: any, Q2Index: any) => {
                return totaltem.Q3.map((Q3tem: any, Q3Index: any) => {
                return totaltem.Q4.map((Q4tem: any, Q4Index: any) => {
                return remainingItem.Q1.map((Q1Rtem: any, Q1RIndex: any) => {
                return remainingItem.Q2.map((Q2Rtem: any, Q2RIndex: any) => {
                return remainingItem.Q3.map((Q3Rtem: any, Q3RIndex: any) => {
                return remainingItem.Q4.map((Q4Rtem: any, Q4RIndex: any) => {
                let rows = [];
                rows.push(
                                                <tr>
                                                    <th colSpan={6}>
                                                        <div className="d-flex justify-content-center align-items-center">{totaltem.text}</div>
                                                    </th>                                                  
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{totaltem.value}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">{totaltem.contractBudget}</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">{Q1tem.ATP}</div>
                                                    </th>
                                                    <th><div className="d-flex justify-content-center align-items-center">{Q1tem.notATP}</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">{Q1tem.done}</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">{Q1tem.cancel}</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">{Q2tem.ATP}</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">{Q2tem.notATP}</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">{Q2tem.done}</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">{Q2tem.cancel}</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">{Q3tem.ATP}</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">{Q3tem.notATP}</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">{Q3tem.done}</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">{Q3tem.cancel}</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">{Q4tem.ATP}</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">{Q4tem.notATP}</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">{Q4tem.done}</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">{Q4tem.cancel}</div></th>
                                                    <th><div className="d-flex justify-content-center align-items-center">{totaltem.note}</div></th>
                                                </tr>
                    );
                    rows.push(
                        <tr>
                            <th colSpan={6}>
                                <div className="d-flex justify-content-center align-items-center">{remainingItem.text}</div>
                            </th>                                                  
                            <th>
                                <div className="d-flex justify-content-right align-items-center">{remainingItem.value}</div>
                            </th>
                            <th>
                                <div className="d-flex justify-content-right align-items-center">{remainingItem.contractBudget}</div>
                            </th>
                            <th>
                                <div className="d-flex justify-content-center align-items-center">{Q1Rtem.ATP}</div>
                            </th>
                            <th><div className="d-flex justify-content-center align-items-center">{Q1Rtem.notATP}</div></th>
                            <th><div className="d-flex justify-content-center align-items-center">{Q1Rtem.done}</div></th>
                            <th><div className="d-flex justify-content-center align-items-center">{Q1Rtem.cancel}</div></th>
                            <th><div className="d-flex justify-content-center align-items-center">{Q2Rtem.ATP}</div></th>
                            <th><div className="d-flex justify-content-center align-items-center">{Q2Rtem.notATP}</div></th>
                            <th><div className="d-flex justify-content-center align-items-center">{Q2Rtem.done}</div></th>
                            <th><div className="d-flex justify-content-center align-items-center">{Q2Rtem.cancel}</div></th>
                            <th><div className="d-flex justify-content-center align-items-center">{Q3Rtem.ATP}</div></th>
                            <th><div className="d-flex justify-content-center align-items-center">{Q3Rtem.notATP}</div></th>
                            <th><div className="d-flex justify-content-center align-items-center">{Q3Rtem.done}</div></th>
                            <th><div className="d-flex justify-content-center align-items-center">{Q3Rtem.cancel}</div></th>
                            <th><div className="d-flex justify-content-center align-items-center">{Q4Rtem.ATP}</div></th>
                            <th><div className="d-flex justify-content-center align-items-center">{Q4Rtem.notATP}</div></th>
                            <th><div className="d-flex justify-content-center align-items-center">{Q4Rtem.done}</div></th>
                            <th><div className="d-flex justify-content-center align-items-center">{Q4Rtem.cancel}</div></th>
                            <th><div className="d-flex justify-content-center align-items-center">{remainingItem.note}</div></th>
                        </tr>
                        );
                        rows.push(
                            <tr>
                                <th colSpan={25}>
                                </th>  
                            </tr>
                            );
                    return rows;
        })})})})})}
    )})})})})}
        )
        }
        </>  
    );
};

export default TotalTable;
