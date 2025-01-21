import { ArticleResponseWP } from "../types/Article";

//localhost:8080/wp/v2/post

const { VITE_URL_WP } = import.meta.env;

export async function fetchArticles(
	nbElements: number,
	page = 1
): Promise<ArticleResponseWP[]> {
	const response = await fetch(
		"http://" + VITE_URL_WP + `wp-json/wp/v2/posts?page=${page}&per_page=${nbElements}`
	);
	const result: ArticleResponseWP[] = await response.json();
	return result;
}
