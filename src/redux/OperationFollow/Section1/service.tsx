import {
  updateSection1,
  setSection1Value,
  fetchMasterDataSection1,
} from "../reducer";
import { useGetMainPlanDataQuery, useGetStrategyGroupDataQuery } from "@/redux/services/master-data";

export const fetchSection1dataService = async (
  id: number,
  dispatchs: any,
  formState: any
) => {
  try {
    //const data = sampleData.operationFollowForm.section1
    const data = formState.section1;
    // Dispatch the action to update Redux store
    dispatchs(updateSection1(data));
  } catch (error) {
    // Handle any errors that occur during the API request
    console.error("Error fetching data:", error);
  }
};

export const setSection1ByName = async (
  name: string,
  value: string,
  mode: number,
  dispatchs: any
) => {
  try {
    dispatchs(
      setSection1Value({
        name: name,
        value: value,
        mode: mode
      })
    );
  } catch (error) {
    // Handle any errors that occur during the API request
    console.error("Error fetching data:", error);
  }
};

export const fetchMasterDataSection1Service = async (dispatchs: any) => {
  try {
    const data = [
      {
        id: 1,
        name: "ส่งเสริมการตลาด",
      },
      {
        id: 2,
        name: "สร้างสรรค์สินค้าและบริการ",
      },
      {
        id: 3,
        name: "สร้างและพัฒนาเครือข่าย",
      },
      {
        id: 4,
        name: "พัฒนาศักยภาพผู้ประกอบการและเครือข่าย",
      },
      {
        id: 5,
        name: "ส่งเสริมสังคมและชุมชน",
      },
      {
        id: 6,
        name: "เพิ่มประสิทธิภาพองค์กร",
      },
    ];

    dispatchs(
      fetchMasterDataSection1({
        project_type: data,
      })
    );
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getSrategicGroupService = (params: any) => {

  return useGetStrategyGroupDataQuery(params);

}

export const getMainPlanService = (params: any) => {
  return useGetMainPlanDataQuery(params);
}
