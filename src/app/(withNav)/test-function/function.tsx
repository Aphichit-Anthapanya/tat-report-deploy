import React from 'react';

const ReportTable = ({data}:{data: any}) => {
  return (
    <div className="table-responsive mb-20">
      <table className="table table-bordered">
        <tbody>
          {data.map((items: any) => (
            <tr>
              <th>
                <div className="normalText d-flex justify-content-center align-items-center">{items.id}</div>
              </th>
              <th>
                <div className="normalText d-flex justify-content-center align-items-center">{items.name}</div>
              </th>
              <th>
                <div className="normalText d-flex justify-content-center align-items-center">{items.age}</div>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportTable;
