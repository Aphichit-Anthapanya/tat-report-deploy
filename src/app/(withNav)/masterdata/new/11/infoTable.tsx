import React from 'react';
import "@components/Report-temp/report-temp.scss";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect} from "react";

const Table = ({data}:any) => {
    
    const [visibleRows, setVisibleRows] = useState(new Set());

    const toggleSubtable = (rowKey: any) => {
        setVisibleRows((prevVisibleRows) => {
        const newVisibleRows = new Set(prevVisibleRows);
        if (newVisibleRows.has(rowKey)) {
            newVisibleRows.delete(rowKey);
        } else {
            newVisibleRows.add(rowKey);
        }
        return newVisibleRows;
        });
    };


  return (
        <>
        {data.map((items: any, index: any) => {
                        let rows = [];
                        const successRowKey = `level1`;
                        const level2RowKey = `level1-${index}`;
                            if (!visibleRows.has(successRowKey)) {
                                rows.push(
                                    <tr key={index}>
                                        <th>
                                            <div className="normalText d-flex justify-content-center align-items-center">
                                                <button className="open-button icon-button bi bi-pencil"></button>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="normalText d-flex justify-content-center align-items-center">
                                                <button className="open-button icon-button bi bi-trash"></button>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="normalText d-flex justify-content-center align-items-center">
                                                <button className="open-button icon-button bi bi-file-earmark-text-fill" onClick={() => toggleSubtable(level2RowKey)}></button>
                                            </div>
                                        </th>
                                        <th className="table-success">
                                            <div className="normalText d-flex justify-content-left align-items-center">{items.userGroup}</div>
                                        </th>
                                        <th>
                                            <div className="normalText d-flex justify-content-center align-items-center">{items.note}</div>
                                        </th>
                                    </tr>
                                    );
                            }
                            
                            {items.level2User?.map((level2UserItem: any, level2UserIndex: any) => {
                                const level3RowKey = `level2-${index}-${level2UserIndex}`;
                                if (visibleRows.has(level2RowKey)) {
                                    rows.push(
                                        <tr key={level2UserIndex-1}>
                                            <th>
                                                <div className="normalText d-flex justify-content-center align-items-center">
                                                    <button className="open-button icon-button bi bi-pencil"></button>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="normalText d-flex justify-content-center align-items-center">
                                                    <button className="open-button icon-button bi bi-trash"></button>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="normalText d-flex justify-content-center align-items-center">
                                                    <button className="open-button icon-button bi bi-file-earmark-text-fill" onClick={() => toggleSubtable(level3RowKey)}></button>
                                                </div>
                                            </th>
                                            <th  className="table-warning">
                                                <div className="normalText d-flex justify-content-left align-items-center">{level2UserItem.userGroup}</div>
                                            </th>
                                            <th>
                                                <div className="normalText d-flex justify-content-center align-items-center">{level2UserItem.note}</div>
                                            </th>
                                        </tr>
                                        );
                                }
                                {level2UserItem.level3User?.map((level3UserItem: any, level3UserIndex: any) => {
                                    if (visibleRows.has(level3RowKey)) {
                                        rows.push(
                                            <tr key={level3UserIndex}>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">
                                                        <button className="open-button icon-button bi bi-pencil"></button>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">
                                                        <button className="open-button icon-button bi bi-trash"></button>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-left align-items-center">{level3UserItem.userGroup}</div>
                                                </th>
                                                <th>
                                                    <div className="normalText d-flex justify-content-center align-items-center">{level3UserItem.note}</div>
                                                </th>
                                            </tr>
                                        );
                                    }
                                })}
                            }
                            )}
                        return rows;
                    }
                ) 
            }
        </>  
    );
};

export default Table;
