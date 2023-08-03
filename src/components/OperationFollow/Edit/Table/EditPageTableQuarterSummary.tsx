import { FormState } from "@/redux/OperationFollow/types";
import react, { useEffect, useState } from "react";
import { initialState } from "../initial_state";

interface TableQuarterProps {
  formData: FormState;
  isEditStatus: boolean;
}

export default function TableQuarterSummary(props: TableQuarterProps) {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [isEditStatus, setIsEditStatus] = useState(false);

  const handleChangeTableQuarter = (e: any, quarter: string) => {
    const { name, value } = e.target;

    if (quarter === "quarter1") {
      console.log("come hter");
      setFormData({
        ...formData,
        section2: {
          ...formData.section2,
          quarter: {
            ...formData.section2.quarter,
            quarter1: {
              ...formData.section2.quarter.quarter1,
              [name]: value,
            },
          },
        },
      });
    }

    if (quarter === "quarter2") {
      setFormData({
        ...formData,
        section2: {
          ...formData.section2,
          quarter: {
            ...formData.section2.quarter,
            quarter2: {
              ...formData.section2.quarter.quarter2,
              [name]: value,
            },
          },
        },
      });
    }

    if (quarter === "quarter3") {
      setFormData({
        ...formData,
        section2: {
          ...formData.section2,
          quarter: {
            ...formData.section2.quarter,
            quarter3: {
              ...formData.section2.quarter.quarter3,
              [name]: value,
            },
          },
        },
      });
    }

    if (quarter === "quarter4") {
      setFormData({
        ...formData,
        section2: {
          ...formData.section2,
          quarter: {
            ...formData.section2.quarter,
            quarter4: {
              ...formData.section2.quarter.quarter4,
              [name]: value,
            },
          },
        },
      });
    }
  };

  const handleBlurTableQuarter = (e: any, quarter: string) => {
    const { name, value } = e.target;

    if (quarter === "quarter1") {
      console.log("come hter");
      setFormData({
        ...formData,
        section2: {
          ...formData.section2,
          quarter: {
            ...formData.section2.quarter,
            quarter1: {
              ...formData.section2.quarter.quarter1,
              [name]: formattedValue(value),
            },
          },
        },
      });
    }

    if (quarter === "quarter2") {
      setFormData({
        ...formData,
        section2: {
          ...formData.section2,
          quarter: {
            ...formData.section2.quarter,
            quarter2: {
              ...formData.section2.quarter.quarter2,
              [name]: formattedValue(value),
            },
          },
        },
      });
    }

    if (quarter === "quarter3") {
      setFormData({
        ...formData,
        section2: {
          ...formData.section2,
          quarter: {
            ...formData.section2.quarter,
            quarter3: {
              ...formData.section2.quarter.quarter3,
              [name]: formattedValue(value),
            },
          },
        },
      });
    }

    if (quarter === "quarter4") {
      setFormData({
        ...formData,
        section2: {
          ...formData.section2,
          quarter: {
            ...formData.section2.quarter,
            quarter4: {
              ...formData.section2.quarter.quarter4,
              [name]: formattedValue(value),
            },
          },
        },
      });
    }
  };

  const formattedValue = (value: string) => {
    if (value === "" || Number.isNaN(value)) {
      return 0;
    } else {
      value = value.replace(",", "");
      const result = Number(value).toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      return result;
    }
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
                ยอดเงิน (บาท)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ตุลาคม</td>
              <td>
                <input
                  disabled={!isEditStatus}
                  type="text"
                  className="form-control purchase-project-feild1"
                  placeholder=""
                  id="filterOverall"
                  style={{
                    width: "137px",
                  }}
                  onChange={(e) => handleChangeTableQuarter(e, "quarter1")}
                  onBlur={(e) => handleBlurTableQuarter(e, "quarter1")}
                  name="month1"
                  value={
                    isEditStatus
                      ? formData.section2?.quarter?.quarter1?.month1
                      : formattedValue(
                          formData.section2?.quarter?.quarter1?.month1
                        )
                  }
                />
              </td>
              <td>เมษายน</td>
              <td>
                <input
                  onChange={(e) => handleChangeTableQuarter(e, "quarter3")}
                  onBlur={(e) => handleBlurTableQuarter(e, "quarter3")}
                  name="month1"
                  value={
                    isEditStatus
                      ? formData.section2?.quarter?.quarter3?.month1
                      : formattedValue(
                          formData.section2?.quarter?.quarter3?.month1
                        )
                  }
                  disabled={!isEditStatus}
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
                  disabled={!isEditStatus}
                  onChange={(e) => handleChangeTableQuarter(e, "quarter1")}
                  onBlur={(e) => handleBlurTableQuarter(e, "quarter1")}
                  name="month2"
                  value={
                    isEditStatus
                      ? formData.section2?.quarter?.quarter1?.month2
                      : formattedValue(
                          formData.section2?.quarter?.quarter1?.month2
                        )
                  }
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
                  onChange={(e) => handleChangeTableQuarter(e, "quarter3")}
                  onBlur={(e) => handleBlurTableQuarter(e, "quarter3")}
                  name="month2"
                  value={
                    isEditStatus
                      ? formData.section2?.quarter?.quarter3?.month2
                      : formattedValue(
                          formData.section2?.quarter?.quarter3?.month2
                        )
                  }
                  disabled={!isEditStatus}
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
                  disabled={!isEditStatus}
                  onChange={(e) => handleChangeTableQuarter(e, "quarter1")}
                  onBlur={(e) => handleBlurTableQuarter(e, "quarter1")}
                  name="month3"
                  value={
                    isEditStatus
                      ? formData.section2?.quarter?.quarter1?.month3
                      : formattedValue(
                          formData.section2?.quarter?.quarter1?.month3
                        )
                  }
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
                  onChange={(e) => handleChangeTableQuarter(e, "quarter3")}
                  onBlur={(e) => handleBlurTableQuarter(e, "quarter3")}
                  name="month3"
                  value={
                    isEditStatus
                      ? formData.section2?.quarter?.quarter3?.month3
                      : formattedValue(
                          formData.section2?.quarter?.quarter3?.month3
                        )
                  }
                  disabled={!isEditStatus}
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
                  onChange={(e) => handleChangeTableQuarter(e, "quarter2")}
                  onBlur={(e) => handleBlurTableQuarter(e, "quarter2")}
                  name="month1"
                  value={
                    isEditStatus
                      ? formData.section2?.quarter?.quarter2?.month1
                      : formattedValue(
                          formData.section2?.quarter?.quarter2?.month1
                        )
                  }
                  disabled={!isEditStatus}
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
                  onChange={(e) => handleChangeTableQuarter(e, "quarter4")}
                  onBlur={(e) => handleBlurTableQuarter(e, "quarter4")}
                  name="month1"
                  value={
                    isEditStatus
                      ? formData.section2?.quarter?.quarter4?.month1
                      : formattedValue(
                          formData.section2?.quarter?.quarter4?.month1
                        )
                  }
                  disabled={!isEditStatus}
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
                  onChange={(e) => handleChangeTableQuarter(e, "quarter2")}
                  onBlur={(e) => handleBlurTableQuarter(e, "quarter2")}
                  name="month2"
                  value={
                    isEditStatus
                      ? formData.section2?.quarter?.quarter2?.month2
                      : formattedValue(
                          formData.section2?.quarter?.quarter2?.month2
                        )
                  }
                  disabled={!isEditStatus}
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
                  onChange={(e) => handleChangeTableQuarter(e, "quarter4")}
                  onBlur={(e) => handleBlurTableQuarter(e, "quarter4")}
                  name="month2"
                  value={
                    isEditStatus
                      ? formData.section2?.quarter?.quarter4?.month2
                      : formattedValue(
                          formData.section2?.quarter?.quarter4?.month2
                        )
                  }
                  disabled={!isEditStatus}
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
                  onChange={(e) => handleChangeTableQuarter(e, "quarter2")}
                  onBlur={(e) => handleBlurTableQuarter(e, "quarter2")}
                  name="month3"
                  value={
                    isEditStatus
                      ? formData.section2?.quarter?.quarter2?.month3
                      : formattedValue(
                          formData.section2?.quarter?.quarter2?.month3
                        )
                  }
                  disabled={!isEditStatus}
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
                  onChange={(e) => handleChangeTableQuarter(e, "quarter4")}
                  onBlur={(e) => handleBlurTableQuarter(e, "quarter4")}
                  name="month3"
                  value={
                    isEditStatus
                      ? formData.section2?.quarter?.quarter4?.month3
                      : formattedValue(
                          formData.section2?.quarter?.quarter4?.month3
                        )
                  }
                  disabled={!isEditStatus}
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
    </>
  );
}
