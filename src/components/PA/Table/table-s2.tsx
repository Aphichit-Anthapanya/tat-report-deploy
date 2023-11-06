import React, { useState } from 'react';
import Popup from './popup';
const YourComponent = () => {
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
  const [data, setData] = useState([
    { id: 1, name: '[ดึงค่า]'},
    { id: 2, name: '[ดึงค่า]'},
    { id: 3, name: '[ดึงค่า]'},
    { id: 4, name: '[ดึงค่า]'},
    { id: 5, name: '[ดึงค่า]'},
  ]);
  var i = 0.1
  const handleAddRow = (id: number) => {
    const newData = data.map(item => {
      if (item.id === id) {
        return [{ id: item.id, name: item.name }, { id: parseFloat(`${item.id}.${data.length}`), name: `Row ${item.id}.${data.length}`}]
      } else {
        return item;
      }
    }).flat();
    setData(newData);
  };

  const handleDeleteRow = (id: number) => {
    setData(data.filter((row) => row.id !== id));
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
      setIsPopupOpen(!isPopupOpen);
    };
  return (
    <div className='table-responsive'>
      <table className="table">
          <thead className='table-primary'>
              <tr>
                  <th rowSpan={2}><div className="wd-25 d-flex justify-content-center align-items-center"></div></th>
                  <th rowSpan={2}>
                      <div className="wd-120 d-flex justify-content-center align-items-center">ค่าระดับ</div>
                  </th>
                  <th rowSpan={2}>
                      <div className="wd-200 d-flex justify-content-center align-items-center">ค่าเกณฑ์วัด</div>
                  </th>
                  <th rowSpan={2}>
                      <div className="wd-120 d-flex justify-content-center align-items-center">โครงการตัวแทน</div>
                  </th>
                  <th rowSpan={2}>
                      <div className="wd-100 d-flex flex-column justify-content-center align-items-center">
                          <div>หน่วยงานที่</div>
                          <div>รับผิดชอบ</div>
                      </div>
                  </th>
                  <th colSpan={2}>
                      <div className="wd-200 d-flex justify-content-center align-items-center">ระยะเวลาที่ดำเนินการ</div>
                  </th>
                  <th colSpan={4}>
                      <div className="wd-400 d-flex justify-content-center align-items-center">ค่าน้ำหนัก</div>
                  </th>
              </tr>
              <tr>
                  <th>
                      <div className="wd-100 d-flex justify-content-center align-items-center">วันที่เริ่มต้น</div>
                  </th>
                  <th>
                      <div className="wd-100 d-flex justify-content-center align-items-center">วันที่สิ้นสุด</div>
                  </th>
                  <th>
                      <div className="wd-100 d-flex justify-content-center align-items-center">ไตรมาส 1</div>
                  </th>
                  <th>
                      <div className="wd-100 d-flex justify-content-center align-items-center">ไตรมาส 2</div>
                  </th>
                  <th>
                      <div className="wd-100 d-flex justify-content-center align-items-center">ไตรมาส 3</div>
                  </th>
                  <th>
                      <div className="wd-100 d-flex justify-content-center align-items-center">ไตรมาส 4</div>
                  </th>
              </tr>
          </thead>
          <tbody>
          {data.map((row: any) => {
            if (Number.isInteger(row.id)){
              return (
                  <tr>
                      <th>
                        <div className="normalText add-button d-flex justify-content-center align-items-center">
                          <span onClick={() => handleAddRow(row.id)} style={{cursor: 'pointer'}}>เพิ่ม</span>
                        </div>
                      </th>
                      <th rowSpan={row.span}>
                        <div className="normalText d-flex justify-content-center align-items-center">
                          {row.id}
                        </div>
                      </th>
                      <th colSpan={9}>
                        <div className="normalText d-flex justify-content-center align-items-center">
                          {row.name}
                        </div>
                      </th>
                  </tr>
              );
          } else {
              return (
                <tr>
                    <th>
                      <div className="normalText delete-button d-flex justify-content-center align-items-center">
                          <span onClick={() => handleDeleteRow(row.id)} style={{cursor: 'pointer'}}>ลบ</span>
                      </div>
                    </th>
                    <th>
                      <div className="normalText d-flex justify-content-center align-items-center">
                        {Math.floor(row.id)}
                      </div>
                    </th>
                    <th></th>
                    <th>
                      <div className="normalText d-flex justify-content-center align-items-center">
                          <button className="open-button icon-button bi bi-plus-lg" onClick={togglePopup}></button>
                          <Popup isOpen={isPopupOpen} onClose={togglePopup}/>       
                      </div>
                    </th>
                    <th>
                    <div className="normalText d-flex justify-content-center align-items-center">
                        <div className="filter-field wd-300"> 
                                  <select className="form-select">
                                  {departments?.map((items:any, index: number) => (
                                    <option key={index} value={index+1}>
                                      {items}
                                    </option>
                                  ))}
                                  </select>                 
                        </div>
                      </div>
                    </th>
                    <th>
                      <div className="d-flex justify-content-center align-items-center">
                          <button className="icon-button bi bi-calendar-plus"></button>       
                      </div>
                    </th>
                    <th>
                      <div className="d-flex justify-content-center align-items-center">
                          <button className="icon-button bi bi-calendar-x"></button>       
                      </div>
                    </th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
              )
          }
          })}
          </tbody>
      </table>
    </div>
);
}

export default YourComponent;