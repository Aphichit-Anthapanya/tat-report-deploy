"use client";

// TODO: remove this page later
import ReactECharts from "echarts-for-react";
import { Container, Row } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export default function Page() {
  const option = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
      },
    ],
  };

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  return (
    <Container>
      <h1 className="text-primary">Hello, Other Page!</h1>
      <ReactECharts option={option} />
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          // eslint-disable-next-line no-console
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Row>
              firstName
              <Field name="firstName" />
            </Row>
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
            <Row>
              lastName
              <Field name="lastName" />
            </Row>
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
            <Row>
              email
              <Field name="email" type="email" />
            </Row>
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
