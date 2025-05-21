
import React from 'react';
import { ClipLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div style={{
      position: 'fixed', 
      top: 0,
      left: 0,
      width: '100vw', 
      height: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      zIndex: 9999, 
    }}>
      <ClipLoader color="#DC5F00" size={80} />
    </div>
  );
};

export default Loading;
