"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "../activities-add.scss";
import React from "react";
import { mainOutcomeService, removeTableProjectIndicatorActivityByIdService } from "@/redux/OperationFollow/Section3/service";
import { useDispatch } from "react-redux";
import DropdownSearch from "@/components/OperationFollow/Table/DropdownSearch";
import MasterData from "@/components/OperationFollow/master_data";
import DropdownSearch2 from "@/components/OperationFollow/Table/DropdownSearch2";

interface TableProjectIndicatorProps {
  onChangeTableProjectIndicator: (data: any) => void;
}

interface FormDataItem {
  indx: string;
  name_indicator: string;
  table_percent: string;
  quarter1_percent: string;
  quarter2_percent: string;
  quarter3_percent: string;
  quarter4_percent: string;
}

export default function TableProjectIndicator({
  onChangeTableProjectIndicator,
}: TableProjectIndicatorProps) {
  // name_indicator: string;
  // total_percent: number;
  // quarter1_percent: number;
  // quarter2_percent: number;
  // quarter3_percent: number;
  const [formData, setFormdata] = useState<FormDataItem[]>([]);
  const dispatch = useDispatch();
  const [addField, setAddField] = useState({
    indx: "",
    name_indicator: "",
    quarter1_percent: "0",
    quarter2_percent: "0",
    quarter3_percent: "0",
    quarter4_percent: "0",
  });
  const { data: mainOutcomeData, isLoading: mainOutcomeLoading } = mainOutcomeService()

  const handleAddFormData = () => {
    let total_percent = parseInt(addField.quarter1_percent) + parseInt(addField.quarter2_percent) + parseInt(addField.quarter3_percent) + parseInt(addField.quarter4_percent)
    const newData = {
      indx: formData.length + "",
      name_indicator: addField.name_indicator,
      table_percent: total_percent + '',
      quarter1_percent: addField.quarter1_percent,
      quarter2_percent: addField.quarter2_percent,
      quarter3_percent: addField.quarter3_percent,
      quarter4_percent: addField.quarter4_percent,
    };

    setFormdata([...formData, newData]);
    setAddField({
      indx: "",
      name_indicator: "",
      quarter1_percent: "0",
      quarter2_percent: "0",
      quarter3_percent: "0",
      quarter4_percent: "0",
    });

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
    removeTableProjectIndicatorActivityByIdService(id, dispatch);
    setFormdata(formData.filter((item: { indx: string }) => item.indx !== id));
  };

  const handleSelect = (name:string) => {
    setAddField({
      ...addField,
      name_indicator: name
    })
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
    
  })

  return (
    <>
      <div className="table-summary-wrapper table-project-indicator activities">
        <div className="table-summary-header activities">
          <span>ตัวชี้วัดระดับกิจกรรม(Output)</span>
        </div>
        <div className="table-summary-content">
          <table className="table">
            <thead>
              <tr>
                <th style={{ width: "10%", textAlign: "center"}} scope="col">
                  ลำดับที่
                </th>
                <th></th>
                <th style={{ width: "20%", textAlign: "center"}} scope="col">
                  ชื่อตัวชี้วัด
                </th>
                <th style={{ width: "10%", textAlign: "center"}} scope="col">
                  รวม
                </th>
                <th style={{textAlign: "center"}} scope="col">ไตรมาสที่1</th>
                <th style={{textAlign: "center"}} scope="col">ไตรมาสที่2</th>
                <th style={{textAlign: "center"}} scope="col">ไตรมาสที่3</th>
                <th style={{textAlign: "center"}} scope="col">ไตรมาสที่4</th>
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
                  <td>{getTargetNameById(data.name_indicator)}</td>
                  <td>{data.table_percent}</td>
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
                  {/* <input
                    onChange={(e) => handleChangeField(e)}
                    name="name_indicator"
                    value={addField.name_indicator}
                    type="text"
                    className="form-control purchase-project-feild1"
                    placeholder=""
                    id="filterOverall"
                    style={{ width: "80%", margin: "auto" }}
                  /> */}
                  <DropdownSearch2 dropdownName="mainOutcome" items={mergeLists(mainOutcomeData)} setAddField={handleSelect} formList={formData} />
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
                  colSpan={8}
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
