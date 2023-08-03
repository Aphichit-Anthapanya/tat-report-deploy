"use client";

import "@components/Activities/activities-add.scss";
import Activities from "@components/Activities/Activities";
import AddActivities from "@components/Activities/Add-Activities";
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

// Bar-Chart (Quarter)
const barLabels = ["1", "2", "3", "4"];
const barData = {
  labels: barLabels,
  datasets: [{
    label:"แผน",
    data: [12, 83, 89, 99],
    backgroundColor: [
      "rgba(255, 99, 132, 0.2)",
      "rgba(255, 99, 132, 0.2)",
      "rgba(255, 99, 132, 0.2)",
      "rgba(255, 99, 132, 0.2)"
    ],
    borderColor: [
      "rgb(255, 99, 132)",
      "rgb(255, 99, 132)",
      "rgb(255, 99, 132)",
      "rgb(255, 99, 132)"
    ],
    borderWidth: 2,
  }, {
    label:"ผล",
    data: [12, 83, 89, 99],
    backgroundColor: [
      "rgba(75, 192, 192, 0.2)",
      "rgba(75, 192, 192, 0.2)",
      "rgba(75, 192, 192, 0.2)",
      "rgba(75, 192, 192, 0.2)"
    ],
    borderColor: [
      "rgb(75, 192, 192)",
      "rgb(75, 192, 192)",
      "rgb(75, 192, 192)",
      "rgb(75, 192, 192)"
    ],
    borderWidth: 2,
  }]
};

