import { FormState } from "@/redux/OperationFollow/types";
import react, { useEffect, useState } from "react";
import { initialState } from "../initial_state";

interface TableOperationAreaProps {
  formData: FormState;
  isEditStatus: boolean;
}

export function EditTableOperationArea(props: TableOperationAreaProps) {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [isEditStatus, setIsEditStatus] = useState(false);
  const [addField, setAddField] = useState({
    indx: "",
    country_area: "",
    province: "",
  });

  const handleRemoveRow = (id: string) => {
    let data = formData.section3.list_operation_area;
    data = data.filter((item: { indx: string }) => item.indx !== id);

    setFormData({
      ...formData,
      section3: {
        ...formData.section3,
        list_operation_area: data,
      },
    });
  };

  const handleAddRow = () => {
    const newData = {
      indx: formData.section3.list_operation_area.length + 1 + "",
      country_area: addField.country_area,
      province: addField.province,
    };

    let data = formData.section3.list_operation_area;
    data = [...data, newData];

    setFormData({
      ...formData,
      section3: {
        ...formData.section3,
        list_operation_area: data,
      },
    });

    setAddField({
      indx: "",
      country_area: "",
      province: "",
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

  useEffect(() => {
    setIsEditStatus(props.isEditStatus);
  }, [props.isEditStatus]);

  useEffect(() => {
    setFormData(props.formData);
  }, [props.formData]);

  return (
    <>
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
            {formData.section3.list_operation_area.map((data, index) => (
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
                  value={addField.country_area}
                  onChange={(e) => handleChangeField(e)}
                  name="country_area"
                  disabled={!isEditStatus}
                  type="text"
                  className="form-control purchase-project-feild1"
                  placeholder=""
                  id="filterOverall"
                  style={{ width: "80%", margin: "auto" }}
                />
              </td>
              <td>
                <input
                  value={addField.province}
                  onChange={(e) => handleChangeField(e)}
                  name="province"
                  disabled={!isEditStatus}
                  type="text"
                  className="form-control purchase-project-feild1"
                  placeholder=""
                  id="filterOverall"
                  style={{ width: "80%", margin: "auto" }}
                />
              </td>
            </tr>
            {isEditStatus && (
              <tr>
                <td
                  style={{ textAlign: "center", fontWeight: "bold" }}
                  colSpan={4}
                >
                  <button
                    onClick={handleAddRow}
                    className="btn btn-primary"
                    type="submit"
                  >
                    <i className="bi bi-file-earmark-plus"></i> เพิ่ม
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}