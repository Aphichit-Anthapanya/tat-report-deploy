"use client";

import React from "react";
import { useState } from "react";
import "@components/Report-temp/report-temp.scss";
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
                <div className="breadcrumb-zone">รายงานจัดซื้อจัดจ้าง {'>'} <span className="bread-crumb-page-name"><b>รายงานสรุปวิธีการจัดซื้อจัดจ้าง หรือการจัดหาพัสดุ ประจำปีงบประมาณ 25XX ไตรมาสที่ X</b></span></div>
                    <div className='search-wrapper-section d-flex flex-column'>
                        <div className="d-flex justify-content-between justify-content-center align-items-center">
                            <div className="content-search-box d-flex p-2 justify-content-center align-items-center">
                                <div className="box">
                                    <label>ปีงบประมาณ:</label>
                                </div>
                                <div className="box">
                                    <div className="filter-field-search">
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>  -- เลือก --  </option>
                                            <option value="1">2566</option>
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
                                    <div className="box">
                                        <label>สถานะงาน:</label>
                                    </div>
                                    <div className="box">
                                    <div className="filter-field-search">
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
                                    <div className="box">
                                        <label>หน่วยงาน:</label>
                                    </div>
                                    <div className="box">
                                        <div className="filter-field-search">
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
                        <div className="d-flex justify-content-between justify-content-center align-items-center">
                            <div className="years d-flex flex-column p-2 justify-content-center">
                                <div className="box mb-20">
                                    <b>รายงานสรุปวิธีการจัดซื้อจัดจ้าง หรือการจัดหาพัสดุ ประจำปีงบประมาณ 25XX ไตรมาสที่ 1</b>
                                </div>
                                <div className="table-responsive mb-20">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr className="table-primary">
                                                <th>
                                                    <div className="wd-300 d-flex flex-column justify-content-center align-items-center">
                                                        <div>วิธีการจัดหา</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-160 d-flex flex-column justify-content-center align-items-center">
                                                        <div>จำนวนรายการ</div>
                                                    </div>
                                                </th>              
                                                <th>
                                                    <div className="wd-400 d-flex flex-column justify-content-center align-items-center">
                                                        <div>วงเงินงบประมาณ</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-160 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ร้อยละ</div>
                                                    </div>
                                                </th>
                                            
                                                <th>
                                                    <div className="wd-160 d-flex flex-column justify-content-center align-items-center">
                                                        <div>วงเงินทำสัญญา</div>
                                                    </div>
                                                </th>

                                                <th>
                                                    <div className="wd-160 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ร้อยละ</div>
                                                    </div>
                                                </th>
                                                
                                                <th>
                                                    <div className="wd-160 d-flex flex-column justify-content-center align-items-center">
                                                        <div>รายการที่ยังไม่ได้</div>
                                                        <div>ดำเนินการจัดซื้อจัดจ้าง</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-160 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ร้อยละ</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-200 d-flex flex-column justify-content-center align-items-center">
                                                        <div>คงเหลือจากจัดซื้อจัดจ้าง</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-160 d-flex flex-column justify-content-center align-items-center">
                                                        <div>ร้อยละ</div>
                                                    </div>
                                                </th>
                                                </tr>

                                                <tr>      
                                                    <th>
                                                        <div className="normalText d-flex flex-column justify-content-left">
                                                            <div className="d-flex justify-content-left">1. วิธีประกาศเชิญชวนทั่วไป</div>
                                                            <div className="d-flex justify-content-left">(e-Market, e-Bidding, สอบราคา)</div>
                                                        </div> 
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>-</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>-</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>-</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>-</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>-</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>-</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>-</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>-</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>-</div>
                                                        </div>
                                                    </th>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left">
                                                            <div>2. วิธีคัดเลือก</div>
                                                        </div> 
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>20</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>  105,069,977.28 </div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>  14.75 </div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>  102,436,135.60 	</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>  14.38 </div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>-</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>-</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>  2,633,841.68 		</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>  0.37 </div>
                                                        </div>
                                                    </th>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left">
                                                            <div>3. วิธีเฉพาะเจาะจง</div>
                                                        </div> 
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>  178 </div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            469,301,007.85 
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>  65.88 </div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>  453,900,066.37 	</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>  63.72 </div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>-</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>-</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>  15,400,941.48 		</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>  2.16 </div>
                                                        </div>
                                                    </th>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left">
                                                            <div>4. อยู่ระหว่างดำเนินการจัดซื้อจัดจ้างตามแผน</div>
                                                        </div> 
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>  55 </div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>  137,937,900.00 </div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>  19.36 </div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>-</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>-</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>  248,033,800.00 </div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>  34.82 </div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>- 110,095,900.00 		</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>- 15.46 </div>
                                                        </div>
                                                    </th>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left">
                                                            <div>5. ยกเลิก</div>
                                                        </div> 
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>-</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>-</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>-</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>-</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>-</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>-</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>-</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>-</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>-</div>
                                                        </div>
                                                    </th>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        <div className="d-flex justify-content-center">
                                                            <div>รวมทั้งสิ้น</div>
                                                        </div> 
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>  253 </div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>  712,308,885.13 </div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>  100.00 </div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>  556,336,201.97 	</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>  78.10 </div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>  248,033,800.00 </div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>  34.82 </div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>- 92,061,116.84</div>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right">
                                                            <div>- 12.92 </div>
                                                        </div>
                                                    </th>
                                                </tr>
                                        </tbody>
                                    </table>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}