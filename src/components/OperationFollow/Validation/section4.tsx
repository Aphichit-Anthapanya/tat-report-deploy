export const checkValidity = (
    formState: any,
    validationState: any, 
    setValidationState: (value: any)=>void,
    handleSection: (value: number) => void) => {

    const checkProjectDateValid = (formState.section4.project_start == '' || formState.section4.project_end == '' ? false: true)
    const checkFlagshipRiskValid = formState.section4.flagship_risk == '' ? false: true
    const checkRiskPreventionValid = formState.section4.risk_prevention == '' ? false: true
    const checkBenefitValid = formState.section4.benefit == '' ? false: true
    
    if(!checkProjectDateValid){
        setValidationState(
            (validationState: any[]) => {
                const updatedData = validationState.map(item => {
                  if (item.name === 'project_date') {
                    return { ...item, isValid: false };
                  }
                  return item;
                });
                return updatedData;
            }
        )
    }else{
        setValidationState(
            (validationState: any[]) => {
                const updatedData = validationState.map(item => {
                  if (item.name === 'project_date') {
                    return { ...item, isValid: true };
                  }
                  return item;
                });
                return updatedData;
            }
        )
    }

    if(!checkFlagshipRiskValid){
        setValidationState(
            (validationState: any[]) => {
                const updatedData = validationState.map(item => {
                  if (item.name === 'flagship_risk') {
                    return { ...item, isValid: false };
                  }
                  return item;
                });
                return updatedData;
            }
        )
    }else{
        setValidationState(
            (validationState: any[]) => {
                const updatedData = validationState.map(item => {
                  if (item.name === 'flagship_risk') {
                    return { ...item, isValid: true };
                  }
                  return item;
                });
                return updatedData;
            }
        )
    }

    if(!checkRiskPreventionValid){
        setValidationState(
            (validationState: any[]) => {
                const updatedData = validationState.map(item => {
                  if (item.name === 'risk_prevention') {
                    return { ...item, isValid: false };
                  }
                  return item;
                });
                return updatedData;
            }
        )
    }else{
        setValidationState(
            (validationState: any[]) => {
                const updatedData = validationState.map(item => {
                  if (item.name === 'risk_prevention') {
                    return { ...item, isValid: true };
                  }
                  return item;
                });
                return updatedData;
            }
        )
    }

    if(!checkBenefitValid){
        setValidationState(
            (validationState: any[]) => {
                const updatedData = validationState.map(item => {
                  if (item.name === 'benefit') {
                    return { ...item, isValid: false };
                  }
                  return item;
                });
                return updatedData;
            }
        )
    }else{
        setValidationState(
            (validationState: any[]) => {
                const updatedData = validationState.map(item => {
                  if (item.name === 'benefit') {
                    return { ...item, isValid: true };
                  }
                  return item;
                });
                return updatedData;
            }
        )
    }

    if(
        checkProjectDateValid && 
        checkFlagshipRiskValid && 
        checkRiskPreventionValid &&  
        checkBenefitValid
        ){
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return true
    }else{
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return false
    }

}