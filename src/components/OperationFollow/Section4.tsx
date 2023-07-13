"use client";

import { useEffect, useState } from 'react';
import { useParams, usePathname } from 'next/navigation';
import "./operation-follow.scss";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { updateFormField, resetForm } from "@/redux/OperationFollow/reducer";
import { fetchSection4dataService } from '@/redux/OperationFollow/Section4/service';
import { checkValidity } from "./Validation/section4"
interface Section4Props {
    changeSectionHandle: (value:number,isBubble: boolean) => void;
  }

export default function Section4(props: Section4Props){

    const formState = useSelector((state: RootState) => state.operationFollowForm)
    const dispatch = useDispatch()
    let id = 0
    const params = useParams();
    const [validationState, setValidationState] = useState([
        {
            name: 'project_date',
            alias: 'วันที่เริ่มต้นโครงการ - วันที่สิ้นสุดโครงการ',
            isValid: true
        },
        {
            name: 'flagship_risk',
            alias: 'ระบุความเสี่ยงโครงการ',
            isValid: true
        },
        {
            name: 'risk_prevention',
            alias: 'มาตรการบริหารความเสี่ยง',
            isValid: true
        },
        {
            name: 'benefit',
            alias: 'ประโยชน์ที่คาดว่าจะได้รับ',
            isValid: true
        }

    ])

    const handleSection = (value: number) => {
        if(checkValidity(formState,validationState,setValidationState,handleSection)){
            handleUpdateForm()
            props.changeSectionHandle(value,false);
        }
    };

    const handleChangeField = (event:any) => {
        const { name, value } = event.target;

        dispatch(updateFormField({
            ...formState,
            section4: {
                ...formState.section4,
                [name]: value
            }
        }))

    }

    const handleUpdateForm = () => {

        dispatch(updateFormField({
            ...formState,
                section4: {
                    project_start: formState.section4.project_start,
                    project_end: formState.section4.project_end,
                    flagship_risk: formState.section4.flagship_risk,
                    risk_prevention: formState.section4.risk_prevention,
                    benefit: formState.section4.benefit,
                }
            }))

    };

    return (
        <>
            <div className="d-flex form-group">
                <div className="form-field-label">
                <label>วันที่เริ่มต้นโครงการ - วันที่สิ้นสุดโครงการ<span style={{color:'red'}}> *</span></label>
                </div>
                <div className="d-flex flex-column form-field-fieldzone">
                    <div className="">
                    <input onChange={(e) => handleChangeField(e)} value={formState.section4.project_start} name="project_start" type="date" className="form-control" id="exampleFormControlInput1" placeholder="" style={{
                    width: '40%',
                    float: 'left',
                    marginRight: '15px'
                }} />
                <span style={{float:'left',position: 'relative',top: '5px',right: '7px'}}>-</span>
                <input onChange={(e) => handleChangeField(e)} value={formState.section4.project_end} name="project_end" type="date" className="form-control" id="exampleFormControlInput1" placeholder="" style={{
                    width: '40%'}} />
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
                <label>ระบุความเสี่ยงโครงการ (เฉพาะ Flagship project) / ถ้าไม่ใช่ Flagship Project ให้ใส่เครื่องหมาย<span style={{color:'red'}}> *</span></label>
                </div>
                <div className="d-flex flex-column form-field-fieldzone">
                    <div className="">
                    <textarea onChange={(e) => handleChangeField(e)} name="flagship_risk" value={formState.section4.flagship_risk} className="form-control" id="exampleFormControlTextarea1" rows={2}></textarea>
                    <div className="text-area-control">
                            จำนวนตัวอักษรไม่เกิน 4,000 คำ 0/4000
                    </div>
                    </div>
                    <div>
                        { validationState[1].isValid == false && 
                        <div className="form-field-fieldzone">
                            <span style={{color:'red'}}>โปรดกรอกข้อมูล{validationState[1].alias}</span>
                        </div>
                        }
                    </div>
                </div>
            </div>
            <div className="d-flex form-group">
                <div className="form-field-label">
                <label>มาตรการบริหารความเสี่ยง<span style={{color:'red'}}> *</span></label>
                </div>
                <div className="d-flex flex-column form-field-fieldzone">
                    <div className="">
                    <input onChange={(e) => handleChangeField(e)} name="risk_prevention" value={formState.section4.risk_prevention} type="text" className="form-control" id="exampleFormControlInput1" placeholder="" />
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
                <label>ประโยชน์ที่คาดว่าจะได้รับ (Impact)<span style={{color:'red'}}> *</span></label>
                </div>
                <div className="d-flex flex-column form-field-fieldzone">
                    <div className="">
                    <select onChange={(e) => handleChangeField(e)} name="benefit" value={formState.section4.benefit} className="form-select" aria-label="Default select example">
                    <option selected>---- เลือก ----</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
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
            <div className="button-section">
                <button  onClick={() => handleSection(5)} type="button" className="btn btn-primary">ต่อไป <i className="bi bi-chevron-right"></i></button>
                <button type="button" className="btn btn-primary"><i className="bi bi-file-earmark"></i> บันทึกข้อมูลชั่วคราว </button>
                <button onClick={() => handleSection(3)} type="button" className="btn btn-primary"><i className="bi bi-chevron-left"></i>ย้อนกลับ </button>
            </div>
        </>
    )
}