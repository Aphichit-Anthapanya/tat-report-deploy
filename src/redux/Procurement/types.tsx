interface ActionPlan {
  fiscal_year: number;
}

export interface IInstallment {
  installment_1: boolean | null;
  installment_2: boolean | null;
  installment_3: boolean | null;
  installment_4: boolean | null;
  installment_5: boolean | null;
  installment_6: boolean | null;
  installment_7: boolean | null;
  installment_8: boolean | null;
  installment_9: boolean | null;
  installment_10: boolean | null;
  installment_11: boolean | null;
  installment_12: boolean | null;
  installment_13: boolean | null;
  installment_14: boolean | null;
  installment_15: boolean | null;
  installment_16: boolean | null;
  installment_17: boolean | null;
  installment_18: boolean | null;
  installment_19: boolean | null;
  installment_20: boolean | null;
  installment_21: boolean | null;
  installment_22: boolean | null;
  installment_23: boolean | null;
  installment_24: boolean | null;
}

interface IISMAmount {
  ism_amount_1: string;
  ism_amount_2: string;
  ism_amount_3: string;
  ism_amount_4: string;
  ism_amount_5: string;
  ism_amount_6: string;
  ism_amount_7: string;
  ism_amount_8: string;
  ism_amount_9: string;
  ism_amount_10: string;
  ism_amount_11: string;
  ism_amount_12: string;
  ism_amount_13: string;
  ism_amount_14: string;
  ism_amount_15: string;
  ism_amount_16: string;
  ism_amount_17: string;
  ism_amount_18: string;
  ism_amount_19: string;
  ism_amount_20: string;
  ism_amount_21: string;
  ism_amount_22: string;
  ism_amount_23: string;
  ism_amount_24: string;
}

interface IISMQuarter {
  ism_quarter_1: string;
  ism_quarter_2: string;
  ism_quarter_3: string;
  ism_quarter_4: string;
  ism_quarter_5: string;
  ism_quarter_6: string;
  ism_quarter_7: string;
  ism_quarter_8: string;
  ism_quarter_9: string;
  ism_quarter_10: string;
  ism_quarter_11: string;
  ism_quarter_12: string;
  ism_quarter_13: string;
  ism_quarter_14: string;
  ism_quarter_15: string;
  ism_quarter_16: string;
  ism_quarter_17: string;
  ism_quarter_18: string;
  ism_quarter_19: string;
  ism_quarter_20: string;
  ism_quarter_21: string;
  ism_quarter_22: string;
  ism_quarter_23: string;
  ism_quarter_24: string;
}

interface IISMStatus {
  ism_status_1: boolean | null;
  ism_status_2: boolean | null;
  ism_status_3: boolean | null;
  ism_status_4: boolean | null;
  ism_status_5: boolean | null;
  ism_status_6: boolean | null;
  ism_status_7: boolean | null;
  ism_status_8: boolean | null;
  ism_status_9: boolean | null;
  ism_status_10: boolean | null;
  ism_status_11: boolean | null;
  ism_status_12: boolean | null;
  ism_status_13: boolean | null;
  ism_status_14: boolean | null;
  ism_status_15: boolean | null;
  ism_status_16: boolean | null;
  ism_status_17: boolean | null;
  ism_status_18: boolean | null;
  ism_status_19: boolean | null;
  ism_status_20: boolean | null;
  ism_status_21: boolean | null;
  ism_status_22: boolean | null;
  ism_status_23: boolean | null;
  ism_status_24: boolean | null;
}

interface IContinuousWork {
  id: number;
  fiscal_year: number;
  budget: string;
}

interface IItemActionPlan {
  id: string;
  projectNameTh: string;
  activityNameTh: string;
  planBudget: string;
}

