import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyComponent = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/masterdata/new/9', { replace: true });
  };

  return (
    <div>
      <button onClick={handleClick}>Navigate</button>
    </div>
  );
};

export default MyComponent;
