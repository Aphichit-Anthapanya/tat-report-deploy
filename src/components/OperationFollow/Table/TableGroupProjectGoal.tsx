"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "../operation-follow.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { appendDataToFieldSection3 } from "@/redux/OperationFollow/action";
import { removeTableProjectGoalByIdService } from "@/redux/OperationFollow/Section3/service";

interface FormDataItem {
  indx: string;
  target_name: string;
}

interface TableProjectIndicatorProps {
  onChangeTableGroupProjectGoal: (data: any) => void;
}

interface FormDataItem {
  indx: string;
  target_name: string;
}

export default function TableGroupProjectGoal({
  onChangeTableGroupProjectGoal,
}: TableProjectIndicatorProps) {
  const formState: any = useSelector(
    (state: RootState) => state.operationFollowForm
  );
  const dispatch = useDispatch();

  const [formData, setFormdata] = useState<FormDataItem[]>([]);

  const [addField, setAddField] = useState({
    indx: "",
    target_name: "",
  });

  const handleAddFormData = () => {
    const newData = {
      indx: formData.length + 1 + "",
      target_name: addField.target_name,
    };

    setFormdata([...formData, newData]);
    setAddField({
      indx: "",
      target_name: "",
    });

    dispatch(
      appendDataToFieldSection3({
        name: "project_target",
        data: newData,
      })
    );

    onChangeTableGroupProjectGoal([...formData, newData]);
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
    removeTableProjectGoalByIdService(id, dispatch);
    setFormdata(formData.filter((item: { indx: string }) => item.indx !== id));
  };

  useEffect(() => {
    setFormdata(formState.section3.project_target);
  }, []);

  return (
    <>
      <div className="table-summary-wrapper">
        <div className="table-summary-header">
          <span>กลุ่มเป้าหมายระดับโครงการ</span>
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
              {formData.map((data, index) => (
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
                <td>{formData.length + 1}</td>
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
      </div>
    </>
  );
}
