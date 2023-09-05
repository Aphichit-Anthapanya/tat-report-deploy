import React from 'react';
import * as XLSX from 'xlsx';

function ExportExcelButton(data:any) {
  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();

    // Create a worksheet for the main data
    const wsMain = XLSX.utils.json_to_sheet(data);

    // Create a worksheet for the subarray
    const subData = [
      { subName: 'Subitem 1' },
      { subName: 'Subitem 2' },
      // Add more subarray data as needed
    ];
    const wsSub = XLSX.utils.json_to_sheet(subData);

    // Add both worksheets to the workbook
    XLSX.utils.book_append_sheet(wb, wsMain, 'Main Data');
    XLSX.utils.book_append_sheet(wb, wsSub, 'Sub Data');

    // Convert the workbook to a binary string
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });

    // Create a Blob from the binary string
    const blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });

    // Create a download link
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data_with_subarray.xlsx';
    a.click();

    // Clean up
    URL.revokeObjectURL(url);
  };

  // Utility function to convert a string to an ArrayBuffer
  function s2ab(s:any) {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) {
      view[i] = s.charCodeAt(i) & 0xFF;
    }
    return buf;
  }

  return (
    <button onClick={exportToExcel}>
      Export to Excel
    </button>
  );
}

export default ExportExcelButton;





