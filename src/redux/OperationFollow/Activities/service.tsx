import { updateActivity } from "../reducer";
import { sampleData } from "../../SampleData/sample_data";

export const fetchActivitiesdataService = async (
  id: number,
  dispatchs: any
) => {
  try {
    // Fetch data from the API
    // const response = await fetch('your-api-endpoint');
    // const data = await response.json();
    const data = sampleData.operationFollowForm.activitiesList;

    // Dispatch the action to update Redux store
    dispatchs(updateActivity(data));
  } catch (error) {
    // Handle any errors that occur during the API request
    console.error("Error fetching data:", error);
  }
};

const searchIdFromStateList = (id: number, data: any) => {
  const item = data.find((item: { id: number }) => item.id === id);
  return item ? item.id : null;
};
