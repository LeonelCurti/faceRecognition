import React from 'react'

const Navigation = ({ onRouteChange, isSignedIn }) => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">

        <a className="navbar-brand" href="/index.html">Face Detection</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          
          {isSignedIn
          ?
            <ul className="navbar-nav  ml-auto">
              <li className="nav-item ">
                <a 
                  className="nav-link btn btn-outline-dark"
                  href='/' 
                  onClick={(e)=>{
                    e.preventDefault();
                    onRouteChange('signout')}}>
                  Sign Out
                </a>
              </li>
            </ul>
          :
            <ul className="navbar-nav  ml-auto">
              <li className="nav-item ">
                <a 
                  className="nav-link btn btn-outline-dark"
                  href='/' 
                  onClick={(e)=>{
                    e.preventDefault();
                    onRouteChange('signin')}}>
                  Sign In
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className="nav-link"
                  href='/' 
                  onClick={(e)=>{
                    e.preventDefault();
                    onRouteChange('register')}}>
                  Register
                </a>
              </li>
            </ul>
          }                                   
                  
        </div>
        
      </nav>

  )

}

export default Navigation;
