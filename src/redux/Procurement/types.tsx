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
}

interface IISMQuarter {
  ism_1_quarter: string;
  ism_2_quarter: string;
  ism_3_quarter: string;
  ism_4_quarter: string;
  ism_5_quarter: string;
  ism_6_quarter: string;
  ism_7_quarter: string;
  ism_8_quarter: string;
  ism_9_quarter: string;
  ism_10_quarter: string;
  ism_11_quarter: string;
  ism_12_quarter: string;
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
}

export interface FormState {
  section: Number;
  subSection3: Number;
  obj: {
    id: string;
    // section1
    fiscal_year: string | Number;
    type_of_statement: string;
    other_budget: string;
    purchasing_hiring_list: string;
    add_manually: {
      event_name: string;
      procurement_list: string;
      budget_limit: string;
    };
    resp_department: string;
    nature_of_work: string;
    number_of_years: string;
    department: string;
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
    };

    // 4. ทำสัญญาจัดซื้อ/จัดจ้าง
    contract_start_date: string;
    contract_end_date: string;
    contract_name: string;
    contract_status: string;
    contract_number: string;
    contract_s_date: string;
    contract_e_date: string;
    contract_budget: string;
    contract_term_delivery: string;
    contract_remain_budget: string;

    // 5. การดำเนินงานตามเงื่อนไขของสัญญา/ส่งมอบงานงวดต่างๆ
    deliver_start_date: string;
    deliver_end_date: string;
    deliver_note: string;
    deliver_period: string;
    deliver_amount_withdrawn_before: string;
    deliver_total_amount_disbursed: string;
    deliver_balance: string;

    // 6. กำหนดแล้วเสร็จ
    schedule_complete: string;
    commander: string;
    define_department_name: string;
  } & IInstallment &
    IISMAmount &
    IISMQuarter &
    IISMStatus;
  search_data: ISearchDataObj[];
}

export interface ISearchDataObj {
  id: string;
  job_status: string;
  type_of_statement: string;
  fiscal_year: string | Number;
  proc_list: string;
  budget: string;
  activity: boolean;
  start_date: string;
  end_date: string;
  proc_method: string;
  note: string;
  resp_agency: string;
}
