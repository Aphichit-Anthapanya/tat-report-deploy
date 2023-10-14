"use client";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { MyContext } from "../../MyContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Bar, Pie } from "react-chartjs-2";
import { Chart, ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend,);

const departments = [
      "กองเลขานุการและวิเทศสัมพันธ์",
      "กองบริหารความยั่งยืน",
      "กองตรวจสอบส่วนกลาง",
      "กองตรวจสอบสำนักงานสาขา",
      "กองกลาง", 
      "กองกฎหมายและระเบียบ",
      "กองนิติและคดี",
      "กองบริหารจัดซื้อจัดจ้าง",
      "กองอาคารและสถานที่",
      "กองบริหารงานบุคคล",
      "กองพัฒนาบุคคล",
      "กองสวัสดิการและบุคลากรสัมพันธ์",
      "กองบัญชี",
      "กองงบประมาณ",
      "กองตรวจจ่าย",
      "กองการเงิน",
      "กองรายได้",
      "กองแผนนโยบาย",
      "กองกลยุทธ์การตลาด",
      "กองบริหารความเสี่ยง",
      "กองติดตามและประเมินผล",
      "กองยุทธศาสตร์ดิจิทัล",
      "กองงบกองพัฒนาระบบประมาณ",
      "กองสารสนเทศการตลาด",
      "กองคอมพิวเตอร์และระบบเครือข่าย",
      "กองวิจัยการตลาดการท่องเที่ยว",
      "ศูนย์ฝึกอบรมการท่องเที่ยวแห่งประเทศไทย",
      "กองวางแผนสินค้าการท่องเที่ยว",
      "กองสร้างสรรค์สินค้าการท่องเที่ยว",
      "กองส่งเสริมสินค้าการท่องเที่ยว",
      "กองส่งเสริมกิจกรรม",
      "กองสร้างสรรค์กิจกรรม",
      "กองวางแผนลงทุนอุตสาหกรรมท่องเที่ยว",
      "กองนวัตกรรมอุตสาหกรรมท่องเที่ยว",
      "กองตลาดภาคเหนือ",
      "กองตลาดภาคกลาง",
      "กองตลาดภาคตะวันออกเฉียงเหนือ",
      "กองตลาดภาคใต้",
      "กองตลาดภาคตะวันออก",
      "กองเอเชียตะวันออก",
      "กองตลาดอาเซียน เอเชียใต้ และแปซิฟิก",
      "กองตลาดยุโรป แอฟริกา และตะวันออกกลาง",
      "กองตลาดอเมริกา",
      "กองเผยแพร่โฆษณาต่างประเทศ",
      "กองเผยแพร่โฆษณาในประเทศ",
      "กองประชาสัมพันธ์ต่างประเทศ",
      "กองประชาสัมพันธ์ในประเทศ",
      "กองวางแผนและผลิตสื่อ",
      "กองข่าวสารท่องเที่ยว",
      "กองวารสาร"
];

const budgetFrom = ["บ7 พัฒนาคลังข้อมูล", "ผ3.3 การศึกษาเพื่อพัฒนาการตลาดการท่องเที่ยว", "ผ3.3 การศึกษาเพื่อพัฒนาการตลาดการท่องเที่ยว", "ผ3.7 พัฒนาต่อยอดธุรกิจทางการท่องเที่ยว", "ผ3.4 เพิ่มประสิทธิภาพของบุคลากร",
"ผ3.4 เพิ่มประสิทธิภาพของบุคลากร", "ผ3.5 เพิ่มประสิทธิภาพการบริหารจัดการองค์กร", "ผ3.2 พัฒนาระบบสารสนเทศ", "บ13 สร้างสรรค์นวัตกรรมและเพิ่มมูลค่าวิถีไทย", "ผ3.5 เพิ่มประสิทธิภาพการบริหารจัดการองค์กร",
"ผ3.1 จัดทำยุทธศาสตร์และแผนการตลาดการท่องเที่ยว", "ผ3.5 เพิ่มประสิทธิภาพการบริหารจัดการองค์กร", "ผ3.5 เพิ่มประสิทธิภาพการบริหารจัดการองค์กร", "ผ3.6 เสริมสร้างการทำงานตามหลักธรรมาภิบาล และการแสดงความรับผิดชอบต่อสังคม"]

