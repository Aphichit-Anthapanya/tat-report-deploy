"use client";

import React from "react";

interface ReportPageProps {
  mode: string;
}

export default function ReportActivitiesPage(props: ReportPageProps) {
  return (
    <>
      <div className="report-activities-wrapper">
        <div className="activity-sqheader">
          <label>กิจกรรมที่ 1</label>
        </div>
        <div className="activity-content">
          <div className="d-flex">
            <div className="left">หมวดกิจกรรม:</div>
            <div className="right">ในแผน</div>
          </div>
          <div className="d-flex">
            <div className="left">ลำดับกิจกรรม:</div>
            <div className="right">4</div>
          </div>
          <div className="d-flex">
            <div className="left">ชื่อกิจกรรม:</div>
            <div className="right">การจัดซื้อจัดจ้าง</div>
          </div>
          <div className="d-flex">
            <div className="left">รายละเอียดกิจกรรม:</div>
            <div className="right">-</div>
          </div>
          <div className="d-flex">
            <div className="left">สัดส่วนของกิจกรรมต่อโครงการ:</div>
            <div className="right">20.0%</div>
          </div>
        </div>
      </div>

      <div className="activities-half-wrapper d-flex">
        <div className="half-left">
          <div className="report-activities-wrapper">
            <div className="activity-sqheader">
              <label>แผนการจัดกิจกรรม</label>
            </div>
            <div className="activity-content"></div>
          </div>
        </div>
        <div className="half-right">
          <div className="report-activities-wrapper">
            <div className="activity-sqheader">
              <label>ผลการจัดกิจกรรม</label>
            </div>
            <div className="activity-content">
              <label>สถานะกิจกรรม: </label>
              <span>อยู่ระหว่างดำเนินการ</span>
            </div>
          </div>
        </div>
      </div>
      <div className="activities-half-wrapper d-flex">
        <div className="half-left">
          <div className="report-activities-wrapper">
            <div className="activity-sqheader">
              <label>แผนการจัดกิจกรรม</label>
            </div>
            <div className="activity-content"></div>
          </div>
        </div>
        <div className="half-right">
          <div className="report-activities-wrapper">
            <div className="activity-sqheader">
              <label>รายละเอียดและผลการดำเนินงาน</label>
            </div>
          </div>
        </div>
      </div>
      <div className="activities-content-wrapper d-flex">
        <div className="half-left"></div>
        <div className="half-right">
          <div className="activity-table-wrapper">
            <div className="table-header">
              ตัวชี้วัดระดับกิจกรรม(Output)
              <button className="btn btn-primary add-button">+ เพิ่ม</button>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">ลำดับที่</th>
                  <th scope="col">แก้ไข</th>
                  <th scope="col">ลบ</th>
                  <th scope="col">หัวข้อ</th>
                  <th scope="col">งบประมาณ</th>
                  <th scope="col">วันที่เริ่มต้น</th>
                  <th scope="col">วันที่สิ้นสุด</th>
                  <th scope="col">ไฟล์แนบ</th>
                  <th scope="col">วันที่รายงานผล</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <i className="bi bi-pencil-square"></i>
                  </td>
                  <td></td>
                  <td>การจัดซื้อจัดจ้าง</td>
                  <td>0.00</td>
                  <td>03/01/2566</td>
                  <td>23/01/2566</td>
                  <td></td>
                  <td>03/04/2566</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <i className="bi bi-pencil-square"></i>
                  </td>
                  <td></td>
                  <td>การจัดซื้อจัดจ้าง</td>
                  <td>0.00</td>
                  <td>03/01/2566</td>
                  <td>23/01/2566</td>
                  <td></td>
                  <td>03/04/2566</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    <i className="bi bi-pencil-square"></i>
                  </td>
                  <td></td>
                  <td>การจัดซื้อจัดจ้าง</td>
                  <td>0.00</td>
                  <td>03/01/2566</td>
                  <td>23/01/2566</td>
                  <td></td>
                  <td>03/04/2566</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="activities-content-wrapper d-flex">
        <div className="half-left"></div>
        <div className="half-right">
          <div className="activity-table-wrapper">
            <div className="table-header">
              ตัวชี้วัดระดับกิจกรรม(Output)
              <button className="btn btn-primary add-button">+ เพิ่ม</button>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th style={{ width: "10%" }} scope="col">
                    ลำดับที่
                  </th>
                  <th style={{ width: "24%" }} scope="col">
                    ชื่อตัวชี้วัด
                  </th>
                  <th scope="col">รวม (%)</th>
                  <th scope="col">ไตรมาสที่ 1 (%)</th>
                  <th scope="col">ไตรมาสที่ 2 (%)</th>
                  <th scope="col">ไตรมาสที่ 3 (%)</th>
                  <th scope="col">ไตรมาสที่ 4 (%)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>ร้อยละความคืบหน้าการดำเนินโครงการ</td>
                  <td>35.00</td>
                  <td>
                    <input
                      disabled={props.mode == "view"}
                      type="text"
                      className="form-control purchase-project-feild1"
                      placeholder=""
                      id="filterOverall"
                    />
                  </td>
                  <td>
                    <input
                      disabled={props.mode == "view"}
                      type="text"
                      className="form-control purchase-project-feild1"
                      placeholder=""
                      id="filterOverall"
                    />
                  </td>
                  <td>
                    <input
                      disabled={props.mode == "view"}
                      type="text"
                      className="form-control purchase-project-feild1"
                      placeholder=""
                      id="filterOverall"
                    />
                  </td>
                  <td>
                    <input
                      disabled={props.mode == "view"}
                      type="text"
                      className="form-control purchase-project-feild1"
                      placeholder=""
                      id="filterOverall"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="activities-content-wrapper d-flex">
        <div className="half-left">
          <div className="d-flex">
            <div className="form-label">
              <label>ตัวชี้วัดระดับกิจกรรม (Output) :</label>
            </div>
            <div className="form-field">
              <div>สามารถดำเนินการจัดซื้อจัดจ้างได้ทันตามกำหนด</div>
            </div>
          </div>
        </div>
        <div className="half-right">
          <div className="d-flex">
            <div className="form-label">
              <label>ตัวชี้วัดระดับกิจกรรม (Output) :</label>
            </div>
            <div className="form-field">
              <div>
                <input
                  disabled={props.mode == "view"}
                  type="text"
                  className="form-control purchase-project-feild1"
                  placeholder=""
                  id="filterOverall"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="activities-content-wrapper d-flex">
        <div className="half-left">
          <div className="d-flex">
            <div className="form-label">
              <label>งบประมาณ* :</label>
            </div>
            <div className="form-field">
              <div> 0.00 บาท (แผน)</div>
            </div>
          </div>
        </div>
        <div className="half-right">
          <div className="d-flex">
            <div className="form-label">
              <label>งบประมาณ* :</label>
            </div>
            <div className="form-field">
              <div>
                <input
                  disabled={props.mode == "view"}
                  type="text"
                  className="form-control purchase-project-feild1"
                  placeholder=""
                  id="filterOverall"
                  value="0.00"
                />{" "}
                บาท (แผน)
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="activities-content-wrapper d-flex">
        <div className="half-left">
          <div className="d-flex">
            <div className="form-label">
              <label>ชาวง่วลาจัดกิจกรรม เริ่ม* :</label>
            </div>
            <div className="form-field">
              <div> 01/12/2566 (แผน)</div>
            </div>
          </div>
        </div>
        <div className="half-right">
          <div className="d-flex">
            <div className="form-label">
              <label>ชาวง่วลาจัดกิจกรรม เริ่ม* :</label>
            </div>
            <div className="form-field">
              <div>
                <input
                  disabled={props.mode == "view"}
                  type="date"
                  className="form-control purchase-project-feild1"
                  placeholder=""
                  id="filterOverall"
                  value="0.00"
                />
                (แผน)
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="activities-content-wrapper d-flex">
        <div className="half-left">
          <div className="d-flex">
            <div className="form-label">
              <label>ชาวง่วลาจัดกิจกรรม สิ้นสุด* :</label>
            </div>
            <div className="form-field">
              <div> 01/12/2566 (แผน)</div>
            </div>
          </div>
        </div>
        <div className="half-right">
          <div className="d-flex">
            <div className="form-label">
              <label>ชาวง่วลาจัดกิจกรรม สิ้นสุด* :</label>
            </div>
            <div className="form-field">
              <div>
                <input
                  disabled={props.mode == "view"}
                  type="date"
                  className="form-control purchase-project-feild1"
                  placeholder=""
                  id="filterOverall"
                  value="0.00"
                />
                (แผน)
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="activities-content-wrapper d-flex">
        <div className="half-left">
          <div className="d-flex">
            <div className="form-label">
              <label>พื้นที่ดำเนินกิจกรรม* :</label>
            </div>
            <div className="form-field">
              <div className="activity-table-wrapper">
                <div className="table-header">พื้นที่ดำเนินกิจกรรม</div>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">ลำดับที่</th>
                      <th scope="col">พื้นที่/ประเทศ</th>
                      <th scope="col">จังหวัด/เมือง</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>ททท ส่วนกลาง</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="half-right">
          <div className="d-flex">
            <div className="form-label">
              <label>ชาวง่วลาจัดกิจกรรม สิ้นสุด* :</label>
            </div>
            <div className="form-field">
              <div className="activity-table-wrapper">
                <div className="table-header">
                  พื้นที่ดำเนินกิจกรรม
                  <button className="btn btn-primary add-button">
                    + เพิ่ม
                  </button>
                </div>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">ลำดับที่</th>
                      <th scope="col">พื้นที่/ประเทศ</th>
                      <th scope="col">จังหวัด/เมือง</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>ททท ส่วนกลาง</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="activities-content-wrapper d-flex">
        <div className="half-left">
          <div className="d-flex">
            <div className="form-label">
              <label>กลุ่มเป้าหมายระดับโครงการ* :</label>
            </div>
            <div className="form-field">
              <div className="activity-table-wrapper">
                <div className="table-header">กลุ่มเป้าหมายระดับโครงการ</div>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">ลำดับที่</th>
                      <th scope="col">กลุ่มเป้าหมาย</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>ผู้บริหาร ททท</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>หนักงาน ททท ส่วนกลาง</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="half-right">
          <div className="d-flex">
            <div className="form-label">
              <label>ชาวง่วลาจัดกิจกรรม สิ้นสุด* :</label>
            </div>
            <div className="form-field">
              <div className="activity-table-wrapper">
                <div className="table-header">
                  กลุ่มเป้าหมายระดับโครงการ
                  <button className="btn btn-primary add-button">
                    + เพิ่ม
                  </button>
                </div>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">ลำดับที่</th>
                      <th scope="col">กลุ่มเป้าหมาย</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>ผู้บริหาร ททท</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>หนักงาน ททท ส่วนกลาง</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="activities-content-wrapper d-flex">
        <div className="half-left">
          <div className="d-flex">
            <div className="form-label">
              <label>หมายเหตุ* :</label>
            </div>
            <div className="form-field"></div>
          </div>
        </div>
        <div className="half-right">
          <div className="d-flex">
            <div className="form-label">
              <label>หมายเหตุ* :</label>
            </div>
            <div className="form-field">
              <div className="activity-table-wrapper">
                <div className="table-header">
                  กลุ่มเป้าหมายระดับโครงการ
                  <button className="btn btn-primary add-button">
                    + เพิ่ม
                  </button>
                </div>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">ลำดับที่</th>
                      <th scope="col">แก้ไข</th>
                      <th scope="col">ลบ</th>
                      <th></th>
                      <th scope="col">หมายเหตุ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span className="p-5">ไม่พบรายการข้อมูล</span>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="activities-content-wrapper d-flex">
        <div className="half-left">
          <div className="d-flex">
            <div className="form-label">
              <label>ผู้ที่แก้ไขข้อมูล่าสุด* :</label>
            </div>
            <div className="form-field">
              <div>kom.sata</div>
            </div>
          </div>
        </div>
        <div className="half-right">
          <div className="d-flex">
            <div className="form-label">
              <label>ผู้ที่แก้ไขข้อมูล่าสุด* :</label>
            </div>
            <div className="form-field">
              <div>kom.sata</div>
            </div>
          </div>
        </div>
      </div>
      <div className="activities-content-wrapper d-flex">
        <div className="half-left">
          <div className="edit-update-text">
            วันที่แก้ไขข้อมูลล่าสุด XX/XX/XXXX เวลา xx:xx
          </div>
        </div>
        <div className="half-right">
          <div className="edit-update-text">
            วันที่แก้ไขข้อมูลล่าสุด XX/XX/XXXX เวลา xx:xx
          </div>
        </div>
      </div>
    </>
  );
}
