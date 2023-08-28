import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormState, ActiVityForm, Section1, Section2, Section5, Section4, Section3, Activities, SampleData } from './types';
import { stat } from 'fs';

export const initialState: FormState = {
    id: '0',
    section1: {
      yearBudget: '2566',
      budgetSource: '',
      paymentList: '',
      organizationManageMent: '',
      act_group: '',
      strategic_goal: '',
      strategic: '',
      planning: '',
      project_type: '',
      project_name: '',
    },
    section2: {
      budget: '',
      quarter: {
        quarter1: {
          month1: '',
          month2: '',
          month3: '',
          total: '',
          porportion: '',
        },
        quarter2: {
          month1: '',
          month2: '',
          month3: '',
          total: '',
          porportion: '',
        },
        quarter3: {
          month1: '',
          month2: '',
          month3: '',
          total: '',
          porportion: '',
        },
        quarter4: {
          month1: '',
          month2: '',
          month3: '',
          total: '',
          porportion: '',
        }
      },
      suite_outside_policy: {
        isFlagship: false,
        isSla: false,
        isMainPlan: false,
        isPAIndicator: false,
        isClosedGap: false,
        isNone: false,
        isCsrProcess: false,
        isMainPlanGroup: {
          isStaffManagement: false,
          isMainPlanEducation: false,
          isDigitalEducation: false,
          isTravelSupport: false,
          isLongTermStrategic: false,
          isLongTermEnvironment: false,
          isLongTermForManagement: false,
          isInternalCommunication: false,
        },
        isClosedGapGroup: {
          isBetterVision: false,
          isStrategicPlan: false,
          isRiskManagementPlan: false,
          isStakeHolderFocus: false,
          isCustomerFocus: false,
          isDigitalDevelopment: false,
          isCapitalHumanManage: false,
          isEducationManagement: false,
          isInnovationManangement: false,
          isInternalCheck: false
  
        }
      },
      stakeHolder_Group: {
        isTatStaff: false,
        isCustomer: false,
        isGovernmentAudit: false,
        isSender: false,
        isProviderCustomer: false,
        isWorkingUnit: false,
        isGovernmentAuditGroup: {
          isMinistryFinance: false,
          isPolicyOffice: false,
          isTourismAndSport: false,
          isStateAudit: false,
          isOther: false,
          isOtherText: '',
        },
        isProviderCustomerGroup: {
          isDomestic: false,
          isForeigner: false,
        },
        isCustomerGroup: {
          isTourBusiness: false,
          isOnlineTravelAgency: false,
          isTravelAgency: false,
          isHotelBusiness: false,
          isLogisticBusiness: false,
          isRestaurantBusiness: false,
          isTourAreaBusiness: false,
          isOtherBusiness: false,
          isOtherText: '',
        },
        isSenderGroup: {
          isGovernmentSender: false,
          isGovernmentSenderGroup: {
            isMinistryOfInterior: false,
            isMinistryOfHealth: false,
            isMinistryOfTour: false,
            isMinistryOfForeign: false,
            isMinistryOfTourAndSport: false,
            isOther: false,
            isOtherText: '',
          },
          isPrivateSender: false,
          isPrivateSenderGroup: {
            isEducationIns: false,
            isResearchIns: false,
            isConsultIns: false,
            isOther: false,
            isOtherText: '',
          }
        },
        isWorkingUnitGroup: {
          isSpecialAreaManagement: false,
          isCofferenceOffice: false,
          isTourismAsso: false,
          isTourismAssoGroup: {
            isAssoOfguide: false,
            isAssoOfHotel: false,
            isAssoOfDomesticRestaurant: false,
            isAssoOfRestaurant: false,
            isAssoOfDomesticTravel: false,
            isAssoOfCommerce: false,
            isAssoOfIndustry: false,
            isAssoOfRetailer: false,
            isAssoOfDomesticTourism: false,
            isAssoOfTTA: false,
            isPacificTravel: false,
            isResponsibleTour: false,
            isOtherAsso: false,
            isOtherAssoText: ''
          },
          isMassMediaOnlineOfline: false,
          isAot: false,
          isSport: false,
          isTourismAndSport: false,
          isLocalAdmin: false,
          isProvinceAdmin: false,
          isOther: false,
          isOtherText: ''
        },
        isNone: false,
      }
    },
    section3: {
      principal_reason: '',
      project_objective: {
        objective1:'',
        objective2:'',
        objective3:'',
        objective4:'',
      },
      project_objective2: ['','',''],
      list_operation_area: [],
      project_outcome: [],
      project_outcome_field: '',
      project_target: []
    },
    section4: {
      project_start: '',
      project_end: '',
      flagship_risk: '',
      risk_prevention: '',
      benefit: '',
    },
    section5: {
      return_roi: '',
      project_type: '',
      goverment_bond: '',
      internal_government_bond: '',
      sepa_protocal: '',
      working_system_suite: '',
      govenment_image: '',
      support_information: '',
      other: '',
      project_risk: '',
    },
    activitiesList: [],
    activityForm: {
      id: '0',
      budget: '',
      catname: '',
      activity_type: '',
      activity_order: '',
      activity_name: '',
      activity_description: '',
      activity_shared: '',
      activity_shared_by_project: '',
      activity_start: '',
      activity_end: '',
      project_outcome: [],
      list_operation_area:[]
    },
    operationFollowList: [],
    dataList: [],
    masterData: {
      section1: {
        project_type: []
      }
    },

    mode: 0,

    operationReport: {
      section1: {
        yearBudget: '',
        budgetSource: '',
        paymentList: '',
        organizationManageMent: '',
        act_group: '',
        strategic_goal: '',
        strategic: '',
        planning: '',
        project_type: '',
        project_name: '',
      },
      section2: {
        budget: '',
        quarter: {
          quarter1: {
            month1: '',
            month2: '',
            month3: '',
            total: '',
            porportion: '',
          },
          quarter2: {
            month1: '',
            month2: '',
            month3: '',
            total: '',
            porportion: '',
          },
          quarter3: {
            month1: '',
            month2: '',
            month3: '',
            total: '',
            porportion: '',
          },
          quarter4: {
            month1: '',
            month2: '',
            month3: '',
            total: '',
            porportion: '',
          }
        },
        suite_outside_policy: {
          isFlagship: false,
          isSla: false,
          isMainPlan: false,
          isPAIndicator: false,
          isClosedGap: false,
          isNone: false,
          isCsrProcess: false,
        },
        stakeHolder_Group: {
          isTatStaff: false,
          isCustomer: false,
          isGovernmentAudit: false,
          isSender: false,
          isProviderCustomer: false,
          isWorkingUnit: false
        }
      },
      section3: {
        principal_reason: '',
        project_objective: {
          objective1:'',
          objective2:'',
          objective3:'',
          objective4:'',
        },
        project_objective2: ['','',''],
        list_operation_area: [],
        project_outcome: [],
        project_outcome_field: '',
        project_target: []
      },
      section4: {
        project_start: '',
        project_end: '',
        flagship_risk: '',
        risk_prevention: '',
        benefit: '',
      },
      section5: {
        return_roi: '',
        project_type: '',
        goverment_bond: '',
        internal_government_bond: '',
        sepa_protocal: '',
        working_system_suite: '',
        govenment_image: '',
        support_information: '',
        other: '',
        project_risk: '',
      },
      activitiesList: [],
      activityForm: {
        id: '0',
        budget: '',
        catname: '',
        activity_type: '',
        activity_order: '',
        activity_name: '',
        activity_description: '',
        activity_shared: '',
        activity_shared_by_project: '',
        activity_start: '',
        activity_end: '',
        project_outcome: [],
        list_operation_area:[]
      },
    },
    draft_section: ''  
};

