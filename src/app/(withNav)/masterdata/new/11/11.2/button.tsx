import React from 'react';
import "@components/Report-temp/report-temp.scss";
import { useParams, useRouter } from "next/navigation";
import Popup from './popup';
import Popup2 from './popup2';
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Button = () => {
      const navigate = useNavigate();
      const location = useLocation();
      var data = location.state.dataToSend;
      const router = useRouter();
  return (
        <div className="d-flex flex-row mb-50">
                            <div><button className="btn btn-primary" onClick={() => navigate('/masterdata/new/11/11.1', {replace: true, state: data})}>องค์ประกอบ</button></div>
                            <div><button className="btn btn-secondary" onClick={() => navigate('/masterdata/new/11/11.2', {replace: true, state: data})}>ประเด็นที่เกี่ยวข้อง</button></div>
                        </div>
  );
};

export default Button;
