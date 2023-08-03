import { appendOperationFollowTable, editTableById } from '../OperationFollowTable/reducer';
import store from '../store';
import { resetForm, submitFormData,submitReportData,updateDataList,updateFormField } from './reducer';
import { FormState } from './types';

export const saveCurrentForm = async (dispatchs:any,data:any) => {
  try {
    let id = generateRandomNumber()
    let tableData = store.getState().operationFollowTable.data
    let formInfo = {
      id: id,
      section1: data.section1,
      section2: data.section2,
      section3: data.section3,
      section4: data.section4,
      section5: data.section5,
      activitiesList: data.activitiesList,
      status: 'รอดำเนินการ',
      project_status: 'รอดำเนินการ',
      project_edit_status: 'รอดำเนินการ',
      project_edit_detail: 'รอดำเนินการ',
    }

    dispatchs(appendOperationFollowTable(formInfo))

  } catch (error) {
    // Handle any errors that occur during the API request
    console.error('Error fetching data:', error);
  }

};

function generateRandomNumber() {
    const min = 10;
    const max = 99;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

export const searchIdInJsonArray = (id: number, data: any): number | null => {
    const item = data.find((item: { id: number }) => item.id === id);
    return item ? item.id : null;
};

export const updateFormById = async(id:number, dispatchs:any) =>{
    let data: any[] = store.getState().operationFollowForm.dataList
    const tableList: any[] = store.getState().operationFollowForm.operationFollowList
    let _data: FormState = data.find((item: { id: number }) => item.id === id)
    _data = {
      ..._data,
      operationFollowList: tableList
    }
    dispatchs(updateFormField(_data))
}

export const resetNew = async(dispatchs:any) => {
  dispatchs(resetForm())
}

export const submitReportDataService = async(dispatch:any, id: number, newData: FormData) => {
  const data: any[] = store.getState().operationFollowForm.dataList
}

export const editSubmit= async(id:number, dispatchs:any, formData: any) =>{

    dispatchs(editTableById({
      id: id,
      data: formData,
    }));
}
