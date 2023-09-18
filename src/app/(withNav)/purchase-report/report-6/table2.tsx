import React from 'react';
import "@components/Report-temp/report-temp.scss";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect} from "react";

const Table = ({data}:any) => {
  return (
        <>
        {data.map((items: any, index: any) => {
                    return items.total?.doneInQ1 && items.total?.doneInQ1.map((doneInQ1tem: any, doneInQ1Index: any) => {
                            return items.total?.doneInQ2 && items.total?.doneInQ2.map((doneInQ2lItem: any, doneInQ2lIndex: any) => {
                                return items.total?.doneInQ3 && items.total?.doneInQ3.map((doneInQ3Item: any, doneInQ3Index: any) => {
                                    return items.total?.doneInQ4 && items.total?.doneInQ4.map((doneInQ4Item: any, doneInQ4Index: any) => {
                                        console.log(items.total?.totalItems)
                                        console.log(items.total?.totalBudget)
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
                                                            <div className="d-flex justify-content-center align-items-center">{doneInQ1tem.items}</div>
                                                        </th>
                                                        <th>
                                                            <div className="d-flex justify-content-right align-items-center">{doneInQ1tem.budget}</div>
                                                        </th>
                                                        <th>
                                                            <div className="d-flex justify-content-center align-items-center">{doneInQ2lItem.items}</div>
                                                        </th>
                                                        <th>
                                                            <div className="d-flex justify-content-right align-items-center">{doneInQ2lItem.budget}</div>
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
                                            </>
                                        );
            })})})})})
        }
        </>  
    );
};

export default Table;
