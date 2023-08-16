import { initialState } from "@/components/OperationFollow/Edit/initial_state"
import { consistency_map, consistency_policy_map, gap_map, stakeholder1, stakeholder2, stakeholder3, stakeholder4, stakeholder5 } from "../consistency_mapname"
import EnvConfig from "@/config/env";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { useDispatch } from "react-redux";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from 'axios';

export const formatDataService = (OperationFollowData: any) => {
    //console.log(OperationFollowData)

    let formData = initialState

    formData = section1Map(formData, OperationFollowData)
    formData = section2Map(formData, OperationFollowData)
    formData = section3Map(formData, OperationFollowData)
    formData = section4Map(formData, OperationFollowData)

    //console.log(formData)
    return formData
}

export const updateFormService = (id: string, formData: any) => {
    try {
        return axios.patch(`${EnvConfig.apiUrl}/projects/${id}`, formData, {
            withCredentials: true, // Set this to include credentials in the request
        })
    } catch (error) {
        throw new Error ('Sorry internal server error')
    }
}


const section1Map = (data: any, apiData: any) => {
    data = {
        ...data,
        id: apiData?.projectId,
        section1: {
            ...data.section1,
            yearBudget: apiData?.projectYear,
            budgetSource: "",
            paymentList: "",
            organizationManageMent: "",
            act_group: apiData?.budgetActId,
            strategic_goal: apiData?.strategyGroupId,
            strategic: apiData?.overviewStrategyId,
            planning: apiData?.mainPlanId,
            project_type: apiData?.projectType,
            project_name: apiData?.projectNameTH,
        }
    }

    return data
}

