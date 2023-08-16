import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormState } from "./types";
import { initialState } from "./data";

const procurementSlice = createSlice({
  name: "procurement",
  initialState,
  reducers: {
    updateSection(state, action: PayloadAction<any>) {
      state.section = action.payload;
    },
    updateSubSection3(state, action: PayloadAction<any>) {
      state.subSection3 = action.payload;
    },
    updateObj(
      state,
      action: PayloadAction<
        {
          key: keyof FormState["obj"];
          value: any;
        }[]
      >
    ) {
      for (const key in action.payload) {
        console.log(`${key}: ${action.payload[key]}`);
        (state.obj as any)[key] = action.payload[key];
      }
    },
    updateObjByKey(
      state,
      action: PayloadAction<{
        key: keyof FormState["obj"];
        value: any;
      }>
    ) {
      const { key, value } = action.payload;
      (state.obj as any)[key] = value;
    },
    updateProcMethodByKey(
      state,
      action: PayloadAction<{
        key: keyof FormState["obj"]["proc_method"];
        value: any;
      }>
    ) {
      const { key, value } = action.payload;
      state.obj.proc_method[key] = value;
    },
    updateProcMethodByGroup(state, action: PayloadAction<any>) {
      const { key, value } = action.payload;

      switch (key) {
        case "proc":
          console.log("proc", key, value);

          state.obj.proc_method.proc_announce = value;
          state.obj.proc_method.proc_e_bid = value;
          state.obj.proc_method.proc_e_mkt = value;
          state.obj.proc_method.proc_select = value;
          state.obj.proc_method.proc_specific = value;
          break;
        case "rental":
          state.obj.proc_method.rental_select = value;
          state.obj.proc_method.rental_specific = value;

          break;
        case "hire_cst":
          state.obj.proc_method.hire_cst_announce = value;
          state.obj.proc_method.hire_cst_select = value;
          state.obj.proc_method.hire_cst_specific = value;
          break;
        case "hire_design":
          state.obj.proc_method.hire_design_announce = value;
          state.obj.proc_method.hire_design_contest = value;
          state.obj.proc_method.hire_design_select = value;
          state.obj.proc_method.hire_design_specific = value;
          break;
        default:
          break;
      }
    },
    updateProcMethod(
      state,
      action: PayloadAction<
        {
          key: keyof FormState["obj"]["proc_method"];
          value: any;
        }[]
      >
    ) {
      for (const key in action.payload) {
        (state.obj.proc_method as any)[key] = action.payload[key];
      }
    },
    clear: (state) => {
      state.subSection3 = initialState.section;
      state.subSection3 = initialState.subSection3;
      state.obj = initialState.obj;
    },
  },
});

export const {
  updateSection,
  updateSubSection3,
  updateProcMethod,
  updateProcMethodByKey,
  updateProcMethodByGroup,
  updateObjByKey,
  updateObj,
  clear,
} = procurementSlice.actions;
export default procurementSlice.reducer;
