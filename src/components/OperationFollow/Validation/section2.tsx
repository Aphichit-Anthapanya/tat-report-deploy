export const checkValidity = (
  formState: any,
  validationState: any,
  setValidationState: (value: any) => void,
  handleSection: (value: number) => void
) => {
  const dataForm = formState.section2;
  const checkBudget = () => {
    if (dataForm.budget !== "0") {
      setValidationState((validationState: any[]) => {
        const updatedData = validationState.map((item) => {
          if (item.name === "budget") {
            return { ...item, isValid: true };
          }
          return item;
        });
        return updatedData;
      });
      return true;
    } else {
      setValidationState((validationState: any[]) => {
        const updatedData = validationState.map((item) => {
          if (item.name === "budget") {
            return { ...item, isValid: false };
          }
          return item;
        });
        return updatedData;
      });
      return false;
    }
  };
  const checkTableQuarterSummaryValid = checkValidityQuarterSummary(formState);
  const checkPolicySuiteValid = checkPolicySuite(formState);
  const checkStakeHolderValid = checkStakeHolder(formState);

  if (!checkTableQuarterSummaryValid) {
    setValidationState((validationState: any[]) => {
      const updatedData = validationState.map((item) => {
        if (item.name === "tableQuarterSummary") {
          return { ...item, isValid: false };
        }
        return item;
      });
      return updatedData;
    });
  } else {
    setValidationState((validationState: any[]) => {
      const updatedData = validationState.map((item) => {
        if (item.name === "tableQuarterSummary") {
          return { ...item, isValid: true };
        }
        return item;
      });
      return updatedData;
    });
  }

  if (!checkPolicySuiteValid) {
    setValidationState((validationState: any[]) => {
      const updatedData = validationState.map((item) => {
        if (item.name === "tablePolicySuite") {
          return { ...item, isValid: false };
        }
        return item;
      });
      return updatedData;
    });
  } else {
    setValidationState((validationState: any[]) => {
      const updatedData = validationState.map((item) => {
        if (item.name === "tablePolicySuite") {
          return { ...item, isValid: true };
        }
        return item;
      });
      return updatedData;
    });
  }

  if (!checkStakeHolderValid) {
    setValidationState((validationState: any[]) => {
      const updatedData = validationState.map((item) => {
        if (item.name === "tableStakeholder") {
          return { ...item, isValid: false };
        }
        return item;
      });
      return updatedData;
    });
  } else {
    setValidationState((validationState: any[]) => {
      const updatedData = validationState.map((item) => {
        if (item.name === "tableStakeholder") {
          return { ...item, isValid: true };
        }
        return item;
      });
      return updatedData;
    });
  }

  if (
    checkBudget() &&
    checkTableQuarterSummaryValid &&
    checkPolicySuiteValid &&
    checkStakeHolderValid
  ) {
    return true;
  } else {
    return false;
  }
};

const checkValidityQuarterSummary = (formState: any) => {
  let data = formState.section2.quarter;

  for (const quarterKey in data) {
    const quarter = data[quarterKey];

    // Iterate over each month in the quarter
    for (const monthKey in quarter) {
      const monthValue = quarter[monthKey];

      // Check if any value is equal to '0'
      if (monthValue === "0") {
        return false;
      }
    }
  }

  return true;
};

const checkPolicySuite = (formState: any) => {
  let data = formState.section2.suite_outside_policy;
  for (const valueKey in data) {
    const key = data[valueKey];

    if (key === true) {
      return true;
    }
  }

  return false;
};

const checkStakeHolder = (formState: any) => {
  let data = formState.section2.stakeHolder_Group;
  for (const valueKey in data) {
    const key = data[valueKey];

    if (key === true) {
      return true;
    }
  }

  return false;
};
