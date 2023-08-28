"use client";

import { useDispatch, useSelector } from "react-redux";
import "./report-result.scss";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Section6Props {
  changeSectionHandle: (value: number, isBubble: boolean) => void;
  setIsLoading: (val: boolean) => void
}

export default function Section6(props: Section6Props) {
    const formState = useSelector(
        (state: RootState) => state.operationFollowForm
      );

  return (
    <>
    <div className='search-wrapper-section d-flex flex-column justify-content-center align-items-center'>
    <div className="sets d-flex flex-column mb-20 mr-20 ml-20">
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <tbody>
                            <tr className="table-primary">
                                <th colSpan={6}>
                                    <div className="d-flex justify-content-center">ตารางเอกสารแนบ</div>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <div className="wd-50 d-flex justify-content-center align-items-center">ลำดับที่</div>
                                </th>
                                <th>
                                    <div className="wd-200 d-flex justify-content-center align-items-center">กิจกรรม</div>
                                </th>
                                <th>
                                    <div className="wd-50 f-column justify-content-center align-items-center">
                                        <div>ลำดับที่</div>
                                        <div>กิจกรรม</div>
                                    </div>
                                </th>
                                <th>
                                    <div className="wd-200 d-flex justify-content-center align-items-center">หัวข้อ</div>
                                </th>
                                <th>
                                    <div className="wd-180 d-flex justify-content-center align-items-center">ตัวชี้วัดที่เกี่ยวข้อง</div>
                                </th>
                                <th>
                                    <div className="wd-100 d-flex justify-content-center align-items-center">เอกสาร</div>
                                </th>
                            </tr>

                            <tr>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">1</div>
                                </th>
                                <th rowSpan={4}>
                                    <div className="normalText d-flex justify-content-center align-items-center">
                                    กิจกรรม 1
                                    </div>
                                </th>
                                <th rowSpan={4}> 
                                    <div className="normalText d-flex justify-content-center align-items-center">1</div>
                                </th>
                                <th rowSpan={3}>
                                    <div className="normalText d-flex justify-content-center align-items-center">กิจกรรมย่อยที่ 1</div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">ตัวชี้วัด 1.1</div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center"><Link href="">link</Link></div>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">2</div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">ตัวชี้วัด 1.2</div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center"><Link href="">link</Link></div>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">3</div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">ตัวชี้วัด 1.3</div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center"><Link href="">link</Link></div>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">4</div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">กิจกรรมย่อยที่ 2</div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">ตัวชี้วัด 1.4</div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center"><Link href="">link</Link></div>
                                </th>
                            </tr>
                        
                            <tr>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">5</div>
                                </th>
                                <th rowSpan={4}>
                                    <div className="normalText d-flex justify-content-center align-items-center">
                                    กิจกรรม 1
                                    </div>
                                </th>
                                <th rowSpan={4}> 
                                    <div className="normalText d-flex justify-content-center align-items-center">2</div>
                                </th>
                                <th rowSpan={3}>
                                    <div className="normalText d-flex justify-content-center align-items-center">กิจกรรมย่อยที่ 1</div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">ตัวชี้วัด 2.1</div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center"><Link href="">link</Link></div>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">6</div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">ตัวชี้วัด 3.1</div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center"><Link href="">link</Link></div>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">7</div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">ตัวชี้วัด 3.2</div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center"><Link href="">link</Link></div>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">8</div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">กิจกรรมย่อยที่ 2</div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center">ตัวชี้วัด 1.3</div>
                                </th>
                                <th>
                                    <div className="normalText d-flex justify-content-center align-items-center"><Link href="">link</Link></div>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
        
            
        </div>
    </div>
                    <div className="button-section">
                        <button type="button" className="btn btn-primary"><i className="bi bi-chevron-left"></i>ย้อนกลับ</button>
                    </div>
    </>
  );
}
