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
      <Link href="/purcase-system">search-purchase-system</Link>
      <Link href="/purcase-system/add-action">add-system</Link>
      <Link href="/purcase-system/add-action">add-system(Calendar)</Link>
      <Link href="/purcase-system/view-project">view-project</Link>
    </Container>
  );
}
