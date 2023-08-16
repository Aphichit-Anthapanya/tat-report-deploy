import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormState } from "../OperationFollow/types";

export interface OperationFollowTable {
    data: Array<{
        id: string;
        section1: {
            yearBudget: string;
            budgetSource: string;
            paymentList: string;
            organizationManageMent: string;
            act_group: string;
            strategic_goal: string;
            strategic: string;
            planning: string;
            project_type: string;
            project_name: string;
            comment: {
                budgetSource: string;
                paymentList: string;
                organizationManageMent: string;
                act_group: string;
                strategic_goal: string;
                strategic: string;
                planning: string;
                project_type: string;
                project_name: string;
            }
        };
        section2: {
            budget: string;
            quarter: {
              quarter1: {
                month1: string;
                month2: string;
                month3: string;
                total: string;
                porportion: string;
              };
              quarter2: {
                month1: string;
                month2: string;
                month3: string;
                total: string;
                porportion: string;
              };
              quarter3: {
                month1: string;
                month2: string;
                month3: string;
                total: string;
                porportion: string;
              };
              quarter4: {
                month1: string;
                month2: string;
                month3: string;
                total: string;
                porportion: string;
              };
            };
            suite_outside_policy: {
              isFlagship: boolean;
              isSla: boolean;
              isMainPlan: boolean;
              isPAIndicator: boolean;
              isClosedGap: boolean;
              isNone: boolean;
              isCsrProcess: boolean;
              isMainPlanGroup: {
                isStaffManagement: boolean;
                isMainPlanEducation: boolean;
                isDigitalEducation: boolean;
                isTravelSupport: boolean;
                isLongTermStrategic: boolean;
                isLongTermEnvironment: boolean;
                isLongTermForManagement: boolean;
                isInternalCommunication: boolean;
              };
              isClosedGapGroup: {
                isBetterVision: boolean;
                isStrategicPlan: boolean;
                isRiskManagementPlan: boolean;
                isStakeHolderFocus: boolean;
                isCustomerFocus: boolean;
                isDigitalDevelopment: boolean;
                isCapitalHumanManage: boolean;
                isEducationManagement: boolean;
                isInnovationManangement: boolean;
                isInternalCheck: boolean;
              };
            };
            stakeHolder_Group: {
              isTatStaff: boolean;
              isCustomer: boolean;
              isGovernmentAudit: boolean;
              isSender: boolean;
              isProviderCustomer: boolean;
              isWorkingUnit: boolean;
              isGovernmentAuditGroup: {
                isMinistryFinance: boolean;
                isPolicyOffice: boolean;
                isTourismAndSport: boolean;
                isStateAudit: boolean;
                isOther: boolean;
                isOtherText: string;
              };
              isProviderCustomerGroup: {
                isDomestic: boolean;
                isForeigner: boolean;
              };
              isCustomerGroup: {
                isTourBusiness: boolean;
                isOnlineTravelAgency: boolean;
                isTravelAgency: boolean;
                isHotelBusiness: boolean;
                isLogisticBusiness: boolean;
                isRestaurantBusiness: boolean;
                isTourAreaBusiness: boolean;
                isOtherBusiness: boolean;
                isOtherText: string;
              };
              isSenderGroup: {
                isGovernmentSender: boolean;
                isGovernmentSenderGroup: {
                  isMinistryOfInterior: boolean;
                  isMinistryOfHealth: boolean;
                  isMinistryOfTour: boolean;
                  isMinistryOfForeign: boolean;
                  isMinistryOfTourAndSport: boolean;
                  isOther: boolean;
                  isOtherText: string;
                };
                isPrivateSender: boolean;
                isPrivateSenderGroup: {
                  isEducationIns: boolean;
                  isResearchIns: boolean;
                  isConsultIns: boolean;
                  isOther: boolean;
                  isOtherText: string;
                };
              };
              isWorkingUnitGroup: {
                isSpecialAreaManagement: boolean;
                isCofferenceOffice: boolean;
                isTourismAsso: boolean;
                isTourismAssoGroup: {
                  isAssoOfguide: boolean;
                  isAssoOfHotel: boolean;
                  isAssoOfDomesticRestaurant: boolean;
                  isAssoOfRestaurant: boolean;
                  isAssoOfDomesticTravel: boolean;
                  isAssoOfCommerce: boolean;
                  isAssoOfIndustry: boolean;
                  isAssoOfRetailer: boolean;
                  isAssoOfDomesticTourism: boolean;
                  isAssoOfTTA: boolean;
                  isPacificTravel: boolean;
                  isResponsibleTour: boolean;
                  isOtherAsso: boolean;
                  isOtherAssoText: string;
                };
                isMassMediaOnlineOfline: boolean;
                isAot: boolean;
                isSport: boolean;
                isTourismAndSport: boolean;
                isLocalAdmin: boolean;
                isProvinceAdmin: boolean;
                isOther: boolean;
                isOtherText: string;
              };
              isNone: boolean;
            };
            comment: {
                budget: string,
                quarter: string,
                suite_outside_policy: string,
                stake_holder_group: string,
            }
          };
        section3: {
            principal_reason: string;
            project_objective: {
                objective1: string;
                objective2: string;
                objective3: string;
                objective4: string;
            };
            project_objective2: Array<string>
            list_operation_area: Array<{
                indx: string;
                country_area: string;
                province: string;
            }>;
            project_outcome: Array<{
                indx: string;
                name_indicator: string;
                total_percent: string;
                quarter1_percent: string;
                quarter2_percent: string;
                quarter3_percent: string;
                quarter4_percent: string;
            }>;
            project_outcome_field: string;
            project_target: Array<{
                indx: string;
                target_name: string;
            }>;
            comment: {
                principal_reason: string;
                project_objective2: string;
                list_operation_area: string;
                project_outcome: string;
                project_outcome_field: string;
                project_target: string;
            }
        };
        section4: {
            project_start: string;
            project_end: string;
            flagship_risk: string;
            risk_prevention: string;
            benefit: string;
            comment: {
                project_start: string;
                project_end: string;
                flagship_risk: string;
                risk_prevention: string;
                benefit: string;
            }
        };
        section5: {
            return_roi: string;
            project_type: string;
            goverment_bond: string;
            internal_government_bond: string;
            sepa_protocal: string;
            working_system_suite: string;
            govenment_image: string;
            support_information: string;
            other: string;
            project_risk: string;
        };
        activitiesList: Array<{
            catname: string;
            activity_type: string;
            activity_name: string;
            activity_order: string;
            activity_shared: string;
            act_status: string;
            work_status: string;
            budget: string;
            total_act_budget: string;
        }>;
        status: string;
        project_status: string;
        project_edit_status: string;
        project_edit_detail: string;
        last_updated: string;
        editor_name: string;
        draft_section: string;
    }>
}

