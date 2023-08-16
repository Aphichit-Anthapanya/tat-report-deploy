"use client";

import React, { useEffect, useState } from "react";
import "./operation-report.scss";
import ReportActivitiesPage from "./ReportActivities/ReportActivities";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { updateFormById } from "@/redux/OperationFollow/service";
import { RootState } from "@/redux/store";
import { FormState } from "@/redux/OperationFollow/types";
import { submitReportDataService } from "@/redux/OperationFollow/service";
import { updateFormField } from "@/redux/OperationFollow/reducer";
import ReportSection1 from "./ReportSection/Report-Section1";
import ReportSection3 from "./ReportSection/Report-Section3";

interface ReportPageProps {
  mode: string;
}

interface OperationReport {
  section1: {
    yearBudget: string;
    budgetSource: string;
    paymentList: string;
    organizationManageMent: string;
    act_group: string;
    strategic_goal: string;
    strategic: string;
    planning: string;
    project_type: string;
    project_name: string;
  };
  section2: {
    budget: string;
    quarter: {
      quarter1: {
        month1: string;
        month2: string;
        month3: string;
        total: string;
        porportion: string;
      };
      quarter2: {
        month1: string;
        month2: string;
        month3: string;
        total: string;
        porportion: string;
      };
      quarter3: {
        month1: string;
        month2: string;
        month3: string;
        total: string;
        porportion: string;
      };
      quarter4: {
        month1: string;
        month2: string;
        month3: string;
        total: string;
        porportion: string;
      };
    };
    suite_outside_policy: {
      isFlagship: boolean;
      isSla: boolean;
      isMainPlan: boolean;
      isPAIndicator: boolean;
      isClosedGap: boolean;
      isNone: boolean;
      isCsrProcess: boolean;
    };
    stakeHolder_Group: {
      isTatStaff: boolean;
      isCustomer: boolean;
      isGovernmentAudit: boolean;
      isSender: boolean;
      isProviderCustomer: boolean;
      isWorkingUnit: boolean;
    };
  };
  section3: {
    principal_reason: string;
    project_objective: {
      objective1: string;
      objective2: string;
      objective3: string;
      objective4: string;
    };
    list_operation_area: Array<{
      indx: string;
      country_area: string;
      province: string;
    }>;
    project_outcome: Array<{
      indx: string;
      name_indicator: string;
      total_percent: string;
      quarter1_percent: string;
      quarter2_percent: string;
      quarter3_percent: string;
      quarter4_percent: string;
    }>;
    project_outcome_field: string;
    project_target: Array<{
      indx: string;
      target_name: string;
    }>;
  };
  section4: {
    project_start: string;
    project_end: string;
    flagship_risk: string;
    risk_prevention: string;
    benefit: string;
  };
  section5: {
    return_roi: string;
    project_type: string;
    goverment_bond: string;
    internal_government_bond: string;
    sepa_protocal: string;
    working_system_suite: string;
    govenment_image: string;
    support_information: string;
    other: string;
    project_risk: string;
  };
  activitiesList: Array<{
    catname: string;
    activity_type: string;
    activity_name: string;
    activity_order: string;
    activity_shared: string;
    act_status: string;
    work_status: string;
    budget: string;
    total_act_budget: string;
  }>;
  activityForm: {
    id: string;
    budget: string;
    catname: string;
    activity_type: string;
    activity_order: string;
    activity_name: string;
    activity_description: string;
    activity_shared: string;
    activity_shared_by_project: string;
    activity_start: string;
    activity_end: string;
    project_outcome: Array<{
      indx: string;
      name_indicator: string;
      total_percent: number;
      quarter1_percent: number;
      quarter2_percent: number;
      quarter3_percent: number;
      quarter4_percent: number;
    }>;
    list_operation_area: Array<{
      indx: string;
      country_area: string;
      province: string;
    }>;
  };
}

