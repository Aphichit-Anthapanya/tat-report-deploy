"use client";

import { Container } from "react-bootstrap";
import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <Container as="main" className="d-flex content-body-wrapper d-flex flex-column">
      {/* and also work with module.scss (page.module.scss) */}
      <h1 className={styles["custom-text-green"]}>Home Page</h1>
      <Link href="/plan-report">plan-report</Link>
      <Link href="/plan-report/cpwm">รายงานสรุปงบประมาณรายโครงการเปรียบเทียบรายเดือน</Link>
      <Link href="/plan-report/group">รายงานสรุปงบประมาณตามแผนราย ด้าน ฝ่าย กอง สำนักงาน/งาน</Link>
      <Link href="/plan-report/summary">รายงานสรุปแผนปฏิบัติการ ททท รวมเล่ม</Link>
      <Link href="/plan-report/mistake">รายงานสรุปสถิติของหัวข้อที่เกิดความผิดพลาดบ่อยครั้ง</Link>
      <Link href="/plan-report/output">รายงานสรุปผลการดำเนินงานตามตัวชี้วัดกิจกรรม Output</Link>
      <Link href="/purcase-system">ระบบจัดซื้อจัดจ้าง</Link>
      <Link href="/purcase-system/add-action">เพิ่มงบ</Link>
      <Link href="/purcase-system/add-action">เพิ่มงบ(Calendar)</Link>
      <Link href="/purcase-system/view-project">view-โครงการจัดซื้อจัดจ้าง</Link>
    </Container>
  );
}
