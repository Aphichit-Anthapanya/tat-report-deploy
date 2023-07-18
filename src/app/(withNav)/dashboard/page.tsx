"use client";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { MyContext } from "../../MyContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Bar, Pie } from "react-chartjs-2";
import { Chart, ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend, ChartDataLabels);

const pieLabels = ["ดำเนินการแล้วเสร็จสิ้น", "ระหว่างดำเนินการ", "ยังไม่ดำเนินการ"];
const pieData = {
  labels: pieLabels,
  datasets: [{
    label: "Percentage",
    data: [12, 19, 3],
    backgroundColor: [
      "rgba(255, 99, 132, 0.2)",
      "rgba(255, 159, 64, 0.2)",
      "rgba(255, 206, 86, 0.2)",
    ],
    borderColor: [
      "rgba(255, 99, 132, 1)",
      "rgba(255, 159, 64, 1)",
      "rgba(255, 206, 86, 1)",
    ],
    borderWidth: 1,
  }],
};

const barLabels = ["1", "2", "3", "4", "5", "6"];
const barData = {
  labels: barLabels,
  datasets: [{
    data: [65, 59, 83, 89, 76, 55],
    backgroundColor: [
      "rgba(255, 99, 132, 0.2)",
      "rgba(255, 159, 64, 0.2)",
      "rgba(255, 205, 86, 0.2)",
      "rgba(75, 192, 192, 0.2)",
      "rgba(54, 162, 235, 0.2)",
      "rgba(153, 102, 255, 0.2)",
    ],
    borderColor: [
      "rgb(255, 99, 132)",
      "rgb(255, 159, 64)",
      "rgb(255, 205, 86)",
      "rgb(75, 192, 192)",
      "rgb(54, 162, 235)",
      "rgb(153, 102, 255)",
    ],
    borderWidth: 1,
  }]
};

