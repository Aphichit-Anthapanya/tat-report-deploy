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
                <div className="breadcrumb-zone">รายงานจัดซื้อจัดจ้าง {'>'} <span className="bread-crumb-page-name">รายงานแผนปฏิบัติการจัดซื้อจัดจ้าง ประจำปีงบประมาณ 25XX </span> {'>'} <span className="bread-crumb-page-name">งบรายได้</span></div>
                    <div className='form-wrapper-section d-flex flex-column'>
                        <div className="d-flex justify-content-between justify-content-center align-items-center">
                            <div className="content-search-box d-flex p-2 justify-content-center align-items-center">
                                <div className="box">
                                    <label>ปีงบประมาณ:</label>
                                </div>
                                <div className="box">
                                    <div className="filter-field">
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
                                    <div className="box">
                                        <label>หน่วยงาน:</label>
                                    </div>
                                    <div className="box">
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
                    <div className='form-wrapper-section d-flex flex-column'>
                        <div className="d-flex justify-content-between justify-content-center align-items-center">
                            <div className="years d-flex flex-column p-2 justify-content-center">
                                <div className="box">
                                    <b>รายงานแผนปฏิบัติการจัดซื้อจัดจ้าง (งบรายได้) ประจำปีงบประมาณ 2565</b>
                                </div>
                                <div className="box d-flex">
                                    <div className="content"><b>หน่วยงาน:</b></div>
                                    <div className="content"><p>เลือกทั้งหมด</p></div>
                                </div>
                                <div>
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr>
                                        <th rowSpan={2}>
                                            <div className="content d-flex flex-column justify-content-center align-items-center">
                                                <div className="content-sub">(1)</div>
                                                <div className="content-sub">ลำดับ</div>
                                            </div>
                                        </th>
                                        <th rowSpan={2}>
                                            <div className="content d-flex flex-column justify-content-center align-items-center">
                                                <div className="content-sub">(2)</div>
                                                <div className="content-sub">ชื่อ</div>
                                                <div className="content-sub">กิจกรรม</div>
                                                <div className="content-sub">/งาน</div>
                                            </div>
                                        </th>
                                        <th rowSpan={2}>
                                            <div className="content d-flex flex-column justify-content-center align-items-center">
                                                <div className="content-sub">(3)</div>
                                                <div className="content-sub">รายการจัดซื้อ/จัดจ้าง</div>
                                            </div>
                                        </th>
                                        <th rowSpan={2}>
                                            <div className="content d-flex flex-column justify-content-center align-items-center">
                                                <div className="content-sub">(4)</div>
                                                <div className="content-sub">หน่วยงาน</div>
                                                <div className="content-sub">ที่รับ</div>
                                                <div className="content-sub">ผิดชอบ</div>
                                
                                            </div>
                                        </th>
                                        <th rowSpan={2}>
                                            <div className="content d-flex flex-column justify-content-center align-items-center">
                                                <div className="content-sub">(5)</div>
                                                <div className="content-sub">วงเงิน</div>
                                                <div className="content-sub">งบประมาณ</div>
                                                <div className="content-sub">ปี 2565</div>
                                                <div className="content-sub">(บาท)</div>
                                            </div>
                                        </th>
                                        <th colSpan={13}>
                                            <div className="content d-flex flex-column align-items-center">
                                                <div className="content-sub">(6)</div>
                                                <div className="content-sub">แผนปฏิบัติการ</div>
                                            </div>
                                        </th>
                                        <th rowSpan={2}>
                                            <div className="content d-flex flex-column align-items-center">
                                                <div className="content-sub">หมาย</div>
                                                <div className="content-sub">เหตุ</div>
                                            </div>
                                        </th>
                                        </tr><tr>
                                        <th>
                                            <div className="content d-flex flex-column justify-content-center align-items-center">
                                                <div className="content-sub">ขั้นตอน</div>
                                            </div> 
                                        </th>
                                        <th>
                                            <div className="content d-flex flex-column justify-content-center align-items-center">
                                                <div className="content-sub">ก.ย</div>
                                                <div className="content-sub">2554</div>
                                            </div> 
                                        </th>
                                        <th>
                                            <div className="content d-flex flex-column justify-content-center align-items-center">
                                                <div className="content-sub">ต.ค</div>
                                                <div className="content-sub">2554</div>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="content d-flex flex-column justify-content-center align-items-center">
                                                <div className="content-sub">พ.ย</div>
                                                <div className="content-sub">2554</div>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="content d-flex flex-column justify-content-center align-items-center">
                                                <div className="content-sub">ธ.ค</div>
                                                <div className="content-sub">2554</div>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="content d-flex flex-column justify-content-center align-items-center">
                                                <div className="content-sub">ม.ค</div>
                                                <div className="content-sub">2554</div>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="content d-flex flex-column justify-content-center align-items-center">
                                                <div className="content-sub">ก.พ</div>
                                                <div className="content-sub">2554</div>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="content d-flex flex-column justify-content-center align-items-center">
                                                <div className="content-sub">ม.ค.</div>
                                                <div className="content-sub">2554</div>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="content d-flex flex-column justify-content-center align-items-center">
                                                <div className="content-sub">เม.ย.</div>
                                                <div className="content-sub">2554</div>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="content d-flex flex-column justify-content-center align-items-center">
                                                <div className="content-sub">พ.ค.</div>
                                                <div className="content-sub">2554</div>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="content d-flex flex-column justify-content-center align-items-center">
                                                <div className="content-sub">มิ.ย.</div>
                                                <div className="content-sub">2554</div>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="content d-flex flex-column justify-content-center align-items-center">
                                                <div className="content-sub">ก.ค.</div>
                                                <div className="content-sub">2554</div>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="content d-flex flex-column justify-content-center align-items-center">
                                                <div className="content-sub">ส.ค.</div>
                                                <div className="content-sub">2554</div>
                                            </div>
                                        </th>
                                        </tr>


                                        <tr>
                                        <td rowSpan={6}>
                                            <div className="content d-flex flex-column justify-content-center align-items-center">
                                                <div className="content-sub">1</div>
                                            </div>
                                        </td>
                                        <td rowSpan={6}></td>
                                        <td rowSpan={6}>จ้างเหมาบริการให้ความเห็นเกี่ยวกับการปฏิบัติงานด้านการบริหารและกฎหมาย</td>
                                        <td rowSpan={6}>
                                            <div className="content-sub">งานปรึกษาด้านกฎหมาย กกร.</div>
                                        </td>
                                        <td rowSpan={6}>600,000.00</td>
                                            <div>1. จัดทำร่างขอบเขตของงาน (01/09/2564 - 30/09/2564)</div>
                                            <td className="bg-info"></td>
                                            <td className="bg-info"></td>
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
                                            <td rowSpan={6}></td>
                                        </tr>
                                        <tr>
                                            <div>2. จัดทำรายงานขอซื้อ/ขอจ้าง (15/09/2564 - 30/09/2564)</div>
                                            <th></th>
                                            <th></th>
                                            <td className="bg-info"></td>
                                            <td className="bg-info"></td>
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
                                            <div>3. อนุมัติจัดซื้อจัดจ้าง (01/10/2564 - 31/12/2564)</div>                                           
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <td className="bg-info"></td>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                        <tr>
                                            <div>4. ทำสัญญา/ข้อตกลงเป็นหนังสือ (01/01/2565 - 31/01/2565)</div>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <td className="bg-info"></td>
                                            <td className="bg-info"></td>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                        <tr>
                                            <div>5. ดำเนินงานตามเงื่อนไขของสัญญา/ส่งมอบงานงวดต่างๆ (01/02/2565 - 31/08/2565)</div>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <td className="bg-info"></td>
                                            <td className="bg-info"></td>
                                            <td className="bg-info"></td>
                                            <td className="bg-info"></td>
                                            <td className="bg-info"></td>
                                            <td className="bg-info"></td>
                                            <th></th>
                                        </tr>
                                        <tr>
                                            <div className="content-sub">6. วันที่สิ้นสุดสัญญา/วันที่แล้วเสร็จ (30/09/2566 - 30/09/2566)</div>
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
                                            <td className="bg-info"></td>
                                        </tr>
                                        <tr>
                                        <td rowSpan={6}>
                                            <div className="content d-flex flex-column justify-content-center align-items-center">
                                                <div className="content-sub">2</div>
                                            </div>
                                        </td>
                                        <td rowSpan={6}></td>
                                        <td rowSpan={6}>
                                            <div>ค่าซื้อผงหมึกเครื่องพิมพ์ ยี่ห้อ OKI สำรองคลังพัสดุ</div>
                                        </td>
                                        <td rowSpan={6}>
                                            <div>งานบริหารพัสดุ กบจ.</div>
                                        </td>
                                        <td rowSpan={6}>600,000.00</td>
                                            <div >1. จัดทำร่างขอบเขตของงาน (01/09/2564 - 30/09/2564)</div>
                                            <td className="bg-info"></td>
                                            <td className="bg-info"></td>
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
                                            <td rowSpan={6}></td>
                                        </tr>
                                        <tr>
                                            <div>2. จัดทำรายงานขอซื้อ/ขอจ้าง (15/09/2564 - 30/09/2564)</div>
                                            <th></th>
                                            <th></th>
                                            <td className="bg-info"></td>
                                            <td className="bg-info"></td>
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
                                            <div>3. อนุมัติจัดซื้อจัดจ้าง (01/10/2564 - 31/12/2564)</div>                                           
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <td className="bg-info"></td>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                        <tr>
                                            <div>4. ทำสัญญา/ข้อตกลงเป็นหนังสือ (01/01/2565 - 31/01/2565)</div>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <td className="bg-info"></td>
                                            <td className="bg-info"></td>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                        <tr>
                                            <div>5. ดำเนินงานตามเงื่อนไขของสัญญา/ส่งมอบงานงวดต่างๆ (01/02/2565 - 31/08/2565)</div>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <td className="bg-info"></td>
                                            <td className="bg-info"></td>
                                            <td className="bg-info"></td>
                                            <td className="bg-info"></td>
                                            <td className="bg-info"></td>
                                            <td className="bg-info"></td>
                                            <th></th>
                                        </tr>
                                        <tr>
                                            <div className="content-sub">6. วันที่สิ้นสุดสัญญา/วันที่แล้วเสร็จ (30/09/2566 - 30/09/2566)</div>
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
                                            <td className="bg-info"></td>
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