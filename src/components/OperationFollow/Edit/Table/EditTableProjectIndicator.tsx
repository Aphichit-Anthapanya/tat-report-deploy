import { FormState } from "@/redux/OperationFollow/types";
import react, { useEffect, useState } from "react";
import { initialState } from "../initial_state";
import React from "react";

interface EditTableProjectIndicatorProps {
  formData: FormState;
  isEditStatus: boolean;
}

export function EditTableProjectIndicator(
  props: EditTableProjectIndicatorProps
) {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [isEditStatus, setIsEditStatus] = useState(false);
  const [addField, setAddField] = useState({
    indx: "",
    name_indicator: "",
    total_percent: "",
    quarter1_percent: "",
    quarter2_percent: "",
    quarter3_percent: "",
    quarter4_percent: "",
  });

  const handleAddFormData = () => {
    const newData = {
      indx: formData.section3.project_outcome.length + 1 + "",
      name_indicator: addField.name_indicator,
      total_percent: "7",
      quarter1_percent: addField.quarter1_percent,
      quarter2_percent: addField.quarter2_percent,
      quarter3_percent: addField.quarter3_percent,
      quarter4_percent: addField.quarter4_percent,
    };

    let data = formData.section3.project_outcome;
    data = [...data, newData];

    setFormData({
      ...formData,
      section3: {
        ...formData.section3,
        project_outcome: data,
      },
    });

    setAddField({
      indx: "",
      total_percent: "",
      name_indicator: "",
      quarter1_percent: "",
      quarter2_percent: "",
      quarter3_percent: "",
      quarter4_percent: "",
    });
  };

  const handleChangeField = (event: any) => {
    const { name, value } = event.target;

    const updateChecked = {
      ...addField,
      [name]: value,
    };

    setAddField(updateChecked);
  };

  const handleRemoveRow = (id: string) => {
    let data = formData.section3.project_outcome;
    data = data.filter((item: { indx: string }) => item.indx !== id);

    setFormData({
      ...formData,
      section3: {
        ...formData.section3,
        project_outcome: data,
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
      <div className="table-summary-header activities">
        <span>ตัวชี้วัดระดับกิจกรรม(Output)</span>
      </div>
      <div className="table-summary-content">
        <table className="table">
          <thead>
            <tr>
              <th style={{ width: "10%" }} scope="col">
                ลำดับที่
              </th>
              <th style={{ width: "10%" }}></th>
              <th style={{ width: "20%" }} scope="col">
                ชื่อตัวชี้วัด
              </th>
              <th style={{ width: "10%" }} scope="col">
                รวม (%)
              </th>
              <th scope="col">ไตรมาสที่1 (%)</th>
              <th scope="col">ไตรมาสที่2 (%)</th>
              <th scope="col">ไตรมาสที่3 (%)</th>
              <th scope="col">ไตรมาสที่4 (%)</th>
            </tr>
          </thead>
          <tbody>
            {formData.section3.project_outcome.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <i
                    onClick={() => handleRemoveRow(data.indx)}
                    style={{ color: "red", cursor: "pointer" }}
                    className="bi bi-trash-fill"
                  ></i>
                </td>
                <td>{data.name_indicator}</td>
                <td>{data.total_percent}</td>
                <td>{data.quarter1_percent}</td>
                <td>{data.quarter2_percent}</td>
                <td>{data.quarter3_percent}</td>
                <td>{data.quarter4_percent}</td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              <td>
                <input
                  value={addField.name_indicator}
                  onChange={(e) => handleChangeField(e)}
                  name="name_indicator"
                  disabled={!isEditStatus}
                  type="text"
                  className="form-control purchase-project-feild1"
                  placeholder=""
                  id="filterOverall"
                  style={{ width: "80%", margin: "auto" }}
                />
              </td>
              <td></td>
              <td>
                <input
                  value={addField.quarter1_percent}
                  onChange={(e) => handleChangeField(e)}
                  disabled={!isEditStatus}
                  type="text"
                  name="quarter1_percent"
                  className="form-control purchase-project-feild1"
                  placeholder=""
                  id="filterOverall"
                  style={{ width: "80%", margin: "auto" }}
                />
              </td>
              <td>
                <input
                  value={addField.quarter2_percent}
                  onChange={(e) => handleChangeField(e)}
                  disabled={!isEditStatus}
                  type="text"
                  name="quarter2_percent"
                  className="form-control purchase-project-feild1"
                  placeholder=""
                  id="filterOverall"
                  style={{ width: "80%", margin: "auto" }}
                />
              </td>
              <td>
                <input
                  value={addField.quarter3_percent}
                  onChange={(e) => handleChangeField(e)}
                  disabled={!isEditStatus}
                  type="text"
                  name="quarter3_percent"
                  className="form-control purchase-project-feild1"
                  placeholder=""
                  id="filterOverall"
                  style={{ width: "80%", margin: "auto" }}
                />
              </td>
              <td>
                <input
                  value={addField.quarter4_percent}
                  onChange={(e) => handleChangeField(e)}
                  disabled={!isEditStatus}
                  type="text"
                  name="quarter4_percent"
                  className="form-control purchase-project-feild1"
                  placeholder=""
                  id="filterOverall"
                  style={{ width: "80%", margin: "auto" }}
                />
              </td>
            </tr>
            <tr>
              <td
                style={{ textAlign: "center", fontWeight: "bold" }}
                colSpan={8}
              >
                <button
                  onClick={handleAddFormData}
                  className="btn btn-primary"
                  type="submit"
                >
                  <i className="bi bi-file-earmark-plus"></i> เพิ่ม
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
