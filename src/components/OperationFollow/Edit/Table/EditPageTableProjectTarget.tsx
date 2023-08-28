import { FormState } from "@/redux/OperationFollow/types";
import react, { useEffect, useState } from "react";
import { initialState } from "../initial_state";
import React from "react";
import { checkUserRoleService } from "@/redux/OperationFollow/service";
import DropdownSearch2 from "@/components/OperationFollow/Table/DropdownSearch2";
import { projectTargetService } from "@/redux/OperationFollow/Section3/service";
import ProjectTargetSelect from "../../Modal/ProjectTargetModal";

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

  const [isOpenProjectTargetSelect, setIsOpenProjectTargetSelect] = useState(false)

  const [formDataTable, setFormDataTable] = useState([])

  const role = checkUserRoleService();

  const handleCloseProjectTargetSelect = () => {
    setIsOpenProjectTargetSelect(false)
  }

  const handleConfirmProjectTargetSelect = (data: any) => {
    setFormDataTable(data)

    let newData = []
    for(let i = 0; i < data.length; i++){
      newData.push({
        indx: i,
        target_name: data[i].id,      
      })
    }

    setFormData({
      ...formData,
      section3: {
        ...formData.section3,
        project_target: newData
      }
    })
  }

  const handleAddFormData = () => {
    setIsOpenProjectTargetSelect(true)
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

  function getTargetNameById(targetGroupId: string) {
    const item = projectTargetData?.find((item: { targetGroupId: string }) => item.targetGroupId == targetGroupId);
    return item ? item.targetGroupNameTh : null;
  }

  useEffect(() => {
    setIsEditStatus(props.isEditStatus);
  }, [props.isEditStatus]);

  useEffect(() => {
    setFormDataTable(formData.section3.project_target);
  }, []);

  return (
    <>
      <ProjectTargetSelect setShow={isOpenProjectTargetSelect} handleClose={handleCloseProjectTargetSelect} handleConfirmOperationArea={handleConfirmProjectTargetSelect} />
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
              {formDataTable.map((data:any, index: number) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <i
                      onClick={() => handleRemoveRow(data.id)}
                      style={{ color: "red", cursor: "pointer" }}
                      className="bi bi-trash-fill"
                    ></i>
                  </td>
                  <td>{getTargetNameById(data.target_name)}</td>
                </tr>
              ))}
              <tr>
                <td
                  style={{ textAlign: "center", fontWeight: "bold" }}
                  colSpan={3}
                >
                { isEditStatus &&
                  <>
                  <button
                    onClick={handleAddFormData}
                    className="btn btn-primary"
                    type="submit"
                  >
                    เพิ่ม
                  </button>
                  </>
                }
                </td>
              </tr>
            </tbody>
        </table>
      </div>
    </>
  );
}
