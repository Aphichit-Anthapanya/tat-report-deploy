import { format } from 'date-fns';
import { appendOperationFollowTable, editTableById, replaceTable, setApproveList } from '../OperationFollowTable/reducer-follow-table';
import store from '../store';
import { resetForm, submitFormData,submitReportData,updateDataList,updateFormField } from './reducer';
import { FormState } from './types';
import {
  useFetchProfileQuery,
} from "@/redux/services";
import { useDepartmentLevelOneQuery, useDepartmentLevelThreeQuery, useDepartmentLevelTwoQuery, useGetConsistencyMasterQuery, useGetYearsQuery, useStatusListQuery } from '../services/master-data';
import { initialState } from '@/components/OperationFollow/Edit/initial_state';
import { consistency_map, consistency_policy_map, gap_map, stakeholder1, stakeholder2, stakeholder3, stakeholder4, stakeholder5 } from './consistency_mapname'
import  masterDataApiService from '../services/master-data-api';
import { approvalSendService, createOperationFollowFormService, createOperationFormService, getProjectById, updateOperationFormService } from '../services/operation-follow-api';
import { formatDataService } from './EditOperationFollow/edit-operation-follow-service';

export const saveCurrentForm = async (
  dispatchs:any,data:any, 
  createOperationFollowForm: any,
  ) => {
  
    const isNew = data.id == 0

    let id = data.id != 0 ? data.id : generateRandomNumber()
    let tableData = store.getState().operationFollowTable.data

    //let formInfo = initialState

    let formInfo = {
      id: id,
      section1: data.section1,
      section2: data.section2,
      section3: data.section3,
      section4: data.section4,
      section5: data.section5,
      activitiesList: data.activitiesList,
      status: 'อยู่ระหว่างดำเนินการ',
      project_status: 'ส่งอนุมัติแผน',
      project_edit_status: 'อยู่ระหว่างดำเนินการ',
      project_edit_detail: 'อยู่ระหว่างดำเนินการ',
      last_updated: format(new Date(), 'dd/MM/yyyy'),
      editor_name: 'สมศรี'
    }

  const consistencyMasterData2: any = await masterDataApiService.getConsistencyMasterData()
  const consistencyPolicyData2: any = await masterDataApiService.getConsistencyPolicyData() 
  const gapsData2: any = await masterDataApiService.getGapsData()
  const stakeHolderOneData2: any = await masterDataApiService.stakeHolder1()
  const stakeHolderTwoData2: any = await masterDataApiService.stakeHolder2()
  const stakeHolderThreeData2: any = await masterDataApiService.stakeHolder3()
  const stakeHolderFourData2: any = await masterDataApiService.stakeHolder4()
  const stakeHolderFiveData2: any = await masterDataApiService.stakeHolder5()

  const apiParams = paramMapService(formInfo, -1);

  try {
    const response: any = await createOperationFollowFormService(apiParams)
    const projectId = response.projectId
    await approvalSendService(projectId)
    alert("send api success");
  } catch (error) {
    // Return null if the string cannot be converted to a number
    console.log(error);
    alert("send api fail")
  }

  // if(isNew){
  //   dispatchs(appendOperationFollowTable(formInfo))
  // }else{
  //   editSubmit(formInfo.id,dispatchs,formInfo)
  // }

  // } catch (error) {
  //   // Handle any errors that occur during the API request
  //   console.error('Error fetching data:', error);
  // }

}

export const paramMapActivityService = async (formInfo: any, projectId: string) => {

  let project_outcome = []
  for(let i = 0; i < formInfo.project_indicator.length; i++) {

    project_outcome.push({
      outputId: formInfo.project_indicator[i].name_indicator,
      seqNo: i,
      quarterAmt01: parseInt(formInfo.project_indicator[i].quarter1_percent),
      quarterAmt02: parseInt(formInfo.project_indicator[i].quarter2_percent),
      quarterAmt03: parseInt(formInfo.project_indicator[i].quarter3_percent),
      quarterAmt04: parseInt(formInfo.project_indicator[i].quarter4_percent),
      outputAmt: parseInt(formInfo.project_indicator[i].total_percent)
    })

  }

  let operation_area_list = []

  for(let i = 0; i < formInfo.list_operation_area
    .length; i++) {

    operation_area_list.push({
      oparationAreaId: formInfo.list_operation_area[i].indx
    })

  }

  let apiData = {
    projectId: projectId,
    activitySeqNo: parseInt(formInfo.activity_order),
    activityNameTH: formInfo.activity_name,
    activityDescription: formInfo.activity_description,
    projectPercent: parseInt(formInfo.activity_shared),
    planBudget: parseInt(formInfo.budget),
    planBeginDt: formInfo.activity_start,
    planActEndDt: formInfo.activity_end,
    outputs: project_outcome,
    oparationAreas: operation_area_list
  }

  return apiData

}

export const paramMapService = async (formInfo: any, sectionNumber: number) => {

  let section1data = await getSection1Data(formInfo)
  let section2data = await getSection2Data(formInfo)
  let section3data = await getSection3Data(formInfo)
  let section4data = await getSection4Data(formInfo)

  let apiParams = {}

  if(sectionNumber == 1){
    apiParams = (
      Object.assign({}, 
        section1data
      )
    )
  }else if(sectionNumber == 2){
    apiParams = (
      Object.assign({},
        section1data,
        section2data
      )
    )
  }else if(sectionNumber == 3){
    apiParams = (
      Object.assign({},
        section1data,
        section2data,
        section3data
      )
    )
  }else if(sectionNumber == 4){
    apiParams = (
      Object.assign({},
        section1data,
        section2data,
        section3data,
        section4data
      )
    )
  }else{
    apiParams = (
      Object.assign({},
        section1data,
        section2data,
        section3data,
        section4data
      )
    )
  }


  return apiParams

}

export const importFromDraft = (dispatch:any, id: number) => {
  try {
    const tableList: any[] = store.getState().operationFollowTable.data
    let data: FormState = tableList.find((item: { id: number }) => item.id === id)
    let formInfo = {
      id: data.id,
      section1: data.section1,
      section2: data.section2,
      section3: data.section3,
      section4: data.section4,
      section5: data.section5,
      draft_section: data.draft_section
    }

    dispatch(updateFormField(formInfo));

    return data.draft_section

  } catch (error) {
    // Handle any errors that occur during the API request
    console.error('Error fetching data:', error);
  }
}

export const importFromDraft2 = async (dispatch:any, id: string) => {
  try {
    //const tableList: any[] = store.getState().operationFollowTable.data
    const formInfo: any = await getProjectById(id)
    const formData = formatDataService(formInfo.data)
    dispatch(updateFormField(formData));

    return formInfo

  } catch (error) {
    // Handle any errors that occur during the API request
    console.error('Error fetching data:', error);
  }
}

