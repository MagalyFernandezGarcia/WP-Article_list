import { useEffect, useState } from "react";
import { fetchArticles } from "../services/Article.service";
import { ArticleResponseWP } from "../types/Article";
import ArticleSkeleton from "../components/article/ArticleSkeleton";

const nbArticlePerRequest = 2;
const ArticleList = () => {
	const [articles, setArticles] = useState<ArticleResponseWP[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		fetchArticles(nbArticlePerRequest, 1).then((result) => {
			setArticles((articles) => [...articles, ...result]);
			setIsLoading(false);
		});
	}, []);

	const test = articles.map((article: ArticleResponseWP) => {
		return <div>{article.id}</div>;
	});

	console.log(articles);

	return <div>{isLoading ? <ArticleSkeleton /> : test}</div>;
};

export default ArticleList;
