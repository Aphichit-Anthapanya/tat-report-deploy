"use client";

import React from "react";
import { useState } from "react";
import "@components/Report-temp/report-temp.scss";
import ReportTable from './function';

export default function Page() {
    const data = [
        { number: '1', target: 'ในประเทศ', targetName:'Gen-Y', note:''},
        { number: '2', target: 'ในประเทศ', targetName:'Gen-Y (Young Executive)', note:''},
        { number: '3', target: 'ในประเทศ', targetName:'Gen-Y (นักศึกษา)', note:''},
        { number: '4', target: 'ในประเทศ', targetName:'Gen-Y (วัยทำงานตอนต้น)', note:''},
        { number: '5', target: 'ในประเทศ', targetName:'Gen-Z', note:''},
        { number: '6', target: 'ในประเทศ', targetName:'เยาวชน', note:''},
        { number: '7', target: 'ในประเทศ', targetName:'Millennial', note:'เพิ่มปี 67'},
        { number: '8', target: 'ในประเทศ', targetName:'Millennial Couple', note:'เพิ่มปี 67'},
        { number: '9', target: 'ในประเทศ', targetName:'Millennial Family (ครอบครัวคนรุ่นใหม่ที่เดินทางเพื่อพัฒนาทักษะของลูก)', note:''},
        { number: '10', target: 'ในประเทศ', targetName:'Multi-generation Family (ครอบครัวที่เดินทางตั้งแต่ 3 Generation ขึ้นไป)', note:''},
        { number: '11', target: 'ในประเทศ', targetName:'Active Senior', note:''},
        { number: '12', target: 'ในประเทศ', targetName:'Silver Age', note:''},
        { number: '13', target: 'ในประเทศ', targetName:'ผู้หญิง', note:''},
        { number: '14', target: 'ในประเทศ', targetName:'ผู้หญิงนักบริหาร', note:''},
        { number: '15', target: 'ในประเทศ', targetName:'ผู้หญิงโสด', note:''},
        { number: '16', target: 'ในประเทศ', targetName:'ผู้มีรายได้สูง', note:''},
        { number: '17', target: 'ในประเทศ', targetName:'คู่แต่งงานและฮันนีมูน', note:''},
        { number: '18', target: 'ในประเทศ', targetName:'คู่รัก', note:''},
        { number: '19', target: 'ในประเทศ', targetName:'Slow Traveller', note:''},
        { number: '20', target: 'ในประเทศ', targetName:'กลุ่ม Bleisure (Business + Leisure)', note:''},
        { number: '21', target: 'ในประเทศ', targetName:'กลุ่ม Corporate', note:''},
        { number: '22', target: 'ในประเทศ', targetName:'กลุ่ม Digital Asset', note:''},
        { number: '23', target: 'ในประเทศ', targetName:'กลุ่ม Digital Nomad', note:''},
        { number: '24', target: 'ในประเทศ', targetName:'กลุ่ม Gamer', note:''},
        { number: '25', target: 'ในประเทศ', targetName:'กลุ่มขับรถเที่ยว', note:''},
        { number: '26', target: 'ในประเทศ', targetName:'กลุ่มคนรุ่นใหม่จากชุมชนท่องเที่ยว', note:''},
        { number: '27', target: 'ในประเทศ', targetName:'กลุ่มมุสลิม', note:''},
        { number: '28', target: 'ในประเทศ', targetName:'กลุ่มวัยทำงาน', note:''},
        { number: '29', target: 'ในประเทศ', targetName:'เจ้าของธุรกิจ', note:''},
        { number: '30', target: 'ในประเทศ', targetName:'ชุมชนท่องเที่ยว', note:''},
        { number: '31', target: 'ในประเทศ', targetName:'เกษตรกร', note:''},
        { number: '32', target: 'ในประเทศ', targetName:'ข้าราชการชั้นผู้น้อย', note:''},
        { number: '33', target: 'ในประเทศ', targetName:'เจ้าหน้าที่องค์การปกครองส่วนท้องถิ่น', note:''},
        { number: '34', target: 'ในประเทศ', targetName:'ผู้ใช้แรงงาน', note:''},
        { number: '35', target: 'ในประเทศ', targetName:'มัคคุเทศก์', note:''},
        { number: '36', target: 'ในประเทศ', targetName:'สมาคม/ชมรมท่องเที่ยว', note:''},
        { number: '37', target: 'ในประเทศ', targetName:'สายการบิน', note:''},
        { number: '38', target: 'ในประเทศ', targetName:'บุคลากรด้านการบริการ', note:''},
        { number: '39', target: 'ในประเทศ', targetName:'นักท่องเที่ยวชาวไทย', note:''},
        { number: '40', target: 'ในประเทศ', targetName:'นักท่องเที่ยวชาวไทย (เฉพาะโครงการเผยแพร่ประชาสัมพันธ์ข้อมูลท่องเที่ยว)', note:''},
        { number: '41', target: 'ในประเทศ', targetName:'นักท่องเที่ยวชาวต่างชาติ', note:''},
        { number: '42', target: 'ในประเทศ', targetName:'นักท่องเที่ยวต่างชาติในประเทศไทย', note:''},
        { number: '43', target: 'ในประเทศ', targetName:'นักท่องเที่ยวต่างชาตินอกประเทศไทย', note:''},
        { number: '44', target: 'ในประเทศ', targetName:'ผู้ชื่นชอบการชมกีฬา (Sport Fan)', note:''},
        { number: '45', target: 'ในประเทศ', targetName:'ผู้ชื่นชอบการเล่นกีฬา (Sport Lover)', note:''},
        { number: '46', target: 'ในประเทศ', targetName:'ผู้ชื่นชอบการชิม/รับประทานอาหาร (Food Lover)', note:''},
        { number: '47', target: 'ในประเทศ', targetName:'ผู้ชื่นชอบดนตรี/ชมคอนเสิร์ต (Music Lover)', note:''},
        { number: '48', target: 'ในประเทศ', targetName:'ผู้ชื่นชอบละคร/ภาพยนตร์ (Drama/Film Lover)', note:''},
        { number: '49', target: 'ในประเทศ', targetName:'ผู้ชื่นชอบดารา/นักแสดง (Fan Club)', note:''},
        { number: '50', target: 'ในประเทศ', targetName:'ผู้ชื่นชอบการทำกิจกรรมกลางแจ้ง (Outdoor Activities)', note:''},
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