const initialState: OperationFollowTable = {
  data: [],
};

const operationFollowTableSlice = createSlice({
    name: 'operationFollowTable',
    initialState,
    reducers: {
        replaceTable(state, action: PayloadAction<any>){
          state.data = action.payload
        },
        appendOperationFollowTable(state, action: PayloadAction<any>) {
          let item = action.payload;
    
          const isDuplicate = state.data.some((t) => t.id === item.id);
    
          if (!isDuplicate) {
            return {
              data: [
                ...state.data,
                {
                  ...item,
                  section1: {
                    ...item.section1,
                    comment: {
                      budgetSource: "",
                      paymentList: "",
                      organizationManageMent: "",
                      act_group: "",
                      strategic_goal: "",
                      strategic: "",
                      planning: "",
                      project_type: "",
                      project_name: "",
                    },
                  },
                  section2: {
                    ...item.section2,
                    comment: {
                      budget: "",
                      quarter: "",
                      suite_outside_policy: "",
                      stake_holder_group: "",
                    },
                  },
                  section3: {
                    ...item.section3,
                    comment: {
                      principal_reason: "",
                      project_objective2: "",
                      list_operation_area: "",
                      project_outcome: "",
                      project_outcome_field: "",
                      project_target: "",
                    },
                  },
                  section4: {
                    ...item.section4,
                    comment: {
                      project_start: "",
                      project_end: "",
                      flagship_risk: "",
                      risk_prevention: "",
                      benefit: "",
                    },
                  },
                },
              ],
            };
          }
    
          return state;
        },
        editTableById(state, action: PayloadAction<any>){
            const index = state.data.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
              state.data[index] = action.payload.data;
            }
        },
        removeTableById(state, action: PayloadAction<any>){
            const id = action.payload.id
            let items = state.data
            items = items.filter((item: { id: string }) => item.id !== id);
            state.data = items
        },
        setApproveList(state, action: PayloadAction<any>){
          for (const list of action.payload.approveList) {
            const index = state.data.findIndex(item => item.id === list); 
            if (index !== -1) {
              state.data[index].project_status = 'อนุมัติ'
              state.data[index].project_status = 'อยู่ระหว่างดำเนินการ'
            }
          }
        }
    }
});

export const {
    appendOperationFollowTable,
    editTableById,
    removeTableById,
    setApproveList,
    replaceTable
} = operationFollowTableSlice.actions;
export default operationFollowTableSlice.reducer;
