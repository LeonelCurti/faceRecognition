import React from 'react'
import imageLogo from '../../components/Logo/imageLogo.png';

const Navigation = () => {
  return (
    <div 
      className='ma4 mt2'
      style={{display:'flex',justifyContent:'space-between'}}>
      <div>
        <img 
          src={imageLogo} 
          alt="imageLogo" />
      </div>
      <nav>
        <p 
          className='f3 grow 
          dim black no-underline pa3 pointer'>Sign Out
        </p>
      </nav>      
    </div>
  );
}

export default Navigation;
