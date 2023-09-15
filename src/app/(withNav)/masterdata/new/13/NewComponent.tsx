import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const NewComponent = () => {
  const { id } = useParams();
  const history = useNavigate ();

  const handleClick = (id:any) => {
    history(`/new/1/${id}`);
  };  

  const ids = [1, 2, 3];
  return (
    <div>
      <h2>New Component</h2>
      <p>Received ID: {id}</p>
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

export default NewComponent;
