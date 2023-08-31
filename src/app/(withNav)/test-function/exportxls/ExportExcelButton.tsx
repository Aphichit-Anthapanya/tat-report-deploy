import React from 'react';
import XLSX from 'xlsx';

const ExcelGenerator = () => {
  const generateExcel = () => {
    const data = [
      ['Name', 'Age'],
      ['John', 25],
      ['Jane', 30],
      // Add more data as needed
    ];

    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, 'data.xlsx');
  };

  return (
    <div>
      <button onClick={generateExcel}>Generate Excel</button>
    </div>
  );
};

export default ExcelGenerator;
