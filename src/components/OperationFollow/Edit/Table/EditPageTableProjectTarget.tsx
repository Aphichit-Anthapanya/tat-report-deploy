import { FormState } from "@/redux/OperationFollow/types";
import react, { useEffect, useState } from "react";
import { initialState } from "../initial_state";
import React from "react";
import { checkUserRoleService } from "@/redux/OperationFollow/service";
import DropdownSearch2 from "@/components/OperationFollow/Table/DropdownSearch2";
import { projectTargetService } from "@/redux/OperationFollow/Section3/service";

interface EditTableProjectTargetProps {
  formData: any;
  setFormData: (val:any) => void
  isEditStatus: boolean;
  handleOpenModal: (val:string,section: number) => void;
}

export function EditTableProjectTarget(props: EditTableProjectTargetProps) {
  const formData = props.formData
  const setFormData = props.setFormData
  //const [formData, setFormData] = useState<any>(initialState);
  const [isEditStatus, setIsEditStatus] = useState(false);
  const [addField, setAddField] = useState({
    indx: "",
    target_name: "",
  });
  const { data: projectTargetData, isLoading: projectTargetLoading} = projectTargetService()

  const role = checkUserRoleService();

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

  const handleOpenModal = () => {
    props.handleOpenModal('project_target',3)
  }

  const handleSelectTargetName = (item: string) => {
    console.log(item)
    setAddField({
      ...addField,
      target_name: item
    });
  }


  function mergeLists(listOfLists: any[]): any[] {
    if(!projectTargetLoading){
      const mergedList = listOfLists?.reduce((accumulator, currentList) => {
        return accumulator.concat(currentList);
      }, []);
    
      return mergedList; 
    }else{
      return []
    }
  }

  function getTargetNameById(targetGroupId: string) {
    const item = projectTargetData?.find((item: { targetGroupId: string }) => item.targetGroupId == targetGroupId);
    return item ? item.targetGroupNameTh : null;
  }

  useEffect(() => {
    setIsEditStatus(props.isEditStatus);
  }, [props.isEditStatus]);

  return (
    <>
      <div className="table-summary-header">
        <span>กลุ่มเป้าหมายระดับโครงการ
          {role == 'admin' && <i onClick={() => handleOpenModal()} className="bi bi-pencil-fill comment-icon"></i>}
          {role == 'user' && <i onClick={() => handleOpenModal()} className={`bi bi-exclamation-circle-fill commentex-icon ${formData.section3.comment.project_target == '' ? 'hide' : ''}`} ></i>}
        </span>
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
            {formData.section3.project_target.map((data: any, index: number) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <i
                    onClick={() => handleRemoveRow(data.indx)}
                    style={{ color: "red", cursor: "pointer" }}
                    className="bi bi-trash-fill"
                  ></i>
                </td>
                <td>{getTargetNameById(data.target_name)}</td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              <td>
                { isEditStatus &&
                  <DropdownSearch2 formList={formData} dropdownName="projectTarget" items={mergeLists(projectTargetData)} setAddField={handleSelectTargetName} />
                }
                { !isEditStatus &&
                  <>
                    <input placeholder="ค้นหา..." className="form-control" disabled={true} type="text" />
                  </>
                }
              </td>
            </tr>
            <tr>
              <td
                style={{ textAlign: "center", fontWeight: "bold" }}
                colSpan={3}
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
