// import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';

 import { useState,useEffect } from 'react';



 function FileUploadm(props) {

     const [data, setdata] = useState([])




    const {getRootProps, getInputProps, open, acceptedFiles} = useDropzone({noClick: true,noKeyboard: true});


   useEffect(() => {

    setdata([...data,acceptedFiles])
  
   }, [acceptedFiles])
   



      const files = data.map(file => (
        <li key={file.path}>
          {file.path} - {file.size} 
        </li>
      ));

      console.log(data);
    
  return (
    <div className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here</p>
        <button type="button" onClick={open}>
          Open File Dialog
        </button>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </div>
  );
}
export default FileUploadm

