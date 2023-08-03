"use client";

import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { useEffect, useState } from "react";
import { RootState } from "@/redux/store";
import "./operation-list.scss";
import {
  deleteOperationList,
  fetchOperationSupportList,
} from "@/redux/OperationFollow/List/service";
import { FormState } from "@/redux/OperationFollow/types";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { updateFormById } from "@/redux/OperationFollow/service";
import DeleteModal from "./Modal/Deletemodal";
import { OperationFollowTable } from "@/redux/OperationFollowTable/reducer";

export default function OperationTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showAdvanceFilter, setShowAdvanceFilter] = useState(false);
  const formState: OperationFollowTable = useSelector(
    (state: RootState) => state.operationFollowTable
  );
  const dispatch = useDispatch();
  const router = useRouter();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(0);

  const data = formState.data;

  let pageSize = 3;

  const totalPages = Math.ceil(data.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = data.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handlePageChangeSelect = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedPage = parseInt(event.target.value, 10);
    setCurrentPage(selectedPage);
  };

  const handleShowAdvanceFilter = () => {
    setShowAdvanceFilter(!showAdvanceFilter);
  };

  const handleClickProject = (id: number) => {
    router.push("/operation-follow/edit/" + id);
  };

  const handleClickReport = (id: number) => {
    router.push("/operation-follow/report/view/" + id);
  };

  const openDeleteModal = (id: number) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const handleDeleteConfirm = () => {
    deleteOperationList(deleteId, dispatch);
  };

  useEffect(() => {
    // fetchOperationSupportList(dispatch);
    // updateFormById(63,dispatch);
  }, []);

  return (
    <div style={{ width: "100%" }} className="d-flex flex-column">
      <div className="breadcrumb-zone">
        นำเข้าข้อมูล {">"}{" "}
        <span className="bread-crumb-page-name">
          ข้อมูลโครงการของแผนปฎิบัติและการติดตามประเมินผล
        </span>
      </div>
      <div className="filter-project-wrapper">
        <div className="filter-project-header">
          <h4>ค้นหาข้อมูล {">"} ข้อมูลโครงการ</h4>
        </div>
        <div className="d-flex filter-project-content">
          <div className="d-flex flex-column flex-row form-left-section">
            <div className="d-flex">
              <div className="form-left-section-label">
                <label>ปีงบประมาณ:</label>
              </div>
              <div className="form-left-section-field">
                <div className="filter-field">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>--เลือก--</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column form-right-section">
            <div className="d-flex">
              <div className="form-left-section-label">
                <label>ชื่อแผน:</label>
              </div>
              <div className="form-left-section-field">
                <div className="filter-field">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>--เลือก--</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex filter-project-content">
          <div className="d-flex flex-column flex-row form-left-section">
            <div className="d-flex">
              <div className="form-left-section-label">
                <label>วัตถุประสงค์เชิงยุทธศาสตร์ (SO):</label>
              </div>
              <div className="form-left-section-field">
                <div className="filter-field">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>--เลือก--</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column form-right-section">
            <div className="d-flex">
              <div className="form-left-section-label">
                <label>แหล่งงบประมาณ:</label>
              </div>
              <div className="form-left-section-field">
                <div className="filter-field">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>--เลือก--</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex filter-project-content">
          <div className="d-flex flex-column flex-row form-left-section">
            <div className="d-flex">
              <div className="form-left-section-label">
                <label>ด้าน :</label>
              </div>
              <div className="form-left-section-field">
                <div className="filter-field">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>--เลือก--</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column form-right-section">
            <div className="d-flex">
              <div className="form-left-section-label">
                <label>ฝ่ายสำนัก :</label>
              </div>
              <div className="form-left-section-field">
                <div className="filter-field">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>--เลือก--</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex filter-project-content">
          <div className="d-flex flex-column flex-row form-left-section">
            <div className="d-flex">
              <div className="form-left-section-label">
                <label>กองกลุ่มงาน :</label>
              </div>
              <div className="form-left-section-field">
                <div className="filter-field">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>--เลือก--</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column form-right-section">
            <div className="d-flex">
              <div className="form-left-section-label">
                <label>งาน :</label>
              </div>
              <div className="form-left-section-field">
                <div className="filter-field">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>--เลือก--</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex filter-project-content">
          <div className="d-flex flex-column flex-row form-left-section">
            <div className="d-flex">
              <div className="form-left-section-label">
                <label>ชื่อโครงการ :</label>
              </div>
              <div className="form-left-section-field">
                <div className="filter-field">
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    id="filterOverall"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column form-right-section">
            <div className="d-flex"></div>
          </div>
        </div>
        <div className="d-flex filter-project-button justify-content-center">
          <div className="p-2">
            <button className="btn btn-primary">ค้นหา</button>
          </div>
          <div className="p-2">
            <button className="btn btn-secondary">ล้าง</button>
          </div>
          <div className="p-2">
            <button
              onClick={handleShowAdvanceFilter}
              className="btn btn-secondary"
            >
              Advance Search
            </button>
          </div>
        </div>
        {showAdvanceFilter && (
          <>
            <div className="d-flex filter-project-content2">
              <div className="d-flex flex-column flex-row form-left-section">
                <div className="d-flex">
                  <div className="form-left-section-label">
                    <label>กลยุทธ์:</label>
                  </div>
                  <div className="form-left-section-field">
                    <div className="filter-field">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>--เลือก--</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column form-right-section">
                <div className="d-flex">
                  <div className="form-left-section-label">
                    <label>ตลาด:</label>
                  </div>
                  <div className="form-left-section-field">
                    <div className="d-flex filter-field">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        id="filterOverall"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex filter-project-content2">
              <div className="d-flex flex-column flex-row form-left-section">
                <div className="d-flex">
                  <div className="form-left-section-label">
                    <label>แผนงาน:</label>
                  </div>
                  <div className="form-left-section-field">
                    <div className="filter-field">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>--เลือก--</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column form-right-section">
                <div className="d-flex">
                  <div className="form-left-section-label">
                    <label>สถานะแผน/ผล:</label>
                  </div>
                  <div className="form-left-section-field">
                    <div className="filter-field">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>--เลือก--</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex filter-project-content2">
              <div className="d-flex flex-column flex-row form-left-section">
                <div className="d-flex">
                  <div className="form-left-section-label">
                    <label>ประเภทโครงการ:</label>
                  </div>
                  <div className="form-left-section-field">
                    <div className="filter-field">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>--เลือก--</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column form-right-section">
                <div className="d-flex">
                  <div className="form-left-section-label">
                    <label>หน่วยงาน:</label>
                  </div>
                  <div className="form-left-section-field">
                    <div className="filter-field">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        id="filterOverall"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex filter-project-content2">
              <div className="d-flex flex-column flex-row form-left-section">
                <div className="d-flex">
                  <div className="form-left-section-label">
                    <label>งบประมาณโครงการ (บาท):</label>
                  </div>
                  <div className="form-left-section-field">
                    <div className="d-flex filter-field">
                      <div className="p-2">
                        <input
                          type="text"
                          className="form-control purchase-project-feild1"
                          placeholder=""
                          id="filterOverall"
                        />
                      </div>
                      <div className="puchasing-separate">
                        <span>-</span>
                      </div>
                      <div className="p-2">
                        <input
                          type="text"
                          className="form-control purchase-project-feild2"
                          placeholder=""
                          id="filterOverall"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column form-right-section">
                <div className="d-flex">
                  <div className="form-left-section-label">
                    <label>ความสอดคล้องกับนโยบาย:</label>
                  </div>
                  <div className="form-left-section-field">
                    <div className="filter-field">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>--เลือก--</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex filter-project-content2">
              <div className="d-flex flex-column flex-row form-left-section">
                <div className="d-flex">
                  <div className="form-left-section-label">
                    <label>หมวด พ.ร.บ. งบประมาณ:</label>
                  </div>
                  <div className="form-left-section-field">
                    <div className="d-flex filter-field">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>--เลือก--</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column form-right-section">
                <div className="d-flex">
                  <div className="form-left-section-label">
                    <label>รายการค่าใช้จ่าย:</label>
                  </div>
                  <div className="form-left-section-field">
                    <div className="filter-field">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>--เลือก--</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="separation">
        <hr />
      </div>
      <div className="d-flex justify-content-between">
        <div className="d-flex tab-button-zone-wrapper">
          <div className="p-1 tab-button-zone">
            <div>
              <button className="btn btn-primary btn-tab-zone">
                อนุมัติแผน
              </button>
            </div>
          </div>
          <div className="p-1 tab-button-zone">
            <Link href="/operation-follow/new/1">
              <div>
                <button className="btn btn-primary btn-tab-zone">
                  เพิ่มแผนสนับสนุนการดำเนินงานด้านการตลาด
                </button>
              </div>
            </Link>
          </div>
          <div className="p-1 tab-button-zone">
            <Link href="/operation-follow/new/2">
              <div>
                <button className="btn btn-primary btn-tab-zone">
                  เพิ่มแผนตลาดในประเทศ
                </button>
              </div>
            </Link>
          </div>
          <div className="p-1 tab-button-zone">
            <Link href="/operation-follow/new/3">
              <div>
                <button className="btn btn-primary btn-tab-zone">
                  เพิ่มแผนตลาดต่างประเทศ
                </button>
              </div>
            </Link>
          </div>
        </div>
        <div className="d-flex">
          <div className="p-1 tab-button-zone">
            <div>
              <button className="btn btn-secondary btn-tab-zone2">
                Export Excel
              </button>
            </div>
          </div>
          <div className="p-1 tab-button-zone">
            <div>
              <button className="btn btn-secondary btn-tab-zone2">
                คู่มือการใช้งาน
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="table-wrapper">
        <div className="table-zone">
          <table className="table">
            <thead className="table-primary">
              <tr>
                <th scope="col">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </th>
                <th scope="col">แก้ไข/รายงานผล</th>
                <th scope="col">ลบ</th>
                <th scope="col">สถานะการรออนุมัติ</th>
                <th scope="col">สถานะโครงการ</th>
                <th scope="col">ปีงบประมาณ</th>
                <th scope="col">ลำดับที่โครงการ</th>
                <th scope="col">ชื่อโครงการ</th>
                <th scope="col">สถานะการแก้ไข</th>
                <th scope="col">รายละเอียดการแก้ไข</th>
                <th scope="col">ชื่อหน่วยงาน</th>
              </tr>
            </thead>
            {formState.data.length > 0 && (
              <>
                <tbody>
                  {currentData.map((item) => (
                    <tr key={item.id}>
                      <td scope="row">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                      </td>
                      <td>
                        <i
                          onClick={() => handleClickProject(item.id)}
                          className="bi bi-pencil-square"
                        ></i>
                        <i
                          onClick={() => handleClickReport(item.id)}
                          style={{
                            marginLeft: 11,
                            color: "blue",
                            cursor: "pointer",
                          }}
                          className="bi bi-file-text-fill"
                        ></i>
                      </td>
                      <td>
                        <i
                          onClick={() => openDeleteModal(item.id)}
                          style={{ color: "red", cursor: "pointer" }}
                          className="bi bi-trash-fill"
                        ></i>
                      </td>
                      <td>{item.status}</td>
                      <td>{item.project_status}</td>
                      <td>{item.section1.yearBudget}</td>
                      <td></td>
                      <td>{item.section1.project_name}</td>
                      <td>{item.project_edit_status}</td>
                      <td>{item.project_edit_detail}</td>
                      <td>{item.section1.organizationManageMent}</td>
                    </tr>
                  ))}
                </tbody>
              </>
            )}
            {formState.data.length == 0 && (
              <tbody>
                <tr>
                  <td style={{ paddingTop: "11px" }} colSpan={11}>
                    No Data
                  </td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
      </div>
      {formState.data.length > 0 && (
        <div className="pagination-wrapper d-flex justify-content-center">
          <div className="p-2 pagination-status">
            <span>
              {startIndex + 1} to {Math.min(endIndex, data.length)} of{" "}
              {data.length} items
            </span>
          </div>
          <div className="p-2 d-flex pagination-page-select">
            <ul className="pagination">
              <li className="page-item">
                <a
                  onClick={handlePrevPage}
                  className="page-link"
                  href="javascript:void(0)"
                  tabIndex={-1}
                >
                  {"<"}
                </a>
              </li>
              {Array.from({ length: totalPages }, (_, index) => (
                // <button
                // key={index}
                // onClick={() => handlePageChange(index + 1)}
                // disabled={currentPage === index + 1}
                // >
                // {index + 1}
                // </button>
                <li
                  className={`page-item ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                >
                  <a
                    className="page-link"
                    onClick={() => handlePageChange(index + 1)}
                    href="javascript:void(0)"
                  >
                    {index + 1}
                  </a>
                </li>
              ))}
              {/* <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item active">
                        <a className="page-link" href="javascript:void(0)">2</a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li> */}
              <li className="page-item">
                <a
                  onClick={handleNextPage}
                  className="page-link"
                  href="javascript:void(0)"
                >
                  {">"}
                </a>
              </li>
            </ul>
          </div>
          <div className="p-2 pagination-page-dropdown">
            <select
              className="form-select"
              value={currentPage}
              onChange={handlePageChangeSelect}
            >
              {Array.from({ length: totalPages }, (_, index) => (
                <option key={index + 1} value={index + 1}>
                  -- {index + 1}/Page --
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
      <DeleteModal
        setShow={showDeleteModal}
        handleClose={handleCloseDeleteModal}
        deleteConfirm={handleDeleteConfirm}
      />
    </div>
  );
}
