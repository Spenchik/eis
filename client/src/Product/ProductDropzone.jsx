import React, {useContext, Component, useCallback} from 'react';
import {useDropzone} from 'react-dropzone'
import Context from '../context';
import { useState } from 'react';
//import {base}

const imageMaxSize = 16000000;
const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg';
const acceptedFileTypesArray = acceptedFileTypes.split(",").map((item) => {return item.trim()})

function ProductDropzone(props) {
  const { onImageDrop } = useContext(Context);
  const {image, setImage} = useState('');
  // const { image } = this.props;
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');
      reader.onload = () => {
      // Do whatever you want with the file contents
        const binaryStr = reader.result;
        setImage(binaryStr);
        onImageDrop(binaryStr);
        console.log(binaryStr)
      }
      reader.readAsArrayBuffer(file)
    })
    
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <div className='picture' style={{ backgroundImage: `url(${image})` }} />
      <p>Drag 'n' drop some file here, or click to select file</p>
    </div>
  )
}

export default ProductDropzone