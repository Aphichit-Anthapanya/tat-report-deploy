"use client";

import React from "react";
import { useState } from "react";
import "@components/Report-temp/report-temp.scss";
import Activities from "@components/Activities/Activities";
import AddActivities from "@components/Activities/Add-Activities";
import TableQuarterSummary from "@components/OperationFollow/Table/TableQuarterSummary";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { updateFormField, resetForm } from "@/redux/OperationFollow/reducer";

export default function Page() {
    const formState = useSelector(
        (state: RootState) => state.operationFollowForm
      );
    const dispatch = useDispatch();
    const handleChangeField = (event: any) => {
        const { name, value } = event.target;
    
        dispatch(
          updateFormField({
            ...formState,
            section2: {
              ...formState.section2,
              [name]: value.replace(',', ''),
            },
          })
        );
    
        let sanitizedValue = value.replace(/[^0-9.]/g, '');
        let formattedValue = sanitizedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        setBudgetTemp(formattedValue)
        // setBudgetTemp(value)
      };
    const [budgetTemp, setBudgetTemp] = useState("");
    const [quarterSelect, setQuarterSelect] = useState(1);
    const handleQuarterSelect = (value: number) => {
        setQuarterSelect(value);
      };
    const [validationState, setValidationState] = useState([
        {
          name: "budget",
          alias: "งบประมาณโครงการ",
          isValid: true,
        },
        {
          name: "tableQuarterSummary",
          alias: "งบประมาณแยกตามรายเดือน",
          isValid: true,
        },
        {
          name: "tablePolicySuite",
          alias: "ความสอดคล้องกับนโยบาย",
          isValid: true,
        },
        {
          name: "tableStakeholder",
          alias: "กลุ่มผู้มีส่วนได้ส่วนเสีย",
          isValid: true,
        },
        {
    
        }
      ]);
      const [tempMask, setTempMask] = useState({
        quarter1: {
          month1: "0",
          month2: "0",
          month3: "0",
          total: "0",
          porportion: "0"
        },
        quarter2: {
          month1: "0",
          month2: "0",
          month3: "0",
          total: "0",
          porportion: "0"
        },
        quarter3: {
          month1: "0",
          month2: "0",
          month3: "0",
          total: "0",
          porportion: "0"
        },
        quarter4: {
          month1: "0",
          month2: "0",
          month3: "0",
          total: "0",
          porportion: "0"
        },
      });
    const [tableQuarterData, settableQuarterData] = useState({
        quarter: {
          quarter1: {
            month1: 0,
            month2: 0,
            month3: 0,
            total: 0,
            porportion: 0,
          },
          quarter2: {
            month1: 0,
            month2: 0,
            month3: 0,
            total: 0,
            porportion: 0,
          },
          quarter3: {
            month1: 0,
            month2: 0,
            month3: 0,
            total: 0,
            porportion: 0,
          },
          quarter4: {
            month1: 0,
            month2: 0,
            month3: 0,
            total: 0,
            porportion: 0,
          },
        },
      });
      const handleSetTempMask = (value: any) => {
        setTempMask(value);
      };
    
    const handleChangeQuarter = (data: any) => {
        // console.log(data)
        // settableQuarterData(data)
      };
    return (
        <>
            <div className='d-flex flex-column' style={{width: '100%'}}>
                <div className="breadcrumb-zone">รายงานแผนปฏิบัติการและการดำเนินงาน {'>'} <span className="bread-crumb-page-name"><b>รายงานสรุปงบประมาณรายโครงการเปรียบเทียบแผน-ผล รายเดือน</b></span></div>
                <div className='search-wrapper-section d-flex flex-column'>
                <div className="d-flex form-group">
                    <div className="form-field-label">
                    <label>
                    <i className="bi bi-info-circle information"></i> งบประมาณโครงการ <span style={{ color: "red" }}> *</span>
                    </label>
                    </div>
                    <div className="d-flex flex-column form-field-fieldzone">
                    <div className="d-flex">
                        <div>
                        <input onChange={(e) => handleChangeField(e)} name="budget" value={budgetTemp} type="text" className="form-control" id="exampleFormControlInput1" placeholder=""/>
                        </div>
                        <div style={{ marginTop: "10px", marginLeft: "10px" }}>บาท</div>
                    </div>
                    <div>
                        {validationState[0].isValid == false && (
                        <div className="form-field-fieldzone invalid-text">
                            <span style={{ color: "red" }}>
                            โปรดกรอกข้อมูล{validationState[0].alias}
                            </span>
                        </div>
                        )}
                    </div>
                    </div>
                </div>
                    <div className="d-flex form-group">
                        <div className="d-flex flex-column form-field-fieldzone table-quarter-zone">
                        <div>
                            {validationState[0].isValid == false && (
                            <div className="form-field-fieldzone invalid-text">
                                <span style={{ color: "red" }}>
                                โปรดกรอกข้อมูล{validationState[0].alias} ให้ครบ
                                </span>
                            </div>
                            )}
                        </div>
                        <div className="">
                            <TableQuarterSummary
                            onChangeQuarter={handleChangeQuarter}
                            quarterSelect={quarterSelect}
                            setQuarterSelect={handleQuarterSelect}
                            tempMask={tempMask}
                            setTempMask={handleSetTempMask}
                            />
                        </div>
                        </div>
                    </div>   
                </div>
            </div>
        </>
    )
}