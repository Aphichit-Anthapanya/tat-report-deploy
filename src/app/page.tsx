"use client";

import { Container } from "react-bootstrap";
import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <Container as="main" className="d-flex content-body-wrapper">
      {/* and also work with module.scss (page.module.scss) */}
      <h1 className={styles["custom-text-green"]}>Home Page</h1>
      <Link href="/purcase-system">search-purchase-system</Link>
      <h1>-----</h1>
      <Link href="/purcase-system/add-action">add-system</Link>
      <h1>-----</h1>
      <Link href="/purcase-system/add-action">add-system(Calendar)</Link>
    </Container>
  );
}
