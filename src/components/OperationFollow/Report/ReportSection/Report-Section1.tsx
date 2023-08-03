import React from "react";

interface ReportSection1Props {
  formData: any;
  setFormData: (value: any) => void;
  mode: string;
}

export default function ReportSection1(props: ReportSection1Props) {
  const handleChangeField = (e: any) => {
    const { name, value } = e.target;

    props.setFormData({
      ...props.formData,
      section1: {
        ...props.formData.section1,
        [name]: value,
      },
    });
  };

  const handleChangeFieldSection2 = (e: any) => {
    const { name, value } = e.target;

    props.setFormData({
      ...props.formData,
      section2: {
        ...props.formData.section1,
        [name]: value,
      },
    });
  };

  return (
    <>
      <div className="d-flex">
        <div className="left-section-form">
          <div className="d-flex">
            <div className="form-label">
              <label>ชื่อโครงการ:</label>
            </div>
            <div className="form-field">
              <span>โครงการพัฒนาระบบ Single signon</span>
            </div>
          </div>
        </div>
        <div className="right-section-form">
          <div className="d-flex">
            <div className="form-label">
              <label>ชื่อโครงการ:</label>
            </div>
            <div className="form-field">
              <input
                onChange={(e) => handleChangeField(e)}
                name="project_name"
                value={props.formData.section1.project_name}
                disabled={props.mode == "view"}
                type="text"
                className="form-control purchase-project-feild1"
                placeholder=""
                id="filterOverall"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className="left-section-form">
          <div className="d-flex">
            <div className="form-label">
              <label>ปีงบประมาณ:</label>
            </div>
            <div className="form-field">
              <span>2565</span>
            </div>
          </div>
        </div>
        <div className="right-section-form">
          <div className="d-flex">
            <div className="form-label">
              <label>ปีงบประมาณ:</label>
            </div>
            <div className="form-field">
              <input
                onChange={(e) => handleChangeField(e)}
                name="yearBudget"
                value={props.formData.section1.yearBudget}
                disabled={props.mode == "view"}
                type="text"
                className="form-control purchase-project-feild1"
                placeholder=""
                id="filterOverall"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className="left-section-form">
          <div className="d-flex">
            <div className="form-label">
              <label>ชื่อแผน:</label>
            </div>
            <div className="form-field">
              <span>สนับสนุนเงินด้านการตลาด</span>
            </div>
          </div>
        </div>
        <div className="right-section-form">
          <div className="d-flex">
            <div className="form-label">
              <label>ชื่อแผน:</label>
            </div>
            <div className="form-field">
              <input
                disabled={props.mode == "view"}
                type="text"
                className="form-control purchase-project-feild1"
                placeholder=""
                id="filterOverall"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className="left-section-form">
          <div className="d-flex">
            <div className="form-label">
              <label>ประเด็นยุทธศาสตร์:</label>
            </div>
            <div className="form-field">
              <span>งบฟื้นฟูประเทศด้วยการท่องเที่ยว (งบคงเหลือ 65)</span>
            </div>
          </div>
        </div>
        <div className="right-section-form">
          <div className="d-flex">
            <div className="form-label">
              <label>ประเด็นยุทธศาสตร์:</label>
            </div>
            <div className="form-field">
              <input
                disabled={props.mode == "view"}
                type="text"
                className="form-control purchase-project-feild1"
                placeholder=""
                id="filterOverall"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className="left-section-form">
          <div className="d-flex">
            <div className="form-label">
              <label>ชื่อแผนงาน:</label>
            </div>
            <div className="form-field">
              <span>งบฟื้นฟูประเทศด้วยการท่องเที่ยว (งบคงเหลือ 65)</span>
            </div>
          </div>
        </div>
        <div className="right-section-form">
          <div className="d-flex">
            <div className="form-label">
              <label>ชื่อแผนงาน:</label>
            </div>
            <div className="form-field">
              <input
                disabled={props.mode == "view"}
                type="text"
                className="form-control purchase-project-feild1"
                placeholder=""
                id="filterOverall"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className="left-section-form">
          <div className="d-flex">
            <div className="form-label">
              <label>ประเภทโครงการ:</label>
            </div>
            <div className="form-field">
              <span>งบฟื้นฟูประเทศด้วยการท่องเที่ยว (งบคงเหลือ 65)</span>
            </div>
          </div>
        </div>
        <div className="right-section-form">
          <div className="d-flex">
            <div className="form-label">
              <label>ประเภทโครงการ:</label>
            </div>
            <div className="form-field">
              <input
                onChange={(e) => handleChangeField(e)}
                name="project_type"
                value={props.formData.section1.project_type}
                disabled={props.mode == "view"}
                type="text"
                className="form-control purchase-project-feild1"
                placeholder=""
                id="filterOverall"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className="left-section-form">
          <div className="d-flex">
            <div className="form-label">
              <label>ลำดับที่โครงการ:</label>
            </div>
            <div className="form-field">
              <span>งบฟื้นฟูประเทศด้วยการท่องเที่ยว (งบคงเหลือ 65)</span>
            </div>
          </div>
        </div>
        <div className="right-section-form">
          <div className="d-flex">
            <div className="form-label">
              <label>ลำดับที่โครงการ:</label>
            </div>
            <div className="form-field">
              <input
                disabled={props.mode == "view"}
                type="text"
                className="form-control purchase-project-feild1"
                placeholder=""
                id="filterOverall"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className="left-section-form">
          <div className="d-flex">
            <div className="form-label">
              <label>งบประมาณโครงการแผน (บาท):</label>
            </div>
            <div className="form-field">
              <span>7,000,000</span>
            </div>
          </div>
        </div>
        <div className="right-section-form">
          <div className="d-flex">
            <div className="form-label">
              <label>งบประมาณโครงการแผน (บาท):</label>
            </div>
            <div className="form-field">
              <input
                onChange={(e) => handleChangeField(e)}
                name="budget"
                value={props.formData.section2.budget}
                disabled={props.mode == "view"}
                type="text"
                className="form-control purchase-project-feild1"
                placeholder=""
                id="filterOverall"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className="left-section-form">
          <div className="d-flex">
            <div className="form-label">
              <label>แหล่งงบประมาณ:</label>
            </div>
            <div className="form-field">
              <span>-</span>
            </div>
          </div>
        </div>
        <div className="right-section-form">
          <div className="d-flex">
            <div className="form-label">
              <label>แหล่งงบประมาณ :</label>
            </div>
            <div className="form-field">
              <input
                onChange={(e) => handleChangeField(e)}
                name="budgetSource"
                value={props.formData.section1.budgetSource}
                disabled={props.mode == "view"}
                type="text"
                className="form-control purchase-project-feild1"
                placeholder=""
                id="filterOverall"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className="left-section-form">
          <div className="d-flex">
            <div className="form-label">
              <label>รายการค่าใช้จ่าย:</label>
            </div>
            <div className="form-field">
              <span>-</span>
            </div>
          </div>
        </div>
        <div className="right-section-form">
          <div className="d-flex">
            <div className="form-label">
              <label>รายการค่าใช้จ่าย:</label>
            </div>
            <div className="form-field">
              <input
                disabled={props.mode == "view"}
                type="text"
                className="form-control purchase-project-feild1"
                placeholder=""
                id="filterOverall"
                value="-"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
