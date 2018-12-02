import React from 'react';
import './FaceRecognition.css';


const FaceRecognition = ({imageUrl, box}) => {
  return (
    <div className='m-auto d-flex justify-content-center'>
      {
        imageUrl
        ?
        <div className='position-absolute mt-2'>        
          <img 
            id='inputimage' 
            src={imageUrl} 
            alt="img" 
            width='300px' 
            heigh='auto' />              
          <div 
            className='bounding-box'
            style={{
              top: box.topRow,
              right: box.rightCol,
              bottom: box.bottomRow,
              left: box.leftCol }}>
          </div>
        </div> 

        :null
      }
    </div>    
  )
}
export default FaceRecognition;