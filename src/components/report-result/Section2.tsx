"use client";

import { useDispatch, useSelector } from "react-redux";
import "./report-result.scss";
import { RootState } from "@/redux/store";
import TableQuarterSummary from "@components/OperationFollow/Table/TableQuarterSummary";
import { useEffect, useState } from "react";
import { updateFormField } from "@/redux/OperationFollow/reducer";
import { FormState } from "@/redux/OperationFollow/types";
import { useParams, useRouter } from "next/navigation";

interface Section2Props {
    changeSectionHandle: (value: number, isBubble: boolean) => void;
    setIsLoading: (val: boolean) => void
}

export default function Section2(props: Section2Props) {
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

      const [isPopupOpen, setPopupOpen] = useState(false);

      const openPopup = () => {
        setPopupOpen(true);
      };
    
      const closePopup = () => {
        setPopupOpen(false);
      };
  return (
    <>
    <div className='search-wrapper-section d-flex flex-column justify-content-center align-items-center'>
                    <div className="d-flex flex-column mr-20 ml-70">
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">แหล่งงบประมาณ<div className="fontColor">*</div>:</div>
                                <div>-</div>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">
                                    <div className="d-flex flex-column justify-content-right">
                                        <div className="d-flex justify-content-right">งบประมาณโครงการตามแผน</div>
                                    </div>
                                    <div className="fontColor">*</div>:</div>
                                <div>7,000,000</div>
                                <div className="ml-10">บาท</div>
                            </div>
                            <div className="wid d-flex flex-row mb-20 align-items-center">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">งบประมาณโครงการที่จัดจริง<div className="fontColor">*</div>:</div>
                                    <div className="filter-field-bud mr-10">
                                        <input type="text" className="form-control" placeholder="" id="filterOverall" />
                                </div>
                                <div>บาท</div>
                            </div>
                            <div className="wid d-flex flex-row">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">งบประมาณแยกตามรายเดือนที่จัดจริง<div className="fontColor">*</div>:</div>
                            </div>
                            <div className="mb-20">
                                <TableQuarterSummary
                                onChangeQuarter={handleChangeQuarter}
                                quarterSelect={quarterSelect}
                                setQuarterSelect={handleQuarterSelect}
                                tempMask={tempMask}
                                setTempMask={handleSetTempMask}
                            />
                            </div>
                            <div className="wid d-flex flex-column">
                                <div className="wdth-200 mr-20 d-flex flex-row">
                                    <div className="d-flex flex-column">
                                        <div className="d-flex justify-content-left">ความสอดคล้องกับนโยบาย</div>
                                        <div className="d-flex justify-content-right">(เลือกได้มากกว่า 1)</div>
                                    </div>
                                    <div className="fontColor">*</div>:</div>                                
                            </div>
                            <div className="table-responsive mb-20">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr className="table-primary">
                                                <th colSpan={2}>
                                                    <div className="d-flex justify-content-center">ความสอดคล้องกับนโยบายภายนอก</div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="wd-350 d-flex justify-content-left align-items-center">
                                                        <div className="check-box">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="check1" name="option1" value="" checked/>
                                                                <label className="form-check-label normalText">Flagship Project</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-350 d-flex justify-content-left align-items-center">
                                                        <div className="check-box">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="check1" name="option1" value="" checked/>
                                                                <label className="form-check-label normalText">SLA</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex flex-column justify-content-left">
                                                        <div className="check-box">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="check1" name="option1" value=""/>
                                                                <label className="form-check-label normalText">แผนแม่บทหน่วยงาน</label>
                                                            </div>
                                                        </div>
                                                        <div>
                                                        <div className="ml-35 filter-field-2">
                                                            <select className="form-select" aria-label="Default select example">
                                                                <option selected>  ---- เลือก ----  </option>
                                                            </select>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center">
                                                        <div className="check-box">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="check1" name="option1" value=""/>
                                                                <label className="form-check-label normalText">ตัวชี้วัดตามบันทึกข้อตกลง (PA)</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex flex-column justify-content-left">
                                                        <div className="check-box">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="check1" name="option1" value=""/>
                                                                <label className="form-check-label normalText">แผนปิดช่องว่าง (Gaps) ตามเกณฑ์ Enablers</label>
                                                            </div>
                                                        </div>
                                                        <div>
                                                        <div className="ml-35 filter-field-2">
                                                            <select className="form-select" aria-label="Default select example">
                                                                <option selected>  ---- เลือก ----  </option>
                                                            </select>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center">
                                                        <div className="check-box">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="check1" name="option1" value=""/>
                                                                <label className="form-check-label normalText">ไม่มี</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th colSpan={2}>
                                                    <div className="normalText d-flex justify-content-left align-items-center">
                                                        <div className="check-box">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="check1" name="option1" value=""/>
                                                                <label className="form-check-label normalText">CSR in process</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </th>
                                            </tr>
                                        </tbody>
                                    </table>
                            </div>
                            <div className="wid d-flex flex-column mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row">
                                    <div className="d-flex flex-column">
                                        <div className="d-flex justify-content-right">กลุ่มผู้มีส่วนได้ส่วนเสีย</div>
                                        <div className="d-flex justify-content-right">(เลือกได้มากกว่า 1)</div>
                                    </div>
                                    <div className="fontColor">*</div>:</div>
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr className="table-primary">
                                                <th colSpan={4}>
                                                    <div className="d-flex justify-content-center">กลุ่มผู้มีส่วนได้ส่วนเสีย (Stakeholder Group)</div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th></th>
                                                <th>
                                                    <div className="wd-80 normalText d-flex justify-content-center">คำอธิบาย</div>
                                                </th>
                                                <th>
                                                    <div className="wd-200 normalText d-flex justify-content-center">กลุ่มผู้มีส่วนได้ส่วนเสีย</div>
                                                </th>
                                                <th>
                                                    <div className="wd-350 normalText d-flex justify-content-center">ประเภทย่อย</div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="ml-5 wd-50 d-flex justify-content-center">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="check1" name="option1" value="" checked/>
                                                        </div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="bi bi-info-circle-fill d-flex justify-content-center align-items-center"></div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center">บุคลากรและลูกจ้างของ ททท.</div>
                                                </th>
                                                <th></th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="ml-5 wd-50 d-flex justify-content-center">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="check1" name="option1" value=""/>
                                                        </div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="bi bi-info-circle-fill d-flex justify-content-center align-items-center"></div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center">ผู้ส่งมอบ</div>
                                                </th>
                                                <th>
                                                    <div className="filter-field-2">
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected>  ---- เลือก ----  </option>
                                                        </select>
                                                    </div>
                                                </th>                                              
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="ml-5 wd-50 d-flex justify-content-center">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="check1" name="option1" value=""/>
                                                        </div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="bi bi-info-circle-fill d-flex justify-content-center align-items-center"></div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center">คู่ค้า</div>
                                                </th>
                                                <th>
                                                    <div className="filter-field-2">
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected>  ---- เลือก ----  </option>
                                                        </select>
                                                    </div>
                                                </th>        
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="ml-5 wd-50 d-flex justify-content-center">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="check1" name="option1" value=""/>
                                                        </div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="bi bi-info-circle-fill d-flex justify-content-center align-items-center"></div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center">คู่ความร่วมมือ</div>
                                                </th>
                                                <th>
                                                    <div className="filter-field-2">
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected>  ---- เลือก ----  </option>
                                                        </select>
                                                    </div>
                                                </th>   
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="ml-5 wd-50 d-flex justify-content-center">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="check1" name="option1" value=""/>
                                                        </div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="bi bi-info-circle-fill d-flex justify-content-center align-items-center"></div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center">หน่วยงานกำกับดูแล/ผู้ถือหุ้นภาครัฐ</div>
                                                </th>
                                                <th>
                                                    <div className="filter-field-2">
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected>  ---- เลือก ----  </option>
                                                        </select>
                                                    </div>
                                                </th>   
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="ml-5 wd-50 d-flex justify-content-center">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="check1" name="option1" value=""/>
                                                        </div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="bi bi-info-circle-fill d-flex justify-content-center align-items-center"></div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center">ลูกค้า/ผู้ใช้บริการ</div>
                                                </th>
                                                <th>
                                                    <div className="filter-field-2">
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected>  ---- เลือก ----  </option>
                                                        </select>
                                                    </div>
                                                </th>   
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>   
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">
                                    <div className="d-flex flex-column justify-content-right">
                                        <div className="d-flex justify-content-right">ประเด็นที่สอดคล้องกับกลุ่มผู้มีส่วนได้ส่วนเสีย</div>
                                    </div>
                                    <div className="fontColor">*</div>:</div>
                                <div>-</div>
                            </div>                         
                        </div>               
                    </div>
                    <div className="button-section">
                        <button type="button" className="btn btn-primary">ต่อไป <i className="bi bi-chevron-right"></i></button>
                        <button type="button" className="btn btn-primary"><i className="bi bi-file-earmark mr-5"></i>บันทึกชั่วคราว</button>
                        <button type="button" className="btn btn-primary">ย้อนกลับ <i className="bi bi-chevron-left"></i></button>
                    </div>
    </>
  );
}
