import { FormState } from "@/redux/OperationFollow/types";
import react, { useEffect, useState } from "react";
import { initialState } from "../initial_state";

interface TablePolicySuiteProps {
  formData: FormState;
  isEditStatus: boolean;
}

export default function TablePolicySuite(props: TablePolicySuiteProps) {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [isEditStatus, setIsEditStatus] = useState(false);

  const handleChangeField = (event: any) => {
    const { name, checked } = event.target;

    const updateChecked = {
      ...formData.section2.suite_outside_policy,
      [name]: checked,
    };

    setFormData({
      ...formData,
      section2: {
        ...formData.section2,
        suite_outside_policy: updateChecked,
      },
    });
  };

  useEffect(() => {
    setIsEditStatus(props.isEditStatus);
  }, [props.isEditStatus]);

  useEffect(() => {
    setFormData(props.formData);
  }, [props.formData]);

  return (
    <>
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
                  checked={formData.section2.suite_outside_policy.isFlagship}
                  disabled={!isEditStatus}
                  className="form-check-input"
                  name="isFlagship"
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
                  checked={formData.section2.suite_outside_policy.isClosedGap}
                  disabled={!isEditStatus}
                  className="form-check-input"
                  type="checkbox"
                  name="isClosedGap"
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
                  checked={formData.section2.suite_outside_policy.isMainPlan}
                  disabled={!isEditStatus}
                  className="form-check-input"
                  type="checkbox"
                  name="isMainPlan"
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
                  checked={formData.section2.suite_outside_policy.isCsrProcess}
                  disabled={!isEditStatus}
                  className="form-check-input"
                  type="checkbox"
                  name="isCsrProcess"
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
                  checked={formData.section2.suite_outside_policy.isSla}
                  disabled={!isEditStatus}
                  className="form-check-input"
                  type="checkbox"
                  name="isSla"
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
                  checked={formData.section2.suite_outside_policy.isPAIndicator}
                  disabled={!isEditStatus}
                  className="form-check-input"
                  type="checkbox"
                  name="isPAIndicator"
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
                  checked={formData.section2.suite_outside_policy.isNone}
                  disabled={!isEditStatus}
                  className="form-check-input"
                  type="checkbox"
                  name="isNone"
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
    </>
  );
}
