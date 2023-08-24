"use client";

import React from "react";
import { useState } from "react";
import "@components/Report-temp/report-temp.scss";
import Activities from "@components/Activities/Activities";
import AddActivities from "@components/Activities/Add-Activities";

export default function Page() {
    
    return (
        <>
            <div className='d-flex flex-column' style={{width: '100%'}}>
                <div className="breadcrumb-zone"><span className="bread-crumb-page-name"><b>รายงานผลตัวชี้วัดแผนวิสาหกิจ</b></span></div>
                <div className='search-wrapper-section d-flex flex-column justify-content-center align-items-center'>
                    <div className="d-flex flex-column">
                        <div className="wid d-flex flex-row mb-20">
                            <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ตัวชี้วัดระดับวิสัยทัศน์<div className="fontColor">*</div>:</div>
                            <div>
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <th colSpan={3}>
                                                <div className="d-flex justify-content-center">ตัวชี้วัดระดับวิสัยทัศน์</div>
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="wid d-flex flex-row mb-20">
                            <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">วัตถุประสงค์เชิงยุทธศาสตร์<div className="fontColor">*</div>:</div>
                            <div className="filter-field-3">
                                <input type="text" className="form-control" placeholder="" id="filterOverall" />
                            </div>
                        </div>
                        <div className="wid d-flex flex-row mb-20">
                            <div className="wdth-200 mr-20 d-flex flex-row justify-content-right">ระดับโครงการหลักแผนวิสาหกิจ<div className="fontColor">*</div>:</div>
                            <div>
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <th colSpan={3}>
                                                <div className="d-flex justify-content-center">ระดับโครงการหลักแผนวิสาหกิจ</div>
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>   
                    </div>
                    
                    <div className="set d-flex flex-column mb-20">
                        <div className="wdth-200 mr-20 d-flex flex-row justify-content-left mb-10">ผลจำนวนการรับรู้สื่อ<div className="fontColor">*</div>:</div>
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                            <tbody>
                                                <tr>
                                                    <th colSpan={11}>
                                                        <div className="d-flex justify-content-center">ผลจำนวนการรับรู้สื่อ</div>
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th>
                                                        <div className="wd-100 d-flex justify-content-center align-items-center">หน่วยงาน</div>
                                                    </th>
                                                    <th>
                                                        <div className="wd-140 d-flex justify-content-center align-items-center">กลยุทธ์</div>
                                                    </th>
                                                    <th>
                                                        <div className="wd-140 d-flex justify-content-center align-items-center">แผนงาน</div>
                                                    </th>
                                                    <th>
                                                        <div className="wd-140 d-flex justify-content-center align-items-center">โครงการ</div>
                                                    </th>
                                                    <th>
                                                        <div className="wd-140 d-flex justify-content-center align-items-center">กิจกรรม</div>
                                                    </th>
                                                    <th>
                                                        <div className="wd-140 d-flex justify-content-center align-items-center">กิจกรรมย่อย</div>
                                                    </th>
                                                    <th>
                                                        <div className="wd-140 d-flex justify-content-center align-items-center">ช่วงเวลาดำเนินการ</div>
                                                    </th>
                                                    <th>
                                                        <div className="wd-140 d-flex justify-content-center align-items-center">ช่องทางย่อยระดับ 1</div>
                                                    </th>
                                                    <th>
                                                        <div className="wd-140 d-flex justify-content-center align-items-center">ช่องทางย่อยระดับ 2</div>
                                                    </th>
                                                    <th>
                                                        <div className="wd-140 d-flex justify-content-center align-items-center">ช่องทางย่อยระดับ 3</div>
                                                    </th>
                                                    <th>
                                                        <div className="wd-140 d-flex justify-content-center align-items-center">จำนวนการรับรู้</div>
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">A</div>    
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">กลยุทธ์ 1 ...</div>    
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">แผนงาน 1.1 ...</div>    
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">โครงการ 1</div>    
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">กิจกรรม 1 ...</div>    
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">กิจกรรมย่อย 1.1 ...</div>    
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">ไตรมาส 1</div>    
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">สื่อ Online</div>    
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">Facebook</div>    
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">เพจท่องเที่ยว</div>    
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">1,957,650</div>    
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">A</div>    
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">กลยุทธ์ 1 ...</div>    
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">แผนงาน 1.1 ...</div>    
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">โครงการ 1</div>    
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">กิจกรรม 1 ...</div>    
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">กิจกรรมย่อย 1.1 ...</div>    
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">ไตรมาส 2</div>    
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">สื่อ Online</div>    
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">Youtube</div>    
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">ช่อง Influencer</div>    
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">550,000</div>    
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">A</div>    
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">กลยุทธ์ 1 ...</div>    
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">แผนงาน 1.1 ...</div>    
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">โครงการ 1</div>    
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">กิจกรรม 1 ...</div>    
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">กิจกรรมย่อย 1.2 ...</div>    
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">ไตรมาส 3</div>    
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">สื่อ Offline</div>    
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">สื่อโทรทัศน์</div>    
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">รายการข่าว</div>    
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">2,000,000</div>    
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">A</div>    
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">กลยุทธ์ 1 ...</div>    
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">แผนงาน 1.1 ...</div>    
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">โครงการ 1</div>    
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">กิจกรรม 1 ...</div>    
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">กิจกรรมย่อย 1.2 ...</div>    
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">ไตรมาส 1</div>    
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">สื่อ Offline</div>    
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">สื่อสิ่งพิมพ์</div>    
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">หนังสือพิมพ์</div>    
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">200,000</div>    
                                                    </th>
                                                </tr>
                                            </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <div className="years d-flex flex-column mb-20">
                        <div className="wdth-200 mr-20 d-flex flex-row justify-content-left mb-10">ผลตัวชี้วัดระดับ Outcome โครงการ<div className="fontColor">*</div>:</div>
                        <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <th colSpan={11}>
                                                    <div className="d-flex justify-content-center">ผลตัวชี้วัดระดับ Outcome โครงการ</div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="wd-80 d-flex justify-content-center align-items-center">หน่วยงาน</div>
                                                </th>
                                                <th>
                                                    <div className="wd-80 d-flex justify-content-center align-items-center">พื้นที่ตลาด</div>
                                                </th>
                                                <th>
                                                    <div className="wd-140 d-flex justify-content-center align-items-center">กลยุทธ์</div>
                                                </th>
                                                <th>
                                                    <div className="wd-140 d-flex justify-content-center align-items-center">แผนงาน</div>
                                                </th>
                                                <th>
                                                    <div className="wd-140 d-flex justify-content-center align-items-center">โครงการ</div>
                                                </th>
                                                <th>
                                                    <div className="wd-140 d-flex justify-content-center align-items-center">ชื่อตัวชี้วัด</div>
                                                </th>
                                                <th>
                                                    <div className="wd-140 d-flex justify-content-center align-items-center">หน่วยวัด</div>
                                                </th>
                                                <th>
                                                    <div className="wd-140 d-flex justify-content-center align-items-center">แผนไตรมาส 1</div>
                                                </th>
                                                <th>
                                                    <div className="wd-140 d-flex justify-content-center align-items-center">ผลไตรมาส 1</div>
                                                </th>
                                                <th>
                                                    <div className="wd-140 d-flex justify-content-center align-items-center">แผนไตรมาส 2</div>
                                                </th>
                                                <th>
                                                    <div className="wd-140 d-flex justify-content-center align-items-center">ผลไตรมาส 2</div>
                                                </th>
                                                <th>
                                                    <div className="wd-140 d-flex justify-content-center align-items-center">แผนไตรมาส 3</div>
                                                </th>
                                                <th>
                                                    <div className="wd-140 d-flex justify-content-center align-items-center">ผลไตรมาส 3</div>
                                                </th>
                                                <th>
                                                    <div className="wd-140 d-flex justify-content-center align-items-center">แผนไตรมาส 4</div>
                                                </th>
                                                <th>
                                                    <div className="wd-140 d-flex justify-content-center align-items-center">ผลไตรมาส 4</div>
                                                </th>
                                                <th>
                                                    <div className="wd-180 d-flex justify-content-center align-items-center">แผนสะสมไตรมาส 1-2</div>
                                                </th>
                                                <th>
                                                    <div className="wd-180 d-flex justify-content-center align-items-center">ผลสะสมไตรมาส 1-2</div>
                                                </th>
                                                <th>
                                                    <div className="wd-300 d-flex justify-content-center align-items-center">ความสำเร็จ</div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">A</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">11</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">กลยุทธ์ 1 ...</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">แผนงาน 1.1 ...</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">โครงการ 1</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">ตัวชี้วัด 1 </div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">จำนวน</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">300</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">100</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">500</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">1,000</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">1,500</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">0</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">1,500</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">0</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">800</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">1,100</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">ดำเนินการยังไม่ครบถ้วนทุกตัวชี้วัด</div>    
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">A</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">11</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">กลยุทธ์ 1 ...</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">แผนงาน 1.1 ...</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">โครงการ 1</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">ตัวชี้วัด 2</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">จำนวน</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">10</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">2</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">20</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">10</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">20</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">0</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">0</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">0</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">30</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">12</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center"></div>    
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">A</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">11</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">กลยุทธ์ 1 ...</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">แผนงาน 1.1 ...</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">โครงการ 1</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">ตัวชี้วัด 3</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">ร้อยละ</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">0</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">85</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">80</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">90</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">0</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">0</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">80</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">0</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">80</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">89</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center"></div>    
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">B</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">22</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">กลยุทธ์ 1 ...</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">แผนงาน 1.1 ...</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">โครงการ 2</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">ตัวชี้วัด 3</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">ร้อยละ</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">80</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">-</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">80</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">92</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">80</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">0</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">80</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">0</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">80</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">92</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">ดำเนินการครบถ้วนทุกตัวชี้วัด</div>    
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">B</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">22</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">กลยุทธ์ 1 ...</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">แผนงาน 1.1 ...</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">โครงการ 2</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">ตัวชี้วัด 4</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">จำนวน</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">200,000</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">400,000</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">500,000</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">1,000,000</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">500,000</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">0</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">100.000</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">0</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">700,000</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">1,400,000</div>    
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center"></div>    
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