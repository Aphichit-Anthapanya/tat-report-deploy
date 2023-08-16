"use client";

import { Container } from "react-bootstrap";
import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <Container as="main" className="d-flex content-body-wrapper d-flex flex-column">
      {/* and also work with module.scss (page.module.scss) */}
      <h1 className={styles["custom-text-green"]}>Home Page</h1>
      <>ระบบแผนผล</>
      <Link href="/dashboard-v2">Dashboard</Link>
      <Link href="/plan-report">plan-report</Link>
      <Link href="/plan-report/cpwm">รายงานสรุปงบประมาณรายโครงการเปรียบเทียบรายเดือน</Link>
      <Link href="/plan-report/group">รายงานสรุปงบประมาณรายเดือนตามหมวด พ.ร.บ.งบประมาณ</Link>
      <Link href="/plan-report/summary">รายงานสรุปแผนปฏิบัติการ ททท รวมเล่ม</Link>
      <Link href="/plan-report/mistake">รายงานสรุปสถิติของหัวข้อที่เกิดความผิดพลาดบ่อยครั้ง</Link>
      <Link href="/plan-report/output">รายงานสรุปผลการดำเนินงานตามตัวชี้วัดกิจกรรม Output</Link>
      <Link href="/plan-report/new">รายงานสรุปงบประมาณตามแผนราย ด้าน ฝ่าย กอง สำนักงาน ปีงบประมาณ 25XX</Link>
      <Link href="/report">รายงานผล</Link>
      <Link href="/plan-report/indicator">รายงานผลตัวชี้วัด</Link>
      <>ระบบจัดซื้อจัดจ้าง</>
      <Link href="/purcase-system">หน้า search โครงการจัดซื้อจัดจ้าง</Link>
      <Link href="/purcase-system/add-action">เพิ่มงบ</Link>
      <Link href="/purcase-system/add-action">เพิ่มงบ(Calendar)</Link>
      <Link href="/purcase-system/view-project">view-โครงการจัดซื้อจัดจ้าง</Link>
      <>ระบบรายงานจัดซื้อจัดจ้าง</>
      <div className="ml-20 d-flex flex-column">
        <div className="d-flex flex-column">
          <Link href="">1. รายงานแผนปฏิบัติการจัดซื้อจัดจ้าง ประจำปีงบประมาณ25XX</Link>
          <div className="d-flex flex-column ml-20 mb-10">
            <Link href="/purchase-report/report-1/report-1-1">- งบลงทุน (เงินงบประมาณ)</Link>
            <Link href="/purchase-report/report-1/report-1-2">- งบสำรองกรณีจำเป็นเร่งด่วน</Link>
            <Link href="/purchase-report/report-1/report-1-3">- งบอุดหนุน</Link>
            <Link href="/purchase-report/report-1/report-1-4">- งบรายได้</Link>
            <Link href="/purchase-report/report-1/report-1-5">- งบอื่นๆ</Link>
          </div>
        </div>
        <div className="mb-10"><Link href="/purchase-report/report-2">2. รายงานสรุปแผนปฏิบัติการจัดซื้อจัดจ้าง(รายโครงการ) ประจำปีงบประมาณ 25XX</Link></div>
        <div className="mb-10"><Link href="/purchase-report/report-3">3. รายงานสรุปแผนปฏิบัติการจัดซื้อจัดจ้าง(ระดับฝ่าย) ประจำปีงบประมาณ 25XX</Link></div>
        <div className="d-flex flex-column mb-10">
          <Link href="">4. รายงานแผน-ผลปฏิบัติการจัดซื้อจัดจ้าง ประจำปีงบประมาณ 25XX ไตรมาสที่</Link>
          <div className="d-flex flex-column ml-20">
            <Link href="/purchase-report/report-4/report-4-1">- งบลงทุน (เงินงบประมาณ)</Link>
            <Link href="/purchase-report/report-4/report-4-2">- งบสำรองกรณีจำเป็นเร่งด่วน</Link>
            <Link href="/purchase-report/report-4/report-4-3">- งบอุดหนุน</Link>
            <Link href="/purchase-report/report-4/report-4-4">- งบรายได้</Link>
            <Link href="/purchase-report/report-4/report-4-5">- งบอื่นๆ</Link>
          </div>
        </div>
        <div className="mb-10"><Link href="/purchase-report/report-5">5. รายงานสรุปแผน-ผลปฏิบัติการจัดซื้อจัดจ้าง (รายโครงการ) ประจำปีงบประมาณ 25XX</Link></div>
        <div className="mb-10"><Link href="/purchase-report/report-6">6. รายงานสรุปแผน-ผลปฏิบัติการจัดซื้อจัดจ้าง (รายโครงการ) ประจำปีงบประมาณ 25XX ดำเนินการต่อในปีงบประมาณ 25xx+1</Link></div>
        <div className="d-flex flex-column mb-10">
          <Link href="/purchase-report/report-7">7. รายงานสรุปแผน-ผลปฏิบัติการจัดซื้อจัดจ้าง (ระดับฝ่าย) ประจำปีงบประมาณ 25XX ไตรมาสที่ X</Link>
          <>(แสดงข้อมูลจำนวนรายการ และ หมายเหตุแสดงจำนวนรายการเพิ่มแผนในแต่ละไตรมาส)</>
        </div>
        <div className="mb-10"><Link href="/purchase-report/report-8">8. รายงานสรุปวิธีการจัดซื้อจัดจ้าง หรือการจัดหาพัสดุ ประจำปีงบประมาณ 25XX ไตรมาสที่ X</Link></div>
        <div className="mb-10"><Link href="/purchase-report/report-9">9. รายงานกราฟสรุปวิธีการจัดซื้อจัดจ้าง หรือการจัดหาพัสดุ ประจำปีงบประมาณ 25XX ไตรมาสที่ X</Link></div>
        <div className="d-flex flex-column mb-10">
          <Link href="/purchase-report/report-10">10. รายงานสรุปแผน-ผลปฏิบัติการจัดซื้อจัดจ้าง (ระดับฝ่าย) ประจำปีงบประมาณ 25XX ไตรมาสที่ X</Link>
          <>(แสดงข้อมูลจำนวนเงิน)</>
        </div>
        <div className="mb-10"><Link href="/purchase-report/report-11">11. รายงานกราฟสรุปแผน-ผลปฏิบัติการจัดซื้อจัดจ้าง (ประเภทงบประมาณ) ประจำปีงบประมาณ 25XX ไตรมาสที่ X</Link></div>
        <div className="mb-10"><Link href="/purchase-report/report-12">12. รายงานแบบติดตามรายงานความก้าวหน้าของกิจกรรม / งาน / โครงการฯ...ปี XXXX (งบลงทุน)</Link></div>
        <div className="mb-10"><Link href="/purchase-report/report-13">13. รายงานแบบติดตามรายงานความก้าวหน้าของกิจกรรม / งาน / โครงการฯ...ปี XXXX (งบอุดหนุน)</Link></div>
      </div>
    </Container>
  );
}
