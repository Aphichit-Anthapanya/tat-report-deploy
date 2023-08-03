"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "../operation-follow.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { appendDataToFieldSection3 } from "@/redux/OperationFollow/action";
import { removeTableOperationAreaByIdService } from "@/redux/OperationFollow/Section3/service";

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
  const formState: any = useSelector(
    (state: RootState) => state.operationFollowForm
  );
  const dispatch = useDispatch();

  const [formData, setFormdata] = useState<FormDataItem[]>([]);
  const [addField, setAddField] = useState({
    indx: "",
    country_area: "",
    province: "",
  });

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
    dispatch(
      appendDataToFieldSection3({
        name: "list_operation_area",
        data: newData,
      })
    );

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
    removeTableOperationAreaByIdService(id, dispatch);
    setFormdata(formData.filter((item: { indx: string }) => item.indx !== id));
  };

  useEffect(() => {
    setFormdata(formState.section3.list_operation_area);
  }, []);

  return (
    <>
      <div className="table-summary-wrapper">
        <div className="table-summary-header">
          <span>พื้นที่ดำเนินโครงการ</span>
        </div>
        <div className="table-summary-content">
          <table className="table">
            <thead>
              <tr>
                <th style={{ width: "10%" }} scope="col">
                  ลำดับที่
                </th>
                <th style={{ width: "10%" }} scope="col"></th>
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
                      onClick={() => handleRemoveRow(data.indx + "")}
                      style={{ color: "red", cursor: "pointer" }}
                      className="bi bi-trash-fill"
                    ></i>
                  </td>
                  <td>{data.country_area}</td>
                  <td>{data.province}</td>
                </tr>
              ))}
              <tr>
                <td>{formData.length + 1}</td>
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
