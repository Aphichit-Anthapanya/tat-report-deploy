"use client";

import { useEffect, useState } from "react";
import $ from "jquery";
import styles from "../styles/sidebar.module.scss";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

interface SidebarProps {
  onButtonClick: () => void;
  navId: number;
}

export default function Sidebar(props: SidebarProps) {
  const [isSmallSideNav, setIsSmallSideNav] = useState(false);
  const router = useRouter();

  const toggleSideNav = () => {
    setIsSmallSideNav(!isSmallSideNav);
    handleClick();
  };

  const handleClick = () => {
    // Perform any necessary actions here before calling the callback function
    props.onButtonClick();
  };

  const navigationLink = (linkId: number) => {
    if (linkId == 1) {
      router.push("/dashboard");
    } else if (linkId == 2) {
      router.push("/operation-follow");
    } else if (linkId == 3) {
      router.push("/procurement");
    }
  };

  const path = usePathname();

  if (path == "/") {
    return <></>;
  }

  return (
    <>
      <div
        id="sideNav"
        className={`side-navigation ${
          isSmallSideNav
            ? "d-flex flex-column side-navigation justify-content-between small-side"
            : "d-flex flex-column side-navigation justify-content-between"
        }`}
      >
        <div className="">
          <div className="p-2 nav-header">
            <img src="/assets/image/vector/icon_ttt.svg" alt="icon_ttt" />
            <span>TAT</span>
            <div id="iconSmallNav" className="icon-small-nav-top">
              <img
                className={`${isSmallSideNav ? "" : "hide"}`}
                src="/assets/image/vector/icon_ttt.svg"
                alt="icon_ttt"
              />
            </div>
          </div>
          <div
            onClick={() => navigationLink(1)}
            className={`side-nav ${
              props.navId == 1 ? "active" : ""
            } d-flex p-2 justify-content-between cursor-pointer`}
          >
            <div className="d-flex side-nav-text-wrapper">
              <i
                style={{ marginRight: "10px" }}
                className="bi bi-house-door-fill"
              ></i>
              <div id="normalNavText">
                <span>ข้อมูล Dashboard {isSmallSideNav}</span>
              </div>
            </div>
            <div className="d-flex side-chev-wrapper">
              <i
                id="chevronNav"
                className={`bi bi-chevron-right ${
                  isSmallSideNav ? "hide" : ""
                }`}
              ></i>
              <i
                id="iconSmallNav"
                className={`bi bi-house-door-fill iconSmallNav ${
                  isSmallSideNav ? "" : "hide"
                }`}
              ></i>
            </div>
          </div>
          <div
            onClick={() => navigationLink(2)}
            className={`side-nav ${
              props.navId == 2 ? "active" : ""
            } d-flex p-2 justify-content-between cursor-pointer`}
          >
            <div className="d-flex side-nav-text-wrapper">
              <i
                style={{ marginRight: "10px" }}
                className="bi bi-file-text-fill"
              ></i>
              <div id="normalNavText">
                <span>ระบบข้อมูลแผนปฏิบัติการ และการติดตามประเมินผล</span>
              </div>
            </div>
            <div className="d-flex side-chev-wrapper">
              <i
                id="chevronNav"
                className={`bi bi-chevron-right ${
                  isSmallSideNav ? "hide" : ""
                }`}
              ></i>
              <i
                id="iconSmallNav"
                className={`bi bi-file-text-fill iconSmallNav ${
                  isSmallSideNav ? "" : "hide"
                }`}
              ></i>
            </div>
          </div>
          <div
            onClick={() => navigationLink(3)}
            className={`side-nav ${
              props.navId == 3 ? "active" : ""
            } d-flex p-2 justify-content-between cursor-pointer`}
          >
            <div className="d-flex pr-2 side-nav-text-wrapper">
              <i
                style={{ marginRight: "10px" }}
                className="bi bi-person-vcard-fill"
              ></i>
              <div id="normalNavText">
                <span>ระบบรายงานแผนปฏิบัติการจัดซื้อจัดจ้าง</span>
              </div>
            </div>
            <div className="d-flex side-chev-wrapper">
              <i
                id="chevronNav"
                className={`bi bi-chevron-right ${
                  isSmallSideNav ? "hide" : ""
                }`}
              ></i>
              <i
                id="iconSmallNav"
                className={`bi bi-person-vcard-fill iconSmallNav ${
                  isSmallSideNav ? "" : "hide"
                }`}
              ></i>
            </div>
          </div>
          <div className="side-nav d-flex p-2 justify-content-between cursor-pointer">
            <div className="d-flex pr-2 side-nav-text-wrapper">
              <i
                style={{ marginRight: "10px" }}
                className="bi bi-calendar-fill"
              ></i>
              <div id="normalNavText">
                <span>รายงานแผนปฎิบัติการและการดำเนินงาน</span>
              </div>
            </div>
            <div className="d-flex side-chev-wrapper">
              <i
                id="chevronNav"
                className={`bi bi-chevron-right ${
                  isSmallSideNav ? "hide" : ""
                }`}
              ></i>
              <i
                id="iconSmallNav"
                className={`bi bi-calendar-fill iconSmallNav ${
                  isSmallSideNav ? "" : "hide"
                }`}
              ></i>
            </div>
          </div>
          <div className="side-nav d-flex p-2 justify-content-between cursor-pointer">
            <div className="d-flex side-nav-text-wrapper">
              <i
                style={{ marginRight: "10px" }}
                className="bi bi-calendar2-check-fill"
              ></i>
              <div id="normalNavText">
                <span>รายงานจัดซื้อจัดจ้าง</span>
              </div>
            </div>
            <div className="d-flex side-chev-wrapper">
              <i
                id="chevronNav"
                className={`bi bi-chevron-right ${
                  isSmallSideNav ? "hide" : ""
                }`}
              ></i>
              <i
                id="iconSmallNav"
                className={`bi-calendar2-check-fill ${
                  isSmallSideNav ? "" : "hide"
                }`}
              ></i>
            </div>
          </div>
          <div className="side-nav d-flex p-2 justify-content-between cursor-pointer">
            <div className="d-flex side-nav-text-wrapper">
              <i
                style={{ marginRight: "10px" }}
                className="bi bi-shield-fill-check"
              ></i>
              <div id="normalNavText">
                <span>รายงานแผนปฎิบัติการจากระบบเดิม (ปี 2554-2560)</span>
              </div>
            </div>
            <div className="d-flex side-chev-wrapper">
              <i
                id="chevronNav"
                className={`bi bi-chevron-right ${
                  isSmallSideNav ? "hide" : ""
                }`}
              ></i>
              <i
                id="iconSmallNav"
                className={`bi bi-shield-fill-check iconSmallNav ${
                  isSmallSideNav ? "" : "hide"
                }`}
              ></i>
            </div>
          </div>
          <div className="side-nav d-flex p-2 justify-content-between cursor-pointer">
            <div className="d-flex side-nav-text-wrapper">
              <i
                style={{ marginRight: "10px" }}
                className="bi bi-bell-fill"
              ></i>
              <div id="normalNavText">
                <span>การแจ้งเตือน</span>
              </div>
            </div>
            <div className="d-flex side-chev-wrapper">
              <i
                id="chevronNav"
                className={`bi bi-chevron-right ${
                  isSmallSideNav ? "hide" : ""
                }`}
              ></i>
              <i
                id="iconSmallNav"
                className={`bi bi-bell-fill iconSmallNav ${
                  isSmallSideNav ? "" : "hide"
                }`}
              ></i>
            </div>
          </div>
        </div>
        <div className="">
          <div className="side-nav d-flex p-2 justify-content-between cursor-pointer">
            <div className="d-flex side-nav-text-wrapper">
              <i
                style={{ marginRight: "10px" }}
                className="bi bi-person-fill"
              ></i>
              <div id="normalNavText">
                <span>โปรไฟล์</span>
              </div>
            </div>
            <div className="d-flex side-chev-wrapper">
              <i
                id="chevronNav"
                className={`bi bi-chevron-right ${
                  isSmallSideNav ? "hide" : ""
                }`}
              ></i>
              <i
                id="iconSmallNav"
                className={`bi bi-person-fill iconSmallNav ${
                  isSmallSideNav ? "" : "hide"
                }`}
              ></i>
            </div>
          </div>
        </div>
        <div
          id="closeSidebar"
          onClick={toggleSideNav}
          className="close-sidebar-but-wrapper"
        >
          <i
            id="navBarChevUp"
            className={`bi bi-chevron-up close-sidebar-but ${
              isSmallSideNav ? "" : "hide"
            }`}
          ></i>
          <i
            id="navBarChevDown"
            className={`bi bi-chevron-down close-sidebar-but ${
              isSmallSideNav ? "hide" : ""
            }`}
          ></i>
        </div>
      </div>
    </>
  );
}