export interface FormState {
  section: Number;
  subSection3: Number;
  obj: {
    id: string;
    // section1
    fiscal_year: string | Number;
    // project_name: string;
    type_of_statement: string;
    procurement_name: string;
    other_budget: string;
    other_budget_name: string | null;
    budget: string | null;
    purchasing_hiring_list: string;
    add_action_plan: IItemActionPlan[] | [];
    add_manually: {
      event_name: string;
      procurement_list: string;
      budget_limit: string;
    };
    amount_change: boolean;
    resp_department: string;
    resp_section: string;
    resp_unit: string;
    nature_of_work: string;
    number_of_years: string;
    continuous_work: IContinuousWork[];
    person_in_charge_project: string;
    tel: string;
    // end section1
    // section 2
    action_plan_table: ActionPlan[];
    // เลือกวันที่ของแผนปฏิบัติการ
    ap1_start_date: string;
    ap1_end_date: string;
    ap2_start_date: string;
    ap2_end_date: string;
    ap3_start_date: string;
    ap3_end_date: string;
    ap4_start_date: string;
    ap4_end_date: string;
    ap5_start_date: string;
    ap5_end_date: string;
    ap6_start_date: string;
    ap6_end_date: string;

    // end section 2
    // section 3
    quarter: string;
    result: string;
    attachment: File | undefined;
    note: string;
    draft_start_date: string;
    draft_end_date: string;
    follow_plan: string;
    approve_report_start_date: string;
    approve_report_end_date: string;
    proc_approve_start_date: string;
    proc_approve_end_date: string;

    proc_method: {
      proc_e_mkt: any;
      proc_e_bid: any;
      proc_announce: any;
      proc_select: any;
      proc_specific: any;

      rental_select: any;
      rental_specific: any;

      hire_cst_announce: any;
      hire_cst_select: any;
      hire_cst_specific: any;

      hire_design_announce: any;
      hire_design_select: any;
      hire_design_specific: any;
      hire_design_contest: any;

      // radio
      proc_main_method: string;
      proc_sub_method: string;
      proc_announce_method: string;
    };

    // 4. ทำสัญญาจัดซื้อ/จัดจ้าง
    contract_start_date: string;
    contract_end_date: string;
    contract_name: string;
    contract_status: string;
    contract_number: string;
    contract_date: string;
    contract_budget: string;
    term_of_pay_no: string;
    contract_term_delivery: string;
    contract_remain_budget: string;

    // 5. การดำเนินงานตามเงื่อนไขของสัญญา/ส่งมอบงานงวดต่างๆ
    deliver_start_date: string;
    deliver_end_date: string;
    deliver_period: string;
    deliver_amount_withdrawn_before: string;
    deliver_total_amount_disbursed: string;
    deliver_balance: string;

    // 6. กำหนดแล้วเสร็จ
    schedule_complete: string;
    final_note: string;
    commander: string;
    define_department_name: string;
  } & IInstallment &
    IISMAmount &
    IISMQuarter &
    IISMStatus;
  search_data: ISearchDataObj[];
  search_data_count: number;
  search_data_current_page: number;
  search_conditions: ISearchObj;
}

export interface ISearchDataObj {
  procurementDataId: string;
  processStatus: string;
  procurementBudgetType: string;
  yearNo: string | Number;
  procurementProjectName: string;
  budgetOnYear: string;
  procurementSubType: boolean;
  // start_date: string;
  // end_date: string;
  // proc_method: string;
  remark: string;
  // resp_agency: string;
}

export interface ISearchObj {
  fiscal_year: string;
  resp_agency_name: string;
  // type_of_statement: string;
  indicators_number: number;
  indicators_name: string;
  budget_investment: boolean;
  budget_investment_budget: boolean;
  budget_reserve_urgent: boolean;
  budget_support: boolean;
  budget_income: boolean;
  budget_other: boolean;
  budget_other_central: boolean;
  budget_other_loan: boolean;
  budget_other_other: boolean;
  proc_method: string;
  proj_activ: string;
  job_status: string;
}
