"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "../operation-follow.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { updateFormField, resetForm } from "@/redux/OperationFollow/reducer";
import { fetchSection2dataService } from "@/redux/OperationFollow/Section2/service";

interface TableQuarterProps {
  onChangeQuarter: (data: any) => void;
  quarterSelect: number;
  setQuarterSelect: (value: number) => void;
  tempMask: any;
  setTempMask: (value: any) => void;
}

export default function TableQuarterSummary(props: TableQuarterProps) {
  const formState = useSelector(
    (state: RootState) => state.operationFollowForm
  );
  const dispatch = useDispatch();

  const handleQuarterSelect = (value: number) => {
    // Perform any necessary actions here before calling the callback function
    props.setQuarterSelect(value);
  };

  const handleChangeField = (event: any, quarter: number) => {
    const { name, value } = event.target;

    if (quarter == 1) {
      if (value && !isNaN(value)) {
        props.setTempMask({
          ...props.tempMask,
          quarter1: {
            ...props.tempMask.quarter1,
            [name]: value,
          },
        });
      } else {
        props.setTempMask({
          ...props.tempMask,
          quarter1: {
            ...props.tempMask.quarter1,
            [name]: "",
          },
        });
      }
    }

    if (quarter == 2) {
      if (value && !isNaN(value)) {
        props.setTempMask({
          ...props.tempMask,
          quarter2: {
            ...props.tempMask.quarter2,
            [name]: value,
          },
        });
      } else {
        props.setTempMask({
          ...props.tempMask,
          quarter2: {
            ...props.tempMask.quarter2,
            [name]: "",
          },
        });
      }
    }

    if (quarter == 3) {
      if (value && !isNaN(value)) {
        props.setTempMask({
          ...props.tempMask,
          quarter3: {
            ...props.tempMask.quarter3,
            [name]: value,
          },
        });
      } else {
        props.setTempMask({
          ...props.tempMask,
          quarter3: {
            ...props.tempMask.quarter3,
            [name]: "",
          },
        });
      }
    }

    if (quarter == 4) {
      if (value && !isNaN(value)) {
        props.setTempMask({
          ...props.tempMask,
          quarter4: {
            ...props.tempMask.quarter4,
            [name]: value,
          },
        });
      } else {
        props.setTempMask({
          ...props.tempMask,
          quarter4: {
            ...props.tempMask.quarter4,
            [name]: "",
          },
        });
      }
    }
  };

  const formattedValue = (value: string) => {
    const result = Number(value).toLocaleString("en-US");

    return result;
  };

  const sumTotal = async (event: any, quarter: number) => {
    const { name, value } = event.target;

    if (quarter == 1) {
      const updateQuarter = {
        ...formState.section2.quarter.quarter1,
        [name]: isValidNumber(value) ? 
        value : 0
      };

      dispatch(
        updateFormField({
          ...formState,
          section2: {
            ...formState.section2,
            quarter: {
              ...formState.section2.quarter,
              quarter1: updateQuarter,
            },
          },
        })
      );

      await props.setTempMask({
        ...props.tempMask,
        quarter1: {
          ...props.tempMask.quarter1,
          [name]: formattedValue(
            isValidNumber(value) ? value.replace(",", "") : 0
          ),
        },
      });
    }

    if (quarter == 2) {
      const updateQuarter = {
        ...formState.section2.quarter.quarter2,
        [name]: isValidNumber(value) ? 
        value : 0
      };

      dispatch(
        updateFormField({
          ...formState,
          section2: {
            ...formState.section2,
            quarter: {
              ...formState.section2.quarter,
              quarter2: updateQuarter,
            },
          },
        })
      );

      props.setTempMask({
        ...props.tempMask,
        quarter2: {
          ...props.tempMask.quarter2,
          [name]: formattedValue(
            isValidNumber(value) ? value.replace(",", "") : 0
          ),
        },
      });
    }

    if (quarter == 3) {
      const updateQuarter = {
        ...formState.section2.quarter.quarter3,
        [name]: isValidNumber(value) ? 
        value : 0
      };

      dispatch(
        updateFormField({
          ...formState,
          section2: {
            ...formState.section2,
            quarter: {
              ...formState.section2.quarter,
              quarter3: updateQuarter,
            },
          },
        })
      );

      props.setTempMask({
        ...props.tempMask,
        quarter3: {
          ...props.tempMask.quarter3,
          [name]: formattedValue(
            isValidNumber(value) ? value.replace(",", "") : 0
          ),
        },
      });
    }

    if (quarter == 4) {
      const updateQuarter = {
        ...formState.section2.quarter.quarter4,
        [name]: isValidNumber(value) ? 
        value : 0
      };

      dispatch(
        updateFormField({
          ...formState,
          section2: {
            ...formState.section2,
            quarter: {
              ...formState.section2.quarter,
              quarter4: updateQuarter,
            },
          },
        })
      );

      props.setTempMask({
        ...props.tempMask,
        quarter4: {
          ...props.tempMask.quarter4,
          [name]: formattedValue(
            isValidNumber(value) ? value.replace(",", "") : 0
          ),
        },
      });
    }
  };

  const checkNan = (value: string) => {
    if (isNaN(parseInt(value))) {
      return "0";
    } else {
      return value;
    }
  };

  function isValidNumber(input: string): boolean {
    if (
      !isNaN(parseInt(input)) &&
      // parseInt(input) > 999 &&
      // input.endsWith("000") &&
      Number.isInteger(parseFloat(input))
    ) {
      return true;
    } else {
      return false;
    }
  }

  function setEmptyTemp(quarter: number, month: string) {
    if (quarter == 1) {
      props.setTempMask({
        ...props.tempMask,
        quarter1: {
          ...props.tempMask.quarter1,
          [month]: "",
        },
      });
    }

    if (quarter == 2) {
      props.setTempMask({
        ...props.tempMask,
        quarter2: {
          ...props.tempMask.quarter2,
          [month]: "",
        },
      });
    }

    if (quarter == 3) {
      props.setTempMask({
        ...props.tempMask,
        quarter3: {
          ...props.tempMask.quarter3,
          [month]: "",
        },
      });
    }

    if (quarter == 4) {
      props.setTempMask({
        ...props.tempMask,
        quarter4: {
          ...props.tempMask.quarter4,
          [month]: "",
        },
      });
    }
  }

  function convertToNumberFormat(stringNumber: string): number | null {
    try {
      // Remove commas from the string number
      const number = parseInt(stringNumber.replace(/,/g, ""));
      return number;
    } catch (error) {
      // Return null if the string cannot be converted to a number
      return null;
    }
  }

  const percentCal = (num1: string, num2: string): number | null => {
    const convertedNum1 = convertToNumberFormat(num1);
    const convertedNum2 = convertToNumberFormat(num2);

    if (convertedNum1 !== null && convertedNum2 !== null) {
      const result = (convertedNum1 / convertedNum2) * 100.0;
      return result;
    } else {
      // Return null if any of the inputs cannot be converted to a number
      return null;
    }
  };

  const convertDecimalPlaces = (input: string): string => {
    const num = parseFloat(input);
    if (isNaN(num)) {
      return "0.00";
    }

    const fixedNum = num.toFixed(2);
    return fixedNum;
  };

  useEffect(() => {
    let total =
      parseInt(formState.section2.quarter.quarter1.month1 || "0") +
      parseInt(formState.section2.quarter.quarter1.month2 || "0") +
      parseInt(formState.section2.quarter.quarter1.month3 || "0");

    props.setTempMask({
      ...props.tempMask,
      quarter1: {
        ...props.tempMask.quarter1,
        total: formattedValue(total + ""),
      },
    });
  }, [formState.section2.quarter.quarter1]);

  useEffect(() => {
    let total =
      parseInt(formState.section2.quarter.quarter2.month1 || "0") +
      parseInt(formState.section2.quarter.quarter2.month2 || "0") +
      parseInt(formState.section2.quarter.quarter2.month3 || "0");
    props.setTempMask({
      ...props.tempMask,
      quarter2: {
        ...props.tempMask.quarter2,
        total: formattedValue(total + ""),
      },
    });
  }, [formState.section2.quarter.quarter2]);

  useEffect(() => {
    let total =
      parseInt(formState.section2.quarter.quarter3.month1 || "0") +
      parseInt(formState.section2.quarter.quarter3.month2 || "0") +
      parseInt(formState.section2.quarter.quarter3.month3 || "0");
    props.setTempMask({
      ...props.tempMask,
      quarter3: {
        ...props.tempMask.quarter3,
        total: formattedValue(total + ""),
      },
    });
  }, [formState.section2.quarter.quarter3]);

  useEffect(() => {
    let total =
      parseInt(formState.section2.quarter.quarter4.month1 || "0") +
      parseInt(formState.section2.quarter.quarter4.month2 || "0") +
      parseInt(formState.section2.quarter.quarter4.month3 || "0");
    props.setTempMask({
      ...props.tempMask,
      quarter4: {
        ...props.tempMask.quarter4,
        total: formattedValue(total + ""),
      },
    });
  }, [formState.section2.quarter.quarter4]);

  useEffect(() => {
    if (props.tempMask.quarter1.total != "0")
      props.setTempMask({
        ...props.tempMask,
        quarter1: {
          ...props.tempMask.quarter1,
          porportion: percentCal(
            props.tempMask.quarter1.total,
            formState.section2.budget
          ),
        },
      });
  }, [props.tempMask.quarter1.total, formState.section2.budget]);

  useEffect(() => {
    if (props.tempMask.quarter2.total != "0")
      props.setTempMask({
        ...props.tempMask,
        quarter2: {
          ...props.tempMask.quarter2,
          porportion: percentCal(
            props.tempMask.quarter2.total,
            formState.section2.budget
          ),
        },
      });
  }, [props.tempMask.quarter2.total, formState.section2.budget]);

  useEffect(() => {
    if (props.tempMask.quarter3.total != "0")
      props.setTempMask({
        ...props.tempMask,
        quarter3: {
          ...props.tempMask.quarter3,
          porportion: percentCal(
            props.tempMask.quarter3.total,
            formState.section2.budget
          ),
        },
      });
  }, [props.tempMask.quarter3.total, formState.section2.budget]);

  useEffect(() => {
    if (props.tempMask.quarter4.total != "0")
      props.setTempMask({
        ...props.tempMask,
        quarter4: {
          ...props.tempMask.quarter4,
          porportion: percentCal(
            props.tempMask.quarter4.total,
            formState.section2.budget
          ),
        },
      });
  }, [props.tempMask.quarter4.total, formState.section2.budget]);

  return (
    <>
      <div className="table-summary-wrapper">
        <div className="table-summary-content">
          <div className="small-table-wrapper">
            <div className="table-summary-header">
              <span><b>งบประมาณรายเดือน</b></span>
            </div>
            <div className="small-table d-flex">
              <div className="small-table-quarter-1 item-quarter">
                <div className="small-table-header">ไตรมาส1</div>
                <div className="small-table-content">
                  <div className="d-flex small-table-field">
                    <div className="table-label">ตุลาคม</div>
                    <div className="table-field">
                      <input
                        // onClick={() => setEmptyTemp(1,'month1')}
                        onChange={(event) => handleChangeField(event, 1)}
                        name="month1"
                        value={props.tempMask.quarter1.month1}
                        type="text"
                        className="form-control purchase-project-feild1"
                        placeholder=""
                        id="filterOverall"
                        style={{ width: "80%", margin: "auto" }}
                        onBlur={(e) => sumTotal(e, 1)}
                      />
                    </div>
                  </div>
                  <div className="d-flex small-table-field">
                    <div className="table-label">พฤศจิกายน</div>
                    <div className="table-field">
                      <input
                        // onClick={() => setEmptyTemp(1,'month2')}
                        onChange={(event) => handleChangeField(event, 1)}
                        name="month2"
                        value={props.tempMask.quarter1.month2}
                        type="text"
                        className="form-control purchase-project-feild1"
                        placeholder=""
                        id="filterOverall"
                        style={{ width: "80%", margin: "auto" }}
                        onBlur={(e) => sumTotal(e, 1)}
                      />
                    </div>
                  </div>
                  <div className="d-flex small-table-field">
                    <div className="table-label">ธันวาคม</div>
                    <div className="table-field">
                      <input
                        // onClick={() => setEmptyTemp(1,'month3')}
                        onChange={(event) => handleChangeField(event, 1)}
                        name="month3"
                        value={props.tempMask.quarter1.month3}
                        type="text"
                        className="form-control purchase-project-feild1"
                        placeholder=""
                        id="filterOverall"
                        style={{ width: "80%", margin: "auto" }}
                        onBlur={(e) => sumTotal(e, 1)}
                      />
                    </div>
                  </div>
                  <div className="small-table-field">
                    <div className="table-label total">
                      ผลรวมงบประมาณไตรมาส 1:
                    </div>
                    <div className="table-field total">
                      <input
                        disabled
                        type="text"
                        className="form-control"
                        value={
                          isNaN(parseInt(props.tempMask.quarter1.total))
                            ? "0"
                            : props.tempMask.quarter1.total
                        }
                      />
                    </div>
                  </div>
                  <div className="d-flex small-table-field">
                    <div className="table-label">สัดส่วน</div>
                    <div className="table-field percent">
                      <input
                        disabled
                        type="text"
                        className="form-control"
                        value={convertDecimalPlaces(
                          props.tempMask.quarter1.porportion
                        )}
                      />
                      <span className="percent">%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="small-table-quarter-2 item-quarter">
                <div className="small-table-header">ไตรมาส2</div>
                <div className="small-table-content">
                  <div className="d-flex small-table-field">
                    <div className="table-label">มกราคม</div>
                    <div className="table-field">
                      <input
                        // onClick={() => setEmptyTemp(2,'month1')}
                        onChange={(event) => handleChangeField(event, 2)}
                        name="month1"
                        value={props.tempMask.quarter2.month1}
                        type="text"
                        className="form-control purchase-project-feild1"
                        placeholder=""
                        id="filterOverall"
                        style={{ width: "80%", margin: "auto" }}
                        onBlur={(e) => sumTotal(e, 2)}
                      />
                    </div>
                  </div>
                  <div className="d-flex small-table-field">
                    <div className="table-label">กุมภาพันธ์</div>
                    <div className="table-field">
                      <input
                        // onClick={() => setEmptyTemp(2,'month2')}
                        onChange={(event) => handleChangeField(event, 2)}
                        name="month2"
                        value={props.tempMask.quarter2.month2}
                        type="text"
                        className="form-control purchase-project-feild1"
                        placeholder=""
                        id="filterOverall"
                        style={{ width: "80%", margin: "auto" }}
                        onBlur={(e) => sumTotal(e, 2)}
                      />
                    </div>
                  </div>
                  <div className="d-flex small-table-field">
                    <div className="table-label">มีนาคม</div>
                    <div className="table-field">
                      <input
                        // onClick={() => setEmptyTemp(2,'month3')}
                        onChange={(event) => handleChangeField(event, 2)}
                        name="month3"
                        value={props.tempMask.quarter2.month3}
                        type="text"
                        className="form-control purchase-project-feild1"
                        placeholder=""
                        id="filterOverall"
                        style={{ width: "80%", margin: "auto" }}
                        onBlur={(e) => sumTotal(e, 2)}
                      />
                    </div>
                  </div>
                  <div className="small-table-field">
                    <div className="table-label total">
                      ผลรวมงบประมาณไตรมาส 2:
                    </div>
                    <div className="table-field total">
                      <input
                        disabled
                        type="text"
                        className="form-control"
                        value={
                          isNaN(parseInt(props.tempMask.quarter2.total))
                            ? "0"
                            : props.tempMask.quarter2.total
                        }
                      />
                    </div>
                  </div>
                  <div className="d-flex small-table-field">
                    <div className="table-label">สัดส่วน</div>
                    <div className="table-field percent">
                      <input
                        disabled
                        type="text"
                        className="form-control"
                        value={convertDecimalPlaces(
                          props.tempMask.quarter2.porportion
                        )}
                      />
                      <span className="percent">%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="small-table-quarter-3 item-quarter">
                <div className="small-table-header">ไตรมาส3</div>
                <div className="small-table-content">
                  <div className="d-flex small-table-field">
                    <div className="table-label">เมษายน</div>
                    <div className="table-field">
                      <input
                        // onClick={() => setEmptyTemp(3,'month1')}
                        onChange={(event) => handleChangeField(event, 3)}
                        name="month1"
                        value={props.tempMask.quarter3.month1}
                        type="text"
                        className="form-control purchase-project-feild1"
                        placeholder=""
                        id="filterOverall"
                        style={{ width: "80%", margin: "auto" }}
                        onBlur={(e) => sumTotal(e, 3)}
                      />
                    </div>
                  </div>
                  <div className="d-flex small-table-field">
                    <div className="table-label">พฤษภาคม</div>
                    <div className="table-field">
                      <input
                        // onClick={() => setEmptyTemp(3,'month2')}
                        onChange={(event) => handleChangeField(event, 3)}
                        name="month2"
                        value={props.tempMask.quarter3.month2}
                        type="text"
                        className="form-control purchase-project-feild1"
                        placeholder=""
                        id="filterOverall"
                        style={{ width: "80%", margin: "auto" }}
                        onBlur={(e) => sumTotal(e, 3)}
                      />
                    </div>
                  </div>
                  <div className="d-flex small-table-field">
                    <div className="table-label">มิถุนายน</div>
                    <div className="table-field">
                      <input
                        // onClick={() => setEmptyTemp(3,'month3')}
                        onChange={(event) => handleChangeField(event, 3)}
                        name="month3"
                        value={props.tempMask.quarter3.month3}
                        type="text"
                        className="form-control purchase-project-feild1"
                        placeholder=""
                        id="filterOverall"
                        style={{ width: "80%", margin: "auto" }}
                        onBlur={(e) => sumTotal(e, 3)}
                      />
                    </div>
                  </div>
                  <div className="small-table-field">
                    <div className="table-label total">
                      ผลรวมงบประมาณไตรมาส 3:
                    </div>
                    <div className="table-field total">
                      <input
                        disabled
                        type="text"
                        className="form-control"
                        value={
                          isNaN(parseInt(props.tempMask.quarter3.total))
                            ? "0"
                            : props.tempMask.quarter3.total
                        }
                      />
                    </div>
                  </div>
                  <div className="d-flex small-table-field">
                    <div className="table-label percent">สัดส่วน</div>
                    <div className="table-field percent">
                      <input
                        disabled
                        type="text"
                        className="form-control"
                        value={convertDecimalPlaces(
                          props.tempMask.quarter3.porportion
                        )}
                      />
                      <span className="percent">%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="small-table-quarter-4 item-quarter">
                <div className="small-table-header">ไตรมาส4</div>
                <div className="small-table-content">
                  <div className="d-flex small-table-field">
                    <div className="table-label">กรกฎาคม</div>
                    <div className="table-field">
                      <input
                        // onClick={() => setEmptyTemp(4,'month1')}
                        onChange={(event) => handleChangeField(event, 4)}
                        name="month1"
                        value={props.tempMask.quarter4.month1}
                        type="text"
                        className="form-control purchase-project-feild1"
                        placeholder=""
                        id="filterOverall"
                        style={{ width: "80%", margin: "auto" }}
                        onBlur={(e) => sumTotal(e, 4)}
                      />
                    </div>
                  </div>
                  <div className="d-flex small-table-field">
                    <div className="table-label">สิงหาคม</div>
                    <div className="table-field">
                      <input
                        // onClick={() => setEmptyTemp(4,'month2')}
                        onChange={(event) => handleChangeField(event, 4)}
                        name="month2"
                        value={props.tempMask.quarter4.month2}
                        type="text"
                        className="form-control purchase-project-feild1"
                        placeholder=""
                        id="filterOverall"
                        style={{ width: "80%", margin: "auto" }}
                        onBlur={(e) => sumTotal(e, 4)}
                      />
                    </div>
                  </div>
                  <div className="d-flex small-table-field">
                    <div className="table-label">กันยายน</div>
                    <div className="table-field">
                      <input
                        // onClick={() => setEmptyTemp(4,'month3')}
                        onChange={(event) => handleChangeField(event, 4)}
                        name="month3"
                        value={props.tempMask.quarter4.month3}
                        type="text"
                        className="form-control purchase-project-feild1"
                        placeholder=""
                        id="filterOverall"
                        style={{ width: "80%", margin: "auto" }}
                        onBlur={(e) => sumTotal(e, 4)}
                      />
                    </div>
                  </div>
                  <div className="small-table-field">
                    <div className="table-label total">
                      ผลรวมงบประมาณไตรมาส 4:
                    </div>
                    <div className="table-field total">
                      <input
                        disabled
                        type="text"
                        className="form-control"
                        value={
                          isNaN(parseInt(props.tempMask.quarter4.total))
                            ? "0"
                            : props.tempMask.quarter4.total
                        }
                      />
                    </div>
                  </div>
                  <div className="d-flex small-table-field">
                    <div className="table-label">สัดส่วน</div>
                    <div className="table-field percent">
                      <input
                        disabled
                        type="text"
                        className="form-control"
                        value={convertDecimalPlaces(
                          props.tempMask.quarter4.porportion
                        )}
                      />
                      <span className="percent">%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
