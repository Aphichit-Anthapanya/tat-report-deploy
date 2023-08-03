"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "../operation-follow.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { updateFormField, resetForm } from "@/redux/OperationFollow/reducer";

interface TablePolicySuiteProps {
  onChangePolicySuite: (data: any) => void;
}

export default function TablePolicySuite({
  onChangePolicySuite,
}: TablePolicySuiteProps) {
  const formState = useSelector(
    (state: RootState) => state.operationFollowForm
  );
  const dispatch = useDispatch();

  const handleChangeField = (event: any) => {
    const { name, checked } = event.target;

    const updateChecked = {
      ...formState.section2.suite_outside_policy,
      [name]: checked,
    };

    // setFormdata(updateChecked);

    // onChangePolicySuite(updateChecked)
    dispatch(
      updateFormField({
        ...formState,
        section2: {
          ...formState.section2,
          suite_outside_policy: updateChecked,
        },
      })
    );
  };

  return (
    <>
      <div className="table-summary-wrapper table-policy">
        <div className="table-summary-header">
          <span>ความสอดคล้องกับนโยบายภายนอก </span>
        </div>
        <div className="table-summary-content">
          <table className="table policy-table">
            <tbody>
              <tr>
                <td colSpan={2}>
                  <input
                    onChange={(e) => handleChangeField(e)}
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
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <input
                    onChange={(e) => handleChangeField(e)}
                    className="form-check-input"
                    type="checkbox"
                    name="isMainPlan"
                    checked={formState.section2.suite_outside_policy.isMainPlan}
                    id="flexCheckChecked"
                  />
                  <label
                    style={{ marginLeft: "10px" }}
                    className="form-check-label"
                  >
                    แผนแม่บท
                  </label>
                </td>
                <td colSpan={2}>
                  <input
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
                <td colSpan={2}>
                  <input
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