var dataListsPlan = [] as any;
var dataListsResult = [] as any;
var dataListsPie = [] as any;
var dataListsPie2 = [] as any;
var dataListVisiterPlan = [] as any;
var dataListVisiterResult = [] as any;
var dataListAlliesPlan = [] as any; 
var dataListAlliesResult = [] as any; 
var dataListPaxPlan = [] as any; 
var dataListPaxResult = [] as any;
var dataListVisiterPlan12M = [] as any;
var dataListVisiterResult12M = [] as any;
var dataListAlliesPlan12M = [] as any; 
var dataListAlliesResult12M = [] as any; 
var dataListPaxPlan12M = [] as any; 
var dataListPaxResult12M = [] as any;   
var dataListsPlan12M = [] as any;
var dataListsResult12M = [] as any;

export default function DashboardPage() {

  const color4plan = [
    "rgba(255, 99, 132, 0.2)",
    "rgba(255, 99, 132, 0.2)",
    "rgba(255, 99, 132, 0.2)",
    "rgba(255, 99, 132, 0.2)",
  ];
  const color4Result = ["rgb(75, 192, 192)",
  "rgb(75, 192, 192)",
  "rgb(75, 192, 192)",
  "rgb(75, 192, 192)"];
  const colorPlan = [
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
];
const colorResult = [
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
];
const barLabels2 = ["ต.ค.", "พ.ย.", "ธ.ค.", "ม.ค.","ก.พ.", "มี.ค.", "เม.ย", "พ.ค.","มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย."];
  const barLabels = ["1", "2", "3", "4"];
  const [selectedValueBar, setSelectedValueBar] = useState("1");
  var dataListBarState, dataListBarQState, dataListBarAState, dataListBarPAXState, dataListBar12MState, dataListBarG12MState, dataListBarA12MState, dataListBarPAX12MState;
  
  const handleDropdownBar = (e : any) => {
    const {name, value} = e.target;
    if(value == "1") {
      // Budget
      dataListBarState = [{
        label:"แผน",
        data: [12, 83, 89, 99],
        backgroundColor: color4plan,
        borderColor: color4plan,
        borderWidth: 2,
      }, {
        label:"ผล",
        data: [24, 45, 55, 70],
        backgroundColor: color4Result,
        borderColor: color4Result,
        borderWidth: 2,
      }]
      setbarDataState({
        ...barDataState,
        datasets: dataListBarState
      }),

      //Quater
      dataListBarQState = [{
        label:"แผน",
        data: [76, 23, 87, 56],
        backgroundColor: color4plan,
        borderColor: color4plan,
        borderWidth: 2,
      }, {
        label:"ผล",
        data: [95, 21, 45, 70],
        backgroundColor: color4Result,
        borderColor: color4Result,
        borderWidth: 2,
      }]
      setbarDataGState({
        ...barDataGState,
        datasets: dataListBarQState
      }),

      //Allies
      dataListBarAState = [{
        label:"แผน",
        data: [67, 54, 87, 61],
        backgroundColor: color4plan,
        borderColor: color4plan,
        borderWidth: 2,
      }, {
        label:"ผล",
        data: [88, 42, 63, 98],
        backgroundColor: color4Result,
        borderColor: color4Result,
        borderWidth: 2,
      }]
      setbarDataAState({
        ...barDataAState,
        datasets: dataListBarAState
      }),

      //PAX
      dataListBarPAXState = [{
        label:"แผน",
        data: [87, 42, 63, 89],
        backgroundColor: color4plan,
        borderColor: color4plan,
        borderWidth: 2,
      }, {
        label:"ผล",
        data: [65, 80, 67, 43],
        backgroundColor: color4Result,
        borderColor: color4Result,
        borderWidth: 2,
      }]
      setbarDataPAXState({
        ...barDataPAXState,
        datasets: dataListBarPAXState
      })
      
      //Budget12M
      dataListBarG12MState = [{
        label:"แผน",
        data: [76, 23, 87, 56, 95, 21, 45, 70, 87, 42, 63, 89],
        backgroundColor: colorPlan,
        borderColor: colorPlan,
        borderWidth: 2,
        }, {
        label:"ผล",
        data: [95, 21, 45, 70, 65, 80, 67, 43, 67, 54, 87, 61],
        backgroundColor: colorResult,
        borderColor: colorResult,
        borderWidth: 2,
      }]
      setbarDataBar12MState({
        ...barDataBar12MState,
        datasets: dataListBarG12MState
      }),

      //G12M
      dataListBarG12MState = [{
        label:"แผน",
        data: [76, 23, 87, 56, 95, 21, 45, 70, 87, 42, 63, 89],
        backgroundColor: colorPlan,
        borderColor: colorPlan,
        borderWidth: 2,
      }, {
        label:"ผล",
        data: [95, 21, 45, 70, 65, 80, 67, 43, 67, 54, 87, 61],
        backgroundColor: colorResult,
        borderColor: colorResult,
        borderWidth: 2,
      }]
      setbarDataG12MState({
        ...barDataG12MState,
        datasets: dataListBarG12MState
      }),

      //A12M
      dataListBarA12MState = [{
        label:"แผน",
        data: [67, 54, 87, 61, 65, 80, 67, 43, 70, 65, 80, 67],
        backgroundColor: colorPlan,
        borderColor: colorPlan,
        borderWidth: 2,
      }, {
        label:"ผล",
        data: [88, 42, 63, 98, 45, 55, 70, 95, 21, 99, 24, 45],
        backgroundColor: colorResult,
        borderColor: colorResult,
        borderWidth: 2,
      }]
      setbarDataA12MState({
        ...barDataA12MState,
        datasets: dataListBarA12MState
      }),

      //PAX12M
      dataListBarPAX12MState = [{
        label:"แผน",
        data: [87, 42, 63, 89, 70, 95, 21, 99, 24, 45, 67, 54],
        backgroundColor: colorPlan,
        borderColor: colorPlan,
        borderWidth: 2,
      }, {
        label:"ผล",
        data: [65, 80, 67, 43, 25, 36, 65, 87, 86, 63, 14, 53],
        backgroundColor: colorResult,
        borderColor: colorResult,
        borderWidth: 2,
      }]
      setbarDataPAX12MState({
        ...barDataPAX12MState,
        datasets: dataListBarPAX12MState
      });
      
    } else if(value == "2") {
      // Budget
      dataListBarState = [{
        label:"แผน",
        data: [83, 27, 40, 60],
        backgroundColor: color4plan,
        borderColor: color4plan,
        borderWidth: 2,
      }, {
        label:"ผล",
        data: [52, 12, 69, 80],
        backgroundColor: color4Result,
        borderColor: color4Result,
        borderWidth: 2,
      }];
      setbarDataState({
        ...barDataState,
        datasets: dataListBarState
      }),
      
      //Quater
      dataListBarQState = [{
        label:"แผน",
        data: [85, 22, 86, 17],
        backgroundColor: color4plan,
        borderColor: color4plan,
        borderWidth: 2,
      }, {
        label:"ผล",
        data: [72, 21, 41, 30],
        backgroundColor: color4Result,
        borderColor: color4Result,
        borderWidth: 2,
      }]
      setbarDataGState({
        ...barDataGState,
        datasets: dataListBarQState
      }),

      //Allies
      dataListBarAState = [{
        label:"แผน",
        data: [65, 97, 34, 56],
        backgroundColor: color4plan,
        borderColor: color4plan,
        borderWidth: 2,
      }, {
        label:"ผล",
        data: [85, 64, 34, 52],
        backgroundColor: color4Result,
        borderColor: color4Result,
        borderWidth: 2,
      }]
      setbarDataAState({
        ...barDataAState,
        datasets: dataListBarAState
      }),

      //PAX
      dataListBarPAXState = [{
        label:"แผน",
        data: [15, 45, 25, 64],
        backgroundColor: color4plan,
        borderColor: color4plan,
        borderWidth: 2,
      }, {
        label:"ผล",
        data: [86, 63, 14, 53],
        backgroundColor: color4Result,
        borderColor: color4Result,
        borderWidth: 2,
      }]
      setbarDataPAXState({
        ...barDataPAXState,
        datasets: dataListBarPAXState
      }),

      //Budget12M
      dataListBarG12MState = [{
        label:"แผน",
        data: [83, 27, 40, 60, 61, 65, 80, 67, 43, 70, 65, 86],
        backgroundColor: colorPlan,
        borderColor: colorPlan,
        borderWidth: 2,
        }, {
        label:"ผล",
        data: [41, 76, 43, 87, 63, 89, 70, 95, 21, 99, 24, 65],
        backgroundColor: colorResult,
        borderColor: colorResult,
        borderWidth: 2,
      }]
      setbarDataBar12MState({
        ...barDataBar12MState,
        datasets: dataListBarG12MState
      }),

      //G12M
      dataListBarG12MState = [{
        label:"แผน",
        data: [25, 36, 65, 87, 42, 63, 89, 70, 95, 21, 99, 46],
        backgroundColor: colorPlan,
        borderColor: colorPlan,
        borderWidth: 2,
      }, {
        label:"ผล",
        data: [52, 12, 69, 80, 55, 70, 95, 21, 99, 32, 63, 71],
        backgroundColor: colorResult,
        borderColor: colorResult,
        borderWidth: 2,
      }]
      setbarDataG12MState({
        ...barDataG12MState,
        datasets: dataListBarG12MState
      }),

      //A12M
      dataListBarA12MState = [{
        label:"แผน",
        data: [65, 97, 34, 56, 70, 95, 21, 45, 70, 59, 69, 24],
        backgroundColor: colorPlan,
        borderColor: colorPlan,
        borderWidth: 2,
      }, {
        label:"ผล",
        data: [85, 64, 34, 52, 25, 36, 65, 87, 86, 63, 21, 45],
        backgroundColor: colorResult,
        borderColor: colorResult,
        borderWidth: 2,
      }]
      setbarDataA12MState({
        ...barDataA12MState,
        datasets: dataListBarA12MState
      }),

      //PAX12M
      dataListBarPAX12MState = [{
        label:"แผน",
        data: [15, 45, 25, 64, 95, 21, 45, 70, 65, 80, 67, 43],
        backgroundColor: colorPlan,
        borderColor: colorPlan,
        borderWidth: 2,
      }, {
        label:"ผล",
        data: [86, 63, 14, 53, 24, 45, 55, 70, 95, 21, 45, 70],
        backgroundColor: colorResult,
        borderColor: colorResult,
        borderWidth: 2,
      }]
      setbarDataPAX12MState({
        ...barDataPAX12MState,
        datasets: dataListBarPAX12MState
      });
    } else if(value =="3") {
      // Budget
      dataListBarState = [{
        label:"แผน",
        data: [21, 55, 31, 76],
        backgroundColor: color4plan,
        borderColor: color4plan,
        borderWidth: 2,
      }, {
        label:"ผล",
        data: [24, 45, 55, 70],
        backgroundColor: color4Result,
        borderColor: color4Result,
        borderWidth: 2,
      }];
      setbarDataState({
        ...barDataState,
        datasets: dataListBarState
      }),

      //Quater
      dataListBarQState = [{
        label:"แผน",
        data: [25, 36, 65, 87],
        backgroundColor: color4plan,
        borderColor: color4plan,
        borderWidth: 2,
      }, {
        label:"ผล",
        data: [52, 12, 69, 80],
        backgroundColor: color4Result,
        borderColor: color4Result,
        borderWidth: 2,
      }]
      setbarDataGState({
        ...barDataGState,
        datasets: dataListBarQState
      }),

      //Allies
      dataListBarAState = [{
        label:"แผน",
        data: [56, 91, 24, 71],
        backgroundColor: color4plan,
        borderColor: color4plan,
        borderWidth: 2,
      }, {
        label:"ผล",
        data: [15, 54, 84, 82],
        backgroundColor: color4Result,
        borderColor: color4Result,
        borderWidth: 2,
      }]
      setbarDataAState({
        ...barDataAState,
        datasets: dataListBarAState
      }),

      //PAX
      dataListBarPAXState = [{
        label:"แผน",
        data: [51, 34, 75, 14],
        backgroundColor: color4plan,
        borderColor: color4plan,
        borderWidth: 2,
      }, {
        label:"ผล",
        data: [26, 53, 84, 93],
        backgroundColor: color4Result,
        borderColor: color4Result,
        borderWidth: 2,
      }]
      setbarDataPAXState({
        ...barDataPAXState,
        datasets: dataListBarPAXState
      }),

      //Budget12M
      dataListBarG12MState = [{
        label:"แผน",
        data: [21, 55, 31, 76, 63, 89, 70, 95, 21, 99, 24, 45],
        backgroundColor: colorPlan,
        borderColor: colorPlan,
        borderWidth: 2,
        }, {
        label:"ผล",
        data: [51, 45, 42, 51, 12, 69, 80, 55, 63, 14, 53, 24],
        backgroundColor: colorResult,
        borderColor: colorResult,
        borderWidth: 2,
      }]
      setbarDataBar12MState({
        ...barDataBar12MState,
        datasets: dataListBarG12MState
      }),

      //G12M
      dataListBarG12MState = [{
        label:"แผน",
        data: [85, 22, 86, 17, 70, 95, 21, 45, 70, 89, 70, 95],
        backgroundColor: colorPlan,
        borderColor: colorPlan,
        borderWidth: 2,
      }, {
        label:"ผล",
        data: [72, 21, 41, 30, 70, 65, 80, 67, 43, 67, 54, 73],
        backgroundColor: colorResult,
        borderColor: colorResult,
        borderWidth: 2,
      }]
      setbarDataG12MState({
        ...barDataG12MState,
        datasets: dataListBarG12MState
      }),

      //A12M
      dataListBarA12MState = [{
        label:"แผน",
        data: [56, 91, 24, 71, 21, 45, 70, 59, 69, 21, 99, 24],
        backgroundColor: colorPlan,
        borderColor: colorPlan,
        borderWidth: 2,
      }, {
        label:"ผล",
        data: [15, 54, 84, 82, 65, 80, 67, 43, 25, 67, 43, 70],
        backgroundColor: colorResult,
        borderColor: colorResult,
        borderWidth: 2,
      }]
      setbarDataA12MState({
        ...barDataA12MState,
        datasets: dataListBarA12MState
      }),

      //PAX12M
      dataListBarPAX12MState = [{
        label:"แผน",
        data: [51, 34, 75, 14, 80, 67, 43, 25, 36, 70, 95, 21],
        backgroundColor: colorPlan,
        borderColor: colorPlan,
        borderWidth: 2,
      }, {
        label:"ผล",
        data: [26, 53, 84, 93, 70, 95, 21, 99, 46, 86, 63, 14],
        backgroundColor: colorResult,
        borderColor: colorResult,
        borderWidth: 2,
      }]
      setbarDataPAX12MState({
        ...barDataPAX12MState,
        datasets: dataListBarPAX12MState
      });
    } 
    setSelectedValueBar(value)
  }; 


  const [barDataState, setbarDataState] = useState({
    labels: barLabels,
    datasets: [{
      label:"แผน",
      data: [12, 83, 89, 99],
      backgroundColor: color4plan,
      borderColor: color4plan,
      borderWidth: 2,
    }, {
      label:"ผล",
      data: [24, 45, 55, 70],
      backgroundColor: color4Result,
      borderColor: color4Result,
      borderWidth: 2,
    }],
  });

  const [barDataGState, setbarDataGState] = useState({
    labels: barLabels,
    datasets: [{
      label:"แผน",
      data: [76, 23, 87, 56],
      backgroundColor: color4plan,
      borderColor: color4plan,
      borderWidth: 2,
    }, {
      label:"ผล",
      data: [95, 21, 45, 70],
      backgroundColor: color4Result,
      borderColor: color4Result,
      borderWidth: 2,
    }],
  });

  const [barDataAState, setbarDataAState] = useState({
    labels: barLabels,
    datasets: [{
      label:"แผน",
      data: [67, 54, 87, 61],
      backgroundColor: color4plan,
      borderColor: color4plan,
      borderWidth: 2,
    }, {
      label:"ผล",
      data: [88, 42, 63, 98],
      backgroundColor: color4Result,
      borderColor: color4Result,
      borderWidth: 2,
    }],
  });

  const [barDataPAXState, setbarDataPAXState] = useState({
    labels: barLabels,
    datasets: [{
      label:"แผน",
      data: [87, 42, 63, 89],
      backgroundColor: color4plan,
      borderColor: color4plan,
      borderWidth: 2,
    }, {
      label:"ผล",
      data: [65, 80, 67, 43],
      backgroundColor: color4Result,
      borderColor: color4Result,
      borderWidth: 2,
    }],
  });

  const [barDataBar12MState, setbarDataBar12MState] = useState({
    labels: barLabels2,
    datasets: [{
      label:"แผน",
      data: [12, 83, 89, 99, 24, 45, 55, 70, 95, 21, 45, 70],
      backgroundColor: colorPlan,
      borderColor: colorPlan,
      borderWidth: 2,
    }, {
      label:"ผล",
      data: [24, 45, 55, 70, 95, 21, 45, 70, 12, 83, 89, 99],
      backgroundColor: colorResult,
      borderColor: colorResult,
      borderWidth: 2,
    }],
  });

  const [barDataA12MState, setbarDataA12MState] = useState({
    labels: barLabels2,
    datasets: [{
      label:"แผน",
      data: [67, 54, 87, 61, 65, 80, 67, 43, 70, 65, 80, 67],
      backgroundColor: colorPlan,
      borderColor: colorPlan,
      borderWidth: 2,
    }, {
      label:"ผล",
      data: [88, 42, 63, 98, 45, 55, 70, 95, 21, 99, 24, 45],
      backgroundColor: colorResult,
      borderColor: colorResult,
      borderWidth: 2,
    }],
  });

  const [barDataG12MState, setbarDataG12MState] = useState({
    labels: barLabels2,
    datasets: [{
      label:"แผน",
      data: [76, 23, 87, 56, 95, 21, 45, 70, 87, 42, 63, 89],
      backgroundColor: colorPlan,
      borderColor: colorPlan,
      borderWidth: 2,
    }, {
      label:"ผล",
      data: [95, 21, 45, 70, 65, 80, 67, 43, 67, 54, 87, 61],
      backgroundColor: colorResult,
      borderColor: colorResult,
      borderWidth: 2,
    }],
  });

  const [barDataPAX12MState, setbarDataPAX12MState] = useState({
    labels: barLabels2,
    datasets: [{
      label:"แผน",
      data: [87, 42, 63, 89, 70, 95, 21, 99, 24, 45, 67, 54],
      backgroundColor: colorPlan,
      borderColor: colorPlan,
      borderWidth: 2,
    }, {
      label:"ผล",
      data: [65, 80, 67, 43, 25, 36, 65, 87, 86, 63, 14, 53],
      backgroundColor: colorResult,
      borderColor: colorResult,
      borderWidth: 2,
    }],
  });

  const [selectedValueDepartment, setSelectedValueDepartment] = useState("1");
  var dataListPieState;
  const handleDropdownChangeDepartment = (e : any) => {
    console.log('test')
    const {name, value} = e.target;
    console.log(value)
    if(value == "1") {
      console.log(value)
      dataListPieState = [{
        label: "Percentage",
        data: [20, 44, 36],
        backgroundColor: [
          "rgb(51, 194, 156)",
          "rgb(255, 255, 142)",
          "rgb(255, 66, 54)",
        ],
        borderColor: [
          "rgb(255, 255, 255)",
          "rgb(255, 255, 255)",
          "rgb(255, 255, 255)",
        ],
        borderWidth: 1,
      }];
      setPieDataState({
        ...pieDataState,
        datasets: dataListPieState
      });
    } else if(value == "2") {
      console.log(value)
      dataListPieState = [{
        label: "Percentage",
        data: [40, 26, 34],
        backgroundColor: [
          "rgb(51, 194, 156)",
          "rgb(255, 255, 142)",
          "rgb(255, 66, 54)",
        ],
        borderColor: [
          "rgb(255, 255, 255)",
          "rgb(255, 255, 255)",
          "rgb(255, 255, 255)",
        ],
        borderWidth: 1,
      }];
      setPieDataState({
        ...pieDataState,
        datasets: dataListPieState
      });
    } else if(value =="3") {
      console.log(value)
      dataListPieState = [{
        label: "Percentage",
        data: [62, 18, 20],
        backgroundColor: [
          "rgb(51, 194, 156)",
          "rgb(255, 255, 142)",
          "rgb(255, 66, 54)",
        ],
        borderColor: [
          "rgb(255, 255, 255)",
          "rgb(255, 255, 255)",
          "rgb(255, 255, 255)",
        ],
        borderWidth: 1,
      }];
      setPieDataState({
        ...pieDataState,
        datasets: dataListPieState
      });
    } 
    setSelectedValueDepartment(value)
  }; 

  const pieLabels = ["ดำเนินการแล้วเสร็จสิ้น", "ระหว่างดำเนินการ", "ยังไม่ดำเนินการ"];
  const [pieDataState, setPieDataState] = useState({
    labels: pieLabels,
    datasets: [{
      label: "Percentage",
      data: [20, 44, 36],
      backgroundColor: [
        "rgb(51, 194, 156)",
        "rgb(255, 255, 142)",
        "rgb(255, 66, 54)",
      ],
      borderColor: [
        "rgb(255, 255, 255)",
        "rgb(255, 255, 255)",
        "rgb(255, 255, 255)",
      ],
      borderWidth: 1,
    }],
  });

const [selectedValueBudget, setSelectedValueBudget] = useState("1");
var dataListBudgetState;
  const handleDropdownChangeBudget = (e : any) => {
    console.log('test')
    const {name, value} = e.target;
    console.log(value)
    if(value == "1") {
      console.log(value)
      dataListBudgetState = [{
        label: "Percentage",
        data: [34, 41, 88],
        backgroundColor: [
          "rgb(51, 194, 156)",
          "rgb(255, 255, 142)",
          "rgb(255, 66, 54)",
        ],
        borderColor: [
          "rgb(255, 255, 255)",
          "rgb(255, 255, 255)",
          "rgb(255, 255, 255)",
        ],
        borderWidth: 1,
      }];
      setPieDataBudgetState({
        ...pieDataState,
        datasets: dataListBudgetState
      });
    } else if(value == "2") {
      console.log(value)
      dataListBudgetState = [{
        label: "Percentage",
        data: [60, 79, 10],
        backgroundColor: [
          "rgb(51, 194, 156)",
          "rgb(255, 255, 142)",
          "rgb(255, 66, 54)",
        ],
        borderColor: [
          "rgb(255, 255, 255)",
          "rgb(255, 255, 255)",
          "rgb(255, 255, 255)",
        ],
        borderWidth: 1,
      }];
      setPieDataBudgetState({
        ...pieDataState,
        datasets: dataListBudgetState
      });
    } else if(value =="3") {
      console.log(value)
      dataListBudgetState = [{
        label: "Percentage",
        data: [52, 14, 50],
        backgroundColor: [
          "rgb(51, 194, 156)",
          "rgb(255, 255, 142)",
          "rgb(255, 66, 54)",
        ],
        borderColor: [
          "rgb(255, 255, 255)",
          "rgb(255, 255, 255)",
          "rgb(255, 255, 255)",
        ],
        borderWidth: 1,
      }];
      setPieDataBudgetState({
        ...pieDataState,
        datasets: dataListBudgetState
      });
    } 
    setSelectedValueBudget(value)
  };

  const [pieDataBudgetState, setPieDataBudgetState] = useState({
    labels: pieLabels,
    datasets: [{
      label: "Percentage",
      data: [34, 41, 88],
      backgroundColor: [
        "rgb(51, 194, 156)",
        "rgb(255, 255, 142)",
        "rgb(255, 66, 54)",
      ],
      borderColor: [
        "rgb(255, 255, 255)",
        "rgb(255, 255, 255)",
        "rgb(255, 255, 255)",
      ],
      borderWidth: 1,
    }],
  });

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
                                  <select className="form-select">
                                  {Array.from({ length: 5 }, (_, index) => {
                                      const currentDate = new Date();
                                      const currentYear = currentDate.getFullYear();
                                      const buddhistYear = currentYear + 543 - index;
                                      const indexs = index+1
                                      const indexNumber = indexs.toString();
                                      return (
                                        <option value={indexNumber}>{buddhistYear}</option>
                                      );
                                    })}  
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
                                  <select className="form-select" value={selectedValueDepartment} onChange={(e) => handleDropdownChangeDepartment(e)}>
                                  {departments?.map((items:any, index: number) => (
                                    <option key={index} value={index+1}>
                                      {items}
                                    </option>
                                  ))}
                                  </select>                 
                              </div>
                          </div>
                      </div>

                      <div className="mt-10 pie-chart">
                        <Pie       
                          data={pieDataState}
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
                        {}
                      </div>
                    </div>

                    <div className="mt-50 d-flex flex-row justify-content-center justify-content-around align-items-center">                        
                      <div className="d-flex justify-content-center align-items-center">
                          <div className="mr-10">
                              <label>แหล่งงบประมาณ:</label>
                          </div>
                          <div className="pie-chart-box">
                              <div className="filter-field">
                              <select className="form-select" value={selectedValueBudget} onChange={handleDropdownChangeBudget}>
                                  {budgetFrom?.map((items:any, index: number) => (
                                    <option key={index} value={index+1}>
                                      {items}
                                    </option>
                                  ))}
                                  </select>                         
                              </div>
                          </div>
                      </div>

                      <div className="mt-10 pie-chart">
                        <Pie       
                          data={pieDataBudgetState}
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
                    <div className="d-flex flex-column justify-content-center align-items-center">                       
                    <div className="d-flex justify-content-center align-items-center">
                          <div className="mr-10">
                              <label>ปีงบประมาณ:</label>
                          </div>
                          <div className="pie-chart-box">
                              <div className="filter-field">
                              <select className="form-select" value={selectedValueBar} onChange={handleDropdownBar}>
                              {Array.from({ length: 5 }, (_, index) => {
                                      const currentDate = new Date();
                                      const currentYear = currentDate.getFullYear();
                                      const buddhistYear = currentYear + 543 - index;
                                      const indexs = index+1
                                      const indexNumber = indexs.toString();
                                      return (
                                        <option value={indexNumber}>{buddhistYear}</option>
                                      );
                                    })}  
                                  
                                  </select>                            
                              </div>
                          </div>
                      </div>    
                      <div className="mt-20 d-flex flex-row justify-content-center align-items-center">
                          <div className="mr-10"><p>บาท</p></div>
                          <div className="d-flex flex-column justify-content-center align-items-center">
                              <div className="bar-chart-quarter">
                                  <Bar
                                    data={barDataState}
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

                      <div className="mt-20 d-flex flex-row justify-content-center align-items-center">
                          <div className="mr-10"><p>บาท</p></div>
                          <div className="d-flex flex-column justify-content-center align-items-center">
                              <div className="bar-chart-month">
                                <Bar
                                    data={barDataBar12MState}
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
                    <div className="d-flex flex-column justify-content-center align-items-center">                       
                        <div className="mt-20 d-flex flex-row justify-content-center align-items-center">
                            <div className="mr-10"><p>คน-ครั้ง</p></div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <div className="bar-chart-quarter">
                                  <Bar
                                    data={barDataGState}
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

                        <div className="mt-20 d-flex flex-row justify-content-center align-items-center">
                          <div className="mr-10"><p>คน-ครั้ง</p></div>
                          <div className="d-flex flex-column justify-content-center align-items-center">
                              <div className="bar-chart-month">
                                <Bar
                                    data={barDataG12MState}
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
                    <div className="d-flex flex-column justify-content-center align-items-center">                       
                        <div className="mt-20 d-flex flex-row justify-content-center align-items-center">
                            <div className="mr-10"><p>คน-ครั้ง</p></div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <div className="bar-chart-quarter">
                                  <Bar
                                    data={barDataAState}
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

                        <div className="mt-20 d-flex flex-row justify-content-center align-items-center">
                          <div className="mr-10"><p>คน-ครั้ง</p></div>
                          <div className="d-flex flex-column justify-content-center align-items-center">
                              <div className="bar-chart-month">
                                <Bar
                                    data={barDataA12MState}
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
                    <div className="d-flex flex-column justify-content-center align-items-center">                       
                        <div className="mt-20 d-flex flex-row justify-content-center align-items-center">
                            <div className="mr-10"><p>คน-ครั้ง</p></div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <div className="bar-chart-quarter">
                                  <Bar
                                    data={barDataPAXState}
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

                        <div className="mt-20 d-flex flex-row justify-content-center align-items-center">
                          <div className="mr-10"><p>คน-ครั้ง</p></div>
                          <div className="d-flex flex-column justify-content-center align-items-center">
                              <div className="bar-chart-month">
                                <Bar
                                    data={barDataPAX12MState}
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
);
}