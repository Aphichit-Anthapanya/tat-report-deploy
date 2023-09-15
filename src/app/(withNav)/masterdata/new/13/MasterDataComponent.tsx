// MasterDataComponent.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

const MasterDataComponent = () => {
  const history = useNavigate ();

  const handleClick = (id:any) => {
    history(`/new/13/1`);
  };

  const ids = [1, 2, 3];

  return (
    <div>
      <h2>Master Data Component</h2>
      <ul>
        {ids.map((id) => (
          <li key={id}>
            <button onClick={() => handleClick(id)}>Link {id}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MasterDataComponent;