export default function DashboardPage() {
  const { navId, changeNavHandle } = useContext(MyContext);
  const [selectedYear, setSelectedYear] = useState<number | undefined>(undefined);

  useEffect(() => {
    changeNavHandle(1);
  }, []);

  const projectData = [
    { id: 1, section: "ตัวชี้วัดตามบันทึกข้อตกลง", count: "", finish: "0%", process: "0", radio: "0%" },
    { id: 2, section: "หน่วยงานผู้ว่าการ", count: "", finish: "0%", process: "0", radio: "0%" },
    { id: 3, section: "ด้านบริหาร", count: "", finish: "0%", process: "0", radio: "0%" },
    { id: 4, section: "ด้านนโยบาย และแผน", count: "", finish: "0%", process: "0", radio: "0%" },
  ];

  const projectItemsPerPage = 5;
  const [projectCurrentPage, setProjectCurrentPage] = React.useState(1);
  const projectTotalPages = Math.ceil(projectData.length / projectItemsPerPage);
  const projectStartIndex = (projectCurrentPage - 1) * projectItemsPerPage;
  const projectEndIndex = projectStartIndex + projectItemsPerPage;
  const currentProjectData = projectData.slice(projectStartIndex, projectEndIndex);

  const marketData = [
    { id: 1, section: "ตัวชี้วัดตามบันทึกข้อตกลง", radioResultPerYear: "0%", collectTnaimat: "50,000", resultCollectTnaimat: "0", radioResultPerTnaimat: "0%" },
    { id: 2, section: "หน่วยงานผู้ว่าการ", radioResultPerYear: "0%", collectTnaimat: "50,000", resultCollectTnaimat: "0", radioResultPerTnaimat: "0%" },
    { id: 3, section: "ด้านบริหาร", radioResultPerYear: "0%", collectTnaimat: "50,000", resultCollectTnaimat: "0", radioResultPerTnaimat: "0%" },
    { id: 4, section: "ด้านนโยบาย", radioResultPerYear: "0%", collectTnaimat: "50,000", resultCollectTnaimat: "0", radioResultPerTnaimat: "0%" },
    { id: 5, section: "ด้านนโยบาย", radioResultPerYear: "0%", collectTnaimat: "50,000", resultCollectTnaimat: "0", radioResultPerTnaimat: "0%" },
    { id: 6, section: "ด้านนโยบาย", radioResultPerYear: "0%", collectTnaimat: "50,000", resultCollectTnaimat: "0", radioResultPerTnaimat: "0%" },
    { id: 7, section: "ด้านนโยบาย", radioResultPerYear: "0%", collectTnaimat: "50,000", resultCollectTnaimat: "0", radioResultPerTnaimat: "0%" },
    { id: 8, section: "ด้านนโยบาย", radioResultPerYear: "0%", collectTnaimat: "50,000", resultCollectTnaimat: "0", radioResultPerTnaimat: "0%" },
    { id: 9, section: "ด้านนโยบาย", radioResultPerYear: "0%", collectTnaimat: "50,000", resultCollectTnaimat: "0", radioResultPerTnaimat: "0%" },
  ];

  const marketItemsPerPage = 5;
  const [marketCurrentPage, setMarketCurrentPage] = React.useState(1);
  const marketTotalPages = Math.ceil(marketData.length / marketItemsPerPage);
  const marketStartIndex = (marketCurrentPage - 1) * marketItemsPerPage;
  const marketEndIndex = marketStartIndex + marketItemsPerPage;
  const currentMarketData = marketData.slice(marketStartIndex, marketEndIndex);

  const handleProjectPageChange = (page: number) => {
    setProjectCurrentPage(page);
  };

  const handleMarketPageChange = (page: number) => {
    setMarketCurrentPage(page);
  };

  const handleYearChange = (dateString: any) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    setSelectedYear(year);
  };

  return (
    <div className="container" style={{
      paddingTop: "4vh"
    }}>

      <div className="d-flex justify-content-center text-center">
        <div className="form-label">
          <label>ปีงบประมาณ:</label>
        </div>
        <div className="mx-3" style={{ lineHeight: "2" }}>
          <DatePicker
            // selected={selectedYear}
            onChange={handleYearChange}
            dateFormat="yyyy"
            showYearPicker
            customInput={
              <div className="input-group">
                <input
                  value={selectedYear}
                  placeholder="Select Year"
                  type="text"
                  className="form-control"
                />
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="bi bi-calendar"></i>
                  </span>
                </div>
              </div>
            }
          />
        </div>
        <button type="button" className="btn btn-primary">
          <i className="bi bi-journal-text"></i> View Report
        </button>
      </div>
      <br />
      <br />

      <div style={{ display: "grid", gridTemplateColumns: "12fr 4fr", gap: "15px" }}>

        <div style={{ boxShadow: "0 1px 4px 3px rgba(0, 0, 0, 0.1)", padding: "20px", borderRadius: "4px" }}>
          <div className="row">
            <div className="col-md-6">
              <h5>ภาพรวมความคืบหน้าการดำเนินโครงการ</h5>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-end">
                <div className="mx-3" style={{ lineHeight: "2" }}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ทุกหน่วยงาน"
                    id="section-search"
                  />
                </div>
                <button type="button" className="btn btn-primary">
                  <i className="bi bi-funnel"></i> ค้นหา
                </button>
              </div>
            </div>
          </div>
          <br />

          <table className="table table-striped">
            <thead style={{ borderCollapse: "collapse" }}>
              <tr>
                <th style={{ backgroundColor: "#ceeffe", color: "#6e6893", padding: "10px" }}>ลำดับ</th>
                <th style={{ backgroundColor: "#ceeffe", color: "#6e6893", padding: "10px" }}>หน่วยงาน</th>
                <th style={{ backgroundColor: "#ceeffe", color: "#6e6893", padding: "10px" }}>จำนวนโครงการ</th>
                <th style={{ backgroundColor: "#ceeffe", color: "#6e6893", padding: "10px" }}>ดำเนินการแล้วเสร็จ</th>
                <th style={{ backgroundColor: "#ceeffe", color: "#6e6893", padding: "10px" }}>ระหว่างดำเนินการ</th>
                <th style={{ backgroundColor: "#ceeffe", color: "#6e6893", padding: "10px" }}>ร้อยละระหว่างดำเนินการ</th>
              </tr>
            </thead>
            <tbody style={{ backgroundColor: "red" }}>
              {currentProjectData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.section}</td>
                  <td>{item.count}</td>
                  <td>{item.finish}</td>
                  <td>{item.process}</td>
                  <td>{item.radio}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <nav>
            <ul className="pagination justify-content-end" style={{ backgroundColor: "#f4f2ff" }}>
              <li className={`page-item ${projectCurrentPage === 1 ? "disabled" : ""}`}>
                <a
                  className="page-link"
                  style={{ backgroundColor: "transparent", borderColor: "transparent" }}
                  onClick={() => handleProjectPageChange(projectCurrentPage - 1)}
                >
                  <i className="bi bi-chevron-left" style={{ color: "#6e6893" }}></i>
                </a>
              </li>
              {/* {Array.from({ length: projectTotalPages }).map((_, index) => (
                <li
                  key={index}
                  className={`page-item ${projectCurrentPage === index + 1 ? "active" : ""}`}
                >
                  <a
                    className="page-link"
                    style={{ backgroundColor: "transparent", borderColor: "transparent", color: "#6e6893" }}
                    onClick={() => handleProjectPageChange(index + 1)}
                  >
                    {index + 1}
                  </a>
                </li>
              ))} */}
              <li className={`page-item ${projectCurrentPage === projectTotalPages ? "disabled" : ""}`}>
                <a
                  className="page-link"
                  style={{ backgroundColor: "transparent", borderColor: "transparent" }}
                  onClick={() => handleProjectPageChange(projectCurrentPage + 1)}
                >
                  <i className="bi bi-chevron-right" style={{ color: "#6e6893" }}></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div style={{ boxShadow: "0 1px 4px 3px rgba(0, 0, 0, 0.1)", padding: "20px", borderRadius: "4px" }}>
          <h6>ภาพรวมความคืบหน้าการดำเนินโครงการ</h6>
          <br />
          <Pie
            data={pieData}
            options={{
              maintainAspectRatio: true,
              plugins: {
                legend: {
                  display: true,
                  position: "bottom",
                },
                datalabels: {
                  // anchor: "center",
                  // formatter: ((context: any, args: any) => {
                  //   const index = args.dataIndex;
                  //   return `${args.chart.data.[index]}`;
                  // }),
                  formatter: (val, ctx: any) => {
                    // Grab the label for this value
                    const label = ctx.chart.data.labels[ctx.dataIndex];
          
                    // Format the number with 2 decimal places
                    const formattedVal = Intl.NumberFormat('en-US', {
                      minimumFractionDigits: 2,
                    }).format(val);
          
                    // Put them together
                    return `${label}: ${formattedVal}%`;
                  },
                  color: '#fff',
                  backgroundColor: '#404040',
                },
              }
            }}
          />
        </div>

        <div style={{ boxShadow: "0 1px 4px 3px rgba(0, 0, 0, 0.1)", padding: "20px", borderRadius: "4px" }}>
          <div className="row">
            <div className="col-md-6">
              <h5>ตลาดต่างประเทศ จำนวนการรับรู้</h5>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-primary">
                  <i className="bi bi-funnel"></i> ค้นหา
                </button>
              </div>
            </div>
          </div>
          <br />

          <table className="table table-striped">
            <thead style={{ borderCollapse: "collapse" }}>
              <tr>
                <th style={{ backgroundColor: "#ceeffe", color: "#6e6893", padding: "10px" }}>ลำดับ</th>
                <th style={{ backgroundColor: "#ceeffe", color: "#6e6893", padding: "10px" }}>สำนักงาน/กองงาน/กลุ่มงาน</th>
                <th style={{ backgroundColor: "#ceeffe", color: "#6e6893", padding: "10px" }}>ร้อยละผลเทียบเป้าปี</th>
                <th style={{ backgroundColor: "#ceeffe", color: "#6e6893", padding: "10px" }}>เป้าสะสมไตรมาส</th>
                <th style={{ backgroundColor: "#ceeffe", color: "#6e6893", padding: "10px" }}>ผลสะสมไตรมาส</th>
                <th style={{ backgroundColor: "#ceeffe", color: "#6e6893", padding: "10px" }}>ร้อยละผลเทียบเป้าไตรมาส</th>
              </tr>
            </thead>
            <tbody style={{ backgroundColor: "red" }}>
              {currentMarketData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.section}</td>
                  <td>{item.radioResultPerYear}</td>
                  <td>{item.collectTnaimat}</td>
                  <td>{item.resultCollectTnaimat}</td>
                  <td>{item.radioResultPerTnaimat}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <nav>
            <ul className="pagination justify-content-end" style={{ backgroundColor: "#f4f2ff" }}>
              <div style={{ height: "auto", display: "flex", alignItems: "center", color: "#6e6893" }}>
                จำนวนหน้า {marketStartIndex + 1}-{marketCurrentPage * marketItemsPerPage} of {marketData.length}
              </div>
              <li className={`page-item ${marketCurrentPage === 1 ? "disabled" : ""}`}>
                <a
                  className="page-link"
                  style={{ backgroundColor: "transparent", borderColor: "transparent" }}
                  onClick={() => handleMarketPageChange(marketCurrentPage - 1)}
                >
                  <i className="bi bi-chevron-left" style={{ color: "#6e6893" }}></i>
                </a>
              </li>
              {/* {Array.from({ length: marketTotalPages }).map((_, index) => (
                <li
                  key={index}
                  className={`page-item ${marketCurrentPage === index + 1 ? "active" : ""}`}
                >
                  <a
                    className="page-link"
                    style={{ backgroundColor: "transparent", borderColor: "transparent", color: "#6e6893" }}
                    onClick={() => handleMarketPageChange(index + 1)}
                  >
                    {index + 1}
                  </a>
                </li>
              ))} */}
              <li className={`page-item ${marketCurrentPage === marketTotalPages ? "disabled" : ""}`}>
                <a
                  className="page-link"
                  style={{ backgroundColor: "transparent", borderColor: "transparent" }}
                  onClick={() => handleMarketPageChange(marketCurrentPage + 1)}
                >
                  <i className="bi bi-chevron-right" style={{ color: "#6e6893" }}></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div style={{ boxShadow: "0 1px 4px 3px rgba(0, 0, 0, 0.1)", padding: "20px", borderRadius: "4px" }}>
          <h5>ตลาดต่างประเทศ จำนวนการรับรู้</h5>
          <br />
          <br />
          <p>ล้านบาท</p>
            <Bar
              data={barData}
              options={{
                maintainAspectRatio: true,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
              }}
            />
          <p className="text-center">รายไตรมาส</p>
          </div>

        <style
          jsx>{`
            .page-link:hover {
              cursor: pointer;
            }
            .table-container {
              min-weight: 300px;
              overflow-y: auto;
            }
          `}
        </style>
      </div>
    </div>
  );
}
