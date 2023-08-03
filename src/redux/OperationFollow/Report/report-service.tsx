import { updateFormField } from "../reducer";
import { FormState } from "../types";

export const removeTableOperationAreaByIdService = async (
  dispatchs: any,
  id: string,
  state: FormState
) => {
  let items = state.operationReport.section3.list_operation_area;
  let filteredItems = items.filter(
    (item: { indx: string }) => item.indx !== id
  );
  dispatchs(
    updateFormField({
      ...state,
      operationReport: {
        ...state.operationReport,
        section3: {
          ...state.operationReport.section3,
          list_operation_area: filteredItems,
        },
      },
    })
  );
};

export const removeTableProjectTargetByIdService = async (
  dispatchs: any,
  id: string,
  state: FormState
) => {
  let items = state.operationReport.section3.project_target;
  let filteredItems = items.filter(
    (item: { indx: string }) => item.indx !== id
  );
  dispatchs(
    updateFormField({
      ...state,
      operationReport: {
        ...state.operationReport,
        section3: {
          ...state.operationReport.section3,
          project_target: filteredItems,
        },
      },
    })
  );
};
