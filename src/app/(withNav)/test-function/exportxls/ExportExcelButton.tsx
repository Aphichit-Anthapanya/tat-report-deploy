import React from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

interface ExcelExportProps {
  data: any;
  filename: string;
}

class ExcelExport extends React.Component<ExcelExportProps> {
  exportToExcel = () => {
    const { data, filename } = this.props;
    const headers = ['(1)ลำดับ', '(2)ชื่อกิจกรรม/งาน', '(3)รายการจัดซื้อ/จัดจ้าง', '(4)หน่วยงานที่รับผิดชอบ', '', '(5) วงเงินงบประมาณ ปี 2565(บาท)', '(6)แผนปฏิบัติการ'];
    const subheaders = ['ขั้นตอน','ต.ค.', 'พ.ย.', 'ธ.ค.', 'ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.'];

    // Create a new workbook
    const wb = XLSX.utils.book_new();

    // Create a worksheet
    const ws = XLSX.utils.json_to_sheet([]);

    // Define merge ranges for column headers
    ws['!merges'] = [
      { s: { r: 0, c: 0 }, e: { r: 1, c: 0 } },
      { s: { r: 0, c: 1 }, e: { r: 1, c: 1 } },
      { s: { r: 0, c: 2 }, e: { r: 1, c: 2 } },
      { s: { r: 0, c: 3 }, e: { r: 1, c: 4 } },
      { s: { r: 0, c: 5 }, e: { r: 1, c: 5 } },
    ];

    // Add the column headers
    XLSX.utils.sheet_add_aoa(ws, [headers], { origin: 'A1' });
    // Add the sub-headers
    XLSX.utils.sheet_add_aoa(ws, [subheaders], { origin: 'F2' });
    XLSX.utils.sheet_add_json(ws, data[0].info[0].department, { origin: 'A4', skipHeader: true });
    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    
    // Create a blob containing the Excel file data
    const binaryData = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
    const blob = new Blob([s2ab(binaryData)], { type: 'application/octet-stream' });
    
    // Helper function to convert binary string to array buffer
    function s2ab(s:any) {
      const buf = new ArrayBuffer(s.length);
      const view = new Uint8Array(buf);
      for (let i = 0; i < s.length; i++) {
        view[i] = s.charCodeAt(i) & 0xFF;
      }
      return buf;
    }

    // Create a download link and trigger the download
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();

    // Release the object URL
    window.URL.revokeObjectURL(url);
  };

  render() {
    return (
      <button onClick={this.exportToExcel}>Export to Excel</button>
    );
  }
}

export default ExcelExport;





