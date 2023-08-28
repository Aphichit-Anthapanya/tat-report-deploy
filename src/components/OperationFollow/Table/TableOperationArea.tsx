"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "../operation-follow.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { appendDataToFieldSection3 } from "@/redux/OperationFollow/action";
import {
  operationAreaService,
  removeTableOperationAreaByIdService,
} from "@/redux/OperationFollow/Section3/service";
import OperationAreaSelect from "../Modal/OperationAreaSelectModal"
import { updateFormField } from "@/redux/OperationFollow/reducer";

interface FormDataItem {
  indx: string;
  country_area: string;
  province: string;
}

interface TableOperationAreaProps {
  onChangeTableOperationArea: (data: any) => void;
  modeSelect: string;
}

export default function TableOperationArea({
  onChangeTableOperationArea,
  modeSelect,
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
  const { data: operationAreaData } = operationAreaService(modeSelect);
  const [isOpenOperationAreaSelect, setOpenOperationAreaSelect] = useState(false)

  const handleAddFormData = () => {
    setOpenOperationAreaSelect(true)
  };

  const handleRemoveRow = (id: string) => {
    removeTableOperationAreaByIdService(id, dispatch);
    setFormdata(formData.filter((item: { indx: string }) => item.indx !== id));
  };

  const handleCloseOperationAreaSelect = () => {
    setOpenOperationAreaSelect(false)
  }

  const handleConfirmOperationArea = (data: any) => {
    let dataList = []

    for(let i = 0; i < data.length; i++){
      dataList.push({
        indx: data[i].id,
        country_area: data[i].countryarea,
        province: data[i].province
      })
    }

    setFormdata(dataList)
    dispatch(updateFormField({
      ...formState,
      section3: {
        ...formState.section3,
        list_operation_area: dataList
      }
    }))
  }

  useEffect(() => {
    setFormdata(formState.section3.list_operation_area);
  }, []);

  return (
    <>
      <div className="operation-area-modal">
      <OperationAreaSelect setShow={isOpenOperationAreaSelect} handleClose={handleCloseOperationAreaSelect} handleConfirmOperationArea={handleConfirmOperationArea} />
      </div>
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
                  <td>
                    {/* <input
                      onChange={(e) =>
                        handleChangeFieldByIndex(e, index + 1, "country_area")
                      }
                      type="text"
                      name="country_area"
                      value={formData[index].country_area}
                      className="form-control purchase-project-feild1"
                      placeholder=""
                      id="filterOverall"
                      style={{ width: "80%", margin: "auto" }}
                    /> */}
                    {formData[index].country_area}
                  </td>
                  <td>
                    {/* <input
                      onChange={(e) =>
                        handleChangeFieldByIndex(e, index + 1, "province")
                      }
                      type="text"
                      name="province"
                      value={formData[index].province}
                      className="form-control purchase-project-feild1"
                      placeholder=""
                      id="filterOverall"
                      style={{ width: "80%", margin: "auto" }}
                    /> */}
                    {formData[index].province}
                  </td>
                </tr>
              ))}
              {/* <tr>
                <td>{formData.length + 1}</td>
                <td></td>
                <td>
                  <input
                    onChange={(e) => handleChangeField(e)}
                    onBlur={handleAddFormData}
                    onKeyDown={handleKeyDown}
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
                    onBlur={handleAddFormData}
                    onKeyDown={handleKeyDown}
                    type="text"
                    name="province"
                    value={addField.province}
                    className="form-control purchase-project-feild1"
                    placeholder=""
                    id="filterOverall"
                    style={{ width: "80%", margin: "auto" }}
                  />
                </td>
              </tr> */}
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
