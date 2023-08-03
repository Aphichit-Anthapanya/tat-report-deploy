"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "../operation-follow.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { updateFormField, resetForm } from "@/redux/OperationFollow/reducer";

interface TableQuarterProps {
  onChangeStakeHolder: (data: any) => void;
}
export default function TableStakeHolder({
  onChangeStakeHolder,
}: TableQuarterProps) {
  const formState = useSelector(
    (state: RootState) => state.operationFollowForm
  );
  const dispatch = useDispatch();

  const handleChangeField = (event: any) => {
    const { name, checked } = event.target;

    const updateChecked = {
      ...formState.section2.stakeHolder_Group,
      [name]: checked,
    };

    dispatch(
      updateFormField({
        ...formState,
        section2: {
          ...formState.section2,
          stakeHolder_Group: updateChecked,
        },
      })
    );
  };

  return (
    <>
      <div className="table-summary-wrapper table-policy">
        <div className="table-summary-header">
          <span>กลุ่มผู้มีส่วนได้ส่วนเสีย (Stakeholder Group)</span>
        </div>
        <div className="table-summary-content">
          <table className="table policy-table">
            <tbody>
              <tr>
                <td colSpan={2}>
                  <input
                    onChange={(e) => handleChangeField(e)}
                    className="form-check-input"
                    type="checkbox"
                    name="isTatStaff"
                    checked={formState.section2.stakeHolder_Group.isTatStaff}
                    id="flexCheckChecked"
                  />
                  <label
                    style={{ marginLeft: "10px" }}
                    className="form-check-label"
                  >
                    บุคลากรและลูกจ้างของ ททท.
                  </label>
                </td>
                <td colSpan={2}>
                  <input
                    onChange={(e) => handleChangeField(e)}
                    className="form-check-input"
                    type="checkbox"
                    name="isCustomer"
                    checked={formState.section2.stakeHolder_Group.isCustomer}
                    id="flexCheckChecked"
                  />
                  <label
                    style={{ marginLeft: "10px" }}
                    className="form-check-label"
                  >
                    คู่ค้า
                  </label>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <input
                    onChange={(e) => handleChangeField(e)}
                    className="form-check-input"
                    type="checkbox"
                    name="isGovernmentAudit"
                    checked={
                      formState.section2.stakeHolder_Group.isGovernmentAudit
                    }
                    id="flexCheckChecked"
                  />
                  <label
                    style={{ marginLeft: "10px" }}
                    className="form-check-label"
                  >
                    หน่วยงานกำกับดูแล/ผู้ถือหุ้นภาครัฐ
                  </label>
                </td>
                <td colSpan={2}>
                  <input
                    onChange={(e) => handleChangeField(e)}
                    className="form-check-input"
                    type="checkbox"
                    name="isSender"
                    checked={formState.section2.stakeHolder_Group.isSender}
                    id="flexCheckChecked"
                  />
                  <label
                    style={{ marginLeft: "10px" }}
                    className="form-check-label"
                  >
                    ผู้ส่งมอบ
                  </label>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <input
                    onChange={(e) => handleChangeField(e)}
                    className="form-check-input"
                    type="checkbox"
                    name="isProviderCustomer"
                    checked={
                      formState.section2.stakeHolder_Group.isProviderCustomer
                    }
                    id="flexCheckChecked"
                  />
                  <label
                    style={{ marginLeft: "10px" }}
                    className="form-check-label"
                  >
                    ลูกค้า/ผู้ใช้บริการ
                  </label>
                </td>
                <td colSpan={2}>
                  <input
                    onChange={(e) => handleChangeField(e)}
                    className="form-check-input"
                    type="checkbox"
                    name="isWorkingUnit"
                    checked={formState.section2.stakeHolder_Group.isWorkingUnit}
                    id="isWorkingUnit"
                  />
                  <label
                    style={{ marginLeft: "10px" }}
                    className="form-check-label"
                  >
                    คู่ความร่วมมือ
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
