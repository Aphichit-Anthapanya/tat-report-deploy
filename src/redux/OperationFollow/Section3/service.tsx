
import {
  updateSection3,
  removeTableOperationAreaById,
  removeTableProjectIndicatorById,
  removeTableProjectGoalById,
  removeTableProjectIndicatorActivityById,
  removeTableOperationAreaActivityById,
} from "../reducer";
import { sampleData } from "../../SampleData/sample_data";
import { useMainOutcomesQuery, useOperationAreaQuery, useProjectTargetQuery } from "@/redux/services/master-data";

export const fetchSection3dataService = async (id: number, dispatchs: any) => {
  try {
    // Fetch data from the API
    // const response = await fetch('your-api-endpoint');
    // const data = await response.json();
    const data = sampleData.operationFollowForm.section3;

    // Dispatch the action to update Redux store
    //dispatchs(updateSection3(data));
  } catch (error) {
    // Handle any errors that occur during the API request
    console.error("Error fetching data:", error);
  }
};

const searchIdFromStateList = (id: number, data: any) => {
  const item = data.find((item: { id: number }) => item.id === id);
  return item ? item.id : null;
};

export const removeTableOperationAreaByIdService = (
  id: string,
  dispatch: any
) => {
  try {
    // Dispatch the action to update Redux store
    dispatch(
      removeTableOperationAreaById({
        id: id,
      })
    );
  } catch (error) {
    // Handle any errors that occur during the API request
    console.error("Error fetching data:", error);
  }
};

export const removeTableProjectIndicatorByIdService = (
  id: string,
  dispatch: any
) => {
  try {
    // Dispatch the action to update Redux store
    dispatch(
      removeTableProjectIndicatorById({
        id: id,
      })
    );
  } catch (error) {
    // Handle any errors that occur during the API request
    console.error("Error fetching data:", error);
  }
};

export const removeTableProjectGoalByIdService = (
  id: string,
  dispatch: any
) => {
  try {
    // Dispatch the action to update Redux store
    dispatch(
      removeTableProjectGoalById({
        id: id,
      })
    );
  } catch (error) {
    // Handle any errors that occur during the API request
    console.error("Error fetching data:", error);
  }
};

export const removeTableProjectIndicatorActivityByIdService = (
  id: string,
  dispatch: any
) => {
  try {
    // Dispatch the action to update Redux store
    dispatch(
      removeTableProjectIndicatorActivityById({
        id: id,
      })
    );
  } catch (error) {
    // Handle any errors that occur during the API request
    console.error("Error fetching data:", error);
  }
};

export const removeTableOperationAreaActivityByIdService = (
  id: string,
  dispatch: any
) => {
  try {
    // Dispatch the action to update Redux store
    dispatch(
      removeTableOperationAreaActivityById({
        id: id,
      })
    );
  } catch (error) {
    // Handle any errors that occur during the API request
    console.error("Error fetching data:", error);
  }
};

export const projectTargetService = () => {
  return useProjectTargetQuery({})
};

export const operationAreaService = (mode: string) => {
  const { data, error, isLoading } = useOperationAreaQuery({});
  // if(mode === "1"){
  //   data.filter((item: any) => item.someProperty === 'someValue');
  // }else if(mode === '2'){
  //   data.filter((item: any) => item.someProperty === 'someValue');
  // }else {
  //   data.filter((item: any) => item.someProperty === 'someValue');
  // }

  return useOperationAreaQuery({})
}

export const mainOutcomeService = () => {
  return useMainOutcomesQuery({})
}

export const operationAreaFilterService = (queryField: any, areaData: any) => {
  const filteredList = areaData?.filter(
    (items: any) =>
    items.oparationAreaName01Th.includes(queryField.country) &&
    items.oparationAreaName02Th.includes(queryField.province) &&
    queryField.projectType == items.oparationAreaType
  )

  let itemData = []

  for(let i = 0; i < filteredList.length; i++){
    itemData.push({
      id: filteredList[i].oparationAreaId,
      countryarea: filteredList[i].oparationAreaName01Th,
      province: filteredList[i].oparationAreaName02Th,
      isSelect: false
    })
  }

  return itemData
}

export const projectTargetFilterService = (queryField: any, data: any) => {
  const filteredList = data?.filter(
    (items: any) =>
    items.targetGroupNameTh.includes(queryField.targetName)
  )

  let itemData = []

  for(let i = 0; i < filteredList.length; i++){
    itemData.push({
      id: filteredList[i].targetGroupId,
      targetName: filteredList[i].targetGroupNameTh,
      isSelect: false
    })
  }

  return itemData
}

export const projectIndicatorFilterService = (queryField: any, data: any) => {
  const filteredList = data?.filter(
    (items: any) =>
    items.outcomeNameTh.includes(queryField.indicatorName)
  )

  let itemData = []

  for(let i = 0; i < filteredList.length; i++){
    //console.log(filteredList[i])
    itemData.push({
      id: filteredList[i].mainOutcomeId,
      indicatorName: filteredList[i].outcomeNameTh,
      calType: '%',
      isSelect: false
    })
  }

  return itemData
}
