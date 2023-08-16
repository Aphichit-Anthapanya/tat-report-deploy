import { addProjectObjective, removeProjectObjective, updateFormField, updateProjectObjective2, updateSection2 } from "../reducer";
import store from "@store";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { FormState } from "@/redux/OperationFollow/types";
import { sampleData } from "@/redux/SampleData/sample_data";

export const fetchSection2dataService = async (id: number, dispatchs: any) => {
  try {
    // Fetch data from the API
    // const response = await fetch('your-api-endpoint');
    // const data = await response.json();
    const data = sampleData.operationFollowForm.section2;

    console.log(data);

    // Dispatch the action to update Redux store
    // dispatchs(updateSection2(data));
  } catch (error) {
    // Handle any errors that occur during the API request
    console.error("Error fetching data:", error);
  }
};

const searchIdFromStateList = (id: number, data: any) => {
  const item = data.find((item: { id: number }) => item.id === id);
  return item ? item.id : null;
};

export const updateProjectObjective2Service = (dispatch:any, index:number, content: string) => {
  dispatch(updateProjectObjective2({
    content: content,
    index: index
  }))
};

export const addProjectObjectiveService = (dispatch:any) => {
  dispatch(addProjectObjective({}))
};

export const removeProjectObjectiveService = (dispatch:any) => {
  dispatch(removeProjectObjective({}))
};


