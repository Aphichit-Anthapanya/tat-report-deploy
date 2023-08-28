"use client";

import { useDispatch, useSelector } from "react-redux";
import "./report-result.scss";
import { RootState } from "@/redux/store";
import TableQuarterSummary from "@components/OperationFollow/Table/TableQuarterSummary";
import { useEffect, useState } from "react";
import { updateFormField } from "@/redux/OperationFollow/reducer";
import { FormState } from "@/redux/OperationFollow/types";
import { useParams, useRouter } from "next/navigation";

interface Section3Props {
  changeSectionHandle: (value: number, isBubble: boolean) => void;
  setIsLoading: (val: boolean) => void
}

export default function Section3(props: Section3Props) {
    const formState = useSelector(
        (state: RootState) => state.operationFollowForm
      );
  return (
    <>
    <div className='search-wrapper-section d-flex flex-column justify-content-center align-items-center'>
                    <div className="d-flex flex-column mr-20 ml-70">
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
                                <div className="wdth-200 mr-20 d-flex flex-row justify-content-left">ตัวชี้วัดระดับโครงการ(Outcome)<div className="fontColor">*</div>:</div>
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr className="table-primary">
                                                <th colSpan={7}>
                                                    <div className="d-flex justify-content-center">ตัวชี้วัดระดับโครงการ(Outcome)</div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="wd-50 d-flex justify-content-center align-items-center">ลำดับที่</div>
                                                </th>
                                                <th><div className="wd-50 d-flex justify-content-center align-items-center">ลบ</div></th>
                                                
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
                                                    <div className="normalText d-flex justify-content-center align-items-center bi bi-trash"></div>
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
                                                    <div className="normalText d-flex justify-content-center align-items-center bi bi-trash"></div>
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
                        <button type="button" className="btn btn-primary"><i className="bi bi-file-earmark mr-5"></i>บันทึกชั่วคราว</button>
                        <button type="button" className="btn btn-primary">ย้อนกลับ <i className="bi bi-chevron-left"></i></button>
                    </div>
    </>
  );
}
