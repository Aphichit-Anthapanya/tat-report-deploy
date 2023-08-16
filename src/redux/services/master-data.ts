import { EnvConfig } from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const masterDataApi = createApi({
    reducerPath: "masterDataApi",
    baseQuery: fetchBaseQuery({
        baseUrl: EnvConfig.apiUrl,
        credentials: "include",
    }),

    endpoints: (builder) => ({
        getAllDepartment: builder.query<any, void>({
            query: () => 
            '/department-level-02',
        }),
        getStrategyGroupData: builder.query({
            query: (params) => 
            `/project-masters/strategy-groups?masterPlanId=${params.masterPlanId}&strategyGroupYear=${params.strategyGroupYear}`, // Modify the API endpoint here
        }),
        getMainPlanData: builder.query({
            query: (params) => 
            `/project-masters/main-plans?overviewStrategyId=${params.overviewStrategyId}`
        }),
        getYears: builder.query({
            query: () => 
            `/project-masters/years`
        }),
        departmentLevelOne: builder.query({
            query: () => 
            `/project-masters/department-level-01`
        }),
        departmentLevelTwo: builder.query({
            query: (params) => 
            `/project-masters/department-level-02?departmentLevel01Id=${params.departmentLevel01Id}`
        }),
        departmentLevelThree: builder.query({
            query: (params) => 
            `/project-masters/department-level-03?departmentLevel01Id=${params.departmentLevel01Id}&departmentLevel02Id=${params.departmentLevel02Id}`
        }),
        statusList: builder.query({
            query: () => 
            `/project-masters/status-list`
        }),
        projectTarget: builder.query({
            query: () => 
            `/target-groups`
        }),
        operationArea: builder.query({
            query: () => 
            `/oparation-areas`
        }),
        mainOutcomes: builder.query({
            query: () => 
            `/main-outcomes`
        }),
        getStrategicGroupById: builder.query({
            query: (params) => 
            `/strategy-groups/${params.strategicGroupId}`
        }),
        getMainPlanDatapById: builder.query({
            query: (params) => 
            `/main-plans/${params.mainPlanId}`
        }),
        getConsistencyMaster: builder.query({
            query: () => 
            `/consistency-masters`
        }),
        getConsistencyPolicy: builder.query({
            query: () => 
            `/consistency-policies`
        }),
        getClosedGap: builder.query({
            query: () => 
            `/gaps`
        }),
        getStakeHolderOne: builder.query({
            query: () => 
            `/stakeholder-01`
        }),
        getStakeHolderTwo: builder.query({
            query: () => 
            `/stakeholder-02`
        }), 
        getStakeHolderThree: builder.query({
            query: () => 
            `/stakeholder-03`
        }), 
        getStakeHolderFour: builder.query({
            query: () => 
            `/stakeholder-04`
        }), 
        getStakeHolderFive: builder.query({
            query: () => 
            `/stakeholder-05`
        }),
        getProjectById: builder.query({
            query: (params) => 
            `/projects/${params.projectId}?relations=all`
        }),
        getAllStrategyGroup: builder.query({
            query: () => 
            `/strategy-groups`
        }),
        searchStrategyGroupById: builder.query({
            query: (params) => 
            `/strategy-groups/${params.stId}`
        }),
        getAllBudgetAct: builder.query({
            query: () => 
            `/budget-acts`
        }),
        getBudgetActById: builder.query({
            query: (params) =>
            `/project-masters/budget-acts?mainPlanId=${params.mainPlanDataId}`
        }),
        searchBudgetActById: builder.mutation({
            query: (id) => ({
                url: `/budget-acts/${id}`, // Replace this with your actual API endpoint
                method: 'GET',
            }),
        })
    }),
})

export const { 
    useGetAllDepartmentQuery, 
    useGetStrategyGroupDataQuery, 
    useGetMainPlanDataQuery,
    useGetYearsQuery,
    useDepartmentLevelOneQuery,
    useDepartmentLevelTwoQuery,
    useDepartmentLevelThreeQuery,
    useStatusListQuery,
    useProjectTargetQuery,
    useOperationAreaQuery,
    useMainOutcomesQuery,
    useGetStrategicGroupByIdQuery,
    useGetMainPlanDatapByIdQuery,
    useGetConsistencyMasterQuery,
    useGetConsistencyPolicyQuery,
    useGetClosedGapQuery,
    useGetStakeHolderOneQuery,
    useGetStakeHolderTwoQuery,
    useGetStakeHolderThreeQuery,
    useGetStakeHolderFourQuery,
    useGetStakeHolderFiveQuery,
    useGetProjectByIdQuery,
    useGetAllStrategyGroupQuery,
    useSearchStrategyGroupByIdQuery,
    useGetAllBudgetActQuery,
    useGetBudgetActByIdQuery,
    useSearchBudgetActByIdMutation
} = masterDataApi;
