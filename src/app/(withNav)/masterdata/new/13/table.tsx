import React, { useState } from 'react';

const TableWithSubtable = () => {
  const [showSubtable, setShowSubtable] = useState(false);

  const toggleSubtable = () => {
    setShowSubtable(!showSubtable);
  };

  return (
    <div className="table-container mb-20">
      <table className="table">
        <thead>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
            <th>Header 3</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Data 1</th>
            <th>Data 2</th>
            <th>Data 3</th>
            <th>
              <button onClick={toggleSubtable}>
                {showSubtable ? 'Hide Subtable' : 'Show Subtable'}
              </button>
            </th>
          </tr>
          {showSubtable && (
            <tr>
              <th>Subdata 1</th>
              <th>Subdata 2</th>
              <th>Subdata 3</th>
              <th></th>
            </tr>
      )}
        </tbody>
      </table>


    </div>
  );
};

export default TableWithSubtable;
