"use client";

import { useEffect, useState } from "react";
import React from "react";
import { usePathname } from "next/navigation";
import "../operation-follow.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { appendDataToFieldSection3 } from "@/redux/OperationFollow/action";
import { projectTargetService, removeTableProjectGoalByIdService } from "@/redux/OperationFollow/Section3/service";
import DropdownSearch from "./DropdownSearch";
import MasterData from "../master_data";
import DropdownSearch2 from "./DropdownSearch2";

interface FormDataItem {
  indx: string;
  target_name: string;
}

interface FormDataItem {
  indx: string;
  target_name: string;
}

export default function TableProductAndService() {
  const formState: any = useSelector(
    (state: RootState) => state.operationFollowForm
  );
  const dispatch = useDispatch();

  const [formData, setFormdata] = useState<FormDataItem[]>([]);

  const [addField, setAddField] = useState({
    indx: "",
    target_name: ''
  });

  const { data: projectTargetData, isLoading: projectTargetLoading} = projectTargetService()

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
                  พื้นที่
                </th>
                <th style={{ textAlign: "center" }} scope="col">
                  สินค้าและบริการ
                </th>
              </tr>
            </thead>
            <tbody>
              {/* {formData.map((data, index) => (
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
              ))} */}
              <tr>
                <td
                  style={{ textAlign: "center", fontWeight: "bold" }}
                  colSpan={4}
                >
                  <button
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
