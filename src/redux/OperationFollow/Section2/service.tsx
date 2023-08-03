import { updateFormField, updateSection2 } from "../reducer";
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
    dispatchs(updateSection2(data));
  } catch (error) {
    // Handle any errors that occur during the API request
    console.error("Error fetching data:", error);
  }
};

const searchIdFromStateList = (id: number, data: any) => {
  const item = data.find((item: { id: number }) => item.id === id);
  return item ? item.id : null;
};

export const sumMonthTotal = (
  quarterSelect: number,
  dispatch: any,
  tempMask: any,
  setTempMask: (value: any) => void
) => {
  const formState = store.getState().operationFollowForm;

  if (quarterSelect == 1) {
    let m1 = (tempMask.quarter1.month1 + "").replace(",", "");
    let m2 = (tempMask.quarter1.month2 + "").replace(",", "");
    let m3 = (tempMask.quarter1.month3 + "").replace(",", "");

    if (m1 == "") m1 = "0";

    if (m2 == "") m2 = "0";

    if (m3 == "") m3 = "0";

    console.log(m1 + "" + m2 + "" + m3);
    if (m1 != "0" && m2 != "0" && m3 != "0") {
      const total: string = (
        parseInt(m1) +
        parseInt(m2) +
        parseInt(m3)
      ).toString();
      dispatch(
        updateFormField({
          ...formState,
          section2: {
            ...formState.section2,
            quarter: {
              ...formState.section2.quarter,
              quarter1: {
                ...formState.section2.quarter.quarter1,
                total: total,
                porportion: (
                  (parseFloat(total) / parseFloat(formState.section2.budget)) *
                  100
                )
                  .toFixed(2)
                  .toString(),
              },
            },
          },
        })
      );
    }
  }

  if (quarterSelect == 2) {
    let m1 = tempMask.quarter2.month1.replace(",", "");
    let m2 = tempMask.quarter2.month2.replace(",", "");
    let m3 = tempMask.quarter2.month3.replace(",", "");

    if (m1 == "") m1 = "0";

    if (m2 == "") m2 = "0";

    if (m3 == "") m3 = "0";

    if (m1 != "0" && m2 != "0" && m3 != "0") {
      const total: string = (
        parseInt(m1) +
        parseInt(m2) +
        parseInt(m3)
      ).toString();
      dispatch(
        updateFormField({
          ...formState,
          section2: {
            ...formState.section2,
            quarter: {
              ...formState.section2.quarter,
              quarter2: {
                ...formState.section2.quarter.quarter2,
                total: total,
                porportion: (
                  (parseFloat(total) / parseFloat(formState.section2.budget)) *
                  100
                )
                  .toFixed(2)
                  .toString(),
              },
            },
          },
        })
      );
    }
  }

  if (quarterSelect == 3) {
    let m1 = tempMask.quarter3.month1.replace(",", "");
    let m2 = tempMask.quarter3.month2.replace(",", "");
    let m3 = tempMask.quarter3.month3.replace(",", "");

    if (m1 == "") m1 = "0";

    if (m2 == "") m2 = "0";

    if (m3 == "") m3 = "0";

    if (m1 != "0" && m2 != "0" && m3 != "0") {
      const total: string = (
        parseInt(m1) +
        parseInt(m2) +
        parseInt(m3)
      ).toString();
      dispatch(
        updateFormField({
          ...formState,
          section2: {
            ...formState.section2,
            quarter: {
              ...formState.section2.quarter,
              quarter3: {
                ...formState.section2.quarter.quarter3,
                total: total,
                porportion: (
                  (parseFloat(total) / parseFloat(formState.section2.budget)) *
                  100
                )
                  .toFixed(2)
                  .toString(),
              },
            },
          },
        })
      );
    }
  }

  if (quarterSelect == 4) {
    let m1 = tempMask.quarter4.month1.replace(",", "");
    let m2 = tempMask.quarter4.month2.replace(",", "");
    let m3 = tempMask.quarter4.month3.replace(",", "");

    if (m1 == "") m1 = "0";

    if (m2 == "") m2 = "0";

    if (m3 == "") m3 = "0";

    if (m1 != "0" && m2 != "0" && m3 != "0") {
      const total: string = (
        parseInt(m1) +
        parseInt(m2) +
        parseInt(m3)
      ).toString();
      dispatch(
        updateFormField({
          ...formState,
          section2: {
            ...formState.section2,
            quarter: {
              ...formState.section2.quarter,
              quarter4: {
                ...formState.section2.quarter.quarter4,
                total: total,
                porportion: (
                  (parseFloat(total) / parseFloat(formState.section2.budget)) *
                  100
                )
                  .toFixed(2)
                  .toString(),
              },
            },
          },
        })
      );
    }
  }
};
