import { useEffect, useState } from "react"
import { fetchArticles } from "../services/Article.service"
import { ArticleResponseWP } from "../types/Article"

const nbArticlePerRequest = 2
const ArticleList = () => {
    const [articles, setArticles] = useState<ArticleResponseWP[]>([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetchArticles( nbArticlePerRequest, 1)
        .then((result)=>{
            setArticles(articles => [...articles, ...result])
            setIsLoading(false)
        })
        
    },[])



    return(
        <div>
           test 
        </div>
    )
}

export default ArticleList