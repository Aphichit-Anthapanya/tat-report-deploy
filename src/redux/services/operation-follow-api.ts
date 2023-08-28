import { EnvConfig } from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

export const createOperationFormService = (data: any) => {
    try {
        return axios.post(`${EnvConfig.apiUrl}/projects/`, data, {
            withCredentials: true, // Set this to include credentials in the request
        });
    } catch (error) {
        throw new Error('Sorry internal server error.');
    }
}

export const updateOperationFormService = (id: string, data: any) => {
    try {
        return axios.patch(`${EnvConfig.apiUrl}/projects/${id}`, data, {
            withCredentials: true, // Set this to include credentials in the request
        });
    } catch (error) {
        throw new Error('Sorry internal server error.');
    }
}

export const getProjectById = (id: string) => {
    try {
        return axios.get(`${EnvConfig.apiUrl}/projects/${id}?relations=all`, {
            withCredentials: true, // Set this to include credentials in the request
        });
    } catch (error) {
        throw new Error('Sorry internal server error.');
    }
}

export const createBudgetInfoService = (data: any) => {
    try {
        return axios.post(`${EnvConfig.apiUrl}/project-budgets`, data, {
            withCredentials: true, // Set this to include credentials in the request
        });
    } catch (error) {
        throw new Error('Sorry internal server error.');
    }
}

export const getBudgetInfoService = (id: string) => {
    try {
        return axios.get(`${EnvConfig.apiUrl}/project-budgets/` + id, {
            withCredentials: true, // Set this to include credentials in the request
        });
    } catch (error) {
        throw new Error('Sorry internal server error.');
    }
}

export const approveSendService = (id: string) => {
    try {
        return axios.patch(`${EnvConfig.apiUrl}/projects/approved/` + id, {
            withCredentials: true, // Set this to include credentials in the request
        });
    } catch (error) {
        throw new Error('Sorry internal server error.');
    }
}

export const createOperationFollowFormService = (param: any) => {
    try {
        return axios.post(`${EnvConfig.apiUrl}/projects/`, param, {
            withCredentials: true, // Set this to include credentials in the request
        });
    } catch (error) {
        throw new Error('Sorry internal server error.');
    }   
}

export const getOperationAreaService = () => {
    try {
        return axios.get(`${EnvConfig.apiUrl}/oparation-areas`, {
            withCredentials: true, // Set this to include credentials in the request
        });
    } catch (error) {
        throw new Error('Sorry internal server error.');
    }   
}

export const getProjectTargetService = () => {
    try {
        return axios.get(`${EnvConfig.apiUrl}/target-groups`, {
            withCredentials: true, // Set this to include credentials in the request
        });
    } catch (error) {
        throw new Error('Sorry internal server error.');
    }    
}

export const getProjectIndicatorService = () => {
    try {
        return axios.get(`${EnvConfig.apiUrl}/main-outcomes`, {
            withCredentials: true, // Set this to include credentials in the request
        });
    } catch (error) {
        throw new Error('Sorry internal server error.');
    }    
}

export const approvalSendService = (id: string) => {
    try {
        return axios.patch(`${EnvConfig.apiUrl}/projects/approval-sent/${id}`, {
            withCredentials: true, // Set this to include credentials in the request
        });
    } catch (error) {
        throw new Error('Sorry internal server error.');
    }  
}

export const deleteProjectService = (id: string) => {
    try {
        return axios.delete(`${EnvConfig.apiUrl}/projects/${id}`, {
            withCredentials: true, // Set this to include credentials in the request
        });
    } catch (error) {
        throw new Error('Sorry internal server error.');
    }    
}

export const createActivitiesService = (data: any) => {
    console.log(data);
    try {
        return axios.post(`${EnvConfig.apiUrl}/project-activities`, data, {
            withCredentials: true, // Set this to include credentials in the request
        });
    } catch (error) {
        throw new Error('Sorry internal server error.');
    }
}


export const operationFollowApi = createApi({
    reducerPath: "operationFollowApi",
    baseQuery: fetchBaseQuery({
        baseUrl: EnvConfig.apiUrl,
        credentials: "include",
    }),

    endpoints: (builder) => ({
        createOperationFollowForm: builder.mutation({
            query: (data) => ({
              url: '/projects', // Replace this with your actual API endpoint
              method: 'POST',
              body: data,
            }),
          }),
        getOperationFollowData: builder.query ({
            query: (params) => 
            `/projects?relations=&skip=${params.startPage}&take=${params.endPage}${params.filterParamText}`,
        }),
        approvalSendService:  builder.mutation({
            query: (id) => ({
              url: `/projects/approval-sent/${id}`, // Replace this with your actual API endpoint
              method: 'PATCH',
            }),
          }),
        approvedService:  builder.mutation({
        query: (id) => ({
            url: `/projects/approved/${id}`, // Replace this with your actual API endpoint
            method: 'PATCH',
        }),
        }),
        rejectService:  builder.mutation({
            query: (id) => ({
                url: `/projects/rejected/${id}`, // Replace this with your actual API endpoint
                method: 'PATCH',
            }),
            }),
        
    })
})

export const {
    useCreateOperationFollowFormMutation,
    useGetOperationFollowDataQuery,
    useApprovalSendServiceMutation,
    useApprovedServiceMutation,
    useRejectServiceMutation,
} = operationFollowApi