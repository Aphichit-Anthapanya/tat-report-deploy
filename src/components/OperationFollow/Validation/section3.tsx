export const checkValidity = (
    formState: any,
    validationState: any, 
    setValidationState: (value: any)=>void,
    handleSection: (value: number) => void) => {

        const checkPrincipleReasonValid = formState.section3.principal_reason
        const checkObjectiveValid = checkObjective(formState)
        const checkOperationAreaValid = checkOperationArea(formState);
        const checkProjectIndicatorValid = checkProjectIndicator(formState);
        const checkOutComeField = formState.section3.project_outcome_field
        const checkProjectTargetValid = checkProjectTarget(formState);

        if(!checkPrincipleReasonValid){
            setValidationState(
                (validationState: any[]) => {
                    const updatedData = validationState.map(item => {
                      if (item.name === 'principal_reason') {
                        return { ...item, isValid: false };
                      }
                      return item;
                    });
                    return updatedData;
                }
            )
        }else {
            setValidationState(
                (validationState: any[]) => {
                    const updatedData = validationState.map(item => {
                      if (item.name === 'principal_reason') {
                        return { ...item, isValid: true };
                      }
                      return item;
                    });
                    return updatedData;
                }
            )           
        }

        if(!checkObjectiveValid){
            setValidationState(
                (validationState: any[]) => {
                    const updatedData = validationState.map(item => {
                      if (item.name === 'objective') {
                        return { ...item, isValid: false };
                      }
                      return item;
                    });
                    return updatedData;
                }
            )
        }else {
            setValidationState(
                (validationState: any[]) => {
                    const updatedData = validationState.map(item => {
                      if (item.name === 'objective') {
                        return { ...item, isValid: true };
                      }
                      return item;
                    });
                    return updatedData;
                }
            )           
        }

        if(!checkOperationAreaValid){
            setValidationState(
                (validationState: any[]) => {
                    const updatedData = validationState.map(item => {
                      if (item.name === 'operationArea') {
                        return { ...item, isValid: false };
                      }
                      return item;
                    });
                    return updatedData;
                }
            )
        }else {
            setValidationState(
                (validationState: any[]) => {
                    const updatedData = validationState.map(item => {
                      if (item.name === 'operationArea') {
                        return { ...item, isValid: true };
                      }
                      return item;
                    });
                    return updatedData;
                }
            )           
        }

        if(!checkProjectIndicatorValid){
            setValidationState(
                (validationState: any[]) => {
                    const updatedData = validationState.map(item => {
                      if (item.name === 'project_indicator') {
                        return { ...item, isValid: false };
                      }
                      return item;
                    });
                    return updatedData;
                }
            )
        }else {
            setValidationState(
                (validationState: any[]) => {
                    const updatedData = validationState.map(item => {
                      if (item.name === 'project_indicator') {
                        return { ...item, isValid: true };
                      }
                      return item;
                    });
                    return updatedData;
                }
            )           
        }

        if(!checkOutComeField){
            setValidationState(
                (validationState: any[]) => {
                    const updatedData = validationState.map(item => {
                      if (item.name === 'project_outcome_field') {
                        return { ...item, isValid: false };
                      }
                      return item;
                    });
                    return updatedData;
                }
            )
        }else {
            setValidationState(
                (validationState: any[]) => {
                    const updatedData = validationState.map(item => {
                      if (item.name === 'project_outcome_field') {
                        return { ...item, isValid: true };
                      }
                      return item;
                    });
                    return updatedData;
                }
            )           
        }

        if(!checkProjectTargetValid){
            setValidationState(
                (validationState: any[]) => {
                    const updatedData = validationState.map(item => {
                      if (item.name === 'group_project_goal') {
                        return { ...item, isValid: false };
                      }
                      return item;
                    });
                    return updatedData;
                }
            )
        }else {
            setValidationState(
                (validationState: any[]) => {
                    const updatedData = validationState.map(item => {
                      if (item.name === 'group_project_goal') {
                        return { ...item, isValid: true };
                      }
                      return item;
                    });
                    return updatedData;
                }
            )           
        }

        if(
            checkPrincipleReasonValid && 
            checkObjectiveValid && 
            checkOperationAreaValid &&  
            checkProjectIndicatorValid &&
            checkOutComeField &&
            checkProjectTargetValid
            ){
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return true
        }else{
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return false
        }

}

const checkObjective = (formState: any) => {
    const objective1 = (formState.section3.project_objective.objective1 == '')
    const objective2 = (formState.section3.project_objective.objective2 == '')
    const objective3 = (formState.section3.project_objective.objective3 == '')
    const objective4 = (formState.section3.project_objective.objective4 == '')

    if(objective1 && objective2 && objective3 && objective4){
        return false
    }else{
        return true
    }
}

const checkOperationArea = (formState: any) => {
    if(formState.section3.list_operation_area.length == 0){
        return false
    }else{
        return true
    }
}

const checkProjectIndicator = (formState: any) => {
    if(formState.section3.project_outcome.length == 0){
        return false
    }else{
        return true
    }
}

const checkProjectTarget = (formState: any) => {
    if(formState.section3.project_outcome.length == 0){
        return false
    }else{
        return true
    }
}