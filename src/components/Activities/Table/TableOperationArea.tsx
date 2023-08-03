"use client";

import { useState } from "react";
import "../activities-add.scss";
import React from "react";
import { useDispatch } from "react-redux";
import { removeTableOperationAreaActivityByIdService } from "@/redux/OperationFollow/Section3/service";

interface FormDataItem {
  indx: string;
  country_area: string;
  province: string;
}

interface TableOperationAreaProps {
  onChangeTableOperationArea: (data: any) => void;
}

export default function TableOperationArea({
  onChangeTableOperationArea,
}: TableOperationAreaProps) {
  const [formData, setFormdata] = useState<FormDataItem[]>([]);
  const [addField, setAddField] = useState({
    indx: "",
    country_area: "",
    province: "",
  });
  const dispatch = useDispatch();

  const handleAddFormData = () => {
    const newData = {
      indx: formData.length + 1 + "",
      country_area: addField.country_area,
      province: addField.province,
    };

    setFormdata([...formData, newData]);
    setAddField({
      indx: "",
      country_area: "",
      province: "",
    });

    onChangeTableOperationArea([...formData, newData]);
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
    removeTableOperationAreaActivityByIdService(id, dispatch);
    setFormdata(formData.filter((item: { indx: string }) => item.indx !== id));
  };

  return (
    <>
      <div className="table-summary-wrapper activities">
        <div className="table-summary-header activities">
          <span>พื้นที่ดำเนินกิจกรรม</span>
        </div>
        <div className="table-summary-content">
          <table className="table">
            <thead>
              <tr>
                <th style={{ width: "10%" }} scope="col">
                  ลำดับที่
                </th>
                <th style={{ width: "10%" }} scope="col">
                  ลบ
                </th>
                <th scope="col">พื้นที่/ประเทศ</th>
                <th scope="col">จังหวัด/เมือง</th>
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
                  <td>{data.country_area}</td>
                  <td>{data.province}</td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td>
                  <input
                    onChange={(e) => handleChangeField(e)}
                    type="text"
                    name="country_area"
                    value={addField.country_area}
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
                    name="province"
                    value={addField.province}
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
                  colSpan={4}
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
