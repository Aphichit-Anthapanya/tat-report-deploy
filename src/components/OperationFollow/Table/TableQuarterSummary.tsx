"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import "../operation-follow.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '@/redux/store';
import { updateFormField, resetForm } from "@/redux/OperationFollow/reducer";
import { fetchSection2dataService, sumMonthTotal } from '@/redux/OperationFollow/Section2/service';

interface TableQuarterProps {
    onChangeQuarter: (data:any) => void;
    quarterSelect: number
    setQuarterSelect: (value:number) => void
    tempMask: any
    setTempMask: (value:any) => void;
  }

export default function TableQuarterSummary(props: TableQuarterProps){

    const formState = useSelector((state: RootState) => state.operationFollowForm)
    const dispatch = useDispatch()

    const handleQuarterSelect = (value:number) => {
        // Perform any necessary actions here before calling the callback function
        props.setQuarterSelect(value);
    };

    const handleChangeField2 = (e:any) => {

        const { name, value } = e.target;

        if(props.quarterSelect == 1){
            const updateQuarter = {
                ...formState.section2.quarter.quarter1,
                [name]: value,
                total: formState.section2.quarter.quarter1.month1 + formState.section2.quarter.quarter1.month2 + formState.section2.quarter.quarter1.month3 
                
              };

              dispatch(updateFormField({
                ...formState,
                    section2: {
                        ...formState.section2,
                        quarter: {
                            ...formState.section2.quarter,
                            quarter1: updateQuarter
                        }
                    }
                }))

        }

        if(props.quarterSelect == 2){
            const updateQuarter = {
                ...formState.section2.quarter.quarter2,
                [name]: value,
                total: formState.section2.quarter.quarter2.month1 + formState.section2.quarter.quarter2.month2 + formState.section2.quarter.quarter2.month3 
              };

              dispatch(updateFormField({
                ...formState,
                    section2: {
                        ...formState.section2,
                        quarter: {
                            ...formState.section2.quarter,
                            quarter2: updateQuarter
                        }
                    }
            }))
        }

        if(props.quarterSelect == 3){
            const updateQuarter = {
                ...formState.section2.quarter.quarter3,
                [name]: value,
                total: formState.section2.quarter.quarter3.month1 + formState.section2.quarter.quarter3.month2 + formState.section2.quarter.quarter3.month3 
              };

              dispatch(updateFormField({
                ...formState,
                    section2: {
                        ...formState.section2,
                        quarter: {
                            ...formState.section2.quarter,
                            quarter3: updateQuarter
                        }
                    }
            }))
        }

        if(props.quarterSelect == 4){
            const updateQuarter = {
                ...formState.section2.quarter.quarter4,
                [name]: value,
                total: formState.section2.quarter.quarter4.month1 + formState.section2.quarter.quarter4.month2 + formState.section2.quarter.quarter4.month3 
              };

              dispatch(updateFormField({
                ...formState,
                    section2: {
                        ...formState.section2,
                        quarter: {
                            ...formState.section2.quarter,
                            quarter4: updateQuarter
                        }
                    }
            }))
        }

    }

    const handleChangeField = (event:any,quarter:number) => {
        
        const { name, value } = event.target;

        if(quarter == 1){

            props.setTempMask({
                ...props.tempMask,
                quarter1: {
                    ...props.tempMask.quarter1,
                    [name]: value
                }
            })

        }

        
        if(quarter == 2){
            props.setTempMask({
                ...props.tempMask,
                quarter2: {
                    ...props.tempMask.quarter2,
                    [name]: value
                }
            })

        }

        
        if(quarter == 3){
            props.setTempMask({
                ...props.tempMask,
                quarter3: {
                    ...props.tempMask.quarter3,
                    [name]: value
                }
            })

        }

        
        if(quarter == 4){

            props.setTempMask({
                ...props.tempMask,
                quarter4: {
                    ...props.tempMask.quarter4,
                    [name]: value
                }
            })

        }

    };

    
const formattedValue = (value: string) => {
    const result =  Number(value).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    return result
}

const sumTotal = async (event:any) => {
    const { name, value } = event.target;

    if(props.quarterSelect == 1){

        const updateQuarter = {
            ...formState.section2.quarter.quarter1,
            [name]: value 
          };

        dispatch(updateFormField({
            ...formState,
                section2: {
                    ...formState.section2,
                    quarter: {
                        ...formState.section2.quarter,
                        quarter1: updateQuarter
                    }
                }
        }))

        await props.setTempMask({
            ...props.tempMask,
            quarter1: {
                ...props.tempMask.quarter1,
                [name]: formattedValue(value)
            }
        });

    }

    if(props.quarterSelect == 2){

        const updateQuarter = {
            ...formState.section2.quarter.quarter2,
            [name]: value 
          };

        dispatch(updateFormField({
            ...formState,
                section2: {
                    ...formState.section2,
                    quarter: {
                        ...formState.section2.quarter,
                        quarter2: updateQuarter
                    }
                }
        }))

        props.setTempMask({
            ...props.tempMask,
            quarter2: {
                ...props.tempMask.quarter2,
                [name]: formattedValue(value)
            }
        });

    }

    if(props.quarterSelect == 3){

        const updateQuarter = {
            ...formState.section2.quarter.quarter3,
            [name]: value 
          };

        dispatch(updateFormField({
            ...formState,
                section2: {
                    ...formState.section2,
                    quarter: {
                        ...formState.section2.quarter,
                        quarter3: updateQuarter
                    }
                }
        }))

        props.setTempMask({
            ...props.tempMask,
            quarter3: {
                ...props.tempMask.quarter3,
                [name]: formattedValue(value)
            }
        });

    }

    if(props.quarterSelect == 4){

        const updateQuarter = {
            ...formState.section2.quarter.quarter4,
            [name]: value 
          };

        dispatch(updateFormField({
            ...formState,
                section2: {
                    ...formState.section2,
                    quarter: {
                        ...formState.section2.quarter,
                        quarter4: updateQuarter
                    }
                }
        }))

        props.setTempMask({
            ...props.tempMask,
            quarter4: {
                ...props.tempMask.quarter4,
                [name]: formattedValue(value)
            }
        });

    }

    sumMonthTotal(props.quarterSelect,dispatch,props.tempMask,props.setTempMask)

}
    useEffect(() => {
        
        if(props.quarterSelect == 1){
            props.setTempMask({
                ...props.tempMask,
                quarter1: {
                    month1: formattedValue(formState.section2.quarter.quarter1.month1),
                    month2: formattedValue(formState.section2.quarter.quarter1.month2),
                    month3: formattedValue(formState.section2.quarter.quarter1.month3),
                    total: formattedValue(formState.section2.quarter.quarter1.total)
                }
            });
        }

        if(props.quarterSelect == 2){
            props.setTempMask({
                ...props.tempMask,
                quarter2: {
                    month1: formattedValue(formState.section2.quarter.quarter2.month1),
                    month2: formattedValue(formState.section2.quarter.quarter2.month2),
                    month3: formattedValue(formState.section2.quarter.quarter2.month3),
                    total: formattedValue(formState.section2.quarter.quarter2.total)
                }
            });
        }

        if(props.quarterSelect == 3){
            props.setTempMask({
                ...props.tempMask,
                quarter3: {
                    month1: formattedValue(formState.section2.quarter.quarter3.month1),
                    month2: formattedValue(formState.section2.quarter.quarter3.month2),
                    month3: formattedValue(formState.section2.quarter.quarter3.month3),
                    total: formattedValue(formState.section2.quarter.quarter3.total)
                }
            });
        }

        if(props.quarterSelect == 4){
            props.setTempMask({
                ...props.tempMask,
                quarter4: {
                    month1: formattedValue(formState.section2.quarter.quarter4.month1),
                    month2: formattedValue(formState.section2.quarter.quarter4.month2),
                    month3: formattedValue(formState.section2.quarter.quarter4.month3),
                    total: formattedValue(formState.section2.quarter.quarter4.total)
                }
            });
        }


    },[props.quarterSelect]);

    return (
        <>
            <div className="table-summary-wrapper">
                        <div className="table-summary-header">
                            <span>งบประมาณรายเดือน</span>
                        </div>
                        <div className="table-summary-content">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th onClick={() => handleQuarterSelect(1)} className={`${props.quarterSelect == 1 ? 'quarter-selected': ''}`} style={{textAlign: 'center', cursor:'pointer'}} scope="col">ไตรมาส1</th>
                                    <th onClick={() => handleQuarterSelect(2)} className={`${props.quarterSelect == 2 ? 'quarter-selected': ''}`} style={{textAlign: 'center', cursor:'pointer'}} scope="col">ไตรมาส2</th>
                                    <th onClick={() => handleQuarterSelect(3)} className={`${props.quarterSelect == 3 ? 'quarter-selected': ''}`} style={{textAlign: 'center', cursor:'pointer'}} scope="col">ไตรมาส3</th>
                                    <th onClick={() => handleQuarterSelect(4)} className={`${props.quarterSelect == 4 ? 'quarter-selected': ''}`} style={{textAlign: 'center', cursor:'pointer'}} scope="col">ไตรมาส4</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td style={{textAlign: 'center',fontWeight: 'bold'}} colSpan={2}>    
                                      ไตรมาสที่ { props.quarterSelect }
                                    </td>
                                    <td style={{textAlign: 'center',fontWeight: 'bold'}} colSpan={2}>ยอดเงิน(บาท)</td>
                                </tr>
                                <tr>
                                    {props.quarterSelect == 1 &&
                                    <>
                                        <td style={{textAlign: 'center'}} colSpan={2}>
                                            ตุลาคม
                                        </td>
                                        <td colSpan={2}>
                                            <input onChange={(event) => handleChangeField(event,1)} name="month1" value={props.tempMask.quarter1.month1} type="text" className="form-control purchase-project-feild1" placeholder="" id="filterOverall" style={{width: '80%', margin: 'auto'}} 
                                            onBlur={ (e) => sumTotal(e)} 
                                            />
                                        </td>
                                    </>
                                    }
                                    {props.quarterSelect == 2 &&
                                    <>
                                        <td style={{textAlign: 'center'}} colSpan={2}>
                                            มกราคม
                                        </td>
                                        <td colSpan={2}>
                                            <input onChange={(event) => handleChangeField(event,2)} name="month1" value={props.tempMask.quarter2.month1} type="text" className="form-control purchase-project-feild1" placeholder="" id="filterOverall" style={{width: '80%', margin: 'auto'}} 
                                            onBlur={ (e) => sumTotal(e)} 
                                            />
                                        </td>
                                    </>
                                    }
                                    {props.quarterSelect == 3 &&
                                    <>
                                    <td style={{textAlign: 'center'}} colSpan={2}>
                                        เมษายม
                                    </td>
                                    <td colSpan={2}>
                                        <input onChange={(event) => handleChangeField(event,3)} name="month1" value={props.tempMask.quarter3.month1} type="text" className="form-control purchase-project-feild1" placeholder="" id="filterOverall" style={{width: '80%', margin: 'auto'}} 
                                            onBlur={ (e) => sumTotal(e)} 
                                            />
                                    </td>
                                    </>
                                    }
                                    {props.quarterSelect == 4 &&
                                    <>
                                    <td style={{textAlign: 'center'}} colSpan={2}>
                                        กรกฏาคม
                                    </td>
                                    <td colSpan={2}>
                                        <input onChange={(event) => handleChangeField(event,4)} name="month1" value={props.tempMask.quarter4.month1} type="text" className="form-control purchase-project-feild1" placeholder="" id="filterOverall" style={{width: '80%', margin: 'auto'}} 
                                            onBlur={ (e) => sumTotal(e)} 
                                            />
                                    </td>
                                    </>
                                    }
                                </tr>
                                <tr>
                                    
                                    {props.quarterSelect == 1 &&
                                        <>
                                        <td style={{textAlign: 'center'}} colSpan={2}>
                                            พฤษจิกายน
                                        </td>
                                        <td colSpan={2}>
                                            <input onChange={(event) => handleChangeField(event,1)} name="month2" value={props.tempMask.quarter1.month2} type="text" className="form-control purchase-project-feild1" placeholder="" id="filterOverall" style={{width: '80%', margin: 'auto'}} 
                                            onBlur={ (e) => sumTotal(e)} 
                                            />
                                        </td>
                                        </>
                                        }
                                        {props.quarterSelect == 2 &&
                                        <>
                                        <td style={{textAlign: 'center'}} colSpan={2}>
                                            กุมภาพันธ์
                                        </td>
                                        <td colSpan={2}>
                                            <input onChange={(event) => handleChangeField(event,2)} name="month2" value={props.tempMask.quarter2.month2} type="text" className="form-control purchase-project-feild1" placeholder="" id="filterOverall" style={{width: '80%', margin: 'auto'}} 
                                            onBlur={ (e) => sumTotal(e)} 
                                            />
                                        </td>
                                        </>
                                        }
                                        {props.quarterSelect == 3 &&
                                        <>
                                        <td style={{textAlign: 'center'}} colSpan={2}>
                                            พฤษภาคม
                                        </td>
                                        <td colSpan={2}>
                                            <input onChange={(event) => handleChangeField(event,3)} name="month2" value={props.tempMask.quarter3.month2} type="text" className="form-control purchase-project-feild1" placeholder="" id="filterOverall" style={{width: '80%', margin: 'auto'}} 
                                            onBlur={ (e) => sumTotal(e)} 
                                            />
                                        </td>
                                        </>
                                        }
                                        {props.quarterSelect == 4 &&
                                        <>
                                        <td style={{textAlign: 'center'}} colSpan={2}>
                                            สิงหาคม
                                        </td>
                                        <td colSpan={2}>
                                            <input onChange={(event) => handleChangeField(event,4)} name="month2" value={props.tempMask.quarter4.month2} type="text" className="form-control purchase-project-feild1" placeholder="" id="filterOverall" style={{width: '80%', margin: 'auto'}} 
                                            onBlur={ (e) => sumTotal(e)} 
                                            />
                                        </td>
                                        </>
                                        }
                                    
                                </tr>
                                <tr>
                                    
                                    {props.quarterSelect == 1 &&
                                        <>
                                        <td style={{textAlign: 'center'}} colSpan={2}>
                                            ธันวาคม
                                        </td>
                                        <td colSpan={2}>
                                            <input onChange={(event) => handleChangeField(event,1)} name="month3" value={props.tempMask.quarter1.month3} type="text" className="form-control purchase-project-feild1" placeholder="" id="filterOverall" style={{width: '80%', margin: 'auto'}} 
                                            onBlur={ (e) => sumTotal(e)} 
                                            />
                                        </td>
                                        </>
                                        }
                                        {props.quarterSelect == 2 &&
                                        <>
                                        <td style={{textAlign: 'center'}} colSpan={2}>
                                            มีนาคม
                                        </td>
                                        <td colSpan={2}>
                                            <input onChange={(event) => handleChangeField(event,2)} name="month3" value={props.tempMask.quarter2.month3} type="text" className="form-control purchase-project-feild1" placeholder="" id="filterOverall" style={{width: '80%', margin: 'auto'}} 
                                            onBlur={ (e) => sumTotal(e)} 
                                            />
                                        </td>
                                        </>
                                        }
                                        {props.quarterSelect == 3 &&
                                        <>
                                        <td style={{textAlign: 'center'}} colSpan={2}>
                                            มิถุนายน
                                        </td>
                                        <td colSpan={2}>
                                            <input onChange={(event) => handleChangeField(event,3)} name="month3" value={props.tempMask.quarter3.month3} type="text" className="form-control purchase-project-feild1" placeholder="" id="filterOverall" style={{width: '80%', margin: 'auto'}} 
                                            onBlur={ (e) => sumTotal(e)} 
                                            />
                                        </td>
                                        </>
                                        }
                                        {props.quarterSelect == 4 &&
                                        <>
                                        <td style={{textAlign: 'center'}} colSpan={2}>
                                            กันยายน
                                        </td>
                                        <td colSpan={2}>
                                            <input onChange={(event) => handleChangeField(event,4)} name="month3" value={props.tempMask.quarter4.month3} type="text" className="form-control purchase-project-feild1" placeholder="" id="filterOverall" style={{width: '80%', margin: 'auto'}} 
                                            onBlur={ (e) => sumTotal(e)} 
                                            />
                                        </td>
                                        </>
                                        }
                                </tr>
                                <tr>
                                    <td style={{textAlign: 'right',fontWeight: 'bold',paddingRight: '10px'}} colSpan={2}>ยอดรวมไตรมาส</td>
                                    <td colSpan={2}><input disabled onChange={(event) => handleChangeField2(event)} 
                                    value={
                                        props.quarterSelect == 1 ? formattedValue(formState.section2.quarter.quarter1.total) : 
                                        props.quarterSelect == 2 ? formattedValue(formState.section2.quarter.quarter2.total) :
                                        props.quarterSelect == 3 ? formattedValue(formState.section2.quarter.quarter3.total) :
                                        props.quarterSelect == 4 ? formattedValue(formState.section2.quarter.quarter4.total) :
                                        0
                                    }
                                    name="total" type="text" className="form-control purchase-project-feild1" placeholder="" id="filterOverall" style={{width: '80%', margin: 'auto'}} /></td>
                                </tr>
                                <tr>
                                    <td style={{textAlign: 'right',fontWeight: 'bold',paddingRight: '10px'}} colSpan={2}>สัดส่วน %</td>
                                    <td colSpan={2}><input onChange={(event) => handleChangeField2(event)} 
                                    value={
                                        props.quarterSelect == 1 ? formState.section2.quarter.quarter1.porportion : 
                                        props.quarterSelect == 2 ? formState.section2.quarter.quarter2.porportion :
                                        props.quarterSelect == 3 ? formState.section2.quarter.quarter3.porportion :
                                        props.quarterSelect == 4 ? formState.section2.quarter.quarter4.porportion :
                                        0
                                    } 
                                    name="porportion" disabled  type="text" className="form-control purchase-project-feild1" placeholder="" id="filterOverall" style={{width: '80%', margin: 'auto'}} /></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
        </>
    )
}