const section2Map = (data: any, apiData: any) => {

    data = {
        ...data,
        section2: {
            ...data.section2,
            budget: apiData?.planBudget + ''
        }
    }

    for(let i = 0; i < apiData?.projectBudgets?.length; i++){

        if(apiData?.projectBudgets[i]['budgetMonth'] == 'มกราคม'){
            data = {
                ...data,
                section2: {
                    ...data.section2,
                    quarter: {
                        ...data.section2.quarter,
                        quarter2: {
                            ...data.section2.quarter.quarter2,
                            month1: apiData?.projectBudgets[i].budgetAmount
                        }
                    }
                }
            }
        }

        if(apiData?.projectBudgets[i]['budgetMonth'] == 'กุมภาพันธ์'){
            data = {
                ...data,
                section2: {
                    ...data.section2,
                    quarter: {
                        ...data.section2.quarter,
                        quarter2: {
                            ...data.section2.quarter.quarter2,
                            month2: apiData?.projectBudgets[i].budgetAmount
                        }
                    }
                }
            }
        }

        if(apiData?.projectBudgets[i]['budgetMonth'] == 'มีนาคม'){
            data = {
                ...data,
                section2: {
                    ...data.section2,
                    quarter: {
                        ...data.section2.quarter,
                        quarter2: {
                            ...data.section2.quarter.quarter2,
                            month3: apiData?.projectBudgets[i].budgetAmount
                        }
                    }
                }
            }
        }

        if(apiData?.projectBudgets[i]['budgetMonth'] == 'เมษายน'){
            data = {
                ...data,
                section2: {
                    ...data.section2,
                    quarter: {
                        ...data.section2.quarter,
                        quarter3: {
                            ...data.section2.quarter.quarter3,
                            month1: apiData?.projectBudgets[i].budgetAmount
                        }
                    }
                }
            }          
        }

        if(apiData?.projectBudgets[i]['budgetMonth'] == 'พฤษภาคม'){
            data = {
                ...data,
                section2: {
                    ...data.section2,
                    quarter: {
                        ...data.section2.quarter,
                        quarter3: {
                            ...data.section2.quarter.quarter3,
                            month2: apiData?.projectBudgets[i].budgetAmount
                        }
                    }
                }
            }             
        }

        if(apiData?.projectBudgets[i]['budgetMonth'] == 'มิถุนายน'){
            data = {
                ...data,
                section2: {
                    ...data.section2,
                    quarter: {
                        ...data.section2.quarter,
                        quarter3: {
                            ...data.section2.quarter.quarter3,
                            month3: apiData?.projectBudgets[i].budgetAmount
                        }
                    }
                }
            }             
        }

        if(apiData?.projectBudgets[i]['budgetMonth'] == 'กรกฎาคม'){
            data = {
                ...data,
                section2: {
                    ...data.section2,
                    quarter: {
                        ...data.section2.quarter,
                        quarter4: {
                            ...data.section2.quarter.quarter4,
                            month1: apiData?.projectBudgets[i].budgetAmount
                        }
                    }
                }
            }              
        }

        if(apiData?.projectBudgets[i]['budgetMonth'] == 'สิงหาคม'){
            data = {
                ...data,
                section2: {
                    ...data.section2,
                    quarter: {
                        ...data.section2.quarter,
                        quarter4: {
                            ...data.section2.quarter.quarter4,
                            month2: apiData?.projectBudgets[i].budgetAmount
                        }
                    }
                }
            }
        }

        if(apiData?.projectBudgets[i]['budgetMonth'] == 'กันยายน'){
            data = {
                ...data,
                section2: {
                    ...data.section2,
                    quarter: {
                        ...data.section2.quarter,
                        quarter4: {
                            ...data.section2.quarter.quarter4,
                            month3: apiData?.projectBudgets[i].budgetAmount
                        }
                    }
                }
            }           
        }

        if(apiData?.projectBudgets[i]['budgetMonth'] == 'ตุลาคม'){
            data = {
                ...data,
                section2: {
                    ...data.section2,
                    quarter: {
                        ...data.section2.quarter,
                        quarter1: {
                            ...data.section2.quarter.quarter1,
                            month1: apiData?.projectBudgets[i].budgetAmount
                        }
                    }
                }
            }
        }

        if(apiData?.projectBudgets[i]['budgetMonth'] == 'พฤษจิกายน'){
            data = {
                ...data,
                section2: {
                    ...data.section2,
                    quarter: {
                        ...data.section2.quarter,
                        quarter1: {
                            ...data.section2.quarter.quarter1,
                            month2: apiData?.projectBudgets[i].budgetAmount
                        }
                    }
                }
            }           
        }

        if(apiData?.projectBudgets[i]['budgetMonth'] == 'ธันวาคม'){
            data = {
                ...data,
                section2: {
                    ...data.section2,
                    quarter: {
                        ...data.section2.quarter,
                        quarter1: {
                            ...data.section2.quarter.quarter1,
                            month3: apiData?.projectBudgets[i].budgetAmount
                        }
                    }
                }
            }            
        }
    }

    let checkBoxConsistencyList: any[] = []

    //consistency master
    for(let i = 0; i < apiData?.consistencyMasters.length; i++){
        checkBoxConsistencyList.push(apiData?.consistencyMasters[i].consistencyMasterName)
    }

    //consistency policy
    for(let i = 0; i < apiData?.consistencyPolicies?.length; i++){
        checkBoxConsistencyList.push(apiData?.consistencyPolicies[i].consistencyPolicyTh)
    }

    //Gaps
    for(let i = 0; i < apiData?.gaps?.length; i++){
        checkBoxConsistencyList.push(apiData?.gaps[i].gapName)
    }

    let checkBoxStakeHolderList: any[] = []

    for(let i = 0; i < apiData?.stakeholder01.length; i++){
        checkBoxStakeHolderList.push(apiData?.stakeholder01[i].stakeholder01Name)
    }

    for(let i = 0; i < apiData?.stakeholder02.length; i++){
        checkBoxStakeHolderList.push(apiData?.stakeholder02[i].stakeholder02Name)
    }

    for(let i = 0; i < apiData?.stakeholder03.length; i++){
        checkBoxStakeHolderList.push(apiData?.stakeholder03[i].stakeholder03Name)
    }

    for(let i = 0; i < apiData?.stakeholder04.length; i++){
        checkBoxStakeHolderList.push(apiData?.stakeholder04[i].stakeholder04Name)
    }

    for(let i = 0; i < apiData?.stakeholder04Options.length; i++){
        checkBoxStakeHolderList.push(apiData?.stakeholder04Options[i].stakeholder04OptionName)
    }

    for(let i = 0; i < apiData?.stakeholder05.length; i++){
        checkBoxStakeHolderList.push(apiData?.stakeholder05[i].stakeholder05Name)
    }

    for(let i = 0; i < apiData?.stakeholder05Options.length; i++){
        checkBoxStakeHolderList.push(apiData?.stakeholder05Options[i].stakeholder05OptionName)
    }

    // loop to form data consistency master
    Object.keys(data.section2.suite_outside_policy.isMainPlanGroup).forEach((attributeName) => {
        let attrName = attributeName
        let valueName = consistency_map[attrName as keyof typeof consistency_map]
        if(checkBoxConsistencyList.includes(valueName)){
            data = {
                ...data,
                section2: {
                    ...data.section2,
                    suite_outside_policy: {
                        ...data.section2.suite_outside_policy,
                        isMainPlanGroup: {
                            ...data.section2.suite_outside_policy.isMainPlanGroup,
                            [attrName] : true
                        }
                    }
                }
            }
        }
    })

    // loop to form data consistency policies
    Object.keys(data.section2.suite_outside_policy).forEach((attributeName) => {
        let attrName = attributeName
        let valueName = consistency_policy_map[attrName as keyof typeof consistency_policy_map]
        if(checkBoxConsistencyList.includes(valueName)){
            data = {
                ...data,
                section2: {
                    ...data.section2,
                    suite_outside_policy: {
                        ...data.section2.suite_outside_policy,
                        [attrName] : true
                    }
                }
            }
        }
    })

    // loop to form data gaps
    Object.keys(data.section2.suite_outside_policy.isClosedGapGroup).forEach((attributeName) => {
        let attrName = attributeName
        let valueName = gap_map[attrName as keyof typeof gap_map]
        if(checkBoxConsistencyList.includes(valueName)){
            data = {
                ...data,
                section2: {
                    ...data.section2,
                    suite_outside_policy: {
                        ...data.section2.suite_outside_policy,
                        isClosedGapGroup: {
                            ...data.section2.suite_outside_policy.isClosedGapGroup,
                            [attrName] : true
                        }
                    }
                }
            }
        }
    })

    // loop to form stakeHolder01
    Object.keys(data.section2.stakeHolder_Group.isGovernmentAuditGroup).forEach((attributeName) => {
        let attrName = attributeName
        let valueName = stakeholder1[attrName as keyof typeof stakeholder1]
        if(checkBoxStakeHolderList.includes(valueName)){
            data = {
                ...data,
                section2: {
                    ...data.section2,
                    stakeHolder_Group: {
                        ...data.section2.stakeHolder_Group,
                        isProviderCustomer: true,
                        isGovernmentAuditGroup: {
                            ...data.section2.stakeHolder_Group.isGovernmentAuditGroup,
                            [attrName] : true
                        }
                    }
                }
            }
        }
    })

    // loop to form stakeHolder02
    Object.keys(data.section2.stakeHolder_Group.isProviderCustomerGroup).forEach((attributeName) => {
        let attrName = attributeName
        let valueName = stakeholder2[attrName as keyof typeof stakeholder2]
        if(checkBoxStakeHolderList.includes(valueName)){
            data = {
                ...data,
                section2: {
                    ...data.section2,
                    stakeHolder_Group: {
                        ...data.section2.stakeHolder_Group,
                        isGovernmentAudit: true,
                        isProviderCustomerGroup: {
                            ...data.section2.stakeHolder_Group.isProviderCustomerGroup,
                            [attrName] : true
                        }
                    }
                }
            }
        }
    })

    // loop to form stakeHolder03
    Object.keys(data.section2.stakeHolder_Group.isCustomerGroup).forEach((attributeName) => {
        let attrName = attributeName
        let valueName = stakeholder3[attrName as keyof typeof stakeholder3]
        if(checkBoxStakeHolderList.includes(valueName)){
            data = {
                ...data,
                section2: {
                    ...data.section2,
                    stakeHolder_Group: {
                        ...data.section2.stakeHolder_Group,
                        isCustomer: true,
                        isCustomerGroup: {
                            ...data.section2.stakeHolder_Group.isCustomerGroup,
                            [attrName] : true
                        }
                    }
                }
            }
        }
    })

    // loop to form stakeHolder04
    Object.keys(data.section2.stakeHolder_Group.isSenderGroup).forEach((attributeName) => {
        let attrName = attributeName
        let valueName = stakeholder4[attrName as keyof typeof stakeholder4]
        if(checkBoxStakeHolderList.includes(valueName)){
            data = {
                ...data,
                section2: {
                    ...data.section2,
                    stakeHolder_Group: {
                        ...data.section2.stakeHolder_Group,
                        isSenderGroup: {
                            ...data.section2.stakeHolder_Group.isSenderGroup,
                            [attrName] : true
                        }
                    }
                }
            }
        }
    })

    // loop to form stakeHolder04 option01
    Object.keys(data.section2.stakeHolder_Group.isSenderGroup.isGovernmentSenderGroup).forEach((attributeName) => {
        let attrName = attributeName
        let valueName = stakeholder4[attrName as keyof typeof stakeholder4]
        if(checkBoxStakeHolderList.includes(valueName)){
            data = {
                ...data,
                section2: {
                    ...data.section2,
                    stakeHolder_Group: {
                        ...data.section2.stakeHolder_Group,
                        isSender: true,
                        isSenderGroup: {
                            ...data.section2.stakeHolder_Group.isSenderGroup,
                            isGovernmentSenderGroup: {
                                ...data.section2.stakeHolder_Group.isSenderGroup.isGovernmentSenderGroup,
                                [attrName] : true
                            }
                        }
                    }
                }
            }
        }
    })

    // loop to form stakeHolder04 option02
    Object.keys(data.section2.stakeHolder_Group.isSenderGroup.isPrivateSenderGroup).forEach((attributeName) => {
        let attrName = attributeName
        let valueName = stakeholder4[attrName as keyof typeof stakeholder4]
        if(checkBoxStakeHolderList.includes(valueName)){
            data = {
                ...data,
                section2: {
                    ...data.section2,
                    stakeHolder_Group: {
                        ...data.section2.stakeHolder_Group,
                        isSender: true,
                        isSenderGroup: {
                            ...data.section2.stakeHolder_Group.isSenderGroup,
                            isPrivateSenderGroup: {
                                ...data.section2.stakeHolder_Group.isSenderGroup.isPrivateSenderGroup,
                                [attrName] : true
                            }
                        }
                    }
                }
            }
        }
    })

    // loop to form stakeHolder05
    Object.keys(data.section2.stakeHolder_Group.isWorkingUnitGroup).forEach((attributeName) => {
        let attrName = attributeName
        let valueName = stakeholder5[attrName as keyof typeof stakeholder5]
        if(checkBoxStakeHolderList.includes(valueName)){
            data = {
                ...data,
                section2: {
                    ...data.section2,
                    stakeHolder_Group: {
                        ...data.section2.stakeHolder_Group,
                        isWorkingUnit: true,
                        isWorkingUnitGroup: {
                            ...data.section2.stakeHolder_Group.isWorkingUnitGroup,
                            [attrName] : true
                        }
                    }
                }
            }
        }
    })

    // loop to form stakeHolder05 option01
    Object.keys(data.section2.stakeHolder_Group.isWorkingUnitGroup.isTourismAssoGroup).forEach((attributeName) => {
        let attrName = attributeName
        let valueName = stakeholder5[attrName as keyof typeof stakeholder5]
        if(checkBoxStakeHolderList.includes(valueName)){
            data = {
                ...data,
                section2: {
                    ...data.section2,
                    stakeHolder_Group: {
                        ...data.section2.stakeHolder_Group,
                        isWorkingUnitGroup: {
                            ...data.section2.stakeHolder_Group.isWorkingUnitGroup,
                            isTourismAssoGroup: {
                                ...data.section2.stakeHolder_Group.isWorkingUnitGroup.isTourismAssoGroup,
                                [attrName] : true
                            }
                        }
                    }
                }
            }
        }
    })

    return data

}

