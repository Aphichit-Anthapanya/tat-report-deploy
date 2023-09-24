"use client";
import Link from "next/link";
import React from "react";

export default function Page() {
    
    return (
        <>
            <div className='d-flex flex-column' style={{width: '100%'}}>
                <div className="d-flex flex-row mt-20">
                    <div className="mr-10">1. Parameter</div>
                    <Link href="/masterdata/new/1">link</Link>
                </div>
                <div className="d-flex flex-row mt-20">
                    <div className="mr-10">2. List of Value</div>
                    <Link href="/masterdata/new/2">link</Link>
                </div>
                <div className="d-flex flex-row mt-20">
                    <div className="mr-10">3. ข้อมูลผู้ใช้งาน</div>
                    <Link href="/masterdata/new/3">link</Link>
                </div>
                <div className="d-flex flex-row mt-20">
                    <div className="mr-10">4. สิทธิการใช้งาน (Group)</div>
                    <Link href="/masterdata/new/4">link</Link>
                </div>
                <div className="d-flex flex-row mt-20">
                    <div className="mr-10">5. Service Area</div>
                    <Link href="/masterdata/new/5">link</Link>
                </div>
                <div className="d-flex flex-row mt-20">
                    <div className="mr-10">6. พื้นที่ดำเนินการ</div>
                    <Link href="/masterdata/new/6">link</Link>
                </div>
                <div className="d-flex flex-row mt-20">
                    <div className="mr-10">7. กลุ่มเป้าหมาย</div>
                    <Link href="/masterdata/new/7">link</Link>
                </div>
                <div className="d-flex flex-row mt-20">
                    <div className="mr-10">8. Outcome (Level 1)</div>
                    <Link href="/masterdata/new/8">link</Link>
                </div>
                <div className="d-flex flex-row mt-20">
                    <div className="mr-10">9. Output (Level 1)</div>
                    <Link href="/masterdata/new/9">link</Link>
                </div>
                <div className="d-flex flex-row mt-20">
                    <div className="mr-10">10. Master Plan</div>
                    <Link href="/masterdata/new/10">link</Link>
                </div>
                <div className="d-flex flex-row mt-20">
                    <div className="mr-10">11. กลุ่มผู้มีส่วนได้ส่วนเสีย</div>
                    <Link href="/masterdata/new/11">link</Link>
                </div>
                <div className="d-flex flex-row mt-20">
                    <div className="mr-10">12. คำนิยาม</div>
                    <Link href="/masterdata/new/12">link</Link>
                </div>
            </div>
        </>
    )
}