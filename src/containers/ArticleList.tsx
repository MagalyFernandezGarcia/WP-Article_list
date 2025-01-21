import { useEffect, useRef, useState } from "react";
import { fetchArticles } from "../services/Article.service";
import { ArticleResponseWP } from "../types/Article";
import ArticleSkeleton from "../components/article/ArticleSkeleton";
import Article from "../components/article/Article";
import BtnMore from "../components/btn/btnMore";

const nbArticlePerRequest = 2;
const ArticleList = () => {
	const [articles, setArticles] = useState<ArticleResponseWP[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	useEffect(() => {
		fetchArticles(nbArticlePerRequest, currentPage).then((result) => {
			setArticles((articles) => [...articles, ...result]);

			setIsLoading(false);
		});
	}, [currentPage]);

	const addArticle = () => {
		setCurrentPage(currentPage + 1);
	};

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

	return (
		<div>
			{isLoading ? <ArticleSkeleton /> : dispalyArticles}
			<BtnMore onSetPage={addArticle} />
		</div>
	);
};

export default ArticleList;
