export const checkValidity = (
  formState: any,
  validationState: any,
  setValidationState: (value: any) => void,
  handleSection: (value: number) => void
) => {
  const checkStartMoreThanEnd =
    new Date(formState.section4.project_start) >
    new Date(formState.section4.project_end);
  const checkProjectDateValid =
    formState.section4.project_start == "" ||
    formState.section4.project_end == "" ||
    checkStartMoreThanEnd
      ? false
      : true;

  let checkFlagshipRiskValid =
    formState.section4.flagship_risk == "" ? false : true;
  const checkRiskPreventionValid =
    formState.section4.risk_prevention == "" ? false : true;
  const checkBenefitValid = formState.section4.benefit == "" ? false : true;

  if (!checkProjectDateValid) {
    setValidationState((validationState: any[]) => {
      const updatedData = validationState.map((item) => {
        if (item.name === "project_date") {
          return {
            ...item,
            isValid: false,
            startMoreThanEnd: checkStartMoreThanEnd,
          };
        }
        return item;
      });
      return updatedData;
    });
  } else {
    setValidationState((validationState: any[]) => {
      const updatedData = validationState.map((item) => {
        if (item.name === "project_date") {
          return {
            ...item,
            isValid: true,
            startMoreThanEnd: checkStartMoreThanEnd,
          };
        }
        return item;
      });
      return updatedData;
    });
  }

  if (!checkFlagshipRiskValid) {
    setValidationState((validationState: any[]) => {
      const updatedData = validationState.map((item) => {
        if (item.name === "flagship_risk") {
          return { ...item, isValid: false };
        }
        return item;
      });
      return updatedData;
    });
  } else {
    setValidationState((validationState: any[]) => {
      const updatedData = validationState.map((item) => {
        if (item.name === "flagship_risk") {
          return { ...item, isValid: true };
        }
        return item;
      });
      return updatedData;
    });
  }

  if (!checkRiskPreventionValid) {
    setValidationState((validationState: any[]) => {
      const updatedData = validationState.map((item) => {
        if (item.name === "risk_prevention") {
          return { ...item, isValid: false };
        }
        return item;
      });
      return updatedData;
    });
  } else {
    setValidationState((validationState: any[]) => {
      const updatedData = validationState.map((item) => {
        if (item.name === "risk_prevention") {
          return { ...item, isValid: true };
        }
        return item;
      });
      return updatedData;
    });
  }

  if (!checkBenefitValid) {
    setValidationState((validationState: any[]) => {
      const updatedData = validationState.map((item) => {
        if (item.name === "benefit") {
          return { ...item, isValid: false };
        }
        return item;
      });
      return updatedData;
    });
  } else {
    setValidationState((validationState: any[]) => {
      const updatedData = validationState.map((item) => {
        if (item.name === "benefit") {
          return { ...item, isValid: true };
        }
        return item;
      });
      return updatedData;
    });
  }

  if (!formState.section2.suite_outside_policy.isFlagship) {
    checkFlagshipRiskValid = true;
  }

  if (
    checkProjectDateValid &&
    checkFlagshipRiskValid &&
    checkRiskPreventionValid &&
    checkBenefitValid
  ) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return true;
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return false;
  }
};
