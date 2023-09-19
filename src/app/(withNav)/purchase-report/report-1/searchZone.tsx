import React from 'react';
import "@components/Report-temp/report-temp.scss";
import { Formik, Form, FormikProps, Field, FormikValues } from "formik";

const SearchZone = () => {
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
        <>
        <div className='search-wrapper-section d-flex flex-column'>
                        <div className="d-flex justify-content-around justify-content-center align-items-center">
                            <div className="content-search-box d-flex p-2 justify-content-center align-items-center">
                                <div className="mr-10 purchase-report">
                                    <label>ปีงบประมาณ:</label>
                                </div>
                                <div className="purchase-report">
                                    <div className="filter-field">
                                      <select className="form-select">
                                      {Array.from({ length: 10 }, (_, index) => {
                                          const currentDate = new Date();
                                          const currentYear = currentDate.getFullYear();
                                          const buddhistYear = currentYear + 543 - index;
                                          const indexs = index+1
                                          const indexNumber = indexs.toString();
                                          return (
                                            <option value={indexNumber}>{buddhistYear}</option>
                                          );
                                        })}  
                                      </select>                         
                                    </div>
                                </div>
                            </div>
                            <div className="content-search-box d-flex p-2 justify-content-between justify-content-center align-items-center">
                                    <div className="mr-10 purchase-report">
                                        <label>สถานะงาน:</label>
                                    </div>
                                    <div className="purchase-report">
                                    <div className="filter-field">
                                        <select className="form-select" aria-label="Default select example">
                                            <option value="3" selected>  -- เลือกทั้งหมด --  </option>
                                            <option value="1">อนุมัติ</option>
                                            <option value="2">รายงานผลเสร็จสิ้น</option>
                                        </select>
                                    </div>
                                    </div>
                            </div>
                            <div className="d-flex flex-row justify-content-center justify-content-around align-items-center">                        
                                <div className="d-flex justify-content-center align-items-center">
                                    <div className="mr-10">
                                        <label>หน่วยงาน:</label>
                                    </div>
                                    <div className="pie-chart-box">
                                        <div className="filter-field"> 
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
                            </div>
                        </div>
                        
                            <div className="d-flex filter-project-button justify-content-center">
                                <div className="p-2"><button className="btn btn-primary">ดูรายงาน</button></div>
                                <div className="p-2"><button className="btn btn-secondary">ล้างค่า</button></div>
                            </div>    
                    </div>
        </>  
    );
};

export default SearchZone;
