import { createAction, PayloadAction } from "@reduxjs/toolkit";
import {
  Activities,
  ActiVityForm,
  FormState,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
} from "./types";

export const updateFormField = createAction<FormState>(
  "operationFollowForm/updateFormField"
);
export const resetForm = createAction("operationFollowForm/resetForm");
export const appendActivity = createAction<ActiVityForm>(
  "operationFollowForm/appendActivity"
);
export const updateSection1 = createAction<Section1>(
  "operationFollowForm/updateSection1"
);
export const updateSection2 = createAction<Section2>(
  "operationFollowForm/updateSection2"
);
export const updateSection3 = createAction<Section3>(
  "operationFollowForm/updateSection3"
);
export const updateSection4 = createAction<Section4>(
  "operationFollowForm/updateSection4"
);
export const updateSection5 = createAction<Section5>(
  "operationFollowForm/updateSection5"
);
export const appendDataToFieldSection3 = createAction<any>(
  "operationFollowForm/appendDataToFieldSection3"
);
export const updateActivity = createAction<any>(
  "operationFollowForm/updateActivity"
);
export const updateOperationFollowList = createAction<any>(
  "operationFollowForm/updateOperationFollowList"
);
export const setSection1Value = createAction<any>(
  "operationFollowForm/setSection1Value"
);
