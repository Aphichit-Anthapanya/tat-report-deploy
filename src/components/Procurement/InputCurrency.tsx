import React, { useCallback } from "react";
import { FormikValues } from "formik";

const formatCurrency = (value: any) => {
  if (value == "" || value == "." || value == ".." || isNaN(value)) {
    return "0.00";
  }
  return parseFloat(value)
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

interface CurrencyInputProps {
  field: {
    name: string;
    value: any;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };
  form: FormikValues;
}

const handleKeyPress = (event: any) => {
  const charCode = event.which || event.keyCode;

  const isAllowed =
    (charCode >= 96 && charCode <= 105) ||
    (charCode >= 48 && charCode <= 57) || // Numbers 0-9
    charCode === 46 || // Dot (.)
    event.key == "." ||
    charCode === 110 || // Dot (.)
    charCode === 8 || // Backspace
    charCode === 46; // Delete

  if (!isAllowed) {
    event.preventDefault();
  }
};

const InputCurrency: React.FC<CurrencyInputProps> = ({
  field,
  form,
  ...props
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value;
    const hasMultipleDots = inputValue.split(".").length - 1 > 1;
    const validInput = /^(\d+\.?\d*|\.\d+)$/.test(inputValue);

    if (!hasMultipleDots && validInput) {
      form.setFieldValue(field.name, event.target.value);
    } else if (!hasMultipleDots && !validInput) {
      form.setFieldValue(field.name, event.target.value);
    }
  };

  const [isFocused, setIsFocused] = React.useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (
      field.value == "" ||
      field.value == "." ||
      field.value == ".." ||
      isNaN(field.value)
    ) {
      form.setFieldValue(field.name, "0.00");
      return;
    }
    form.setFieldValue(field.name, parseFloat(field.value).toFixed(2));
  };

  return (
    <input
      {...field}
      {...props}
      type="text"
      value={isFocused ? field.value : formatCurrency(field.value)}
      onChange={handleChange}
      onKeyDown={handleKeyPress}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

export default InputCurrency;
