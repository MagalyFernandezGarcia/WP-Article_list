import { useEffect, useState } from "react";
import { fetchArticles } from "../services/Article.service";
import { ArticleResponseWP } from "../types/Article";
import ArticleSkeleton from "../components/article/ArticleSkeleton";
import Article from "../components/article/Article";
import BtnMore from "../components/btn/btnMore";

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

	const dispalyArticles = articles.map((article: ArticleResponseWP) => {
		return (
			<>
				<Article
					key={article.id}
					date={new Date(article.date)}
					resume={article.excerpt.rendered}
					title={article.title.rendered}
				/>
			</>
		);
	});

	return <div>{isLoading ? <ArticleSkeleton /> : dispalyArticles}</div>;
};

export default ArticleList;
