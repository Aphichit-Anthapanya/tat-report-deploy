"use client";

import { useDispatch, useSelector } from "react-redux";
import "./report-result.scss";
import { RootState } from "@/redux/store";
import { FormState } from "@/redux/OperationFollow/types";
import TableQuarterSummary from "@components/OperationFollow/Table/TableQuarterSummary";
import { useEffect, useState } from "react";
import { updateFormField } from "@/redux/OperationFollow/reducer";

interface Section1Props {
  changeSectionHandle: (value: number, isBubble: boolean) => void;
  setIsLoading: (val: boolean) => void
}

export default function Section1(props: Section1Props) {
    const dispatch = useDispatch();
    const [budgetTemp, setBudgetTemp] = useState("");
    const [quarterSelect, setQuarterSelect] = useState(1);
    const handleQuarterSelect = (value: number) => {
        setQuarterSelect(value);
      };
    
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
    <div className='search-wrapper-section d-flex flex-column justify-content-center align-items-center'>
                    <div className="d-flex flex-column mr-20 ml-70">
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ชื่อโครงการ<div className="fontColor">*</div>:</div>
                                <div>โครงการพัฒนาระบบแพลตฟอร์มกลาง ททท. (Single Sign on)</div>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ประเภทโครงการ<div className="fontColor">*</div>:</div>
                                <div>ในแผน</div>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ลำดับที่โครงการ<div className="fontColor">*</div>:</div>
                                <div>4</div>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ปีงบประมาณ<div className="fontColor">*</div>:</div>
                                <div>2566</div>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ชื่อแผน<div className="fontColor">*</div>:</div>
                                <div>สนับสนุนการดำเนินงานด้านการตลาด</div>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ประเด็นยุทธศาสตร์<div className="fontColor">*</div>:</div>
                                <div>งบฟื้นฟูประเทศด้วยการท่องเที่ยว (งบคงเหลือ 65)</div>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ชื่อกลยุทธ์ภาพรวม<div className="fontColor">*</div>:</div>
                                <div>กลยุทธ์ที่ 3 พัฒนาระบบเทคโนโลยีสารสนเทศ นวัตกรรม เพื่อปรับปรุงการทำงาน(งบคงเหลือ 65)</div>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ชื่อแผนงาน<div className="fontColor">*</div>:</div>
                                <div>แผนงาน 3.1 พัฒนาระบบเทคโนโลยีสารสนเทศ(งบคงเหลือ 65)</div>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">รายการค่าใช้จ่าย<div className="fontColor">*</div>:</div>
                                <div>-</div>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">หมวดพ.ร.บ. งบประมาณ<div className="fontColor">*</div>:</div>
                                <div>*********</div>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">แหล่งงบประมาณ<div className="fontColor">*</div>:</div>
                                <div>-</div>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">
                                    <div className="d-flex flex-column justify-content-right">
                                        <div className="d-flex justify-content-right">งบประมาณโครงการ</div>
                                    </div>
                                    <div className="fontColor">*</div>:</div>
                                <div>7,000,000</div>
                                <div className="ml-10">บาท</div>
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
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right"><span>หลักการและเหตุผล</span><div className="fontColor">*</div>:</div>
                                <div className="d-flex mr-100 flex-row justify-content-right">ในปัจจุบันบุคลากรมีความจำเป็นต้อง Login ทุกครั้ง เพื่อเข้าใช้งานระบบสารสนเทศขององค์กร เพื่อใช้ในการปฏิบัติงาน ซึ่งมีระบบอยู่เป็นจำนวนมาก จึงทำให้การเข้าใช้งานระบต่าง ๆ นั้นไม่มีความคล่องตัวในการปฏิบัติงาน ด้วยเหตุนี้ จึงควรดำเนินการพัฒนา ระบบที่ให้ผู้ใช้งานสามารถพิสูจน์ตัวตนโดยใช้ Username และ Password เดียวในการเข้าใช้งานทุกระบบที่มีสิทธิ์ด้วยการ Login เพียงครั้งเดียว เป็นการอำนวยความสะดวกให้กับบุคลากร และช่วยให้บริหารจัดการผู้ใช้งานในระบบได้ง่ายขึ้นทั้งนี้เพื่อให้เป็นไปตามแผนวิสาหกิจการท่องเที่ยวแห่งประทศไทย พ.ศ.2566-2570 ตามยุทธศาสตร์ที่ 3 เรื่องการยกระดับองค์กรสู่องค์กรสมรรถนะสูง ข้อ 3.2 เป็นปรับปรุงการทำงานผ่านการใช้นวัตกรรมและเทคโนโลยีและเพื่อให้เป็นไปตามแผนปฏิบัติการดิจิทัลการท่องเที่ยวแห่งประเทศไทย พ.ศ. 2566-2570 ยุทธศาสตร์ที่ 2 พัฒนาและผลักดันการใช้โครงสร้างพื้นฐาน ระบบสารสนเทศ และข้อมูลด้านการตลาด การท่องเที่ยว เพื่อตอบสนองความต้องการของผู้มีส่วนได้ส่วนเสีย จึงมีความจำเป็นต้องจัดทำโครงการพัฒนาแพลตฟอร์มกลาง(องค์กร) ททท. (Single Sign on)</div>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">วัตถุประสงค์โครงการ<div className="fontColor">*</div>:</div>
                                <div className="d-flex flex-column">
                                <div className="d-flex mr-100 flex-row justify-content-right">
                                    1. เพื่อให้ ททท. มีระบบรองรับผู้ใช้งานระบบสารสนเทศในการพิสูจน์ตัวตนโดยใช้ Username และ Password ในการเข้าใช้งานทุกระบบที่มีสิทธิ์ด้วยการ Login เพียงครั้งเดียว</div>
                                    <div>2. เพื่ออำนวยความสะดวกให้กับบุคลากรผู้ใช้งานระบบ</div>
                                    <div>3. เพื่อเพิ่มประสิทธิภาพด้านการรักษาความมั่นคงปลอดภัยในองค์กร</div>
                                </div>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">สินค้าและบริการ<div className="fontColor">*</div>:</div>
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr className="table-primary">
                                                <th colSpan={3}>
                                                    <div className="d-flex justify-content-center">สินค้าและบริการ</div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="wd-50 d-flex justify-content-center align-items-center">ลำดับที่</div>
                                                </th>
                                                <th><div className="wd-350 d-flex justify-content-center align-items-center">พื้นที่</div></th>
                                                <th><div className="wd-350 d-flex justify-content-center align-items-center">สินค้าและบริการ</div></th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">-</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center">-</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">-</div>
                                                </th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">พื้นที่ดำเนินโครงการ<div className="fontColor">*</div>:</div>
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr className="table-primary">
                                                <th colSpan={3}>
                                                    <div className="d-flex justify-content-center">พื้นที่ดำเนินโครงการ</div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="wd-50 d-flex justify-content-center align-items-center">ลำดับที่</div>
                                                </th>
                                                <th><div className="wd-350 d-flex justify-content-center align-items-center">พื้นที่/ประเทศ</div></th>
                                                <th><div className="wd-350 d-flex justify-content-center align-items-center">จังหวัด/เมือง</div></th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">1</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center">ททท. ส่วนกลาง</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">-</div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">2</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center">ททท. สำนักงานสาขาในประเทศ</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">-</div>
                                                </th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="wid d-flex flex-column mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-left">ความคืบหน้าในการดำเนินโครงการ<div className="fontColor">*</div>:</div>
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr className="table-primary">
                                                <th colSpan={7}>
                                                    <div className="d-flex justify-content-center">ความคืบหน้าในการดำเนินโครงการ</div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="wd-50 d-flex justify-content-center align-items-center">ลำดับที่</div>
                                                </th>
                                                <th><div className="wd-400 d-flex justify-content-center align-items-center">ชื่อตัวชี้วัด</div></th>
                                                <th><div className="wd-100 d-flex justify-content-center align-items-center">รวม (%)</div></th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ไตรมาสที่ 1</div>
                                                        <div>(%)</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ไตรมาสที่ 2</div>
                                                        <div>(%)</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ไตรมาสที่ 3</div>
                                                        <div>(%)</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ไตรมาสที่ 4</div>
                                                        <div>(%)</div>
                                                    </div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">1</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center">ร้อยละความคืบหน้าการดำเนินโครงการ</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">100</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center filter-field-3">
                                                        
                                                        <input type="text" className="form-control" placeholder="" id="filterOverall" />
                                                        
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center filter-field-3">
                                                        
                                                        <input type="text" className="form-control" placeholder="" id="filterOverall" />
                                                        
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center filter-field-3">
                                                        
                                                        <input type="text" className="form-control" placeholder="" id="filterOverall" />
                                                        
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center filter-field-3">
                                                        
                                                        <input type="text" className="form-control" placeholder="" id="filterOverall" />
                                                        </div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">2</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center">ร้อยละความคืบหน้าการดำเนินโครงการ</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">100</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center filter-field-3">
                                                        
                                                        <input type="text" className="form-control" placeholder="" id="filterOverall" />
                                                        
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center filter-field-3">
                                                        
                                                        <input type="text" className="form-control" placeholder="" id="filterOverall" />
                                                        
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center filter-field-3">
                                                        
                                                        <input type="text" className="form-control" placeholder="" id="filterOverall" />
                                                        
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center filter-field-3">
                                                        
                                                        <input type="text" className="form-control" placeholder="" id="filterOverall" />
                                                        
                                                    </div>
                                                </th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                    </div>
                    <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">กลุ่มเป้าหมายระดับโครงการ<div className="fontColor">*</div>:</div>
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr className="table-primary">
                                                <th colSpan={2}>
                                                    <div className="d-flex justify-content-center">กลุ่มเป้าหมายระดับโครงการ</div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="wd-50 d-flex justify-content-center align-items-center">ลำดับที่</div>
                                                </th>
                                                <th><div className="wd-350 d-flex justify-content-center align-items-center">กลุ่มเป้าหมาย</div></th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">1</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center">ผู้บริหาร ททท.</div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">2</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center">พนักงาน ททท. ส่วนกลาง</div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">3</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center">พนักงาน ททท. สำนักงานสาขาต่างประเทศ</div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">4</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center">พนักงาน ททท. สำนักงานสาขาในประเทศ</div>
                                                </th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                    </div>               
                    </div>
    </div>
                    <div className="button-section">
                        <button type="button" className="btn btn-primary">ต่อไป <i className="bi bi-chevron-right"></i></button>
                    </div>

    </>
  );
}
