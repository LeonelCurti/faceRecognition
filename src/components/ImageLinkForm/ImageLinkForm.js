import React from 'react';


const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
  return (
    <div className='pb2'>
      <p className='f3'>
        {'Face detection, insert image'}
      </p>
      <div 
        style={{display:'flex', justifyContent:'center'}}
        className='center w-80'>
        <input 
          className='f2  w-70 center pv2'
          type="text"
          onChange={onInputChange}/>
        <button
          className='w-30 grow link ph3  dib white bg-light-red f3 '
          onClick={onButtonSubmit}>
          Detect
        </button>
      </div>
    </div>
  )
}
export default ImageLinkForm;