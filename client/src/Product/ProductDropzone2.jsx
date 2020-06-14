import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import { useContext } from 'react';

const imageMaxSize = 16000000;
const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg';
const acceptedFileTypesArray = acceptedFileTypes.split(",").map((item) => {return item.trim()})

export default class ProductDropzone2 extends Component {
  //const {onImageDrop} = useContext(props)
  constructor(props) {
    super(props);
    this.onDrop = this.onDrop.bind(this);
    this.state = {
      image: []
    };
  }

  onDrop (acceptedFiles) {
    console.log(acceptedFiles[0]);
    const reader = new FileReader();
    reader.onabort = () => console.log('file reading was aborted');
    reader.onerror = () => console.log('file reading has failed');
    reader.onload = () => {
      const binaryStr = reader.result;
      this.props.onImageDrop(binaryStr);
      //console.log(binaryStr)
    }
    reader.readAsDataURL(acceptedFiles[0]);    
  }

  render() {
    return (
      <div className="text-center mt-5">
        <Dropzone onDrop={this.onDrop}
                  multiple={false}
                  maxSize={imageMaxSize}
                  accept={acceptedFileTypes}
        >
          {({getRootProps, getInputProps}) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              Click me to upload a file!
            </div>
          )}
        </Dropzone>
      </div>
    );
  }
}
