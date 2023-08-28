"use client";

import React from "react";
import { useState } from "react";
import "@components/Report-temp/report-temp.scss";
import TableQuarterSummary from "@components/OperationFollow/Table/TableQuarterSummary";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { updateFormField, resetForm } from "@/redux/OperationFollow/reducer";
import Popup from '../add/pop-up';
import Link from "next/link";

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

      const [isPopupOpen, setPopupOpen] = useState(false);

      const openPopup = () => {
        setPopupOpen(true);
      };
    
      const closePopup = () => {
        setPopupOpen(false);
      };
    return (
        <>
            <div className='d-flex flex-column' style={{width: '100%'}}>
                <div className="breadcrumb-zone">นำเข้าข้อมูล {'>'} <span className="bread-crumb-page-name">ข้อมูลโครงการของงานบริหารองค์กร</span> {'>'} <span className="bread-crumb-page-name"><b>โครงการพัฒนาระบบแพลตฟอร์มกลาง ททท. (Single Sign on)</b></span></div>
                    <div className="d-flex justify-content-right">
                        <div className="p-2"><button className="btn btn-primary">รายงานผล</button></div>
                        <div className="p-2"><button className="btn btn-secondary">เรียกดูรายงาน</button></div>
                        <div className="p-2"><button className="btn btn-secondary">ย้อนกลับ</button></div>
                    </div>

                    <div className='search-wrapper-section d-flex flex-column justify-content-center align-items-center'>
                        <div className="d-flex flex-column mr-20 ml-70">
                        <div className="wid d-flex flex-row mb-20 align-items-center">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right align-items-center">
                                    <div className="f-column">
                                        <div className="d-flex justify-content-right">ความคืบหน้า</div>
                                        <div className="d-flex justify-content-right">การดำเนินโครงการ</div>
                                    </div>
                                <div className="fontColor">*</div>:</div>
                                <div>75%</div>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ชื่อโครงการ<div className="fontColor">*</div>:</div>
                                <div>โครงการพัฒนาระบบแพลตฟอร์มกลาง ททท. (Single Sign on)</div>
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
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">โครงการหลัก<div className="fontColor">*</div>:</div>
                                <div></div>
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
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">
                                    <div className="d-flex flex-column justify-content-right">
                                        <div className="d-flex justify-content-right">งบประมาณ</div>
                                        <div className="d-flex justify-content-right">โครงการแผน(บาท)</div>
                                    </div>
                                    <div className="fontColor">*</div>:</div>
                                <div>7,000,000</div>
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
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">รายการค่าใช้จ่าย<div className="fontColor">*</div>:</div>
                                <div>-</div>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right"><span>หลักการและเหตุผล</span><div className="fontColor">*</div>:</div>
                                <div className="d-flex mr-100 flex-row justify-content-right">ในปัจจุบันบุคลากรมีความจำเป็นต้อง Login ทุกครั้ง เพื่อเข้าใช้งานระบบสารสนเทศขององค์กร เพื่อใช้ในการปฏิบัติงาน ซึ่งมีระบบอยู่เป็นจำนวนมาก จึงทำให้การเข้าใช้งานระบต่าง ๆ นั้นไม่มีความคล่องตัวในการปฏิบัติงาน ด้วยเหตุนี้ จึงควรดำเนินการพัฒนา ระบบที่ให้ผู้ใช้งานสามารถพิสูจน์ตัวตนโดยใช้ Username และ Password เดียวในการเข้าใช้งานทุกระบบที่มีสิทธิ์ด้วยการ Login เพียงครั้งเดียว เป็นการอำนวยความสะดวกให้กับบุคลากร และช่วยให้บริหารจัดการผู้ใช้งานในระบบได้ง่ายขึ้นทั้งนี้เพื่อให้เป็นไปตามแผนวิสาหกิจการท่องเที่ยวแห่งประทศไทย พ.ศ.2566-2570 ตามยุทธศาสตร์ที่ 3 เรื่องการยกระดับองค์กรสู่องค์กรสมรรถนะสูง ข้อ 3.2 เป็นปรับปรุงการทำงานผ่านการใช้นวัตกรรมและเทคโนโลยีและเพื่อให้เป็นไปตามแผนปฏิบัติการดิจิทัลการท่องเที่ยวแห่งประเทศไทย พ.ศ. 2566-2570 ยุทธศาสตร์ที่ 2 พัฒนาและผลักดันการใช้โครงสร้างพื้นฐาน ระบบสารสนเทศ และข้อมูลด้านการตลาด การท่องเที่ยว เพื่อตอบสนองความต้องการของผู้มีส่วนได้ส่วนเสีย จึงมีความจำเป็นต้องจัดทำโครงการพัฒนาแพลตฟอร์มกลาง(องค์กร) ททท. (Single Sign on)</div>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">วัตถุประสงค์โครงการ<div className="fontColor">*</div>:</div>
                                <div className="d-flex flex-column">
                                    <div className="d-flex mr-100 flex-row justify-content-right">1. เพื่อให้ ททท. มีระบบรองรับผู้ใช้งานระบบสารสนเทศในการพิสูจน์ตัวตนโดยใช้ Username และ Password ในการเข้าใช้งานทุกระบบที่มีสิทธิ์ด้วยการ Login เพียงครั้งเดียว</div>
                                    <div>2. เพื่ออำนวยความสะดวกให้กับบุคลากรผู้ใช้งานระบบ</div>
                                    <div>3. เพื่อเพิ่มประสิทธิภาพด้านการรักษาความมั่นคงปลอดภัยในองค์กร</div>
                                </div>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">วันเริ่มโครงการ - วันสิ้นสุดโครงการ<div className="fontColor">*</div>:</div>
                                <div>01/12/2565 - 30/09/2566</div>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">
                                    <div className="d-flex flex-column">
                                        <div className="d-flex justify-content-right">ระบุความเสี่ยงโครงการ(เฉพาะ​ Flagship</div>
                                        <div className="d-flex justify-content-right"> ​project/ ถ้าไม่ใช่​ </div>
                                        <div className="d-flex justify-content-right">Flagship​ Project ให้ใส่เครื่องหมาย​ -)</div>
                                    </div>
                                <div className="fontColor">*</div>:</div>
                                <div>-</div>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">มาตรการบริหารความเสี่ยง<div className="fontColor">*</div>:</div>
                                <div>-</div>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ประโยชน์ที่คาดว่าจะได้รับ(Impact)<div className="fontColor">*</div>:</div>
                                <div className="d-flex flex-column">
                                    <div>- ผู้ดูแลระบบสามารถบริหารจัดการผู้ใช้งานในระบบได้ง่ายขึ้น</div>
                                    <div>- เพิ่มประสิทธิภาพด้านการรักษาความมั่นคงปลอดภัยในองค์กร</div>
                                </div>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">สินค้าและบริการ<div className="fontColor">*</div>:</div>
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
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
                                            <tr>
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
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">
                                    <div className="d-flex flex-column">
                                        <div className="d-flex justify-content-right">สรุปรายละเอียดผลการดำเนินงาน</div>
                                        <div className="d-flex justify-content-right">ของโครงการในภาพรวม</div>
                                    </div>
                                    <div className="fontColor"></div>:</div>
                                <div>-</div>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">กลุ่มเป้าหมายระดับโครงการ<div className="fontColor">*</div>:</div>
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
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
                            <div className="wid d-flex flex-column mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-left">ตัวชี้วัดระดับโครงการ(Outcome)<div className="fontColor">*</div>:</div>
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <th colSpan={7}>
                                                    <div className="d-flex justify-content-center">ตัวชี้วัดระดับโครงการ(Outcome)</div>
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
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ตัวชี้วัดระดับโครงการ(Outcome)<div className="fontColor">*</div>:</div>
                                <div>อัตราความพึงพอใจของผู้ใช้งาน ไม่น้อยกว่าร้อยละ 75</div>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right align-items-center">งบประมาณโครงการ<div className="fontColor">*</div>:</div>
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
                            <div className="wid d-flex flex-row">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">งบประมาณแยกตามรายเดือน<div className="fontColor">*</div>:</div>
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
                                            <tr>
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
                                            <tr>
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
                            <div className="d-flex justify-content-center">
                                <div className="p-2"><button className="btn btn-secondary">รายงานผล</button></div>
                                <div className="p-2"><button className="btn btn-primary">เรียกดูรายงาน</button></div>
                                <div className="p-2"><button className="btn btn-secondary">ย้อนกลับ</button></div>
                            </div>
                        </div>                       
                    </div>

                    <div className='search-wrapper-section d-flex flex-column'>
                        <div className="years d-flex flex-column p-2 justify-content-center">
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <b>แผนปฏิบัติการในการจัดกิจกรรม</b>
                            </div>
                            <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr className="table-primary">
                                            <th>
                                                <div className="wd-350 d-flex flex-column justify-content-center align-items-center">
                                                    <div className="content-sub">รายการ</div>
                                                </div> 
                                            </th>
                                            <th>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div className="content-sub">ก.ย</div>
                                                    <div className="content-sub">2565</div>
                                                </div> 
                                            </th>
                                            <th>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div className="content-sub">ต.ค</div>
                                                    <div className="content-sub">2565</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div className="content-sub">พ.ย</div>
                                                    <div className="content-sub">2565</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div className="content-sub">ธ.ค</div>
                                                    <div className="content-sub">2565</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div className="content-sub">ม.ค</div>
                                                    <div className="content-sub">2566</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div className="content-sub">ก.พ</div>
                                                    <div className="content-sub">2566</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div className="content-sub">ม.ค.</div>
                                                    <div className="content-sub">2566</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div className="content-sub">เม.ย.</div>
                                                    <div className="content-sub">2566</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div className="content-sub">พ.ค.</div>
                                                    <div className="content-sub">2566</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div className="content-sub">มิ.ย.</div>
                                                    <div className="content-sub">2566</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div className="content-sub">ก.ค.</div>
                                                    <div className="content-sub">2566</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div className="content-sub">ส.ค.</div>
                                                    <div className="content-sub">2566</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div className="content-sub">ก.ย</div>
                                                    <div className="content-sub">2566</div>
                                                </div> 
                                            </th>
                                            <th>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div className="content-sub">ต.ค</div>
                                                    <div className="content-sub">2566</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div className="content-sub">พ.ย</div>
                                                    <div className="content-sub">2566</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div className="content-sub">ธ.ค</div>
                                                    <div className="content-sub">2566</div>
                                                </div>
                                            </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left">                                                 
                                                        แผน : การจัดซื้อจัดจ้าง (01/12/2565-28/02/2566)
                                                    </div>
                                                </th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th className="bg-info"></th>
                                                <th className="bg-info"></th>
                                                <th className="bg-info"></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                            
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left">                                                 
                                                        ผล : การจัดซื้อจัดจ้าง (01/12/2565-23/03/2566)
                                                    </div>
                                                </th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th className="bg-warning"></th>
                                                <th className="bg-warning"></th>
                                                <th className="bg-warning"></th>
                                                <th className="bg-warning"></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex flex-column justify-content-left">                                                 
                                                        <div>แผน : ศึกษาความต้องการของผู้ใช้งานและดำเนินการพัฒนาระบบ</div>
                                                        <div>(01/03/2566-31/08/2566)</div>
                                                    </div>
                                                </th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th className="bg-info"></th>
                                                <th className="bg-info"></th>
                                                <th className="bg-info"></th>
                                                <th className="bg-info"></th>
                                                <th className="bg-info"></th>
                                                <th className="bg-info"></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex flex-column justify-content-left">                                                 
                                                        <div>ผล : ศึกษาความต้องการของผู้ใช้งานและดำเนินการพัฒนาระบบ</div>
                                                        <div>(23/03/2566-07/04/2566)</div>
                                                    </div>
                                                </th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th className="bg-warning"></th>
                                                <th className="bg-warning"></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex flex-column justify-content-left">                                                 
                                                        <div>แผน : ทดสอบการใช้งาน อบรมการใช้ระบบ และเผยแพร่ประชาสัมพันธ์</div>
                                                        <div>ระบบและตรวจรับโครงการ (01/07/2566-30/09/2566)</div>
                                                    </div>
                                                </th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th className="bg-info"></th>
                                                <th className="bg-info"></th>
                                                <th className="bg-info"></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                            </tr> 
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex flex-column justify-content-left">                                                 
                                                        <div>ผล : ทดสอบการใช้งาน อบรมการใช้ระบบ และเผยแพร่ประชาสัมพันธ์</div>
                                                        <div>ระบบและตรวจรับโครงการ (10/09/2566-30/11/2566)</div>
                                                    </div>
                                                </th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th className="bg-warning"></th>
                                                <th className="bg-warning"></th>
                                                <th className="bg-warning"></th>
                                                <th></th>
                                            </tr>                                      
                                        </tbody>
                                    </table>
                            </div>
                        </div>
                    </div>

                    <div className='search-wrapper-section d-flex flex-column'>
                        <div className="years d-flex flex-column p-2 justify-content-center">
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr className="table-primary">
                                            <th>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div>ดูข้อมูล</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-80 d-flex flex-column justify-content-center align-items-center">
                                                    <div>รายงานผล</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                    <div>หมวดกิจกรรม</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-140 d-flex flex-column justify-content-center align-items-center">
                                                    <div>ประเภทกิจกรรม</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-350 d-flex flex-column justify-content-center align-items-center">
                                                    <div>ชื่อกิจกรรม</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                    <div>ลำดับที่</div>
                                                    <div>โครงการ</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-80 d-flex flex-column justify-content-center align-items-center">
                                                    <div>สัดส่วนของ</div>
                                                    <div>กิจกรรม</div>
                                                    <div>ต่อโครงการ</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-140 d-flex flex-column justify-content-center align-items-center">
                                                    <div>สถานะกิจกรรม</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                    <div>สถานะงาน</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-140 d-flex flex-column justify-content-center align-items-center">
                                                    <div>งบประมาณ</div>
                                                    <div>โครงการแผน(บาท)</div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="wd-140 d-flex flex-column justify-content-center align-items-center">
                                                    <div>ยอดงบประมาณ</div>
                                                    <div>กิจกรรม</div>
                                                </div>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th><div className="d-flex justify-content-center bi bi-search"></div></th>
                                            <th><div className="d-flex justify-content-center bi bi-file-earmark-text-fill"></div></th>
                                            <th>
                                                <div className="normalText d-flex justify-content-center">
                                                    ในแผน
                                                </div>
                                            </th>
                                            <th>
                                                <div className="normalText d-flex justify-content-center">
                                                    สนับสนุนตลาด
                                                </div>
                                            </th>
                                            <th>
                                                <div className="normalText d-flex justify-content-left">
                                                    การจัดซื้อจัดจ้าง
                                                </div>
                                            </th>
                                            <th>
                                                <div className="normalText d-flex justify-content-center">
                                                    1
                                                </div>
                                            </th>
                                            <th>
                                                <div className="normalText d-flex justify-content-center">
                                                    20
                                                </div>
                                            </th>
                                            <th>
                                                <div className="normalText d-flex justify-content-center">
                                                    อยู่ระหว่างดำเนินการ
                                                </div>
                                            </th>
                                            <th>
                                                <div className="normalText d-flex justify-content-center">
                                                    รายงานผล
                                                </div>
                                            </th>
                                            <th>
                                                <div className="normalText d-flex justify-content-center">
                                                    7,000,000
                                                </div>
                                            </th>
                                            <th></th>
                                        </tr>
                                        <tr>
                                            <th><div className="d-flex justify-content-center bi bi-search"></div></th>
                                            <th><div className="d-flex justify-content-center bi bi-file-earmark-text-fill"></div></th>
                                            <th>
                                                <div className="normalText d-flex justify-content-center">
                                                    ในแผน
                                                </div>
                                            </th>
                                            <th>
                                                <div className="normalText d-flex justify-content-center">
                                                    สนับสนุนตลาด
                                                </div>
                                            </th>
                                            <th>
                                                <div className="normalText d-flex justify-content-left">
                                                    ศึกษาความต้องการของผู้ใช้งานและดำเนินการพัฒนาระบบ
                                                </div>
                                            </th>
                                            <th>
                                                <div className="normalText d-flex justify-content-center">
                                                    2
                                                </div>
                                            </th>
                                            <th>
                                                <div className="normalText d-flex justify-content-center">
                                                    50
                                                </div>
                                            </th>
                                            <th>
                                                <div className="normalText d-flex justify-content-center">
                                                    อยู่ระหว่างดำเนินการ
                                                </div>
                                            </th>
                                            <th>
                                                <div className="normalText d-flex justify-content-center">
                                                    รายงานผล
                                                </div>
                                            </th>
                                            <th>
                                                <div className="normalText d-flex justify-content-center">
                                                    7,000,000
                                                </div>
                                            </th>
                                            <th></th>
                                        </tr>
                                        <tr>
                                            <th><div className="d-flex justify-content-center bi bi-search"></div></th>
                                            <th><div className="d-flex justify-content-center bi bi-file-earmark-text-fill"></div></th>
                                            <th>
                                                <div className="normalText d-flex justify-content-center">
                                                    ในแผน
                                                </div>
                                            </th>
                                            <th>
                                                <div className="normalText d-flex justify-content-center">
                                                    สนับสนุนตลาด
                                                </div>
                                            </th>
                                            <th>
                                                <div className="normalText d-flex justify-content-left">
                                                    ทดสอบการใช้งาน อบรมการใช้ระบบ และเผยแพร่ประชาสัมพันธ์ระบบและตรวจรับโครงการ
                                                </div>
                                            </th>
                                            <th>
                                                <div className="normalText d-flex justify-content-center">
                                                    3
                                                </div>
                                            </th>
                                            <th>
                                                <div className="normalText d-flex justify-content-center">
                                                    30
                                                </div>
                                            </th>
                                            <th>
                                                <div className="normalText d-flex justify-content-center">
                                                    
                                                </div>
                                            </th>
                                            <th>
                                                <div className="normalText d-flex justify-content-center">
                                                    ส่งอนุมัติ
                                                </div>
                                            </th>
                                            <th>
                                                <div className="normalText d-flex justify-content-center">
                                                    7,000,000
                                                </div>
                                            </th>
                                            <th></th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="d-flex justify-content-center p-2"><button className="btn btn-secondary">
                                <div className="d-flex flex-row">
                                    <div className="bi bi-file-earmark-text-fill mr-5"></div>
                                    <div>เพิ่มกิจกรรมนอกแผน</div>
                                </div>
                                </button>
                                </div>
                        </div>
                    </div>

                    <div className='search-wrapper-section d-flex flex-column justify-content-center'>
                        <div className="wid d-flex flex-row mb-20 color-org p-2">
                            <div className="d-flex flex-row justify-content-left">กิจกรรมที่ 1</div>
                        </div>
                        <div className="d-flex flex-column ma">
                            <div className="d-flex flex-column">
                                <div className="wid d-flex flex-row mb-20">
                                    <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">หมวดกิจกรรม:</div>
                                    <div>โครงการพัฒนาระบบแพลตฟอร์มกลาง ททท. (Single Sign on)</div>
                                </div>
                                <div className="wid d-flex flex-row mb-20">
                                    <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ประเภทกิจกรรม:</div>
                                    <div>สนับสนุนตลาด</div>
                                </div>
                                <div className="wid d-flex flex-row mb-20">
                                    <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ลำดับที่กิจกรรม:</div>
                                    <div>4</div>
                                </div>
                                <div className="wid d-flex flex-row mb-20">
                                    <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ชื่อกิจกรรม:</div>
                                    <div>การจัดซื้อจัดจ้าง</div>
                                </div>
                                <div className="wid d-flex flex-row mb-20">
                                    <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">รายละเอียดกิจกรรม:</div>
                                    <div>-</div>
                                </div>
                                <div className="wid d-flex flex-row mb-20">
                                    <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">สัดส่วนของกิจกรรมต่อโครงการ:</div>
                                    <div>20%</div>
                                </div>
                            </div>
                            <div className="d-flex mb-20 justify-content-center">
                                <div className="d-flex flex-row justify-content-center"><b>ผลการจัดกิจกรรม</b></div>
                            </div>
                            <div className="d-flex">
                                <div className="wid d-flex flex-row mb-20">
                                    <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">สถานะกิจกรรม:</div>
                                    <div>อยู่ระหว่างดำเนินการ</div>
                                </div>
                            </div>
                            <div className="d-flex flex-row mb-20 color-gry p-2 justify-content-center">
                                <div className="d-flex flex-row justify-content-center"><b>รายละเอียดและผลการดำเนินงาน</b></div>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">งบประมาณ<div className="fontColor">*</div>:</div>
                                <div>0.00 บาท (แผน)</div>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ช่วงเวลาจัดกิจกรรม (เริ่มต้น)<div className="fontColor">*</div>:</div>
                                <div>01/12/2566  (แผน)</div>
                            </div>
                            <div className="wid d-flex flex-row mb-20">
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ช่วงเวลาจัดกิจกรรม (สิ้นสุด)<div className="fontColor">*</div>:</div>
                                <div>28/02/2566  (แผน)</div>
                            </div>                   
                        </div>

                        <div className="wid d-flex flex-column mb-20 justify-content-center">
                                <div className="d-flex justify-content-right align-items-end">
                                    <div><button className="btn color-org bi bi-file-earmark-plus mb-2"><Link href="/report/add">เพิ่ม</Link></button></div>
                                </div>  
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <th colSpan={12}>
                                                    <div className="d-flex justify-content-center">ตารางผลการดำเนินงาน</div>
                                                </th>
                                            </tr>

                                            <tr>
                                                <th>
                                                    <div className="wd-50 d-flex justify-content-center align-items-center">ลำดับที่</div>
                                                </th>
                                                <th><div className="wd-50 d-flex justify-content-center align-items-center">ดูข้อมูล</div></th>
                                                <th><div className="wd-50 d-flex justify-content-center align-items-center">แก้ไข</div></th>
                                                <th><div className="wd-50 d-flex justify-content-center align-items-center">ลบ</div></th>
                                                <th><div className="wd-300 d-flex flex-column justify-content-center align-items-center">หัวข้อ</div></th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>งบประมาณ</div>
                                                        <div>(จัดจริง)</div>
                                                    </div>
                                                </th>
                                                <th><div className="wd-100 d-flex flex-column justify-content-center align-items-center">วันที่เริ่มต้น</div></th>
                                                <th><div className="wd-100 d-flex flex-column justify-content-center align-items-center">วันที่สิ้นสุด</div></th>
                                                <th><div className="wd-100 d-flex flex-column justify-content-center align-items-center">เอกสารแนบ</div></th>
                                                <th><div className="wd-100 d-flex flex-column justify-content-center align-items-center">วันที่เริ่มต้น</div></th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>วันที่แก้ไข</div>
                                                        <div>ข้อมูลล่าสุด</div>
                                                    </div>
                                                </th>
                                                <th><div className="wd-100 d-flex flex-column justify-content-center align-items-center">แก้ไขโดย</div></th>
                                            </tr>

                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">1</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center bi bi-search"></div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center bi bi-pencil"></div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center bi bi-trash"></div>
                                                </th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                            </tr>

                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">2</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center bi bi-search"></div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center bi bi-pencil"></div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center bi bi-trash"></div>
                                                </th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            
                            <div className="wid d-flex flex-column mb-20 justify-content-center"> 
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr className="">
                                                <th colSpan={9}>
                                                    <div className="d-flex justify-content-center">ตารางตัวชี้วัดระดับโครงการและค่าเป้าหมาย</div>
                                                </th>
                                            </tr>

                                            <tr>
                                                <th>
                                                    <div className="wd-50 d-flex justify-content-center align-items-center">ลำดับที่</div>
                                                </th>
                                                <th><div className="wd-300 d-flex justify-content-center align-items-center">ชื่อตัวชี้วัด</div></th>
                                                <th><div className="wd-80 d-flex justify-content-center align-items-center">หน่วย</div></th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>เป้าหมาย</div>
                                                        <div>ไตรมาสที่ 1</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ผล</div>
                                                        <div>ไตรมาสที่ 1</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>เป้าหมาย</div>
                                                        <div>ไตรมาสที่ 2</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ผล</div>
                                                        <div>ไตรมาสที่ 2</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>เป้าหมาย</div>
                                                        <div>ไตรมาสที่ 3</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ผล</div>
                                                        <div>ไตรมาสที่ 3</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>เป้าหมาย</div>
                                                        <div>ไตรมาสที่ 4</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ผล</div>
                                                        <div>ไตรมาสที่ 4</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ผลรวม</div>
                                                        <div>เป้าหมาย</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ผลรวม</div>
                                                        <div>(ปัจจุบัน)</div>
                                                    </div>
                                                </th>
                                                                                         
                                            </tr>

                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">1</div>
                                                </th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                            </tr>

                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">2</div>
                                                </th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                            </tr>

                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">3</div>
                                                </th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="wid d-flex flex-column mb-20 justify-content-center"> 
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr className="">
                                                <th colSpan={9}>
                                                    <div className="d-flex justify-content-center">ตารางตัวชี้วัดระดับกิจกรรมและค่าเป้าหมาย</div>
                                                </th>
                                            </tr>

                                            <tr>
                                                <th>
                                                    <div className="wd-50 d-flex justify-content-center align-items-center">ลำดับที่</div>
                                                </th>
                                                <th><div className="wd-300 d-flex justify-content-center align-items-center">ชื่อตัวชี้วัด</div></th>
                                                <th><div className="wd-80 d-flex justify-content-center align-items-center">หน่วย</div></th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>เป้าหมาย</div>
                                                        <div>ไตรมาสที่ 1</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ผล</div>
                                                        <div>ไตรมาสที่ 1</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>เป้าหมาย</div>
                                                        <div>ไตรมาสที่ 2</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ผล</div>
                                                        <div>ไตรมาสที่ 2</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>เป้าหมาย</div>
                                                        <div>ไตรมาสที่ 3</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ผล</div>
                                                        <div>ไตรมาสที่ 3</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>เป้าหมาย</div>
                                                        <div>ไตรมาสที่ 4</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ผล</div>
                                                        <div>ไตรมาสที่ 4</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ผลรวม</div>
                                                        <div>เป้าหมาย</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ผลรวม</div>
                                                        <div>(ปัจจุบัน)</div>
                                                    </div>
                                                </th>
                                                                                         
                                            </tr>

                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">1</div>
                                                </th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                            </tr>

                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">2</div>
                                                </th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                            </tr>

                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">3</div>
                                                </th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="wid d-flex flex-column mb-20 justify-content-center"> 
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr className="">
                                                <th colSpan={2}>
                                                    <div className="d-flex justify-content-center">ตารางงบประมาณกิจกรรมตามแผน(บาท)</div>
                                                </th>
                                            </tr>

                                            <tr>
                                                <th>
                                                    <div className="wd-80 normalText d-flex justify-content-center align-items-center">แผน</div>
                                                </th>
                                                <th><div className="wd-180 normalText d-flex justify-content-center align-items-center"></div></th>                                 
                                            </tr>

                                            <tr>
                                                <th>
                                                    <div className="wd-100 normalText d-flex justify-content-center align-items-center">จัดจ้าง</div>
                                                </th>
                                                <th><div className="wd-180 normalText d-flex justify-content-center align-items-center"></div></th> 
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="wid d-flex flex-column mb-20 justify-content-center">
                            <div className="d-flex justify-content-right align-items-end">
                                <div><button className="btn color-org bi bi-file-earmark-plus mb-2">เพิ่ม</button></div>  
                            </div>  
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
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
                            <div className="wid d-flex flex-column mb-20 justify-content-center">
                            <div className="d-flex justify-content-right align-items-end">
                                <div><button className="btn color-org bi bi-file-earmark-plus mb-2">เพิ่ม</button></div>  
                            </div>  
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
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

                            <div className="wid d-flex flex-column mb-20 justify-content-center">
                            <div className="d-flex justify-content-right align-items-end">
                                <div><button className="btn color-org bi bi-file-earmark-plus mb-2">เพิ่ม</button></div>  
                            </div>  
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <th colSpan={2}>
                                                    <div className="d-flex justify-content-center">กลุ่มเป้าหมายระดับกิจกรรม</div>
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
        </>
    )
}