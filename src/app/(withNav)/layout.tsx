/* eslint-disable react/jsx-no-constructed-context-values */

"use client";

import { ReactNode, useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Siderbar";
import { MyContext } from "../MyContext";

export default function WithNavLayout({ children }: { children: ReactNode }) {
  const [isClicked, setIsClicked] = useState(false);
  const [navId, setNavId] = useState(0);

  const handleButtonClick = () => {
    setIsClicked(!isClicked);
  };

  const changeNavHandle = (value: number) => {
    setNavId(value);
  };

  // testpush

  return (
    <>
      <Header />
      <div
        className={`d-flex content-body-wrapper${
          isClicked ? " small-nav" : ""
        }`}
        style={{ marginTop: "20px" }}
      >
        <MyContext.Provider value={{ navId, changeNavHandle }}>
          {children}
        </MyContext.Provider>
      </div>
      <Sidebar onButtonClick={handleButtonClick} navId={navId} />
    </>
  );
}
