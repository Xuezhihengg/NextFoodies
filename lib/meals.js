import fs from 'node:fs';
import slugify from 'slugify';
import xss from 'xss';
import sql from 'better-sqlite3';
const db = sql('meals.db');

export async function getMeals() {
	// throw new Error('fetching data failed')
	return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(mealSlug) {
	return db.prepare('SELECT * FROM meals WHERE slug = ?').get(mealSlug);
}

export async function saveMeal(meal) {
	meal.slug = slugify(meal.title, { lower: true });
	meal.introduction = xss(meal.introduction);

	const extension = meal.image.name.split('.').pop();
	const fileName = `${meal.slug}.${extension}`;
	const stream = fs.createWriteStream(`public/images/${fileName}`);
	const bufferedImage = await meal.image.arrayBuffer();

	stream.write(Buffer.from(bufferedImage), (error) => {
		if (error) {
			throw new Error('save meal failed.');
		}
	});

	meal.image = `/images/${fileName}`;

	db.prepare(
		`
    INSERT INTO meals
        (title,summary,instructions,creator,creator_email,slug,image)
    VALUES (
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @slug,
        @image
    )`
	).run(meal);
}
