// ChildComponent.jsx

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Page1 = ({ inputData, handleClick, handleSection, handleRoute}:any) => {
    var [savedData, setSavedData] = useState(inputData);
    const handlePage = (item:any) => {
        var id = 0
        if (item.userGroup === 'บุคลากรและลูกจ้างของททท.') {
            id = 1
        } else if (item.userGroup === 'ลูกค้า/ผู้ใช้บริการ') {
            id = 2  
        } else if (item.userGroup === 'หน่วยงานกำกับดูแล/ผู้ถือหุ้นภาครัฐ') {
            id = 3   
        } else if (item.userGroup === 'คู่ค้า') {
            id = 4   
        } else if (item.userGroup === 'ผู้ส่งมอบ') {
            id = 5  
        } else if (item.userGroup === 'คู่ความร่วมมือ') {
            id = 6   
        }
        handleRoute(id)
        handleClick(item)
        handleSection(2)
        setSavedData(inputData)
    };
  return (
      <div className='section-info d-flex flex-column'>
        <h6>Page 1</h6>
        <div className="table-container mb-20">
            <table className="table table-striped">
                <thead>
                    <tr className='table-primary'>
                        <th colSpan={5}>
                            <div className="d-flex justify-content-center align-items-center">กลุ่มผู้มีส่วนได้ส่วนเสีย (Stakeholder Group)</div>
                        </th>
                    </tr>
                    <tr className='table-primary'>
                        <th>
                            <div className="wd-50 d-flex justify-content-center align-items-center">แก้ไข</div>
                        </th>
                        <th>
                            <div className="wd-50 d-flex justify-content-center align-items-center">ลบ</div>
                        </th>
                        <th>
                            <div className="wd-50 d-flex justify-content-center align-items-center">รายละเอียด</div>
                        </th>
                        <th>
                            <div className="wd-300 d-flex justify-content-center align-items-center">กลุ่มผู้มีส่วนได้ส่วนเสีย</div>
                        </th>
                        <th>
                            <div className="wd-300 d-flex justify-content-center align-items-center">หมายเหตุ</div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                {savedData.map((items: any, index : any) => (
                    <tr>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">
                                <button className="open-button icon-button bi bi-pencil"></button>
                            </div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">
                                <button className="open-button icon-button bi bi-trash"></button>
                            </div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">
                                <button className="open-button icon-button bi bi-file-earmark-text-fill" onClick={() => handlePage(items)}></button>
                            </div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-left align-items-center">{items.userGroup}</div>
                        </th>
                        <th>
                            <div className="normalText d-flex justify-content-center align-items-center">{items.note}</div>
                        </th>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default Page1;
