import React from 'react';
import "@components/Report-temp/report-temp.scss";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect} from "react";

const Table = ({data}:any) => {
  return (
        <>
        {data.map((items: any, index: any) => {
        return items.info?.map((infoItem: any, infoIndex: any) => {
            return infoItem.department.map((departmentItem: any, departmentIndex: any) => { 
            return infoItem.actionPlan.map((actionPlanItem: any, actionPlanIndex:any) => {
                        let rows = [];
                        if (items.info.length > infoIndex) {
                                rows.push(
                                    <tr>
                                                <th rowSpan={6}>
                                                <div className="normalText d-flex justify-content-center align-items-center">{infoItem.number}</div></th>
                                                <th rowSpan={6}>
                                                    <div className="normalText d-flex justify-content-center align-items-center">
                                                        {infoItem.activityName}
                                                    </div>
                                                </th>
                                                <th rowSpan={6}>
                                                    <div className="normalText d-flex justify-content-center align-items-center">
                                                        {infoItem.purchasement}
                                                    </div>
                                                </th>
                                                <th rowSpan={6}>
                                                    <div className="normalText d-flex justify-content-left align-items-center">{departmentItem.fullName}</div>
                                                </th>
                                                <th rowSpan={6}>
                                                    <div className="wd-25 normalText d-flex justify-content-center align-items-center">{departmentItem.shortName}</div>
                                                </th>
                                                <th rowSpan={6}>
                                                    <div className="normalText d-flex justify-content-center align-items-center">
                                                        {infoItem.budget}
                                                    </div>
                                                </th>
                                                    <th>
                                                        <div className="normalText d-flex flex-column justify-content-left">
                                                            <div>1. จัดทำร่างขอบเขตของงาน</div>
                                                        <div className="fz-14">{actionPlanItem.step1.SEDate}</div>
                                                    </div>
                                                    </th>
                                                    {/*action plan*/}
                                                    <th className={actionPlanItem.step1.october}></th>
                                                    <th className={actionPlanItem.step1.november}></th>
                                                    <th className={actionPlanItem.step1.december}></th>
                                                    <th className={actionPlanItem.step1.january}></th>
                                                    <th className={actionPlanItem.step1.february}></th>
                                                    <th className={actionPlanItem.step1.march}></th>
                                                    <th className={actionPlanItem.step1.april}></th>
                                                    <th className={actionPlanItem.step1.may}></th>
                                                    <th className={actionPlanItem.step1.june}></th>
                                                    <th className={actionPlanItem.step1.july}></th>
                                                    <th className={actionPlanItem.step1.august}></th>
                                                    <th className={actionPlanItem.step1.september}></th>
                                                    <th></th>
                                                </tr>
                                    );
                                    rows.push(
                                        <tr>
                                                <th>
                                                    <div className="normalText d-flex flex-column justify-content-left">
                                                        <div>2. จัดทำรายงานขอซื้อ/ขอจ้าง</div>
                                                        <div className="fz-14">{actionPlanItem.step2.SEDate}</div>
                                                    </div>
                                                </th>
                                                {/*action plan*/}
                                                    <th className={actionPlanItem.step2.october}></th>
                                                    <th className={actionPlanItem.step2.november}></th>
                                                    <th className={actionPlanItem.step2.december}></th>
                                                    <th className={actionPlanItem.step2.january}></th>
                                                    <th className={actionPlanItem.step2.february}></th>
                                                    <th className={actionPlanItem.step2.march}></th>
                                                    <th className={actionPlanItem.step2.april}></th>
                                                    <th className={actionPlanItem.step2.may}></th>
                                                    <th className={actionPlanItem.step2.june}></th>
                                                    <th className={actionPlanItem.step2.july}></th>
                                                    <th className={actionPlanItem.step2.august}></th>
                                                    <th className={actionPlanItem.step2.september}></th>
                                                    <th></th>
                                            </tr>
                                    );
                                        rows.push(
                                            <tr>
                                                <th>
                                                <div className="normalText d-flex flex-column justify-content-left">
                                                    <div>3. อนุมัติจัดซื้อจัดจ้าง</div>
                                                    <div className="fz-14">{actionPlanItem.step3.SEDate}</div>
                                                </div>
                                                </th>
                                                {/*action plan*/}
                                                    <th className={actionPlanItem.step3.october}></th>
                                                    <th className={actionPlanItem.step3.november}></th>
                                                    <th className={actionPlanItem.step3.december}></th>
                                                    <th className={actionPlanItem.step3.january}></th>
                                                    <th className={actionPlanItem.step3.february}></th>
                                                    <th className={actionPlanItem.step3.march}></th>
                                                    <th className={actionPlanItem.step3.april}></th>
                                                    <th className={actionPlanItem.step3.may}></th>
                                                    <th className={actionPlanItem.step3.june}></th>
                                                    <th className={actionPlanItem.step3.july}></th>
                                                    <th className={actionPlanItem.step3.august}></th>
                                                    <th className={actionPlanItem.step3.september}></th>
                                                    <th></th>
                                            </tr>
                                        );
                                            rows.push(
                                                <tr>
                                                <th>
                                                <div className="normalText d-flex flex-column justify-content-left">
                                                    <div>4. ทำสัญญา/ข้อตกลงเป็นหนังสือ</div>
                                                    <div className="fz-14">{actionPlanItem.step4.SEDate}</div>
                                                </div>
                                                </th>
                                                {/*action plan*/}
                                                    <th className={actionPlanItem.step4.october}></th>
                                                    <th className={actionPlanItem.step4.november}></th>
                                                    <th className={actionPlanItem.step4.december}></th>
                                                    <th className={actionPlanItem.step4.january}></th>
                                                    <th className={actionPlanItem.step4.february}></th>
                                                    <th className={actionPlanItem.step4.march}></th>
                                                    <th className={actionPlanItem.step4.april}></th>
                                                    <th className={actionPlanItem.step4.may}></th>
                                                    <th className={actionPlanItem.step4.june}></th>
                                                    <th className={actionPlanItem.step4.july}></th>
                                                    <th className={actionPlanItem.step4.august}></th>
                                                    <th className={actionPlanItem.step4.september}></th>
                                                    <th></th>
                                            </tr>
                                            );
                                            rows.push(
                                                <tr>
                                                <th>
                                                <div className="normalText d-flex flex-column justify-content-left">
                                                    <div>5. ดำเนินงานตามเงื่อนไขของสัญญา/ส่งมอบงานงวดต่างๆ</div>
                                                    <div className="fz-14">{actionPlanItem.step5.SEDate}</div>
                                                </div>
                                                </th>
                                                {/*action plan*/}
                                                    <th className={actionPlanItem.step5.october}></th>
                                                    <th className={actionPlanItem.step5.november}></th>
                                                    <th className={actionPlanItem.step5.december}></th>
                                                    <th className={actionPlanItem.step5.january}></th>
                                                    <th className={actionPlanItem.step5.february}></th>
                                                    <th className={actionPlanItem.step5.march}></th>
                                                    <th className={actionPlanItem.step5.april}></th>
                                                    <th className={actionPlanItem.step5.may}></th>
                                                    <th className={actionPlanItem.step5.june}></th>
                                                    <th className={actionPlanItem.step5.july}></th>
                                                    <th className={actionPlanItem.step5.august}></th>
                                                    <th className={actionPlanItem.step5.september}></th>
                                                    <th></th>
                                            </tr>
                                            );
                                            rows.push(
                                                <tr>
                                                <th>
                                                <div className="normalText d-flex flex-column justify-content-left">
                                                    <div>6. วันที่สิ้นสุดสัญญา/วันที่แล้วเสร็จ</div>
                                                    <div className="fz-14">{actionPlanItem.step6.SEDate}</div>
                                                </div>
                                                </th>
                                                {/*action plan*/}
                                                    <th className={actionPlanItem.step6.october}></th>
                                                    <th className={actionPlanItem.step6.november}></th>
                                                    <th className={actionPlanItem.step6.december}></th>
                                                    <th className={actionPlanItem.step6.january}></th>
                                                    <th className={actionPlanItem.step6.february}></th>
                                                    <th className={actionPlanItem.step6.march}></th>
                                                    <th className={actionPlanItem.step6.april}></th>
                                                    <th className={actionPlanItem.step6.may}></th>
                                                    <th className={actionPlanItem.step6.june}></th>
                                                    <th className={actionPlanItem.step6.july}></th>
                                                    <th className={actionPlanItem.step6.august}></th>
                                                    <th className={actionPlanItem.step6.september}></th>
                                                    <th></th>
                                            </tr>
                                            );
                        }
                        return rows;
                    })
                })
            })})
        }
        </>  
    );
};

export default Table;
