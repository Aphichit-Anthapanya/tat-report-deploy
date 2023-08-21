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
                <div className="breadcrumb-zone">รายงานจัดซื้อจัดจ้าง {'>'} <span className="bread-crumb-page-name"><b>รายงานสรุปงบประมาณตามแผนราย ด้าน ฝ่าย กอง สำนักงาน ปีงบประมาณ 25XX</b></span></div>
                <div className='search-wrapper-section d-flex flex-column'>
                    <div className="d-flex flex-row justify-content-around">
                            <div className="d-flex flex-column">
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="boxs">
                                        <b>ด้าน:</b>
                                    </div>
                                    <div className="boxs">
                                        <div className="filter-field">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>  -- เลือกทั้งหมด --  </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="boxs">
                                        <b>ฝ่าย/สำนัก:</b>
                                    </div>
                                    <div className="boxs">
                                        <div className="filter-field">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>  -- เลือกทั้งหมด --  </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="boxs">
                                        <b>กอง/กลุ่ม:</b>
                                    </div>
                                    <div className="boxs">
                                        <div className="filter-field">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>  -- เลือกทั้งหมด --  </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
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

                            <div className="d-flex flex-column">
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="boxs">
                                        <b>ปีงบประมาณ:</b>
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
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="boxs">
                                        <b>ชื่อแผน:</b>
                                    </div>
                                    <div className="boxs">
                                        <div className="filter-field">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>ประเด็นยุทธศาสตร์</option>
                                                <option value="1">ตลาดต่างประเทศ</option>
                                                <option value="2">ตลาดในประเทศ</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="boxs">
                                        <b>ประเด็นยุทธศาสตร์:</b>
                                    </div>
                                    <div className="boxs">
                                        <div className="filter-field">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>  -- เลือกทั้งหมด --  </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="boxs">
                                        <b>ชื่อกลยุทธ์ภาพรวม:</b>
                                    </div>
                                    <div className="boxs">
                                        <div className="filter-field">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>  -- เลือกทั้งหมด --  </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="d-flex flex-column">
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="boxs">
                                        <b>กลยุทธ์ภูมิภาค:</b>
                                    </div>
                                    <div className="boxs">
                                        <div className="filter-field">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>  -- เลือกทั้งหมด --  </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="boxs">
                                        <b>ชื่อแผนงาน:</b>
                                    </div>
                                    <div className="boxs">
                                        <div className="filter-field">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>  -- เลือกทั้งหมด --  </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="boxs">
                                        <b>ตลาด:</b>
                                    </div>
                                    <div className="boxs">
                                        <div className="filter-field">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>  -- เลือกทั้งหมด --  </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="boxs">
                                        <b>โครงการหลัก:</b>
                                    </div>
                                    <div className="boxs">
                                        <div className="filter-field">
                                        <input type="text" className="form-control" placeholder="" id="filterOverall" />
                                        </div>
                                    </div>
                                </div>
                                <div className="content-search-box d-flex p-2 justify-content-right align-items-center">
                                    <div className="boxs">
                                        <b>โครงการ:</b>
                                    </div>
                                    <div className="boxs">
                                        <div className="filter-field">
                                        <input type="text" className="form-control" placeholder="" id="filterOverall" />
                                        </div>
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
                                <div className="box">
                                    <b>รายงานสรุปงบประมาณตามแผนราย ด้าน ฝ่าย กอง สำนักงาน ปีงบประมาณ 2566</b>
                                </div>
                                <div className="box d-flex">
                                    <div className="content mr-10"><b>หน่วยงาน:</b></div>
                                    <div className="content"><p>หน่วยงานขึ้นตรงผู้ว่าการ</p></div>
                                </div>
                                <div>
                                    
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr className="table-primary">
                                                <th>
                                                    <div className="wd-400 d-flex justify-content-center align-items-center">กลยุทธ์-แผนงาน</div>
                                                </th>
                                                <th>
                                                    <div className="wd-160 d-flex justify-content-center align-items-center">รวม</div>
                                                </th>              
                                                <th>
                                                    <div className="wd-160 d-flex justify-content-center align-items-center">ฝ่ายตรวจสอบภายใน</div>
                                                </th>
                                                <th>
                                                    <div className="wd-160 d-flex flex-column justify-content-center align-items-center">
                                                        <div>กองตรวจสอบ</div>
                                                        <div>สำนักงานสาขา</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="wd-160 d-flex justify-content-center align-items-center">กองตรวจสอบส่วนกลาง</div>
                                                </th>
                                                <th>
                                                    <div className="wd-160 d-flex justify-content-center align-items-center">สำนักผู้ว่าการ</div>
                                                </th>
                                                <th>
                                                    <div className="wd-160 d-flex justify-content-center align-items-center">กองบริหารความยั่งยืน</div>
                                                </th>
                                                <th>
                                                    <div className="wd-160 d-flex flex-column justify-content-center align-items-center">
                                                        <div>กองเลขานุการ</div>
                                                        <div>และวิเทศสัมพันธ์</div>
                                                    </div>
                                                </th>
                                                </tr>

                                                <tr className="table-info">
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">
                                                            รวมงบประมาณทั้งหมด
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">
                                                            44,733,600.00
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">
                                                            12,450,000.00
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">
                                                            8,550,000.00
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">
                                                            3,900,000.00
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">
                                                            32,283,600.00
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">
                                                            27,975,800.00
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">
                                                            4,307,800.00
                                                        </div>
                                                    </th>
                                                </tr>

                                                <tr className="table-primary">
                                                    <th>
                                                        <div className="d-flex justify-content-left align-items-center">
                                                            กลยุทธ์ที่ 2 บริหารและพัฒนาทรัพยากรบุคคลให้ก้าวทันการเปลี่ยนแปลง
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">
                                                            691,000.00
                                                        </div>
                                                    </th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">
                                                            691,000.00
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">
                                                            691,000.00
                                                        </div>
                                                    </th>
                                                    <th></th>
                                                </tr>

                                                <tr className="table-warning">
                                                    <th>
                                                        <div className="ml-10 normalText d-flex justify-content-left align-items-center">
                                                            แผนงาน 2.2 พัฒนาระบบบริหารทรัพยากรบุคลากรและขับเคลื่อนค่านิยมองค์กร
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">
                                                            691,000.00
                                                        </div>
                                                    </th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">
                                                            691,000.00
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">
                                                            691,000.00
                                                        </div>
                                                    </th>
                                                    <th></th>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        <div className="ml-20 normalText d-flex justify-content-left align-items-center">
                                                            1. โครงการส่งเสริมค่านิยมองค์กร (SPIRITS)
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">
                                                            691,000.00
                                                        </div>
                                                    </th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">
                                                            691,000.00
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">
                                                            691,000.00
                                                        </div>
                                                    </th>
                                                    <th></th>
                                                </tr>

                                                <tr className="table-primary">
                                                    <th>
                                                        <div className="d-flex justify-content-left align-items-center">
                                                            กลยุทธ์ที่ 2 บริหารและพัฒนาทรัพยากรบุคคลให้ก้าวทันการเปลี่ยนแปลง (งบคงเหลือ 65)
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">
                                                            4,000,000.00
                                                        </div>
                                                    </th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">
                                                            4,000,000.00
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="d-flex justify-content-right align-items-center">
                                                            4,000,000.00
                                                        </div>
                                                    </th>
                                                    <th></th>
                                                </tr>

                                                <tr className="table-warning">
                                                    <th>
                                                        <div className="ml-10 normalText d-flex justify-content-left align-items-center">
                                                            แผนงาน 2.2 พัฒนาระบบบริหารทรัพยากรบุคลากรและขับเคลื่อนค่านิยมองค์กร (งบคงเหลือ 65)
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">
                                                            4,000,000.00
                                                        </div>
                                                    </th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">
                                                            4,000,000.00
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">
                                                            4,000,000.00
                                                        </div>
                                                    </th>
                                                    <th></th>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        <div className="ml-20 normalText d-flex justify-content-left align-items-center">
                                                            5. โครงการทบทวนและจัดกิจกรรมเสริมสร้างค่านิยมและวัฒนธรรมองค์กร ของ ททท
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">
                                                            4,000,000.00
                                                        </div>
                                                    </th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">
                                                            4,000,000.00
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="normalText d-flex justify-content-right align-items-center">
                                                            4,000,000.00
                                                        </div>
                                                    </th>
                                                    <th></th>
                                                </tr>
                                        </tbody>
                                    </table>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}