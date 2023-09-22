"use client";

import React from "react";
import { useState } from "react";
import "@components/Report-temp/report-temp.scss";
import Table from './table';
import { useParams, useRouter } from "next/navigation";
import Popup from '../2/2.1/popup';


export default function Page() {
    const data = [
        { 
            title: 'ชื่อโครงการ', 
            definition: {
                definition1: '- ระบุชื่อโครงการให้กระชับ เข้าใจง่าย สื่อความหมายได้ชัดเจน',
                definition2: '- โครงการจะต้องประกอบด้วยกิจกรรมมากกว่า 1 กิจกรรม',
                definition3: '- เฉพาะโครงการ Flagship จะต้องระบุวงเล็บคำว่า (Flagship) ไว้ท้ายชื่อโครงการ'
            } 
        },
        { 
            title: 'งบประมาณโครงการ', 
            definition: {
                definition1: '- ระบุให้ตรงกับงบประมาณที่ได้รับจัดสรร',
                definition2: '',
                definition3: ''
            }
        },
        { 
            title: 'งบประมาณแยกตามรายเดือน', 
            definition: {
                definition1: ' - แบ่งงบประมาณตามช่วงเวลาที่ใช้จ่ายจริง ไม่หารเท่ากันทุกเดือน และไม่ระบุเป็นเศษสตางค์',
                definition2: '',
                definition3: ''
            }
        },
        { 
            title: 'หลักการและเหตุผล', 
            definition: {
                definition1: '- เขียนหลักการและเหตุผลที่แสดงปัญหาที่เกิดขึ้นในพื้นที่ ความจำเป็นที่ต้องแก้ไขปัญหา และนำมาสู่การดำเนินโครงการ',
                definition2: '',
                definition3: ''
            }
        },
        { 
            title: 'วัตถุประสงค์โครงการ', 
            definition: {
                definition1: '- ระบุให้ชัดเจนและสอดคล้องกับวัตถุประสงค์ของกลยุทธ์และแผนงาน และจะต้องวัดผลความสำเร็จได้',
                definition2: ' - ควรระบุในรูปแบบ เพื่อ + คำกิริยา + คำขยาย เช่น เพื่อกระตุ้นการเดินทาง.... เพื่อพัฒนาศักยภาพบุคลากร...  เพื่อปรับปรุงแก้ไขระบบสารสนเทศ ...เป็นต้น',
                definition3: ''
            }
        },
        { 
            title: 'สินค้าและบริการ', 
            definition: {
                definition1: '- สิ่งที่โครงการจะเสนอขายให้กลุ่มเป้าหมาย  โดยต้องเหมาะสมกับความต้องการของกลุ่มเป้าหมายหรือสามารถนำส่งคุณค่าตามที่โครงการต้องการนำเสนอ',
                definition2: '- อธิบายให้เห็นภาพหรือยกตัวอย่างของสินค้า/บริการ ที่จะเสนอขายให้ชัดเจน ห้ามใส่ว่า แหล่งท่องเที่ยว สินค้า/บริการในจังหวัด........',
                definition3: ''
            }
        },
        { 
            title: 'พื้นที่ดำเนินโครงการ', 
            definition: {
                definition1: '- งานเกิดขึ้นที่ไหน สื่อครอบคลุมพื้นที่ไหน ให้ระบุจังหวัดหรือภูมิภาคนั้น',
                definition2: '- กรณีจัดงานใน ททท. กรุณาระบุ ททท. สำนักงานใหญ่',
                definition3: ''
            }
        },
        { 
            title: 'ตัวชี้วัดระดับโครงการ', 
            definition: {
                definition1: '- ผลที่ได้จากการดำเนินโครงการ ซึ่งต้องตอบวัตถุประสงค์ของโครงการ',
                definition2: '- ระบุุค่าเป้าหมายให้ชัดเจน พิจารณาให้เหมาะสมกับงบประมาณที่ได้รับ หรือผลการดำเนินงานในปีที่ผ่านมา',
                definition3: '- เป็นตัวชี้วัดบังคับตามที่กำหนดไว้ของแต่ละแผนงานในเอกสาร “คู่มือตัวชี้วัด” กรุณาศึกษารายละเอียดเพิ่มเติม'
            }
        },
        { 
            title: 'กลุ่มเป้าหมายระดับโครงการ', 
            definition: {
                definition1: '- กำหนดกลุ่มเป้าหมายหลักของโครงการให้ชัดเจนและเป็นกลุ่มเป้าหมายที่ทำให้บรรลุวัตถุประสงค์ของโครงการ',
                definition2: '- กำหนดกลุ่มเป้าหมายหลักเพียงกลุ่มเดียว กรณีที่กลุ่มเป้าหมายมีหลายกลุ่่ม ต้องเป็นกลุ่มเป้าหมายที่สอดคล้องกัน',
                definition3: ''
            }
        },
        { 
            title: 'วันที่เริ่มต้นโครงการ', 
            definition: {
                definition1: '- ระบุระยะเวลาเริ่มต้นให้ชัดเจนตามที่คาดว่าจะดำเนินการจริง',
                definition2: '',
                definition3: ''
            }
        },
        { 
            title: 'วันที่สิ้นสุดโครงการ', 
            definition: {
                definition1: '- ระบุระยะเวลาสิ้นสุดให้ชัดเจนตามที่คาดว่าจะดำเนินการจริง',
                definition2: '- ไม่ควรระบุเกินปีงบประมาณ',
                definition3: ''
            }
        },
        { 
            title: 'ประโยชน์ที่คาดว่าจะได้รับ', 
            definition: {
                definition1: '- ระบุผลประโยชน์หรือผลกระทบเชิงบวกระยะยาวที่คาดว่าจะเกิดขึ้นเมื่อสิ้นสุดโครงการ ทั้งทางตรงและทางอ้อม',
                definition2: '- ไม่นำ ผลลัพธ์ (Outcome) และ/หรือ ผลผลิต (Output) มากำหนดเป็นผลประโยชน์',
                definition3: ''
            }
        },
        { 
            title: 'ระบุความเสี่ยงโครงการ', 
            definition: {
                definition1: '- ระบุปัญหา/อุปสรรคที่หากเกิดขึ้น จะไม่สามารถดำเนินโครงการนี้ต่อไปได้',
                definition2: '',
                definition3: ''
            }
        },
        { 
            title: 'มาตรการบริหารความเสี่ยง', 
            definition: {
                definition1: '- ระบุแนวทางที่จะดำเนินการเพื่อป้องกันหรือลดโอกาสเกิด ลดผลกระทบของความเสี่ยงของโครงการที่อาจจะเกิดขึ้น',
                definition2: '',
                definition3: ''
            }
        },
        { 
            title: 'ชื่อกิจกรรม', 
            definition: {
                definition1: '- ควรระบุเป็นข้อความที่สรุปย่อใจความของกิจกรรมเท่านั้น นอกเหนือจากนี้ควรระบุไว้ในรายละเอียดกิจกรรม',
                definition2: '',
                definition3: ''
            }
        },
        { 
            title: 'ประเภทกิจกรรม', 
            definition: {
                definition1: '- เลือกหมวดกิจกรรมให้ถูกต้องและสอดคล้องกับกิจกรรม เช่น ประเภทโฆษณา ประชาสัมพันธ์ หรือเสนอขาย',
                definition2: '',
                definition3: ''
            }
        },
        { 
            title: 'รายละเอียดกิจกรรม', 
            definition: {
                definition1: '- กรุณาระบุรายละเอียดกิจกรรมให้ชัดเจน ตามหลัก 5Wdefinition1H คือ ทำอะไร ทำกับใคร ทำที่ไหน ทำอย่างไร และ ทำผ่านช่องทางใด',
                definition2: '',
                definition3: ''
            }
        },
        { 
            title: 'สัดส่วนกิจกรรม', 
            definition: {
                definition1: 'To ทีมงาน  สัดส่วนกิจกรรมให้วางไว้หลังจากหัวข้อรายละเอียดกิจกรรม',
                definition2: '- กรุณาระบุความสำคัญของกิจกรรมเทียบกับเนื้องานทั้งหมดของโครงการ โดยระบุค่าเป็นร้อยละ (%) ',
                definition3: '- ไม่ควรหารเฉลี่ยค่าน้ำหนักเท่ากันทุกกิจกรรม'
            }
        },
        { 
            title: 'สินค้าและบริการระดับกิจกรรม', 
            definition: {
                definition1: '- สิ่งที่จะเสนอขายให้กลุ่มเป้าหมายในกิจกรรมนั้น  ระบุให้ชัดเจนว่าจะขายอะไร ',
                definition2: '- สินค้าและบริการระดับกิจกรรมต้องสอดคล้องกับระดับโครงการ',
                definition3: ''
            }
        },
        { 
            title: 'พื้นที่ดำเนินกิจกรรม', 
            definition: {
                definition1: '- กิจกรรมนี้เกิดขึ้นที่ไหน ให้ระบุสถานที่ จังหวัด หรือภูมิภาคนั้น',
                definition2: '- กรณีดำเนินกิจกรรมใน ททท. กรุณาระบุ ททท. สำนักงานใหญ่ ',
                definition3: ''
            }
        },
        { 
            title: 'ตัวชี้วัดระดับกิจกรรม (Output)', 
            definition: {
                definition1: '- เป็นผลที่เกิดจากการทำกิจกรรมนั้น  ต้องมีค่าเป้าหมายที่ชัดเจน',
                definition2: '- พิจารณาค่าเป้าหมายให้เหมาะสมกับงบประมาณที่ได้รับ หรือผลการดำเนินงานในปีที่ผ่านมา',
                definition3: ''
            }
        },
        { 
            title: 'กลุ่มเป้าหมายระดับกิจกรรม', 
            definition: {
                definition1: '- กำหนดกลุ่มเป้าหมายให้สอดคล้องกับกิจกรรมที่ดำเนินการ',
                definition2: '',
                definition3: ''
            }
        },
        { 
            title: 'ช่วงเวลาจัดกิจกรรม (เริ่มต้น)', 
            definition: {
                definition1: '- ระบุระยะเวลาดำเนินกิจกรรมให้ชัดเจน ไม่ควรระบุทั้งปีงบประมาณ (อย่างน้อยควรระบุเป็นไตรมาส)',
                definition2: '',
                definition3: ''
            }
        },
        { 
            title: 'ช่วงเวลาจัดกิจกรรม (สิ้นสุด)', 
            definition: {
                definition1: ' - ระบุระยะเวลาดำเนินกิจกรรมให้ชัดเจนไม่ควรระบุทั้งปีงบประมาณ (อย่างน้อยควรระบุเป็นไตรมาส)',
                definition2: '',
                definition3: ''
            }
        },
    ];

    
    return (
        <>
            <div className='d-flex flex-column' style={{width: '100%'}}>
            <div className="breadcrumb-zone fz-20">Master Data {'>'} <span className="bread-crumb-page-name"><b>คำนิยาม</b></span></div>
                    <Table data={data}/>
                </div>
        </>
    )
}