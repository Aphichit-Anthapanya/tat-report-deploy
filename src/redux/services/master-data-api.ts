import axios, { AxiosResponse } from 'axios';
import EnvConfig from "@/config/env";

export default class masterDataApiService {

    static getConsistencyMasterData = () => {
        try {
            return axios.get(`${EnvConfig.apiUrl}/consistency-masters/`, {
                withCredentials: true, // Set this to include credentials in the request
            });
        } catch (error) {
            throw new Error('Sorry internal server error.');
        }
    }

    static getConsistencyPolicyData = () => {
        try {
            return axios.get(`${EnvConfig.apiUrl}/consistency-policies/`, {
                withCredentials: true, // Set this to include credentials in the request
            });
        } catch (error) {
            throw new Error('Sorry internal server error.');
        }
    }

    static getGapsData = () => {
        try {
            return axios.get(`${EnvConfig.apiUrl}/gaps/`, {
                withCredentials: true, // Set this to include credentials in the request
            });
        } catch (error) {
            throw new Error('Sorry internal server error.');
        }
    }

    static stakeHolder1 = () => {
        try {
            return axios.get(`${EnvConfig.apiUrl}/stakeholder-01/`, {
                withCredentials: true, // Set this to include credentials in the request
            });
        } catch (error) {
            throw new Error('Sorry internal server error.');
        }
    }

    static stakeHolder2 = () => {
        try {
            return axios.get(`${EnvConfig.apiUrl}/stakeholder-02/`, {
                withCredentials: true, // Set this to include credentials in the request
            });
        } catch (error) {
            throw new Error('Sorry internal server error.');
        }
    }

    static stakeHolder3 = () => {
        try {
            return axios.get(`${EnvConfig.apiUrl}/stakeholder-03/`, {
                withCredentials: true, // Set this to include credentials in the request
            });
        } catch (error) {
            throw new Error('Sorry internal server error.');
        }
    }

    static stakeHolder4 = () => {
        try {
            return axios.get(`${EnvConfig.apiUrl}/stakeholder-04/`, {
                withCredentials: true, // Set this to include credentials in the request
            });
        } catch (error) {
            throw new Error('Sorry internal server error.');
        }
    }

    static stakeHolder5 = () => {
        try {
            return axios.get(`${EnvConfig.apiUrl}/stakeholder-05/`, {
                withCredentials: true, // Set this to include credentials in the request
            });
        } catch (error) {
            throw new Error('Sorry internal server error.');
        }
    }

    static getMainPlanByOverview = (id: string) => {
        try {
            return axios.get(`${EnvConfig.apiUrl}/main-plans?overviewStrategyId=${id}`, {
                withCredentials: true, // Set this to include credentials in the request
            });
        } catch (error) {
            throw new Error('Sorry internal server error.');
        }
    }

    static getBudgetActByMainPlan = (id : string) => {
        try {
            return axios.get(`${EnvConfig.apiUrl}/project-masters/budget-acts?mainPlanId=${id}`, {
                withCredentials: true, // Set this to include credentials in the request
            });
        } catch (error) {
            throw new Error('Sorry internal server error.');
        }
    }

    static getAllExpenseItems = () => {
        try {
            return axios.get(`${EnvConfig.apiUrl}/expense-items`, {
                withCredentials: true, // Set this to include credentials in the request
            });
        } catch (error) {
            throw new Error('Sorry internal server error.');
        }
    }

}