"use client";

import React from "react";
import { useState } from "react";
import "@components/Report-temp/report-temp.scss";
import ReportTable from './function';

export default function Page() {
    const data = [
        {planName: 'ตลาดต่างประเทศ', type:'รายงานผลโดยตรง', calculating:'ผลรวมจำนวน', measure:'บาท', 
        indicatorsName:'จำนวนรายได้จากนักท่องเที่ยวกลุ่ม Luxury จากการดำเนินงานของ ททท.', planNumber:'', note:'', status:'Y'},
        {planName: 'ตลาดต่างประเทศ', type:'รายงานผลโดยตรง', calculating:'ตามสัดส่วนจำนวน', measure:'%', 
        indicatorsName:'อัตราความเชื่อมั่นในการบริหารจัดการเรื่องความปลอดภัยตามมาตรฐาน SHA+ ของนักท่องเที่ยวต่างชาติที่เข้าร่วมกิจกรรม', planNumber:'3.2 4.4', note:'', status:'Y'},
        {planName: 'ตลาดต่างประเทศ', type:'รายงานผลโดยตรง', calculating:'ผลรวมจำนวน', measure:'บาท', 
        indicatorsName:'จำนวนรายได้จากการท่องเที่ยวจากการจัด/เข้าร่วม/สนับสนุนกิจกรรมท่องเที่ยวนานาชาติจากการดำเนินงานของ ททท.', planNumber:'', note:'', status:'Y'},
        {planName: 'ตลาดต่างประเทศ', type:'รายงานผลโดยตรง', calculating:'ตามสัดส่วนจำนวน', measure:'%', 
        indicatorsName:'ร้อยละของผู้เข้าร่วมโครงการ/กิจกรรมเห็นว่าสินค้าและบริการท่องเที่ยวไทยแตกต่างจากสินค้าและบริการท่องเที่ยวกลุ่ม AEC', planNumber:'', note:'', status:'Y'},
        {planName: 'ตลาดต่างประเทศ', type:'รายงานผลโดยตรง', calculating:'ตามสัดส่วนจำนวน', measure:'%', 
        indicatorsName:'อัตราความพึงพอใจของผู้ใช้บทวิเคราะห์หรือข้อมูลสถานการณ์ตลาดของสำนักงาน', planNumber:'', note:'', status:'Y'},
        {planName: 'ตลาดต่างประเทศ', type:'รายงานผลโดยตรง', calculating:'ผลรวมจำนวน', measure:'ชุดข้อมูล', 
        indicatorsName:'จำนวนชุดข้อมูล VOC และความสนใจต่อสินค้าและบริการทางการท่องเที่ยวของไทยจากการเข้าร่วมงานของ ททท.', planNumber:'', note:'', status:'Y'},
        {planName: 'ตลาดต่างประเทศ', type:'รายงานผลโดยตรง', calculating:'ผลรวมจำนวน', measure:'ชุดข้อมูล', 
        indicatorsName:'จำนวนชุดข้อมูล VOS หรือ Feedback หรือ ความต้องการของผู้ประกอบการไทยที่ร่วมงานกับ ททท.', planNumber:'', note:'', status:'Y'},
        {planName: 'ตลาดต่างประเทศ', type:'รายงานผลโดยตรง', calculating:'ผลรวมจำนวน', measure:'PAX', 
        indicatorsName:'จำนวนผู้ซื้อสินค้า/บริการทางการท่องเที่ยว (pax)ของนักท่องเที่ยวต่างชาติที่เดินทางเชื่อมโยงประเทศไทยและ AEC จากการดำเนินงานของ ททท.', planNumber:'2.6', note:'', status:'Y'},
        {planName: 'ตลาดต่างประเทศ', type:'รายงานผลโดยตรง', calculating:'ผลรวมจำนวน', measure:'PAX', 
        indicatorsName:'จำนวนผู้ซื้อสินค้า/บริการทางการท่องเที่ยว (pax) ของนักท่องเที่ยวต่างชาติในช่วง Green Season จากการดำเนินงานของ ททท.', planNumber:'1.3', note:'', status:'Y'},
        {planName: 'ตลาดต่างประเทศ', type:'รายงานผลโดยตรง', calculating:'ผลรวมจำนวน', measure:'PAX', 
        indicatorsName:'จำนวนผู้ซื้อสินค้า/บริการทางการท่องเที่ยว (pax) ของนักท่องเที่ยวกลุ่มตลาดศักยภาพ (Revisitor) จากการดำเนินงานของ ททท. ', planNumber:'1.1', note:'', status:'Y'},
        {planName: 'ตลาดต่างประเทศ', type:'รายงานผลโดยตรง', calculating:'ผลรวมจำนวน', measure:'PAX', 
        indicatorsName:'จำนวนผู้ซื้อสินค้า/บริการทางการท่องเที่ยว (pax) ของนักท่องเที่ยวกลุ่มตลาดใหม่ (First Visit) จากการดำเนินงานของ ททท.', planNumber:'1.2', note:'', status:'Y'},
        {planName: 'ตลาดต่างประเทศ', type:'รายงานผลโดยตรง', calculating:'ผลรวมจำนวน', measure:'PAX', 
        indicatorsName:'จำนวนยอดจองการเดินทางท่องเที่ยวเข้าประเทศไทย (Booking) จากการดำเนินงานของ ททท.', planNumber:'', note:'', status:'Y'},
        {planName: 'ตลาดต่างประเทศ', type:'รายงานผลโดยตรง', calculating:'ผลรวมจำนวน', measure:'บาท', 
        indicatorsName:'มูลค่าสื่อ (Media Value)', planNumber:'', note:'', status:'Y'},
        {planName: 'ตลาดต่างประเทศ', type:'รายงานผลโดยตรง', calculating:'ผลรวมจำนวน', measure:'คน', 
        indicatorsName:'จำนวน Celebrity/ Influencer/ KOL', planNumber:'', note:'', status:'Y'},
        {planName: 'ตลาดต่างประเทศ', type:'รายงานผลโดยตรง', calculating:'ผลรวมจำนวน', measure:'บริการ', 
        indicatorsName:'จำนวนบริการ/สิ่งอำนวยความสะดวกด้านเทคโนโลยีที่ได้นำมาใช้', planNumber:'3.1', note:'กลยุทธ์ 3 ตัวชี้วัดใหม่ ปี 66', status:'Y'},
        {planName: 'ตลาดต่างประเทศ', type:'รายงานผลโดยตรง', calculating:'ผลรวมจำนวน', measure:'ราย', 
        indicatorsName:'จำนวน Start-up ด้านการท่องเที่ยวที่ ททท. ผลักดัน', planNumber:'3.1', note:'กลยุทธ์ 3 ตัวชี้วัดใหม่ ปี 66', status:'Y'},
        {planName: 'ตลาดต่างประเทศ', type:'รายงานผลโดยตรง', calculating:'ตามสัดส่วนจำนวน', measure:'%', 
        indicatorsName:'ระดับความพึงพอใจของผู้ใช้บริการต่อข้อมูลที่เผยแพร่', planNumber:'4.3', note:'กลยุทธ์ 4 ตัวชี้วัดใหม่ ปี 66', status:'Y'},
        {planName: 'ตลาดต่างประเทศ', type:'รายงานผลโดยตรง', calculating:'ตามสัดส่วนจำนวน', measure:'%', 
        indicatorsName:'ระดับความพึงพอใจของผู้เข้าร่วมกิจกรรม', planNumber:'3.2 4.4', note:'กลยุทธ์ 4 ตัวชี้วัดใหม่ ปี 66', status:'Y'},
        {planName: 'ตลาดต่างประเทศ', type:'รายงานผลโดยตรง', calculating:'ตามสัดส่วนจำนวน', measure:'%', 
        indicatorsName:'ระดับความพึงพอใจของนักท่องเที่ยวต่อบริการและช่องทางอำนวยความสะดวก', planNumber:'3.1', note:'กลยุทธ์ 3 ตัวชี้วัดใหม่ ปี 66', status:'Y'},
        {planName: 'ตลาดต่างประเทศ', type:'รายงานผลโดยตรง', calculating:'ตามสัดส่วนจำนวน', measure:'%', 
        indicatorsName:'ระดับความพึงพอใจผู้มีส่วนได้ส่วนเสีย (ภายในและภายนอก) ต่อสินค้าและบริการท่องเที่ยวที่สร้างสรรค์/เอกลักษณ์ของแหล่งท่องเที่ยว', planNumber:'3.1', note:'กลยุทธ์ 3 ตัวชี้วัดใหม่ ปี 66', status:'Y'},
        {planName: 'ตลาดต่างประเทศ', type:'รายงานผลโดยตรง', calculating:'ตามสัดส่วนจำนวน', measure:'%', 
        indicatorsName:'ระดับความพึงพอใจของนักท่องเที่ยวต่อสินค้าและบริการท่องเที่ยวที่สร้างสรรค์/เอกลักษณ์ของแหล่งท่องเที่ยว', planNumber:'3.1', note:'กลยุทธ์ 3 ตัวชี้วัดใหม่ ปี 66', status:'Y'},
        {planName: 'ตลาดต่างประเทศ', type:'รายงานผลโดยตรง', calculating:'ตามสัดส่วนจำนวน', measure:'%', 
        indicatorsName:'ระดับความพึงพอใจของผู้ประกอบธุรกิจท่องเที่ยวที่นำสินค้าและบริการเชิงคุณภาพไปเสนอขาย', planNumber:'2.5', note:'กลยุทธ์ 2 ตัวชี้วัดใหม่ ปี 66', status:'Y'},
        {planName: 'ตลาดต่างประเทศ', type:'รายงานผลโดยตรง', calculating:'ตามสัดส่วนจำนวน', measure:'%', 
        indicatorsName:'อัตราการบอกต่อ (Share Content) ของ ททท. ผ่านสื่อออนไลน์', planNumber:'', note:'', status:'Y'},
        {planName: 'ตลาดต่างประเทศ', type:'รายงานผลโดยตรง', calculating:'ผลรวมจำนวน', measure:'ชุดข้อมูล', 
        indicatorsName:'จำนวนฐานข้อมูลลูกค้า  (Profile & VOC)', planNumber:'', note:'', status:'Y'},
        {planName: 'ตลาดต่างประเทศ', type:'รายงานผลโดยตรง', calculating:'ผลรวมจำนวน', measure:'ชุดข้อมูล', 
        indicatorsName:'จำนวนฐานข้อมูลของผู้มีส่วนได้ส่วนเสีย (Profile & VOC)', planNumber:'', note:'', status:'Y'},
        {planName: 'ตลาดต่างประเทศ', type:'รายงานผลโดยตรง', calculating:'ตามสัดส่วนจำนวน', measure:'%', 
        indicatorsName:'อัตราความสนใจจะเดินทางของนักท่องเที่ยวกลุ่มเป้าหมาย จากการรับรู้ Content ของ ททท.', planNumber:'', note:'คำนวนตามสัดส่วน หน่วยต้องเป็น % เท่านั้น', status:'Y'},
        {planName: 'ตลาดต่างประเทศ', type:'รายงานผลโดยตรง', calculating:'ผลรวมจำนวน', measure:'ฐานข้อมูล', 
        indicatorsName:'จำนวนฐานข้อมูลลูกค้า / ผู้มีส่วนได้ส่วนเสียที่ได้นำมาบริหารความสัมพันธ์', planNumber:'', note:'', status:'Y'},
        {planName: 'ตลาดต่างประเทศ', type:'รายงานผลโดยตรง', calculating:'ผลรวมจำนวน', measure:'คน-ครั้ง', 
        indicatorsName:'A1 (Aware) จำนวนการรับรู้', planNumber:'', note:'ห้ามลบเนื่องจากนำไปออกรายงานและDashboard แก้ไขเท่านั้น!!', status:'Y'},
        {planName: 'ตลาดต่างประเทศ', type:'รายงานผลโดยตรง', calculating:'ผลรวมจำนวน', measure:'บาท', 
        indicatorsName:'รายได้จากการดำเนินงาน', planNumber:'', note:'', status:'Y'},
        {planName: 'ตลาดต่างประเทศ', type:'รายงานผลโดยตรง', calculating:'ตามสัดส่วนจำนวน', measure:'%', 
        indicatorsName:'อัตราความพึงพอใจของผู้รับบริการจากงานจัดการแจกจ่าย', planNumber:'', note:'', status:'Y'},
        {planName: 'ตลาดต่างประเทศ', type:'รายงานผลโดยตรง', calculating:'ตามสัดส่วนจำนวน', measure:'%', 
        indicatorsName:'อัตราการรับรู้ภาพลักษณ์แบรนด์ท่องเที่ยวไทยในฐานะแหล่งท่องเที่ยวที่มุ่งเน้นการท่องเที่ยวที่มีความรับผิดชอบต่อสังคมและสิ่งแวดล้อม (Responsible Tourism)', planNumber:'', note:'', status:'Y'},
        {planName: 'ตลาดต่างประเทศ', type:'รายงานผลโดยตรง', calculating:'ตามสัดส่วนจำนวน', measure:'%', 
        indicatorsName:'ระดับความพึงพอใจของผู้ประกอบธุรกิจท่องเที่ยวที่นำสินค้าและบริการไปเสนอขาย', planNumber:'2.1 2.2 2.3 2.4', note:'กลยุทธ์ 2 ตัวชี้วัดใหม่ ปี 66', status:'Y'},
        {planName: 'ตลาดต่างประเทศ', type:'รายงานผลโดยตรง', calculating:'ตามสัดส่วนจำนวน', measure:'%', 
        indicatorsName:'ระดับความพึงพอใจของผู้ประกอบธุรกิจท่องเที่ยวที่นำสินค้าและบริการไปเสนอขาย', planNumber:'4.3', note:'กลยุทธ์ 4 ตัวชี้วัดใหม่ ปี 66', status:'Y'},
        {planName: 'ตลาดต่างประเทศ', type:'รายงานผลโดยตรง', calculating:'ตามสัดส่วนจำนวน', measure:'%', 
        indicatorsName:'ความพึงพอใจของผู้ประกอบการร้านค้าที่เข้าร่วมโครงการเทียบกับเป้าหมาย', planNumber:'4.2', note:'กลยุทธ์ 4 ตัวชี้วัดใหม่ ปี 66', status:'Y'}
    ];
    
    return (
        <>
            <div className='d-flex flex-column' style={{width: '100%'}}>
                <div className='search-wrapper-section d-flex flex-column'>
                    <div className="master-data2 d-flex flex-row p-2 justify-content-center">
                        <ReportTable data={data}/>
                    </div>
                </div>
            </div>
        </>
    )
}