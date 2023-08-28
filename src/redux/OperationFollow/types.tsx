export interface ActiVityForm {
  catname: string;
  activity_type: string;
  activity_name: string;
  activity_order: string;
  activity_shared: string;
  act_status: string;
  work_status: string;
  budget: string;
  total_act_budget: string;
}

export interface FormState {
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
  };
  section3: {
    principal_reason: string;
    project_objective: {
      objective1: string;
      objective2: string;
      objective3: string;
      objective4: string;
    };
    project_objective2: Array<string>;
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
  activitiesList: Array<any>;
  activityForm: {
    id: string;
    budget: string;
    catname: string;
    activity_type: string;
    activity_order: string;
    activity_name: string;
    activity_description: string;
    activity_shared: string;
    activity_shared_by_project: string;
    activity_start: string;
    activity_end: string;
    project_outcome: Array<{
      indx: string;
      name_indicator: string;
      total_percent: number;
      quarter1_percent: number;
      quarter2_percent: number;
      quarter3_percent: number;
      quarter4_percent: number;
    }>;
    list_operation_area: Array<{
      indx: string;
      country_area: string;
      province: string;
    }>;
  };
  operationFollowList: Array<{
    id: string;
    idx: string;
    status: string;
    project_status: string;
    project_year: string;
    project_seq: number;
    project_name: number;
    project_edit_status: string;
    project_edit_detail: string;
    department_name: string;
  }>;

  dataList: Array<{ FormState: any }>;

  masterData: {
    section1: {
      project_type: Array<{
        id: string;
        name: string;
      }>;
    };
  };

  mode: number;

  operationReport: {
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
    activityForm: {
      id: string;
      budget: string;
      catname: string;
      activity_type: string;
      activity_order: string;
      activity_name: string;
      activity_description: string;
      activity_shared: string;
      activity_shared_by_project: string;
      activity_start: string;
      activity_end: string;
      project_outcome: Array<{
        indx: string;
        name_indicator: string;
        total_percent: number;
        quarter1_percent: number;
        quarter2_percent: number;
        quarter3_percent: number;
        quarter4_percent: number;
      }>;
      list_operation_area: Array<{
        indx: string;
        country_area: string;
        province: string;
      }>;
    };
  };
  draft_section: string;
}

export interface Section1 {
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
}

export interface Section2 {
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
}

export interface Section3 {
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
}

export interface Section4 {
  project_start: string;
  project_end: string;
  flagship_risk: string;
  risk_prevention: string;
  benefit: string;
}

export interface Section5 {
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
}

export interface Activities {
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
}

export interface SampleData {
  data: any;
  dataTable: {
    id: string;
    idx: string;
    status: string;
    project_status: string;
    project_year: string;
    project_seq: number;
    project_name: number;
    project_edit_status: string;
    project_edit_detail: string;
    department_name: string;
  };
}
