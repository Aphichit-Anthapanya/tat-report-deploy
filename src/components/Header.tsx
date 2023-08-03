/* eslint-disable @next/next/no-img-element */

"use client";

import { EnvConfig, PageConfig, TextConfig, WindowConfig } from "@/config";
import {
  useFetchProfileQuery,
  useRequestLogoutMutation,
} from "@/redux/services";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const { push } = useRouter();
  const { data, isError: isFetchProfileError } = useFetchProfileQuery(
    WindowConfig.isClient && localStorage.getItem(TextConfig.accessToken)
      ? undefined
      : skipToken
  );
  const [logout, { isSuccess: isRequestLogoutSuccess, reset }] =
    useRequestLogoutMutation();

  const { dbUser, adUser } = data ?? {};

  let displayName = null;

  if (data && !isFetchProfileError) {
    displayName =
      adUser?.displayName ?? `${dbUser?.nameEn} ${dbUser?.surnameEn}`;
  }

  useEffect(() => {
    if (
      !EnvConfig.isNoAuth &&
      // it already has own handler in login page
      pathname !== PageConfig.login
    ) {
      const isHasToken = localStorage.getItem(TextConfig.accessToken);
      const removeToken = () => {
        localStorage.removeItem(TextConfig.accessToken);
        window.location.reload();
      };

      // logout case
      if (isRequestLogoutSuccess && isHasToken) {
        reset();
        removeToken();
      } else if (
        // error case
        isFetchProfileError &&
        isHasToken
      ) {
        removeToken();
      } else if (
        // no token case (after 2 above case run removeToken())
        !isHasToken
      ) {
        push(PageConfig.login);
      }
    }
  }, [isFetchProfileError, isRequestLogoutSuccess, pathname, push, reset]);

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
          <h4>ระบบข้อมูลแผนปฏิบัติการและการติดตามประเมินผล</h4>
        </div>
      </div>
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
    </div>
  );
}
