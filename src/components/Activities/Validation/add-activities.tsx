export const checkValidity = (
  formState: any,
  validationState: any,
  setValidationState: (value: any) => void,
  tableOperationAreaData: any,
  tableProjectIndicatorData: any
) => {
  const checkCatNameValid = formState.catname == "" ? false : true;
  const checkActivityTypeValid = formState.activity_type == "" ? false : true;
  const checkActivityOrderValid = formState.activity_order == "" ? false : true;
  const checkActivityNameValid = formState.activity_name == "" ? false : true;
  const checkActivitySharedByProjectValid =
    formState.activity_shared_by_project == "" ? false : true;
  const checkActivityStartValid = formState.activity_start == "" ? false : true;
  const checkActivityEndValid = formState.activity_end == "" ? false : true;
  const checkTableOperationAreaValid =
    tableProjectIndicatorData.length == 0 ? false : true;
  const checkTableProjectIndicatorValid =
    tableOperationAreaData.length == 0 ? false : true;
  const checkActivityDescriptionValid =
    formState.activity_description == "" ? false : true;

  if (!checkActivityDescriptionValid) {
    setValidationState((validationState: any[]) => {
      const updatedData = validationState.map((item) => {
        if (item.name === "activity_description") {
          return { ...item, isValid: false };
        }
        return item;
      });
      return updatedData;
    });
  } else {
    setValidationState((validationState: any[]) => {
      const updatedData = validationState.map((item) => {
        if (item.name === "activity_description") {
          return { ...item, isValid: true };
        }
        return item;
      });
      return updatedData;
    });
  }

  if (!checkCatNameValid) {
    setValidationState((validationState: any[]) => {
      const updatedData = validationState.map((item) => {
        if (item.name === "catname") {
          return { ...item, isValid: false };
        }
        return item;
      });
      return updatedData;
    });
  } else {
    setValidationState((validationState: any[]) => {
      const updatedData = validationState.map((item) => {
        if (item.name === "catname") {
          return { ...item, isValid: true };
        }
        return item;
      });
      return updatedData;
    });
  }

  if (!checkActivityTypeValid) {
    setValidationState((validationState: any[]) => {
      const updatedData = validationState.map((item) => {
        if (item.name === "activity_type") {
          return { ...item, isValid: false };
        }
        return item;
      });
      return updatedData;
    });
  } else {
    setValidationState((validationState: any[]) => {
      const updatedData = validationState.map((item) => {
        if (item.name === "activity_type") {
          return { ...item, isValid: true };
        }
        return item;
      });
      return updatedData;
    });
  }

  if (!checkActivityOrderValid) {
    setValidationState((validationState: any[]) => {
      const updatedData = validationState.map((item) => {
        if (item.name === "activity_order") {
          return { ...item, isValid: false };
        }
        return item;
      });
      return updatedData;
    });
  } else {
    setValidationState((validationState: any[]) => {
      const updatedData = validationState.map((item) => {
        if (item.name === "activity_order") {
          return { ...item, isValid: true };
        }
        return item;
      });
      return updatedData;
    });
  }

  if (!checkActivityNameValid) {
    setValidationState((validationState: any[]) => {
      const updatedData = validationState.map((item) => {
        if (item.name === "activity_name") {
          return { ...item, isValid: false };
        }
        return item;
      });
      return updatedData;
    });
  } else {
    setValidationState((validationState: any[]) => {
      const updatedData = validationState.map((item) => {
        if (item.name === "activity_name") {
          return { ...item, isValid: true };
        }
        return item;
      });
      return updatedData;
    });
  }

  if (!checkActivitySharedByProjectValid) {
    setValidationState((validationState: any[]) => {
      const updatedData = validationState.map((item) => {
        if (item.name === "activity_shared_by_project") {
          return { ...item, isValid: false };
        }
        return item;
      });
      return updatedData;
    });
  } else {
    setValidationState((validationState: any[]) => {
      const updatedData = validationState.map((item) => {
        if (item.name === "activity_shared_by_project") {
          return { ...item, isValid: true };
        }
        return item;
      });
      return updatedData;
    });
  }

  if (!checkActivityStartValid) {
    setValidationState((validationState: any[]) => {
      const updatedData = validationState.map((item) => {
        if (item.name === "activity_start") {
          return { ...item, isValid: false };
        }
        return item;
      });
      return updatedData;
    });
  } else {
    setValidationState((validationState: any[]) => {
      const updatedData = validationState.map((item) => {
        if (item.name === "activity_start") {
          return { ...item, isValid: true };
        }
        return item;
      });
      return updatedData;
    });
  }

  if (!checkActivityEndValid) {
    setValidationState((validationState: any[]) => {
      const updatedData = validationState.map((item) => {
        if (item.name === "activity_end") {
          return { ...item, isValid: false };
        }
        return item;
      });
      return updatedData;
    });
  } else {
    setValidationState((validationState: any[]) => {
      const updatedData = validationState.map((item) => {
        if (item.name === "activity_end") {
          return { ...item, isValid: true };
        }
        return item;
      });
      return updatedData;
    });
  }

  if (!checkTableOperationAreaValid) {
    setValidationState((validationState: any[]) => {
      const updatedData = validationState.map((item) => {
        if (item.name === "tableOperationArea") {
          return { ...item, isValid: false };
        }
        return item;
      });
      return updatedData;
    });
  } else {
    setValidationState((validationState: any[]) => {
      const updatedData = validationState.map((item) => {
        if (item.name === "tableOperationArea") {
          return { ...item, isValid: true };
        }
        return item;
      });
      return updatedData;
    });
  }

  if (!checkTableProjectIndicatorValid) {
    setValidationState((validationState: any[]) => {
      const updatedData = validationState.map((item) => {
        if (item.name === "tableProjectIndicator") {
          return { ...item, isValid: false };
        }
        return item;
      });
      return updatedData;
    });
  } else {
    setValidationState((validationState: any[]) => {
      const updatedData = validationState.map((item) => {
        if (item.name === "tableProjectIndicator") {
          return { ...item, isValid: true };
        }
        return item;
      });
      return updatedData;
    });
  }

  // console.log(    
  //   checkActivityTypeValid 
  // )

  if (
    checkCatNameValid &&
    checkActivityTypeValid &&
    checkActivityOrderValid &&
    checkActivityNameValid &&
    checkActivitySharedByProjectValid &&
    checkActivityStartValid &&
    checkActivityEndValid &&
    checkTableOperationAreaValid &&
    checkTableProjectIndicatorValid
  ) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return true;
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return false;
  }
};
