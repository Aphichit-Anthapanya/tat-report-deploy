"use client";

import React from "react";
import "../add-worth-activities.scss";
import "../add-worth-activities-form.scss";
import "./impression-form.scss";

export default function ImpressionForm() {
  return (
    <>
      <div className="impression-form-wrapper">
        <div className="d-flex p-3">
          <div className="half-left">
            <div className="d-flex">
              <div className="form-label">กิจกรรม *:</div>
              <div className="form-field">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>--เลือก--</option>
                  <option value="1">กิจกรรม1</option>
                  <option value="2">กิจกรรม2</option>
                  <option value="3">กิจกรรม3</option>
                </select>
              </div>
            </div>
          </div>
          <div className="half-right">
            <div className="d-flex">
              <div className="form-label">กลุ่มเป้าหมาย *:</div>
              <div className="form-field">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>--เลือก--</option>
                  <option value="1">กลุ่มเป้าหมาย1</option>
                  <option value="2">กลุ่มเป้าหมาย2</option>
                  <option value="3">กลุ่มเป้าหมาย3</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex p-3">
          <div className="half-left">
            <div className="d-flex">
              <div className="form-label">จำนวนการเข้าถึง *:</div>
              <div className="form-field">
                <input
                  name="activity_end"
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                  min="0"
                  onInput={(e: any) => {
                    e.target.value = Math.abs(e.target.value);
                  }}
                />
              </div>
              <div>คน</div>
            </div>
          </div>
          <div className="half-right">
            <div className="d-flex">
              <div className="form-label">งบประมาณ *:</div>
              <div className="form-field">
                <input
                  name="activity_end"
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                  min="0"
                  onInput={(e: any) => {
                    e.target.value = Math.abs(e.target.value);
                  }}
                />
              </div>
              <div>บาท</div>
            </div>
          </div>
        </div>
        <div className="d-flex p-3">
          <div className="half-left">
            <div className="d-flex">
              <div className="form-label">
                สัดส่วนจำนวนนักท่องเที่ยวที่มาเยือน *:
              </div>
              <div className="form-field">
                <input
                  name="activity_end"
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                />
              </div>
            </div>
          </div>
          <div className="half-right">
            <div className="d-flex"></div>
          </div>
        </div>
        <div className="d-flex p-3">
          <div className="half-left">
            <div className="d-flex">
              <div className="form-label">
                สัดส่วนจำนวนนักท่องเที่ยวที่มาเยือน * :
              </div>
              <div className="form-field">
                <input
                  name="activity_end"
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                />
              </div>
            </div>
          </div>
          <div className="half-right">
            <div className="d-flex">
              <div className="form-label">PR Value *:</div>
              <div className="form-field">
                <input
                  name="activity_end"
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                  min="0"
                  onInput={(e: any) => {
                    e.target.value = Math.abs(e.target.value);
                  }}
                />
              </div>
              <div>บาท</div>
            </div>
          </div>
        </div>
        <div className="d-flex p-3">
          <div className="half-left split-3 p-1">
            <div className="d-flex">
              <div className="form-label split-3">จำนวนนักท่องเที่ยว *:</div>
              <div
                className="form-field"
                style={{ width: "40%", marginRight: "12px" }}
              >
                <input
                  name="activity_end"
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                  min="0"
                  onInput={(e: any) => {
                    e.target.value = Math.abs(e.target.value);
                  }}
                />
              </div>
              <div>คน</div>
            </div>
          </div>
          <div className="center p-1">
            <div className="d-flex">
              <div className="form-label split-3">ค่าใช้จ่ายเฉลี่ย/วัน * :</div>
              <div
                className="form-field"
                style={{ width: "40%", marginRight: "12px" }}
              >
                <input
                  name="activity_end"
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                  min="0"
                  onInput={(e: any) => {
                    e.target.value = Math.abs(e.target.value);
                  }}
                />
              </div>
              <div>บาท/คน</div>
            </div>
          </div>
          <div className="half-right split-3 p-1">
            <div className="d-flex">
              <div className="form-label split-3">จำนวนวันพักเฉลี่ย *:</div>
              <div
                className="form-field"
                style={{ width: "40%", marginRight: "12px" }}
              >
                <input
                  name="activity_end"
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                  min="0"
                  onInput={(e: any) => {
                    e.target.value = Math.abs(e.target.value);
                  }}
                />
              </div>
              <div>วัน</div>
            </div>
          </div>
        </div>
        <div className="d-flex p-3">
          <div className="half-left">
            <div className="d-flex">
              <div className="form-label">รายได้นักท่องเที่ยว *:</div>
              <div className="form-field">
                <input
                  name="activity_end"
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                  min="0"
                  onInput={(e: any) => {
                    e.target.value = Math.abs(e.target.value);
                  }}
                />
              </div>
              <div>บาท</div>
            </div>
          </div>
          <div className="half-right">
            <div className="d-flex"></div>
          </div>
        </div>
        <div className="d-flex p-3">
          <div className="half-left split-3 p-1">
            <div className="d-flex">
              <div className="form-label split-3">
                ค่าใช้จ่าย/จำนวนการรับรู้* :
              </div>
              <div
                className="form-field"
                style={{ width: "40%", marginRight: "12px" }}
              >
                <input
                  name="activity_end"
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                  min="0"
                  onInput={(e: any) => {
                    e.target.value = Math.abs(e.target.value);
                  }}
                />
              </div>
              <div>คน</div>
            </div>
          </div>
          <div className="center p-1">
            <div className="d-flex">
              <div className="form-label split-3">PR value return * :</div>
              <div
                className="form-field"
                style={{ width: "40%", marginRight: "12px" }}
              >
                <input
                  name="activity_end"
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                  min="0"
                  onInput={(e: any) => {
                    e.target.value = Math.abs(e.target.value);
                  }}
                />
              </div>
              <div>เท่า</div>
            </div>
          </div>
          <div className="half-right split-3 p-1">
            <div className="d-flex">
              <div className="form-label split-3">ROMI *:</div>
              <div
                className="form-field"
                style={{ width: "40%", marginRight: "12px" }}
              >
                <input
                  name="activity_end"
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                  min="0"
                  onInput={(e: any) => {
                    e.target.value = Math.abs(e.target.value);
                  }}
                />
              </div>
              <div>เท่า</div>
            </div>
          </div>
        </div>
        <div className="d-flex p-3">
          <div className="single-column">
            <div className="d-flex">
              <div className="form-label">ผลประโยชน์อื่นๆ * :</div>
              <div className="form-field">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={5}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex add-export-button">
          <button className="btn btn-secondary enable-export"> นำออก </button>
        </div>
      </div>
    </>
  );
}
