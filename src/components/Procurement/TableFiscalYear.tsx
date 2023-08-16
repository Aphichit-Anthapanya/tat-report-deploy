import React from "react";
import { useEffect, useState } from "react";
import "./procurement.scss";
import { FormState } from "@/redux/Procurement/types";
import { Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import th from "date-fns/locale/th";
import { format } from "date-fns";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { updateSection, updateObjByKey } from "@/redux/Procurement/reducer";
import DatePickerBuddhist from "./DatePickerBuddhist";

interface ActionPlan {
  fiscal_year: number;
}

interface IImofy {
  key: string;
  // data: Array<FormState["obj"]["action_plan_table"]>;
  data: Array<ActionPlan>;
}

interface FYMD {
  topic: string;
  name: string;
  startDateId: string;
  endDateId: string;
  tempStartDate: string;
  tempEndDate: string;
}

export default function TableFiscalYear() {
  const procurementStore = useSelector((state: RootState) => state.procurement);
  const dispatch = useDispatch();

  // mofy = month of fiscal year
  const [mofy, setMoofy] = useState([
    "ต.ค.",
    "พ.ย.",
    "ธ.ค.",
    "ม.ค.",
    "ก.พ.",
    "มี.ค.",
    "เม.ย.",
    "พ.ค.",
    "มิ.ย.",
    "ก.ค.",
    "ส.ค.",
    "ก.ย.",
  ]);
  // imofy = month of fiscal year
  const [imofy, setImofy] = useState<IImofy[][]>([
    [
      { key: "1-10", data: [] },
      { key: "1-11", data: [] },
      { key: "1-12", data: [] },
      { key: "1-1", data: [] },
      { key: "1-2", data: [] },
      { key: "1-3", data: [] },
      { key: "1-4", data: [] },
      { key: "1-5", data: [] },
      { key: "1-6", data: [] },
      { key: "1-7", data: [] },
      { key: "1-8", data: [] },
      { key: "1-9", data: [] },
    ],
    [
      { key: "2-10", data: [] },
      { key: "2-11", data: [] },
      { key: "2-12", data: [] },
      { key: "2-1", data: [] },
      { key: "2-2", data: [] },
      { key: "2-3", data: [] },
      { key: "2-4", data: [] },
      { key: "2-5", data: [] },
      { key: "2-6", data: [] },
      { key: "2-7", data: [] },
      { key: "2-8", data: [] },
      { key: "2-9", data: [] },
    ],
    [
      { key: "3-10", data: [] },
      { key: "3-11", data: [] },
      { key: "3-12", data: [] },
      { key: "3-1", data: [] },
      { key: "3-2", data: [] },
      { key: "3-3", data: [] },
      { key: "3-4", data: [] },
      { key: "3-5", data: [] },
      { key: "3-6", data: [] },
      { key: "3-7", data: [] },
      { key: "3-8", data: [] },
      { key: "3-9", data: [] },
    ],
    [
      { key: "4-10", data: [] },
      { key: "4-11", data: [] },
      { key: "4-12", data: [] },
      { key: "4-1", data: [] },
      { key: "4-2", data: [] },
      { key: "4-3", data: [] },
      { key: "4-4", data: [] },
      { key: "4-5", data: [] },
      { key: "4-6", data: [] },
      { key: "4-7", data: [] },
      { key: "4-8", data: [] },
      { key: "4-9", data: [] },
    ],
    [
      { key: "5-10", data: [] },
      { key: "5-11", data: [] },
      { key: "5-12", data: [] },
      { key: "5-1", data: [] },
      { key: "5-2", data: [] },
      { key: "5-3", data: [] },
      { key: "5-4", data: [] },
      { key: "5-5", data: [] },
      { key: "5-6", data: [] },
      { key: "5-7", data: [] },
      { key: "5-8", data: [] },
      { key: "5-9", data: [] },
    ],
    [
      { key: "6-10", data: [] },
      { key: "6-11", data: [] },
      { key: "6-12", data: [] },
      { key: "6-1", data: [] },
      { key: "6-2", data: [] },
      { key: "6-3", data: [] },
      { key: "6-4", data: [] },
      { key: "6-5", data: [] },
      { key: "6-6", data: [] },
      { key: "6-7", data: [] },
      { key: "6-8", data: [] },
      { key: "6-9", data: [] },
    ],
  ]);

  const [fiscalYearModalDetail, setFiscalYearModalDetail] = useState<FYMD[]>([
    {
      topic: "1",
      name: "1. จัดทำร่าง TOR/Spec/ แบบรูปรายงานก่อสร้าง",
      startDateId: "ap1_start_date",
      endDateId: "ap1_end_date",
      tempStartDate: "",
      tempEndDate: "",
    },
    {
      topic: "2",
      name: "2. อนุมัติรายงานขอซื้อ/ขอจ้าง",
      startDateId: "ap2_start_date",
      endDateId: "ap2_end_date",
      tempStartDate: "",
      tempEndDate: "",
    },
    {
      topic: "3",
      name: "3. อนุมัติจัดซื้อจัดจ้าง",
      startDateId: "ap3_start_date",
      endDateId: "ap3_end_date",
      tempStartDate: "",
      tempEndDate: "",
    },
    {
      topic: "4",
      name: "4. ทำสัญญาจัดซื้อ/จัดจ้าง",
      startDateId: "ap4_start_date",
      endDateId: "ap4_end_date",
      tempStartDate: "",
      tempEndDate: "",
    },
    {
      topic: "5",
      name: " 5. ดำเนินงานตามเงื่อนไขของสัญญาส่งมอบงานงวดต่างๆ",
      startDateId: "ap5_start_date",
      endDateId: "ap5_end_date",
      tempStartDate: "",
      tempEndDate: "",
    },
    {
      topic: "6",
      name: "6. วันที่สิ้นสุดสัญญา/วันที่แล้วเสร็จ",
      startDateId: "ap6_start_date",
      endDateId: "ap6_end_date",
      tempStartDate: "",
      tempEndDate: "",
    },
  ]);

  const [fiscalYearModal, setFiscalYearModal] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(null);

  const [configFiscalYear, setConfigFiscalYear] = useState<Date>(new Date());

  useEffect(() => {
    fnConfigFiscalYear();
    let ps = procurementStore.obj;
    calculateMonthsAndFiscalYears(ps.ap1_start_date, ps.ap1_end_date, 1);
    calculateMonthsAndFiscalYears(ps.ap2_start_date, ps.ap2_end_date, 2);
    calculateMonthsAndFiscalYears(ps.ap3_start_date, ps.ap3_end_date, 3);
    calculateMonthsAndFiscalYears(ps.ap4_start_date, ps.ap4_end_date, 4);
    calculateMonthsAndFiscalYears(ps.ap5_start_date, ps.ap5_end_date, 5);
    calculateMonthsAndFiscalYears(ps.ap6_start_date, ps.ap6_end_date, 6);
  }, [procurementStore.obj.fiscal_year, procurementStore.obj]);

  function fnConfigFiscalYear() {
    console.log(procurementStore.obj.fiscal_year);
    console.log(
      new Date(Number(procurementStore.obj.fiscal_year) - 544 + "-10-01")
    );
    setConfigFiscalYear(
      new Date(Number(procurementStore.obj.fiscal_year) - 544 + "-10-01")
    );
  }

  const handleShowModal = () => {
    setFiscalYearModal(true);
  };

  const handleSaveModal = () => {
    setFiscalYearModal(false);

    fiscalYearModalDetail.map((item: any) => {
      if (item.tempStartDate) {
        dispatch(
          updateObjByKey({
            key: item.startDateId,
            value: item.tempStartDate,
          })
        );
      }
      if (item.tempEndDate) {
        dispatch(
          updateObjByKey({
            key: item.endDateId,
            value: item.tempEndDate,
          })
        );
      }
    });
  };

  const handleCloseModal = () => {
    setFiscalYearModal(false);
  };

  function initialData() {
    let ps = procurementStore.obj;
    console.log(
      ps.ap3_start_date,
      ps.ap3_end_date,
      "ps.ap3_start_date, ps.ap3_end_date"
    );

    calculateMonthsAndFiscalYears(ps.ap1_start_date, ps.ap1_end_date, 1);
    calculateMonthsAndFiscalYears(ps.ap2_start_date, ps.ap2_end_date, 2);
    calculateMonthsAndFiscalYears(ps.ap3_start_date, ps.ap3_end_date, 3);
    calculateMonthsAndFiscalYears(ps.ap4_start_date, ps.ap4_end_date, 4);
    calculateMonthsAndFiscalYears(ps.ap5_start_date, ps.ap5_end_date, 5);
    calculateMonthsAndFiscalYears(ps.ap6_start_date, ps.ap6_end_date, 6);
  }

  function calculateMonthsAndFiscalYears(
    startDate: any,
    endDate: any,
    topic: any
  ) {
    if (!startDate && !endDate) {
      return;
    }
    let currentDate = new Date(startDate);
    let nextDate = new Date(endDate);
    console.log(currentDate, "currentDate");

    // clear
    setImofy((prevImofy) => {
      const updatedImofy = [...prevImofy]; // Create a shallow copy of the outer array
      updatedImofy[topic - 1] = updatedImofy[topic - 1].map((item) => ({
        ...item,
        data: [], // Set data to an empty array for all objects in imofy[0]
      }));
      return updatedImofy;
    });

    while (currentDate <= nextDate) {
      let monthSh = currentDate.getMonth() + 1;
      let month = currentDate.toLocaleString("default", { month: "long" });
      let year = currentDate.getFullYear();
      let fiscal_year =
        month === "October" || month === "November" || month === "December"
          ? year + 1
          : year;

      const newDataItem = {
        fiscal_year: Number(fiscal_year) + 543,
      };
      let key = (topic + "-" + monthSh).toString();

      // set data
      setImofy((prevImofy) => {
        const updatedImofy = [...prevImofy];
        const foundIndex = updatedImofy[topic - 1].findIndex(
          (f) => f.key == key
        );

        const found = updatedImofy[topic - 1].find((f) => f.key == key);

        if (foundIndex !== -1) {
          if (
            !found?.data.some((s) => s.fiscal_year == newDataItem.fiscal_year)
          ) {
            updatedImofy[topic - 1][foundIndex] = {
              ...updatedImofy[topic - 1][foundIndex],
              data: [...updatedImofy[topic - 1][foundIndex].data, newDataItem],
            };
          }
        }
        return updatedImofy;
      });
      // Move to the next month
      currentDate.setMonth(currentDate.getMonth() + 1);
    }
  }

  const callbackFromStartDate = (data?: any) => {
    console.log(data, "Dadasadasd", data.date.toString());
    setFiscalYearModalDetail((prevData) =>
      prevData.map((obj) =>
        obj.startDateId === data.id
          ? { ...obj, tempStartDate: data.date.toString() }
          : obj
      )
    );
  };

  const callbackFromEndDate = (data?: any) => {
    console.log(data, "Dadasadasd", data.date.toString());
    setFiscalYearModalDetail((prevData) =>
      prevData.map((obj) =>
        obj.endDateId === data.id
          ? { ...obj, tempEndDate: data.date.toString() }
          : obj
      )
    );
  };

  const updateFiscalYearStore = (val: any) => {
    let fiscalYear = procurementStore.obj.fiscal_year;
    console.log(fiscalYear);
    let newFiscalYear = Number(fiscalYear) + val;
    dispatch(updateObjByKey({ key: "fiscal_year", value: newFiscalYear }));
  };

  return (
    <>
      <div className="text-end mb-3" style={{ maxWidth: "1206px" }}>
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleShowModal}
        >
          <i className="bi bi-plus-lg"></i> เพิ่มข้อมูล
        </button>
      </div>

      <Modal
        size="lg"
        centered
        show={fiscalYearModal}
        onHide={handleCloseModal}
        backdrop={"static"}
        keyboard={false}
        animation={true}
      >
        <Modal.Body>
          <table className="table table-bordered">
            <thead className="text-center">
              <tr>
                <th>แผนปฏิบัติการ</th>
                <th>วันที่เริ่มต้น</th>
                <th>วันที่สิ้นสุด</th>
              </tr>
            </thead>
            <tbody>
              {fiscalYearModalDetail.map((i) => {
                return (
                  <tr key={i.topic}>
                    <td>{i.name}</td>
                    <td>
                      <DatePickerBuddhist
                        callbackValue={callbackFromStartDate}
                        id={i.startDateId}
                        selectedDate={
                          (procurementStore.obj as any)[i.startDateId]
                        }
                        minDate={
                          new Date(
                            Number(procurementStore.obj.fiscal_year) -
                              544 +
                              "-10-01"
                          )
                        }
                      />
                    </td>
                    <td>
                      <DatePickerBuddhist
                        callbackValue={callbackFromEndDate}
                        id={i.endDateId}
                        selectedDate={
                          (procurementStore.obj as any)[i.endDateId]
                        }
                        minDate={new Date(i.tempStartDate)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="text-end">
            <button
              className="btn btn-primary"
              type="submit"
              onClick={handleSaveModal}
            >
              <i className="bi bi-file-earmark-post"></i> บันทึก
            </button>
            <button
              onClick={handleCloseModal}
              style={{ marginLeft: "20px" }}
              className="btn btn-secondary"
              type="submit"
            >
              <i className="bi bi-x-lg"></i> ยกเลิก
            </button>
          </div>
        </Modal.Body>
      </Modal>
      <div className="row">
        <div className="col">
          <div className="d-flex justify-content-center">
            <div className="table-responsive">
              <table className="table table-bordered table-fixed">
                <thead>
                  <tr>
                    <th scope="col" className="titleFiscalYear">
                      <i
                        onClick={() => updateFiscalYearStore(-1)}
                        className="bi bi-chevron-left arrowChangeYear"
                      ></i>
                      <i
                        onClick={() => updateFiscalYearStore(1)}
                        className="bi bi-chevron-right arrowChangeYear"
                      ></i>
                      &nbsp;ประจำปีงบประมาณ{" "}
                      {procurementStore.obj.fiscal_year.toString()}
                    </th>
                    {mofy.map((i, idx) => {
                      return (
                        <th key={idx} className="monthFiscalYear" scope="col">
                          {i}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="titleFiscalYear">
                      1. จัดทำร่าง TOR/Spec/
                      <br />
                      แบบรูปรายงานก่อสร้าง
                    </td>
                    {imofy[0].map((i) => {
                      return (
                        <td
                          key={i.key}
                          className={
                            "itemMonthFiscalYear " +
                            (i.data.length > 0 &&
                            i.data.some(
                              (j) =>
                                j.fiscal_year ==
                                procurementStore.obj.fiscal_year
                            )
                              ? "hasData"
                              : "")
                          }
                          id={i.key}
                        ></td>
                      );
                    })}
                  </tr>
                  <tr>
                    <td className="titleFiscalYear">
                      2. อนุมัติรายงานขอซื้อ/ขอจ้าง
                    </td>
                    {imofy[1].map((i) => {
                      return (
                        <td
                          key={i.key}
                          className={
                            "itemMonthFiscalYear " +
                            (i.data.length > 0 &&
                            i.data.some(
                              (j) =>
                                j.fiscal_year ==
                                procurementStore.obj.fiscal_year
                            )
                              ? "hasData"
                              : "")
                          }
                          id={i.key}
                        ></td>
                      );
                    })}
                  </tr>
                  <tr>
                    <td className="titleFiscalYear">
                      3. อนุมัติจัดซื้อจัดจ้าง
                    </td>
                    {imofy[2].map((i) => {
                      return (
                        <td
                          key={i.key}
                          className={
                            "itemMonthFiscalYear " +
                            (i.data.length > 0 &&
                            i.data.some(
                              (j) =>
                                j.fiscal_year ==
                                procurementStore.obj.fiscal_year
                            )
                              ? "hasData"
                              : "")
                          }
                          id={i.key}
                        ></td>
                      );
                    })}
                  </tr>
                  <tr>
                    <td className="titleFiscalYear">
                      4. ทำสัญญาจัดซื้อ/จัดจ้าง
                    </td>
                    {imofy[3].map((i) => {
                      return (
                        <td
                          key={i.key}
                          className={
                            "itemMonthFiscalYear " +
                            (i.data.length > 0 &&
                            i.data.some(
                              (j) =>
                                j.fiscal_year ==
                                procurementStore.obj.fiscal_year
                            )
                              ? "hasData"
                              : "")
                          }
                          id={i.key}
                        ></td>
                      );
                    })}
                  </tr>
                  <tr>
                    <td className="titleFiscalYear">
                      5. ดำเนินงานตามเงื่อนไขของสัญญา/
                      <br />
                      ส่งมอบงานงวดต่างๆ
                    </td>
                    {imofy[4].map((i) => {
                      return (
                        <td
                          key={i.key}
                          className={
                            "itemMonthFiscalYear " +
                            (i.data.length > 0 &&
                            i.data.some(
                              (j) =>
                                j.fiscal_year ==
                                procurementStore.obj.fiscal_year
                            )
                              ? "hasData"
                              : "")
                          }
                          id={i.key}
                        ></td>
                      );
                    })}
                  </tr>
                  <tr>
                    <td className="titleFiscalYear">
                      6. วันที่สิ้นสุดสัญญา/วันที่แล้วเสร็จ
                    </td>
                    {imofy[5].map((i) => {
                      return (
                        <td
                          key={i.key}
                          className={
                            "itemMonthFiscalYear " +
                            (i.data.length > 0 &&
                            i.data.some(
                              (j) =>
                                j.fiscal_year ==
                                procurementStore.obj.fiscal_year
                            )
                              ? "hasData"
                              : "")
                          }
                          id={i.key}
                        ></td>
                      );
                    })}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
