
import style from "./article.module.scss"

type ArticleProps = {
    title : string
    date : Date
    resume : string
}

const Article = ({title, date, resume}: ArticleProps) => {

    const renderDate = date.toLocaleDateString("fr-BE", {
        day: "numeric",
        month: "long",
        year: (new Date().getFullYear() !== date.getFullYear()) ?"numeric" : undefined})

    const isToday = date.toDateString() === new Date().toDateString()  

    return (
        <div className={style.article}>
            <h3>{title}</h3>
            <p>{isToday ? "Aujourd'hui" : renderDate}</p>
            <div>
            <p className={style.resume}>{resume}</p>
            </div>
        </div>
    )
    
}

export default Article