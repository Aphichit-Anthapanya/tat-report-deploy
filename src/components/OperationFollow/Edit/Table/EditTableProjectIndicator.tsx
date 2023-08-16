import { FormState } from "@/redux/OperationFollow/types";
import react, { useEffect, useState } from "react";
import { initialState } from "../initial_state";
import React from "react";
import { checkUserRoleService } from "@/redux/OperationFollow/service";
import { mainOutcomeService } from "@/redux/OperationFollow/Section3/service";
import DropdownSearch2 from "@/components/OperationFollow/Table/DropdownSearch2";
interface EditTableProjectIndicatorProps {
  formData: any;
  setFormData: (val:any) => void
  isEditStatus: boolean;
  handleOpenModal: (val:string,section: number) => void;
}

export function EditTableProjectIndicator(
  props: EditTableProjectIndicatorProps
) {
  const formData = props.formData
  const setFormData = props.setFormData
  //const [formData, setFormData] = useState<any>(initialState);
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

  const { data: mainOutcomeData, isLoading: mainOutcomeLoading } = mainOutcomeService()

  const role = checkUserRoleService();

  const handleAddFormData = () => {
    let total_percent = parseInt(addField.quarter1_percent) + parseInt(addField.quarter2_percent) + parseInt(addField.quarter3_percent) + parseInt(addField.quarter4_percent)
    const newData = {
      indx: formData.section3.project_outcome.length + 1 + "",
      name_indicator: addField.name_indicator,
      table_percent: total_percent + '',
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

  const handleSelect = (name:string) => {
    setAddField({
      ...addField,
      name_indicator: name
    })
  }

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

  const handleOpenModal = () => {
    props.handleOpenModal('project_outcome',3)
  }

  const mergeLists = (listOfLists: any[]): any[] => {
    if(!mainOutcomeLoading){
      const mergedList = listOfLists?.reduce((accumulator, currentList) => {
        return accumulator.concat(currentList);
      }, []);
      return mergedList; 
    }else{
      return []
    }
  }

  function getTargetNameById(mainOutcomeId: string) {
    const item = mainOutcomeData?.find((item: { mainOutcomeId: string }) => item.mainOutcomeId == mainOutcomeId);
    return item ? item.outcomeNameTh : null;
  }

  useEffect(() => {
    setIsEditStatus(props.isEditStatus);
  }, [props.isEditStatus]);

  useEffect(() => {
    setFormData(props.formData);
  }, [props.formData]);

  return (
    <>
      <div className="table-summary-header activities">
        <span>ตัวชี้วัดระดับกิจกรรม(Output)
          {role == 'admin' && <i onClick={() => handleOpenModal()} className="bi bi-pencil-fill comment-icon"></i>}
          {role == 'user' && <i onClick={() => handleOpenModal()} className={`bi bi-exclamation-circle-fill commentex-icon ${formData.section3.comment.project_outcome == '' ? 'hide' : ''}`} ></i>}
        </span>
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
            {formData.section3.project_outcome.map((data:any, index: number) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <i
                    onClick={() => handleRemoveRow(data.indx)}
                    style={{ color: "red", cursor: "pointer" }}
                    className="bi bi-trash-fill"
                  ></i>
                </td>
                <td>{getTargetNameById(data.name_indicator)}</td>
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
                {/* <input
                  value={addField.name_indicator}
                  onChange={(e) => handleChangeField(e)}
                  name="name_indicator"
                  disabled={!isEditStatus}
                  type="text"
                  className="form-control purchase-project-feild1"
                  placeholder=""
                  id="filterOverall"
                  style={{ width: "80%", margin: "auto" }}
                /> */}
                
                { isEditStatus &&
                  <DropdownSearch2 dropdownName="mainOutcome" items={mergeLists(mainOutcomeData)} setAddField={handleSelect} formList={formData} />
                }
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
                {isEditStatus &&
                    <button
                    onClick={handleAddFormData}
                    className="btn btn-primary"
                    type="submit"
                  >
                     เพิ่ม
                  </button>
                }
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
