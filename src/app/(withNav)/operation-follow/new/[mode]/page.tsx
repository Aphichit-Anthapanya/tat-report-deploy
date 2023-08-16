"use client";
import Section1 from "@/components/OperationFollow/Section1";
import Section2 from "@/components/OperationFollow/Section2";
import Section3 from "@/components/OperationFollow/Section3";
import Section4 from "@/components/OperationFollow/Section4";
import Section5 from "@/components/OperationFollow/Section5";
import React from "react";
import { resetNew } from "@/redux/OperationFollow/service";
import { useEffect, useState } from "react";
import {
  fetchMasterDataSection1Service,
  setSection1ByName,
} from "@/redux/OperationFollow/Section1/service";
import { useDispatch } from "react-redux";
import { useParams, useRouter } from "next/navigation";
import { EnvConfig } from "@/config";

export default function Page() {
  const [sectionNumber, setSectionNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch();
  const params = useParams();
  const router = useRouter();

  const handleSection = (value: number, isBubble: boolean) => {
    if (isBubble) {
      if (sectionNumber > value) {
        //window.scrollTo({ top: 0, behavior: "smooth" });
        setSectionNumber(value);
      }
    } else {
      setSectionNumber(value);
    }
  };

  let mode = 0;
  let id = 0;

  useEffect(() => {
    resetNew(dispatch)
      mode = typeof params?.mode === "string" ? parseInt(params?.mode) : 0;
      if (mode == 1) {
        setSection1ByName(
          "organizationManageMent",
          "แผนบริหารจัดการองค์กร",
          mode,
          dispatch
        );
      } else if (mode == 2) {
        setSection1ByName(
          "organizationManageMent",
          "แผนสนับสนุนในประเทศ",
          mode,
          dispatch
        );
      } else if (mode == 3) {
        setSection1ByName(
          "organizationManageMent",
          "แผนสนับสนุนต่างประเทศ",
          mode,
          dispatch
        );
      }
      fetchMasterDataSection1Service(dispatch);

      // if (performance.navigation.type === 1) {
      //   router.push('/operation-follow')
      // }
      console.log(performance.navigation.type)
  }, []);

  const getBreadCrumbName = () => {
    mode = typeof params?.mode === "string" ? parseInt(params?.mode) : 0;
    if (mode == 1) {
      return "แผนบริหารจัดการองค์กร"
    } else if (mode == 2) {
      return "ข้อมูลโครงการด้านส่งเสริมตลาดในประเทศ"
    } else if (mode == 3) {
      return "ข้อมูลโครงการด้านส่งเสริมตลาดต่างประเทศ"
    } else {
      return ""
    }
  }

  return (
    <>
      <div className="d-flex flex-column" style={{ width: "100%" }}>
        <div className="breadcrumb-zone">
          นำเข้าข้อมูล {">"}{" "}
          <span className="bread-crumb-page-name">
            ข้อมูลโครงการด้านบริหารจัดการองค์กร{" "}
          </span>
        </div>
        <div className="flow-indicator-wrapper">
          <div className="flow-indicator d-flex justify-content-center">
            <div className="flow-section-zone">
              <div
                onClick={() => handleSection(1, true)}
                className={`circle active`}
              >
                1
              </div>
              <div className="section-zone-text">
                ข้อมูลโครงการงานระบบสารสนเทศองค์กร
              </div>
            </div>
            <div className="flow-line-zone">
              <hr />
            </div>
            <div className="flow-section-zone">
              <div
                onClick={() => handleSection(2, true)}
                className={`circle ${sectionNumber != 1 ? "active" : ""}`}
              >
                2
              </div>
              <div className="section-zone-text">
                งบประมาณโครงการและความสอดคล้องกับนโยบาย
              </div>
            </div>
            <div className="flow-line-zone">
              <hr />
            </div>
            <div className="flow-section-zone">
              <div
                onClick={() => handleSection(3, true)}
                className={`circle ${
                  sectionNumber != 2 && sectionNumber != 1 ? "active" : ""
                }`}
              >
                3
              </div>
              <div className="section-zone-text">รายละเอียดโครงการ</div>
            </div>
            <div className="flow-line-zone">
              <hr />
            </div>
            <div className="flow-section-zone">
              <div
                onClick={() => handleSection(4, true)}
                className={`circle ${
                  sectionNumber != 3 && sectionNumber != 2 && sectionNumber != 1
                    ? "active"
                    : ""
                }`}
              >
                4
              </div>
              <div className="section-zone-text">เวลาดำเนินโครงการ</div>
            </div>
          </div>
        </div>
        { !isLoading &&
          <div className={`form-wrapper-section`}>
          {sectionNumber === 1 && (
            <Section1 changeSectionHandle={handleSection} setIsLoading={setIsLoading} />
          )}
          {sectionNumber === 2 && (
            <Section2 changeSectionHandle={handleSection} setIsLoading={setIsLoading} />
          )}
          {sectionNumber === 3 && (
            <Section3 changeSectionHandle={handleSection} setIsLoading={setIsLoading} />
          )}
          {sectionNumber === 4 && (
            <Section4 changeSectionHandle={handleSection} setIsLoading={setIsLoading} />
          )}
          {sectionNumber === 5 && (
            <Section5 changeSectionHandle={handleSection} />
          )}
          </div>
        }
      </div>
    </>
  );
}
