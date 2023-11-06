import React, { useState } from 'react';
import Popup2 from './popup2';
import { number, string } from 'yup';
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
    { id: 5, name: '[ดึงค่า]'}
  ]);
  var i = 0.1
  const handleAddRow = (id: number, types: any) => {
    const newData = data.map(item => {
      if (item.id === id && types === 'Process') {
        return [{ id: item.id, name: item.name }, { id: parseFloat(`${item.id}.${data.length}`), name: `Row ${item.id}.${data.length} Process`}]
      } else if (item.id === id && types === 'Result') {
        return [{ id: item.id, name: item.name }, { id: parseFloat(`${item.id}.${data.length}`), name: `Row ${item.id}.${data.length} Result`}];
      } else {
        return item;
      }
    }).flat();
    setData(newData);
  };

  const handleDeleteRow = (id: number) => {
    setData(data.filter((row) => row.id !== id));
  };

  const [isPopupOpen2, setIsPopupOpen2] = useState(false);
  const [selectedId, setSelectedId] = useState(0);
  const [selectedName, setSelectedName] = useState('');

  const handleOpenPopup = (id: number, name: string) => {
    setIsPopupOpen2(true);
    setSelectedId(id);
    setSelectedName(name);
  };

  const handleClosePopup = () => {
    setIsPopupOpen2(false);
    handleAddRow(selectedId, selectedName)
  };


    const typeCheck = (name: any, id: number) => {
      if (name.includes('Process')) {
        return <tr>
                    <th>
                      <div className="normalText delete-button d-flex justify-content-center align-items-center">
                          <span onClick={() => handleDeleteRow(id)} style={{cursor: 'pointer'}}>ลบ</span>
                      </div>
                    </th>
                    <th>
                      <div className="normalText d-flex justify-content-center align-items-center">
                        {Math.floor(id)}
                      </div>
                    </th>
                    <th colSpan={9}>
                      <div className="wd-800">
                        <input type="text" className="form-control" placeholder="" id="filterOverall"/>
                      </div>
                    </th>
                </tr>
        ;
      } else {
        return <tr>
                    <th>
                      <div className="normalText delete-button d-flex justify-content-center align-items-center">
                          <span onClick={() => handleDeleteRow(id)} style={{cursor: 'pointer'}}>ลบ</span>
                      </div>
                    </th>
                    <th>
                      <div className="normalText d-flex justify-content-center align-items-center">
                        {Math.floor(id)}
                      </div>
                    </th>
                    <th colSpan={5}>
                        <div className="normalText d-flex justify-content-left align-items-center">[ดึงค่า]</div>
                    </th>
                    <th>
                        <div className="normalText d-flex justify-content-center align-items-center">[ดึงค่า]</div>
                    </th>
                    <th>
                        <div className="normalText d-flex justify-content-center align-items-center">[ดึงค่า]</div>
                    </th>
                    <th>
                        <div className="normalText d-flex justify-content-center align-items-center">[ดึงค่า]</div>
                    </th>
                    <th>
                        <div className="normalText d-flex justify-content-center align-items-center">[ดึงค่า]</div>
                    </th>
                </tr>
              ;
      }
    }
  return (
    <div className='table-responsive'>
      <table className="table">
          <thead className='table-primary'>
              <tr>
                  <th colSpan={2}>
                    <div className="d-flex justify-content-center align-items-center">การรายงายผล</div>
                  </th>
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
                    <div className="wd-100 d-flex justify-content-center align-items-center">Process</div>
                  </th>
                  <th>
                    <div className="wd-100 d-flex justify-content-center align-items-center">Result</div>
                  </th>
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
            if (Number.isInteger(row.id)) {
              let rows = [];
              rows.push(
                  <tr>
                      <th></th>
                      <th></th>
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
              rows.push(
                  <tr>
                      <th>
                        <div className="normalText add-button d-flex flex-column justify-content-center align-items-center">
                          <button className="open-button icon-button bi bi-graph-up-arrow" onClick={() => handleAddRow(row.id, 'Process')}></button>
                        </div>
                      </th>
                      <th>
                        <div className="normalText add-button d-flex flex-column justify-content-center align-items-center">
                          <button className="open-button icon-button bi bi-file-earmark-spreadsheet-fill" onClick={() => handleOpenPopup(row.id, 'Result')}></button>
                          <Popup2 isOpen={isPopupOpen2} onClose={handleClosePopup}/>
                        </div>
                      </th>
                      <th rowSpan={row.span}>
                        <div className="normalText d-flex justify-content-center align-items-center">
                          {row.id}
                        </div>
                      </th>
                      <th>
                        <div className="normalText d-flex justify-content-center align-items-center">
                          {row.name}
                        </div>
                      </th>
                      <th>
                        <div className="normalText d-flex justify-content-center align-items-center">
                          {row.name}
                        </div>
                      </th>
                      <th>
                        <div className="normalText d-flex justify-content-center align-items-center">
                          {row.name}
                        </div>
                      </th>
                      <th>
                        <div className="normalText d-flex justify-content-center align-items-center">
                          {row.name}
                        </div>
                      </th>
                      <th>
                        <div className="normalText d-flex justify-content-center align-items-center">
                          {row.name}
                        </div>
                      </th>
                      <th>
                        <div className="normalText d-flex justify-content-center align-items-center">
                          {row.name}
                        </div>
                      </th>
                      <th>
                        <div className="normalText d-flex justify-content-center align-items-center">
                          {row.name}
                        </div>
                      </th>
                      <th>
                        <div className="normalText d-flex justify-content-center align-items-center">
                          {row.name}
                        </div>
                      </th>
                      <th>
                        <div className="normalText d-flex justify-content-center align-items-center">
                          {row.name}
                        </div>
                      </th>
                  </tr>
              );
              return rows;
          } else {
              return typeCheck(row.name, row.id);
          }
          })}
          </tbody>
      </table>
    </div>
);
}

export default YourComponent;