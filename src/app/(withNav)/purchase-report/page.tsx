"use client";
import Link from "next/link";
import React from "react";

export default function Page() {
    
    return (
        <>
        <div className='d-flex flex-column search-wrapper-section' style={{width: '100%'}}>
            <div className="d-flex flex-column">
            <>1. รายงานแผนปฏิบัติการจัดซื้อจัดจ้าง ประจำปีงบประมาณ25XX</>
                <div className="d-flex flex-column ml-20 mb-10">
                    <div className="d-flex flex-row">
                        <div className="mr-10">- งบลงทุน (เงินงบประมาณ)</div>
                        <Link href="/purchase-report/report-1/report-1-1">Link</Link>
                    </div>
                    <div className="d-flex flex-row">
                        <div className="mr-10">- งบสำรองกรณีจำเป็นเร่งด่วน</div>
                        <Link href="/purchase-report/report-1/report-1-2">Link</Link>
                    </div>
                    <div className="d-flex flex-row">
                        <div className="mr-10">- งบอุดหนุน</div>
                        <Link href="/purchase-report/report-1/report-1-3">Link</Link>
                    </div>
                    <div className="d-flex flex-row">
                        <div className="mr-10">- งบรายได้</div>
                        <Link href="/purchase-report/report-1/report-1-4">Link</Link>
                    </div>
                    <div className="d-flex flex-row">
                        <div className="mr-10">- งบอื่นๆ</div>
                        <Link href="/purchase-report/report-1/report-1-5">Link</Link>
                    </div>
                </div>
            </div>
            <div className="mb-10 d-flex flex-row">
                <div className="mr-10">2. รายงานสรุปแผนปฏิบัติการจัดซื้อจัดจ้าง(รายโครงการ) ประจำปีงบประมาณ 25XX</div>
                <Link href="/purchase-report/report-2">Link</Link>
            </div>
            <div className="mb-10 d-flex flex-row">
                <div className="mr-10">3. รายงานสรุปแผนปฏิบัติการจัดซื้อจัดจ้าง(ระดับฝ่าย) ประจำปีงบประมาณ 25XX</div>
                <Link href="/purchase-report/report-3">Link</Link></div>
            <div className="d-flex flex-column mb-10">
                <div className="mr-10">4. รายงานแผน-ผลปฏิบัติการจัดซื้อจัดจ้าง ประจำปีงบประมาณ 25XX ไตรมาสที่ X</div>
                <div className="d-flex flex-column ml-20 mb-10">
                    <div className="d-flex flex-row">
                        <div className="mr-10">- งบลงทุน (เงินงบประมาณ)</div>
                        <Link href="/purchase-report/report-4/report-4-1">Link</Link>
                    </div>
                    <div className="d-flex flex-row">
                        <div className="mr-10">- งบสำรองกรณีจำเป็นเร่งด่วน</div>
                        <Link href="/purchase-report/report-4/report-4-2">Link</Link>
                    </div>
                    <div className="d-flex flex-row">
                        <div className="mr-10">- งบอุดหนุน</div>
                        <Link href="/purchase-report/report-4/report-4-3">Link</Link>
                    </div>
                    <div className="d-flex flex-row">
                        <div className="mr-10">- งบรายได้</div>
                        <Link href="/purchase-report/report-4/report-4-4">Link</Link>
                    </div>
                    <div className="d-flex flex-row">
                        <div className="mr-10">- งบอื่นๆ</div>
                        <Link href="/purchase-report/report-4/report-4-5">Link</Link>
                    </div>
                </div>
            </div>
            <div className="mb-10 d-flex flex-row">
                <div className="mr-10">5. รายงานสรุปแผน-ผลปฏิบัติการจัดซื้อจัดจ้าง (รายโครงการ) ประจำปีงบประมาณ 25XX</div>
                <Link href="/purchase-report/report-5">Link</Link></div>
            <div className="mb-10 d-flex flex-row">
                <div className="mr-10">6. รายงานสรุปแผน-ผลปฏิบัติการจัดซื้อจัดจ้าง (รายโครงการ) ประจำปีงบประมาณ 25XX ดำเนินการต่อในปีงบประมาณ 25xx+1</div>
                <Link href="/purchase-report/report-6">Link</Link></div>
            <div className="mb-10 d-flex flex-row">
                <div className="d-flex flex-column">
                    <div className="mr-10">7. รายงานสรุปแผน-ผลปฏิบัติการจัดซื้อจัดจ้าง (ระดับฝ่าย) ประจำปีงบประมาณ 25XX ไตรมาสที่ X</div>
                    <>(แสดงข้อมูลจำนวนรายการ และ หมายเหตุแสดงจำนวนรายการเพิ่มแผนในแต่ละไตรมาส)</>
                </div>
                <Link href="/purchase-report/report-7">Link</Link>
            </div>
            <div className="mb-10 d-flex flex-row">
                <div className="mr-10">8. รายงานสรุปวิธีการจัดซื้อจัดจ้าง หรือการจัดหาพัสดุ ประจำปีงบประมาณ 25XX ไตรมาสที่ X</div>
                <Link href="/purchase-report/report-8">Link</Link>
            </div>
            <div className="mb-10 d-flex flex-row">
                <div className="mr-10">9. รายงานสรุปแผน-ผลปฏิบัติการจัดซื้อจัดจ้าง (ระดับฝ่าย) ประจำปีงบประมาณ 25XX ไตรมาสที่ X (แสดงข้อมูลจำนวนเงิน)</div>
                <Link href="/purchase-report/report-9">Link</Link>
            </div>
            <div className="mb-10 d-flex flex-row">
                <div className="mr-10">Test export</div>
                <Link href="/test-function/export1">Link</Link>
            </div>
        </div>
        </>
    )
}