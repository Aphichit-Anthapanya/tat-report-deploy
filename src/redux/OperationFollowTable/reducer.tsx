import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface OperationFollowTable {
    data: Array<{
        id: number;
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
            };
            stakeHolder_Group: {
                isTatStaff: boolean;
                isCustomer: boolean;
                isGovernmentAudit: boolean;
                isSender: boolean;
                isProviderCustomer: boolean;
                isWorkingUnit: boolean;
            };
        };
        section3: {
            principal_reason: string;
            project_objective: {
                objective1: string;
                objective2: string;
                objective3: string;
                objective4: string;
            };
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
        };
        section4: {
            project_start: string;
            project_end: string;
            flagship_risk: string;
            risk_prevention: string;
            benefit: string;
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
    }>
}

const initialState: OperationFollowTable = {
    data: []
}


const operationFollowTableSlice = createSlice({
    name: 'operationFollowTable',
    initialState,
    reducers: {
        appendOperationFollowTable(state, action: PayloadAction<any>) {
            return {
              data: [
                ...state.data,
                action.payload
              ]
            };
        },
        editTableById(state, action: PayloadAction<any>){
            const index = state.data.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
              state.data[index] = action.payload.data;
            }
        }
    }
})

export const {
    appendOperationFollowTable,
    editTableById
} = operationFollowTableSlice.actions;
export default operationFollowTableSlice.reducer