import { ArticleRequestWP, ArticleResponseWP } from "../types/Article";

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


export async function createArticle(article : ArticleRequestWP) : Promise<boolean>{

	try{
		const wpApiSettings = (window as any).wpApiSettings
		const nonce = wpApiSettings?.nonce

		if(!nonce){
			console.error("Nonce non trouvé")
			return false
		}

		const response = await fetch("http://" + VITE_URL_WP +"wp-json/wp/v2/posts",{
			method : "POST",
			headers: {
				"Content-Type" : "application/json",
				"X-WP-Nonce" : nonce
			},
			body : JSON.stringify({
				title : article.title,
				content : article.content,
				status : "publish"
			}),
			credentials: "include"
		})
		return response.ok

	}catch(error){
		console.error("Erreur lors de la création de l'article : ", error)
		return false
	}

}