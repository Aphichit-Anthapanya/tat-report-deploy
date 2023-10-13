import React from 'react';
import * as XLSX from 'xlsx';

function ExportExcelButton(data:any) {

  const columns = [{
    dataField: 'id',
    text: 'ID'
  }, {
    dataField: 'name',
    text: 'Name'
  }, {
    dataField: 'age',
    text: 'Age'
  }];
  
  const data1 = [{
    id: 1,
    name: 'John Doe',
    age: 25
  }, {
    id: 2,
    name: 'Jane Doe',
    age: 30
  }, {
    id: 3,
    name: 'Jim Doe',
    age: 35
  }];
  

  return (
    <>
    </>
  );
}

export default ExportExcelButton;





