"use client";

import { Container } from "react-bootstrap";
import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <Container as="main" className="d-flex content-body-wrapper d-flex flex-column">
      {/* and also work with module.scss (page.module.scss) */}
      <h1 className={styles["custom-text-green"]}>Home Page</h1>
      <Link href="/masterdata">Master Data</Link>
      <Link href="/test-function/exportpdf">Test Export PDF</Link>
      <Link href="/test-function/exportxls/export1">Test Export XLSX</Link>
      <Link href="/test-function/spreadsheet">Test SpreadSheet</Link>
      <>ระบบแผนผล</>
      <Link href="/PA">PA-Admin</Link>
      <Link href="/PA-user">PA-User</Link>
      <Link href="/dashboard-v2">Dashboard</Link>
      <Link href="/plan-report">plan-report</Link>
      <Link href="/plan-report/cpwm">รายงานสรุปงบประมาณรายโครงการเปรียบเทียบรายเดือน</Link>
      <Link href="/plan-report/group">รายงานสรุปงบประมาณรายเดือนตามหมวด พ.ร.บ.งบประมาณ</Link>
      <Link href="/plan-report/summary">รายงานสรุปแผนปฏิบัติการ ททท รวมเล่ม</Link>
      <Link href="/plan-report/mistake">รายงานสรุปหัวข้อที่ผิดพลาด</Link>
      <Link href="/plan-report/output">รายงานสรุปผลการดำเนินงานตามตัวชี้วัดกิจกรรม Output</Link>
      <Link href="/plan-report/new">รายงานสรุปงบประมาณตามแผนราย ด้าน ฝ่าย กอง สำนักงาน ปีงบประมาณ 25XX</Link>
      <Link href="/report">รายงานผล</Link>
      <Link href="/report/new">รายงานผล(ใหม่)</Link>
      <Link href="/report/ball">รายงานผล(ball)</Link>
      <Link href="/plan-report/indicator">รายงานผลตัวชี้วัด</Link>
      <>ระบบจัดซื้อจัดจ้าง</>
      <Link href="/purcase-system">หน้า search โครงการจัดซื้อจัดจ้าง</Link>
      <Link href="/purcase-system/add-action">เพิ่มงบ</Link>
      <Link href="/purcase-system/add-action">เพิ่มงบ(Calendar)</Link>
      <Link href="/purcase-system/view-project">view-โครงการจัดซื้อจัดจ้าง</Link>
      <>ระบบรายงานจัดซื้อจัดจ้าง</>
      <Link href="/purchase-report">รายงานจัดซื้อจัดจ้าง</Link>

    </Container>
  );
}
