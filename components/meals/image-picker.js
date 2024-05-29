'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import classes from './image-picker.module.css';

export default function ImagePicker({ name, label }) {
	const [pickedImage, setPickedImage] = useState(null);
	const imageInputRef = useRef();
	const imagePickHandler = () => {
		imageInputRef.current.click();
	};
	const imageReviewHandler = (event) => {
		const file = event.target.files[0];
		if (!file) return;
		const fileReader = new FileReader();
		fileReader.onload = () => {
			setPickedImage(fileReader.result);
		};
		fileReader.readAsDataURL(file);
	};
	return (
		<div className={classes.picker}>
			<label htmlFor={name}>{label}</label>
			<div className={classes.controls}>
				<div className={classes.preview}>
					{!pickedImage && <p>No image picked yet.</p>}
					{pickedImage && (
						<Image src={pickedImage} alt="The image selected by the user." fill />
					)}
				</div>
				<input
					className={classes.input}
					type="file"
					name={name}
					id={name}
					accept="image/png,image/jpg"
					ref={imageInputRef}
					onChange={imageReviewHandler}
				></input>
				<button className={classes.button} type="button" onClick={imagePickHandler}>
					Pick an image
				</button>
			</div>
		</div>
	);
}
