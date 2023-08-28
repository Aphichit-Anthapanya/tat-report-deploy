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

  const [isOpenProjectIndicatorSelect, setOpenProjectIndicatorSelect] = useState(false)
  const [formDataTable, setFormDataTable] = useState<any>([])

  const { data: mainOutcomeData, isLoading: mainOutcomeLoading } = mainOutcomeService()

  const role = checkUserRoleService();

  const handleAddFormData = () => {
    setOpenProjectIndicatorSelect(true)
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

    setFormDataTable(listData)

    let disPatchData = []
    for(let i = 0; i < listData.length ; i++){
      disPatchData.push({
        indx: i,
        name_indicator: listData[i].indx,
        total_percent: '',
        quarter1_percent: "0",
        quarter2_percent: "0",
        quarter3_percent: "0",
        quarter4_percent: "0",
      })
    }

    setFormData({
      ...formData,
      section3: {
        ...formData.section3,
        project_outcome: disPatchData
      }  
    })

  }

  const handleChangeField = (event: any, id: string) => {
    const { name, value } = event.target;

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

      if(parseInt(q1) < 0){
        q1 = '0'
      }

      if(parseInt(q2) < 0){
        q2 = '0'
      }

      if(parseInt(q3) < 0){
        q3 = '0'
      }

      if(parseInt(q4) < 0){
        q4 = '0'
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

      setFormDataTable(newDataList)

      let dispatchDataList: any[] = [...formData.section3.project_outcome]
      dispatchDataList[index] = {
        indx: index,
        name_indicator: newDataList[index].indx,
        total_percent: calculatePercentHelper(q1,q2,q3,q4) + '',
        quarter1_percent: q1 + '',
        quarter2_percent: q2 + '',
        quarter3_percent: q3 + '',
        quarter4_percent: q4 + '',
        calType: ''
      }

      for(let i = 0; i < dispatchDataList.length; i++){
        delete dispatchDataList[i].calType
      }

      setFormData({
        ...formData,
        section3: {
          ...formData.section3,
          project_outcome: dispatchDataList
        }  
      })
    
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
    setFormDataTable(formData.section3.project_outcome)
  });

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
              {formDataTable.map((data: any, index: number) => (
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
                  <td>{data.calType}</td>
                  <td>{data.total_percent}</td>
                  <td>
                    <input
                    disabled={!isEditStatus}
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
                    disabled={!isEditStatus}
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
                    disabled={!isEditStatus}
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
                    disabled={!isEditStatus}
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
              </tr>
              <tr>
                <td
                  style={{ textAlign: "center", fontWeight: "bold" }}
                  colSpan={8}
                >
                  { isEditStatus &&
                    <button
                      onClick={handleAddFormData}
                      className="btn btn-primary"
                      type="submit"
                    >
                      <i className="bi bi-file-earmark-plus"></i> เพิ่ม
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
