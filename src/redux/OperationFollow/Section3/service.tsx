import {
  updateSection3,
  removeTableOperationAreaById,
  removeTableProjectIndicatorById,
  removeTableProjectGoalById,
  removeTableProjectIndicatorActivityById,
  removeTableOperationAreaActivityById,
} from "../reducer";
import { sampleData } from "../../SampleData/sample_data";

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
