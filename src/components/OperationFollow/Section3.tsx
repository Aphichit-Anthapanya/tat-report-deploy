"use client";

import { useEffect, useState } from 'react';
import { useParams, usePathname } from 'next/navigation';
import "./operation-follow.scss";
import TableOperationArea from './Table/TableOperationArea';
import TableProjectIndicator from './Table/TableProjectIndicator';
import TableGroupProjectGoal from './Table/TableGroupProjectGoal';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { updateFormField, resetForm } from "@/redux/OperationFollow/reducer";
import { fetchSection3dataService } from '@/redux/OperationFollow/Section3/service';
import { checkValidity } from "./Validation/section3"

interface Section3Props {
    changeSectionHandle: (value:number,isBubble: boolean) => void;
  }



export default function Section3(props: Section3Props){

    const formState:any = useSelector((state: RootState) => state.operationFollowForm)
    const dispatch = useDispatch()
    let id = 0
    const params = useParams();

    const [validationState, setValidationState] = useState([
        {
            name: 'principal_reason',
            alias: 'งบประมาณโครงการ',
            isValid: true
        },
        {
            name: 'objective',
            alias: 'วัตถุประสงค์โครงการ',
            isValid: true
        },
        {
            name: 'operationArea',
            alias: 'พื้นที่ดำเนินโครงการ',
            isValid: true
        },
        {
            name: 'project_indicator',
            alias: 'ตัวชี้วัดระดับโครงการ',
            isValid: true
        },
        {
            name: 'project_outcome_field',
            alias: 'ลำดับตัวชี้วัดระดับโครงการ (outcome)',
            isValid: true
        },
        {
            name: 'group_project_goal',
            alias: 'กลุ่มเป้าหมายระดับโครงการ',
            isValid: true
        }

    ])
    
    const [tableOperationArea,setTableOperationArea] = useState([])
    
    const [tableProjectIndicator,setTableProjectIndicator] = useState([])

    const [tableGroupProjectGoal,setTableGroupProjectGoal] = useState([])

    const handleSection = (value: number) => {
        if(checkValidity(formState,validationState,setValidationState,handleSection)){
            handleUpdateForm()
            props.changeSectionHandle(value,false);
        }
    };

    const handleTableOperationArea = (data:any) => {
        setTableOperationArea(data)
    }

    const handleTableProjectIndicator = (data:any) => {
        setTableProjectIndicator(data)
    }

    const handleTableGroupProjectGoal = (data:any) => {
        setTableGroupProjectGoal(data)
    }

    const handleUpdateForm = () => {

        dispatch(updateFormField({
            ...formState,
                section3: {
                    ...formState.section3,
                    principal_reason: formState.section3.principal_reason,
                    project_objective: {
                        objective1: formState.section3.project_objective.objective1,
                        objective2: formState.section3.project_objective.objective2,
                        objective3: formState.section3.project_objective.objective3,
                        objective4: formState.section3.project_objective.objective4
                    },
                    list_operation_area: formState.section3.list_operation_area,
                    project_outcome: formState.section3.project_outcome,
                    project_outcome_field: formState.section3.project_outcome_field,
                    project_target: formState.section3.project_target
                }
            }))

    };

    const handleChangeField = (event:any) => {
        const { name, value } = event.target;

        if(name == 'objective1' || name == 'objective2' || name == 'objective3' || name == 'objective4'){
            dispatch(updateFormField({
                ...formState,
                section3: {
                    ...formState.section3,
                    project_objective: {
                        ...formState.section3.project_objective,
                        [name]: value
                    }
                }
            }))
        }else{
            dispatch(updateFormField({
                ...formState,
                section3: {
                    ...formState.section3,
                    [name]: value
                }
            }))            
        }

    }

    return (
        <>
            <div className="d-flex form-group">
                <div className="form-field-label">
                <label>หลักการและเหตุผล<span style={{color:'red'}}> *</span></label>
                </div>
                <div className="d-flex flex-column form-field-fieldzone">
                    <div className="">
                    <textarea onChange={(e) => handleChangeField(e)} value={formState.section3.principal_reason} name="principal_reason" className="form-control" id="exampleFormControlTextarea1" rows={2}></textarea>
                    </div>
                    <div>
                        { validationState[0].isValid == false && 
                        <div className="form-field-fieldzone">
                            <span style={{color:'red'}}>โปรดกรอกข้อมูล{validationState[0].alias}</span>
                        </div>
                        }
                    </div>
                </div>
            </div>
            <div className="d-flex form-group">
                <div className="form-field-label">
                <label>วัตถุประสงค์โครงการ<span style={{color:'red'}}> *</span></label>
                </div>
                <div className="d-flex flex-column form-field-fieldzone">
                    <div>
                        { validationState[1].isValid == false && 
                        <div className="form-field-fieldzone">
                            <span style={{color:'red'}}>โปรดกรอกข้อมูล{validationState[1].alias} อย่างน้อย 1 ช่อง</span>
                        </div>
                        }
                    </div>
                    <div className="">
                        <textarea onChange={(e) => handleChangeField(e)} value={formState.section3.project_objective.objective1} name="objective1" className="form-control" id="exampleFormControlTextarea1" rows={2}></textarea>
                        <div className="text-area-control">
                                จำนวนตัวอักษรไม่เกิน 4,000 คำ {formState.section3.project_objective.objective1.length}/4000
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex form-group">
                <div className="form-field-label">
                </div>
                <div className="form-field-fieldzone">
                <textarea onChange={(e) => handleChangeField(e)} value={formState.section3.project_objective.objective2} name="objective2" className="form-control" id="exampleFormControlTextarea1" rows={2}></textarea>
                <div className="text-area-control">
                        จำนวนตัวอักษรไม่เกิน 4,000 คำ {formState.section3.project_objective.objective2.length}/4000
                </div>
                </div>
            </div>
            <div className="d-flex form-group">
                <div className="form-field-label">
                </div>
                <div className="form-field-fieldzone">
                <textarea onChange={(e) => handleChangeField(e)} value={formState.section3.project_objective.objective3} name="objective3" className="form-control" id="exampleFormControlTextarea1" rows={2}></textarea>
                <div className="text-area-control">
                        จำนวนตัวอักษรไม่เกิน 4,000 คำ {formState.section3.project_objective.objective3.length}/4000
                </div>
                </div>
            </div>
            <div className="d-flex form-group">
                <div className="form-field-label">
                </div>
                <div className="form-field-fieldzone">
                    <textarea onChange={(e) => handleChangeField(e)} value={formState.section3.project_objective.objective4} name="objective4" className="form-control" id="exampleFormControlTextarea1" rows={2}></textarea>
                    <div className="text-area-control">
                        จำนวนตัวอักษรไม่เกิน 4,000 คำ {formState.section3.project_objective.objective4.length}/4000
                    </div>
                </div>
            </div>
            <div className="d-flex form-group">
                <div className="form-field-label">
                <label>พื้นที่ดำเนินโครงการ<span style={{color:'red'}}> *</span></label>
                </div>
                <div className="d-flex flex-column form-field-fieldzone">
                    <div className="">
                    <TableOperationArea onChangeTableOperationArea={handleTableOperationArea} />
                    </div>
                    <div>
                        { validationState[2].isValid == false && 
                        <div className="form-field-fieldzone">
                            <span style={{color:'red'}}>โปรดกรอกข้อมูล{validationState[2].alias}</span>
                        </div>
                        }
                    </div>
                </div>
            </div>
            <div className="d-flex form-group">
                <div className="form-field-label">
                <label>ตัวชี้วัดระดับโครงการ<span style={{color:'red'}}> *</span></label>
                </div>
                <div className="d-flex flex-column form-field-fieldzone">
                    <div className="">
                    <TableProjectIndicator onChangeTableProjectIndicator={handleTableProjectIndicator} />
                    </div>
                    <div>
                        { validationState[3].isValid == false && 
                        <div className="form-field-fieldzone">
                            <span style={{color:'red'}}>โปรดกรอกข้อมูล{validationState[3].alias}</span>
                        </div>
                        }
                    </div>
                </div>
            </div>
            <div className="d-flex form-group">
                <div className="form-field-label">
                <label>ลำดับตัวชี้วัดระดับโครงการ (outcome)<span style={{color:'red'}}> *</span></label>
                </div>
                <div className="d-flex flex-column form-field-fieldzone">
                    <div className="">
                    <select onChange={handleChangeField} name="project_outcome_field" value={formState.section3.project_outcome_field} className="form-select" aria-label="Default select example">
                    <option selected>---- เลือก ----</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    </select>
                    </div>
                    <div>
                        { validationState[4].isValid == false && 
                        <div className="form-field-fieldzone">
                            <span style={{color:'red'}}>โปรดกรอกข้อมูล{validationState[4].alias}</span>
                        </div>
                        }
                    </div>
                </div>
            </div>
            <div className="d-flex form-group">
                <div className="form-field-label">
                <label>กลุ่มเป้าหมายระดับโครงการ<span style={{color:'red'}}> *</span></label>
                </div>
                <div className="d-flex flex-column form-field-fieldzone">
                    <div className="">
                    <TableGroupProjectGoal onChangeTableGroupProjectGoal={handleTableGroupProjectGoal} />
                    </div>
                    <div>
                        { validationState[5].isValid == false && 
                        <div className="form-field-fieldzone">
                            <span style={{color:'red'}}>โปรดกรอกข้อมูล{validationState[5].alias}</span>
                        </div>
                        }
                    </div>
                </div>
            </div>
            <div className="button-section">
                <button  onClick={() => handleSection(4)} type="button" className="btn btn-primary">ต่อไป <i className="bi bi-chevron-right"></i></button>
                <button type="button" className="btn btn-primary"><i className="bi bi-file-earmark"></i> บันทึกข้อมูลชั่วคราว </button>
                <button onClick={() => handleSection(2)} type="button" className="btn btn-primary"><i className="bi bi-chevron-left"></i>ย้อนกลับ </button>
            </div>
        </>
    )
}