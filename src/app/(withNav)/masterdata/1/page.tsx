"use client";

import React from "react";
import { useState } from "react";
import "@components/Report-temp/report-temp.scss";
import ReportTable from './function';
import ReportTable2 from './function2';

export default function Page() {
    const data = [
        { goal: 'ประเด็นยุทธศาสตร์ที่ 1 (SO1) มุ่งเน้นการท่องเที่ยวเชิงคุณภาพอย่างยั่งยืน ', strategy: 'กลยุทธ์ที่ 1 กระตุ้นการใช้จ่ายของนักท่องเที่ยวกระแสหลัก', plan:'แผนงานที่ 1.1 กระตุ้นการเดินทางของนักท่องเที่ยวไทย ', 
        actCategory: 'บ 9 กระตุ้นการเดินทางของนักท่องเที่ยวไทย', payment: 'บ 9.1 ส่งเสริมตลาดนักท่องเที่ยวกระแสหลัก', note: 'ด้านตลาดในประเทศ (รผน.)'},
        { goal: 'ประเด็นยุทธศาสตร์ที่ 1 (SO1) มุ่งเน้นการท่องเที่ยวเชิงคุณภาพอย่างยั่งยืน ', strategy: 'กลยุทธ์ที่ 1 กระตุ้นการใช้จ่ายของนักท่องเที่ยวกระแสหลัก', plan:'แผนงานที่ 1.1 กระตุ้นการเดินทางของนักท่องเที่ยวไทย ', 
        actCategory: 'บ 9 กระตุ้นการเดินทางของนักท่องเที่ยวไทย', payment: 'บ 9.2 จัดงานเทศกาลเที่ยวเมืองไทย ', note: 'ด้านตลาดในประเทศ (รผน.)'},
        { goal: 'ประเด็นยุทธศาสตร์ที่ 1 (SO1) มุ่งเน้นการท่องเที่ยวเชิงคุณภาพอย่างยั่งยืน ', strategy: 'กลยุทธ์ที่ 1 กระตุ้นการใช้จ่ายของนักท่องเที่ยวกระแสหลัก', plan:'แผนงานที่ 1.1 กระตุ้นการเดินทางของนักท่องเที่ยวไทย ', 
        actCategory: 'บ 9 กระตุ้นการเดินทางของนักท่องเที่ยวไทย', payment: 'บ 9.3 พัฒนาและสนับสนุนกิจกรรม เทศกาล ประเพณีที่นำเสนอความเป็นไทย ', note: 'ด้านสินค้าและธุรกิจท่องเที่ยว (รผค.)'},
        { goal: 'ประเด็นยุทธศาสตร์ที่ 1 (SO1) มุ่งเน้นการท่องเที่ยวเชิงคุณภาพอย่างยั่งยืน ', strategy: 'กลยุทธ์ที่ 1 กระตุ้นการใช้จ่ายของนักท่องเที่ยวกระแสหลัก', plan:'แผนงานที่ 1.1 กระตุ้นการเดินทางของนักท่องเที่ยวไทย ', 
        actCategory: 'บ 10 สื่อสารกระแสท่องเที่ยวและความรับผิดชอบต่อสังคมและสิ่งแวดล้อม', payment: 'บ 10.1 สื่อสารการตลาดเพื่อสร้างกระแสการเดินทาง ', note: 'ด้านสื่อสารการตลาด (รผส.)'},
        { goal: 'ประเด็นยุทธศาสตร์ที่ 1 (SO1) มุ่งเน้นการท่องเที่ยวเชิงคุณภาพอย่างยั่งยืน ', strategy: 'กลยุทธ์ที่ 1 กระตุ้นการใช้จ่ายของนักท่องเที่ยวกระแสหลัก', plan:'แผนงานที่ 1.1 กระตุ้นการเดินทางของนักท่องเที่ยวไทย ', 
        actCategory: 'ผ 2.1 เผยแพร่ประชาสัมพันธ์และเสนอความเป็นไทย', payment: 'ผ 2.1.2 ผลิตสื่อเพื่อเผยแพร่ประชาสัมพันธ์และเสนอความเป็นไทย ', note: 'ด้านสื่อสารการตลาด (รผส.)'},
        { goal: 'ประเด็นยุทธศาสตร์ที่ 1 (SO1) มุ่งเน้นการท่องเที่ยวเชิงคุณภาพอย่างยั่งยืน ', strategy: 'กลยุทธ์ที่ 1 กระตุ้นการใช้จ่ายของนักท่องเที่ยวกระแสหลัก', plan:'แผนงานที่ 1.2 ส่งเสริมการท่องเที่ยวเมืองรองตามอัตลักษณ์พื้นที่ ', 
        actCategory: 'บ 9 กระตุ้นการเดินทางของนักท่องเที่ยวไทย', payment: 'บ 9.3 พัฒนาและสนับสนุนกิจกรรม เทศกาล ประเพณีที่นำเสนอความเป็นไทย ', note: 'ด้านสินค้าและธุรกิจท่องเที่ยว (รผค.)'},
        { goal: 'ประเด็นยุทธศาสตร์ที่ 1 (SO1) มุ่งเน้นการท่องเที่ยวเชิงคุณภาพอย่างยั่งยืน ', strategy: 'กลยุทธ์ที่ 1 กระตุ้นการใช้จ่ายของนักท่องเที่ยวกระแสหลัก', plan:'แผนงานที่ 1.2 ส่งเสริมการท่องเที่ยวเมืองรองตามอัตลักษณ์พื้นที่ ', 
        actCategory: 'บ 10 สื่อสารกระแสท่องเที่ยวและความรับผิดชอบต่อสังคมและสิ่งแวดล้อม', payment: 'บ 10.2 สื่อสารการตลาดกระตุ้นการเดินทางพื้นที่รอง ', note: 'ด้านสื่อสารการตลาด (รผส.)'},
        { goal: 'ประเด็นยุทธศาสตร์ที่ 1 (SO1) มุ่งเน้นการท่องเที่ยวเชิงคุณภาพอย่างยั่งยืน ', strategy: 'กลยุทธ์ที่ 1 กระตุ้นการใช้จ่ายของนักท่องเที่ยวกระแสหลัก', plan:'แผนงานที่ 1.2 ส่งเสริมการท่องเที่ยวเมืองรองตามอัตลักษณ์พื้นที่ ', 
        actCategory: 'บ 11 กระจายพื้นที่และช่วงเวลาท่องเที่ยว', payment: 'บ 11.1 ส่งเสริมการท่องเที่ยวในพื้นที่รอง', note: 'ด้านตลาดในประเทศ (รผน.)'},
        { goal: 'ประเด็นยุทธศาสตร์ที่ 1 (SO1) มุ่งเน้นการท่องเที่ยวเชิงคุณภาพอย่างยั่งยืน ', strategy: 'กลยุทธ์ที่ 1 กระตุ้นการใช้จ่ายของนักท่องเที่ยวกระแสหลัก', plan:'แผนงานที่ 1.3 ส่งเสริมการท่องเที่ยวในวันธรรมดา ', 
        actCategory: 'บ 11 กระจายพื้นที่และช่วงเวลาท่องเที่ยว', payment: 'บ 11.2 ส่งเสริมการท่องเที่ยวในวันธรรมดา', note: ''},
        { goal: 'ประเด็นยุทธศาสตร์ที่ 1 (SO1) มุ่งเน้นการท่องเที่ยวเชิงคุณภาพอย่างยั่งยืน ', strategy: 'กลยุทธ์ที่ 1 กระตุ้นการใช้จ่ายของนักท่องเที่ยวกระแสหลัก', plan:'แผนงานที่ 1.4 บริหารจัดการกระแส Internal Tourism ', 
        actCategory: 'บ 11 กระจายพื้นที่และช่วงเวลาท่องเที่ยว', payment: 'บ 11.3  บริหารจัดการกระแสการเดินทางท่องเที่ยวพื้นที่รอง (Internal Tourism)', note: ''},
        { goal: 'ประเด็นยุทธศาสตร์ที่ 1 (SO1) มุ่งเน้นการท่องเที่ยวเชิงคุณภาพอย่างยั่งยืน ', strategy: 'กลยุทธ์ที่ 1 กระตุ้นการใช้จ่ายของนักท่องเที่ยวกระแสหลัก', plan:'แผนงานที่ 1.5 เผยแพร่ประชาสัมพันธ์ข้อมูลท่องเที่ยว ', 
        actCategory: 'ผ 2.1 เผยแพร่ประชาสัมพันธ์และเสนอความเป็นไทย', payment: 'ผ 2.1.1 เผยแพร่ประชาสัมพันธ์ข้อมูลท่องเที่ยว', note: ''},
        { goal: 'ประเด็นยุทธศาสตร์ที่ 1 (SO1) มุ่งเน้นการท่องเที่ยวเชิงคุณภาพอย่างยั่งยืน ', strategy: 'กลยุทธ์ที่ 2 ขยายฐานตลาดและเพิ่มการใช้จ่ายของนักท่องเที่ยวคุณภาพ', plan:'แผนงานที่ 2.1 ส่งเสริมให้เกิดการขยายวันพักจากประสบการณ์ท่องเที่ยว ', 
        actCategory: 'บ 19 เพิ่มการใช้จ่ายของนักท่องเที่ยว', payment: 'บ 19.1 ส่งเสริมให้เกิดการขยายวันพักจากประสบการณ์ท่องเที่ยว (เรื่องราวและกิจกรรม)', note: ''},
        { goal: 'ประเด็นยุทธศาสตร์ที่ 1 (SO1) มุ่งเน้นการท่องเที่ยวเชิงคุณภาพอย่างยั่งยืน ', strategy: 'กลยุทธ์ที่ 2 ขยายฐานตลาดและเพิ่มการใช้จ่ายของนักท่องเที่ยวคุณภาพ', plan:'แผนงานที่ 2.2 กระตุ้นการใช้จ่ายด้วยสินค้ามูลค่าสูง ', 
        actCategory: 'บ 19 เพิ่มการใช้จ่ายของนักท่องเที่ยว', payment: 'บ 19.2 กระตุ้นการใช้จ่ายด้วยสินค้ามูลค่าสูง (Thailand Premium)', note: ''},
        { goal: 'ประเด็นยุทธศาสตร์ที่ 1 (SO1) มุ่งเน้นการท่องเที่ยวเชิงคุณภาพอย่างยั่งยืน ', strategy: 'กลยุทธ์ที่ 2 ขยายฐานตลาดและเพิ่มการใช้จ่ายของนักท่องเที่ยวคุณภาพ', plan:'แผนงานที่ 2.3 สร้างกระแสการท่องเที่ยวแบบ Responsible Tourism ', 
        actCategory: 'บ 10 สื่อสารกระแสท่องเที่ยวและความรับผิดชอบต่อสังคมและสิ่งแวดล้อม', payment: 'บ 10.3 สื่อสารปลุกกระแสและจิตสำนึก Responsible Tourism', note: ''},
        { goal: 'ประเด็นยุทธศาสตร์ที่ 2 (SO2) สร้างคุณค่าและยกระดับอุตสาหกรรมท่องเที่ยว', strategy: 'กลยุทธ์ที่ 3 พัฒนาและเพิ่มมูลค่าสินค้าท่องเที่ยวเชิงสร้างสรรค์', plan:'แผนงานที่ 3.1 พัฒนาและสร้างมูลค่าเพิ่มสินค้าท้องถิ่น ', 
        actCategory: 'บ 20 กระจายประโยชน์ทางการท่องเที่ยวสู่ชุมชน', payment: 'บ 20.1 พัฒนาและสร้างมูลค่าเพิ่มสินค้าท้องถิ่น', note: ''},
        { goal: 'ประเด็นยุทธศาสตร์ที่ 2 (SO2) สร้างคุณค่าและยกระดับอุตสาหกรรมท่องเที่ยว', strategy: 'กลยุทธ์ที่ 3 พัฒนาและเพิ่มมูลค่าสินค้าท่องเที่ยวเชิงสร้างสรรค์', plan:'แผนงานที่ 3.2 ส่งเสริมการท่องเที่ยวชุมชนเชิงสร้างสรรค์ ', 
        actCategory: 'บ 20 กระจายประโยชน์ทางการท่องเที่ยวสู่ชุมชน', payment: 'บ 20.2 ส่งเสริมการท่องเที่ยวชุมชนเชิงสร้างสรรค์', note: ''},
        { goal: 'ประเด็นยุทธศาสตร์ที่ 2 (SO2) สร้างคุณค่าและยกระดับอุตสาหกรรมท่องเที่ยว', strategy: 'กลยุทธ์ที่ 4 บูรณาการความร่วมมือและส่งเสริมการท่องเที่ยวยั่งยืนในห่วงโซ่คุณค่าการท่องเที่ยว', plan:'แผนงานที่ 4.1 พัฒนาศูนย์พัฒนาวิชาการด้านตลาดการท่องเที่ยว ', 
        actCategory: 'บ 12 เตรียมความพร้อมและเพิ่มขีดความสามารถให้พันธมิตรในห่วงโซ่คุณค่า', payment: 'บ 12.1 พัฒนาศูนย์พัฒนาวิชาการด้านตลาดการท่องเที่ยว', note: ''},
        { goal: 'ประเด็นยุทธศาสตร์ที่ 2 (SO2) สร้างคุณค่าและยกระดับอุตสาหกรรมท่องเที่ยว', strategy: 'กลยุทธ์ที่ 4 บูรณาการความร่วมมือและส่งเสริมการท่องเที่ยวยั่งยืนในห่วงโซ่คุณค่าการท่องเที่ยว', plan:'แผนงานที่ 4.2 ส่งเสริมและพัฒนารางวัลอุตสาหกรรมท่องเที่ยวไทย ', 
        actCategory: 'บ 12 เตรียมความพร้อมและเพิ่มขีดความสามารถให้พันธมิตรในห่วงโซ่คุณค่า', payment: 'บ 12.2 ส่งเสริมและพัฒนารางวัลอุตสาหกรรมท่องเที่ยวไทย', note: ''},
        { goal: 'ประเด็นยุทธศาสตร์ที่ 2 (SO2) สร้างคุณค่าและยกระดับอุตสาหกรรมท่องเที่ยว', strategy: 'กลยุทธ์ที่ 4 บูรณาการความร่วมมือและส่งเสริมการท่องเที่ยวยั่งยืนในห่วงโซ่คุณค่าการท่องเที่ยว', plan:'แผนงานที่ 4.3 ประสานความร่วมมือทางการตลาดและเสริมศักยภาพด้านการตลาดการท่องเที่ยว ', 
        actCategory: 'บ 12 เตรียมความพร้อมและเพิ่มขีดความสามารถให้พันธมิตรในห่วงโซ่คุณค่า', payment: 'บ 12.3 ประสานความร่วมมือพันธมิตรทางการตลาดและเสริมศักยภาพด้านการตลาดการท่องเที่ยว', note: ''},    
    ];

    const data2 = [
        { goal: 'ประเด็นยุทธศาสตร์ที่ 1 (SO1) มุ่งเน้นการท่องเที่ยวเชิงคุณภาพอย่างยั่งยืน ', strategy: 'กลยุทธ์ที่ 1 กระตุ้นการใช้จ่ายนักท่องเที่ยวคุณภาพกลุ่มตลาดกลาง-บน', plan:'แผนงาน 1.1 กระตุ้นการเดินทางนักท่องเที่ยวกลุ่มศักยภาพ (Revisit)', 
        actCategory: 'บ 4 ขยายฐานตลาด และกระตุ้นการใช้จ่ายนักท่องเที่ยวเพื่อพักผ่อนทั่วไปกลุ่มตลาดกลาง - บน', payment: 'บ 4.2 ส่งเสริมตลาดกลุ่มศักยภาพ (Revisit) ', note: ''},
        { goal: 'ประเด็นยุทธศาสตร์ที่ 1 (SO1) มุ่งเน้นการท่องเที่ยวเชิงคุณภาพอย่างยั่งยืน ', strategy: 'กลยุทธ์ที่ 1 กระตุ้นการใช้จ่ายนักท่องเที่ยวคุณภาพกลุ่มตลาดกลาง-บน', plan:'แผนงาน 1.2 ขยายฐานกลุ่มตลาดใหม่ (First Visit) ', 
        actCategory: 'บ 4 ขยายฐานตลาด และกระตุ้นการใช้จ่ายนักท่องเที่ยวเพื่อพักผ่อนทั่วไปกลุ่มตลาดกลาง - บน', payment: 'บ 4.1 ขยายฐานตลาดใหม่ (First visit) ', note: ''},
        { goal: 'ประเด็นยุทธศาสตร์ที่ 1 (SO1) มุ่งเน้นการท่องเที่ยวเชิงคุณภาพอย่างยั่งยืน ', strategy: 'กลยุทธ์ที่ 1 กระตุ้นการใช้จ่ายนักท่องเที่ยวคุณภาพกลุ่มตลาดกลาง-บน', plan:'แผนงาน 1.3 ส่งเสริมการท่องเที่ยวช่วงนอกฤดูกาลและเมืองรอง ', 
        actCategory: 'บ 3 ส่งเสริมการท่องเที่ยวช่วงนอกฤดูกาล', payment: 'บ 3.2 ส่งเสริมตลาดการท่องเที่ยวช่วง Low Season ', note: ''},
        { goal: 'ประเด็นยุทธศาสตร์ที่ 1 (SO1) มุ่งเน้นการท่องเที่ยวเชิงคุณภาพอย่างยั่งยืน ', strategy: 'กลยุทธ์ที่ 1 กระตุ้นการใช้จ่ายนักท่องเที่ยวคุณภาพกลุ่มตลาดกลาง-บน', plan:'แผนงาน 1.4 เปิดเวทีไทยสู่เวทีโลก ', 
        actCategory: 'บ 5 เพิ่มขีดความสามารถในการแข่งขัน', payment: 'บ 5.2 จัดกิจกรรมเปิดเวทีท่องเที่ยวไทยสู่เวทีโลก', note: ''},
        { goal: 'ประเด็นยุทธศาสตร์ที่ 1 (SO1) มุ่งเน้นการท่องเที่ยวเชิงคุณภาพอย่างยั่งยืน ', strategy: 'กลยุทธ์ที่ 1 กระตุ้นการใช้จ่ายนักท่องเที่ยวคุณภาพกลุ่มตลาดกลาง-บน', plan:'แผนงาน 1.5 จ้างผู้จัดการตลาด/ผู้แทนการตลาด/ผู้แทนด้านประชาสัมพันธ์ ', 
        actCategory: 'บ 5 เพิ่มขีดความสามารถในการแข่งขัน', payment: 'บ 5.1 จ้างผู้จัดการตลาด/ผู้แทนการตลาด/ผู้แทนด้านประชาสัมพันธ์', note: ''},
        { goal: 'ประเด็นยุทธศาสตร์ที่ 1 (SO1) มุ่งเน้นการท่องเที่ยวเชิงคุณภาพอย่างยั่งยืน ', strategy: 'กลยุทธ์ที่ 1 กระตุ้นการใช้จ่ายนักท่องเที่ยวคุณภาพกลุ่มตลาดกลาง-บน', plan:'แผนงาน 1.6 ส่งเสริมกิจกรรมระดับนานาชาติ', 
        actCategory: 'บ 14 ส่งเสริมกิจกรรมระดับนานาชาติ', payment: 'บ 14.1 จัดกิจกรรม International Events', note: ''},
        { goal: 'ประเด็นยุทธศาสตร์ที่ 1 (SO1) มุ่งเน้นการท่องเที่ยวเชิงคุณภาพอย่างยั่งยืน ', strategy: 'กลยุทธ์ที่ 2 ขยายฐานตลาดและกระตุ้นการใช้จ่ายนักท่องเที่ยวคุณภาพกลุ่มความสนใจพิเศษและกลุ่มเฉพาะ', plan:'แผนงาน 2.1 ขยายฐานตลาดและกระตุ้นการใช้จ่าย นทท.กลุ่ม Health & Wellness ', 
        actCategory: 'บ 15 ขยายตลาดนักท่องเที่ยวกลุ่มสุขภาพ', payment: 'บ 15.1 ส่งเสริมกลุ่ม Health and Wellness in Thailand ', note: ''},
        { goal: 'ประเด็นยุทธศาสตร์ที่ 1 (SO1) มุ่งเน้นการท่องเที่ยวเชิงคุณภาพอย่างยั่งยืน ', strategy: 'กลยุทธ์ที่ 2 ขยายฐานตลาดและกระตุ้นการใช้จ่ายนักท่องเที่ยวคุณภาพกลุ่มความสนใจพิเศษและกลุ่มเฉพาะ', plan:'แผนงาน 2.2 ขยายฐานตลาดและกระตุ้นการใช้จ่าย นทท.กลุ่ม Wedding & Honeymoon ', 
        actCategory: 'บ 2 ขยายตลาดนักท่องเที่ยวกลุ่มความสนใจพิเศษ', payment: 'บ 2.1 ส่งเสริมกลุ่ม Romance in Thailand', note: ''},
        { goal: 'ประเด็นยุทธศาสตร์ที่ 1 (SO1) มุ่งเน้นการท่องเที่ยวเชิงคุณภาพอย่างยั่งยืน ', strategy: 'กลยุทธ์ที่ 2 ขยายฐานตลาดและกระตุ้นการใช้จ่ายนักท่องเที่ยวคุณภาพกลุ่มความสนใจพิเศษและกลุ่มเฉพาะ', plan:'แผนงาน 2.3 ขยายฐานตลาดและกระตุ้นการใช้จ่าย นทท.กลุ่ม Green Tourism ', 
        actCategory: 'บ 2 ขยายตลาดนักท่องเที่ยวกลุ่มความสนใจพิเศษ', payment: 'บ 2.2 ส่งเสริมกลุ่ม Green Tourism ', note: ''},
        { goal: 'ประเด็นยุทธศาสตร์ที่ 1 (SO1) มุ่งเน้นการท่องเที่ยวเชิงคุณภาพอย่างยั่งยืน ', strategy: 'กลยุทธ์ที่ 2 ขยายฐานตลาดและกระตุ้นการใช้จ่ายนักท่องเที่ยวคุณภาพกลุ่มความสนใจพิเศษและกลุ่มเฉพาะ', plan:'แผนงาน 2.4 ขยายฐานตลาดและกระตุ้นการใช้จ่าย นทท.กลุ่ม Sport Tourism ', 
        actCategory: 'บ 17 ขยายตลาดนักท่องเที่ยวกลุ่มกีฬา', payment: 'บ. 17.1 ส่งเสริมกลุ่ม Sport Tourism ', note: ''},
        { goal: 'ประเด็นยุทธศาสตร์ที่ 1 (SO1) มุ่งเน้นการท่องเที่ยวเชิงคุณภาพอย่างยั่งยืน ', strategy: 'กลยุทธ์ที่ 2 ขยายฐานตลาดและกระตุ้นการใช้จ่ายนักท่องเที่ยวคุณภาพกลุ่มความสนใจพิเศษและกลุ่มเฉพาะ', plan:'แผนงาน 2.5 ขยายฐานตลาดและกระตุ้นการใช้จ่าย นทท.กลุ่มนิยมความหรูหรา Luxury', 
        actCategory: 'บ 16 ขยายฐานตลาดนักท่องเที่ยวกลุ่มนิยมความหรูหรา', payment: 'บ 16.1  ส่งเสริมกลุ่ม Luxury', note: ''},
        { goal: 'ประเด็นยุทธศาสตร์ที่ 1 (SO1) มุ่งเน้นการท่องเที่ยวเชิงคุณภาพอย่างยั่งยืน ', strategy: 'กลยุทธ์ที่ 2 ขยายฐานตลาดและกระตุ้นการใช้จ่ายนักท่องเที่ยวคุณภาพกลุ่มความสนใจพิเศษและกลุ่มเฉพาะ', plan:'แผนงาน 2.6 ขยายตลาดนักท่องเที่ยวเชื่อมโยงกลุ่มอาเซียน ', 
        actCategory: 'บ 18 ส่งเสริมการท่องเที่ยวเชื่อมโยงกลุ่มอาเซียน', payment: 'บ 18.1 ส่งเสริมการท่องเที่ยว ASEAN Connectivity', note: ''},
        { goal: 'ประเด็นยุทธศาสตร์ที่ 1 (SO1) มุ่งเน้นการท่องเที่ยวเชิงคุณภาพอย่างยั่งยืน ', strategy: 'กลยุทธ์ที่ 2 ขยายฐานตลาดและกระตุ้นการใช้จ่ายนักท่องเที่ยวคุณภาพกลุ่มความสนใจพิเศษและกลุ่มเฉพาะ', plan:'แผนงาน 2.6 ขยายตลาดนักท่องเที่ยวเชื่อมโยงกลุ่มอาเซียน ', 
        actCategory: 'บ 18 ส่งเสริมการท่องเที่ยวเชื่อมโยงกลุ่มอาเซียน', payment: 'บ 18.2 ส่งเสริมความร่วมมือระหว่างประเทศตามกรอบความร่วมมือ', note: ''},
        { goal: 'ประเด็นยุทธศาสตร์ที่ 1 (SO1) มุ่งเน้นการท่องเที่ยวเชิงคุณภาพอย่างยั่งยืน ', strategy: 'กลยุทธ์ที่ 2 ขยายฐานตลาดและกระตุ้นการใช้จ่ายนักท่องเที่ยวคุณภาพกลุ่มความสนใจพิเศษและกลุ่มเฉพาะ', plan:'แผนงาน 2.7 สนับสนุนข้อมูลการตลาดกลุ่มความสนใจพิเศษ ', 
        actCategory: 'บ 2 ขยายตลาดนักท่องเที่ยวกลุ่มความสนใจพิเศษ', payment: 'บ 2.3 ศึกษาการตลาดกลุ่มเป้าหมายเฉพาะ', note: ''},
        { goal: 'ประเด็นยุทธศาสตร์ที่ 2 (SO2) สร้างคุณค่าและยกระดับอุตสาหกรรมท่องเที่ยว', strategy: 'กลยุทธ์ที่ 3 บูรณาการห่วงโซ่มูลค่าและสินค้าเชิงสร้างสรรค์', plan:'แผนงาน 3.1 สร้างสรรค์นวัตกรรมและเพิ่มมูลค่าวิถีไทย ', 
        actCategory: 'บ 13 สร้างสรรค์นวัตกรรมและเพิ่มมูลค่าวิถีไทย', payment: 'บ 13.1  พัฒนาสินค้าและบริการท่องเที่ยวให้มีมูลค่าเพิ่ม', note: ''},
        { goal: 'ประเด็นยุทธศาสตร์ที่ 2 (SO2) สร้างคุณค่าและยกระดับอุตสาหกรรมท่องเที่ยว', strategy: 'กลยุทธ์ที่ 3 บูรณาการห่วงโซ่มูลค่าและสินค้าเชิงสร้างสรรค์', plan:'แผนงาน 3.2 สร้างสรรค์กิจกรรมช่วง Low Season ของไทย ', 
        actCategory: 'บ 3 ส่งเสริมการท่องเที่ยวช่วงนอกฤดูกาล', payment: 'บ 3.1 สร้างสรรค์กิจกรรมช่วง Low Season', note: ''},
        { goal: 'ประเด็นยุทธศาสตร์ที่ 2 (SO2) สร้างคุณค่าและยกระดับอุตสาหกรรมท่องเที่ยว', strategy: 'กลยุทธ์ที่ 4 ปรับภาพลักษณ์แบรนด์ท่องเที่ยวไทยสู่การเป็นแหล่งท่องเที่ยวคุณภาพที่ใส่ใจสิ่งแวดล้อม', plan:'แผนงาน 4.1 ยกระดับภาพลักษณ์การท่องเที่ยวสู่ความเป็นคุณภาพผ่านวิถีไทย ', 
        actCategory: 'บ 1 ยกระดับภาพลักษณ์การท่องเที่ยวสู่ความเป็นคุณภาพผ่านวิถีไทย', payment: 'บ 1.1 ยกระดับแบรนด์ประเทศไทยผ่านสื่อระดับโลก ', note: ''},
        { goal: 'ประเด็นยุทธศาสตร์ที่ 2 (SO2) สร้างคุณค่าและยกระดับอุตสาหกรรมท่องเที่ยว', strategy: 'กลยุทธ์ที่ 4 ปรับภาพลักษณ์แบรนด์ท่องเที่ยวไทยสู่การเป็นแหล่งท่องเที่ยวคุณภาพที่ใส่ใจสิ่งแวดล้อม', plan:'แผนงาน 4.1 ยกระดับภาพลักษณ์การท่องเที่ยวสู่ความเป็นคุณภาพผ่านวิถีไทย ', 
        actCategory: 'บ 1 ยกระดับภาพลักษณ์การท่องเที่ยวสู่ความเป็นคุณภาพผ่านวิถีไทย', payment: 'บ 1.2 บริหารภาพลักษณ์การท่องเที่ยวไทย ', note: ''},
        { goal: 'ประเด็นยุทธศาสตร์ที่ 2 (SO2) สร้างคุณค่าและยกระดับอุตสาหกรรมท่องเที่ยว', strategy: 'กลยุทธ์ที่ 4 ปรับภาพลักษณ์แบรนด์ท่องเที่ยวไทยสู่การเป็นแหล่งท่องเที่ยวคุณภาพที่ใส่ใจสิ่งแวดล้อม', plan:'แผนงาน 4.1 ยกระดับภาพลักษณ์การท่องเที่ยวสู่ความเป็นคุณภาพผ่านวิถีไทย ', 
        actCategory: 'บ 1 ยกระดับภาพลักษณ์การท่องเที่ยวสู่ความเป็นคุณภาพผ่านวิถีไทย', payment: 'บ 1.3 ส่งเสริมการท่องเที่ยว Experience Thainess ', note: ''},
        { goal: 'ประเด็นยุทธศาสตร์ที่ 2 (SO2) สร้างคุณค่าและยกระดับอุตสาหกรรมท่องเที่ยว', strategy: 'กลยุทธ์ที่ 4 ปรับภาพลักษณ์แบรนด์ท่องเที่ยวไทยสู่การเป็นแหล่งท่องเที่ยวคุณภาพที่ใส่ใจสิ่งแวดล้อม', plan:'แผนงาน 4.2 The Michelin Guide Thailand ', 
        actCategory: 'บ. 8 การจัดทำ The Michelin Guide Thailand', payment: 'บ 8 การจัดทำ The Michelin Guide Thailand', note: ''},
        { goal: 'ประเด็นยุทธศาสตร์ที่ 2 (SO2) สร้างคุณค่าและยกระดับอุตสาหกรรมท่องเที่ยว', strategy: 'กลยุทธ์ที่ 4 ปรับภาพลักษณ์แบรนด์ท่องเที่ยวไทยสู่การเป็นแหล่งท่องเที่ยวคุณภาพที่ใส่ใจสิ่งแวดล้อม', plan:'แผนงาน 4.3 เผยแพร่ประชาสัมพันธ์ผ่านสื่อสารสนเทศ ', 
        actCategory: 'บ 6 เผยแพร่ประชาสัมพันธ์ผ่านสื่อสารสนเทศ', payment: 'บ 6.1 เพิ่ม ปสพ.และประยุกต์ใช้ระบบสารสนเทศตลาด เพื่อสื่อสารภาพลักษณ์ประเทศไทย', note: ''},
    ];

    const data3 = [
        { goal: 'SO2 สร้างคุณค่าและยกระดับอุตสาหกรรมท่องเที่ยว', strategy: 'กลยุทธ์ 1 พัฒนาคลังข้อมูลและต่อยอดธุรกิจท่องเที่ยว', plan:'แผนงาน 1.1 พัฒนาฐานข้อมูลลูกค้าและวิเคราะห์ตลาดการท่องเที่ยวเชิงลึก', 
        actCategory: 'บ 7 พัฒนาคลังข้อมูล', payment: 'บ 7.1 พัฒนาคลังข้อมูล'},
        { goal: 'SO2 สร้างคุณค่าและยกระดับอุตสาหกรรมท่องเที่ยว', strategy: 'กลยุทธ์ 1 พัฒนาคลังข้อมูลและต่อยอดธุรกิจท่องเที่ยว', plan:'แผนงาน 1.1 พัฒนาฐานข้อมูลลูกค้าและวิเคราะห์ตลาดการท่องเที่ยวเชิงลึก', 
        actCategory: 'บ 7 พัฒนาคลังข้อมูล', payment: 'บ 7.2 เผยแพร่วิชาการและสร้างเครือข่ายด้านการท่องเที่ยว'},
        { goal: 'SO2 สร้างคุณค่าและยกระดับอุตสาหกรรมท่องเที่ยว', strategy: 'กลยุทธ์ 1 พัฒนาคลังข้อมูลและต่อยอดธุรกิจท่องเที่ยว', plan:'แผนงาน 1.1 พัฒนาฐานข้อมูลลูกค้าและวิเคราะห์ตลาดการท่องเที่ยวเชิงลึก', 
        actCategory: 'ผ 3.3 การศึกษาเพื่อพัฒนาการตลาดการท่องเที่ยว ', payment: 'ผ 3.3.1 การศึกษาตลาดนักท่องเที่ยวต่างประเทศ'},
        { goal: 'SO2 สร้างคุณค่าและยกระดับอุตสาหกรรมท่องเที่ยว', strategy: 'กลยุทธ์ 1 พัฒนาคลังข้อมูลและต่อยอดธุรกิจท่องเที่ยว', plan:'แผนงาน 1.1 พัฒนาฐานข้อมูลลูกค้าและวิเคราะห์ตลาดการท่องเที่ยวเชิงลึก', 
        actCategory: 'ผ 3.3 การศึกษาเพื่อพัฒนาการตลาดการท่องเที่ยว ', payment: 'ผ 3.3.2 การศึกษาตลาดนักท่องเที่ยวชาวไทย'},
        { goal: 'SO2 สร้างคุณค่าและยกระดับอุตสาหกรรมท่องเที่ยว', strategy: 'กลยุทธ์ 1 พัฒนาคลังข้อมูลและต่อยอดธุรกิจท่องเที่ยว', plan:'แผนงาน 1.2 พัฒนาธุรกิจท่องเที่ยวและบริหารจัดการทรัพย์สิน', 
        actCategory: 'ผ 3.7 พัฒนาต่อยอดธุรกิจทางการท่องเที่ยว', payment: 'ผ3.7.1 ส่งเสริมธุรกิจทางการท่องเที่ยว'},
        { goal: 'SO3 ยกระดับองค์กรสู่องค์กรสมรรถนะสูง', strategy: 'กลยุทธ์ 2 บริหารและพัฒนาทรัพยากรบุคคลให้ก้าวทันการเปลี่ยนแปลง', plan:'แผนงาน 2.1 พัฒนาสมรรถนะบุคลากรและการจัดการความรู้ ', 
        actCategory: 'ผ 3.4 เพิ่มประสิทธิภาพของบุคลากร', payment: 'ผ 3.4.1 พัฒนาบุคลากรและการจัดการองค์ความรู้ขององค์กร'},
        { goal: 'SO3 ยกระดับองค์กรสู่องค์กรสมรรถนะสูง', strategy: 'กลยุทธ์ 2 บริหารและพัฒนาทรัพยากรบุคคลให้ก้าวทันการเปลี่ยนแปลง', plan:'แผนงาน 2.2 บริหารทรัพยากรบุคคล และเสริมสร้างความผูกพันองค์กร ', 
        actCategory: 'ผ 3.4 เพิ่มประสิทธิภาพของบุคลากร', payment: 'ผ 3.4.2 เพิ่มประสิทธิภาพการบริหารบุคลากร'},
        { goal: 'SO3 ยกระดับองค์กรสู่องค์กรสมรรถนะสูง', strategy: 'กลยุทธ์ 2 บริหารและพัฒนาทรัพยากรบุคคลให้ก้าวทันการเปลี่ยนแปลง', plan:'แผนงาน 2.2 บริหารทรัพยากรบุคคล และเสริมสร้างความผูกพันองค์กร ', 
        actCategory: 'ผ 3.4 เพิ่มประสิทธิภาพของบุคลากร', payment: 'ผ3.4.3 ส่งเสริมค่านิยมองค์กร'},
        { goal: 'SO3 ยกระดับองค์กรสู่องค์กรสมรรถนะสูง', strategy: 'กลยุทธ์ 2 บริหารและพัฒนาทรัพยากรบุคคลให้ก้าวทันการเปลี่ยนแปลง', plan:'แผนงาน 2.2 บริหารทรัพยากรบุคคล และเสริมสร้างความผูกพันองค์กร ', 
        actCategory: 'ผ 3.5 เพิ่มประสิทธิภาพการบริหารจัดการองค์กร', payment: 'ผ 3.5.6 สื่อสารภายในองค์กร'},
        { goal: 'SO3 ยกระดับองค์กรสู่องค์กรสมรรถนะสูง', strategy: 'กลยุทธ์ 3 พัฒนาการทำงานและเพิ่มประสิทธิภาพกระบวนการสนับสนุนองค์กร', plan:'แผนงาน 3.1  ปรับปรุงการทำงานด้วยเทคโนโลยีสารสนเทศองค์กร', 
        actCategory: 'ผ 3.2 พัฒนาระบบสารสนเทศ', payment: 'ผ 3.2.1 พัฒนาระบบสารสนเทศ'},
        { goal: 'SO3 ยกระดับองค์กรสู่องค์กรสมรรถนะสูง', strategy: 'กลยุทธ์ 3 พัฒนาการทำงานและเพิ่มประสิทธิภาพกระบวนการสนับสนุนองค์กร', plan:'แผนงาน 3.2  ปรับปรุงการทำงานด้วยนวัตกรรมองค์กร', 
        actCategory: 'บ 13 สร้างสรรค์นวัตกรรมและเพิ่มมูลค่าวิถีไทย', payment: 'บ 13.2 สร้างสรรค์นวัตกรรมทางการท่องเที่ยว'},
        { goal: 'SO3 ยกระดับองค์กรสู่องค์กรสมรรถนะสูง', strategy: 'กลยุทธ์ 3 พัฒนาการทำงานและเพิ่มประสิทธิภาพกระบวนการสนับสนุนองค์กร', plan:'แผนงาน 3.3 ปรับปรุงประสิทธิภาพกระบวนการสนับสนุนองค์กร', 
        actCategory: 'ผ 3.5 เพิ่มประสิทธิภาพการบริหารจัดการองค์กร', payment: 'ผ 3.5.1 สนับสนุนการดำเนินงานขององค์กร'},
        { goal: 'SO3 ยกระดับองค์กรสู่องค์กรสมรรถนะสูง', strategy: 'กลยุทธ์ 4 พัฒนาประสิทธิภาพกระบวนการนำองค์กรและบริหารความสัมพันธ์กับผู้มีส่วนได้ส่วนเสีย', plan:'แผนงาน 4.1 จัดทำยุทธศาสตร์ขององค์กรและการติดตามประเมินผล', 
        actCategory: 'ผ 3.1 จัดทำยุทธศาสตร์และแผนการตลาดการท่องเที่ยว', payment: 'ผ 3.1.1 จัดทำยุทธศาสตร์และแผนการตลาดการท่องเที่ยว'},
        { goal: 'SO3 ยกระดับองค์กรสู่องค์กรสมรรถนะสูง', strategy: 'กลยุทธ์ 4 พัฒนาประสิทธิภาพกระบวนการนำองค์กรและบริหารความสัมพันธ์กับผู้มีส่วนได้ส่วนเสีย', plan:'แผนงาน 4.1 จัดทำยุทธศาสตร์ขององค์กรและการติดตามประเมินผล', 
        actCategory: 'ผ 3.5 เพิ่มประสิทธิภาพการบริหารจัดการองค์กร', payment: 'ผ3.5.2 ติดตามและประเมินผลการดำเนินงานของ ททท.'},
        { goal: 'SO3 ยกระดับองค์กรสู่องค์กรสมรรถนะสูง', strategy: 'กลยุทธ์ 4 พัฒนาประสิทธิภาพกระบวนการนำองค์กรและบริหารความสัมพันธ์กับผู้มีส่วนได้ส่วนเสีย', plan:'แผนงาน 4.1 จัดทำยุทธศาสตร์ขององค์กรและการติดตามประเมินผล', 
        actCategory: 'ผ 3.5 เพิ่มประสิทธิภาพการบริหารจัดการองค์กร', payment: 'ผ3.5.3 พัฒนาระบบงานและกระบวนการดำเนินงานขององค์กร'},
        { goal: 'SO3 ยกระดับองค์กรสู่องค์กรสมรรถนะสูง', strategy: 'กลยุทธ์ 4 พัฒนาประสิทธิภาพกระบวนการนำองค์กรและบริหารความสัมพันธ์กับผู้มีส่วนได้ส่วนเสีย', plan:'แผนงาน 4.2 เพิ่มประสิทธิภาพการบริหารความเสี่ยง ควบคุมภายใน และตรวจสอบภายใน', 
        actCategory: 'ผ 3.5 เพิ่มประสิทธิภาพการบริหารจัดการองค์กร', payment: 'ผ3.5.4 บริหารความเสี่ยงและการควบคุมภายใน'},
        { goal: 'SO3 ยกระดับองค์กรสู่องค์กรสมรรถนะสูง', strategy: 'กลยุทธ์ 4 พัฒนาประสิทธิภาพกระบวนการนำองค์กรและบริหารความสัมพันธ์กับผู้มีส่วนได้ส่วนเสีย', plan:'แผนงาน 4.2 เพิ่มประสิทธิภาพการบริหารความเสี่ยง ควบคุมภายใน และตรวจสอบภายใน', 
        actCategory: 'ผ 3.5 เพิ่มประสิทธิภาพการบริหารจัดการองค์กร', payment: 'ผ3.5.5 ตรวจสอบและกำกับดูแลการดำเนินงานของ ททท.'},
        { goal: 'SO3 ยกระดับองค์กรสู่องค์กรสมรรถนะสูง', strategy: 'กลยุทธ์ 4 พัฒนาประสิทธิภาพกระบวนการนำองค์กรและบริหารความสัมพันธ์กับผู้มีส่วนได้ส่วนเสีย', plan:'แผนงาน 4.3 เสริมสร้างการกำกับดูแลที่ดี การแสดงความรับผิดชอบต่อสังคม และการบริหารความสัมพันธ์กับผู้มีส่วนได้ส่วนเสีย', 
        actCategory: 'ผ3.6 เสริมสร้างการทำงานตามหลักธรรมาภิบาล และการแสดงความรับผิดชอบต่อสังคม', payment: 'ผ3.6.1 ส่งเสริมการทำงานตามหลัก ธรรมาภิบาล'},
        { goal: 'SO3 ยกระดับองค์กรสู่องค์กรสมรรถนะสูง', strategy: 'กลยุทธ์ 4 พัฒนาประสิทธิภาพกระบวนการนำองค์กรและบริหารความสัมพันธ์กับผู้มีส่วนได้ส่วนเสีย', plan:'แผนงาน 4.3 เสริมสร้างการกำกับดูแลที่ดี การแสดงความรับผิดชอบต่อสังคม และการบริหารความสัมพันธ์กับผู้มีส่วนได้ส่วนเสีย', 
        actCategory: 'ผ3.6 เสริมสร้างการทำงานตามหลักธรรมาภิบาล และการแสดงความรับผิดชอบต่อสังคม', payment: 'ผ3.6.2 ส่งเสริมการแสดงความรับผิดชอบต่อสังคม'},
        
    ];
    
    return (
        <>
            <div className='d-flex flex-column' style={{width: '100%'}}>
                <div className='search-wrapper-section d-flex flex-column'>
                    <div className="master-data d-flex flex-column p-2 justify-content-center">
                        <div className="box mb-20 fz-32">
                            <b>แผนตลาดในประเทศ ปี 2567</b>
                        </div>
                        <ReportTable data={data}/>
                    </div>

                    <div className="master-data d-flex flex-column p-2 justify-content-center">
                        <div className="box mb-20 fz-32">
                            <b>แผนตลาดต่างประเทศ ปี 2567</b>
                        </div>
                        <ReportTable data={data2}/>
                    </div>

                    <div className="master-data d-flex flex-column p-2 justify-content-center">
                        <div className="box mb-20 fz-32">
                            <b>แผนบริหารฯ ปี 2567</b>
                        </div>
                        <ReportTable2 data={data3}/>
                    </div>
                </div>
            </div>
        </>
    )
}