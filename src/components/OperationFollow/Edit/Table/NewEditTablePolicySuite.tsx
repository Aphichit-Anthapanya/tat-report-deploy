"use client";

import { useEffect, useState } from "react";
import React from "react";
import { usePathname } from "next/navigation";
import "../../operation-follow.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { updateFormField, resetForm } from "@/redux/OperationFollow/reducer";
import { checkUserRoleService } from "@/redux/OperationFollow/service";

interface NewEditTablePolicySuiteProps {
  formData: any;
  setFormData: (val: any) => void;
  handleOpenModal: (val: string, section: number) => void;
  isEditStatus: boolean;
}

export default function NewEditTablePolicySuite(
  props: NewEditTablePolicySuiteProps
) {
  const formState = props.formData;
  const dispatch = props.setFormData;
  const role = checkUserRoleService();

  const handleChangeField = (event: any) => {
    const { name, checked } = event.target;

    let updateChecked = {};
    if (name == "isNone" && checked) {
      updateChecked = {
        ...formState.section2.suite_outside_policy,
        [name]: checked,
        isFlagship: false,
        isCsrProcess: false,
        isMainPlan: false,
        isClosedGap: false,
        isSla: false,
        isPAIndicator: false,
        isMainPlanGroup: {
          isStaffManagement: false,
          isMainPlanEducation: false,
          isDigitalEducation: false,
          isTravelSupport: false,
          isLongTermStrategic: false,
          isLongTermEnvironment: false,
          isLongTermForManagement: false,
          isInternalCommunication: false,
        },
        isClosedGapGroup: {
          isBetterVision: false,
          isStrategicPlan: false,
          isRiskManagementPlan: false,
          isStakeHolderFocus: false,
          isCustomerFocus: false,
          isDigitalDevelopment: false,
          isCapitalHumanManage: false,
          isEducationManagement: false,
          isInnovationManangement: false,
          isInternalCheck: false,
        },
      };
    } else {
      updateChecked = {
        ...formState.section2.suite_outside_policy,
        [name]: checked,
      };
    }
    const handleOpenModal = () => {
      props.handleOpenModal("suite_outside_policy", 2);
    };

    // setFormdata(updateChecked);

    // onChangePolicySuite(updateChecked)
    dispatch({
      ...formState,
      section2: {
        ...formState.section2,
        suite_outside_policy: updateChecked,
      },
    });
  };

  const handleSubselect = (event: any, type: string) => {
    const { name, checked } = event.target;

    if (type == "isMainPlanGroup") {
      const updateChecked = {
        ...formState.section2.suite_outside_policy,
        isMainPlanGroup: {
          ...formState.section2.suite_outside_policy.isMainPlanGroup,
          [name]: checked,
        },
      };

      dispatch({
        ...formState,
        section2: {
          ...formState.section2,
          suite_outside_policy: updateChecked,
        },
      });
    }

    if (type == "isClosedGapGroup") {
      const updateChecked = {
        ...formState.section2.suite_outside_policy,
        isClosedGapGroup: {
          ...formState.section2.suite_outside_policy.isClosedGapGroup,
          [name]: checked,
        },
      };

      dispatch({
        ...formState,
        section2: {
          ...formState.section2,
          suite_outside_policy: updateChecked,
        },
      });
    }
  };

  const handleOpenModal = () => {
    props.handleOpenModal("suite_outside_policy", 2);
  };

  useEffect(() => {
    if (!formState.section2.suite_outside_policy.isMainPlan) {
      const updateChecked = {
        ...formState.section2.suite_outside_policy,
        isMainPlanGroup: {
          isStaffManagement: false,
          isMainPlanEducation: false,
          isDigitalEducation: false,
          isTravelSupport: false,
          isLongTermStrategic: false,
          isLongTermEnvironment: false,
          isLongTermForManagement: false,
          isInternalCommunication: false,
        },
      };

      dispatch({
        ...formState,
        section2: {
          ...formState.section2,
          suite_outside_policy: updateChecked,
        },
      });
    }

    if (!formState.section2.suite_outside_policy.isClosedGap) {
      const updateChecked = {
        ...formState.section2.suite_outside_policy,
        isClosedGapGroup: {
          isBetterVision: false,
          isStrategicPlan: false,
          isRiskManagementPlan: false,
          isStakeHolderFocus: false,
          isCustomerFocus: false,
          isDigitalDevelopment: false,
          isCapitalHumanManage: false,
          isEducationManagement: false,
          isInnovationManangement: false,
          isInternalCheck: false,
        },
      };

      dispatch({
        ...formState,
        section2: {
          ...formState.section2,
          suite_outside_policy: updateChecked,
        },
      });
    }
  }, [
    formState.section2.suite_outside_policy.isClosedGap,
    formState.section2.suite_outside_policy.isMainPlan,
  ]);

  return (
    <>
      <div className="table-summary-wrapper table-policy">
        <div className="table-summary-header">
          <span>
            ความสอดคล้องกับนโยบายภายนอก
            {role == "admin" && (
              <i
                onClick={() => handleOpenModal()}
                className="bi bi-pencil-fill comment-icon"
              ></i>
            )}
            {role == "user" && (
              <i
                onClick={() => handleOpenModal()}
                className={`bi bi-exclamation-circle-fill commentex-icon ${
                  formState.section2.comment.suite_outside_policy == ""
                    ? "hide"
                    : ""
                }`}
              ></i>
            )}
          </span>
        </div>
        <div className="table-summary-content">
          <table className="table policy-table">
            <tbody className="editable-stakeholder">
              <tr>
                <td colSpan={2}>
                  <input
                    onChange={(e) => handleChangeField(e)}
                    disabled={
                      !props.isEditStatus ||
                      formState.section2.suite_outside_policy.isNon
                    }
                    className="form-check-input"
                    name="isFlagship"
                    checked={formState.section2.suite_outside_policy.isFlagship}
                    type="checkbox"
                    id="flexCheckChecked"
                  />
                  <label
                    style={{ marginLeft: "10px" }}
                    className="form-check-label"
                  >
                    Flagship Project
                  </label>
                </td>
                <td colSpan={2}>
                  <input
                    disabled={
                      !props.isEditStatus ||
                      formState.section2.suite_outside_policy.isNon
                    }
                    onChange={(e) => handleChangeField(e)}
                    className="form-check-input"
                    type="checkbox"
                    name="isCsrProcess"
                    checked={
                      formState.section2.suite_outside_policy.isCsrProcess
                    }
                    id="flexCheckChecked"
                  />
                  <label
                    style={{ marginLeft: "10px" }}
                    className="form-check-label"
                  >
                    CSR in process
                  </label>
                </td>
              </tr>
              <tr>
                <td colSpan={4}>
                  <div>
                    <input
                      disabled={
                        !props.isEditStatus ||
                        formState.section2.suite_outside_policy.isNon
                      }
                      onChange={(e) => handleChangeField(e)}
                      className="form-check-input"
                      type="checkbox"
                      name="isMainPlan"
                      checked={
                        formState.section2.suite_outside_policy.isMainPlan
                      }
                      id="flexCheckChecked"
                    />
                    <label
                      style={{ marginLeft: "10px" }}
                      className="form-check-label"
                    >
                      แผนแม่บท
                    </label>
                  </div>
                  <div className="sub-selection">
                    <div>
                      <input
                        checked={
                          formState.section2.suite_outside_policy
                            .isMainPlanGroup.isStaffManagement
                        }
                        onChange={(e) => handleSubselect(e, "isMainPlanGroup")}
                        name="isStaffManagement"
                        disabled={
                          !formState.section2.suite_outside_policy.isMainPlan
                        }
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckChecked"
                      />
                      <label
                        style={{ marginLeft: "10px" }}
                        className="form-check-label"
                      >
                        แผนบริหารและพัฒนาทรัพยากรบุคคล ททท.
                      </label>
                    </div>
                    <div>
                      <input
                        checked={
                          formState.section2.suite_outside_policy
                            .isMainPlanGroup.isMainPlanEducation
                        }
                        onChange={(e) => handleSubselect(e, "isMainPlanGroup")}
                        name="isMainPlanEducation"
                        disabled={
                          !formState.section2.suite_outside_policy.isMainPlan
                        }
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckChecked"
                      />
                      <label
                        style={{ marginLeft: "10px" }}
                        className="form-check-label"
                      >
                        แผนแม่บทการบริหารจัดการความรู้ ททท.
                      </label>
                    </div>
                    <div>
                      <input
                        checked={
                          formState.section2.suite_outside_policy
                            .isMainPlanGroup.isDigitalEducation
                        }
                        onChange={(e) => handleSubselect(e, "isMainPlanGroup")}
                        name="isDigitalEducation"
                        disabled={
                          !formState.section2.suite_outside_policy.isMainPlan
                        }
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckChecked"
                      />
                      <label
                        style={{ marginLeft: "10px" }}
                        className="form-check-label"
                      >
                        แผนปฏิบัติการดิจิทัลของ ททท.
                      </label>
                    </div>
                    <div>
                      <input
                        checked={
                          formState.section2.suite_outside_policy
                            .isMainPlanGroup.isTravelSupport
                        }
                        onChange={(e) => handleSubselect(e, "isMainPlanGroup")}
                        name="isTravelSupport"
                        disabled={
                          !formState.section2.suite_outside_policy.isMainPlan
                        }
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckChecked"
                      />
                      <label
                        style={{ marginLeft: "10px" }}
                        className="form-check-label"
                      >
                        แผนแม่บทการเสริมสร้างนวัตกรรมทางการท่องเที่ยว ททท.
                      </label>
                    </div>
                    <div>
                      <input
                        checked={
                          formState.section2.suite_outside_policy
                            .isMainPlanGroup.isLongTermStrategic
                        }
                        onChange={(e) => handleSubselect(e, "isMainPlanGroup")}
                        name="isLongTermStrategic"
                        disabled={
                          !formState.section2.suite_outside_policy.isMainPlan
                        }
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckChecked"
                      />
                      <label
                        style={{ marginLeft: "10px" }}
                        className="form-check-label"
                      >
                        แผนยุทธศาสตร์ด้านผู้มีส่วนได้ส่วนเสียระยะยาว
                      </label>
                    </div>
                    <div>
                      <input
                        checked={
                          formState.section2.suite_outside_policy
                            .isMainPlanGroup.isLongTermEnvironment
                        }
                        onChange={(e) => handleSubselect(e, "isMainPlanGroup")}
                        name="isLongTermEnvironment"
                        disabled={
                          !formState.section2.suite_outside_policy.isMainPlan
                        }
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckChecked"
                      />
                      <span
                        style={{ marginLeft: "10px" }}
                        className="form-check-label"
                      >
                        แผนแม่บทระยะยาวและแผนปฏิบัติการประจำปีด้านการแสดงความรับผิดชอบต่อสังคมและสิ่งแวดล้อมในกระบวนการ
                        (CSR in Process)
                      </span>
                    </div>
                    <div>
                      <input
                        checked={
                          formState.section2.suite_outside_policy
                            .isMainPlanGroup.isLongTermForManagement
                        }
                        onChange={(e) => handleSubselect(e, "isMainPlanGroup")}
                        name="isLongTermForManagement"
                        disabled={
                          !formState.section2.suite_outside_policy.isMainPlan
                        }
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckChecked"
                      />
                      <label
                        style={{ marginLeft: "10px" }}
                        className="form-check-label"
                      >
                        แผนแม่บทระยะยาวด้านการกำกับดูแลกิจการที่ดี ททท. (CG)
                      </label>
                    </div>
                    <div>
                      <input
                        checked={
                          formState.section2.suite_outside_policy
                            .isMainPlanGroup.isInternalCommunication
                        }
                        onChange={(e) => handleSubselect(e, "isMainPlanGroup")}
                        name="isInternalCommunication"
                        disabled={
                          !formState.section2.suite_outside_policy.isMainPlan
                        }
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckChecked"
                      />
                      <label
                        style={{ marginLeft: "10px" }}
                        className="form-check-label"
                      >
                        แผนแม่บทและแผนปฏิบัติการการสื่อสารภายในองค์กร
                      </label>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={4}>
                  <div>
                    <input
                      disabled={
                        !props.isEditStatus ||
                        formState.section2.suite_outside_policy.isNon
                      }
                      onChange={(e) => handleChangeField(e)}
                      className="form-check-input"
                      type="checkbox"
                      name="isClosedGap"
                      checked={
                        formState.section2.suite_outside_policy.isClosedGap
                      }
                      id="flexCheckChecked"
                    />
                    <label
                      style={{ marginLeft: "10px" }}
                      className="form-check-label"
                    >
                      แผนปิดช่องว่าง (Gaps) ตามเกณฑ์ Enablers
                    </label>
                  </div>
                  <div className="sub-selection">
                    <div>
                      <input
                        checked={
                          formState.section2.suite_outside_policy
                            .isClosedGapGroup.isBetterVision
                        }
                        onChange={(e) => handleSubselect(e, "isClosedGapGroup")}
                        name="isBetterVision"
                        disabled={
                          !formState.section2.suite_outside_policy.isClosedGap
                        }
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckChecked"
                      />
                      <label
                        style={{ marginLeft: "10px" }}
                        className="form-check-label"
                      >
                        ด้านที่ 1 การกำกับดูแลที่ดีและการนำองค์กร (CG)
                      </label>
                    </div>
                    <div>
                      <input
                        checked={
                          formState.section2.suite_outside_policy
                            .isClosedGapGroup.isStrategicPlan
                        }
                        onChange={(e) => handleSubselect(e, "isClosedGapGroup")}
                        name="isStrategicPlan"
                        disabled={
                          !formState.section2.suite_outside_policy.isClosedGap
                        }
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckChecked"
                      />
                      <label
                        style={{ marginLeft: "10px" }}
                        className="form-check-label"
                      >
                        ด้านที่ 2 การวางแผนเชิงกลยุทธ์ (SP)
                      </label>
                    </div>
                    <div>
                      <input
                        checked={
                          formState.section2.suite_outside_policy
                            .isClosedGapGroup.isRiskManagementPlan
                        }
                        onChange={(e) => handleSubselect(e, "isClosedGapGroup")}
                        name="isRiskManagementPlan"
                        disabled={
                          !formState.section2.suite_outside_policy.isClosedGap
                        }
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckChecked"
                      />
                      <label
                        style={{ marginLeft: "10px" }}
                        className="form-check-label"
                      >
                        ด้านที่ 3 การบริหารความเสี่ยง และควบคุมภายใน (RM & IC)
                      </label>
                    </div>
                    <div>
                      <input
                        checked={
                          formState.section2.suite_outside_policy
                            .isClosedGapGroup.isStakeHolderFocus
                        }
                        onChange={(e) => handleSubselect(e, "isClosedGapGroup")}
                        name="isStakeHolderFocus"
                        disabled={
                          !formState.section2.suite_outside_policy.isClosedGap
                        }
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckChecked"
                      />
                      <label
                        style={{ marginLeft: "10px" }}
                        className="form-check-label"
                      >
                        ด้านที่ 4.1 การมุ่งเน้นผู้มีส่วนได้ส่วนเสีย (SM)
                      </label>
                    </div>
                    <div>
                      <input
                        checked={
                          formState.section2.suite_outside_policy
                            .isClosedGapGroup.isCustomerFocus
                        }
                        onChange={(e) => handleSubselect(e, "isClosedGapGroup")}
                        name="isCustomerFocus"
                        disabled={
                          !formState.section2.suite_outside_policy.isClosedGap
                        }
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckChecked"
                      />
                      <label
                        style={{ marginLeft: "10px" }}
                        className="form-check-label"
                      >
                        ด้านที่ 4.2 การมุ่งเน้นลูกค้า (CM)
                      </label>
                    </div>
                    <div>
                      <input
                        checked={
                          formState.section2.suite_outside_policy
                            .isClosedGapGroup.isDigitalDevelopment
                        }
                        onChange={(e) => handleSubselect(e, "isClosedGapGroup")}
                        name="isDigitalDevelopment"
                        disabled={
                          !formState.section2.suite_outside_policy.isClosedGap
                        }
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckChecked"
                      />
                      <label
                        style={{ marginLeft: "10px" }}
                        className="form-check-label"
                      >
                        ด้านที่ 5 การพัฒนาเทคโนโลยีดิจิทัล (DT)
                      </label>
                    </div>
                    <div>
                      <input
                        checked={
                          formState.section2.suite_outside_policy
                            .isClosedGapGroup.isCapitalHumanManage
                        }
                        onChange={(e) => handleSubselect(e, "isClosedGapGroup")}
                        name="isCapitalHumanManage"
                        disabled={
                          !formState.section2.suite_outside_policy.isClosedGap
                        }
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckChecked"
                      />
                      <label
                        style={{ marginLeft: "10px" }}
                        className="form-check-label"
                      >
                        ด้านที่ 6 การบริหารทุนมนุษย์ (HCM)
                      </label>
                    </div>
                    <div>
                      <input
                        checked={
                          formState.section2.suite_outside_policy
                            .isClosedGapGroup.isEducationManagement
                        }
                        onChange={(e) => handleSubselect(e, "isClosedGapGroup")}
                        name="isEducationManagement"
                        disabled={
                          !formState.section2.suite_outside_policy.isClosedGap
                        }
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckChecked"
                      />
                      <label
                        style={{ marginLeft: "10px" }}
                        className="form-check-label"
                      >
                        ด้านที่ 7.1 การจัดการความรู้ (KM)
                      </label>
                    </div>
                    <div>
                      <input
                        checked={
                          formState.section2.suite_outside_policy
                            .isClosedGapGroup.isInnovationManangement
                        }
                        onChange={(e) => handleSubselect(e, "isClosedGapGroup")}
                        name="isInnovationManangement"
                        disabled={
                          !formState.section2.suite_outside_policy.isClosedGap
                        }
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckChecked"
                      />
                      <label
                        style={{ marginLeft: "10px" }}
                        className="form-check-label"
                      >
                        ด้านที่ 7.2 การจัดการนวัตกรรม (IM)
                      </label>
                    </div>
                    <div>
                      <input
                        checked={
                          formState.section2.suite_outside_policy
                            .isClosedGapGroup.isInternalCheck
                        }
                        onChange={(e) => handleSubselect(e, "isClosedGapGroup")}
                        name="isInternalCheck"
                        disabled={
                          !formState.section2.suite_outside_policy.isClosedGap
                        }
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckChecked"
                      />
                      <label
                        style={{ marginLeft: "10px" }}
                        className="form-check-label"
                      >
                        ด้านที่ 8 การตรวจสอบภายใน (IA)
                      </label>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <input
                    disabled={
                      !props.isEditStatus ||
                      formState.section2.suite_outside_policy.isNon
                    }
                    onChange={(e) => handleChangeField(e)}
                    className="form-check-input"
                    type="checkbox"
                    name="isSla"
                    checked={formState.section2.suite_outside_policy.isSla}
                    id="flexCheckChecked"
                  />
                  <label
                    style={{ marginLeft: "10px" }}
                    className="form-check-label"
                  >
                    SLA
                  </label>
                </td>
                <td colSpan={2}>
                  <input
                    disabled={
                      !props.isEditStatus ||
                      formState.section2.suite_outside_policy.isNon
                    }
                    onChange={(e) => handleChangeField(e)}
                    className="form-check-input"
                    type="checkbox"
                    name="isPAIndicator"
                    checked={
                      formState.section2.suite_outside_policy.isPAIndicator
                    }
                    id="flexCheckChecked"
                  />
                  <label
                    style={{ marginLeft: "10px" }}
                    className="form-check-label"
                  >
                    ตัวชี้วัดตามบันทึกข้อตกลง (PA)
                  </label>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <input
                    disabled={!props.isEditStatus}
                    onChange={(e) => handleChangeField(e)}
                    className="form-check-input"
                    type="checkbox"
                    name="isNone"
                    checked={formState.section2.suite_outside_policy.isNone}
                    id="flexCheckChecked"
                  />
                  <label
                    style={{ marginLeft: "10px" }}
                    className="form-check-label"
                  >
                    ไม่มี
                  </label>
                </td>
                <td colSpan={2}></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
