"use client";

import { usePathname } from 'next/navigation';
import styles from '../styles/header.module.scss';

export default function Header(){

    const path = usePathname();
    const isRoot = path  === '/';
  
    if (isRoot) {
      return <></>;
    }

    return (
        <>
            <div className='d-flex top-header justify-content-between'>
            <div className="d-flex">
                <div>
                <img className="image-title-logo float-lft" src="/assets/image/TTT_Logo.png" alt="logo_ttt" style={{width: 92,height: 'auto',}}/>
                </div>
                <div className="header-text">
                    <h3>ระบบข้อมูลแผนปฏิบัติการและการติดตามประเมินผล</h3>
                </div>
            </div>
            <div className="d-flex">
                <div className="user-profile-logo p-2 pt-3">
                    <img style={{width: 50,height: 48,}} src="/assets/image/vector/account_logo.png" alt="user_logo" />
                </div>
                <div className="user-name-text p-2 pt-3"><span>Somchai B. <i className="bi bi-chevron-down user-name-texxt-chev"></i></span></div>
                <div className="p-2 pt-3 logo_help_wrapper">
                    <img className="logo_help" style={{width: 28,height: 24,}} src="/assets/image/vector/info_icon.png" alt="user_help" />
                </div>
                <div className="p-2 pt-3 logo_logout_wrapper">
                    <img className="logo_logout float-rgt" style={{width: 28,height: 24,}} src="/assets/image/vector/log_out.png" alt="logo_logout" />
                </div>
            </div>
            </div>
        </>
    )
}