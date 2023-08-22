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
                <div className="breadcrumb-zone">รายงานแผนปฏิบัติการและการดำเนินงาน {'>'} <span className="bread-crumb-page-name"><b>รายงานสรุปหัวข้อที่ผิดพลาด</b></span></div>
                    <div className='search-wrapper-section d-flex flex-column'>
                        <div className="d-flex flex-row justify-content-around">
                            <div className="content-search-box d-flex p-2 justify-content-center align-items-center">
                                <div className="boxs">
                                    <b>ประเภท:</b>
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
                                        <b>หน่วยงาน:</b>
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
                                        <b>หน่วยงาน:</b>
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
                    
                    <div className='search-wrapper-section d-flex flex-column'>
                        <div className="d-flex justify-content-between justify-content-center align-items-center overflow-auto">
                            <div className="years d-flex flex-column p-2 justify-content-center ">
                                <div className="box mb-20">
                                    <b>รายงานสรุปหัวข้อที่ผิดพลาด</b>
                                </div>

                                <div className="boxes d-flex justify-content-center align-items-center">
                                <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <tbody>
                                                <tr className="table-primary">
                                                    <th>
                                                        <div className="numbers d-flex justify-content-center align-items-center">ลำดับ</div>
                                                    </th>
                                                    <th>
                                                        <div className="year-quarter d-flex justify-content-center align-items-center">ปีงบประมาณ</div>
                                                    </th>  
                                                    <th>
                                                        <div className="project-area d-flex justify-content-center align-items-center">ประเด็นข้อผิดพลาด</div>
                                                    </th>            
                                                    <th>
                                                        <div className="responsible-person d-flex justify-content-center align-items-center">หน่วยงาน</div>
                                                    </th>
                                                    <th>
                                                        <div className="wd-200 d-flex justify-content-center align-items-center">ชื่อแผน</div>
                                                    </th>
                                                    <th>
                                                        <div className="wd-160 d-flex justify-content-center align-items-center">จำนวนครั้งที่ผิดพลาด</div>
                                                    </th>
                                                    <th>
                                                        <div className="wd-400 d-flex justify-content-center align-items-center">ข้อเสนอแนะ</div>
                                                    </th>
                                                </tr>

                                                <tr className="table-info">
                                                    <th></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">2567</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-left align-items-center">งบประมาณ(รวม)</div>   
                                                    </th>
                                                    <th></th>
                                                    <th></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">8</div>   
                                                    </th>
                                                    <th></th>
                                                </tr>

                                                <tr>
                                                    <th rowSpan={4}>
                                                        <div className="normalText d-flex justify-content-center align-items-center">1</div>
                                                    </th>
                                                    <th rowSpan={8}>
                                                        <div className="normalText d-flex justify-content-center align-items-center">2567</div>
                                                    </th>
                                                    <th rowSpan={8}>
                                                        <div className="normalText d-flex justify-content-left align-items-center">งบประมาณ</div>   
                                                    </th>
                                                    <th rowSpan={4}>
                                                        <div className="normalText d-flex justify-content-left align-items-center">งานเลขานุการ</div>   
                                                    </th>
                                                    <th rowSpan={4}>
                                                        <div className="normalText d-flex justify-content-left align-items-center">แผนบริหารจัดการองค์กร</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">4</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex flex-column justify-content-left">
                                                            <div>
                                                            แก้งบประมาณ ด้วยค่ะ!!!!
                                                            </div>
                                                        </div>
                                                    </th>
                                                </tr>
                                                
                                                <tr>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">3</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex flex-column justify-content-left">แก้งบประมาณ ด้วยค่ะ</div>
                                                    </th>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">2</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex flex-column justify-content-left">แก้งบประมาณ</div>
                                                    </th>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">1</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex flex-column justify-content-left">
                                                            <div>- กระจายงบประมาณรายเดือนลงถึงหลักสิบ  บางหน่วยงานมีจุดทศนิยม (เกิดจาการหารเท่า) </div>
                                                            <div>- ไม่กระจายเงินตามความจำเป็นในการใช้เงินแต่ละเดือน</div>
                                                            <div>- เขียนโครงการเกินวงเงินที่ได้รับจัดสรร</div>
                                                        </div>
                                                    </th>
                                                </tr>

                                                <tr>
                                                    <th rowSpan={4}>
                                                        <div className="normalText d-flex justify-content-center align-items-center">2</div>
                                                    </th>
                                                    <th rowSpan={4}>
                                                        <div className="normalText d-flex justify-content-left align-items-center">งานสื่อสารภายใน</div>
                                                    </th>
                                                    <th rowSpan={4}>
                                                        <div className="normalText d-flex justify-content-center align-items-center">แผนสนับสนุนตลาดต่างประเทศ</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">4</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex flex-column justify-content-left">ไม่มีงบประมาณรองรับสำหรับการทำการตลาดกับกลุ่ม Expat ซึ่งเป็นนโยบายของผู้บริหาร</div>
                                                    </th>
                                                </tr>

                                                <tr></tr>
                                                <tr></tr>
                                                <tr></tr>

                                                <tr className="table-info">
                                                    <th></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">2567</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-left align-items-center">วัตถุประสงค์(รวม)</div>   
                                                    </th>
                                                    <th></th>
                                                    <th></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">4</div>   
                                                    </th>
                                                    <th></th>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">3</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">2567</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">วัตถุประสงค์</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">งานเลขานุการ</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">แผนบริหารจัดการองค์กร</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">4</div>
                                                    </th>
                                                    
                                                    <th>
                                                        <div className="normalText d-flex flex-column justify-content-left">
                                                            <div>- ตั้งวัตถุประสงค์กว้างเกินไป  เกินกว่ากิจกรรมที่ตั้งใจจะทำ</div>
                                                        </div>
                                                    </th>
                                                </tr>

                                                <tr className="table-info">
                                                    <th></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">2567</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-left align-items-center">กลุ่มเป้าหมาย(รวม)</div>   
                                                    </th>
                                                    <th></th>
                                                    <th></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">8</div>   
                                                    </th>
                                                    <th></th>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">4</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">2567</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">กลุ่มเป้าหมาย</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">งานเลขานุการ</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">แผนบริหารจัดการองค์กร</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">8</div>
                                                    </th>
                                                    
                                                    <th>
                                                        <div className="normalText d-flex flex-column justify-content-left">
                                                            <div>- กำหนดกลุ่มเป้าหมายไม่สอดคล้องกับกิจกรรม เช่น กิจกรรมจัดที่ ททท. ส่วนกลาง แต่ระบุกลุ่มเป้าหมายคือ พนักงาน ททท. สำนักงานสาขาต่างประเทศ</div>
                                                        </div>
                                                    </th>
                                                </tr> 

                                                <tr className="table-info">
                                                    <th></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">2567</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-left align-items-center">งบประมาณโครงการ(รวม)</div>   
                                                    </th>
                                                    <th></th>
                                                    <th></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">8</div>   
                                                    </th>
                                                    <th></th>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">5</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">2567</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">งบประมาณโครงการ</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">งานเลขานุการ</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">แผนสนับสนุนตลาดต่างประเทศ</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">8</div>
                                                    </th>
                                                    
                                                    <th>
                                                        <div className="normalText d-flex flex-column justify-content-left">
                                                            <div>- ห้ามทำให้เงินงบประมาณเป็นเศษสตางค์</div>
                                                        </div>
                                                    </th>
                                                </tr>

                                                <tr className="table-info">
                                                    <th></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">2567</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-left align-items-center">ระยะเวลาดำเนินการ(รวม)</div>   
                                                    </th>
                                                    <th></th>
                                                    <th></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">6</div>   
                                                    </th>
                                                    <th></th>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">6</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">2567</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">ระยะเวลาดำเนินการ</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">งานเลขานุการ</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">แผนสนับสนุนตลาดในประเทศ</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">6</div>
                                                    </th>
                                                    
                                                    <th>
                                                        <div className="normalText d-flex flex-column justify-content-left">
                                                            <div>- ควรระบุในกรอบปีงบประมาณ</div>
                                                        </div>
                                                    </th>
                                                </tr>

                                                <tr className="table-info">
                                                    <th></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">2567</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-left align-items-center">พื้นที่ดำเนินโครงการ(รวม)</div>   
                                                    </th>
                                                    <th></th>
                                                    <th></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">6</div>   
                                                    </th>
                                                    <th></th>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">7</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">2567</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">พื้นที่ดำเนินโครงการ</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">งานเลขานุการ</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">แผนสนับสนุนตลาดในประเทศ</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">6</div>
                                                    </th>
                                                   
                                                    <th>
                                                        <div className="normalText d-flex flex-column justify-content-left">
                                                            <div>- ไม่ควรระบุกว้าง เช่น ทั่วประเทศ  อย่างน้อยควรระบุเป็นภูมิภาค</div>
                                                        </div>
                                                    </th>
                                                </tr>
                                                
                                                <tr className="table-info">
                                                    <th></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">2567</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-left align-items-center">ปฏิทินการดำเนินงาน(รวม)</div>   
                                                    </th>
                                                    <th></th>
                                                    <th></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">6</div>   
                                                    </th>
                                                    <th></th>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">8</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">2567</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">ปฏิทินการดำเนินงาน</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">งานเลขานุการ</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">แผนสนับสนุนตลาดต่างประเทศ</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">6</div>
                                                    </th>
                                                    
                                                    <th>
                                                        <div className="normalText d-flex flex-column justify-content-left">
                                                            <div>- กระจายค่าน้ำหนักไม่ตรงกับระยะเวลาในการดำเนินกิจกรรม</div>
                                                        </div>
                                                    </th>
                                                </tr>

                                                <tr className="table-info">
                                                    <th></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">2567</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-left align-items-center">หลักการและเหตุผล(รวม)</div>   
                                                    </th>
                                                    <th></th>
                                                    <th></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">5</div>   
                                                    </th>
                                                    <th></th>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">9</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">2567</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">หลักการและเหตุผล</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">งานเลขานุการ</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">แผนสนับสนุนตลาดในประเทศ</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">5</div>
                                                    </th>
                                                    
                                                    <th>
                                                        <div className="normalText d-flex flex-column justify-content-left">
                                                            <div>- ไม่เข้าใจวิธีการเขียนหลักการและเหตุผลของโครงการ (เอาวัตถุประสงค์ของโครงการมาเขียน)/ ส่วนใหญ่จะเลือกตัวชี้วัดที่ไม่ท้าท้ายหรือไม่เหมาะสมกับเนื้องาน</div>
                                                        </div>
                                                    </th>
                                                </tr>

                                                <tr className="table-info">
                                                    <th></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">2567</div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-left align-items-center">สินค้าและบริการ(กิจกรรม)(รวม)</div>   
                                                    </th>
                                                    <th></th>
                                                    <th></th>
                                                    <th>
                                                        <div className="d-flex justify-content-center align-items-center">4</div>   
                                                    </th>
                                                    <th></th>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">10</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">2567</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">สินค้าและบริการ(กิจกรรม)</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">งานเลขานุการ</div>   
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-left align-items-center">แผนสนับสนุนตลาดต่างประเทศ</div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-center align-items-center">4</div>
                                                    </th>
                                                    
                                                    <th>
                                                        <div className="normalText d-flex flex-column justify-content-left">
                                                            <div>- ควรระบุุพื้นที่ทั้งหมดให้สอดคล้องกับโครงการ</div>
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
                    <div className="normalText d-flex flex-column justify-content-left">
                        <div>- วันที่ออกรายงาน:19 ก.ค. 2566 12:34:14</div>
                    </div>
                </div>
        </>
    )
}