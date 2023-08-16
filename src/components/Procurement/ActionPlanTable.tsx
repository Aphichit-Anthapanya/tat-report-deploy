import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";

interface ITempItem {
  id: string;
  project_name: string;
  activity: string;
  budget: string;
}

interface DataTableProps {
  data: Array<{
    id: string;
    project_name: string;
    activity: string;
    budget: string;
  }>;
  callBackValue: (cb: Array<ITempItem>) => void;
}

const ActionPlanTable: React.FC<DataTableProps> = ({ data, callBackValue }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [actionPlanModal, setActionPlanModal] = useState(false);
  const [FYSelect, setFYSelect] = useState<number[]>([]);
  const [tempItem, setTempItem] = useState<ITempItem[]>([]);

  useEffect(() => {
    genFYSelect();
  }, []);

  function genFYSelect() {
    let dateNow = new Date();
    let temp = [];
    for (
      let index = dateNow.getFullYear() + 5;
      index >= dateNow.getFullYear() - 5;
      index--
    ) {
      temp.push(index + 543);
    }
    setFYSelect(temp);
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  let pagesToDisplay: (number | string)[] = [];
  if (totalPages <= 5) {
    pagesToDisplay = Array.from({ length: totalPages }, (_, i) => i + 1);
  } else {
    if (currentPage <= 3) {
      pagesToDisplay = [1, 2, 3, 4, "...", totalPages];
    } else if (currentPage >= totalPages - 3) {
      pagesToDisplay = [
        1,
        "...",
        // totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    } else {
      pagesToDisplay = [
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages,
      ];
    }
  }

  const formatCurrency = (value: any) => {
    if (value == "" || value == "." || value == ".." || isNaN(value)) {
      return "0.00";
    }
    return parseFloat(value)
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  function handleCheckBox(e: any, item: ITempItem) {
    console.log(e.target.checked, item);
    if (e.target.checked) {
      let findCheck = tempItem.find((f) => f.id == item.id);
      if (!findCheck) {
        setTempItem((oldArray) => [...oldArray, item]);
      }
    } else {
      setTempItem(tempItem.filter((i) => i.id !== item.id));
    }
  }

  const checkValue = (item: ITempItem) => {
    let findCheck = tempItem.find((f) => f.id == item.id);
    return findCheck ? true : false;
  };

  const handleShowActionPlanModal = () => {
    setActionPlanModal(true);
  };

  const handleCloseActionPlanModal = () => {
    setActionPlanModal(false);
  };

  const handleSaveModal = () => {
    setActionPlanModal(false);
    callBackValue(tempItem);
  };

  return (
    <div>
      <div className="row mb-3">
        <div className="col-3"></div>
        <div className="col-9 text-center">
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleShowActionPlanModal}
          >
            <i className="bi bi-plus-lg"></i> เลือกโครงการ/กิจกรรม
          </button>
        </div>
      </div>
      <Modal
        size="lg"
        centered
        show={actionPlanModal}
        onHide={handleCloseActionPlanModal}
        backdrop={"static"}
        keyboard={false}
        animation={true}
      >
        <Modal.Header>
          <Modal.Title>ข้อมูลโครงการหลัก</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row mb-3">
            <div className="col-12">
              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="d-flex mb-2">
                    <label htmlFor="action_plan_fiscal_fear" className="mt-2">
                      ปีงบประมาณ&nbsp;:&nbsp;
                    </label>
                    <select
                      id="action_plan_fiscal_fear"
                      name="action_plan_fiscal_fear"
                      className="form-select"
                    >
                      <option value="" style={{ color: "gray" }}>
                        ----- เลือก -----
                      </option>
                      {FYSelect.map((i) => {
                        return (
                          <option key={i} value={i}>
                            {i}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="d-flex mb-2">
                    <label
                      style={{ whiteSpace: "nowrap" }}
                      htmlFor="action_plan_fiscal_fear"
                      className="mt-2"
                    >
                      ชื่อโครงการ&nbsp;:&nbsp;
                    </label>
                    <input
                      id="action_plan_project_name"
                      className="form-control"
                      name="action_plan_project_name"
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-12 text-center">
                  <button className="btn btn-primary" type="submit">
                    <i className="bi bi-search"></i> ค้นหา
                  </button>
                  <button
                    className="btn btn-secondary"
                    style={{ marginLeft: "14px" }}
                    type="button"
                  >
                    <i className="bi bi-eraser-fill"></i> ล้างค่า
                  </button>
                  <div className="mt-3"></div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <table className="table table-bordered table-striped">
                    <thead className="table-light">
                      <tr>
                        <th></th>
                        <th>โครงการ</th>
                        <th>กิจกรรม</th>
                        <th>งบประมาณ</th>
                      </tr>
                    </thead>
                    <tbody>
                      {visibleData.map((item) => (
                        <tr key={item.id}>
                          <td>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              checked={checkValue(item)}
                              id={"action-plan-id-" + item.id}
                              onChange={(e) => handleCheckBox(e, item)}
                            ></input>
                          </td>
                          <td>{item.project_name}</td>
                          <td>{item.activity}</td>
                          <td>{formatCurrency(item.budget)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="d-flex justify-content-center">
                    <div className="">
                      <nav aria-label="Page navigation">
                        <ul className="pagination pagination-sm">
                          <li
                            className={`page-item ${
                              currentPage === 1 ? "disabled" : ""
                            }`}
                          >
                            <button
                              className="page-link"
                              onClick={() => handlePageChange(1)}
                            >
                              <i
                                style={{ fontSize: "11px" }}
                                className="bi bi-chevron-double-left"
                              ></i>
                            </button>
                          </li>
                          <li
                            className={`page-item ${
                              currentPage === 1 ? "disabled" : ""
                            }`}
                          >
                            <button
                              className="page-link"
                              onClick={() => handlePageChange(currentPage - 1)}
                            >
                              <i
                                style={{ fontSize: "11px" }}
                                className="bi bi-chevron-left"
                              ></i>
                            </button>
                          </li>
                          {pagesToDisplay.map((page, index) => (
                            <li
                              key={index}
                              className={`page-item ${
                                currentPage === page ? "active" : ""
                              } ${page === "..." ? "disabled" : ""}`}
                            >
                              <button
                                className="page-link"
                                onClick={() =>
                                  typeof page === "number"
                                    ? handlePageChange(page)
                                    : null
                                }
                              >
                                {page}
                              </button>
                            </li>
                          ))}
                          <li
                            className={`page-item ${
                              currentPage === totalPages ? "disabled" : ""
                            }`}
                          >
                            <button
                              className="page-link"
                              onClick={() => handlePageChange(currentPage + 1)}
                            >
                              <i
                                style={{ fontSize: "11px" }}
                                className="bi bi-chevron-right"
                              ></i>
                            </button>
                          </li>
                          <li
                            className={`page-item ${
                              currentPage === totalPages ? "disabled" : ""
                            }`}
                          >
                            <button
                              className="page-link"
                              onClick={() => handlePageChange(totalPages)}
                            >
                              <i
                                style={{ fontSize: "11px" }}
                                className="bi bi-chevron-double-right"
                              ></i>
                            </button>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSaveModal}
          >
            <i className="bi bi-file-earmark-post"></i> เพิ่มข้อมูล
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleCloseActionPlanModal}
          >
            ยกเลิก
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ActionPlanTable;
