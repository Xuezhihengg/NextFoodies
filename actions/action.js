'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from '../lib/meals';
import { revalidatePath } from 'next/cache';

export const shareAction = async (prevState,formData) => {
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
		isInvalidText(data.title) ||
		isInvalidText(data.summary) ||
		isInvalidText(data.instructions) ||
		isInvalidText(data.creator_email) ||
		!data.creator_email.includes('@') ||
		!data.image
	) {
		return ({
			message:'Invalid input'
		})
	}

	await saveMeal(data);
	revalidatePath('/meals')
	redirect('/meals')
};
