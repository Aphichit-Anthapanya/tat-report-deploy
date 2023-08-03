import { FormState } from "@/redux/OperationFollow/types";
import react, { useEffect, useState } from "react";
import { initialState } from "../initial_state";
import React from "react";

interface EditTableProjectTargetProps {
  formData: FormState;
  isEditStatus: boolean;
}

export function EditTableProjectTarget(props: EditTableProjectTargetProps) {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [isEditStatus, setIsEditStatus] = useState(false);
  const [addField, setAddField] = useState({
    indx: "",
    target_name: "",
  });

  const handleAddFormData = () => {
    const newData = {
      indx: formData.section3.project_target.length + 1 + "",
      target_name: addField.target_name,
    };

    let data = formData.section3.project_target;
    data = [...data, newData];

    setFormData({
      ...formData,
      section3: {
        ...formData.section3,
        project_target: data,
      },
    });

    setAddField({
      indx: "",
      target_name: "",
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
    let data = formData.section3.project_target;
    data = data.filter((item: { indx: string }) => item.indx !== id);

    setFormData({
      ...formData,
      section3: {
        ...formData.section3,
        project_target: data,
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
        <span>กลุ่มเป้าหมายระดับโครงการ2</span>
      </div>
      <div className="table-summary-content">
        <table className="table">
          <thead>
            <tr>
              <th style={{ width: "10%" }} scope="col">
                ลำดับที่
              </th>
              <th style={{ width: "10%" }} scope="col"></th>
              <th style={{ textAlign: "center" }} scope="col">
                กลุ่มเป้าหมาย
              </th>
            </tr>
          </thead>
          <tbody>
            {formData.section3.project_target.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <i
                    onClick={() => handleRemoveRow(data.indx)}
                    style={{ color: "red", cursor: "pointer" }}
                    className="bi bi-trash-fill"
                  ></i>
                </td>
                <td>{data.target_name}</td>
              </tr>
            ))}
            <tr>
              <td>{formData.section3.project_target.length + 1}</td>
              <td></td>
              <td>
                <input
                  onChange={(e) => handleChangeField(e)}
                  type="text"
                  name="target_name"
                  value={addField.target_name}
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
                colSpan={3}
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
