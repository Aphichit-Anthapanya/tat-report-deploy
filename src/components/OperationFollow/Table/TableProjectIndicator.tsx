"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "../operation-follow.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { appendDataToFieldSection3 } from "@/redux/OperationFollow/action";
import { removeTableProjectIndicatorByIdService } from "@/redux/OperationFollow/Section3/service";

interface TableProjectIndicatorProps {
  onChangeTableProjectIndicator: (data: any) => void;
}

interface FormDataItem {
  indx: string;
  name_indicator: string;
  total_percent: number;
  quarter1_percent: number;
  quarter2_percent: number;
  quarter3_percent: number;
  quarter4_percent: number;
}

export default function TableProjectIndicator({
  onChangeTableProjectIndicator,
}: TableProjectIndicatorProps) {
  const formState: any = useSelector(
    (state: RootState) => state.operationFollowForm
  );
  const dispatch = useDispatch();
  // name_indicator: string;
  // total_percent: number;
  // quarter1_percent: number;
  // quarter2_percent: number;
  // quarter3_percent: number;
  const [formData, setFormdata] = useState<FormDataItem[]>([]);
  const [addField, setAddField] = useState({
    indx: "",
    name_indicator: "",
    quarter1_percent: 0,
    quarter2_percent: 0,
    quarter3_percent: 0,
    quarter4_percent: 0,
  });

  const handleAddFormData = () => {
    const newData = {
      indx: formData.length + 1 + "",
      name_indicator: addField.name_indicator,
      total_percent: 7,
      quarter1_percent: addField.quarter1_percent,
      quarter2_percent: addField.quarter2_percent,
      quarter3_percent: addField.quarter3_percent,
      quarter4_percent: addField.quarter4_percent,
    };

    setFormdata([...formData, newData]);
    setAddField({
      indx: "",
      name_indicator: "",
      quarter1_percent: 0,
      quarter2_percent: 0,
      quarter3_percent: 0,
      quarter4_percent: 0,
    });

    dispatch(
      appendDataToFieldSection3({
        name: "project_outcome",
        data: newData,
      })
    );

    onChangeTableProjectIndicator([...formData, newData]);
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
    removeTableProjectIndicatorByIdService(id, dispatch);
    setFormdata(formData.filter((item: { indx: string }) => item.indx !== id));
  };

  useEffect(() => {
    setFormdata(formState.section3.project_outcome);
  }, []);

  return (
    <>
      <div className="table-summary-wrapper table-project-indicator">
        <div className="table-summary-header">
          <span>ตัวชี้วัดระดับโครงการ (Outcome)</span>
        </div>
        <div className="table-summary-content">
          <table className="table">
            <thead>
              <tr>
                <th style={{ width: "10%" }} scope="col">
                  ลำดับที่
                </th>
                <th></th>
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
                  <td>{data.name_indicator}</td>
                  <td>{data.total_percent}</td>
                  <td>{data.quarter1_percent}</td>
                  <td>{data.quarter2_percent}</td>
                  <td>{data.quarter3_percent}</td>
                  <td>{data.quarter4_percent}</td>
                </tr>
              ))}
              <tr>
                <td>{formData.length + 1}</td>
                <td></td>
                <td>
                  <input
                    onChange={(e) => handleChangeField(e)}
                    name="name_indicator"
                    value={addField.name_indicator}
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
                    onChange={(e) => handleChangeField(e)}
                    type="text"
                    name="quarter1_percent"
                    value={addField.quarter1_percent}
                    className="form-control purchase-project-feild1"
                    placeholder=""
                    id="filterOverall"
                    style={{ width: "80%", margin: "auto" }}
                  />
                </td>
                <td>
                  <input
                    onChange={(e) => handleChangeField(e)}
                    type="text"
                    name="quarter2_percent"
                    value={addField.quarter2_percent}
                    className="form-control purchase-project-feild1"
                    placeholder=""
                    id="filterOverall"
                    style={{ width: "80%", margin: "auto" }}
                  />
                </td>
                <td>
                  <input
                    onChange={(e) => handleChangeField(e)}
                    type="text"
                    name="quarter3_percent"
                    value={addField.quarter3_percent}
                    className="form-control purchase-project-feild1"
                    placeholder=""
                    id="filterOverall"
                    style={{ width: "80%", margin: "auto" }}
                  />
                </td>
                <td>
                  <input
                    onChange={(e) => handleChangeField(e)}
                    type="text"
                    name="quarter4_percent"
                    value={addField.quarter4_percent}
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
                  colSpan={7}
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
