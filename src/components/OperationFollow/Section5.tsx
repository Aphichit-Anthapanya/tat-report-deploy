"use client";

import { useParams, useRouter } from "next/navigation";
import "./operation-follow.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { updateFormField, resetForm } from "@/redux/OperationFollow/reducer";
import { useEffect } from "react";
import { fetchSection5dataService } from "@/redux/OperationFollow/Section5/service";

interface Section5Props {
  changeSectionHandle: (value: number, isBubble: boolean) => void;
}

export default function Section5(props: Section5Props) {
  const router = useRouter();
  const formState = useSelector(
    (state: RootState) => state.operationFollowForm
  );
  const dispatch = useDispatch();
  let id = 0;
  const params = useParams();

  const handleChangeField = (event: any) => {
    const { name, value } = event.target;

    const updateChecked = {
      ...formState,
      [name]: value,
    };

    dispatch(
      updateFormField({
        ...formState,
        section5: {
          ...formState.section5,
          [name]: value,
        },
      })
    );

    // setFormdata(updateChecked);

    // console.log(updateChecked)
  };

  const handleSection = (value: number) => {
    handleUpdateForm();
    props.changeSectionHandle(value, false);
  };

  const handleUpdateForm = () => {
    dispatch(
      updateFormField({
        ...formState,
        section5: {
          return_roi: formState.section5.return_roi,
          project_type: formState.section5.project_type,
          goverment_bond: formState.section5.goverment_bond,
          internal_government_bond: formState.section5.internal_government_bond,
          sepa_protocal: formState.section5.sepa_protocal,
          working_system_suite: formState.section5.working_system_suite,
          govenment_image: formState.section5.govenment_image,
          support_information: formState.section5.support_information,
          other: formState.section5.other,
          project_risk: formState.section5.project_risk,
        },
      })
    );
  };

  const handleRouteActivities = () => {
    id = typeof params?.id === "string" ? parseInt(params?.id) : 0;
    if (id != 0) {
      router.push("/operation-follow/add-activities/" + id);
    } else {
      router.push("/operation-follow/add-activities/0");
    }
  };

  return (
    <>
      <div className="d-flex form-group">
        <div className="form-field-label">
          <label>
            ประเภทโครงการ<span style={{ color: "red" }}> *</span>
          </label>
        </div>
        <div className="d-flex flex-column form-field-fieldzone">
          <div className="">
            <select
              defaultValue={"DEFAULT"}
              onChange={handleChangeField}
              name="project_type"
              value={formState.section5.project_type}
              className="form-select"
              aria-label="Default select example"
            >
              <option value="DEFAULT">---- เลือก ----</option>
              {formState.masterData.section1.project_type.map((item) => (
                <option value={item.id}>{item.name}</option>
              ))}
            </select>
          </div>
          <div>
            {/* { validationState[7].isValid == false && 
                        <div className="form-field-fieldzone">
                            <span style={{color:'red'}}>โปรดกรอกข้อมูล{validationState[7].alias}</span>
                        </div>
                        } */}
          </div>
        </div>
      </div>
      <div className="d-flex form-group">
        <div className="form-field-label">
          <label>
            ข้อมูลเชิงคุณภาพ<span style={{ color: "red" }}> *</span>
          </label>
        </div>
        <div className="d-flex flex-column form-field-fieldzone">
          <div className="">
            <div className="table-summary-wrapper table-policy">
              <div className="table-summary-header">
                <span>ข้อมูลเชิงคุณภาพ </span>
              </div>
              <div className="table-summary-content">
                <table className="table policy-table">
                  <tbody>
                    <tr>
                      <td style={{ width: "50%" }}>
                        <label
                          style={{ marginLeft: "10px" }}
                          className="form-check-label"
                        >
                          เพิ่มระดับความผูกพันของพนักงานในองค์กร:
                        </label>
                      </td>
                      <td style={{ width: "50%" }}>
                        <input
                          onChange={handleChangeField}
                          name="goverment_bond"
                          value={formState.section5.goverment_bond}
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder=""
                        />
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "50%" }}>
                        <label
                          style={{ marginLeft: "10px" }}
                          className="form-check-label"
                        >
                          เพิ่มศักยภาพในการทำงานของพนักงานภายในองค์กร:
                        </label>
                      </td>
                      <td style={{ width: "50%" }}>
                        <input
                          onChange={handleChangeField}
                          name="internal_government_bond"
                          value={formState.section5.internal_government_bond}
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder=""
                        />
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "50%" }}>
                        <label
                          style={{ marginLeft: "10px" }}
                          className="form-check-label"
                        >
                          ช่วยให้การทำงานขององค์กรเป็นระบบ เช่น SEPA:
                        </label>
                      </td>
                      <td style={{ width: "50%" }}>
                        <input
                          onChange={handleChangeField}
                          name="sepa_protocal"
                          value={formState.section5.sepa_protocal}
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder=""
                        />
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "50%" }}>
                        <label
                          style={{ marginLeft: "10px" }}
                          className="form-check-label"
                        >
                          สอดคล้องกับกฎระเบียบ ข้อบังคับในการปฏิบัติงาน:
                        </label>
                      </td>
                      <td style={{ width: "50%" }}>
                        <input
                          onChange={handleChangeField}
                          name="working_system_suite"
                          value={formState.section5.working_system_suite}
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder=""
                        />
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "50%" }}>
                        <label
                          style={{ marginLeft: "10px" }}
                          className="form-check-label"
                        >
                          ส่งเสริมภาพลักษณ์ที่ดีให้กับองค์กร:
                        </label>
                      </td>
                      <td style={{ width: "50%" }}>
                        <input
                          onChange={handleChangeField}
                          name="govenment_image"
                          value={formState.section5.govenment_image}
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder=""
                        />
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "50%" }}>
                        <label
                          style={{ marginLeft: "10px" }}
                          className="form-check-label"
                        >
                          เป็นข้อมูลช่วยผู้บริหารในการตัดสินใจ:
                        </label>
                      </td>
                      <td style={{ width: "50%" }}>
                        <input
                          onChange={handleChangeField}
                          name="support_information"
                          value={formState.section5.support_information}
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder=""
                        />
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "50%" }}>
                        <label
                          style={{ marginLeft: "10px" }}
                          className="form-check-label"
                        >
                          อื่นๆ:
                        </label>
                      </td>
                      <td style={{ width: "50%" }}>
                        <input
                          onChange={handleChangeField}
                          name="other"
                          value={formState.section5.other}
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder=""
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            {/* { validationState[7].isValid == false && 
                        <div className="form-field-fieldzone">
                            <span style={{color:'red'}}>โปรดกรอกข้อมูล{validationState[7].alias}</span>
                        </div>
                        } */}
          </div>
        </div>
      </div>
      <div className="d-flex form-group">
        <div className="form-field-label">
          <label>
            ระบุความเสี่ยง<span style={{ color: "red" }}> *</span>
          </label>
        </div>
        <div className="d-flex flex-column form-field-fieldzone">
          <div className="">
            <input
              onChange={handleChangeField}
              name="project_risk"
              value={formState.section5.project_risk}
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=""
            />
          </div>
          <div>
            {/* { validationState[7].isValid == false && 
                        <div className="form-field-fieldzone">
                            <span style={{color:'red'}}>โปรดกรอกข้อมูล{validationState[7].alias}</span>
                        </div>
                        } */}
          </div>
        </div>
      </div>
      <div className="button-section">
        <button
          onClick={handleRouteActivities}
          type="button"
          className="btn btn-primary"
        >
          ต่อไป <i className="bi bi-chevron-right"></i>
        </button>
        <button type="button" className="btn btn-primary">
          <i className="bi bi-file-earmark"></i> บันทึกข้อมูลชั่วคราว{" "}
        </button>
        <button
          onClick={() => handleSection(4)}
          type="button"
          className="btn btn-primary"
        >
          <i className="bi bi-chevron-left"></i>ย้อนกลับ{" "}
        </button>
      </div>
    </>
  );
}
