import { removeTableProjectTargetByIdService } from "@/redux/OperationFollow/Report/report-service";
import { FormState } from "@/redux/OperationFollow/types";
import { RootState } from "@/redux/store";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface ReportSection3Props {
  formData: any;
  setFormData: (value: any) => void;
  mode: string;
}

export default function ReportSection3(props: ReportSection3Props) {
  const dispatch = useDispatch();
  const formState: FormState = useSelector(
    (state: RootState) => state.operationFollowForm
  );
  const [tableOperationAreaForm, setTableOperationAreaForm] = useState({
    indx: "",
    country_area: "",
    province: "",
  });

  const [tableProjectTargetForm, setTableProjectTargetForm] = useState({
    indx: "",
    target_name: "",
  });

  const handleAddTableOperationArea = () => {
    const newData = {
      indx: props.formData.section3.list_operation_area.length + 1 + "",
      country_area: tableOperationAreaForm.country_area,
      province: tableOperationAreaForm.province,
    };

    props.setFormData({
      ...props.formData,
      section3: {
        ...props.formData.section3,
        list_operation_area: [
          ...props.formData.section3.list_operation_area,
          newData,
        ],
      },
    });

    setTableOperationAreaForm({
      indx: "",
      country_area: "",
      province: "",
    });
  };

  const handleAddProjectTarget = () => {
    const newData = {
      indx: props.formData.section3.project_target.length + 1 + "",
      target_name: tableProjectTargetForm.target_name,
    };

    props.setFormData({
      ...props.formData,
      section3: {
        ...props.formData.section3,
        project_target: [...props.formData.section3.project_target, newData],
      },
    });

    setTableProjectTargetForm({
      indx: "",
      target_name: "",
    });
  };

  const handleRemoveTableOperationAreaRow = (id: string) => {
    let filteredItems = props.formData.section3.list_operation_area.filter(
      (item: { indx: string }) => item.indx !== id
    );
    props.setFormData({
      ...props.formData,
      section3: {
        ...props.formData.section3,
        list_operation_area: filteredItems,
      },
    });
  };

  const handleRemoveProjectTargetRow = (id: string) => {
    let filteredItems = props.formData.section3.project_target.filter(
      (item: { indx: string }) => item.indx !== id
    );
    props.setFormData({
      ...props.formData,
      section3: {
        ...props.formData.section3,
        project_target: filteredItems,
      },
    });
  };

  const handleChangeFieldTableOperationArea = (e: any) => {
    const { name, value } = e.target;

    setTableOperationAreaForm({
      ...tableOperationAreaForm,
      [name]: value,
    });
  };

  const handleChangeFieldTableProjectTarget = (e: any) => {
    const { name, value } = e.target;

    setTableProjectTargetForm({
      ...tableProjectTargetForm,
      [name]: value,
    });
  };

  return (
    <>
      <div className="d-flex">
        <div className="left-section-form">
          <div className="d-flex">
            <div className="form-label">
              <label>พื้นที่ดำเนินโครงการ :</label>
            </div>
            <div className="form-field outside-compatable">
              <div
                className="outside-compatable-header"
                style={{ textAlign: "center" }}
              >
                พื้นที่ดำเนินโครงการ
              </div>
              <div className="outside-content justify-content-center">
                <div className="content-header d-flex">
                  <div className="flex-row">ลำดับที่</div>
                  <div className="flex-row">พื้นที่ประเทศ</div>
                  <div className="flex-row">จังหวัง/เมือง</div>
                </div>
                <div className="outside-content-row d-flex">
                  <div className="flex-row">1</div>
                  <div className="flex-row">ททท.ส่วนกลาง</div>
                  <div className="flex-row">-</div>
                </div>
                <div className="outside-content-row d-flex">
                  <div className="flex-row">2</div>
                  <div className="flex-row">ททท.สำนักสาขาในประเทศ</div>
                  <div className="flex-row">-</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-section-form">
          <div className="d-flex">
            <div className="form-label">
              <label>พื้นที่ดำเนินโครงการ :</label>
            </div>
            <div className="form-field outside-compatable">
              <div
                className="outside-compatable-header right-section-table-header"
                style={{ textAlign: "center" }}
              >
                พื้นที่ดำเนินโครงการ{" "}
                <button
                  onClick={handleAddTableOperationArea}
                  className="btn btn-primary add-button"
                >
                  + เพิ่ม
                </button>
              </div>
              <div className="outside-content justify-content-center">
                <div className="content-header d-flex right-content">
                  <div style={{ width: 50 }}></div>
                  <div className="flex-row">ลำดับที่</div>
                  <div className="flex-row">พื้นที่ประเทศ</div>
                  <div className="flex-row">จังหวัง/เมือง</div>
                </div>
                {props.formData.section3.list_operation_area.map(
                  (item: any, index: number) => (
                    <div className="outside-content-row d-flex">
                      <div style={{ width: 50, textAlign: "right" }}>
                        <i
                          onClick={() =>
                            handleRemoveTableOperationAreaRow(item.indx)
                          }
                          style={{
                            color: "red",
                            cursor: "pointer",
                            textAlign: "center",
                          }}
                          className="bi bi-trash-fill"
                        ></i>
                      </div>
                      <div className="flex-row">
                        {props.formData.section3.list_operation_area.length}
                      </div>
                      <div className="flex-row">{item.country_area}</div>
                      <div className="flex-row">{item.province}</div>
                    </div>
                  )
                )}
                <div className="outside-content-row d-flex">
                  <div style={{ width: 50 }}></div>
                  <div style={{ paddingLeft: 8 }} className="flex-row">
                    {props.formData.section3.list_operation_area.length + 1}
                  </div>
                  <div style={{ padding: 10 }} className="flex-row">
                    <input
                      onChange={(e) => handleChangeFieldTableOperationArea(e)}
                      value={tableOperationAreaForm.country_area}
                      name="country_area"
                      disabled={props.mode == "view"}
                      type="text"
                      className="form-control"
                      placeholder=""
                      id="filterOverall"
                    />
                  </div>
                  <div style={{ padding: 10 }} className="flex-row">
                    <input
                      onChange={(e) => handleChangeFieldTableOperationArea(e)}
                      value={tableOperationAreaForm.province}
                      name="province"
                      disabled={props.mode == "view"}
                      type="text"
                      className="form-control"
                      placeholder=""
                      id="filterOverall"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className="left-section-form">
          <div className="d-flex">
            <div className="form-label">
              <label>สรุปรายละเอียดผลการดำเนินงานของโครงการในภาพรวม: </label>
            </div>
            <div className="form-field">
              <span>-</span>
            </div>
          </div>
        </div>
        <div className="right-section-form">
          <div className="d-flex">
            <div className="form-label">
              <label>สรุปรายละเอียดผลการดำเนินงานของโครงการในภาพรวม: </label>
            </div>
            <div className="form-field">
              <input
                disabled={props.mode == "view"}
                type="text"
                className="form-control"
                id="exampleFormControlInput disabled={props.mode == 'view'}1"
                placeholder=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className="left-section-form">
          <div className="d-flex">
            <div className="form-label">
              <label>ตัวชี้วัดระดับโครงการ(Outcome) :</label>
            </div>
            <div className="form-field outside-compatable">
              <div
                className="outside-compatable-header right-section-table-header"
                style={{ textAlign: "center" }}
              >
                ตัวชี้วัดระดับโครงการ(Outcome)
              </div>
              <div className="outside-content justify-content-center">
                <div className="content-header d-flex">
                  <div className="flex-row">ลำดับที่</div>
                  <div className="flex-row">ตัวชี้วัด</div>
                  <div className="flex-row">รวม (%)</div>
                  <div className="flex-row">ไตรมาสที่ 1 (%)</div>
                  <div className="flex-row">ไตรมาสที่ 2 (%)</div>
                  <div className="flex-row">ไตรมาสที่ 3 (%)</div>
                  <div className="flex-row">ไตรมาสที่ 4 (%)</div>
                </div>
                <div className="outside-content-row d-flex">
                  <div className="flex-row">1</div>
                  <div className="flex-row">
                    ร้อยละความคืบหน้าการดำเนินโครงการ
                  </div>
                  <div className="flex-row">100%</div>
                  <div className="flex-row">
                    <input
                      disabled={props.mode == "view"}
                      type="text"
                      className="form-control purchase-project-feild1 area-operation-field"
                      placeholder=""
                      id="filterOverall"
                    />
                  </div>
                  <div className="flex-row">
                    <input
                      disabled={props.mode == "view"}
                      type="text"
                      className="form-control purchase-project-feild1 area-operation-field"
                      placeholder=""
                      id="filterOverall"
                    />
                  </div>
                  <div className="flex-row">
                    <input
                      disabled={props.mode == "view"}
                      type="text"
                      className="form-control purchase-project-feild1 area-operation-field"
                      placeholder=""
                      id="filterOverall"
                    />
                  </div>
                  <div className="flex-row">
                    <input
                      disabled={props.mode == "view"}
                      type="text"
                      className="form-control purchase-project-feild1 area-operation-field"
                      placeholder=""
                      id="filterOverall"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-section-form">
          <div className="d-flex">
            <div className="form-label">
              <label>ตัวชี้วัดระดับโครงการ(Outcome) :</label>
            </div>
            <div className="form-field outside-compatable">
              <div
                className="outside-compatable-header right-section-table-header"
                style={{ textAlign: "center" }}
              >
                ตัวชี้วัดระดับโครงการ(Outcome){" "}
              </div>
              <div className="outside-content justify-content-center">
                <div className="content-header d-flex right-content">
                  <div className="flex-row">ลำดับที่</div>
                  <div className="flex-row">ตัวชี้วัด</div>
                  <div className="flex-row">รวม (%)</div>
                  <div className="flex-row">ไตรมาสที่ 1 (%)</div>
                  <div className="flex-row">ไตรมาสที่ 2 (%)</div>
                  <div className="flex-row">ไตรมาสที่ 3 (%)</div>
                  <div className="flex-row">ไตรมาสที่ 4 (%)</div>
                </div>
                <div className="outside-content-row d-flex">
                  <div className="flex-row">1</div>
                  <div className="flex-row">
                    ร้อยละความคืบหน้าการดำเนินโครงการ
                  </div>
                  <div className="flex-row">100%</div>
                  <div className="flex-row">
                    <input
                      disabled={props.mode == "view"}
                      type="text"
                      className="form-control purchase-project-feild1 area-operation-field"
                      placeholder=""
                      id="filterOverall"
                    />
                  </div>
                  <div className="flex-row">
                    <input
                      disabled={props.mode == "view"}
                      type="text"
                      className="form-control purchase-project-feild1 area-operation-field"
                      placeholder=""
                      id="filterOverall"
                    />
                  </div>
                  <div className="flex-row">
                    <input
                      disabled={props.mode == "view"}
                      type="text"
                      className="form-control purchase-project-feild1 area-operation-field"
                      placeholder=""
                      id="filterOverall"
                    />
                  </div>
                  <div className="flex-row">
                    <input
                      disabled={props.mode == "view"}
                      type="text"
                      className="form-control purchase-project-feild1 area-operation-field"
                      placeholder=""
                      id="filterOverall"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className="left-section-form">
          <div className="d-flex">
            <div className="form-label">
              <label>ตัวชี้วัดระดับโครงการ(Outcome)*: </label>
            </div>
            <div className="form-field">
              <span>อัตราความพึงพอใจของผู้ใช้งาน ไม่น้อยกว่าร้อยละ 75</span>
            </div>
          </div>
        </div>
        <div className="right-section-form">
          <div className="d-flex">
            <div className="form-label">
              <label>ตัวชี้วัดระดับโครงการ(Outcome)*: </label>
            </div>
            <div className="form-field">
              <input
                disabled={props.mode == "view"}
                type="text"
                className="form-control"
                id="exampleFormControlInput disabled={props.mode == 'view'}1"
                placeholder=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className="left-section-form">
          <div className="d-flex">
            <div className="form-label">
              <label>กลุ่มเป้าหมายระดับโครงการ* :</label>
            </div>
            <div className="form-field outside-compatable">
              <div
                className="outside-compatable-header"
                style={{ textAlign: "center" }}
              >
                กลุ่มเป้าหมายระดับโครงการ
              </div>
              <div className="outside-content justify-content-center">
                <div className="content-header d-flex">
                  <div className="flex-row">ลำดับที่</div>
                  <div
                    className="flex-row"
                    style={{
                      flex: 2,
                    }}
                  >
                    กลุ่มเป้าหมาย
                  </div>
                </div>
                <div className="outside-content-row d-flex">
                  <div className="flex-row">1</div>
                  <div
                    className="flex-row text-align-center"
                    style={{
                      flex: 2,
                    }}
                  >
                    ผู้บริหาร ททท
                  </div>
                </div>
                <div className="outside-content-row d-flex">
                  <div className="flex-row">2</div>
                  <div
                    className="flex-row text-align-center"
                    style={{
                      flex: 2,
                    }}
                  >
                    ผู้บริหาร ททท ส่วนกลาง
                  </div>
                </div>
                <div className="outside-content-row d-flex">
                  <div className="flex-row">3</div>
                  <div
                    className="flex-row text-align-center"
                    style={{
                      flex: 2,
                    }}
                  >
                    ผู้บริหาร ททท สำนักงานสาขาต่างประเทศ
                  </div>
                </div>
                <div className="outside-content-row d-flex">
                  <div className="flex-row">4</div>
                  <div
                    className="flex-row text-align-center"
                    style={{
                      flex: 2,
                    }}
                  >
                    ผู้บริหาร ททท สำนักงานสาขาในประเทศ
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-section-form">
          <div className="d-flex">
            <div className="form-label">
              <label>กลุ่มเป้าหมายระดับโครงการ* :</label>
            </div>
            <div className="form-field outside-compatable">
              <div
                className="outside-compatable-header "
                style={{ textAlign: "center" }}
              >
                กลุ่มเป้าหมายระดับโครงการ{" "}
                <button
                  onClick={handleAddProjectTarget}
                  className="btn btn-primary add-button"
                >
                  + เพิ่ม
                </button>
              </div>
              <div className="outside-content justify-content-left">
                <div className="content-header d-flex right-content">
                  <div style={{ width: 50 }}></div>
                  <div className="flex-row">ลำดับที่</div>
                  <div
                    className="flex-row"
                    style={{
                      flex: 2,
                    }}
                  >
                    กลุ่มเป้าหมาย
                  </div>
                </div>
                {props.formData.section3.project_target.map(
                  (item: any, index: number) => (
                    <div className="outside-content-row d-flex">
                      <div style={{ width: 50, textAlign: "right" }}>
                        <i
                          onClick={() =>
                            handleRemoveProjectTargetRow(item.indx)
                          }
                          style={{
                            color: "red",
                            cursor: "pointer",
                            textAlign: "center",
                          }}
                          className="bi bi-trash-fill"
                        ></i>
                      </div>
                      <div className="flex-row">{index + 1}</div>
                      <div
                        className="flex-row text-align-center"
                        style={{
                          flex: 2,
                        }}
                      >
                        {item.target_name}
                      </div>
                    </div>
                  )
                )}
                <div className="outside-content-row d-flex">
                  <div style={{ width: 50 }}></div>
                  <div style={{ paddingLeft: 4 }} className="flex-row"></div>
                  <div
                    className="flex-row text-align-center"
                    style={{ flex: 2, padding: 10 }}
                  >
                    <input
                      onChange={(e) => handleChangeFieldTableProjectTarget(e)}
                      value={tableProjectTargetForm.target_name}
                      name="target_name"
                      disabled={props.mode == "view"}
                      type="text"
                      className="form-control"
                      placeholder=""
                      id="filterOverall"
                    />
                  </div>
                </div>
                {/* <div className="outside-content-row d-flex">
                                    <div className="flex-row">1</div>
                                    <div className="flex-row text-align-center" style={{
                                        flex: 2
                                    }}>ผู้บริหาร ททท</div>
                                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
