"use client";

import React from "react";
import { useState } from "react";
import "@components/Activities/activities-add.scss";
import Activities from "@components/Activities/Activities";
import AddActivities from "@components/Activities/Add-Activities";

export default function Page() {

    const [isOpenAddActivity,setOpenAddActivity] = useState(false);

    const [sectionNumber, setSectionNumber] = useState(1);
    const handleSection = (value: number) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setSectionNumber(value)
    };

    const handleAddActivity = () => {
        setOpenAddActivity(!isOpenAddActivity)
        if(isOpenAddActivity){
            handleSection(1)
        }else{
            handleSection(2)
        }
    }
    
    return (
        <>
            <div className='d-flex flex-column' style={{width: '100%'}}>
                <div className="breadcrumb-zone">รายงานจัดซื้อจัดจ้าง {'>'} <span className="bread-crumb-page-name"><b>รายงานสรุปแผนปฏิบัติการจัดซื้อจัดจ้าง(ระดับฝ่าย) ประจำปีงบประมาณ 25XX</b></span></div>
                    <div className='search-wrapper-section d-flex flex-column'>
                        <div className="d-flex justify-content-around justify-content-center align-items-center">
                            <div className="content-search-box d-flex p-2 justify-content-center align-items-center">
                                <div className="purchase-report">
                                    <label>ปีงบประมาณ:</label>
                                </div>
                                <div className="purchase-report">
                                    <div className="filter-field">
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>2566</option>
                                            <option value="2">2565</option>
                                            <option value="3">2564</option>
                                            <option value="4">2563</option>
                                            <option value="5">2562</option>
                                            <option value="6">2561</option>
                                            <option value="7">2560</option>
                                            <option value="8">2559</option>
                                            <option value="9">2558</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="content-search-box d-flex p-2 justify-content-between justify-content-center align-items-center">
                                <div className="purchase-report">
                                    <label>สถานะงาน:</label>
                                </div>
                                <div className="purchase-report">
                                    <div className="filter-field">
                                       <select className="form-select" aria-label="Default select example">
                                            <option selected>  -- เลือกทั้งหมด --  </option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="content-search-box d-flex p-2 justify-content-between justify-content-center align-items-center">
                                <div className="purchase-report">
                                    <label>หน่วยงาน:</label>
                                </div>
                                <div className="purchase-report">
                                    <div className="filter-field">
                                        <input type="text" className="form-control" placeholder="" id="filterOverall" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex filter-project-button justify-content-center">
                            <div className="p-2"><button className="btn btn-primary">ดูรายงาน</button></div>
                            <div className="p-2"><button className="btn btn-secondary">ล้างค่า</button></div>
                        </div>    
                    </div>

                    <div className='search-wrapper-section d-flex flex-column'>
                        <div className="years d-flex flex-column p-2 justify-content-center">
                            <div className="box">
                                <b>รายงานสรุปแผนปฏิบัติการจัดซื้อจัดจ้าง(ระดับฝ่าย) ประจำปีงบประมาณ 25XX</b>
                            </div>

                            <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr className="table-primary">
                                                <th>
                                                    <div className="wd-50 d-flex flex-column justify-content-center align-items-center">
                                                        <div className="content-sub">ลำดับ</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-300 d-flex flex-column justify-content-center align-items-center">
                                                        หน่วยงานที่รับผิดชอบ
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-50 d-flex justify-content-center align-items-center">
                                                        <div className="content-sub">จำนวนรายการ</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-140 d-flex flex-column justify-content-center align-items-center">
                                                        <div>วงเงินงบประมาณ(บาท)</div>
                                                    </div>
                                                </th>
                                            </tr>

                                            <tr className="table-info">
                                                <th></th>
                                                <th>
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        <div>รวมทั้งสิ้น</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        <div>208</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="d-flex justify-content-right align-items-center">
                                                        <div>529,070,003.31</div>
                                                    </div>
                                                </th>
                                            </tr>

                                            <tr className="table-success">
                                                <th></th>
                                                <th>
                                                    <div className="d-flex justify-content-left align-items-center">
                                                        <div>1. งบลงทุน</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        <div>6</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="d-flex justify-content-right align-items-center">
                                                        <div>20,242,000.00</div>
                                                    </div>
                                                </th>
                                            </tr>

                                            <tr className="table-warning">
                                                <th></th>
                                                <th>
                                                    <div className="ml-10 d-flex justify-content-left align-items-center">
                                                        <div>1.1 งบลงทุน(เงินงบประมาณ)</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        <div>3</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="d-flex justify-content-right align-items-center">
                                                        <div>17,542,000.00</div>
                                                    </div>
                                                </th>
                                            </tr>

                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">
                                                            <div>1</div>
                                                        </div>
                                                    </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center">
                                                        <div>ฝ่ายบริหารทั่วไป</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">
                                                        <div>1</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-right align-items-center">
                                                        <div>6,969,000.00</div>
                                                    </div>
                                                </th>
                                            </tr>

                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">
                                                            <div>2</div>
                                                        </div>
                                                    </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center">
                                                        <div>ฝ่ายดิจิทัลและเทคโนโลยีสารสนเทศ</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">
                                                        <div>2</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-right align-items-center">
                                                        <div>10,573,000.00</div>
                                                    </div>
                                                </th>
                                            </tr>

                                            <tr className="table-warning">
                                                <th></th>
                                                <th>
                                                    <div className="ml-10 d-flex justify-content-left align-items-center">
                                                        <div>1.2 งบสำรองกรณีจำเป็นเร่งด่วน+สำรองราคา(เงินรายได้)</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        <div>3</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="d-flex justify-content-right align-items-center">
                                                        <div>2,700,000.00</div>
                                                    </div>
                                                </th>
                                            </tr>

                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">
                                                            <div>1</div>
                                                        </div>
                                                    </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center">
                                                        <div>ฝ่ายบริหารทั่วไป</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">
                                                        <div>1</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-right align-items-center">
                                                        <div>1,000,000.00</div>
                                                    </div>
                                                </th>
                                            </tr>

                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">
                                                            <div>2</div>
                                                        </div>
                                                    </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center">
                                                        <div>ฝ่ายดิจิทัลและเทคโนโลยีสารสนเทศ</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">
                                                        <div>2</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-right align-items-center">
                                                        <div>1,000,000.00</div>
                                                    </div>
                                                </th>
                                            </tr>
                                            
                                            <tr className="table-success">
                                                <th></th>
                                                <th>
                                                    <div className="d-flex justify-content-left align-items-center">
                                                        <div>2. งบอุดหนุน</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        <div>198</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="d-flex justify-content-right align-items-center">
                                                        <div>505,128,003.31</div>
                                                    </div>
                                                </th>
                                            </tr>

                                            <tr className="table-warning">
                                                <th rowSpan={3}className="bg-white">
                                                    <div className="normalText d-flex justify-content-center align-items-center">
                                                        <div>1</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="ml-10 d-flex justify-content-left align-items-center">
                                                        <div>หน่วยงานผู้ว่าการ</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        <div>2</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="d-flex justify-content-right align-items-center">
                                                        <div>4,500,000.00</div>
                                                    </div>
                                                </th>
                                            </tr>

                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center">
                                                        <div>1.1 สำนักผู้ว่าการ</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">
                                                        <div>2</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-right align-items-center">
                                                        <div>4,500,000.00</div>
                                                    </div>
                                                </th>
                                            </tr>

                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center">
                                                        <div>1.2 ฝ่ายตรวจสอบภายใน</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">
                                                        <div>-</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-right align-items-center">
                                                        <div>-</div>
                                                    </div>
                                                </th>
                                            </tr>

                                            <tr className="table-warning">
                                                <th rowSpan={6}className="bg-white">
                                                    <div className="normalText d-flex justify-content-center align-items-center">
                                                        <div>2</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="ml-10 d-flex justify-content-left align-items-center">
                                                        <div>ด้านบริหาร</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        <div>24</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="d-flex justify-content-right align-items-center">
                                                        <div>142,843,237.28</div>
                                                    </div>
                                                </th>
                                            </tr>

                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center">
                                                        <div>2.1 กลุ่มงานอำนวยการด้านบริหาร</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">
                                                        <div>-</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-right align-items-center">
                                                        <div>-</div>
                                                    </div>
                                                </th>
                                            </tr>

                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center">
                                                        <div>2.2 ฝ่ายบริหารทั่วไป</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">
                                                        <div>17</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-right align-items-center">
                                                        <div>76,691,400.00</div>
                                                    </div>
                                                </th>
                                            </tr>

                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center">
                                                        <div>2.3 ฝ่ายทรัพยากรบุคคล</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">
                                                        <div>6</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-right align-items-center">
                                                        <div>65,151,837.28</div>
                                                    </div>
                                                </th>
                                            </tr>

                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center">
                                                        <div>2.4 ฝ่ายบัญชีและงบประมาณ</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">
                                                        <div>-</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-right align-items-center">
                                                        <div>-</div>
                                                    </div>
                                                </th>
                                            </tr>

                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center">
                                                        <div>2.5 ฝ่ายการเงิน</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">
                                                        <div>1</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-right align-items-center">
                                                        <div>1,000,000.00</div>
                                                    </div>
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