const operationFollowFormSlice = createSlice({
  name: 'operationFollowForm',
  initialState,
  reducers: {
    updateFormField(state, action: PayloadAction<any>) {
      return {
        ...state,
        ...action.payload
      };
    },
    updateDataList(state, action: PayloadAction<any>){
      return {
        ...state,
        ...action.payload.dataList,
        id: action.payload.id,
        operationFollowList: action.payload.tableList
      }
    },
    resetForm(state) {
      let data = {
        ...initialState,
        operationFollowList: state.operationFollowList
      }
      return data;
    },
    removeById(state,action: PayloadAction<any>){
      // const id = action.payload.id
      // let items = state.operationFollowList
      // items = items.filter((item: { id: number }) => item.id !== id);
      // return {
      //   ...state,
      //   operationFollowList: items
      // }
    },
    appendActivity(state, action: PayloadAction<any>) {
      return {
        ...state,
        activitiesList: [...state.activitiesList, action.payload],
      };
    },
    updateSection1(state, action: PayloadAction<Section1>) {
        return {
          ...state,
          section1: {
            ...action.payload
          },
        };
      },
    setSection1Value(state,action: PayloadAction<any>){
      return {
        ...state,
        section1: {
          ...state.section1,
          [action.payload.name]: action.payload.value
        },
        mode: action.payload.mode
      }
    }, 
    updateSection2(state, action: PayloadAction<Section2>) {
      return {
        ...state,
        section2: {
          ...action.payload
        },
      };
    },
    updateSection3(state, action: PayloadAction<Section3>) {
      return {
        ...state,
        section3: {
          ...action.payload
        },
      };
    },
    updateSection4(state, action: PayloadAction<Section4>) {
      return {
        ...state,
        section4: {
          ...action.payload
        },
      };
    },
    updateSection5(state, action: PayloadAction<Section5>) {
      return {
        ...state,
        section5: {
          ...action.payload
        },
      };
    },
    updateActivity(state, action: PayloadAction<any>){
      return {
        ...state,
        activitiesList: action.payload
      }
    },
    updateOperationFollowList(state, action: PayloadAction<any>){
      console.log('update table')
      return {
        ...state,
        operationFollowList: action.payload
      }
    },
    appendDataToFieldSection3(state, action: PayloadAction<any>){

      if(action.payload.name === 'list_operation_area'){
        return {
          ...state,
          section3: {
            ...state.section3,
            list_operation_area: [...state.section3.list_operation_area, action.payload.data]
          }
        }
      }

      if(action.payload.name === 'project_outcome'){
        return {
          ...state,
          section3: {
            ...state.section3,
            project_outcome: [...state.section3.project_outcome, action.payload.data]
          }
        }
      }

      if(action.payload.name === 'project_target'){
        return {
          ...state,
          section3: {
            ...state.section3,
            project_target: [...state.section3.project_target, action.payload.data]
          }
        }
      }

    },
    submitFormData(state,action: PayloadAction<SampleData>){
      const data = action.payload.data
      return {
        ...state,
        operationFollowList: [...state.operationFollowList, action.payload.dataTable],
        dataList: [...state.operationFollowList, data]
      }
    },
    updateCurrentFormById(state, action: PayloadAction<any>){

      // function getDataById(id:number){
      //   const jsondata: FormState[] = state.dataList.map((item) => item.FormState);
      //   console.log(jsondata)
      //   const item = jsondata.find((item: { id: number }) => item.id === id);
      //   return item;
      // }

      // const myData = getDataById(action.payload.id)
      // if (myData !== undefined) {
      //   updateFormField(myData)
      // } else {
      //   console.log('No formData available');
      // }
    },
    removeTableOperationAreaById(state,action: PayloadAction<any>){
      const id = action.payload.id + ""
      let items = state.section3.list_operation_area
      items = items.filter((item: { indx: string }) => item.indx !== id);
      return {
        ...state,
        section3: {
          ...state.section3,
          list_operation_area: items
        }
      }
    },
    removeTableProjectIndicatorById(state,action: PayloadAction<any>){
      const id = action.payload.id + ""
      let items = state.section3.project_outcome
      items = items.filter((item: { indx: string }) => item.indx !== id);
      return {
        ...state,
        section3: {
          ...state.section3,
          project_outcome: items
        }
      }
    },
    removeTableProjectGoalById(state,action: PayloadAction<any>){
      const id = action.payload.id + ""
      let items = state.section3.project_target
      items = items.filter((item: { indx: string }) => item.indx !== id);
      return {
        ...state,
        section3: {
          ...state.section3,
          project_target: items
        }
      }
    },
    removeTableProjectIndicatorActivityById(state,action: PayloadAction<any>){
      const id = action.payload.id + ""
      let items = state.activityForm.project_outcome
      items = items.filter((item: { indx: string }) => item.indx !== id);
      return {
        ...state,
        activityForm: {
          ...state.activityForm,
          project_outcome: items
        }
      }
    },
    removeTableOperationAreaActivityById(state,action: PayloadAction<any>){
      const id = action.payload.id + ""
      let items = state.activityForm.list_operation_area
      items = items.filter((item: { indx: string }) => item.indx !== id);
      return {
        ...state,
        activityForm: {
          ...state.activityForm,
          list_operation_area: items
        }
      }
    },
    fetchMasterDataSection1(state,action: PayloadAction<any>){
      return {
        ...state,
        masterData: {
          ...state.masterData,
          section1: {
            ...state.masterData.section1,
            project_type: action.payload.project_type
          }
        }
      }
    },
    submitReportData(state,action: PayloadAction<any>){
      return {
        ...state,
        operationReport: {
          ...action.payload
        }
      }
    },
    updateProjectObjective2(state,action: PayloadAction<any>){
      const index = action.payload.index;

      state.section3.project_objective2[index] = action.payload.content
    },
    addProjectObjective(state,action: PayloadAction<any>){
      state.section3.project_objective2.push('')
    },
    removeProjectObjective(state,action: PayloadAction<any>){
      state.section3.project_objective2.pop()
    }
  },
});

export const { 
  updateFormField, 
  resetForm, 
  appendActivity, 
  updateSection1,
  setSection1Value,
  updateSection2,
  updateSection3,
  updateSection4,
  updateSection5,
  appendDataToFieldSection3,
  updateActivity,
  updateOperationFollowList,
  submitFormData,
  updateCurrentFormById,
  removeById,
  removeTableOperationAreaById,
  removeTableProjectIndicatorById,
  removeTableProjectGoalById,
  removeTableProjectIndicatorActivityById,
  removeTableOperationAreaActivityById,
  fetchMasterDataSection1,
  submitReportData,
  updateDataList,
  updateProjectObjective2,
  addProjectObjective,
  removeProjectObjective 
} = operationFollowFormSlice.actions;
export default operationFollowFormSlice.reducer;
