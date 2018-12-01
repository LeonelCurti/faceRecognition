import React from 'react';


const ImageLinkForm = ({currentUser,onInputChange, onButtonSubmit}) => {
  return (
    <div className="container mt-3 text-center">

      <div className="row">

        <div className="col-sm-8 col-md-7 col-lg-6 mx-auto">

          <h3>User Information</h3>

          <ul className="list-group mb-2">
            <li className="list-group-item">Name: {`${currentUser.name}`}</li>
            <li className="list-group-item">Number of detections: {`${currentUser.entries}`}</li>  
          </ul>   
          <div className="input-group mb-3">
            <input 
              type="text" 
              onChange={onInputChange}
              className="form-control"
              placeholder="Insert url of the image" 
              aria-describedby="basic-addon1"/>
            <div className="input-group-prepend">
              <button 
                className="btn btn-success" 
                type="button"
                onClick={onButtonSubmit}
                >Detect</button>
            </div>
          </div>

        </div>

      </div>

    </div>

  )
}
export default ImageLinkForm;