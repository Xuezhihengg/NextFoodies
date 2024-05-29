'use server';

import { redirect } from 'next';
import { saveMeal } from './meals';

export const shareAction = async (formData) => {
	function isInvalidText(text) {
		return !text || text.trim() === '';
	}
	const data = {
		creator: formData.get('name'),
		creator_email: formData.get('email'),
		title: formData.get('title'),
		summary: formData.get('summary'),
		instructions: formData.get('instructions'),
		image: formData.get('image'),
	};

	//data invalidation
	if (
		isInvalidText(data.creator) ||
		isInvalidText(title) ||
		isInvalidText(summary) ||
		isInvalidText(instructions) ||
		isInvalidText(email) ||
		!email.includes('@') ||
		!image
	) {
		return ({
			message:'Invalid input'
			
		})
	}

	await saveMeal(data);
};
