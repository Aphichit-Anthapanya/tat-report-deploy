/* eslint-disable @next/next/no-img-element */

"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { EnvConfig, PageConfig } from "@/config";
import {
  useFetchProfileQuery,
  useRequestLogoutMutation,
} from "@/redux/services";

export default function Header() {
  const { push } = useRouter();
  const {
    data,
    isError: isFetchProfileError,
    refetch,
  } = useFetchProfileQuery();
  let pathName = usePathname();

  // ! don't change this "pathName" value before this line
  const isLoginPage = pathName === PageConfig.login;
  // ! it's ok after this

  // eslint-disable-next-line prefer-destructuring
  pathName = pathName.split("/")[1];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const headerTextData = [
    { path: "dashboard", name: "ข้อมูล Dashboard" },
    {
      path: "operation-follow",
      name: "ระบบข้อมูลแผนปฏิบัติการ และการติดตามประเมินผล",
    },
    { path: "procurement", name: "ระบบรายงานแผนปฏิบัติการจัดซื้อจัดจ้าง" },
  ];

  const [headerText, setHeaderText] = useState<string | undefined>("");

  const [logout, { isSuccess: isRequestLogoutSuccess, reset }] =
    useRequestLogoutMutation();

  const { dbUser, adUser } = data ?? {};

  let displayName = null;

  if (data && !isFetchProfileError) {
    displayName =
      adUser?.displayName ?? `${dbUser?.nameEn} ${dbUser?.surnameEn}`;
  }

  useEffect(() => {
    // eslint-disable-next-line prefer-const, eqeqeq
    let findHeaderText = headerTextData.find((f) => f.path == pathName);
    setHeaderText(findHeaderText?.name);

    if (!EnvConfig.isNoAuth && !isLoginPage) {
      // logout success case
      if (isRequestLogoutSuccess) {
        // refetch to remove existing data
        refetch();
        // reset to clear isSuccess: true state
        reset();
        push(PageConfig.login);
      }

      // fetch error case on other page
      if (isFetchProfileError) {
        setTimeout((refetch:any) => {
          push(PageConfig.login);
        },10000)
      }
    }
  }, [
    headerTextData,
    isFetchProfileError,
    isLoginPage,
    isRequestLogoutSuccess,
    pathName,
    push,
    refetch,
    reset,
  ]);

  return (
    <div className="d-flex top-header justify-content-between">
      <div className="d-flex">
        <div>
          <img
            className="image-title-logo float-lft"
            src="/assets/image/TTT_Logo.png"
            alt="logo_ttt"
            style={{ width: 92, height: "auto" }}
          />
        </div>
        <div className="header-text">
          <h3>Tourism Authority of Thailand: TAT</h3>
          <h4>{headerText}</h4>
        </div>
      </div>
      {!isLoginPage && (
        <div className="d-flex">
          <div className="user-profile-logo p-2 pt-3">
            <img
              style={{ width: 50, height: 48 }}
              src="/assets/image/vector/account_logo.png"
              alt="user_logo"
            />
          </div>
          <div className="user-name-text p-2 pt-3">
            <span>
              {displayName}{" "}
              <i className="bi bi-chevron-down user-name-texxt-chev" />
            </span>
          </div>
          <div className="p-2 pt-3 logo_help_wrapper">
            <img
              className="logo_help"
              style={{ width: 28, height: 24 }}
              src="/assets/image/vector/info_icon.png"
              alt="user_help"
            />
          </div>
          <div className="p-2 pt-3 logo_logout_wrapper">
            <img
              className="logo_logout float-rgt"
              style={{ width: 28, height: 24 }}
              src="/assets/image/vector/log_out.png"
              alt="logo_logout"
              onClick={() => logout()}
              aria-hidden="true"
            />
          </div>
        </div>
      )}
    </div>
  );
}
