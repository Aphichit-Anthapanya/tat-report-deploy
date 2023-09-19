import React from 'react';
import "@components/Report-temp/report-temp.scss";

const TotalTable = ({data}:any) => {
  return (
        <>
        {data.map((items: any, index: any) => {
            return items.total?.map((totaltem: any, totalIndex: any) => {
                console.log(totaltem.text)
                let rows = [];
                rows.push(
                    <tr>
                                <th></th>
                                <th></th>
                                <th>
                                    <div className="d-flex justify-content-center align-items-center">{totaltem.text}</div>
                                </th>
                                <th colSpan={2}></th>
                                <th>
                                    <div className="d-flex justify-content-center align-items-center">
                                        {totaltem.value}
                                    </div>
                                </th>
                                <th></th>
                                <th colSpan={12}></th>
                                <th></th>
                                </tr>
                    );
                    return rows;
        })}
        )
        }
        </>  
    );
};

export default TotalTable;
