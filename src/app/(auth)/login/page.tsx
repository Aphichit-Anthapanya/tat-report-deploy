"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button, Card } from "react-bootstrap";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { IUserLogin } from "@/interfaces";
import { useRequestLoginMutation } from "@/redux/services";
import { CustomLoader } from "@/components";
import { TextField } from "@/components/Forms";
import { EnvConfig, PageConfig, TextConfig } from "@/config";
import styles from "./styles.module.scss";

export default function Page() {
  const { push } = useRouter();
  const [requestLogin, { data, isLoading, error, isSuccess, reset }] =
    useRequestLoginMutation();

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .max(128)
      .required(`กรุณากรอก ${TextConfig.loginUserLabel}`),
    password: Yup.string()
      .max(128)
      .required(`กรุณากรอก ${TextConfig.loginPassLabel}`),
  });

  const initialValues: IUserLogin = {
    username: "",
    password: "",
  };

  useEffect(() => {
    if (isSuccess && data?.accessToken) {
      localStorage.setItem(TextConfig.accessToken, data.accessToken);
      window.location.reload();
    } else if (
      EnvConfig.isNoAuth ||
      localStorage.getItem(TextConfig.accessToken)
    ) {
      push(PageConfig.home);
    }
  }, [data, isSuccess, push]);

  if (isLoading) {
    return <CustomLoader />;
  }

  return (
    <div>
      <Card className="d-flex justify-content-center" style={{ maxWidth: 560 }}>
        <div className="px-5 pb-3">
          <div className="d-flex justify-content-center">
            <Image
              src="/assets/image/TTT_Logo_Login.png"
              alt="TAT logo"
              width={140}
              height={140}
              style={{ objectFit: "contain" }}
            />
          </div>
          <h2 className="text-center">{TextConfig.loginHeading}</h2>
          <div
            className="text-center pt-2 px-lg-5 mx-lg-3"
            style={{ color: "#666687" }}
          >
            {TextConfig.loginDesc}
          </div>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            // eslint-disable-next-line no-console
            if (EnvConfig.isDevEnv) console.log(`values`, values);
            setSubmitting(false);

            requestLogin(values);
          }}
        >
          {({ values }) => (
            <Form onKeyDown={reset}>
              <div className="p-5">
                <TextField
                  formName="username"
                  formLabel={TextConfig.loginUserLabel}
                  formValue={values.username}
                />
                <TextField
                  formName="password"
                  formLabel={TextConfig.loginPassLabel}
                  formType="password"
                  formValue={values.password}
                />
              </div>
              {error &&
                "data" in error &&
                // @ts-ignore
                "message" in error.data && (
                  <div className="text-danger text-center pb-3">
                    {/* @ts-ignore */}
                    {error.data.message}
                  </div>
                )}
              <Button type="submit" className={`${styles.btn} w-100 py-3`}>
                {TextConfig.loginBtn}
              </Button>
            </Form>
          )}
        </Formik>
      </Card>
      <div className="text-danger text-center py-3">
        {TextConfig.loginWarning}
      </div>
    </div>
  );
}
