"use client";

import { ReactNode } from "react";
import Header from "@/components/Header";
import { Container } from "react-bootstrap";

export default function NavLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <div
        className="position-relative"
        style={{
          // header height
          top: 110,
        }}
      >
        <Container
          as="main"
          style={{ minHeight: "calc(100vh - 110px)" }}
          className="d-flex align-items-center justify-content-center"
        >
          {children}
        </Container>
      </div>
    </>
  );
}
