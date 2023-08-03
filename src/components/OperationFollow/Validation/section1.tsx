export const checkValidity = (
  formState: any,
  validationState: any,
  setValidationState: (value: any) => void,
  setFormValid: (value: any) => void,
  handleSection: (value: number) => void
) => {
  const dataForm = formState.section1;
  let isValid = true;
  const updatedData = validationState.map(
    (item: { name: string | number }, isInvalid: any) => {
      if (dataForm[item.name] === "" || dataForm[item.name] === "DEFAULT") {
        isValid = false;
        return { ...item, isValid: false };
      } else {
        return { ...item, isValid: true };
      }
    }
  );
  setValidationState(updatedData);
  setFormValid(isValid);
  if (isValid) {
    handleSection(2);
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};
