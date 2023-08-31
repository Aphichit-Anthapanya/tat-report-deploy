import React from 'react';
import XLSX from 'xlsx';

function ExportExcelButton(data : any) {
  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(data);

    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    var s:any;
    // Generate a blob from the workbook
    const blob = XLSX.write(wb, { bookType: 'xlsx', type: s });

    // Create a download link
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.xlsx';
    a.click();

    // Clean up
    URL.revokeObjectURL(url);
  };

  return (
    <button onClick={exportToExcel}>
      Export to Excel
    </button>
  );
}

export default ExportExcelButton;
