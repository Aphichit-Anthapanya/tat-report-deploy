import React, { useState } from 'react';
import "../ball.scss";

const Popup = ({ isOpen, onClose }:any) => {
    const departments = [
        "กองเลขานุการและวิเทศสัมพันธ์",
        "กองบริหารความยั่งยืน",
        "กองตรวจสอบส่วนกลาง",
        "กองตรวจสอบสำนักงานสาขา",
        "กองกลาง", 
        "กองกฎหมายและระเบียบ",
        "กองนิติและคดี",
        "กองบริหารจัดซื้อจัดจ้าง",
        "กองอาคารและสถานที่",
        "กองบริหารงานบุคคล",
        "กองพัฒนาบุคคล",
        "กองสวัสดิการและบุคลากรสัมพันธ์",
        "กองบัญชี",
        "กองงบประมาณ",
        "กองตรวจจ่าย",
        "กองการเงิน",
        "กองรายได้",
        "กองแผนนโยบาย",
        "กองกลยุทธ์การตลาด",
        "กองบริหารความเสี่ยง",
        "กองติดตามและประเมินผล",
        "กองยุทธศาสตร์ดิจิทัล",
        "กองงบกองพัฒนาระบบประมาณ",
        "กองสารสนเทศการตลาด",
        "กองคอมพิวเตอร์และระบบเครือข่าย",
        "กองวิจัยการตลาดการท่องเที่ยว",
        "ศูนย์ฝึกอบรมการท่องเที่ยวแห่งประเทศไทย",
        "กองวางแผนสินค้าการท่องเที่ยว",
        "กองสร้างสรรค์สินค้าการท่องเที่ยว",
        "กองส่งเสริมสินค้าการท่องเที่ยว",
        "กองส่งเสริมกิจกรรม",
        "กองสร้างสรรค์กิจกรรม",
        "กองวางแผนลงทุนอุตสาหกรรมท่องเที่ยว",
        "กองนวัตกรรมอุตสาหกรรมท่องเที่ยว",
        "กองตลาดภาคเหนือ",
        "กองตลาดภาคกลาง",
        "กองตลาดภาคตะวันออกเฉียงเหนือ",
        "กองตลาดภาคใต้",
        "กองตลาดภาคตะวันออก",
        "กองเอเชียตะวันออก",
        "กองตลาดอาเซียน เอเชียใต้ และแปซิฟิก",
        "กองตลาดยุโรป แอฟริกา และตะวันออกกลาง",
        "กองตลาดอเมริกา",
        "กองเผยแพร่โฆษณาต่างประเทศ",
        "กองเผยแพร่โฆษณาในประเทศ",
        "กองประชาสัมพันธ์ต่างประเทศ",
        "กองประชาสัมพันธ์ในประเทศ",
        "กองวางแผนและผลิตสื่อ",
        "กองข่าวสารท่องเที่ยว",
        "กองวารสาร"
    ];

  return (
    <div className={`popup ${isOpen ? 'open' : ''}`}>
      <div className="d-flex flex-column justify-content-center align-items-center ">
        <div className='fz-32 mb-20'>โครงการตัวแทน</div>
            <div className='d-flex flex-row justify-content-around mr-20 ml-20 mb-20'>
                <div className="d-flex flex-row align-items-center mr-20">
                    <div className="mr-5 d-flex flex-row justify-content-right">ชื่อ:</div>
                    <div>
                        <input type="text" className="form-control" placeholder="" id="filterOverall"/>
                    </div>
                </div>
                <div className="wid d-flex flex-row align-items-center mr-20">
                    <div className="mr-5 d-flex flex-row justify-content-right">แผน:</div>
                    <div>
                        <input type="text" className="form-control" placeholder="" id="filterOverall"/>
                    </div>
                </div>
                <div className="wid d-flex flex-row align-items-center">
                    <div className="mr-5 d-flex flex-row justify-content-right">
                        <span style={{ whiteSpace: 'nowrap' }}>หน่วยงาน:</span>
                    </div>
                    <div className="filter-field wd-300"> 
                        <select className="form-select">
                            {departments?.map((items:any, index: number) => (
                                <option key={index} value={index+1}>
                                    {items}
                                </option>
                            ))}
                        </select>                 
                    </div>
                </div>
                </div>
            <table className="table">
                <thead>
                <tr className='table-primary'>
                    <th colSpan={4}>
                        <div className="wd-25 d-flex justify-content-center align-items-center">โครงการจากระบบข้อมูลแผนปฏิบัติการและการติดตามประเมินผล</div>
                    </th>
                </tr>
                <tr className='table-primary'>
                    <th>
                        <div className="wd-25 d-flex justify-content-center align-items-center">เลือก</div>
                    </th>
                    <th>
                        <div className="wd-120 d-flex justify-content-center align-items-center">แผน</div>
                    </th>
                    <th>
                        <div className="wd-200 d-flex justify-content-center align-items-center">หน่วยงาน</div>
                    </th>
                    <th>
                        <div className="wd-200 d-flex justify-content-center align-items-center">ชื่อโครงการ</div>
                    </th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>
                            <div className="form-chec d-flex justify-content-center align-items-center">
                                <input className="form-check-input" type="checkbox" id="check1" name="option1" value=""/>
                            </div>
                        </th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th>
                            <div className="form-chec d-flex justify-content-center align-items-center">
                                <input className="form-check-input" type="checkbox" id="check1" name="option1" value=""/>
                            </div>
                        </th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th>
                            <div className="form-chec d-flex justify-content-center align-items-center">
                                <input className="form-check-input" type="checkbox" id="check1" name="option1" value=""/>
                            </div>
                        </th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </tbody>
            </table>
        <div>
            <button className="close-button mr-20" onClick={onClose}>
                <div>ยกเลิก</div>
            </button>
            <button className="close-button" onClick={onClose}>
                <div>ตกลง</div>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