export const saveDraftForm = async (dispatchs:any,data:any,current_section: string) => {
  try {
    const isNewDraft = data.id == 0

    let id = data.id != 0 ? data.id : generateRandomNumber()
    let tableData = store.getState().operationFollowTable.data

    let formInfo = {
      id: id,
      section1: data.section1,
      section2: data.section2,
      section3: data.section3,
      section4: data.section4,
      section5: data.section5,
      activitiesList: data.activitiesList,
      status: 'Draft',
      project_status: 'อยู่ระหว่างดำเนินการ',
      project_edit_status: 'อยู่ระหว่างดำเนินการ',
      project_edit_detail: 'อยู่ระหว่างดำเนินการ',
      last_updated: format(new Date(), 'dd/MM/yyyy'),
      editor_name: 'สมศรี',
      draft_section: current_section
    }

    if(isNewDraft){
      dispatchs(appendOperationFollowTable(formInfo))
    }else{
      editSubmit(formInfo.id,dispatchs,formInfo)
    }

  } catch (error) {
    // Handle any errors that occur during the API request
    console.error('Error fetching data:', error);
  }

};

function generateRandomNumber() {
    const min = 10;
    const max = 99;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

export const searchIdInJsonArray = (id: number, data: any): number | null => {
    const item = data.find((item: { id: number }) => item.id === id);
    return item ? item.id : null;
};

export const updateFormById = async(id:string, dispatchs:any) =>{
    let data: any[] = store.getState().operationFollowTable.data
    //const tableList: any[] = store.getState().operationFollowForm.operationFollowList
    let _data: FormState = data.find((item: { id: string }) => item.id === id)
    // _data = {
    //   ..._data,
    //   operationFollowList: tableList
    // }
    dispatchs(updateFormField(_data))
}

export const resetNew = async(dispatchs:any) => {
  dispatchs(resetForm())
}

export const submitReportDataService = async(dispatch:any, id: number, newData: FormData) => {
  const data: any[] = store.getState().operationFollowForm.dataList
}

export const editSubmit= async(id:string, dispatchs:any, formData: any) =>{

    alert('edit trigger')
    // let _formData = {...formData}
    
    // _formData = {
    //   ...formData,
    //   section2: {
    //     ...formData.section2,
    //     quarter: {
    //       quarter1: {
    //         month1: formData.section2.quarter.quarter1.month1.replaceAll(',',''),
    //         month2: formData.section2.quarter.quarter1.month2.replaceAll(',',''),
    //         month3: formData.section2.quarter.quarter1.month3.replaceAll(',',''),
    //         total: formData.section2.quarter.quarter1.total,
    //         porportion: formData.section2.quarter.quarter1.porportion
    //       },
    //       quarter2: {
    //         month1: formData.section2.quarter.quarter2.month1.replaceAll(',',''),
    //         month2: formData.section2.quarter.quarter2.month2.replaceAll(',',''),
    //         month3: formData.section2.quarter.quarter2.month3.replaceAll(',',''),
    //         total: formData.section2.quarter.quarter2.total,
    //         porportion: formData.section2.quarter.quarter2.porportion
    //       },
    //       quarter3: {
    //         month1: formData.section2.quarter.quarter3.month1.replaceAll(',',''),
    //         month2: formData.section2.quarter.quarter3.month2.replaceAll(',',''),
    //         month3: formData.section2.quarter.quarter3.month3.replaceAll(',',''),
    //         total: formData.section2.quarter.quarter3.total,
    //         porportion: formData.section2.quarter.quarter3.porportion
    //       },
    //       quarter4: {
    //         month1: formData.section2.quarter.quarter4.month1.replaceAll(',',''),
    //         month2: formData.section2.quarter.quarter4.month2.replaceAll(',',''),
    //         month3: formData.section2.quarter.quarter4.month3.replaceAll(',',''),
    //         total: formData.section2.quarter.quarter4.total,
    //         porportion: formData.section2.quarter.quarter4.porportion
    //       }
    //     },
    //   }
    // }

    // console.log(_formData)

    // dispatchs(editTableById({
    //   id: id,
    //   data: _formData,
    // }));
}

export const rejectEdit = (id:string, dispatchs:any, formData: any) => {

  const data = store.getState().operationFollowTable.data
  let items = data.find((item: { id: string }) => item.id == id)

  let _items = {...items }

  
  _items = {
    ..._items,
    status: 'ส่งกลับแก้ไข'
  }

  dispatchs(editTableById({
    id: id,
    data: _items,
  }));

}

export const checkUserRoleService = () => {
  
  const {
    data,
    isError: isFetchProfileError,
    refetch,
  } = useFetchProfileQuery();

  if(data?.dbUser.nameEn == 'admin_local'){
    console.log(data?.dbUser.nameEn)
    return 'admin'
  }else{
    return 'user'
  }
  // return 'admin'

}

export const setApproveToIdListService = (dispatch: any, approveList: Array<string>) => {

  dispatch(setApproveList({
    approveList: approveList
  }))

}

export const getYearsService = () => {
  return useGetYearsQuery({})
}

export const getDepartmentLevelOneService = () => {
  return useDepartmentLevelOneQuery({}) 
}

export const getDepartmentLevelTwoService = (params: any) => {
  return useDepartmentLevelTwoQuery(params) 
}

export const getDepartmentLevelThreeService = (params: any) => {
  return useDepartmentLevelThreeQuery(params) 
}

export const getStatusListService = () => {
  return useStatusListQuery({})
}

const getSection1Data = (data: any) =>{
  let param_section1 = {
    projectNameTH: data.section1.project_name,
    projectYear: parseInt(data.section1.yearBudget),
    masterPlanId: "10001",
    expenseItem: null,
    budgetActId: data.section1.act_group,
    strategyGroupId: data.section1.strategic_goal,
    overviewStrategyId: data.section1.strategic,
    mainPlanId: data.section1.planning,
    projectType: data.section1.project_type,
  }

  return param_section1
}

const getSection2Data = async (
  data: any, 
  ) => {

  const _consistencyMasterData: any = await masterDataApiService.getConsistencyMasterData()
  const _consistencyPolicyData: any = await masterDataApiService.getConsistencyPolicyData() 
  const _gapsData: any = await masterDataApiService.getGapsData()
  const _stakeHolderOneData: any = await masterDataApiService.stakeHolder1()
  const _stakeHolderTwoData: any = await masterDataApiService.stakeHolder2()
  const _stakeHolderThreeData: any = await masterDataApiService.stakeHolder3()
  const _stakeHolderFourData: any = await masterDataApiService.stakeHolder4()
  const _stakeHolderFiveData: any = await masterDataApiService.stakeHolder5()

  const consistencyMasterData = _consistencyMasterData?.data
  const consistencyPolicyData = _consistencyPolicyData?.data 
  const gapsData = _gapsData?.data
  const stakeHolderOneData = _stakeHolderOneData?.data
  const stakeHolderTwoData = _stakeHolderTwoData?.data
  const stakeHolderThreeData = _stakeHolderThreeData?.data
  const stakeHolderFourData = _stakeHolderFourData?.data
  const stakeHolderFiveData = _stakeHolderFiveData?.data



  let consistencyMasterList: any[] = []
  Object.keys(consistency_map).forEach((attributeName) => {
    let compare_name = consistency_map[attributeName as keyof typeof consistency_map]
    let consis_data = consistencyMasterData.find((item: { consistencyMasterName: string }) => item.consistencyMasterName === compare_name);
    if(data.section2.suite_outside_policy.isMainPlanGroup[attributeName]){
      consistencyMasterList.push({
        consistencyMasterId: consis_data?.consistencyMasterId
      })
    }
  });

  let consistencyPolicyList: any[] = []
  Object.keys(consistency_policy_map).forEach((attributeName) => {
    let compare_name = consistency_policy_map[attributeName as keyof typeof consistency_policy_map]
    let consis_data = consistencyPolicyData.find((item: { consistencyPolicyTh: string }) => item.consistencyPolicyTh === compare_name);
    if(data.section2.suite_outside_policy[attributeName]){
      consistencyPolicyList.push({
        consistencyPolicyId: consis_data?.consistencyPolicyId
      })
    }
  });

  let gapsList: any[] = []
  Object.keys(gap_map).forEach((attributeName) => {
    let compare_name = gap_map[attributeName as keyof typeof gap_map]
    let consis_data = gapsData.find((item: { gapName: string }) => item.gapName === compare_name);
    if(data.section2.suite_outside_policy['isClosedGapGroup'][attributeName]){
      gapsList.push({
        gapId: consis_data?.gapId
      })
    }
  });

  let stakeHolder1List: any[] = []
  for (let i = 0; i < stakeHolderOneData.length; i++) {
    Object.keys(stakeholder1).forEach((attributeName) => {
      let compare_name = stakeholder1[attributeName as keyof typeof stakeholder1]
      if(compare_name == stakeHolderOneData[i]['stakeholder01Name']){
        if(data.section2.stakeHolder_Group['isGovernmentAuditGroup'][attributeName]){
          stakeHolder1List.push({
            stakeholder01Id: stakeHolderOneData[i]['stakeholder01Id']
          })
        }
      }else{
        if(stakeHolderOneData[i].hasOwnProperty('stakeholder01Options')){
          for(let j = 0; j < stakeHolderOneData[i]['stakeholder01Options'].length; j++){
            Object.keys(stakeholder1).forEach((attributeName) => {
              compare_name = stakeholder1[attributeName as keyof typeof stakeholder1]
              if(compare_name == stakeHolderOneData[i]['stakeholder01Options'][j]){
                if(data.stakeHolder_Group['isGovernmentAuditGroup'][attributeName]){
                  stakeHolder1List.push({
                    stakeholder01Id: stakeHolderOneData[i]['stakeholder01Id']
                  })
                }
              }
            })
          }
        }

      }
    })
  }

  let stakeHolder2List: any[] = []
  for (let i = 0; i < stakeHolderTwoData.length; i++) {
    Object.keys(stakeholder2).forEach((attributeName) => {
      let compare_name = stakeholder2[attributeName as keyof typeof stakeholder2]
      if(compare_name == stakeHolderTwoData[i]['stakeholder02Name']){
        if(data.section2.stakeHolder_Group['isProviderCustomerGroup'][attributeName]){
          stakeHolder2List.push({
            stakeholder02Id: stakeHolderTwoData[i]['stakeholder02Id']
          })
        }
      }else{
        if(stakeHolderTwoData[i].hasOwnProperty('stakeholder02Options')){
          for(let j = 0; j < stakeHolderTwoData[i]['stakeholder02Options'].length; j++){
            Object.keys(stakeholder2).forEach((attributeName) => {
              compare_name = stakeholder2[attributeName as keyof typeof stakeholder2]
              if(compare_name == stakeHolderTwoData[i]['stakeholder02Options'][j]){
                if(data.stakeHolder_Group['isProviderCustomerGroup'][attributeName]){
                  stakeHolder2List.push({
                    stakeholder02Id: stakeHolderTwoData[i]['stakeholder02Id']
                  })
                }
              }
            })
          }
        }

      }
    })
  }

  let stakeHolder3List: any[] = []
  for (let i = 0; i < stakeHolderThreeData.length; i++) {
    Object.keys(stakeholder3).forEach((attributeName) => {
      let compare_name = stakeholder3[attributeName as keyof typeof stakeholder3]
      if(compare_name == stakeHolderThreeData[i]['stakeholder03Name']){
        if(data.section2.stakeHolder_Group['isCustomerGroup'][attributeName]){
          stakeHolder3List.push({
            stakeholder03Id: stakeHolderThreeData[i]['stakeholder03Id']
          })
        }
      }else{
        if(stakeHolderThreeData[i].hasOwnProperty('stakeholder03Options')){
          for(let j = 0; j < stakeHolderThreeData[i]['stakeholder03Options'].length; j++){
            Object.keys(stakeholder3).forEach((attributeName) => {
              compare_name = stakeholder3[attributeName as keyof typeof stakeholder3]
              if(compare_name == stakeHolderThreeData[i]['stakeholder03Options'][j]){
                if(data.stakeHolder_Group['isCustomerGroup'][attributeName]){
                  stakeHolder3List.push({
                    stakeholder03Id: stakeHolderThreeData[i]['stakeholder03Id']
                  })
                }
              }
            })
          }
        }

      }
    })
  }


  function findPathByValue (mapData:any,name:string) {
    let result = ''
    Object.keys(mapData).forEach((attributeName) => {
      if(name == mapData[attributeName]){
        result =  attributeName
      }
    })
    return result
  }

  // loop outer
  let stakeHolder4List: any[] = []
  for (let i = 0; i < stakeHolderFourData.length; i++) {
    Object.keys(stakeholder4).forEach((attributeName) => {
      let compare_name = stakeholder4[attributeName as keyof typeof stakeholder4]
      if(compare_name == stakeHolderFourData[i]['stakeholder04Name']){
        if(data.section2.stakeHolder_Group['isSenderGroup'][attributeName] &&
        !stakeHolderFourData[i].hasOwnProperty('stakeholder04Options')
        ){
          stakeHolder4List.push({
            stakeholder04Id: stakeHolderFourData[i]['stakeholder04Id']
          })
        }
      }
    })
  }

  // loop inner
  for (let i = 0; i < stakeHolderFourData.length; i++) {
    let attr = findPathByValue(stakeholder4, stakeHolderFourData[i]['stakeholder04Name'])
    let optionList: any[] = []
    for(let j = 0; j < stakeHolderFourData[i]['stakeholder04Options'].length; j++){
      Object.keys(stakeholder4).forEach((attributeName) => {
        let compare_name = stakeholder4[attributeName as keyof typeof stakeholder4]
        if(compare_name == stakeHolderFourData[i]['stakeholder04Options'][j]['stakeholder04OptionName']){
          if(data.section2.stakeHolder_Group['isSenderGroup'][attr + 'Group'][attributeName]){
            optionList.push({
              stakeholder04OptionId: stakeHolderFourData[i]['stakeholder04Options'][j]['stakeholder04OptionId']
            })
          }
        }
      })
    }
    if(optionList.length > 0){
      stakeHolder4List.push({
        stakeholder04Id: stakeHolderFourData[i]['stakeholder04Id'],
          stakeholder04Options: optionList
      })
    }
  }

  // loop outer
  let stakeHolder5List: any[] = []
  for (let i = 0; i < stakeHolderFiveData.length; i++) {
    Object.keys(stakeholder5).forEach((attributeName) => {
      let compare_name = stakeholder5[attributeName as keyof typeof stakeholder5]
      if(compare_name == stakeHolderFiveData[i]['stakeholder05Name']){
        //console.log('check' + stakeHolderFiveData[i].hasOwnProperty('stakeholder05Options'))
        let checkOptionList: any[] = stakeHolderFiveData[i]['stakeholder05Options']
        if(data.section2.stakeHolder_Group['isWorkingUnitGroup'][attributeName] &&
         !(checkOptionList?.length > 0)
        ){
          stakeHolder5List.push({
            stakeholder05Id: stakeHolderFiveData[i]['stakeholder05Id']
          })
        }
      }
    })
  }

  //loop inner
  for (let i = 0; i < stakeHolderFiveData.length; i++) {
    let attr = findPathByValue(stakeholder5, stakeHolderFiveData[i]['stakeholder05Name'])
    let optionList: any[] = []
    if(stakeHolderFiveData[i].hasOwnProperty('stakeholder05Options') && stakeHolderFiveData[i]['stakeholder05Options'].length > 0){
      for(let j = 0; j < stakeHolderFiveData[i]['stakeholder05Options'].length; j++){
      Object.keys(stakeholder5).forEach((attributeName) => {
        let compare_name = stakeholder5[attributeName as keyof typeof stakeholder5]
        if(compare_name == stakeHolderFiveData[i]['stakeholder05Options'][j]['stakeholder05OptionName']){
          if(data.section2.stakeHolder_Group['isWorkingUnitGroup'][attr + 'Group'][attributeName]){
            optionList.push({
              stakeholder05OptionId: stakeHolderFiveData[i]['stakeholder05Options'][j]['stakeholder05OptionId']
            })
          }
        }
      })
      }
    }
    if(optionList.length > 0){
      stakeHolder5List.push({
        stakeholder05Id: stakeHolderFiveData[i]['stakeholder05Id'],
          stakeholder05Options: optionList
      })
    }
  }

  let param_section2 = {
    planBudget: parseInt((data.section2.budget).replaceAll(',','')),
    projectBudgets: [
          {
              projectId: data.id,
              projectBudgetId: data.id,
              budgetMonth: "ตุลาคม",
              budgetAmount: parseInt(data.section2.quarter.quarter1.month1),
              // กันยายน = 12, ตุลาคม = 1
              seqNo: 10
          },
          {
              projectId: data.id,
              projectBudgetId: data.id,
              budgetMonth: "พฤษจิกายน",
              budgetAmount: parseInt(data.section2.quarter.quarter1.month2),
              // กันยายน = 12, ตุลาคม = 1
              seqNo: 11
          },
          {
              projectId: data.id,
              projectBudgetId: data.id,
              budgetMonth: "ธันวาคม",
              budgetAmount: parseInt(data.section2.quarter.quarter1.month3),
              // กันยายน = 12, ตุลาคม = 1
              seqNo: 12
          },
          {
              projectId: data.id,
              projectBudgetId: data.id,
              budgetMonth: "มกราคม",
              budgetAmount: parseInt(data.section2.quarter.quarter2.month1),
              // กันยายน = 12, ตุลาคม = 1
              seqNo: 1
          },
          {
            projectId: data.id,
            projectBudgetId: data.id,
            budgetMonth: "กุมภาพันธ์",
            budgetAmount: parseInt(data.section2.quarter.quarter2.month2),
            // กันยายน = 12, ตุลาคม = 1
            seqNo: 2
          },
          {
            projectId: data.id,
            projectBudgetId: data.id,
            budgetMonth: "มีนาคม",
            budgetAmount: parseInt(data.section2.quarter.quarter2.month3),
            // กันยายน = 12, ตุลาคม = 1
            seqNo: 3
          },
          {
            projectId: data.id,
            projectBudgetId: data.id,
            budgetMonth: "เมษายน",
            budgetAmount: parseInt(data.section2.quarter.quarter3.month1),
            // กันยายน = 12, ตุลาคม = 1
            seqNo: 4
          },
          {
            projectId: data.id,
            projectBudgetId: data.id,
            budgetMonth: "พฤษภาคม",
            budgetAmount: parseInt(data.section2.quarter.quarter3.month2),
            // กันยายน = 12, ตุลาคม = 1
            seqNo: 5
          },
          {
            projectId: data.id,
            projectBudgetId: data.id,
            budgetMonth: "มิถุนายน",
            budgetAmount: parseInt(data.section2.quarter.quarter3.month3),
            // กันยายน = 12, ตุลาคม = 1
            seqNo: 6
          },
          {
            projectId: data.id,
            projectBudgetId: data.id,
            budgetMonth: "กรกฎาคม",
            budgetAmount: parseInt(data.section2.quarter.quarter4.month1),
            // กันยายน = 12, ตุลาคม = 1
            seqNo: 7
          },
          {
            projectId: data.id,
            projectBudgetId: data.id,
            budgetMonth: "สิงหาคม",
            budgetAmount: parseInt(data.section2.quarter.quarter4.month2),
            // กันยายน = 12, ตุลาคม = 1
            seqNo: 8
          },
          {
            projectId: data.id,
            projectBudgetId: data.id,
            budgetMonth: "กันยายน",
            budgetAmount: parseInt(data.section2.quarter.quarter4.month3),
            // กันยายน = 12, ตุลาคม = 1
            seqNo: 9
          },
          // ... add others 10 months
      ],
      consistencyPolicies: consistencyPolicyList,
      consistencyMasters: consistencyMasterList,
      gaps: gapsList,
      stakeholder01: stakeHolder1List,
      stakeholder02: stakeHolder2List,
      stakeholder03: stakeHolder3List,
      stakeholder04: stakeHolder4List,
      stakeholder05: stakeHolder5List,
  }

  return param_section2
}

const getSection3Data = (data: any) => {

  let objectiveList: any[] = []
  for(let i = 0; i < data.section3.project_objective2.length; i++){
    if(data.section3.project_objective2[i] != ''){
      objectiveList.push({
        objectiveName: data.section3.project_objective2[i]
    })
    }
  }

  let area_list: any[] = []
  for(let i = 0; i < data.section3.list_operation_area.length; i++){
    area_list.push({
      oparationAreaId: data.section3.list_operation_area[i].indx
    })
  }

  let projectoutcomeList: any[] = []
  for(let i = 0; i < data.section3.project_outcome.length; i++){
    projectoutcomeList.push({
      mainOutcomeId: data.section3.project_outcome[i]['name_indicator'],
      seqNo: i + 1,
      totalAmt: parseInt(data.section3.project_outcome[i]['total_percent']),
      quarterAmt01: parseInt(data.section3.project_outcome[i]['quarter1_percent']),
      quarterAmt02: parseInt(data.section3.project_outcome[i]['quarter2_percent']),
      quarterAmt03: parseInt(data.section3.project_outcome[i]['quarter3_percent']),
      quarterAmt04: parseInt(data.section3.project_outcome[i]['quarter4_percent'])
    })
  }

  let targetGroupList: any[] = []
  for(let i = 0; i < data.section3.project_target.length; i++){
    targetGroupList.push({
      targetGroupId: data.section3.project_target[i]['target_name']
    })
  }

  let data_section3 = {
      planPrincipleReason: data.section3.principal_reason,
      objectives: objectiveList.length > 0 ? objectiveList : null,
      oparationAreas: area_list,
      mainOutcomes: projectoutcomeList,
      targetGroups: targetGroupList,
    }

  return data_section3
}

const getSection4Data = (data: any) => {
  let data_section4 = {
      planBeginDt: data.section4.project_start,
      planEndDt: data.section4.project_end,
      planRisk: null,
      planRiskManagement: data.section4.risk_prevention,
      resultRiskManagement: null
    }

  return data_section4
}

export const getOperationFollowDataService = (dispatchs: any, data: any) => {

  let init_state = {...initialState}
  let keep: any[] = []

  if(data != undefined){

    for(let i = 0; i < data.projects.length; i++){
      init_state = {
        ...init_state,
        id: data.projects[i].projectId,
        section1: {
          ...init_state.section1,
          yearBudget: data.projects[i].projectYear,
          budgetSource: "",
          paymentList: "",
          organizationManageMent: data.projects[i].resultProjectType,
          act_group: "",
          strategic_goal: data.projects[i].strategyGroupId,
          strategic: data.projects[i].overviewStrategyId,
          planning: data.projects[i].mainPlanId,
          project_type: "",
          project_name: data.projects[i].projectNameTH,
        },
        editor_name: data.projects[i].resultUpdatedBy,
        status: 'อยู่ระหว่างดำเนินการ',
        project_status: data.projects[i].processStatus,
        edit_status: 'อยู่ระหว่างดำเนินการ',
        edit_detail: 'อยู่ระหว่างดำเนินการ'
      }
      keep.push(init_state)
      init_state = initialState
    }
  }
  dispatchs(replaceTable(keep))
}



// {
//   "projectId": "d14faeef-89d4-47a3-b06c-921f4d8cd7b7",
//   "projectNameTH": "โครงการประโยชน์77890",
//   "projectNameEN": null,
//   "projectYear": 2566,
//   "masterPlanId": "10001",
//   "expenseItem": null,
//   "strategyGroupId": "2023011910120300406277",
//   "overviewStrategyId": "2023011910140400406279",
//   "mainPlanId": "2023012009561300406334",
//   "projectType": "01",
//   "planBudget": 1200000,
//   "planPrincipleReason": "หลักการ1",
//   "planBeginDt": "2023-07-29",
//   "planEndDt": "2023-07-30",
//   "planRisk": null,
//   "planRiskManagement": "หกด",
//   "resultRiskManagement": null,
//   "planObjective": null,
//   "planOthersOperationArea": null,
//   "planOthersOutcome": null,
//   "planOtherTargetGroup": null,
//   "planEvaluationMethod": null,
//   "planExpectation": null,
//   "resultProjectType": null,
//   "resultBudget": null,
//   "resultProjeOverview": null,
//   "resultOthersOutcome": null,
//   "resultEvaluationMethod": null,
//   "resultProjectProblem": null,
//   "resultProjectSuggestion": null,
//   "processStatus": "00",
//   "recordStatus": "Y",
//   "isDelete": "N",
//   "planCreatedBy": "user_east_asia",
//   "planCreatedDt": "2023-07-29",
//   "planUpdatedBy": null,
//   "planUpdatedDt": "2023-07-29",
//   "resultCreatedBy": null,
//   "resultCreatedDt": null,
//   "resultUpdatedBy": null,
//   "resultUpdatedDt": null,
//   "groupId": null,
//   "departmentId": "710100",
//   "procurementBudgetType": null,
//   "remark": null,
//   "isReportResult": null,
//   "isApprovedReportResult": null,
//   "planRoi": null,
//   "resultRoi": null,
//   "updateStatus": null,
//   "planOtherBenefit": null,
//   "resultOtherBenefit": null,
//   "ofiRoadMap": null,
//   "lastProcessStatus": null,
//   "specialBudget": null,
//   "projectDocRefNo": null,
//   "isSendNotify": null,
//   "isSla": null,
//   "oldDepartmentId": null,
//   "newDepartmentId": null,
//   "planMasterObjective": null,
//   "majorStrategyId": null,
//   "projectSeqNo": null,
//   "marketPlanId": null,
//   "strategyRegionId": null,
//   "planCategoryId": null,
//   "department": {
//       "departmentId": "710100",
//       "departmentCode": "710100",
//       "departmentNameEn": "กองตลาดเอเชียตะวันออก",
//       "departmentNameTh": "กองตลาดเอเชียตะวันออก",
//       "departmentShortName": "กตช.",
//       "departmentNameLayer": 3,
//       "processStatus": "01",
//       "recordStatus": "Y",
//       "isDelete": "N",
//       "createdBy": "SYSTEM",
//       "createdDt": "2019-01-14",
//       "updatedBy": "SYSTEM",
//       "updatedDt": "2019-01-14",
//       "mainDepartment": null,
//       "dashboardDataType": null
//   },
//   "overviewStrategy": {
//       "overviewStrategyId": "2023011910140400406279",
//       "overviewStrategyNameTh": "ตัวชี้วัดตามบันทึกข้อตกลง (PA)",
//       "overviewStrategyNameEn": "ตัวชี้วัดตามบันทึกข้อตกลง (PA)",
//       "overviewStrategyDetail": null,
//       "overviewStrategyYear": 2566,
//       "overviewStrategyType": "1",
//       "processStatus": "01",
//       "recordStatus": "Y",
//       "createdBy": "kom.sata",
//       "createdDt": null,
//       "updatedBy": "kom.sata",
//       "updatedDt": "2023-01-19"
//   },
//   "masterPlan": {
//       "masterPlanId": "10001",
//       "masterPlanNameTh": "ตลาดต่างประเทศ",
//       "masterPlanNameEn": "International markets",
//       "masterPlanDesc": "ตลาดต่างประเทศ",
//       "processStatus": "01",
//       "recordStatus": "Y",
//       "createdBy": "admin",
//       "createdDt": "2016-11-18",
//       "updatedBy": "asspacific",
//       "updatedDt": "2017-03-21"
//   },
//   "marketPlan": null,
//   "strategyGroup": {
//       "strategyGroupId": "2023011910120300406277",
//       "masterPlanId": "10003",
//       "strategyGroupYear": 2566,
//       "strategyGroupSeq": 5,
//       "strategyGroupTh": "ตัวชี้วัดตามบันทึกข้อตกลง (PA)",
//       "strategyGroupEn": "ตัวชี้วัดตามบันทึกข้อตกลง (PA)",
//       "processStatus": "01",
//       "recordStatus": "Y",
//       "createdBy": "kom.sata",
//       "createdDt": "2023-01-19",
//       "updatedBy": "kom.sata",
//       "updatedDt": "2023-01-19"
//   },
//   "strategyRegion": null,
//   "mainPlan": {
//       "mainPlanId": "2023012009561300406334",
//       "overviewStrategyId": "2023011910140400406279",
//       "strategyRegionId": "2023011910142500406280",
//       "mainPlanYear": 2566,
//       "mainPlanNameTh": "ตัวชี้วัดตามบันทึกข้อตกลง (PA)",
//       "mainPlanNameEn": "ตัวชี้วัดตามบันทึกข้อตกลง (PA)",
//       "mainPlanDetail": null,
//       "processStatus": "01",
//       "recordStatus": "Y",
//       "createdBy": "admin",
//       "createdDate": null,
//       "updatedBy": null,
//       "updatedDate": "2023-01-20",
//       "groupMainPlanId": null
//   },
//   "planCategory": null,
//   "projectBudgets": [
//       {
//           "projectBudgetId": "579be8de-bc36-4bc1-b85f-8712e0d8d866",
//           "projectId": "d14faeef-89d4-47a3-b06c-921f4d8cd7b7",
//           "projectActionType": "00",
//           "budgetMonth": "ตุลาคม",
//           "budgetAmount": 100000,
//           "seqNo": 10,
//           "processStatus": "00",
//           "recordStatus": "Y",
//           "isDelete": "N",
//           "createdBy": "user_east_asia",
//           "createdDate": "2023-07-29",
//           "updatedBy": null,
//           "updatedDate": null,
//           "budgetMonthNo": null
//       },
//       {
//           "projectBudgetId": "92139a65-5e12-4691-8ec6-0fa23a871f1f",
//           "projectId": "d14faeef-89d4-47a3-b06c-921f4d8cd7b7",
//           "projectActionType": "00",
//           "budgetMonth": "ธันวาคม",
//           "budgetAmount": 100000,
//           "seqNo": 12,
//           "processStatus": "00",
//           "recordStatus": "Y",
//           "isDelete": "N",
//           "createdBy": "user_east_asia",
//           "createdDate": "2023-07-29",
//           "updatedBy": null,
//           "updatedDate": null,
//           "budgetMonthNo": null
//       },
//       {
//           "projectBudgetId": "e1354181-c668-45fb-9e79-29c1b95cea30",
//           "projectId": "d14faeef-89d4-47a3-b06c-921f4d8cd7b7",
//           "projectActionType": "00",
//           "budgetMonth": "มีนาคม",
//           "budgetAmount": 100000,
//           "seqNo": 3,
//           "processStatus": "00",
//           "recordStatus": "Y",
//           "isDelete": "N",
//           "createdBy": "user_east_asia",
//           "createdDate": "2023-07-29",
//           "updatedBy": null,
//           "updatedDate": null,
//           "budgetMonthNo": null
//       },
//       {
//           "projectBudgetId": "3d211ed5-5c3d-40c5-b216-c38c8f24f381",
//           "projectId": "d14faeef-89d4-47a3-b06c-921f4d8cd7b7",
//           "projectActionType": "00",
//           "budgetMonth": "กรกฎาคม",
//           "budgetAmount": 100000,
//           "seqNo": 7,
//           "processStatus": "00",
//           "recordStatus": "Y",
//           "isDelete": "N",
//           "createdBy": "user_east_asia",
//           "createdDate": "2023-07-29",
//           "updatedBy": null,
//           "updatedDate": null,
//           "budgetMonthNo": null
//       },
//       {
//           "projectBudgetId": "278e4bc3-743a-4749-8db1-37e007dfedcd",
//           "projectId": "d14faeef-89d4-47a3-b06c-921f4d8cd7b7",
//           "projectActionType": "00",
//           "budgetMonth": "กุมภาพันธ์",
//           "budgetAmount": 100000,
//           "seqNo": 2,
//           "processStatus": "00",
//           "recordStatus": "Y",
//           "isDelete": "N",
//           "createdBy": "user_east_asia",
//           "createdDate": "2023-07-29",
//           "updatedBy": null,
//           "updatedDate": null,
//           "budgetMonthNo": null
//       },
//       {
//           "projectBudgetId": "a3210af1-71ce-41bd-afad-f7d41815e6d9",
//           "projectId": "d14faeef-89d4-47a3-b06c-921f4d8cd7b7",
//           "projectActionType": "00",
//           "budgetMonth": "มิถุนายน",
//           "budgetAmount": 100000,
//           "seqNo": 6,
//           "processStatus": "00",
//           "recordStatus": "Y",
//           "isDelete": "N",
//           "createdBy": "user_east_asia",
//           "createdDate": "2023-07-29",
//           "updatedBy": null,
//           "updatedDate": null,
//           "budgetMonthNo": null
//       },
//       {
//           "projectBudgetId": "71c20797-3586-425e-83dd-8ccdec681d1e",
//           "projectId": "d14faeef-89d4-47a3-b06c-921f4d8cd7b7",
//           "projectActionType": "00",
//           "budgetMonth": "พฤษจิกายน",
//           "budgetAmount": 100000,
//           "seqNo": 11,
//           "processStatus": "00",
//           "recordStatus": "Y",
//           "isDelete": "N",
//           "createdBy": "user_east_asia",
//           "createdDate": "2023-07-29",
//           "updatedBy": null,
//           "updatedDate": null,
//           "budgetMonthNo": null
//       },
//       {
//           "projectBudgetId": "91ad62c4-e6be-4be8-a3bf-5f54e6b217e1",
//           "projectId": "d14faeef-89d4-47a3-b06c-921f4d8cd7b7",
//           "projectActionType": "00",
//           "budgetMonth": "มกราคม",
//           "budgetAmount": 100000,
//           "seqNo": 1,
//           "processStatus": "00",
//           "recordStatus": "Y",
//           "isDelete": "N",
//           "createdBy": "user_east_asia",
//           "createdDate": "2023-07-29",
//           "updatedBy": null,
//           "updatedDate": null,
//           "budgetMonthNo": null
//       },
//       {
//           "projectBudgetId": "3677761d-54e9-4df0-bae6-f6f7681aaf78",
//           "projectId": "d14faeef-89d4-47a3-b06c-921f4d8cd7b7",
//           "projectActionType": "00",
//           "budgetMonth": "พฤษภาคม",
//           "budgetAmount": 100000,
//           "seqNo": 5,
//           "processStatus": "00",
//           "recordStatus": "Y",
//           "isDelete": "N",
//           "createdBy": "user_east_asia",
//           "createdDate": "2023-07-29",
//           "updatedBy": null,
//           "updatedDate": null,
//           "budgetMonthNo": null
//       },
//       {
//           "projectBudgetId": "bac59327-94ee-4829-8c77-d5a850f8ca56",
//           "projectId": "d14faeef-89d4-47a3-b06c-921f4d8cd7b7",
//           "projectActionType": "00",
//           "budgetMonth": "กันยายน",
//           "budgetAmount": 100000,
//           "seqNo": 9,
//           "processStatus": "00",
//           "recordStatus": "Y",
//           "isDelete": "N",
//           "createdBy": "user_east_asia",
//           "createdDate": "2023-07-29",
//           "updatedBy": null,
//           "updatedDate": null,
//           "budgetMonthNo": null
//       },
//       {
//           "projectBudgetId": "87e31270-130a-4c2c-9c47-933e967417b9",
//           "projectId": "d14faeef-89d4-47a3-b06c-921f4d8cd7b7",
//           "projectActionType": "00",
//           "budgetMonth": "เมษายน",
//           "budgetAmount": 100000,
//           "seqNo": 4,
//           "processStatus": "00",
//           "recordStatus": "Y",
//           "isDelete": "N",
//           "createdBy": "user_east_asia",
//           "createdDate": "2023-07-29",
//           "updatedBy": null,
//           "updatedDate": null,
//           "budgetMonthNo": null
//       },
//       {
//           "projectBudgetId": "1b91c0f3-a42a-4105-851c-1ac5208ebe1b",
//           "projectId": "d14faeef-89d4-47a3-b06c-921f4d8cd7b7",
//           "projectActionType": "00",
//           "budgetMonth": "สิงหาคม",
//           "budgetAmount": 100000,
//           "seqNo": 8,
//           "processStatus": "00",
//           "recordStatus": "Y",
//           "isDelete": "N",
//           "createdBy": "user_east_asia",
//           "createdDate": "2023-07-29",
//           "updatedBy": null,
//           "updatedDate": null,
//           "budgetMonthNo": null
//       }
//   ],
//   "consistencyPolicies": [],
//   "consistencyMasters": [
//       {
//           "consistencyMasterId": "7d045ebf-7194-4d88-b30e-a87924b29093",
//           "consistencyMasterName": "แผนแม่บทการบริหารจัดการความรู้ ททท.",
//           "createdDate": "2023-07-22T12:50:12.080Z",
//           "updatedDate": "2023-07-22T12:50:12.080Z",
//           "deletedDate": null
//       },
//       {
//           "consistencyMasterId": "9bed8370-1c09-4c5e-a6d0-2c162dfc28b1",
//           "consistencyMasterName": "แผนบริหารและพัฒนาทรัพยากรบุคคล ททท.",
//           "createdDate": "2023-07-22T12:50:12.080Z",
//           "updatedDate": "2023-07-22T12:50:12.080Z",
//           "deletedDate": null
//       }
//   ],
//   "stakeholder01": [
//       {
//           "stakeholder01Id": "e3209609-4171-4003-8ad6-a6f84320f877",
//           "stakeholder01Name": "สำนักงานคณะกรรมการนโยบายรัฐวิสาหกิจ",
//           "createdDate": "2023-07-22T13:32:39.150Z",
//           "updatedDate": "2023-07-22T13:32:39.150Z",
//           "deletedDate": null
//       },
//       {
//           "stakeholder01Id": "e9638f4b-4c33-4891-9193-44552730d77a",
//           "stakeholder01Name": "กระทรวงการท่องเที่ยวและกีฬา",
//           "createdDate": "2023-07-22T13:32:39.150Z",
//           "updatedDate": "2023-07-22T13:32:39.150Z",
//           "deletedDate": null
//       }
//   ],
//   "stakeholder02": [
//       {
//           "stakeholder02Id": "0a5d2332-0ba7-47c9-bd1b-b7e11c3d52b6",
//           "stakeholder02Name": "นักท่องเที่ยวชาวไทย",
//           "createdDate": "2023-07-22T13:51:16.635Z",
//           "updatedDate": "2023-07-22T13:51:16.635Z",
//           "deletedDate": null
//       }
//   ],
//   "stakeholder03": [
//       {
//           "stakeholder03Id": "d98b3421-abbd-4ffd-9663-8069f46c8246",
//           "stakeholder03Name": "Online Travel Agency (ต่างประเทศและในประเทศ)",
//           "createdDate": "2023-07-22T13:52:44.173Z",
//           "updatedDate": "2023-07-22T13:52:44.173Z",
//           "deletedDate": null
//       },
//       {
//           "stakeholder03Id": "fb472500-9efd-4056-afae-b5fb6e531f63",
//           "stakeholder03Name": "ธุรกิจนำเที่ยว",
//           "createdDate": "2023-07-22T13:52:44.173Z",
//           "updatedDate": "2023-07-22T13:52:44.173Z",
//           "deletedDate": null
//       }
//   ],
//   "stakeholder04": [
//       {
//           "stakeholder04Id": "04e4939b-4fa1-456f-9740-617b5081537f",
//           "stakeholder04Name": "ผู้ส่งมอบภาครัฐ",
//           "createdDate": "2023-07-22T14:42:29.989Z",
//           "updatedDate": "2023-07-22T14:42:29.989Z",
//           "deletedDate": null
//       },
//       {
//           "stakeholder04Id": "fcb46356-8a49-4d9e-a58c-da7c70839c29",
//           "stakeholder04Name": "ผู้ส่งมอบภาคเอกชน",
//           "createdDate": "2023-07-22T14:42:29.989Z",
//           "updatedDate": "2023-07-22T14:42:29.989Z",
//           "deletedDate": null
//       }
//   ],
//   "stakeholder04Options": [],
//   "stakeholder05": [
//       {
//           "stakeholder05Id": "b0794bc8-93fe-48db-af9b-d7a800e2eb65",
//           "stakeholder05Name": "องค์การบริหารการพัฒนาพื้นที่พิเศษเพื่อการท่องเที่ยวอย่างยั่งยืน",
//           "createdDate": "2023-07-22T15:14:23.985Z",
//           "updatedDate": "2023-07-22T15:14:23.985Z",
//           "deletedDate": null
//       },
//       {
//           "stakeholder05Id": "cede62c0-7e04-419e-8292-1f8ca07cab19",
//           "stakeholder05Name": "สำนักงานส่งเสริมการจัดประชุมและนิทรรศการ",
//           "createdDate": "2023-07-22T15:14:23.985Z",
//           "updatedDate": "2023-07-22T15:14:23.985Z",
//           "deletedDate": null
//       }
//   ],
//   "stakeholder05Options": [],
//   "gaps": [
//       {
//           "gapId": "33362ef4-71e8-4216-8bbb-174f4c5d9d0b",
//           "gapName": "ด้านที่ 2 การวางแผนเชิงกลยุทธ์ (SP)",
//           "createdDate": "2023-07-22T12:49:53.932Z",
//           "updatedDate": "2023-07-22T12:49:53.932Z",
//           "deletedDate": null
//       },
//       {
//           "gapId": "bfb9c4fe-4de1-4f98-a015-7bb3f1c57944",
//           "gapName": "ด้านที่ 1 การกำกับดูแลที่ดีและการนำองค์กร (CG)",
//           "createdDate": "2023-07-22T12:49:53.932Z",
//           "updatedDate": "2023-07-22T12:49:53.932Z",
//           "deletedDate": null
//       }
//   ],
//   "objectives": [
//       {
//           "objectiveId": "b61c2fdf-4dd4-46dd-9f51-6184020b1780",
//           "projectId": "d14faeef-89d4-47a3-b06c-921f4d8cd7b7",
//           "objectiveName": "หกด",
//           "createdDate": "2023-07-28T18:38:28.286Z",
//           "updatedDate": "2023-07-28T18:38:28.286Z",
//           "deletedDate": null
//       },
//       {
//           "objectiveId": "c680d516-9d0d-40ae-9fa2-c76f7b4bab99",
//           "projectId": "d14faeef-89d4-47a3-b06c-921f4d8cd7b7",
//           "objectiveName": "หกดห",
//           "createdDate": "2023-07-28T18:38:28.314Z",
//           "updatedDate": "2023-07-28T18:38:28.314Z",
//           "deletedDate": null
//       },
//       {
//           "objectiveId": "9c0adb8a-b17f-4a80-b933-4db539f4bbb5",
//           "projectId": "d14faeef-89d4-47a3-b06c-921f4d8cd7b7",
//           "objectiveName": "หกด",
//           "createdDate": "2023-07-28T18:38:28.332Z",
//           "updatedDate": "2023-07-28T18:38:28.332Z",
//           "deletedDate": null
//       },
//       {
//           "objectiveId": "4c54fbf0-7e41-4b96-a3ad-a3ad5d8e655c",
//           "projectId": "d14faeef-89d4-47a3-b06c-921f4d8cd7b7",
//           "objectiveName": "หกด",
//           "createdDate": "2023-07-28T18:38:28.348Z",
//           "updatedDate": "2023-07-28T18:38:28.348Z",
//           "deletedDate": null
//       }
//   ],
//   "oparationAreas": [
//       {
//           "oparationAreaId": "20021",
//           "oparationAreaName01Th": "ประเทศไทย",
//           "oparationAreaName01En": "ประเทศไทย",
//           "oparationAreaName02Th": "นครราชสีมา",
//           "oparationAreaName02En": "นครราชสีมา",
//           "oparationAreaName03Th": null,
//           "oparationAreaName03En": null,
//           "remark": null,
//           "processStatus": "00",
//           "recordStatus": "Y",
//           "createdBy": null,
//           "createdDate": "2017-08-11",
//           "updatedBy": null,
//           "updatedDate": null,
//           "oparationAreaType": "00",
//           "refType01": null,
//           "refId01": null,
//           "refType02": null,
//           "refId02": null,
//           "refType03": null,
//           "refId03": null
//       }
//   ],
//   "mainOutcomes": [
//       {
//           "mainOutcomeId": "2018062010092000245680",
//           "masterPlanId": "10002",
//           "outcomeGroupType": "00",
//           "outcomeType": "00",
//           "outcomeCalculateType": "00",
//           "unitType": "01",
//           "outcomeNameTh": "จำนวนผู้เข้าร่วมกิจกรรมในโครงการ (คนในพื้นที่)",
//           "outcomeNameEn": "จำนวนผู้เข้าร่วมกิจกรรมในโครงการ (คนในพื้นที่)",
//           "remark": "ห้ามลบเนื่องจากนำไปออกรายงานและDashboard แก้ไขเท่านั้น!!",
//           "processStatus": "01",
//           "recordStatus": "Y",
//           "createdBy": "kom.sata",
//           "createdDate": "2018-06-20",
//           "updatedBy": "kom.sata",
//           "updatedDate": "2019-10-17"
//       }
//   ],
//   "projectOutcomes": [
//       {
//           "projectOutcomeId": "eed74458-a227-4286-8633-d46e4d6098e1",
//           "projectId": "d14faeef-89d4-47a3-b06c-921f4d8cd7b7",
//           "mainOutcomeId": "2018062010092000245680",
//           "totalAmt": 4,
//           "seqNo": 1,
//           "processStatus": null,
//           "recordStatus": null,
//           "isDelete": null,
//           "createdBy": null,
//           "createdDt": "2023-07-29",
//           "updatedBy": null,
//           "updatedDt": null,
//           "isEdit": null,
//           "refResultOutcomeId": null,
//           "isPlanAct": null,
//           "projectActionType": null,
//           "quarterAmt01": 1,
//           "quarterAmt02": 1,
//           "quarterAmt03": 1,
//           "quarterAmt04": 1
//       }
//   ],
//   "targetGroups": [
//       {
//           "targetGroupId": "2059",
//           "targetGroupType": "00",
//           "targetGroupNameTh": "กลุ่มคนทำงานรวมทั้งกลุ่มผู้มีรายได้สูงที่อาศัยในเมืองใหญ่ของแคนาดา",
//           "targetGroupNameEn": "กลุ่มคนทำงานรวมทั้งกลุ่มผู้มีรายได้สูงที่อาศัยในเมืองใหญ่ของแคนาดา",
//           "targetGroupSegment": "OTHER",
//           "targetGroupDesc": "ทุกคน",
//           "processStatus": "00",
//           "recordStatus": "N",
//           "createdBy": null,
//           "createdDate": "2017-02-24",
//           "updatedBy": null,
//           "updatedDate": null
//       }
//   ]
// }