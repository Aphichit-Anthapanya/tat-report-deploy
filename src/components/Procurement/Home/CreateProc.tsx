"use client";
import React, { useEffect, useState, useRef } from "react";
import "@/components/Procurement/procurement.scss";
import Link from "next/link";

export default function CreateProc() {
  useEffect(() => {}, []);

  const btnCreateProc: any = [
    {
      path: "/procurement/new/1",
      name: "เพิ่มงบลงทุน(งบประมาณ)",
    },
    {
      path: "/procurement/new/2",
      name: "เพิ่มงบสำรอง ฯ",
      // กรณีจำเป็นเร่งด่วน
    },
    {
      path: "/procurement/new/3",
      name: "เพิ่มงบอุดหนุน",
    },
    {
      path: "/procurement/new/4",
      name: "เพิ่มงบรายได้",
    },
    {
      path: "/procurement/new/5",
      name: "เพิ่มงบอื่น ๆ",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {btnCreateProc.map((i: any, idx: any) => {
            return (
              <Link href={i.path} key={idx}>
                <button
                  className="btn btn-primary"
                  style={{ marginRight: "14px" }}
                  type="button"
                >
                  <i className="bi bi-file-earmark-text"></i> {i.name}
                </button>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