const section3Map = (data: any, apiData: any) => {

    data = {
        ...data,
        section3: {
            ...data.section3,
            principal_reason: apiData?.planPrincipleReason
        }
    }

    let objective_list: any[] = []
    for(let i = 0; i < apiData?.objectives?.length; i++){
        objective_list.push(apiData?.objectives[i].objectiveName)
    }

    data = {
        ...data,
        section3: {
            ...data.section3,
            project_objective2: objective_list
        }
    }

    let area_data: any[] = []
    for(let i = 0; i < apiData?.oparationAreas?.length; i++){
        area_data.push({
            indx: apiData?.oparationAreas[i].oparationAreaId,
            country_area: apiData?.oparationAreas[i].oparationAreaName01Th,
            province: apiData?.oparationAreas[i].oparationAreaName02Th
        })
    }

    data = {
        ...data,
        section3: {
            ...data.section3,
            list_operation_area: area_data
        }
    }

    let projectOutcomeList: any[] = []
    for(let i = 0; i < apiData?.projectOutcomes?.length; i++){
        projectOutcomeList.push({
            indx: i + '',
            name_indicator: apiData?.projectOutcomes[i].mainOutcomeId,
            total_percent: apiData?.projectOutcomes[i].totalAmt,
            quarter1_percent: apiData?.projectOutcomes[i].quarterAmt01,
            quarter2_percent: apiData?.projectOutcomes[i].quarterAmt02,
            quarter3_percent: apiData?.projectOutcomes[i].quarterAmt03,
            quarter4_percent: apiData?.projectOutcomes[i].quarterAmt04
        })
    }

    data = {
        ...data,
        section3: {
            ...data.section3,
            project_outcome: projectOutcomeList
        }
    }

    let projectTargetList: any[] = []
    for(let i = 0; i < apiData?.targetGroups?.length; i++){
        projectTargetList.push({
            indx: i + '',
            target_name: apiData?.targetGroups[i].targetGroupId,
        })
    }

    data = {
        ...data,
        section3: {
            ...data.section3,
            project_target: projectTargetList
        }
    }

    return data

}

const section4Map = (data: any, apiData: any) => {
    return {
        ...data,
        section4: {
            ...data.section4,
            project_start: apiData?.planBeginDt,
            project_end: apiData?.planEndDt,
            flagship_risk: apiData?.planRisk,
            risk_prevention: apiData?.planRiskManagement,
            benefit: apiData?.planOtherBenefit
        }
    }
}

export const searchStrategicGroupService = (id: string) => {
    try {
      return axios.get(`${EnvConfig.apiUrl}/strategy-groups/${id}`, {
        withCredentials: true, // Set this to include credentials in the request
      });
    } catch (error) {
      throw new Error('Failed internal server error.');
    }
  };

export const searchStrategicService = (id: string) => {
    try {
        return axios.get(`${EnvConfig.apiUrl}/strategy-groups/${id}`, {
        withCredentials: true, // Set this to include credentials in the request
        });
    } catch (error) {
        throw new Error('Sorry internal server error.');
    }
};

export const searchMainplanService = (id: string) => {
    try {
        return axios.get(`${EnvConfig.apiUrl}/main-plans/${id}`, {
            withCredentials: true, // Set this to include credentials in the request
        });
    } catch (error) {
        throw new Error('Sorry internal server error.');
    }
}
