"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "../operation-follow.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { appendDataToFieldSection3 } from "@/redux/OperationFollow/action";
import {
  mainOutcomeService,
  removeTableProjectIndicatorByIdService,
} from "@/redux/OperationFollow/Section3/service";
import { Dropdown, FormControl, InputGroup } from "react-bootstrap";
import MasterData from "@components/OperationFollow/master_data";
import DropDownSerach from "./DropdownSearch";
import DropdownSearch from "./DropdownSearch";
import DropdownSearch2 from "./DropdownSearch2";
import ProjectIndicatorSelect from "../Modal/ProjectIndicatorSelect"

interface TableProjectIndicatorProps {
  onChangeTableProjectIndicator: (data: any) => void;
}

interface FormDataItem {
  indx: string;
  name_indicator: string;
  total_percent: string;
  quarter1_percent: string;
  quarter2_percent: string;
  quarter3_percent: string;
  quarter4_percent: string;
  calType: string;
}

export default function TableProjectIndicator({
  onChangeTableProjectIndicator,
}: TableProjectIndicatorProps) {
  const formState: any = useSelector(
    (state: RootState) => state.operationFollowForm
  );
  const dispatch = useDispatch();
  const [formData, setFormdata] = useState<FormDataItem[]>([]);
  const [addField, setAddField] = useState({
    indx: "",
    name_indicator: "",
    quarter1_percent: "0",
    quarter2_percent: "0",
    quarter3_percent: "0",
    quarter4_percent: "0",
  });
  const { data: mainOutcomeData, isLoading: mainOutcomeLoading } =
    mainOutcomeService();

  const [isOpenProjectIndicatorSelect, setOpenProjectIndicatorSelect] = useState(false)

  const handleAddFormData = () => {
    setOpenProjectIndicatorSelect(true)
  //   let total_percent =
  //     parseInt(addField.quarter1_percent == '' ? '0' : addField.quarter1_percent) +
  //     parseInt(addField.quarter2_percent == '' ? '0' : addField.quarter2_percent) +
  //     parseInt(addField.quarter3_percent == '' ? '0' : addField.quarter3_percent) +
  //     parseInt(addField.quarter4_percent == '' ? '0' : addField.quarter4_percent);
  //   const newData = {
  //     indx: formData.length + 1 + "",
  //     name_indicator: addField.name_indicator,
  //     total_percent: total_percent + "",
  //     quarter1_percent: addField.quarter1_percent,
  //     quarter2_percent: addField.quarter2_percent,
  //     quarter3_percent: addField.quarter3_percent,
  //     quarter4_percent: addField.quarter4_percent,
  //   };

  //   setFormdata([...formData, newData]);
  //   setAddField({
  //     indx: "",
  //     name_indicator: "",
  //     quarter1_percent: "",
  //     quarter2_percent: "",
  //     quarter3_percent: "",
  //     quarter4_percent: "",
  //   });

  //   dispatch(
  //     appendDataToFieldSection3({
  //       name: "project_outcome",
  //       data: newData,
  //     })
  //   );

  //   onChangeTableProjectIndicator([...formData, newData]);
  };

  const handleCloseProjectIndicatorSelect = () => {
    setOpenProjectIndicatorSelect(false)
  }

  const handleConfirmProjectIndicatorSelect = (data: any) => {

    let listData = []
    for(let i = 0; i < data.length ; i++){
      listData.push({
        indx: data[i].id,
        name_indicator: data[i].indicatorName,
        total_percent: '',
        quarter1_percent: "0",
        quarter2_percent: "0",
        quarter3_percent: "0",
        quarter4_percent: "0",
        calType: data[i].calType
      })
    }

    setFormdata(listData)

  }

  const handleChangeField = (event: any, id: string) => {
    const { name, value } = event.target;

    // const updateChecked = {
    //   ...addField,
    //   [name]: value,
    // };

    // setAddField(updateChecked);

    let index = formData.findIndex((item:any) => 
      item.indx == id
    )

    if(index != -1){
      let q1 = formData[index].quarter1_percent
      let q2 = formData[index].quarter2_percent
      let q3 = formData[index].quarter3_percent
      let q4 = formData[index].quarter4_percent
    
      if(name == 'quarter1_percent'){
        q1 = value
      }else if(name == 'quarter2_percent'){
        q2 = value
      }else if(name == 'quarter3_percent'){
        q3 = value
      }else if(name == 'quarter4_percent'){
        q4 = value
      }

      let newDataList = [...formData]
      newDataList[index] = {
        indx: newDataList[index].indx,
        name_indicator: newDataList[index].name_indicator,
        total_percent: calculatePercentHelper(q1,q2,q3,q4) + '',
        quarter1_percent: q1 + '',
        quarter2_percent: q2 + '',
        quarter3_percent: q3 + '',
        quarter4_percent: q4 + '',
        calType: newDataList[index].calType
      }

      setFormdata(newDataList)
    
    }

  };

  const calculatePercentHelper = (
    q1: string,
    q2: string,
    q3: string,
    q4: string
  ) => {

    if(q1 == ''){
      q1 = '0'
    }

    if(q2 == ''){
      q2 = '0'
    }

    if(q3 == ''){
      q3 = '0'
    }

    if(q4 == ''){
      q4 = '0'
    }

    return parseInt(q1) + parseInt(q2) + parseInt(q3) + parseInt(q4)
  }

  const handleRemoveRow = (id: string) => {
    //removeTableProjectIndicatorByIdService(id, dispatch);
    setFormdata(formData.filter((item: { indx: string }) => item.indx !== id));
  };

  const handleBlurField = (event: any) => {
    const { name, value } = event.target;

    let isValid = checkValidNum(value)

    if(!isValid){
      // const updateChecked = {
      //   ...addField,
      //   [name]: 0,
      // };
  
      // setAddField(updateChecked);

    }

  }

  const checkValidNum = (val: number) => {
    if(
      val < 0
    ){
      return false
    }else{
      return true
    }
  }

  useEffect(() => {
    setFormdata(formState.section3.project_outcome);
  }, []);

  const handleSelect = (name: string) => {
    setAddField({
      ...addField,
      name_indicator: name,
    });
  };

  const mergeLists = (listOfLists: any[]): any[] => {
    if (!mainOutcomeLoading) {
      const mergedList = listOfLists?.reduce((accumulator, currentList) => {
        return accumulator.concat(currentList);
      }, []);
      return mergedList;
    } else {
      return [];
    }
  };

  const getTargetNameById = (mainOutcomeId: string) => {
    const item = mainOutcomeData?.find(
      (item: { mainOutcomeId: string }) => item.mainOutcomeId == mainOutcomeId
    );
    return item ? item.outcomeNameTh : null;
  };

  return (
    <>
      <ProjectIndicatorSelect setShow={isOpenProjectIndicatorSelect} handleClose={handleCloseProjectIndicatorSelect} handleConfirmOperationArea={handleConfirmProjectIndicatorSelect} />
      <div className="table-summary-wrapper table-project-indicator">
        <div className="table-summary-header">
          <span>ตัวชี้วัดระดับโครงการ (Outcome)</span>
        </div>
        <div className="table-summary-content">
          <table className="table">
            <thead>
              <tr>
                <th style={{ width: "10%" }} scope="col">
                  ลำดับที่
                </th>
                <th></th>
                <th style={{ width: "20%" }} scope="col">
                  ชื่อตัวชี้วัด
                </th>
                <th style={{ width: "10%" }} scope="col">
                  หน่วย
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
                  <td>{data.name_indicator}</td>
                  <td>{data.calType}</td>
                  <td>{data.total_percent}</td>
                  <td>
                    <input
                    type="number"
                    onChange={(e) => handleChangeField(e,data.indx)}
                    name="quarter1_percent"
                    value={data.quarter1_percent}
                    className="form-control purchase-project-feild1"
                    placeholder=""
                    id="filterOverall"
                    style={{ width: "80%", margin: "auto" }}
                  />
                  </td>
                  <td>
                  <input
                    onChange={(e) => handleChangeField(e,data.indx)}
                    type="number"
                    name="quarter2_percent"
                    value={data.quarter2_percent}
                    className="form-control purchase-project-feild1"
                    placeholder=""
                    id="filterOverall"
                    style={{ width: "80%", margin: "auto" }}
                  />
                  </td>
                  <td>
                  <input
                    onChange={(e) => handleChangeField(e,data.indx)}
                    type="number"
                    name="quarter3_percent"
                    value={data.quarter3_percent}
                    className="form-control purchase-project-feild1"
                    placeholder=""
                    id="filterOverall"
                    style={{ width: "80%", margin: "auto" }}
                  />
                  </td>
                  <td>
                  <input
                    onChange={(e) => handleChangeField(e,data.indx)}
                    type="number"
                    name="quarter4_percent"
                    value={data.quarter4_percent}
                    className="form-control purchase-project-feild1"
                    placeholder=""
                    id="filterOverall"
                    style={{ width: "80%", margin: "auto" }}
                  />
                  </td>
                </tr>
              ))}
              <tr>
                {/* <td>{formData.length + 1}</td>
                <td></td>
                <td>
                  <DropdownSearch2
                    dropdownName="mainOutcome"
                    items={mergeLists(mainOutcomeData)}
                    setAddField={handleSelect}
                    formList={formData}
                  />
                </td>
                <td></td>
                <td>
                  <input
                    onChange={(e) => handleChangeField(e)}
                    type="number"
                    name="quarter1_percent"
                    value={addField.quarter1_percent}
                    className="form-control purchase-project-feild1"
                    placeholder=""
                    id="filterOverall"
                    style={{ width: "80%", margin: "auto" }}
                    onBlur={(e) => handleBlurField(e)}
                  />
                </td>
                <td>
                  <input
                    onChange={(e) => handleChangeField(e)}
                    type="number"
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
                    type="number"
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
                    type="number"
                    name="quarter4_percent"
                    value={addField.quarter4_percent}
                    className="form-control purchase-project-feild1"
                    placeholder=""
                    id="filterOverall"
                    style={{ width: "80%", margin: "auto" }}
                  />
                </td> */}
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
