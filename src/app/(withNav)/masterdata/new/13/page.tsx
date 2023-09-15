"use client";
import React from 'react';
import { BrowserRouter as Router, Route, Link , Routes} from 'react-router-dom';
import MasterDataComponent from './MasterDataComponent';
import NewComponent from './NewComponent';

const Page = () => {
  return (
    <>
      <Router>
        <h1>Page</h1>
        <Routes>
            <Route path="/masterdata/new/13" element={<MasterDataComponent/>} />
            <Route path="/new/13/:id" element={<NewComponent/>} />
        </Routes>
      </Router>
    </>
  );
};

export default Page;
