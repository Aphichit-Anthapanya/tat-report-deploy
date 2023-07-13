import store from '../store';
import { resetForm, submitFormData,updateFormField } from './reducer';

export const saveCurrentForm = async (dispatchs:any,data:any) => {
  try {

    const tempData = { ...data };

    tempData.id = generateRandomNumber()
    
    const submitData = {
        data: tempData,
        dataTable: {
            id: tempData.id,
            idx: '',
            status: 'อยู่ระหว่างดำเนินการ',
            project_status: 'รายงานผล',
            project_year: data.section1.yearBudget,
            project_seq: generateRandomNumber(),
            project_name: data.section1.project_name,
            project_edit_status: 'แก้ไขส่วนกิจกรรมรายได้',
            project_edit_detail: '',
            department_name: 'ททท' 
        }
    }
    // Dispatch the action to update Redux store
    dispatchs(submitFormData(submitData));
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
    const data: any[] = store.getState().operationFollowForm.operationFollowList
    dispatchs(updateFormField(data.find((item: { id: number }) => item.id === id)))
}

export const resetNew = async(dispatchs:any) => {
  dispatchs(resetForm())
}