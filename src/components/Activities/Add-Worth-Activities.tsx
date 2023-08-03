"use client";

import React from "react";
import "./add-worth-activities.scss";
import { useRouter } from "next/navigation";

export default function AddWorthActivities() {
  const router = useRouter();

  const handleSumitMenu = () => {
    router.push("/operation-follow/add-activities/add-worth-activities/form");
  };

  return (
    <>
      <div className="add-worth-activities-wrapper">
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
                <div className="checkbox-selection p-3">
                  <div className="p-1">
                    <input
                      style={{ marginRight: 5 }}
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label className="form-check-label">
                      1.1 สร้างการรับรู้
                    </label>
                  </div>
                  <div className="p-1">
                    <input
                      style={{ marginRight: 5 }}
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label className="form-check-label">1.2 เสนอขาย</label>
                  </div>
                  <div className="p-1">
                    <input
                      style={{ marginRight: 5 }}
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label className="form-check-label">
                      1.3 เสนอการขาย (B2C)
                    </label>
                  </div>
                  <div className="p-1">
                    <input
                      style={{ marginRight: 5 }}
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label className="form-check-label">
                      1.4 ส่งเสริมการขาย (B2ฺB)
                    </label>
                  </div>
                  <div className="p-1">
                    <input
                      style={{ marginRight: 5 }}
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label className="form-check-label">
                      1.5 สนับสนุนหน่วยงานด้านการตลาด
                    </label>
                  </div>
                  <div>
                    <input
                      style={{ marginRight: 5 }}
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label className="form-check-label">
                      1.6 วิจัยการตลาด/สนับสนุนการตลาด
                    </label>
                  </div>
                </div>
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
              onClick={() => handleSumitMenu()}
              style={{ marginRight: "10px", borderRadius: "8px" }}
              type="button"
              className="btn btn-primary"
            >
              <i className="bi bi-file-earmark"></i> ยืนยัน{" "}
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