export default function ReportPage(props: ReportPageProps) {
  const dispatch = useDispatch();
  let id = '0';
  const params = useParams();
  const formState: FormState = useSelector(
    (state: RootState) => state.operationFollowForm
  );
  const displayButton = props.mode == "view" ? "none" : "unset";
  const router = useRouter();
  const searchParams = useSearchParams();
  const [pageId, setPageId] = useState("0");
  const [isShowSucessMessage, setShowSuccessMessage] = useState(false);

  const [formData, setFormData] = useState<OperationReport>({
    section1: {
      yearBudget: "",
      budgetSource: "",
      paymentList: "",
      organizationManageMent: "",
      act_group: "",
      strategic_goal: "",
      strategic: "",
      planning: "",
      project_type: "",
      project_name: "",
    },
    section2: {
      budget: "",
      quarter: {
        quarter1: {
          month1: "",
          month2: "",
          month3: "",
          total: "",
          porportion: "",
        },
        quarter2: {
          month1: "",
          month2: "",
          month3: "",
          total: "",
          porportion: "",
        },
        quarter3: {
          month1: "",
          month2: "",
          month3: "",
          total: "",
          porportion: "",
        },
        quarter4: {
          month1: "",
          month2: "",
          month3: "",
          total: "",
          porportion: "",
        },
      },
      suite_outside_policy: {
        isFlagship: false,
        isSla: false,
        isMainPlan: false,
        isPAIndicator: false,
        isClosedGap: false,
        isNone: false,
        isCsrProcess: false,
      },
      stakeHolder_Group: {
        isTatStaff: false,
        isCustomer: false,
        isGovernmentAudit: false,
        isSender: false,
        isProviderCustomer: false,
        isWorkingUnit: false,
      },
    },
    section3: {
      principal_reason: "",
      project_objective: {
        objective1: "",
        objective2: "",
        objective3: "",
        objective4: "",
      },
      list_operation_area: [],
      project_outcome: [],
      project_outcome_field: "",
      project_target: [],
    },
    section4: {
      project_start: "",
      project_end: "",
      flagship_risk: "",
      risk_prevention: "",
      benefit: "",
    },
    section5: {
      return_roi: "",
      project_type: "",
      goverment_bond: "",
      internal_government_bond: "",
      sepa_protocal: "",
      working_system_suite: "",
      govenment_image: "",
      support_information: "",
      other: "",
      project_risk: "",
    },
    activitiesList: [],
    activityForm: {
      id: '0',
      budget: "",
      catname: "",
      activity_type: "",
      activity_order: "",
      activity_name: "",
      activity_description: "",
      activity_shared: "",
      activity_shared_by_project: "",
      activity_start: "",
      activity_end: "",
      project_outcome: [],
      list_operation_area: [],
    },
  });

  const handleSubmitReport = () => {
    // submitReportDataService(dispatch, formData);
    router.push("operation-follow/report/view/1?status=success");
  };

  useEffect(() => {
    id = typeof params?.id === "string" ? params?.id : '0';
    if (id != '0') {
      updateFormById(id, dispatch);
    }
    setPageId(id + "");

    setFormData(formState.operationReport);

    if (searchParams.get("status") != null) {
      if (searchParams.get("status") == "success") {
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 5000);
      }
    }
  }, []);

  return (
    <div className="operation-report-wrapper">
      <div
        className={`alert alert-success ${isShowSucessMessage ? "" : "hide"}`}
        role="alert"
      >
        อนุมัติสำเร็จ
      </div>
      <div className="d-flex justify-content-between operation-report-uppermenu">
        <div className="upper-menu-text">
          <h2>
            ระบบข้อมูลแผนปฏิบัติการและการติดตามประเมินผล{" "}
            {isShowSucessMessage == true ? "true" : "false"}
          </h2>
          <h4>เพิ่มแผนสนับสนุนการดำเนินงานด้านการตลาด</h4>
        </div>
        <div className="d-flex upper-menu-button">
          <div className="p-2">
            <button
              onClick={() =>
                router.push("/operation-follow/report/edit/" + pageId)
              }
              style={{
                minWidth: "187px",
                display: props.mode == "view" ? "unset" : "none",
              }}
              className="btn btn-secondary"
            >
              แก้ไชรายงานผล
            </button>
          </div>
          <div
            onClick={() =>
              router.push(
                props.mode == "edit"
                  ? "/operation-follow/report/view/" + pageId
                  : "/operation-follow"
              )
            }
            className="p-2"
          >
            <button
              style={{
                minWidth: "191px",
              }}
              className="btn btn-secondary"
            >
              ย้อนกลับ
            </button>
          </div>
        </div>
      </div>
      <div className="breadcrumb-zone">
        <span>
          นำเข้าข้อมูล {">"} ข้อมูลโครงการของการสนับสนุมการดำเนินการด้านการตลาด{" "}
          {">"} งานระบบสารสนเทศองค์กร {">"}
          โครงการพัฒนาระบบแพลตฟอร์มกลาง ททท.(Single Sign on)
        </span>
      </div>
      <div className="d-flex justify-content-end badge=status-zone">
        <div className="badge-status">อยู่ระหว่างดำเนินการ</div>
      </div>
      <div className="form-wrapper">
        <ReportSection1
          formData={formData}
          setFormData={setFormData}
          mode={props.mode}
        />
        <div className="d-flex">
          <div className="left-section-form">
            <div className="table-summary-wrapper">
              <div className="table-summary-header">
                <span>งบประมาณแยกตามรายเดือน</span>
              </div>
              <div className="table-summary-content">
                <table className="table">
                  <thead>
                    <tr>
                      <th style={{ textAlign: "center" }} scope="col">
                        เดือน
                      </th>
                      <th style={{ textAlign: "center" }} scope="col">
                        ยอดเงิน (บาท)
                      </th>
                      <th style={{ textAlign: "center" }} scope="col">
                        เดือน
                      </th>
                      <th style={{ textAlign: "center" }} scope="col">
                        ยอดเงิน(บาท)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ตุลาคม</td>
                      <td>
                        <input
                          disabled={props.mode == "view"}
                          type="text"
                          className="form-control purchase-project-feild1"
                          placeholder=""
                          id="filterOverall"
                          style={{
                            width: "137px",
                          }}
                        />
                      </td>
                      <td>เมษายน</td>
                      <td>
                        <input
                          disabled={props.mode == "view"}
                          type="text"
                          className="form-control purchase-project-feild1"
                          placeholder=""
                          id="filterOverall"
                          style={{
                            width: "137px",
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>พฤษจิกายน</td>
                      <td>
                        <input
                          disabled={props.mode == "view"}
                          type="text"
                          className="form-control purchase-project-feild1"
                          placeholder=""
                          id="filterOverall"
                          style={{
                            width: "137px",
                          }}
                        />
                      </td>
                      <td>พฤษภาคม</td>
                      <td>
                        <input
                          disabled={props.mode == "view"}
                          type="text"
                          className="form-control purchase-project-feild1"
                          placeholder=""
                          id="filterOverall"
                          style={{
                            width: "137px",
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>ธันวาคม</td>
                      <td>
                        <input
                          disabled={props.mode == "view"}
                          type="text"
                          className="form-control purchase-project-feild1"
                          placeholder=""
                          id="filterOverall"
                          style={{
                            width: "137px",
                          }}
                        />
                      </td>
                      <td>มิถุนายน</td>
                      <td>
                        <input
                          disabled={props.mode == "view"}
                          type="text"
                          className="form-control purchase-project-feild1"
                          placeholder=""
                          id="filterOverall"
                          style={{
                            width: "137px",
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>มกราคม</td>
                      <td>
                        <input
                          disabled={props.mode == "view"}
                          type="text"
                          className="form-control purchase-project-feild1"
                          placeholder=""
                          id="filterOverall"
                          style={{
                            width: "137px",
                          }}
                        />
                      </td>
                      <td>กรกฎาคม</td>
                      <td>
                        <input
                          disabled={props.mode == "view"}
                          type="text"
                          className="form-control purchase-project-feild1"
                          placeholder=""
                          id="filterOverall"
                          style={{
                            width: "137px",
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>กุมภาพันธ์</td>
                      <td>
                        <input
                          disabled={props.mode == "view"}
                          type="text"
                          className="form-control purchase-project-feild1"
                          placeholder=""
                          id="filterOverall"
                          style={{
                            width: "137px",
                          }}
                        />
                      </td>
                      <td>สิงหาคม</td>
                      <td>
                        <input
                          disabled={props.mode == "view"}
                          type="text"
                          className="form-control purchase-project-feild1"
                          placeholder=""
                          id="filterOverall"
                          style={{
                            width: "137px",
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>มีนาคม</td>
                      <td>
                        <input
                          disabled={props.mode == "view"}
                          type="text"
                          className="form-control purchase-project-feild1"
                          placeholder=""
                          id="filterOverall"
                          style={{
                            width: "137px",
                          }}
                        />
                      </td>
                      <td>กันยายน</td>
                      <td>
                        <input
                          disabled={props.mode == "view"}
                          type="text"
                          className="form-control purchase-project-feild1"
                          placeholder=""
                          id="filterOverall"
                          style={{
                            width: "137px",
                          }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="summary-monthly">
                  <span>รวม</span>
                  <span className="summary-result">0.0</span>
                  <span>บาท</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right-section-form">
            <div className="table-summary-wrapper-right">
              <div className="table-summary-header">
                <span>งบประมาณแยกตามรายเดือน</span>
              </div>
              <div className="table-summary-content table-right-section">
                <table className="table">
                  <thead>
                    <tr>
                      <th style={{ textAlign: "center" }} scope="col">
                        เดือน
                      </th>
                      <th style={{ textAlign: "center" }} scope="col">
                        ยอดเงิน(บาท)
                      </th>
                      <th style={{ textAlign: "center" }} scope="col">
                        เดือน
                      </th>
                      <th style={{ textAlign: "center" }} scope="col">
                        ยอดเงิน(บาท)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ตุลาคม</td>
                      <td>
                        <input
                          disabled={props.mode == "view"}
                          type="text"
                          className="form-control purchase-project-feild1"
                          placeholder=""
                          id="filterOverall"
                          style={{
                            width: "137px",
                          }}
                        />
                      </td>
                      <td>เมษายน</td>
                      <td>
                        <input
                          disabled={props.mode == "view"}
                          type="text"
                          className="form-control purchase-project-feild1"
                          placeholder=""
                          id="filterOverall"
                          style={{
                            width: "137px",
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>พฤษจิกายน</td>
                      <td>
                        <input
                          disabled={props.mode == "view"}
                          type="text"
                          className="form-control purchase-project-feild1"
                          placeholder=""
                          id="filterOverall"
                          style={{
                            width: "137px",
                          }}
                        />
                      </td>
                      <td>พฤษภาคม</td>
                      <td>
                        <input
                          disabled={props.mode == "view"}
                          type="text"
                          className="form-control purchase-project-feild1"
                          placeholder=""
                          id="filterOverall"
                          style={{
                            width: "137px",
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>ธันวาคม</td>
                      <td>
                        <input
                          disabled={props.mode == "view"}
                          type="text"
                          className="form-control purchase-project-feild1"
                          placeholder=""
                          id="filterOverall"
                          style={{
                            width: "137px",
                          }}
                        />
                      </td>
                      <td>มิถุนายน</td>
                      <td>
                        <input
                          disabled={props.mode == "view"}
                          type="text"
                          className="form-control purchase-project-feild1"
                          placeholder=""
                          id="filterOverall"
                          style={{
                            width: "137px",
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>มกราคม</td>
                      <td>
                        <input
                          disabled={props.mode == "view"}
                          type="text"
                          className="form-control purchase-project-feild1"
                          placeholder=""
                          id="filterOverall"
                          style={{
                            width: "137px",
                          }}
                        />
                      </td>
                      <td>กรกฎาคม</td>
                      <td>
                        <input
                          disabled={props.mode == "view"}
                          type="text"
                          className="form-control purchase-project-feild1"
                          placeholder=""
                          id="filterOverall"
                          style={{
                            width: "137px",
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>กุมภาพันธ์</td>
                      <td>
                        <input
                          disabled={props.mode == "view"}
                          type="text"
                          className="form-control purchase-project-feild1"
                          placeholder=""
                          id="filterOverall"
                          style={{
                            width: "137px",
                          }}
                        />
                      </td>
                      <td>สิงหาคม</td>
                      <td>
                        <input
                          disabled={props.mode == "view"}
                          type="text"
                          className="form-control purchase-project-feild1"
                          placeholder=""
                          id="filterOverall"
                          style={{
                            width: "137px",
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>มีนาคม</td>
                      <td>
                        <input
                          disabled={props.mode == "view"}
                          type="text"
                          className="form-control purchase-project-feild1"
                          placeholder=""
                          id="filterOverall"
                          style={{
                            width: "137px",
                          }}
                        />
                      </td>
                      <td>กันยายน</td>
                      <td>
                        <input
                          disabled={props.mode == "view"}
                          type="text"
                          className="form-control purchase-project-feild1"
                          placeholder=""
                          id="filterOverall"
                          style={{
                            width: "137px",
                          }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="summary-monthly">
                  <span>รวม</span>
                  <span className="summary-result">0.0</span>
                  <span>บาท</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 20 }} className="d-flex">
          <div className="left-section-form">
            <div className="d-flex">
              <div className="form-label">
                <label>ความคุ้มค่าโครงการ ROI:</label>
              </div>
              <div className="form-field">
                <span>-</span>
              </div>
            </div>
          </div>
          <div className="right-section-form">
            <div className="d-flex">
              <div className="form-label">
                <label>ความคุ้มค่าโครงการ ROI:</label>
              </div>
              <div className="form-field">
                <input
                  disabled={props.mode == "view"}
                  type="text"
                  className="form-control purchase-project-feild1"
                  placeholder=""
                  id="filterOverall"
                  value="-"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div className="left-section-form">
            <div className="d-flex">
              <div className="form-label">
                <label>ความสอดคล้องกับนโยบายภายนอก:</label>
              </div>
              <div className="form-field outside-compatable">
                <div
                  className="outside-compatable-header "
                  style={{ textAlign: "center" }}
                >
                  ความสอดคล้องกับนโยบายภายนอก*
                </div>
                <div className="outside-content d-flex justify-content-center">
                  <div className="outside-col1 p-2">
                    <div className="form-check">
                      <input
                        disabled={props.mode == "view"}
                        className="form-check-input disabled={props.mode == 'view'}"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label className="form-check-label">Big Project</label>
                    </div>
                    <div className="form-check">
                      <input
                        disabled={props.mode == "view"}
                        checked
                        className="form-check-input disabled={props.mode == 'view'}"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label className="form-check-label">Flahship</label>
                    </div>
                    <div className="form-check">
                      <input
                        disabled={props.mode == "view"}
                        className="form-check-input disabled={props.mode == 'view'}"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label className="form-check-label">ผู้ด้อยโอกาศ</label>
                    </div>
                    <div className="form-check">
                      <input
                        disabled={props.mode == "view"}
                        className="form-check-input disabled={props.mode == 'view'}"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label className="form-check-label">เยาวชน</label>
                    </div>
                  </div>
                  <div className="outside-col2 p-2">
                    <div className="form-check">
                      <input
                        disabled={props.mode == "view"}
                        className="form-check-input disabled={props.mode == 'view'}"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label className="form-check-label">Big Project</label>
                    </div>
                    <div className="form-check">
                      <input
                        disabled={props.mode == "view"}
                        className="form-check-input disabled={props.mode == 'view'}"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label className="form-check-label">Flahship</label>
                    </div>
                    <div className="form-check">
                      <input
                        disabled={props.mode == "view"}
                        className="form-check-input disabled={props.mode == 'view'}"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label className="form-check-label">ผู้ด้อยโอกาศ</label>
                    </div>
                    <div className="form-check">
                      <input
                        disabled={props.mode == "view"}
                        className="form-check-input disabled={props.mode == 'view'}"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label className="form-check-label">เยาวชน</label>
                    </div>
                  </div>
                  <div className="outside-col3 p-2">
                    <div className="form-check">
                      <input
                        disabled={props.mode == "view"}
                        className="form-check-input disabled={props.mode == 'view'}"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label className="form-check-label">Big Project</label>
                    </div>
                    <div className="form-check">
                      <input
                        disabled={props.mode == "view"}
                        className="form-check-input disabled={props.mode == 'view'}"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label className="form-check-label">Flahship</label>
                    </div>
                    <div className="form-check">
                      <input
                        disabled={props.mode == "view"}
                        className="form-check-input disabled={props.mode == 'view'}"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label className="form-check-label">ผู้ด้อยโอกาศ</label>
                    </div>
                    <div className="form-check">
                      <input
                        disabled={props.mode == "view"}
                        className="form-check-input disabled={props.mode == 'view'}"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label className="form-check-label">เยาวชน</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-section-form">
            <div className="d-flex">
              <div className="form-label">
                <label>ความสอดคล้องกับนโยบายภายนอก:</label>
              </div>
              <div className="form-field outside-compatable">
                <div
                  className="outside-compatable-header right-section-table-header"
                  style={{ textAlign: "center" }}
                >
                  ความสอดคล้องกับนโยบายภายนอก
                </div>
                <div className="outside-content d-flex justify-content-center">
                  <div className="outside-col1 p-2">
                    <div className="form-check">
                      <input
                        disabled={props.mode == "view"}
                        className="form-check-input disabled={props.mode == 'view'}"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label className="form-check-label">Big Project</label>
                    </div>
                    <div className="form-check">
                      <input
                        disabled={props.mode == "view"}
                        className="form-check-input disabled={props.mode == 'view'}"
                        type="checkbox"
                        checked
                        value=""
                        id="flexCheckChecked"
                      />
                      <label className="form-check-label">Flahship</label>
                    </div>
                    <div className="form-check">
                      <input
                        disabled={props.mode == "view"}
                        className="form-check-input disabled={props.mode == 'view'}"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label className="form-check-label">ผู้ด้อยโอกาศ</label>
                    </div>
                    <div className="form-check">
                      <input
                        disabled={props.mode == "view"}
                        className="form-check-input disabled={props.mode == 'view'}"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label className="form-check-label">เยาวชน</label>
                    </div>
                  </div>
                  <div className="outside-col2 p-2">
                    <div className="form-check">
                      <input
                        disabled={props.mode == "view"}
                        className="form-check-input disabled={props.mode == 'view'}"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label className="form-check-label">Big Project</label>
                    </div>
                    <div className="form-check">
                      <input
                        disabled={props.mode == "view"}
                        className="form-check-input disabled={props.mode == 'view'}"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label className="form-check-label">Flahship</label>
                    </div>
                    <div className="form-check">
                      <input
                        disabled={props.mode == "view"}
                        className="form-check-input disabled={props.mode == 'view'}"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label className="form-check-label">ผู้ด้อยโอกาศ</label>
                    </div>
                    <div className="form-check">
                      <input
                        disabled={props.mode == "view"}
                        className="form-check-input disabled={props.mode == 'view'}"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label className="form-check-label">เยาวชน</label>
                    </div>
                  </div>
                  <div className="outside-col3 p-2">
                    <div className="form-check">
                      <input
                        disabled={props.mode == "view"}
                        className="form-check-input disabled={props.mode == 'view'}"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label className="form-check-label">Big Project</label>
                    </div>
                    <div className="form-check">
                      <input
                        disabled={props.mode == "view"}
                        className="form-check-input disabled={props.mode == 'view'}"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label className="form-check-label">Flahship</label>
                    </div>
                    <div className="form-check">
                      <input
                        disabled={props.mode == "view"}
                        className="form-check-input disabled={props.mode == 'view'}"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label className="form-check-label">ผู้ด้อยโอกาศ</label>
                    </div>
                    <div className="form-check">
                      <input
                        disabled={props.mode == "view"}
                        className="form-check-input disabled={props.mode == 'view'}"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label className="form-check-label">เยาวชน</label>
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
                <label>หลักการและเหตุผล:</label>
              </div>
              <div className="form-field">
                <p>
                  ในปัจจุบันบุคลากรมีความจำเป็นต้อง Login ทุกครั้ง
                  เพื่อเข้าใช้งานระบบสารสนเทศขององค์กร เพื่อใช้ในการปฏิบัติงาน
                  ซึ่งมีระบบอยู่เป็นจำนวนมาก จึงทำให้การเข้าใช้งานระบต่าง ๆ
                  นั้นไม่มีความคล่องตัวในการปฏิบัติงาน ด้วยเหตุนี้
                  จึงควรดำเนินการพัฒนา
                  ระบบที่ให้ผู้ใช้งานสามารถพิสูจน์ตัวตนโดยใช้ Username และ
                  Password เดียวในการเข้าใช้งานทุกระบบที่มีสิทธิ์ด้วยการ Login
                  เพียงครั้งเดียว เป็นการอำนวยความสะดวกให้กับบุคลากร
                  และช่วยให้บริหารจัดการผู้ใช้งานในระบบได้ง่ายขึ้นทั้งนี้เพื่อให้เป็นไปตามแผนวิสาหกิจการท่องเที่ยวแห่งประทศไทย
                  พ.ศ.2566-2570 ตามยุทธศาสตร์ที่ 3
                  เรื่องการยกระดับองค์กรสู่องค์กรสมรรถนะสูง ข้อ 3.2
                  เป็นปรับปรุงการทำงานผ่านการใช้นวัตกรรมและเทคโนโลยีและเพื่อให้เป็นไปตามแผนปฏิบัติการดิจิทัลการท่องเที่ยวแห่งประเทศไทย
                  พ.ศ. 2566-2570 ยุทธศาสตร์ที่ 2
                  พัฒนาและผลักดันการใช้โครงสร้างพื้นฐาน ระบบสารสนเทศ
                  และข้อมูลด้านการตลาด การท่องเที่ยว
                  เพื่อตอบสนองความต้องการของผู้มีส่วนได้ส่วนเสีย
                  จึงมีความจำเป็นต้องจัดทำโครงการพัฒนาแพลตฟอร์มกลาง (องค์กร)
                  ททท. (Single Sign on)
                </p>
              </div>
            </div>
          </div>
          <div className="right-section-form">
            <div className="d-flex">
              <div className="form-label">
                <label>หลักการและเหตุผล:</label>
              </div>
              <div className="form-field">
                <textarea
                  disabled={props.mode == "view"}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={10}
                >
                </textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div className="left-section-form">
            <div className="d-flex">
              <div className="form-label">
                <label>วัตถุประสงค์โครงการ* :</label>
              </div>
              <div className="form-field">
                <p>
                  1. เพื่อให้ ททท.
                  มีระบบรองรับผู้ใช้งานระบบสารสนเทศในการพิสูจน์ตัวตนโดยใช้
                  Username และ Password ในการเข้าใช้งานทุกระบบที่มีสิทธิ์ด้วยการ
                  Login เพียงครั้งเดียว <br />
                  2. เพื่ออำนวยความสะดวกให้กับบุคลากรผู้ใช้งานระบบ
                  <br />
                  3. เพื่อเพิ่มประสิทธิภาพด้านการรักษาความมั่นคงปลอดภัยใน องค์กร
                </p>
              </div>
            </div>
          </div>
          <div className="right-section-form">
            <div className="d-flex">
              <div className="form-label">
                <label>วัตถุประสงค์โครงการ* :</label>
              </div>
              <div className="form-field">
                <textarea
                  disabled={props.mode == "view"}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={10}
                >
                  1. เพื่อให้ ททท.
                  มีระบบรองรับผู้ใช้งานระบบสารสนเทศในการพิสูจน์ตัวตนโดยใช้
                  Username และ Password ในการเข้าใช้งานทุกระบบที่มีสิทธิ์ด้วยการ
                  Login เพียงครั้งเดียว 2.
                  เพื่ออำนวยความสะดวกให้กับบุคลากรผู้ใช้งานระบบ 3.
                  เพื่อเพิ่มประสิทธิภาพด้านการรักษาความมั่นคงปลอดภัยใน องค์กร
                </textarea>
              </div>
            </div>
          </div>
        </div>
        <ReportSection3
          formData={formData}
          setFormData={setFormData}
          mode={props.mode}
        ></ReportSection3>
        <div className="d-flex">
          <div className="left-section-form">
            <div className="d-flex">
              <div className="form-label">
                <label>วันเริ่มโครงการ - วันสิ้นสุดโครงการ*: </label>
              </div>
              <div className="form-field">
                <span>01/12/2565 -{">"} 30/09/2566</span>
              </div>
            </div>
          </div>
          <div className="right-section-form">
            <div className="d-flex">
              <div className="form-label">
                <label>วันเริ่มโครงการ - วันสิ้นสุดโครงการ*: </label>
              </div>
              <div className="form-field">
                <input
                  disabled={props.mode == "view"}
                  type="date"
                  className="form-control"
                  id="exampleFormControlInput disabled={props.mode == 'view'}1"
                  placeholder=""
                  style={{
                    width: "40%",
                    float: "left",
                    marginRight: "15px",
                  }}
                />
                <input
                  disabled={props.mode == "view"}
                  type="date"
                  className="form-control"
                  id="exampleFormControlInput disabled={props.mode == 'view'}1"
                  placeholder=""
                  style={{
                    width: "40%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div className="left-section-form">
            <div className="d-flex">
              <div className="form-label">
                <label>
                  ระบุความเสี่ยงโครงการ (เฉพาะ Flagship ​project/ ถ้าไม่ใช่​
                  Flagship​ Project ให้ใส่เครื่องหมาย​ -)*:{" "}
                </label>
              </div>
              <div className="form-field">
                <span>-</span>
              </div>
            </div>
          </div>
          <div className="right-section-form">
            <div className="d-flex">
              <div className="form-label">
                <label>
                  ระบุความเสี่ยงโครงการ (เฉพาะ Flagship ​project/ ถ้าไม่ใช่​
                  Flagship​ Project ให้ใส่เครื่องหมาย​ -)*:{" "}
                </label>
              </div>
              <div className="form-field">
                <textarea
                  disabled={props.mode == "view"}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={5}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div className="left-section-form">
            <div className="d-flex">
              <div className="form-label">
                <label>มาตรการบริหารความเสี่ยง* : </label>
              </div>
              <div className="form-field">
                <span>-</span>
              </div>
            </div>
          </div>
          <div className="right-section-form">
            <div className="d-flex">
              <div className="form-label">
                <label>มาตรการบริหารความเสี่ยง* : </label>
              </div>
              <div className="form-field">
                <textarea
                  disabled={props.mode == "view"}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={5}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div className="left-section-form">
            <div className="d-flex">
              <div className="form-label">
                <label>ประโยชน์ที่คาดว่าจะได้รับ(Impact)* : </label>
              </div>
              <div className="form-field">
                <span>
                  - ผู้ดูแลระบบสามารถบริหารจัดการผู้ใช้งานในระบบได้ง่ายขึ้น
                  <br />- เพิ่มประสิทธิภาพด้านการรักษาความมั่นคงปลอดภัยในองค์กร
                </span>
              </div>
            </div>
          </div>
          <div className="right-section-form">
            <div className="d-flex">
              <div className="form-label">
                <label>ประโยชน์ที่คาดว่าจะได้รับ(Impact)* : </label>
              </div>
              <div className="form-field">
                <textarea
                  disabled={props.mode == "view"}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={5}
                >
                  ผู้ดูแลระบบสามารถบริหารจัดการผู้ใช้งานในระบบได้ง่ายขึ้น -
                  เพิ่มประสิทธิภาพด้านการรักษาความมั่นคงปลอดภัยในองค์กร
                </textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div className="left-section-form">
            <div className="d-flex"></div>
          </div>
          <div className="right-section-form">
            <div className="d-flex">
              <div className="form-label">
                <label>ปัญหา/อุปสรรคการดำเนินงาน:</label>
              </div>
              <div className="form-field">
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
        <div className="d-flex">
          <div className="left-section-form">
            <div className="d-flex"></div>
          </div>
          <div className="right-section-form">
            <div className="d-flex">
              <div className="form-label">
                <label>ข้อเสนอแนะ/ปรับปรุง การดำเนินงานโครงการ * :</label>
              </div>
              <div className="form-field">
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
        <div className="d-flex">
          <div className="left-section-form">
            <div className="d-flex"></div>
          </div>
          <div className="right-section-form">
            <div className="form-label">
              <label>เอกสารแนบ: </label>
            </div>
            <div className="form-field outside-compatable">
              <div
                className="outside-compatable-header right-section-table-header"
                style={{ textAlign: "center" }}
              >
                เอกสารแนบ
              </div>
              <div className="outside-content justify-content-center">
                <div className="content-header d-flex">
                  <div className="flex-row upload-font-size">ลำดับที่</div>
                  <div className="flex-row upload-font-size">ดาวน์โหลด</div>
                  <div className="flex-row upload-font-size">ชื่อกิจกรรม</div>
                  <div className="flex-row upload-font-size">
                    หัวข้อผลการดำเนินงาน
                  </div>
                  <div className="flex-row upload-font-size">ชื่อเอกสาร</div>
                  <div className="flex-row upload-font-size">ขนาด</div>
                  <div className="flex-row upload-font-size">วันอัพโหลด</div>
                </div>
                <div className="outside-content-row d-flex  justify-content-center">
                  <div
                    style={{
                      marginTop: "5px",
                      marginBottom: "15px",
                    }}
                  >
                    <input
                      disabled={props.mode == "view"}
                      type="file"
                      name="file"
                      style={{
                        position: "relative",
                        left: "29px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="d-flex justify-content-center">
                    <div className="p-3">
                        <button className="btn btn-secondary" type="submit">รายงานผล</button>
                    </div>
                    <div className="p-3">
                        <button className="btn btn-primary" type="submit">เรียกดูรายงาน (View Report)</button>
                    </div>
                    <div className="p-3">
                        <button className="btn btn-secondary" type="submit">ย้อนกลับ</button>
                    </div>
                </div> */}
        <div style={{ marginTop: 20 }} className="table-timeline">
          <table className="table">
            <thead className="table-primary">
              <tr>
                <th style={{ backgroundColor: "#91D5FF", width: "30%" }}></th>
                <th style={{ backgroundColor: "#91D5FF" }}>
                  2022 <br /> ธ.ค.
                </th>
                <th style={{ backgroundColor: "#91D5FF" }}>
                  2023 <br /> ม.ค.
                </th>
                <th style={{ backgroundColor: "#91D5FF" }}>
                  2023 <br /> ก.พ.
                </th>
                <th style={{ backgroundColor: "#91D5FF" }}>
                  2023 <br /> มิ.ย.
                </th>
                <th style={{ backgroundColor: "#91D5FF" }}>
                  2023 <br /> ก.ค.
                </th>
                <th style={{ backgroundColor: "#91D5FF" }}>
                  2023 <br /> ส.ค.
                </th>
                <th style={{ backgroundColor: "#91D5FF" }}>
                  2023 <br /> ก.ย.
                </th>
                <th style={{ backgroundColor: "#91D5FF" }}>
                  2023 <br /> ต.ย
                </th>
                <th style={{ backgroundColor: "#91D5FF" }}>
                  2023 <br /> พ.ย
                </th>
                <th style={{ backgroundColor: "#91D5FF" }}>
                  2023 <br /> ธ.ค.
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>แผน : การจัดซื้อจัดจ้าง (01/12/2565-28/02/2566)</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>ผล : การจัดซื้อจัดจ้าง (01/12/2565-23/03/2566)</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  แผน:ศึกษาความต้องการของผู้ใช้งานและดำเนินการพัฒนาระบบ
                  (01/03/2566-31/08/2566)
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  แผน : ทดสอบการใช้งาน อบรมการใช้ระบบ
                  และเผยแพร่ประชาสัมพันธ์ระบบ และตรวจรับโครงการ
                  (01/07/2566-30/09/2566)
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>แผน : การจัดซื้อจัดจ้าง (01/12/2565-28/02/2566)</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  ผล : ทดสอบการใช้งาน อบรมการใช้ระบบ และเผยแพร่ประชาสัมพันธ์ระบบ
                  และตรวจรับโครงการ
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={{ marginTop: 30 }} className="table-wrapper">
          <div>
            <label style={{ fontWeight: "bold" }}>
              นำเข้าข้อมูล {">"}{" "}
              ข้อมูลกิจกรรมของการสนับสนุนการดำเนินงานด้านการตลาด {">"}{" "}
              งานระบบสารสนเทศองค์กร {">"} โครงการพัฒนาระบบแพลตฟอร์มกลาง ททท.
              (Single Sign on)
            </label>
          </div>
          <div className="table-zone">
            <table className="table">
              <thead className="table-primary">
                <tr>
                  <th style={{ textAlign: "center" }} scope="col">
                    ดูข้อมูล
                  </th>
                  <th style={{ textAlign: "center" }} scope="col">
                    รายงานผล
                  </th>
                  <th style={{ textAlign: "center" }} scope="col">
                    หมวดกิจกรรม
                  </th>
                  <th style={{ textAlign: "center" }} scope="col">
                    ประเภทกิจกรรม
                  </th>
                  <th style={{ textAlign: "center" }} scope="col">
                    ชื่อกิจกรรม
                  </th>
                  <th style={{ textAlign: "center" }} scope="col">
                    ลำดับที่โครงการ
                  </th>
                  <th scope="col">สัดส่วนกิจกรรมต่อโครงการ</th>
                  <th scope="col">สถานะกิจกรรม</th>
                  <th scope="col">งบประมาณโครงการแผน(บาท)</th>
                  <th scope="col">ยอดงบประมาณกิจกรรม</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ textAlign: "center", color: "blue" }}>
                    <i className="bi bi-search"></i>
                  </td>
                  <td style={{ textAlign: "center", color: "blue" }}>
                    <i className="bi bi-file-text-fill"></i>
                  </td>
                  <td>ในแผน</td>
                  <td>สนับสนุนตลาด</td>
                  <td>การจัดซื้อจัดจ้าง</td>
                  <td>1</td>
                  <td>20.0</td>
                  <td>ดำเนินการแล้วเสร็จ</td>
                  <td>รายงานผล</td>
                  <td style={{ textAlign: "center" }} colSpan={2}>
                    7,000,000
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center", color: "blue" }}>
                    <i className="bi bi-search"></i>
                  </td>
                  <td style={{ textAlign: "center", color: "blue" }}>
                    <i className="bi bi-file-text-fill"></i>
                  </td>
                  <td>ในแผน</td>
                  <td>สนับสนุนตลาด</td>
                  <td>การจัดซื้อจัดจ้าง</td>
                  <td>1</td>
                  <td>20.0</td>
                  <td>ดำเนินการแล้วเสร็จ</td>
                  <td>รายงานผล</td>
                  <td style={{ textAlign: "center" }} colSpan={2}>
                    7,000,000
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center", color: "blue" }}>
                    <i className="bi bi-search"></i>
                  </td>
                  <td style={{ textAlign: "center", color: "blue" }}>
                    <i className="bi bi-file-text-fill"></i>
                  </td>
                  <td>ในแผน</td>
                  <td>สนับสนุนตลาด</td>
                  <td>การจัดซื้อจัดจ้าง</td>
                  <td>1</td>
                  <td>20.0</td>
                  <td>ดำเนินการแล้วเสร็จ</td>
                  <td>รายงานผล</td>
                  <td style={{ textAlign: "center" }} colSpan={2}>
                    7,000,000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-center">
            <div className="p-3"></div>
            <div className="p-3">
              <button className="btn btn-primary" type="submit">
                เพิ่มกิจกรรมนอกแผน
              </button>
            </div>
            <div className="p-3"></div>
          </div>
          <ReportActivitiesPage mode={props.mode} />
        </div>
        <div className="d-flex justify-content-center">
          <div className="p-3">
            <button
              style={{ display: props.mode == "view" ? "none" : "unset" }}
              className="btn btn-primary"
              type="submit"
            >
              บันทึกข้อมูลชั่วคราว
            </button>
          </div>
          <div className="p-3">
            <button
              onClick={handleSubmitReport}
              style={{ display: props.mode == "view" ? "none" : "unset" }}
              className="btn btn-primary"
              type="submit"
            >
              อัปเดตรายงานผล
            </button>
          </div>
          <div className="p-3">
            <button
              onClick={() =>
                router.push(
                  props.mode == "edit"
                    ? "/operation-follow/report/view/" + pageId
                    : "/operation-follow"
                )
              }
              className="btn btn-primary"
              type="submit"
            >
              ย้อนกลับ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
