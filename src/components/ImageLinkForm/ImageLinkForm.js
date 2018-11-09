import React from 'react';


const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
  return (
    <div>
      <p className='f3'>
        {'Face detection, insert image'}
      </p>
      <div className="center">
        <div className='center pa4 br3'>         
          <input 
            className='f2 pa2 w-70 center pv2'
            type="text"
            onChange={onInputChange}/>
          <button
            className='w-30 grow link ph3  dib white bg-light-red f3 '
            onClick={onButtonSubmit}>
            Detect
          </button>
        </div>
        
      </div>
    </div>
  )
}
export default ImageLinkForm;