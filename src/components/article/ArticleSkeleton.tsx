import style from "./article.module.scss"
const ArticleSkeleton = () => {

    return (
        <div className= {`${style.article} ${style.articleSkeleton}`}>
            <h3></h3>
            <p></p>
            <div className={style.resume}>
            <p></p>
            </div>
        </div>
    )
    
}

export default ArticleSkeleton