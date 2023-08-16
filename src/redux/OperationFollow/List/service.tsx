import { removeTableById } from "@/redux/OperationFollowTable/reducer-follow-table";
import { sampleData } from "../../SampleData/sample_data";
import { removeById, updateOperationFollowList } from "../reducer";

export const fetchOperationSupportList = async (dispatchs: any) => {
  try {
    // Fetch data from the API
    // const response = await fetch('your-api-endpoint');
    // const data = await response.json();
    const data = sampleData.operationFollowForm.tableDisplay;

    // Dispatch the action to update Redux store
    dispatchs(updateOperationFollowList(data));
  } catch (error) {
    // Handle any errors that occur during the API request
    console.error("Error fetching data:", error);
  }
};

export const submitOperationForm = async (dispatch: any) => {
  try {
  } catch (error) {
    // Handle any errors that occur during the API request
    console.error("Error fetching data:", error);
  }
};

export const deleteOperationList = async (id: string, dispatch: any) => {
  // try {
  //   dispatch(
  //     removeTableById({
  //       id: id,
  //     })
  //   );
  // } catch (error) {
  //   // Handle any errors that occur during the API request
  //   console.error("Error fetching data:", error);
  // }
};
