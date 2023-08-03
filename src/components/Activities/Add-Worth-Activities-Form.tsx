"use client";

import React, { useState } from "react";
import "./add-worth-activities.scss";
import "./add-worth-activities-form.scss";
import ImpressionForm from "./Form/ImpressionForm";

export default function AddWorthActivitiesForm() {
  const [isShowAdd, setShowAdd] = useState(false);

  return (
    <>
      <div
        style={{ width: "100%" }}
        className="add-worth-activities-wrapper activities-form"
      >
        <div className="breadcrumb-zone">
          <span>
            นำเข้าข้อมูล {" " + ">" + " "}
            ข้อมูลโครงการของการสนับสนุมการดำเนินการด้านการตลาด {" " + ">" + " "}
            งานระบบสารสนเทศองค์กร {" " + ">" + " "}
            <span className="present-page"> ความคุ้มค่าของกิจกรรม</span>
          </span>
        </div>
        <div className="add-worth-menu-wrapper p-3">
          <div className="header">
            การวิเคราะห์ความคุ้มค่าของโครงการ/กิจกรรม
          </div>
          <div className="content">
            <div className="d-flex p-3">
              <div className="form-label">
                <label>ประเภทโครงการ* :</label>
              </div>
              <div className="form-field">
                <input
                  type="text"
                  className="form-control"
                  value={"ส่งเสริมการตลาด"}
                  disabled
                />
              </div>
            </div>
            <div className="d-flex p-3">
              <div className="form-label">
                <label>ประเภทโครงการย่อย* :</label>
              </div>
              <div className="form-field">
                <div className="tag-selection d-flex">
                  <div className="tag-element">1.1 สร้างการรับรู้</div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-wrapper">
            <div className="form-header">1.1 สร้างการรับรู้</div>
            <div className="form-content">
              <div className="d-flex p-2">
                <div className="form-label">รูปแบบ *:</div>
                <div className="form-field">
                  <input
                    style={{ marginRight: 5 }}
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label
                    style={{ marginRight: 10 }}
                    className="form-check-label"
                  >
                    ออฟไลน์
                  </label>
                  <input
                    style={{ marginRight: 5 }}
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label className="form-check-label">ออนไลน์</label>
                </div>
              </div>
              <div className="d-flex p-2">
                <div className="form-label">วัตถุประสงค์ *:</div>
                <div className="form-field">
                  เพื่อดึงดูดให้นักท่องเที่ยวทั้งชาวไทยและขาวต่างชาติตัดสินใจเดินทางท่องเที่ยวในประเทศไทย
                </div>
              </div>
              <div className="d-flex p-2">
                <div className="form-label">คำอธิบาย *:</div>
                <div className="form-field">
                  การโฆษณาและประชาสัมพันธ์ผ่านสื่อช่องทางต่างๆ
                  เพื่อสร้างการรับรู้ในแหล่งท่องเที่ยว กิจกรรม
                  สินค้าและบริการด้านการท่องเที่ยว
                  ให้กับนักท่องเที่ยวทั้งชาวไทยและชาวต่างชาติ เช่น
                  การโฆษณาและประชาสัมพันธ์ผ่าน Offline media, Out-of-home media,
                  Blogger, Celebrity, Documentary, Press, การจัด MET,
                  การจัดงานแถลงข่าว เป็นต้น
                </div>
              </div>
              <ImpressionForm />
              {isShowAdd == true && <ImpressionForm />}
              <div
                style={{ clear: "both", marginTop: "50px" }}
                className="add-activities-button"
              >
                <button
                  onClick={() => setShowAdd(!isShowAdd)}
                  className="btn btn-secondary add-activity"
                >
                  {" "}
                  + เพิ่มกิจกรรม{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="button-section">
            <button
              style={{ marginRight: "10px", borderRadius: "8px" }}
              type="button"
              className="btn btn-primary"
            >
              บันทึกข้อมูลชั่วคราว
            </button>
            <button
              disabled
              style={{ marginRight: "10px", borderRadius: "8px" }}
              type="button"
              className="btn btn-primary"
            >
              <i className="bi bi-file-earmark"></i> ส่งอนุมัติ{" "}
            </button>
            <button
              style={{ borderRadius: "8px" }}
              type="button"
              className="btn btn-primary"
            >
              <i className="bi bi-chevron-left"></i> ย้อนกลับ{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
