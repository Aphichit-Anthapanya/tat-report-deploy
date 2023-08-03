"use client";

import { useEffect, useState } from "react";
import { useParams, usePathname } from "next/navigation";
import "./operation-follow.scss";
import TableQuarterSummary from "./Table/TableQuarterSummary";
import TablePolicySuite from "./Table/TablePolicySuite";
import TableStakeHolder from "./Table/TableStakeHolder";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { updateFormField, resetForm } from "@/redux/OperationFollow/reducer";
import {
  fetchSection2dataService,
  sumMonthTotal,
} from "@/redux/OperationFollow/Section2/service";
import { checkValidity } from "./Validation/section2";
import { Section2 } from "@/redux/OperationFollow/types";

interface Section2Props {
  changeSectionHandle: (value: number, isBubble: boolean) => void;
}

export default function Section2(props: Section2Props) {
  const formState = useSelector(
    (state: RootState) => state.operationFollowForm
  );
  const dispatch = useDispatch();
  let id = 0;
  const params = useParams();
  const [quarterSelect, setQuarterSelect] = useState(1);
  const handleQuarterSelect = (value: number) => {
    setQuarterSelect(value);
  };
  const [validationState, setValidationState] = useState([
    {
      name: "budget",
      alias: "งบประมาณโครงการ",
      isValid: true,
    },
    {
      name: "tableQuarterSummary",
      alias: "งบประมาณแยกตามรายเดือน",
      isValid: true,
    },
    {
      name: "tablePolicySuite",
      alias: "ความสอดคล้องกับนโยบาย",
      isValid: true,
    },
    {
      name: "tableStakeholder",
      alias: "กลุ่มผู้มีส่วนได้ส่วนเสีย",
      isValid: true,
    },
  ]);

  const [tableQuarterData, settableQuarterData] = useState({
    quarter: {
      quarter1: {
        month1: 0,
        month2: 0,
        month3: 0,
        total: 0,
        porportion: 0,
      },
      quarter2: {
        month1: 0,
        month2: 0,
        month3: 0,
        total: 0,
        porportion: 0,
      },
      quarter3: {
        month1: 0,
        month2: 0,
        month3: 0,
        total: 0,
        porportion: 0,
      },
      quarter4: {
        month1: 0,
        month2: 0,
        month3: 0,
        total: 0,
        porportion: 0,
      },
    },
  });

  const [tablePolicySuiteData, settablePolicySuiteData] = useState({
    isFlagship: false,
    isSla: false,
    isMainPlan: false,
    isPAIndicator: false,
    isClosedGap: false,
    isNone: false,
    isCsrProcess: false,
  });

  const [tableStakeHolderData, settableStakeHolderData] = useState({
    isTatStaff: false,
    isCustomer: false,
    isGovernmentAudit: false,
    isSender: false,
    isProviderCustomer: false,
    isWorkingUnit: false,
  });

  const [budgetTemp, setBudgetTemp] = useState("");

  const [tempMask, setTempMask] = useState({
    quarter1: {
      month1: "",
      month2: "",
      month3: "",
      total: "",
    },
    quarter2: {
      month1: "",
      month2: "",
      month3: "",
      total: "",
    },
    quarter3: {
      month1: "",
      month2: "",
      month3: "",
      total: "",
    },
    quarter4: {
      month1: "",
      month2: "",
      month3: "",
      total: "",
    },
  });

  const handleSetTempMask = (value: any) => {
    setTempMask(value);
  };

  const handleSection = (value: number) => {
    if (
      checkValidity(
        formState,
        validationState,
        setValidationState,
        handleSection
      )
    ) {
      handleUpdateForm();
      props.changeSectionHandle(value, false);
    }
  };

  const handleChangeField = (event: any) => {
    const { name, value } = event.target;

    dispatch(
      updateFormField({
        ...formState,
        section2: {
          ...formState.section2,
          [name]: value,
        },
      })
    );
  };

  const handleUpdateForm = () => {
    dispatch(
      updateFormField({
        ...formState,
        section2: {
          ...formState.section2,
          quarter: formState.section2.quarter,
          stakeHolder_Group: formState.section2.stakeHolder_Group,
          suite_outside_policy: formState.section2.suite_outside_policy,
          budget: formState.section2.budget.replace(/,/g, ""),
        },
      })
    );
  };

  const handleChangeQuarter = (data: any) => {
    // console.log(data)
    // settableQuarterData(data)
  };

  const handleChangePolicySuite = (data: any) => {
    settablePolicySuiteData(data);
  };

  const handleChangeStakeHolder = (data: any) => {
    settableStakeHolderData(data);
  };

  const formatCurrency = (name: string) => {
    let formattedValue = "";
    if (name == "budget") {
      formattedValue = Number(formState["section2"]["budget"]).toLocaleString(
        "en-US",
        {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }
      );

      dispatch(
        updateFormField({
          ...formState,
          section2: {
            ...formState.section2,
            budget: formattedValue,
          },
        })
      );
    }
  };

  const onBlurTempMask = (event: any) => {
    const { name, value } = event.target;

    let formattedValue = "";
    if (name == "budget") {
      formattedValue = Number(value).toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

      setBudgetTemp(formattedValue);

      dispatch(
        updateFormField({
          ...formState,
          section2: {
            ...formState.section2,
            budget: value,
          },
        })
      );

      sumMonthTotal(quarterSelect, dispatch, tempMask, setTempMask);
    }
  };

  function isValidNumber(input: string): boolean {
    const numberRegex: RegExp = /^[-+]?(\d+(\.\d*)?|\.\d+)$/;
    return (!isNaN(Number(input)) && numberRegex.test(input)) || input == "";
  }

  const onChangeTempMask = (event: any) => {
    const { name, value } = event.target;

    if (name == "budget") {
      console.log(value);
      if (isValidNumber(value)) {
        setBudgetTemp(value);
      }
    }
  };

  const fetchMask = () => {
    setBudgetTemp(
      Number(formState.section2.budget).toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    );
  };

  const checkNan = (value: string) => {
    if (isNaN(parseInt(value))) {
      return "0";
    } else {
      return value;
    }
  };

  useEffect(() => {
    fetchMask();
  }, []);

  return (
    <>
      <div className="d-flex form-group">
        <div className="form-field-label">
          <label>
            งบประมาณโครงการ<span style={{ color: "red" }}> *</span>
          </label>
        </div>
        <div className="d-flex flex-column form-field-fieldzone">
          <div className="d-flex">
            <div>
              {/* <input onBlur={(e) => formatCurrency('budget')} onChange={(e) => handleChangeField(e)} name="budget" value={formState.section2.budget} type="text" className="form-control" id="exampleFormControlInput1" placeholder=""/> */}
              <input
                onBlur={(e) => formatCurrency("budget")}
                onChange={(e) => handleChangeField(e)}
                name="budget"
                value={formState.section2.budget}
                type="text"
                className="form-control hide"
                id="exampleFormControlInput1"
                placeholder=""
              />
              <input
                onBlur={(e) => onBlurTempMask(e)}
                onChange={(e) => onChangeTempMask(e)}
                name="budget"
                value={budgetTemp}
                type="text"
                className="form-control"
              />
            </div>
            <div style={{ marginTop: "10px", marginLeft: "10px" }}>บาท</div>
          </div>
          <div>
            {validationState[0].isValid == false && (
              <div className="form-field-fieldzone invalid-text">
                <span style={{ color: "red" }}>
                  โปรดกรอกข้อมูล{validationState[0].alias}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="d-flex form-group">
        <div className="form-field-label">
          <label>
            งบประมาณแยกตามรายเดือน<span style={{ color: "red" }}> *</span>
          </label>
        </div>
        <div className="d-flex flex-column form-field-fieldzone">
          <div>
            {validationState[0].isValid == false && (
              <div className="form-field-fieldzone invalid-text">
                <span style={{ color: "red" }}>
                  โปรดกรอกข้อมูล{validationState[0].alias} ให้ครบ
                </span>
              </div>
            )}
          </div>
          <div className="">
            <TableQuarterSummary
              onChangeQuarter={handleChangeQuarter}
              quarterSelect={quarterSelect}
              setQuarterSelect={handleQuarterSelect}
              tempMask={tempMask}
              setTempMask={handleSetTempMask}
            />
          </div>
        </div>
      </div>
      <div className="d-flex form-group">
        <div className="form-field-label">
          <label>
            ความสอดคล้องกับนโยบาย<span style={{ color: "red" }}> *</span> <br />{" "}
            (เลือกได้มากกว่า 1)
          </label>
        </div>
        <div className="d-flex flex-column form-field-fieldzone">
          <div>
            {validationState[2].isValid == false && (
              <div className="form-field-fieldzone invalid-text">
                <span style={{ color: "red" }}>
                  โปรดเลือก{validationState[2].alias} อย่างน้อย 1 ค่า
                </span>
              </div>
            )}
          </div>
          <div className="">
            <TablePolicySuite onChangePolicySuite={handleChangePolicySuite} />
          </div>
        </div>
      </div>
      <div className="d-flex form-group">
        <div className="form-field-label">
          <label>
            กลุ่มผู้มีส่วนได้ส่วนเสีย<span style={{ color: "red" }}> *</span>{" "}
            <br /> (เลือกได้มากกว่า 1)
          </label>
        </div>
        <div className="d-flex flex-column form-field-fieldzone">
          <div>
            {validationState[3].isValid == false && (
              <div className="form-field-fieldzone invalid-text">
                <span style={{ color: "red" }}>
                  โปรดเลือก{validationState[3].alias} อย่างน้อย 1 ค่า
                </span>
              </div>
            )}
          </div>
          <div className="">
            <TableStakeHolder onChangeStakeHolder={handleChangeStakeHolder} />
          </div>
        </div>
      </div>
      <div className="button-section">
        <button
          onClick={() => handleSection(3)}
          type="button"
          className="btn btn-primary"
        >
          ต่อไป <i className="bi bi-chevron-right"></i>
        </button>
        <button type="button" className="btn btn-primary">
          <i className="bi bi-file-earmark"></i> บันทึกข้อมูลชั่วคราว{" "}
        </button>
        <button
          onClick={() => handleSection(1)}
          type="button"
          className="btn btn-primary"
        >
          <i className="bi bi-chevron-left"></i> ย้อนกลับ{" "}
        </button>
      </div>
    </>
  );
}
