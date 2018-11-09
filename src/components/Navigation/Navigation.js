import React from 'react'
import imageLogo from '../../components/Logo/React-icon.svg.png';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if(isSignedIn){
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
            dim black no-underline pa3 pointer'
            onClick={()=>onRouteChange('signout')}
            >Sign Out
          </p>
        </nav>      
      </div>
    )
  }else{
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
          dim black no-underline pa3 pointer'
          onClick={()=>onRouteChange('signin')}
          >Sign In
        </p>
        <p 
          className='f3 grow 
          dim black no-underline pa3 pointer'
          onClick={()=>onRouteChange('register')}
          >Register
        </p>
      </nav>      
    </div> 
    )
  }    
}

export default Navigation;
