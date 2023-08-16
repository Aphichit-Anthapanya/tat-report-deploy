"use client";
import React, { useEffect } from "react";
import "./procurement.scss";

interface IProps {
  index?: Number;
}

export default function Wizard(props: IProps) {
  useEffect(() => {}, []);

  return (
    <>
      <div className="flow-indicator-wrapper">
        <div className="flow-indicator d-flex justify-content-center">
          <div className="flow-section-zone">
            <div className={"circle " + (props.index == 1 ? "active" : "")}>
              1
            </div>
            <div className="section-zone-text">
              ข้อมูลโครงการของแผนปฏิบัติการจัดซื้อจัดจ้าง
            </div>
          </div>
          <div className="flow-line-zone">
            <hr />
          </div>
          <div className="flow-section-zone">
            <div className={"circle " + (props.index == 2 ? "active" : "")}>
              2
            </div>
            <div className="section-zone-text">แผนปฏิบัติการจัดซื้อจัดจ้าง</div>
          </div>
          <div className="flow-line-zone">
            <hr />
          </div>
          <div className="flow-section-zone">
            <div className={"circle " + (props.index == 3 ? "active" : "")}>
              3
            </div>
            <div className="section-zone-text">รายงานผล</div>
          </div>
        </div>
      </div>
    </>
  );
}
