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
                    <div className='search-wrapper-section d-flex flex-column'>
                        <div className="d-flex flex-row justify-content-around">
                            <div className="content-search-box d-flex p-2 justify-content-center align-items-center">
                                <div className="boxs">
                                    <label>ปีงบประมาณ:</label>
                                </div>

                                <div className="boxs">
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
                                    <div className="boxs">
                                        <label>สถานะงาน:</label>
                                    </div>

                                    <div className="boxs">
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
                                    <div className="boxs">
                                        <label>หน่วยงาน:</label>
                                    </div>

                                    <div className="boxs">
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
                                        <th rowSpan={1}>
                                            <div className="content d-flex justify-content-center align-items-center">กลยุทธ์-แผนงาน-โครงการ-กิจกรรม</div>
                                        </th>
                                        <th rowSpan={1}>
                                            <div className="content d-flex justify-content-center align-items-center">รายละเอียดกิจกรรม</div>
                                        </th>
                                        <th rowSpan={1}>
                                            <div className="content d-flex justify-content-center align-items-center">เป้าหมาย/ตัวชี้วัด</div>
                                        </th>
                                        <th rowSpan={1}>
                                            <div className="content d-flex justify-content-center align-items-center">กลุ่มเป้าหมาย</div>
                                        </th>
                                        <th rowSpan={1}>
                                            <div className="content d-flex justify-content-center align-items-center">สินค้าเสนอขายโครงการ/กิจกรรม</div>
                                        </th>
                                        <th rowSpan={1}>
                                            <div className="content d-flex justify-content-center align-items-center">งบประมาณ(บาท)</div>
                                        </th>
                                        <th colSpan={1}>
                                            <div className="content d-flex justify-content-center align-items-center">พื้นที่ดำเนินการโครงการ/กิจกรรม</div>
                                        </th>
                                        <th rowSpan={1}>
                                            <div className="content d-flex justify-content-center align-items-center">กำหนดการ</div>
                                        </th>
                                        </tr>

                                        <tr>
                                        <td colSpan={2}>
                                            <div className="content d-column flex-row">
                                                <div className="content d-flex flex-column">
                                                    <div className="content-sub"><span>กลยุทธ์ภาพรวม: </span></div>
                                                    <div className="content-sub">กลยุทธ์ที่ 1 บริหารจัดการข้อมูลและต่อยอดธุรกิจทางการท่องเที่ยว</div>
                                                </div>
                                                <div className="content d-flex flex-column">
                                                    <div className="content-sub"><span>กลยุทธ์ภูมิภาค: </span></div>
                                                    <div className="content-sub"></div>
                                                </div>
                                                <div className="content d-flex flex-column">
                                                    <div className="content-sub">แผนงาน: </div>
                                                    <div className="content-sub">แผนงาน 1.1 พัฒนาข้อมูลด้านตลาดท่องเที่ยว</div>
                                                </div>
                                                <div className="content d-flex flex-column">
                                                    <div className="content-sub">โครงการหลัก: </div>
                                                    <div className="content-sub">บ7.1 พัฒนาคลังข้อมูล</div>
                                                </div> 
                                            </div> 
                                        </td>
                                        <td>
                                        </td>
                                        <td>
                                        </td>
                                        <td>
                                        </td>
                                        <td>
                                            <div className="content">4,000,000.00</div>
                                        </td>
                                        <td>
                                        </td>
                                        <td>
                                        </td>
                                        </tr>

                                        <tr>
                                        <td colSpan={2}>
                                            <div className="content d-flex flex-column ">
                                                <div className="content d-flex flex-row">
                                                    <div className="content-sub">โครงการ: </div>
                                                    <div className="content-sub">3. โครงการวิเคราะห์สถานการณ์ท่องเที่ยวตลาดต่างประเทศ (Flagship)/(ฺBig Project)</div>
                                                </div>
                                                <div className="content d-flex flex-column ">
                                                    <div className="content-sub">หลักการและเหตุผล: </div>
                                                    <div className="content-sub">ด้วยภารกิจของงานวิเคราะห์ตลาดต่างประเทศต้องติดตามสถานการณ์ท่องเที่ยวตลาดต่างประเทศ 
                                                    ทั้งสถานการณ์ปกติและการเกิดวิกฤตต่าง ๆ จำเป็นต้องมีข้อมูลในการติดตาม 
                                                    ทันต่อเหตุการณ์ เก็บรวบรวมข้อมูลและสังเกตสถานการณ์การท่องเที่ยว 
                                                    อาทิ แนวโน้มพฤติกรรมการเดินทาง การจองบัตรโดยสารเครื่องบินล่วงหน้า จำนวนนักท่องเที่ยวเดินทางออกนอกประเทศ 
                                                    การแข่งขันของประเทศคู่แข่ง ข่าวสาร บทวิเคราะห์ ความเคลื่อนไหวในอุตสาหกรรมท่องเที่ยว รวมทั้งปัจจัยอื่นที่มีผลต่อการเดินทางท่องเที่ยวประเทศไทยของชาวต่างชาติ 
                                                    จึงเห็นควรต้องมีข้อมูลและบทวิเคราะห์เพื่อใช้ในการประมวลผลคาดการณ์สถานการณ์นำเสนอของผู้บริหารและด้านตลาดต่างประเทศในการดำเนินกิจกรรมทางการตลาดได้ทันกาลตามบริบทที่เปลี่ยนแปลงไปอย่างรวดเร็ว</div>
                                                </div>
                                                <div className="content d-flex flex-column">
                                                    <div className="content-sub">วัตถุประสงค์: </div>
                                                    <div className="content-sub">1.เพื่อจัดทำและพัฒนาข้อมูลสำหรับติดตามและวิเคราะห์สถานการณ์ท่องเที่ยวตลาดต่างประเทศ ให้มีความทันสมัย และตรงกับความต้องการผู้ใช้งานภายใน ททท.</div>
                                                    <div className="content-sub">2.เพิ่มพูนทักษะด้านการวิเคราะห์เพื่อนำมาใช้ประกอบการวิเคราะห์สถานการณ์ท่องเที่ยวตลาดต่างประเทศ</div>
                                                </div>  
                                            </div> 
                                        </td>
                                        <td>
                                            <div className="content d-flex flex-column">
                                                <div className="content">
                                                    <div className="content-sub"><b>Outcome</b></div>
                                                </div>
                                                <div className="content">
                                                    <div className="content-sub">- ระดับความพึงพอใจของผู้ใช้ข้อมูลภายในจากททท. ไม่ต่ำกว่า 4.5 คะแนน</div>
                                                </div>
                                                <div className="content">
                                                    <div className="content-sub">แผนการดำเนินโครงการรายไตรมาส</div>
                                                </div>
                                                <div className="content d-flex flex-row">
                                                    <div className="content-sub">ไตรมาส 1</div>
                                                    <div className="content-sub">ร้อยละ 24.00</div>
                                                </div>
                                                <div className="content d-flex flex-row">
                                                    <div className="content-sub">ไตรมาส 2</div>
                                                    <div className="content-sub">ร้อยละ 26.00</div>
                                                </div>
                                                <div className="content d-flex flex-row">
                                                    <div className="content-sub">ไตรมาส 3</div>
                                                    <div className="content-sub">ร้อยละ 26.00</div>
                                                </div>
                                                <div className="content d-flex flex-row">
                                                    <div className="content-sub">ไตรมาส 4</div>
                                                    <div className="content-sub">ร้อยละ 24.00</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="content d-flex flex-column">
                                                <div className="content">- ผู้บริหาร ททท.</div>
                                                <div className="content">- พนักงาน ททท. ส่วนกลาง</div>
                                                <div className="content">- พนักงาน ททท. สำนักงานสาขาต่างประเทศ</div> 
                                            </div>
                                        </td>
                                        <td>
                                            <div className="content d-flex justify-content-center align-items-center">
                                                <div className="content-sub">-</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="content">2,500,000</div>
                                        </td>
                                        <td>
                                        <div className="content d-flex flex-column justify-content-center align-items-center">
                                                <div className="content-sub">- ภูมิภาคต่างประเทศ -</div>
                                                <div className="content-sub">- ททท. ส่วนกลาง -</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="content justify-content-center align-items-center">01 ต.ค. 2564 - 30 ก.ย. 2565</div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>
                                            <div className="content d-flex justify-content-center align-items-center">กิจกรรม</div>
                                        </th>
                                        <th>
                                            <div className="content d-flex justify-content-center align-items-center">รายละเอียดกิจกรรม</div>
                                        </th>
                                        <th>
                                            <div className="content d-flex justify-content-center align-items-center">Output</div>
                                        </th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <div className="content d-flex flex-column">
                                                <div className="content">สนับสนุนตลาด</div>
                                                <div className="content">1. จัดหาข้อมูลที่สำคัญและทันสมัยประกอบการวิเคราะห์สถานการณ์ตลาดต่างประเทศ</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="content d-flex flex-column justify-content-center align-items-center">
                                                <div className="content">
                                                    - จัดหาข้อมูลที่สำคัญทางการตลาดออนไลน์ อาทิ บทความหรืองานวิจัยทางการตลาดจากหน่วยงานระดับโลก บริษัทวิจัยหรือ agency ในไทยและต่างประเทศที่ได้รับการยอมรับในระดับสากล
                                                </div>
                                                <div className="content">
                                                    - หารือแลกเปลี่ยนข้อมูลกับหน่วยงานภายนอกเพื่อรวบรวมข้อมูลประกอบการจัดทำรายงานในรูปแบบต่างๆ อาทิ รายงานสถานการณ์ท่องเที่ยว บทวิเคราะห์เฉพาะเรื่อง รวมถึงการทำข้อมูลตามที่ได้รับการร้องขอ (Data on Demand)
                                                </div>
                                            </div> 
                                        </td>
                                        <td>
                                            <div className="content d-flex flex-column justify-content-center align-items-center">
                                                <div className="content d-flex flex-row justify-content-center align-items-center">
                                                    <div className="content">- รายงานสถานการณ์ท่องเที่ยวอย่างน้อย 3 ชิ้น - สรุปข้อมูลการให้บริการในรูปแบบ Data on demand/บทวิเคราะห์เฉพาะเรื่อง อย่างน้อย 3 ชิ้น</div>
                                                </div>
                                                <div className="content d-flex flex-row justify-content-center align-items-center">
                                                    <div className="content">สัดส่วนกิจกรรมต่อโครงการ 30.00 %</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="content d-flex flex-column">
                                                <div className="content">- ผู้บริหาร ททท.</div>
                                                <div className="content">- พนักงาน ททท. ส่วนกลาง</div>
                                                <div className="content">- พนักงาน ททท. สำนักงานสาขาต่างประเทศ</div> 
                                            </div>
                                        </td>
                                        <td></td>
                                        <td>
                                            <div className="content">1,000,000</div>
                                        </td>
                                        <td>
                                        <div className="content d-flex flex-column justify-content-center align-items-center">
                                                <div className="content-sub">- ภูมิภาคต่างประเทศ -</div>
                                                <div className="content-sub">- ททท. ส่วนกลาง -</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="content justify-content-center align-items-center">01 ต.ค. 2565 - 30 ก.ย. 2566</div>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td>
                                            <div className="content d-flex flex-column">
                                                <div className="content">สนับสนุนตลาด</div>
                                                <div className="content">2. เข้าร่วมประชุม/สัมมนา/อบรมสำหรับสนับสนุนการทำงานวิเคราะห์สถานการณ์ท่องเที่ยวต่างประเทศ</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="content d-flex flex-column justify-content-center align-items-center">
                                                <div className="content">
                                                - เข้าร่วมหรือจัดการอบรมเพื่อพัฒนาทักษะสำหรับนำมาพัฒนาการทำงานของงานวิเคราะห์ตลาดต่างประเทศ(Online/Onsite) 
                                                </div>
                                                <div className="content">
                                                - เข้าร่วมประชุม/Workshop/สัมมนาเชิงวิชาการด้านการท่องเที่ยวกับหน่วยงานที่สำคัญของอุตสาหกรรมท่องเที่ยวโลกและบริษัทวิจัยระดับโลก อาทิ UNWTO, WTCC, Euromonitor และ  ททท. สำนักต่างประเทศ
                                                </div>
                                            </div> 
                                        </td>
                                        <td>
                                            <div className="content d-flex flex-column justify-content-center align-items-center">
                                                <div className="content d-flex flex-row justify-content-center align-items-center">
                                                    <div className="content">
                                                        - จำนวนเข้าร่วมอบรมอย่างน้อย 1 ครั้ง - ร้อยละ 100 ของพนักงานที่เข้ารับการอบรมผ่านการอบรม - รายงานสรุปข้อมูลจากการเข้าร่วมประชุมเชิงวิชาการด้านการท่องเที่ยวอย่างน้อย 1 ชิ้น
                                                    </div>
                                                </div>
                                                <div className="content d-flex flex-row justify-content-center align-items-center">
                                                    <div className="content">สัดส่วนกิจกรรมต่อโครงการ 15.00 %</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="content d-flex flex-column">
                                                <div className="content">- ผู้บริหาร ททท.</div>
                                                <div className="content">- พนักงาน ททท. ส่วนกลาง</div>
                                            </div>
                                        </td>
                                        <td></td>
                                        <td>
                                            <div className="content">200,000</div>
                                        </td>
                                        <td>
                                        <div className="content d-flex flex-column justify-content-center align-items-center">
                                                <div className="content-sub">- ภูมิภาคต่างประเทศ -</div>
                                                <div className="content-sub">- ททท. ส่วนกลาง -</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="content justify-content-center align-items-center">01 ต.ค. 2565 - 30 มิ.ย. 2565</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="content d-flex flex-column">
                                                <div className="content">สนับสนุนตลาด</div>
                                                <div className="content">3. เก็บข้อมูลและสังเกตสถานการณ์การเดินทางของนักท่องเที่ยวต่างชาติ</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="content d-flex flex-column justify-content-center align-items-center">
                                                <div className="content">
                                                - เก็บข้อมูลและสังเกตสถานการณ์การเดินทางของนักท่องเที่ยวต่างชาติตามแหล่งท่องเที่ยวสำคัญ
                                                </div>
                                                <div className="content">
                                                - เข้าร่วมสัมมนาหรือประชุมเพื่อเก็บข้อมูลลูกค้านักท่องเที่ยวต่างชาติ</div>
                                            </div> 
                                        </td>
                                        <td>
                                            <div className="content d-flex flex-column justify-content-center align-items-center">
                                                <div className="content d-flex flex-row justify-content-center align-items-center">
                                                    <div className="content">
                                                        - ข้อมูลรายงานวิเคราะห์สถานการณ์ท่องเที่ยวตลาดต่างประเทศอย่างน้อย 2 รายงาน
                                                    </div>
                                                </div>
                                                <div className="content d-flex flex-row justify-content-center align-items-center">
                                                    <div className="content">
                                                        - จำนวนเข้าร่วมสัมมนาหรือประชุมอย่างน้อย 2 ครั้ง
                                                    </div>
                                                </div>
                                                <div className="content d-flex flex-row justify-content-center align-items-center">
                                                    <div className="content">สัดส่วนกิจกรรมต่อโครงการ 15.00 %</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="content d-flex flex-column">
                                                <div className="content">- ผู้บริหาร ททท.</div>
                                                <div className="content">- พนักงาน ททท. ส่วนกลาง</div>
                                                <div className="content">- พนักงาน ททท. สำนักงานสาขาต่างประเทศ</div> 
                                            </div>
                                        </td>
                                        <td></td>
                                        <td>
                                            <div className="content">200,000</div>
                                        </td>
                                        <td>
                                        <div className="content d-flex flex-column justify-content-center align-items-center">
                                                <div className="content-sub">- ภูมิภาคต่างประเทศ -</div>
                                                <div className="content-sub">- ททท. ส่วนกลาง -</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="content justify-content-center align-items-center">01 ต.ค. 2565 - 30 ก.ย. 2565</div>
                                        </td>
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