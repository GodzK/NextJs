'use client';

import React from "react";
import {useRef ,  useState} from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';

export default function ImagePicker({ label, name }) {
const [pickedImage, setPickedImage] = useState();
const imageInput =  useRef();


 function handlePickClick(){
    imageInput.current.click();
    }
function handleImageChange(event){
    const file = event.target.files[0];

    if(!file)
    {
      return;
    } 

   const fileReader = new FileReader();

   fileReader.onload =() => {
    setPickedImage(fileReader.result);
   };
  
   fileReader.readAsDataURL(file);
    }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label> 
      <div className={classes.controls}>
        <div className={classes.preview}>
        {!pickedImage && <p>No Image picked yet.</p> }
        {pickedImage && (<Image src={pickedImage}
         alt="image select by User" 
         fill/>)  
         }
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
        />
        <button className={classes.button} type="button" onClick={handlePickClick}>Pick an Image</button>
      </div>
    </div>
  );
}