"use client";

import { ErrorMessage, Field, FieldProps } from "formik";
import { Form } from "react-bootstrap";

interface ITextField {
  formName: string;
  formLabel: string;
  formValue: string;
  formType?: string;
}

function TextField({
  formName,
  formLabel,
  formValue,
  formType = "",
}: ITextField) {
  return (
    <Form.Group controlId={formName}>
      {formLabel !== "" && <Form.Label>{formLabel}</Form.Label>}
      <Field>
        {({ field }: FieldProps) => (
          <Form.Control {...field} type={formType} value={formValue} />
        )}
      </Field>
      <ErrorMessage
        name={formName}
        component="div"
        className="text-danger form-error"
      />
    </Form.Group>
  );
}

export default TextField;
