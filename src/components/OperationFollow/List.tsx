"use client";

import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { useEffect, useState } from "react";
import { RootState } from "@/redux/store";
import "./operation-list.scss";
import {
  deleteOperationList,
  fetchOperationSupportList,
} from "@/redux/OperationFollow/List/service";
import { FormState } from "@/redux/OperationFollow/types";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { checkUserRoleService, getDepartmentLevelOneService, getDepartmentLevelThreeService, getDepartmentLevelTwoService, getOperationFollowDataService, getStatusListService, getYearsService, setApproveToIdListService, updateFormById } from "@/redux/OperationFollow/service";
import ConfirmModal from "./Modal/ConfirmModal";
import { OperationFollowTable } from "@/redux/OperationFollowTable/reducer-follow-table";
import { getMainPlanService, getSrategicGroupService } from "@/redux/OperationFollow/Section1/service";
import { approveSendService, deleteProjectService, useApprovedServiceMutation, useGetOperationFollowDataQuery } from "@/redux/services/operation-follow-api";
import { useGetBudgetActByIdQuery } from "@/redux/services/master-data";

export default function OperationTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showAdvanceFilter, setShowAdvanceFilter] = useState(false);
  const formState: OperationFollowTable = useSelector(
    (state: RootState) => state.operationFollowTable
  );
  const dispatch = useDispatch();
  const router = useRouter();
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [deleteId, setDeleteId] = useState('0');

  const data = formState.data;
  const role = checkUserRoleService();

  const [modalHeadText, setModalHeadText] = useState('');
  const [modalContentText, setModalContentText] = useState('');
  const [approveList, setApproveList] = useState(Array<string>);
  const [modalMode, setModalMode] = useState('');
  const [isHeaderCheckboxChecked, setIsHeaderCheckboxChecked] = useState(false);
  const [dataRowCheckboxStates, setDataRowCheckboxStates] = useState<Record<string, boolean>>({});
  const [filterFieldTemp, setFilterFieldTemp] = useState({
    yearBudget: "",
    plan_name: "",
    strategic_goal: "",
    budget_source: "",
    subject: "",
    subject_part: "",
    task_group: "",
    work_name: "",
    project_name: "",
    strategic: "",
    market: "",
    marketPlan: "",
    status_plan: "",
    project_type: "",
    organization: "",
    budgetStart: "",
    budgetEnd: "",
    suited_policy: "",
    budget_act: "",
    budget_list: ""
  })

  const { data: departmentLevelOneData } = getDepartmentLevelOneService()
  const { data: departmentLevelTwoData, refetch: refetchDepartmentLevelTwoData } = getDepartmentLevelTwoService({
    departmentLevel01Id: filterFieldTemp.subject
  })
  const { data: departmentLevelThreeData, refetch: refetchDepartmentLevelThreeData } = getDepartmentLevelThreeService({
    departmentLevel01Id: filterFieldTemp.subject,
    departmentLevel02Id: filterFieldTemp.subject_part
  })
  const { data: strategicGroupData, refetch: refetchStrategicGroupData } = getSrategicGroupService({
    masterPlanId: filterFieldTemp.plan_name,
    strategyGroupYear: filterFieldTemp.yearBudget
  }) 
  const { data: yearsData } = getYearsService();
  const [ strategicData, setStrategicData ] = useState([])
  const { data: mainPlanData, refetch: mainPlanDataRefetch } = getMainPlanService({
    overviewStrategyId: filterFieldTemp.strategic
  })
  const { data: statusListData } = getStatusListService()
  const [dataLength, setDataLength] = useState(0)
  const [sendApprovalService] = useApprovedServiceMutation()
  const [startPage, setStartpage] = useState(0)
  const [endPage, setEndpage] = useState(100)
  const [filterParamArray, setFilterParamArray] = useState<string[]>([])
  const [filterParamText, setFilterParamText] = useState('')
  const { data: budgetActData, refetch: budgetActRefetch } = useGetBudgetActByIdQuery({
    mainPlanDataId: filterFieldTemp.marketPlan
  })

  // const []
  // const { data: getStrategicData, refetch: refetch: getStrategicData } = getStrategicGroupByIdService()

  let pageSize = 10;

  const totalPages = Math.ceil((dataLength > 100 ? 100 : dataLength) / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = data.slice(startIndex, endIndex);

  const handleChangeFilter = (e: any) => {
    const {name, value} = e.target

    setFilterFieldTemp({
      ...filterFieldTemp,
      [name]: value
    })

    if(name == 'strategic_goal'){
      const item = strategicGroupData.find((item: { strategyGroupId: number }) => item.strategyGroupId === value);
      setStrategicData(item.overviewStrategies)
    }

    refetchStrategicGroupData()
    refetchDepartmentLevelTwoData()
    mainPlanDataRefetch()
    budgetActRefetch()

  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setStartpage(startPage - pageSize);
      setEndpage(endPage - pageSize);
      setCurrentPage(currentPage - 1)
      setTimeout(()=>{
        refetchOperationFollowData()
      },1000)
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setStartpage(startPage + pageSize);
      setEndpage(endPage + pageSize);
      setCurrentPage(currentPage + 1)
      setTimeout(()=>{
        refetchOperationFollowData()
      },1000)
    }
  };

  const handlePageChange = (pageNumber: number) => {
    const newStart = (pageNumber - 1) * pageSize;
    setStartpage(newStart);
    setEndpage(newStart + pageSize);
    setCurrentPage(pageNumber);
  };

  const handlePageChangeSelect = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedPage = parseInt(event.target.value, 10);
    setCurrentPage(selectedPage);
    const newStart = (selectedPage - 1) * 10;
    setStartpage(newStart);
    setEndpage(newStart + 10);
    setCurrentPage(selectedPage);
  };

  const handleShowAdvanceFilter = () => {
    setShowAdvanceFilter(!showAdvanceFilter);
  };

  const handleClickProject = (id: string) => {
    router.push("/operation-follow/edit/" + id);
  };

  const handleClickDraft = (id: string, modeName: string) => {
    let mode = 1
    if(modeName == 'สนับสนุนการดำเนินงานด้านการตลาด'){
      mode = 1
    }

    if(modeName == 'แผนสนับสนุนในประเทศ'){
      mode = 2
    }

    if(modeName == 'แผนสนับสนุนต่างประเทศ'){
      mode = 3
    }
    router.push("/operation-follow/draft/" + mode + '/' + id);
  }

  const handleClickReport = (id: string) => {
    router.push("/operation-follow/report/view/" + id);
  };

  const openDeleteModal = (id: string) => {
    setDeleteId(id);
    setShowConfirmModal(true);
    setModalHeadText('Delete');
    setModalMode('delete')
    setModalContentText('Confirm Delete?');
  };

  const handleCloseDeleteModal = () => {
    setShowConfirmModal(false);
  };

  const handleDeleteConfirm = () => {
    // deleteOperationList(deleteId, dispatch);
    deleteProjectService(deleteId)
    setTimeout(() => {
      refetchOperationFollowData()
    },2000)
  };

  const handlePushApprove = (e: any,id: string) => {
    const { name, checked } = e.target;

    if(checked){
      let updatedList = [...approveList]
      updatedList.push(id)
      setApproveList(updatedList)
    }else{
      let updatedList = [...approveList]
      const filteredList = updatedList.filter((num: string) => num !== id)
      setApproveList(filteredList)
    }
    
    setDataRowCheckboxStates((prevCheckboxStates) => {
      const updatedCheckboxStates = {
        ...prevCheckboxStates,
        [id]: checked,
      };
  
      // Check if all data row checkboxes are checked
      const allDataRowCheckboxesChecked = Object.values(updatedCheckboxStates).every((value) => value);
      setIsHeaderCheckboxChecked(allDataRowCheckboxesChecked);
  
      return updatedCheckboxStates;
    });
    
  }

  const handleSubmitApprove = () => {
    setShowConfirmModal(true);
    setModalHeadText('โปรดยืนยัน');
    setModalMode('approve')
    setModalContentText('ต้องการส่งอนุมัติหรือไม่');
  }

  const handleSubmitApproveConfirm = async () => {
    console.log(approveList)
    for(let i = 0; i < approveList?.length; i++){
      await sendApprovalService(approveList[i])
    }

    refetchOperationFollowData()
  }

  const handleClearFilter = () => {
    const clearedFilterField = {
      yearBudget: "",
      plan_name: "",
      strategic_goal: "",
      budget_source: "",
      subject: "",
      subject_part: "",
      task_group: "",
      work_name: "",
      project_name: "",
      strategic: "",
      market: "",
      marketPlan: "",
      status_plan: "",
      project_type: "",
      organization: "",
      budgetStart: "",
      budgetEnd: "",
      suited_policy: "",
      budget_act: "",
      budget_list: "",
    };
  
    setFilterParamArray([])
    setFilterFieldTemp(clearedFilterField);
  }

  const handleHeaderCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    const updatedDataRowCheckboxStates: Record<string, boolean> = {};

    currentData.forEach((item: any) => {
      updatedDataRowCheckboxStates[item.id] = checked;
      let updatedList = [...approveList]
      if(checked){
        updatedList.push(item.id) 
        setApproveList(updatedList)
      }else{
        const filteredList = updatedList.filter((num) => num !== item.id)
        setApproveList(filteredList)
      }
    });
    setDataRowCheckboxStates(updatedDataRowCheckboxStates);
    setIsHeaderCheckboxChecked(checked);
  };

  const handleFilterSubmit = () => {
    let filterText = ""
    Object.keys(filterFieldTemp).forEach((attr) => {
      if(attr == 'yearBudget' && filterFieldTemp.yearBudget != ''){
        filterText = filterText + '&projectYear=' + filterFieldTemp.yearBudget
      }else if(attr == 'strategic_goal' && filterFieldTemp.strategic_goal != ''){
        filterText = filterText + '&strategyGroupId=' + filterFieldTemp.strategic_goal
      }else if(attr == 'strategic' && filterFieldTemp.strategic != ''){
        filterText = filterText + '&overviewStrategyId=' + filterFieldTemp.strategic
      }else if(attr == 'marketPlan' && filterFieldTemp.marketPlan != ''){
        filterText = filterText + '&mainPlanId=' + filterFieldTemp.marketPlan
      }else if(attr == 'project_name' && filterFieldTemp.project_name != ''){
        filterText = filterText + '&projectNameTH=' + filterFieldTemp.project_name
      }else if(attr == 'status_plan' && filterFieldTemp.status_plan != ''){
        filterText = filterText + '&processStatus=' + filterFieldTemp.status_plan
      }else if(attr == 'plan_name' && filterFieldTemp.plan_name != ''){
        filterText = filterText + '&projectType=' + filterFieldTemp.plan_name
      }
    })

    setFilterParamText(filterText)
    console.log(filterParamText)
    refetchOperationFollowData()
  }

  const { data: operationTableData, isLoading:isLoadingOperationTable , refetch: refetchOperationFollowData} = useGetOperationFollowDataQuery({startPage: startPage, endPage: endPage, filterParamText: filterParamText})

  useEffect(() => {
    refetchOperationFollowData()
    if(operationTableData != undefined){
      setDataLength(operationTableData.count)
      getOperationFollowDataService(dispatch,operationTableData)
    }
  }, [operationTableData])

  useEffect(()=> {
    console.log('filter param change')
  },[filterParamText])

  return (
    <div style={{ width: "100%" }} className="d-flex flex-column">
      <div className="breadcrumb-zone">
        นำเข้าข้อมูล {">"}{" "}
        <span className="bread-crumb-page-name">
          ข้อมูลโครงการของแผนปฎิบัติและการติดตามประเมินผล
        </span>
      </div>
      <div className="filter-project-wrapper">
        <div className="filter-project-header">
          <h4>ค้นหาข้อมูล {">"} ข้อมูลโครงการ</h4>
        </div>
        <div className="d-flex filter-project-content">
          <div className="d-flex flex-column flex-row form-left-section">
            <div className="d-flex">
              <div className="form-right-section-label">
                <label>ปีงบประมาณ:</label>
              </div>
              <div className="form-left-section-field">
                <div className="filter-field">
                  <select
                    defaultValue={"DEFAULT"}
                    onChange={handleChangeFilter}
                    name="yearBudget"
                    className="form-select"
                    aria-label="Default select example"
                    value={filterFieldTemp.yearBudget}
                  >
                    <option value="DEFAULT">--เลือก--</option>
                    {yearsData?.map((items:any, index: number) => (
                      <option key={index} value={items}>
                        {items}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column form-right-section">
            <div className="d-flex">
              <div className="form-right-section-label">
                <label>ชื่อแผน:</label>
              </div>
              <div className="form-left-section-field">
                <div className="filter-field">
                  <select
                    onChange={handleChangeFilter}
                    name="plan_name"
                    className="form-select"
                    aria-label="Default select example"
                    value={filterFieldTemp.plan_name}
                  >
                    <option selected>--เลือก--</option>
                    <option value="10003">
                      แผนบริหารจัดการองค์กร
                    </option>
                    <option value="10002">
                      แผนส่งเสริมตลาดในประเทศ
                    </option>
                    <option value="10001">
                      แผนส่งเสริมตลาดต่างประเทศ
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex filter-project-content">
          <div className="d-flex flex-column flex-row form-left-section">
            <div className="d-flex">
              <div className="form-right-section-label">
                <label>วัตถุประสงค์เชิงยุทธศาสตร์ (SO):</label>
              </div>
              <div className="form-left-section-field">
                <div className="filter-field">
                  <select
                    onChange={handleChangeFilter}
                    name="strategic_goal"
                    className="form-select"
                    aria-label="Default select example"
                    value={filterFieldTemp.strategic_goal}
                  >
                    <option selected>--เลือก--</option>
                    {strategicGroupData?.map((items:any, index: number) => (
                      <option key={index} value={items.strategyGroupId}>
                        {items.strategyGroupTh}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column form-right-section">
            <div className="d-flex">
              <div className="form-right-section-label">
                <label>แหล่งงบประมาณ:</label>
              </div>
              <div className="form-left-section-field">
                <div className="filter-field">
                  <select
                    onChange={handleChangeFilter}
                    name="budget_source"
                    value={filterFieldTemp.budget_source}
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>--เลือก--</option>
                    <option value="งบอุดหนุน">งบอุดหนุน</option>
                    <option value="งบลงทุน">งบลงทุน</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex filter-project-content">
          <div className="d-flex flex-column flex-row form-left-section">
            <div className="d-flex">
              <div className="form-right-section-label">
                <label>ด้าน :</label>
              </div>
              <div className="form-left-section-field">
                <div className="filter-field">
                  <select
                    onChange={handleChangeFilter}
                    value={filterFieldTemp.subject}
                    name="subject"
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>--เลือก--</option>
                    {departmentLevelOneData?.map((items:any, index: number) => (
                      <option key={index} value={items.departmentLevel01Id}>
                        {items.departmentNameTh}
                      </option>
                    ))} 
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column form-right-section">
            <div className="d-flex">
              <div className="form-right-section-label">
                <label>ฝ่าย/สำนัก/ภูมิภาค :</label>
              </div>
              <div className="form-left-section-field">
                <div className="filter-field">
                  <select
                    onChange={handleChangeFilter}
                    value={filterFieldTemp.subject_part}
                    name="subject_part"
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>--เลือก--</option>
                      {departmentLevelTwoData?.map((items:any, index: number) => (
                      <option key={index} value={items.departmentLevel02Id}>
                        {items.departmentNameTh}
                      </option>
                    ))} 
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex filter-project-content">
          <div className="d-flex flex-column flex-row form-left-section">
            <div className="d-flex">
              <div className="form-right-section-label">
                <label>กอง/กลุ่มงาน/สำนักงาน :</label>
              </div>
              <div className="form-left-section-field">
                <div className="filter-field">
                  <select
                    onChange={handleChangeFilter}
                    name="task_group"
                    className="form-select"
                    aria-label="Default select example"
                    value={filterFieldTemp.task_group}
                  >
                    <option selected>--เลือก--</option>
                    {departmentLevelThreeData?.map((items:any, index: number) => (
                      <option key={index} value={items.departmentLevel03Id}>
                        {items.departmentNameTh}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column form-right-section">
            <div className="d-flex">
              <div className="form-right-section-label">
                <label>งาน :</label>
              </div>
              <div className="form-left-section-field">
                <div className="filter-field">
                  <input onChange={handleChangeFilter} name="work_name" type="text" className="form-control" placeholder="" id="job" value={filterFieldTemp.work_name} />                 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex filter-project-content">
          <div className="d-flex flex-column flex-row form-left-section">
            <div className="d-flex">
              <div className="form-right-section-label">
                <label>ชื่อโครงการ :</label>
              </div>
              <div className="form-left-section-field">
                <div className="filter-field">
                  <input
                    onChange={handleChangeFilter}
                    name="project_name"
                    type="text"
                    className="form-control"
                    placeholder=""
                    id="filterOverall"
                    value={filterFieldTemp.project_name}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column form-right-section">
            <div className="d-flex"></div>
          </div>
        </div>
        <div className="d-flex filter-project-button justify-content-center">
          <div className="p-2">
            <button onClick={handleFilterSubmit} className="btn btn-primary">ค้นหา</button>
          </div>
          <div className="p-2">
            <button className="btn btn-secondary" onClick={handleClearFilter}>ล้าง</button>
          </div>
          <div className="p-2">
            <button
              onClick={handleShowAdvanceFilter}
              className="btn btn-secondary"
            >
              Advance Search
            </button>
          </div>
        </div>
        {showAdvanceFilter && (
          <>
            <div className="d-flex filter-project-content2">
              <div className="d-flex flex-column flex-row form-left-section">
                <div className="d-flex">
                  <div className="form-right-section-label">
                    <label>กลยุทธ์:</label>
                  </div>
                  <div className="form-left-section-field">
                    <div className="filter-field">
                      <select
                        onChange={handleChangeFilter}
                        name="strategic"
                        className="form-select"
                        aria-label="Default select example"
                        value={filterFieldTemp.strategic}
                      >
                        <option selected>--เลือก--</option>
                        {strategicData?.map((items:any, index: number) => (
                        <option key={index} value={items.overviewStrategyId}>
                            {items.overviewStrategyNameTh}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column form-right-section">
                <div className="d-flex">
                  <div className="form-right-section-label">
                    <label>ตลาด:</label>
                  </div>
                  <div className="form-left-section-field">
                    <div className="d-flex filter-field">
                      <input
                        onChange={handleChangeFilter}
                        name="market"
                        type="text"
                        className="form-control"
                        placeholder=""
                        id="filterOverall"
                        value={filterFieldTemp.market}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex filter-project-content2">
              <div className="d-flex flex-column flex-row form-left-section">
                <div className="d-flex">
                  <div className="form-right-section-label">
                    <label>แผนงาน:</label>
                  </div>
                  <div className="form-left-section-field">
                    <div className="filter-field">
                      <select
                        onChange={handleChangeFilter}
                        name="marketPlan"
                        className="form-select"
                        aria-label="Default select example"
                        value={filterFieldTemp.marketPlan}
                      >
                        <option selected>--เลือก--</option>
                        {/* <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option> */}
                        {mainPlanData?.map((items:any, index: number) => (
                        <option key={index} value={items.mainPlanId}>
                            {items.mainPlanNameTh}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column form-right-section">
                <div className="d-flex">
                  <div className="form-right-section-label">
                    <label>สถานะแผน/ผล:</label>
                  </div>
                  <div className="form-left-section-field">
                    <div className="filter-field">
                      <select
                        name="status_plan"
                        className="form-select"
                        aria-label="Default select example"
                        value={filterFieldTemp.status_plan}
                        onChange={handleChangeFilter}
                      >
                        <option selected>--เลือก--</option>
                        {statusListData?.map((items:any, index: number) => (
                        <option key={index} value={items.statusCode}>
                            {items.statusName}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex filter-project-content2">
              <div className="d-flex flex-column flex-row form-left-section">
                <div className="d-flex">
                  <div className="form-right-section-label">
                    <label>ประเภทโครงการ:</label>
                  </div>
                  <div className="form-left-section-field">
                    <div className="filter-field">
                      <div>
                          <input type="radio" id="planOption" name="project_type" value="00" checked={filterFieldTemp.project_type === '00'} onChange={handleChangeFilter} />
                          <label htmlFor="planOption">&nbsp;ในแผน</label>
                        </div>
                        <div>
                          <input type="radio" id="outsidePlanOption" name="project_type" value="01" checked={filterFieldTemp.project_type === '01'} onChange={handleChangeFilter}/>
                          <label htmlFor="outsidePlanOption">&nbsp;นอกแผน</label>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column form-right-section">
                <div className="d-flex">
                  <div className="form-right-section-label">
                    <label>หน่วยงาน:</label>
                  </div>
                  <div className="form-left-section-field">
                    <div className="filter-field">
                      <input
                        name="organization"
                        type="text"
                        className="form-control"
                        placeholder=""
                        id="filterOverall"
                        value={filterFieldTemp.organization}
                        onChange={handleChangeFilter}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex filter-project-content2">
               <div className="d-flex flex-column flex-row form-left-section">
                <div className="d-flex">
                  <div className="form-right-section-label">
                    <label>หมวด พ.ร.บ. งบประมาณ:</label>
                  </div>
                  <div className="form-left-section-field">
                    <div className="d-flex filter-field">
                      <select
                        name="budget_act"
                        className="form-select"
                        aria-label="Default select example"
                        value={filterFieldTemp.budget_act}
                        onChange={handleChangeFilter}
                      >
                        <option selected>--เลือก--</option>
                        {budgetActData?.map((items:any, index: number) => (
                        <option key={index} value={items.budgetActId}>
                            {items.budgetActName}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column form-right-section">
                <div className="d-flex">
                  <div className="form-right-section-label">
                    <label>ความสอดคล้องกับนโยบาย:</label>
                  </div>
                  <div className="form-left-section-field">
                    <div className="filter-field">
                      <select
                        name="suited_policy"
                        className="form-select"
                        aria-label="Default select example"
                        value={filterFieldTemp.suited_policy}
                        onChange={handleChangeFilter}
                      >
                        <option selected>--เลือก--</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex filter-project-content2">
             
              <div className="d-flex flex-column form-right-section">
                <div className="d-flex">
                  <div className="form-right-section-label">
                    <label>รายการค่าใช้จ่าย:</label>
                  </div>
                  <div className="form-left-section-field">
                    <div className="filter-field">
                      <select
                        name="budget_list"
                        className="form-select"
                        aria-label="Default select example"
                        value={filterFieldTemp.budget_list}
                        onChange={handleChangeFilter}
                      >
                        <option selected>--เลือก--</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="separation">
        <hr />
      </div>
      <div className="d-flex justify-content-between">
        <div className="d-flex tab-button-zone-wrapper">
          {role == 'admin' &&
            <div className="p-1 tab-button-zone">
              <div>
                <button onClick={handleSubmitApprove} className="btn btn-primary btn-tab-zone">
                  อนุมัติแผน
                </button>
              </div>
            </div>
          }
          <>
            <div className="p-1 tab-button-zone">
              <Link href="/operation-follow/new/1">
                <div>
                  <button className="btn btn-primary btn-tab-zone">
                    เพิ่มแผนบริหารจัดการองค์กร
                  </button>
                </div>
              </Link>
            </div>
            <div className="p-1 tab-button-zone">
              <Link href="/operation-follow/new/2">
                <div>
                  <button className="btn btn-primary btn-tab-zone">
                    เพิ่มแผนส่งเสริมตลาดในประเทศ
                  </button>
                </div>
              </Link>
            </div>
            <div className="p-1 tab-button-zone">
              <Link href="/operation-follow/new/3">
                <div>
                  <button className="btn btn-primary btn-tab-zone">
                    เพิ่มแผนส่งเสริมตลาดต่างประเทศ
                  </button>
                </div>
              </Link>
            </div>
          </>
        </div>
        <div className="d-flex">
          <div className="p-1 tab-button-zone">
            <div>
              <button className="btn btn-secondary btn-tab-zone2">
                Export Excel
              </button>
            </div>
          </div>
          <div className="p-1 tab-button-zone">
            <div>
              <button className="btn btn-secondary btn-tab-zone2">
                คู่มือการใช้งาน
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="table-wrapper">
        <div className="table-zone table-responsive">
          <table style={{width: '200%'}} className="table">
            <thead className="table-primary">
              <tr>
                <th scope="col">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    checked={isHeaderCheckboxChecked}
                    onChange={handleHeaderCheckboxChange}
                  />
                </th>
                <th scope="col">แก้ไข</th>
                <th scope="col">รายงานผล</th>
                <th scope="col">ลบ</th>
                <th scope="col">สถานะการจัดทำแผน</th>
                <th scope="col">สถานะการรายงานผล</th>
                <th scope="col">ปีงบประมาณ</th>
                <th scope="col">ลำดับที่โครงการ</th>
                <th style={{textAlign: 'center'}} scope="col">ชื่อโครงการ</th>
                <th scope="col">ชื่อหน่วยงาน</th>
                <th scope="col">ชื่อแผนงาน</th>
                <th scope="col">ชื่อกลยุทธภาพรวม</th>
                <th scope="col">ประเด็นยุทธศาสตร์</th>
                <th scope="col">งบประมาณกิจกรรมแผน (บาท)</th>
                <th scope="col">ยอดงบประมาณคงเหลือ(บาท)</th>
                <th scope="col">วันที่แก้ไขข้อมูลล่าสุด</th>
                <th scope="col">แก้ไขโดย</th>
              </tr>
            </thead>
            {formState.data.length > 0 && (
              <>
                <tbody>
                  {currentData.map((item) => (
                    <tr key={item.id}>
                      <td scope="row">
                        { !(item.status == 'Draft' ) &&
                            <input
                            onChange={(e) => handlePushApprove(e,item.id)}
                            className="form-check-input"
                            type="checkbox"
                            id={`flexCheckDefault-${item.id}`}
                            checked={dataRowCheckboxStates[item.id]?true:false}
                          />                    
                        }
                      </td>
                      <td>
                        <i
                            style={{color: 'blue',cursor: 'pointer'}}
                            onClick={() => 
                              item.project_status == '00' ?
                              handleClickDraft(item.id, item.section1.organizationManageMent) :
                              handleClickProject(item.id)}
                            className={`bi ${role == 'user' && item.project_status == '01' ? 'bi bi-eye-fill' : 'bi-pencil-square'}`}
                          ></i>
                      </td>
                      <td>
                        <i
                          onClick={() => handleClickReport(item.id)}
                          style={{
                            marginLeft: 11,
                            color: "blue",
                            cursor: "pointer",
                          }}
                          className="bi bi-file-text-fill"
                        ></i>
                      </td>
                      <td>
                        <i
                          onClick={() => openDeleteModal(item.id)}
                          style={{ color: "red", cursor: "pointer" }}
                          className="bi bi-trash-fill"
                        ></i>
                      </td>
                      <td>{item.project_status  == '00' ? 'บันทึกข้อมูลชั่วคราว' : 
                          item.project_status  == '01' ? 'ส่งอนุมัติ' :
                          item.project_status  == '02' ? 'อนุมัติ' : ''
                      }</td>
                      <td>{item.status == 'Draft' ? 'บันทึกข้อมูลชั่วคราว' : item.status}</td>
                      <td>{item.section1.yearBudget}</td>
                      <td></td>
                      <td>{item.section1.project_name}</td>
                      <td></td>
                      <td>
                        {item.section1.organizationManageMent == '00' &&
                          <>
                            แผนบริหารจัดการองค์กร
                          </>
                        }
                        {item.section1.organizationManageMent == '01' &&
                          <>
                            แผนสนับสนุนในประเทศ
                          </>
                        }
                        {item.section1.organizationManageMent == '02' &&
                          <>
                            แผนสนับสนุนต่างประเทศ
                          </>
                        }
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>{item.last_updated}</td>
                      <td>{item.editor_name}</td>
                    </tr>
                  ))}
                </tbody>
              </>
            )}
          </table>
          {formState.data.length == 0 && 
          <div style={{
            width: '100%',
            textAlign: 'center',
            position: 'relative',
            top: -8
          }}>No Data</div>
          }
        </div>
      </div>
      {formState.data.length > 0 && (
        <div className="pagination-wrapper d-flex justify-content-center">
          <div className="p-2 pagination-status">
            <span>
              {startPage + 1} to {Math.min(endPage, dataLength)} of{" "}
              {dataLength > 100 ? 100 : dataLength} items
            </span>
          </div>
          <div className="p-2 d-flex pagination-page-select">
            <ul className="pagination">
              <li className="page-item">
                <a
                  onClick={handlePrevPage}
                  className="page-link"
                  href="javascript:void(0)"
                  tabIndex={-1}
                >
                  {"<"}
                </a>
              </li>
              {Array.from({ length: totalPages }, (_, index) => (
                <li
                  className={`page-item ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                >
                  <a
                    className="page-link"
                    onClick={() => handlePageChange(index + 1)}
                    href="javascript:void(0)"
                  >
                    {index + 1}
                  </a>
                </li>
              ))}
              <li className="page-item">
                <a
                  onClick={handleNextPage}
                  className="page-link"
                  href="javascript:void(0)"
                >
                  {">"}
                </a>
              </li>
            </ul>
          </div>
          <div className="p-2 pagination-page-dropdown">
            <select
              className="form-select"
              value={currentPage}
              onChange={handlePageChangeSelect}
            >
              {Array.from({ length: totalPages }, (_, index) => (
                <option key={index + 1} value={index + 1}>
                  -- {index + 1}/Page --
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
      <ConfirmModal
        setShow={showConfirmModal}
        handleClose={handleCloseDeleteModal}
        handleApproveConfirm={handleSubmitApproveConfirm}
        handleDeleteConfirm={handleDeleteConfirm}
        headText={modalHeadText}
        contentText={modalContentText}
        modalMode={modalMode}
      />
    </div>
  );
}
