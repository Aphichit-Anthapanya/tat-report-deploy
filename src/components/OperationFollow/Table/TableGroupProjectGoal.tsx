"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "../operation-follow.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { appendDataToFieldSection3, updateFormField } from "@/redux/OperationFollow/action";
import { projectTargetService, removeTableProjectGoalByIdService } from "@/redux/OperationFollow/Section3/service";
import DropdownSearch from "./DropdownSearch";
import MasterData from "../master_data";
import DropdownSearch2 from "./DropdownSearch2";
import ProjectTargetSelect from "../Modal/ProjectTargetModal";

interface FormDataItem {
  id: string;
  targetName: string;
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
    target_name: ''
  });

  const [isOpenProjectTargetSelect, setIsOpenProjectTargetSelect] = useState(false)

  const { data: projectTargetData, isLoading: projectTargetLoading} = projectTargetService()

  const handleCloseProjectTargetSelect = () => {
    setIsOpenProjectTargetSelect(false)
  }

  const handleConfirmProjectTargetSelect = (data: any) => {
    setFormdata(data)

    let newData = []
    for(let i = 0; i < data.length; i++){
      newData.push({
        indx: i,
        target_name: data[i].id,      
      })
    }

    dispatch(updateFormField({
      ...formState,
      section3: {
        ...formState.section3,
        project_target: newData
      }
    }))
  }

  const handleAddFormData = () => {
    setIsOpenProjectTargetSelect(true)
  };

  const handleRemoveRow = (id: string) => {
    let _formData = formData.filter((item: any) => 
      item.id != id
    )

    setFormdata(_formData)
  };

  function getTargetNameById(targetGroupId: string) {
    const item = projectTargetData?.find((item: { targetGroupId: string }) => item.targetGroupId == targetGroupId);
    return item ? item.targetGroupNameTh : null;
  }

  useEffect(() => {
    setFormdata(formState.section3.project_target);
  }, []);

  return (
    <>
      <ProjectTargetSelect setShow={isOpenProjectTargetSelect} handleClose={handleCloseProjectTargetSelect} handleConfirmOperationArea={handleConfirmProjectTargetSelect} />
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
