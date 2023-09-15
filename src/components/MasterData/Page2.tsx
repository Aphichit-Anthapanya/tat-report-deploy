// ChildComponent.jsx

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Page2 = ({ inputData, handleClick, handleSection, handleRoute }:any) => {
  var [savedData, setSavedData] = useState(inputData);
  const { id } = useParams();
    const handlePage = (item:any) => {
    handleRoute(2)
    handleClick(item)
    handleSection(3)
    setSavedData(inputData)
};


  return (
    <div className='section-info d-flex flex-column'>
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

export default Page2;
