import { FormState } from "@/redux/OperationFollow/types";
import react, { useEffect, useState } from "react";
import { initialState } from "../initial_state";
import CommentModal from "../Modal/CommentModal";
import { checkUserRoleService } from "@/redux/OperationFollow/service";
import OperationAreaSelect from "../../Modal/OperationAreaSelectModal";

interface TableOperationAreaProps {
  formData: any;
  setFormData: (val:string) => void
  isEditStatus: boolean;
  handleOpenModal: (val:string,section: number) => void;
}

export function EditTableOperationArea(props: TableOperationAreaProps) {
  const formData = props.formData
  const setFormData = props.setFormData
  const [isEditStatus, setIsEditStatus] = useState(false);
  const [addField, setAddField] = useState({
    indx: "",
    country_area: "",
    province: "",
  });
  const [isOpenCommentModal, setOpenCommentModal] = useState(false);
  const [commentName,setCommentName] = useState('');
  const [commentSection, setCommentSection] = useState(0);
  const [formDataTable, setFormDataTable] = useState([])
  const [isOpenOperationAreaSelect, setOpenOperationAreaSelect] = useState(false)

  const handleRemoveRow = (id: string) => {
    let data = formData.section3.list_operation_area;
    data = data.filter((item: { indx: string }) => item.indx !== id);

    setFormData({
      ...formData,
      section3: {
        ...formData.section3,
        list_operation_area: data,
      },
    });
  };

  const role = checkUserRoleService();

  const handleAddFormData = () => {
    setOpenOperationAreaSelect(true)
  };

  const handleCloseOperationAreaSelect = () => {
    setOpenOperationAreaSelect(false)
  }

  const handleConfirmOperationArea = (data: any) => {
    let dataList = []

    for(let i = 0; i < data.length; i++){
      dataList.push({
        indx: data[i].id,
        country_area: data[i].countryarea,
        province: data[i].province
      })
    }

    setFormData({
      ...formData,
      section3: {
        ...formData.section3,
        list_operation_area: dataList
      }     
    })

  }

  const handleOpenModal = () => {
    props.handleOpenModal('list_operation_area',3)
  }

  const handleCloseComment = () => {
    setOpenCommentModal(false)
  }


  useEffect(() => {
    setIsEditStatus(props.isEditStatus);
  }, [props.isEditStatus]);

  useEffect(() => {
    setFormDataTable(formData.section3.list_operation_area)
  })

  return (
    <>
      <OperationAreaSelect setShow={isOpenOperationAreaSelect} handleClose={handleCloseOperationAreaSelect} handleConfirmOperationArea={handleConfirmOperationArea} />
      <CommentModal setShow={isOpenCommentModal} formData={formData} setFormData={setFormData} closeModal={handleCloseComment} commentName={commentName} commentSection={commentSection}/>
      <div className="table-summary-header">
        <span>พื้นที่ดำเนินโครงการ
          {role == 'admin' && <i onClick={() => handleOpenModal()} className="bi bi-pencil-fill comment-icon"></i>}
          {role == 'user' && <i onClick={() => handleOpenModal()} className={`bi bi-exclamation-circle-fill commentex-icon ${formData.section3.comment.list_operation_area == '' ? 'hide' : ''}`} ></i>}
        </span>
      </div>
      <div className="table-summary-content">
        <table className="table">
          <thead>
            <tr>
              <th style={{ width: "10%" }} scope="col">
                ลำดับที่
              </th>
              <th style={{ width: "10%" }} scope="col"></th>
              <th scope="col">พื้นที่/ประเทศ</th>
              <th scope="col">จังหวัด/เมือง</th>
            </tr>
          </thead>
          <tbody>
              {formDataTable.map((data:any, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <i
                      onClick={() => handleRemoveRow(data.indx + "")}
                      style={{ color: "red", cursor: "pointer" }}
                      className="bi bi-trash-fill"
                    ></i>
                  </td>
                  <td>
                    {data.country_area}
                  </td>
                  <td>
                    {data.province}
                  </td>
                </tr>
              ))}
              <tr>
                <td
                  style={{ textAlign: "center", fontWeight: "bold" }}
                  colSpan={4}
                >
                  { isEditStatus &&
                    <>
                      <button
                        onClick={handleAddFormData}
                        className="btn btn-primary"
                        type="submit"
                      >
                        เพิ่ม
                      </button>
                    </>  
                  }
                </td>
              </tr>
            </tbody>
        </table>
      </div>
    </>
  );
}