// Bar-Chart (Month)
const barLabels2 = ["ต.ค.", "พ.ย.", "ธ.ค.", "ม.ค.","ก.พ.", "มี.ค.", "เม.ย", "พ.ค.","มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย."];
const barData2 = {
  labels: barLabels2,
  datasets: [{
    label:"แผน",
    data: [65, 59, 83, 89,65, 59, 83, 89,65, 59, 83, 89],
    backgroundColor: [
      "rgba(255, 99, 132, 0.2)",
      "rgba(255, 99, 132, 0.2)",
      "rgba(255, 99, 132, 0.2)",
      "rgba(255, 99, 132, 0.2)",
      "rgba(255, 99, 132, 0.2)",
      "rgba(255, 99, 132, 0.2)",
      "rgba(255, 99, 132, 0.2)",
      "rgba(255, 99, 132, 0.2)",
      "rgba(255, 99, 132, 0.2)",
      "rgba(255, 99, 132, 0.2)",
      "rgba(255, 99, 132, 0.2)",
      "rgba(255, 99, 132, 0.2)"
    ],
    borderColor: [
      "rgb(255, 99, 132)",
      "rgb(255, 99, 132)",
      "rgb(255, 99, 132)",
      "rgb(255, 99, 132)",
      "rgb(255, 99, 132)",
      "rgb(255, 99, 132)",
      "rgb(255, 99, 132)",
      "rgb(255, 99, 132)",
      "rgb(255, 99, 132)",
      "rgb(255, 99, 132)",
      "rgb(255, 99, 132)",
      "rgb(255, 99, 132)"
    ],
    borderWidth: 2,
  }, {
    label:"ผล",
    data: [65, 59, 83, 89,65, 59, 83, 89,65, 59, 83, 89],
    backgroundColor: [
      "rgba(75, 192, 192, 0.2)",
      "rgba(75, 192, 192, 0.2)",
      "rgba(75, 192, 192, 0.2)",
      "rgba(75, 192, 192, 0.2)",
      "rgba(75, 192, 192, 0.2)",
      "rgba(75, 192, 192, 0.2)",
      "rgba(75, 192, 192, 0.2)",
      "rgba(75, 192, 192, 0.2)",
      "rgba(75, 192, 192, 0.2)",
      "rgba(75, 192, 192, 0.2)",
      "rgba(75, 192, 192, 0.2)",
      "rgba(75, 192, 192, 0.2)"
    ],
    borderColor: [
      "rgb(75, 192, 192)",
      "rgb(75, 192, 192)",
      "rgb(75, 192, 192)",
      "rgb(75, 192, 192)",
      "rgb(75, 192, 192)",
      "rgb(75, 192, 192)",
      "rgb(75, 192, 192)",
      "rgb(75, 192, 192)",
      "rgb(75, 192, 192)",
      "rgb(75, 192, 192)",
      "rgb(75, 192, 192)",
      "rgb(75, 192, 192)"
    ],
    borderWidth: 2,
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
        <>
            <div className='d-flex flex-column' style={{width: '100%'}}>
                <div className="breadcrumb-zone"><span className="bread-crumb-page-name"><b>Dashboard</b></span></div>
                    <div className='search-wrapper-section d-flex flex-column'>
                        <div className="content-search-box d-flex p-2 justify-content-center align-items-center">
                                <div className="purchase-report">
                                    <label>ปีงบประมาณ:</label>
                                </div>
                                <div className="purchase-report">
                                    <div className="filter-field">
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>2566</option>
                                            <option value="2">2565</option>
                                            <option value="3">2564</option>
                                            <option value="4">2563</option>
                                            <option value="5">2562</option>
                                            <option value="6">2561</option>
                                            <option value="7">2560</option>
                                            <option value="8">2559</option>
                                            <option value="9">2558</option>
                                        </select>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className='search-wrapper-section d-flex flex-column'>
                    <h6>ภาพรวมความคืบหน้าการดำเนินโครงการ</h6>
                        <div className="d-flex flex-row justify-content-center justify-content-around align-items-center">                        
                          <div className="d-flex justify-content-center align-items-center">
                              <div className="mr-10">
                                  <label>หน่วยงาน:</label>
                              </div>
                              <div className="pie-chart-box">
                                  <div className="filter-field">
                                      <select className="form-select" aria-label="Default select example">
                                          <option selected>2566</option>
                                          <option value="2">2565</option>
                                          <option value="3">2564</option>
                                          <option value="4">2563</option>
                                          <option value="5">2562</option>
                                          <option value="6">2561</option>
                                          <option value="7">2560</option>
                                          <option value="8">2559</option>
                                          <option value="9">2558</option>
                                      </select>
                                  </div>
                              </div>
                          </div>

                          <div className="mt-10 pie-chart">
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
                        </div>

                        <div className="mt-50 d-flex flex-row justify-content-center justify-content-around align-items-center">                        
                          <div className="d-flex justify-content-center align-items-center">
                              <div className="mr-10">
                                  <label>แหล่งงบประมาณ:</label>
                              </div>
                              <div className="pie-chart-box">
                                  <div className="filter-field">
                                      <select className="form-select" aria-label="Default select example">
                                          <option selected>2566</option>
                                          <option value="2">2565</option>
                                          <option value="3">2564</option>
                                          <option value="4">2563</option>
                                          <option value="5">2562</option>
                                          <option value="6">2561</option>
                                          <option value="7">2560</option>
                                          <option value="8">2559</option>
                                          <option value="9">2558</option>
                                      </select>
                                  </div>
                              </div>
                          </div>

                          <div className="mt-10 pie-chart">
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
                        </div>                          
                    </div>

                    <div className='search-wrapper-section d-flex flex-column'>
                    <h2>แผนเทียบผล</h2>
                      <h4>การใช้งบประมาณ</h4>
                        <div className="d-flex flex-column justify-content-center justify-content-around align-items-center">                       
                        
                          <div className="mt-20 d-flex flex-row justify-content-around align-items-center">
                              <div className="mr-10"><p>บาท</p></div>
                              <div className="d-flex flex-column justify-content-around align-items-center">
                                  <div className="bar-chart-quarter">
                                      <Bar
                                        data={barData}
                                        options={{
                                          maintainAspectRatio: true,
                                          plugins: {
                                            legend: {
                                              display: true,
                                              position: "top"
                                            },
                                          },
                                        }}
                                      />
                                  </div>
                                  <p className="text-center">ไตรมาส</p>
                              </div>
                          </div>

                          <div className="mt-20 d-flex flex-row justify-content-around align-items-center">
                              <div className="mr-10"><p>บาท</p></div>
                              <div className="d-flex flex-column justify-content-around align-items-center">
                                  <div className="bar-chart-month">
                                      <Bar
                                        data={barData2}
                                        options={{
                                          maintainAspectRatio: true,
                                          plugins: {
                                            legend: {
                                              display: true,
                                              position: "top"
                                            },
                                          },
                                        }}
                                      />
                                  </div>
                                  <p className="text-center">เดือน</p>
                              </div>
                          </div>
                        </div>

                        <h4 className="mt-50">เป้าหมาย/ตัวชี้วัด</h4>
                        <h6>จำนวนการรับรู้</h6>
                        <div className="d-flex flex-column justify-content-center justify-content-around align-items-center">                       
                            <div className="mt-20 d-flex flex-row justify-content-around align-items-center">
                                <div className="mr-10"><p>คน-ครั้ง</p></div>
                                <div className="d-flex flex-column justify-content-around align-items-center">
                                    <div className="bar-chart-quarter">
                                        <Bar
                                          data={barData}
                                          options={{
                                            maintainAspectRatio: true,
                                            plugins: {
                                              legend: {
                                                display: true,
                                                position: "top"
                                              },
                                            },
                                          }}
                                        />
                                    </div>
                                    <p className="text-center">ไตรมาส</p>
                                </div>
                            </div>

                            <div className="mt-20 d-flex flex-row justify-content-around align-items-center">
                              <div className="mr-10"><p>คน-ครั้ง</p></div>
                              <div className="d-flex flex-column justify-content-around align-items-center">
                                  <div className="bar-chart-month">
                                      <Bar
                                        data={barData2}
                                        options={{
                                          maintainAspectRatio: true,
                                          plugins: {
                                            legend: {
                                              display: true,
                                              position: "top"
                                            },
                                          },
                                        }}
                                      />
                                  </div>
                                  <p className="text-center">เดือน</p>
                              </div>
                            </div>
                        </div>

                        <h6>จำนวนพันธมิตร</h6>
                        <div className="d-flex flex-column justify-content-center justify-content-around align-items-center">                       
                            <div className="mt-20 d-flex flex-row justify-content-around align-items-center">
                                <div className="mr-10"><p>คน-ครั้ง</p></div>
                                <div className="d-flex flex-column justify-content-around align-items-center">
                                    <div className="bar-chart-quarter">
                                        <Bar
                                          data={barData}
                                          options={{
                                            maintainAspectRatio: true,
                                            plugins: {
                                              legend: {
                                                display: true,
                                                position: "top"
                                              },
                                            },
                                          }}
                                        />
                                    </div>
                                    <p className="text-center">ไตรมาส</p>
                                </div>
                            </div>

                            <div className="mt-20 d-flex flex-row justify-content-around align-items-center">
                              <div className="mr-10"><p>คน-ครั้ง</p></div>
                              <div className="d-flex flex-column justify-content-around align-items-center">
                                  <div className="bar-chart-month">
                                      <Bar
                                        data={barData2}
                                        options={{
                                          maintainAspectRatio: true,
                                          plugins: {
                                            legend: {
                                              display: true,
                                              position: "top"
                                            },
                                          },
                                        }}
                                      />
                                  </div>
                                  <p className="text-center">เดือน</p>
                              </div>
                          </div>
                        </div>

                        <h6>PAX(จำนวนผู้ซื้อสินค้า)</h6>
                        <div className="d-flex flex-column justify-content-center justify-content-around align-items-center">                       
                            <div className="mt-20 d-flex flex-row justify-content-around align-items-center">
                                <div className="mr-10"><p>คน-ครั้ง</p></div>
                                <div className="d-flex flex-column justify-content-around align-items-center">
                                    <div className="bar-chart-quarter">
                                        <Bar
                                          data={barData}
                                          options={{
                                            maintainAspectRatio: true,
                                            plugins: {
                                              legend: {
                                                display: true,
                                                position: "top"
                                              },
                                            },
                                          }}
                                        />
                                    </div>
                                    <p className="text-center">ไตรมาส</p>
                                </div>
                            </div>

                            <div className="mt-20 d-flex flex-row justify-content-around align-items-center">
                              <div className="mr-10"><p>คน-ครั้ง</p></div>
                              <div className="d-flex flex-column justify-content-around align-items-center">
                                  <div className="bar-chart-month">
                                      <Bar
                                        data={barData2}
                                        options={{
                                          maintainAspectRatio: true,
                                          plugins: {
                                            legend: {
                                              display: true,
                                              position: "top"
                                            },
                                          },
                                        }}
                                      />
                                  </div>
                                  <p className="text-center">เดือน</p>
                              </div>
                          </div>
                        </div>                         
                    </div>
            </div>                
        </>
    )
}