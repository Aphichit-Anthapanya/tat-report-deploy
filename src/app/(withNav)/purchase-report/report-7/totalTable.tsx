import React from 'react';
import "@components/Report-temp/report-temp.scss";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect} from "react";

const Table = ({data}:any) => {
  return (
        <>
        {data.map((items: any, index: any) => {
                    return items.total?.Q1 && items.total?.Q1.map((Q1tem: any, Q1Index: any) => {
                    return items.total?.Q2 && items.total?.Q2.map((Q2Item: any, Q2Index: any) => {
                    return items.total?.Q3 && items.total?.Q3.map((Q3Item: any, Q3Index: any) => {
                    return items.total?.Q4 && items.total?.Q4.map((Q4Item: any, Q4Index: any) => {
                        return items.total?.percentage.Q1.map((PCTQ1Item: any, PCTQ1Index: any) => {
                        return items.total?.percentage.Q2.map((PCTQ2Item: any, PCTQ2Index: any) => {
                        return items.total?.percentage.Q3.map((PCTQ3Item: any, PCTQ3Index: any) => {
                        return items.total?.percentage.Q4.map((PCTQ4Item: any, PCTQ4Index: any) => {
                                        return(
                                            <>
                                            <tr className="table-info">
                                                        <th></th>
                                                        <th>
                                                            <div className="d-flex justify-content-center align-items-center">รวมทั้งสิ้น</div>
                                                        </th>
                                                        <th>
                                                            <div className="d-flex justify-content-center align-items-center">{items.total?.totalItems}</div>
                                                        </th>
                                                        <th>
                                                            <div className="d-flex justify-content-right align-items-center">{items.total?.totalBudget}</div>
                                                        </th>
                                                        <th>
                                                            <div className="d-flex justify-content-right align-items-center">{items.total?.contractLimitBudget}</div>
                                                        </th>
                                                        <th>
                                                            <div className="d-flex justify-content-right align-items-center">{items.total?.notOnProgressBudget}</div>
                                                        </th>
                                                        <th>
                                                            <div className="d-flex justify-content-right align-items-center">{items.total?.remainBalanceBudget}</div>
                                                        </th>
                                                        {/*Quarter 1*/}
                                                        <th>
                                                            <div className="d-flex justify-content-center align-items-center">{Q1tem.ATP}</div>
                                                        </th>
                                                        <th>
                                                            <div className="d-flex justify-content-center align-items-center">{Q1tem.notATP}</div>
                                                        </th>
                                                        <th>
                                                            <div className="d-flex justify-content-center align-items-center">{Q1tem.done}</div>
                                                        </th>
                                                        <th>
                                                            <div className="d-flex justify-content-center align-items-center">{Q1tem.cancel}</div>
                                                        </th>

                                                       {/*Quarter 2*/}
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

                                                        {/*Quarter 3*/}
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

                                                        {/*Quarter 4*/}
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

                                            <tr className="table-info">
                                                        <th></th>

                                                        <th>
                                                            <div className="d-flex justify-content-center align-items-center">รวมรายการแต่ละไตรมาส</div>
                                                        </th>

                                                        <th>
                                                            <div className="d-flex justify-content-center align-items-center">{items.total?.totalEachQuarter.totalItems}</div>
                                                        </th>

                                                        <th>
                                                            <div className="d-flex justify-content-center align-items-center">{items.total?.totalEachQuarter.totalBudget}</div>
                                                        </th>

                                                        <th>
                                                            <div className="d-flex justify-content-center align-items-center">{items.total?.totalEachQuarter.contractLimitBudget}</div>
                                                        </th>

                                                        <th>
                                                            <div className="d-flex justify-content-center align-items-center">{items.total?.totalEachQuarter.notOnProgressBudget}</div>
                                                        </th>

                                                        <th>
                                                            <div className="d-flex justify-content-center align-items-center">{items.total?.totalEachQuarter.remainBalanceBudget}</div>
                                                        </th>

                                                        {/*Quarter 1*/}
                                                        <th colSpan={4}>
                                                            <div className="d-flex justify-content-center align-items-center">{items.total?.totalEachQuarter.Q1}</div>
                                                        </th>

                                                       {/*Quarter 2*/}
                                                       <th colSpan={4}>
                                                            <div className="d-flex justify-content-center align-items-center">{items.total?.totalEachQuarter.Q2}</div>
                                                        </th>

                                                        {/*Quarter 3*/}
                                                       <th colSpan={4}>
                                                            <div className="d-flex justify-content-center align-items-center">{items.total?.totalEachQuarter.Q3}</div>
                                                        </th>

                                                        {/*Quarter 4*/}
                                                       <th colSpan={4}>
                                                            <div className="d-flex justify-content-center align-items-center">{items.total?.totalEachQuarter.Q4}</div>
                                                        </th>

                                                        {/*Note*/}
                                                        <th></th>
                                            </tr>
                                            <tr className="table-info">
                                                        <th></th>
                                                        <th>
                                                            <div className="d-flex justify-content-center align-items-center">คิดเป็นร้อยละ</div>
                                                        </th>
                                                        <th>
                                                            <div className="d-flex justify-content-center align-items-center">{items.total?.percentage.totalItems}</div>
                                                        </th>
                                                        <th>
                                                            <div className="d-flex justify-content-center align-items-center">{items.total?.percentage.totalBudget}</div>
                                                        </th>
                                                        <th>
                                                            <div className="d-flex justify-content-center align-items-center">{items.total?.percentage.contractLimitBudget}</div>
                                                        </th>
                                                        <th>
                                                            <div className="d-flex justify-content-center align-items-center">{items.total?.percentage.notOnProgressBudget}</div>
                                                        </th>
                                                        <th>
                                                            <div className="d-flex justify-content-center align-items-center">{items.total?.percentage.remainBalanceBudget}</div>
                                                        </th>
                                                        {/*Quarter 1*/}
                                                        <th>
                                                            <div className="d-flex justify-content-center align-items-center">{PCTQ1Item.ATP}</div>
                                                        </th>
                                                        <th>
                                                            <div className="d-flex justify-content-center align-items-center">{PCTQ1Item.notATP}</div>
                                                        </th>
                                                        <th>
                                                            <div className="d-flex justify-content-center align-items-center">{PCTQ1Item.done}</div>
                                                        </th>
                                                        <th>
                                                            <div className="d-flex justify-content-center align-items-center">{PCTQ1Item.cancel}</div>
                                                        </th>

                                                       {/*Quarter 2*/}
                                                       <th>
                                                            <div className="d-flex justify-content-center align-items-center">{PCTQ2Item.ATP}</div>
                                                        </th>
                                                        <th>
                                                            <div className="d-flex justify-content-center align-items-center">{PCTQ2Item.notATP}</div>
                                                        </th>
                                                        <th>
                                                            <div className="d-flex justify-content-center align-items-center">{PCTQ2Item.done}</div>
                                                        </th>
                                                        <th>
                                                            <div className="d-flex justify-content-center align-items-center">{PCTQ2Item.cancel}</div>
                                                        </th>

                                                        {/*Quarter 3*/}
                                                       <th>
                                                            <div className="d-flex justify-content-center align-items-center">{PCTQ3Item.ATP}</div>
                                                        </th>
                                                        <th>
                                                            <div className="d-flex justify-content-center align-items-center">{PCTQ3Item.notATP}</div>
                                                        </th>
                                                        <th>
                                                            <div className="d-flex justify-content-center align-items-center">{PCTQ3Item.done}</div>
                                                        </th>
                                                        <th>
                                                            <div className="d-flex justify-content-center align-items-center">{PCTQ3Item.cancel}</div>
                                                        </th>

                                                        {/*Quarter 4*/}
                                                       <th>
                                                            <div className="d-flex justify-content-center align-items-center">{PCTQ4Item.ATP}</div>
                                                        </th>
                                                        <th>
                                                            <div className="d-flex justify-content-center align-items-center">{PCTQ4Item.notATP}</div>
                                                        </th>
                                                        <th>
                                                            <div className="d-flex justify-content-center align-items-center">{PCTQ4Item.done}</div>
                                                        </th>
                                                        <th>
                                                            <div className="d-flex justify-content-center align-items-center">{PCTQ4Item.cancel}</div>
                                                        </th>
                                                        <th></th>
                                            </tr>
                                            </>
                                        );
            })})})})})
        })})})})
        }
        </>  
    );
};

export default Table;
