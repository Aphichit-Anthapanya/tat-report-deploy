"use client";
import React, { useEffect, useState, useRef } from "react";
import "@/components/Procurement/procurement.scss";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import Modal from "react-bootstrap/Modal";
import { ISearchDataObj } from "@/redux/Procurement/types";

interface IHeaderName {
  name: string;
  minWidth: string;
  className: string;
}

export default function TableForSearchResult() {
  const procurementStore = useSelector((state: RootState) => state.procurement);
  const router = useRouter();
  const [deleteItem, setDeleteItem] = useState(false);
  const [delItemData, setDelItemData] = useState<ISearchDataObj | null>();

  const handleClose = () => setDeleteItem(false);

  useEffect(() => {}, [delItemData]);
  const headerName: Array<IHeaderName> = [
    {
      name: "แก้ไข",
      minWidth: "170px",
      className: "fix_1",
    },
    {
      name: "สถานะงาน",
      minWidth: "170px",
      className: "fix_2",
    },
    {
      name: "ประเภทงบ",
      minWidth: "150px",
      className: "fix_3",
    },
    {
      name: "ปีงบประมาณ",
      minWidth: "110px",
      className: "fix_4",
    },
    {
      name: "รายชื่อการจัดซื้อจัดจ้าง",
      minWidth: "180px",
      className: "fix_5",
    },
    {
      name: "งบประมาณโครงการ (บาท)",
      minWidth: "180px",
      className: "",
    },
    {
      name: "กิจกรรมย่อย",
      minWidth: "50px",
      className: "",
    },
    {
      name: "วันที่เริ่มต้น",
      minWidth: "50px",
      className: "",
    },
    {
      name: "วันที่แล้วเสร็จ",
      minWidth: "50px",
      className: "",
    },
    {
      name: "วิธีการจัดซื้อจัดจ้าง",
      minWidth: "50px",
      className: "",
    },
    {
      name: "หมายเหตุ",
      minWidth: "50px",
      className: "",
    },
    {
      name: "หน่วยงานที่รับผิดชอบ",
      minWidth: "50px",
      className: "",
    },
  ];

  const wantDeleteItem = (item: ISearchDataObj) => {
    setDelItemData(item);
    setDeleteItem(true);
  };

  const cancelDelete = () => {
    setDelItemData({} as ISearchDataObj);
    handleClose();
  };

  return (
    <>
      <div className={`form-wrapper-section`}>
        <div className="container">
          <div className="row">
            <div className="col">
              {/* <div className="outer">
                <div className="inner"> */}
              <div className="table-responsive">
                <table className="table table-striped search_table">
                  <thead className="table-light">
                    <tr>
                      {headerName.map((i: IHeaderName, idx: any) => {
                        return (
                          <th
                            key={idx}
                            className={"td-nowrap " + i.className}
                            style={{ minWidth: i.minWidth }}
                          >
                            {i.name}
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {procurementStore.search_data.map((i, idx) => {
                      return (
                        <tr key={idx}>
                          <td className="fix_1">
                            <Link href={"procurement/view-edit/" + i.id}>
                              <i className="bi bi-pencil-fill search-table-icon"></i>
                            </Link>
                            <i
                              className="bi bi-trash-fill search-table-icon"
                              onClick={() => wantDeleteItem(i)}
                            ></i>
                            <Link href={"procurement/report-result/" + i.id}>
                              รายงานผล
                            </Link>
                          </td>
                          <td className="fix_2">{i.job_status}</td>
                          <td className="fix_3">{i.type_of_statement}</td>
                          <td className="fix_4">{i.fiscal_year.toString()}</td>
                          <td className="fix_5">{i.proc_list}</td>
                          <td>{i.budget}</td>
                          <td>{i.activity}</td>
                          <td>{i.start_date}</td>
                          <td>{i.end_date}</td>
                          <td>{i.proc_method}</td>
                          <td>{i.note}</td>
                          <td>{i.resp_agency}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              {/* </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Modal show={deleteItem} onHide={handleClose} centered backdrop={false}>
        <Modal.Body>
          <div className="text-center mt-2 mb-2">
            ต้องการลบรายการ ID: {delItemData?.id} หรือไม่ ?
            <div className=" mt-4">
              <button
                type="button"
                className="btn btn-danger"
                style={{ marginRight: "16px" }}
              >
                ยืนยันการลบ
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={cancelDelete}
              >
                ยกเลิก
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
