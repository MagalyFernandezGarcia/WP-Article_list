import Article from "./components/article/Article"
import ArticleSkeleton from "./components/article/ArticleSkeleton"



function App() {
  

  return (
    <>
    <h1> WP React</h1>
      <Article title="title" date={new Date(2020,11,30)} resume="resume"/>
      <Article title="title" date={new Date(2025,0,2)} resume="resume"/>
      <Article title="title" date={new Date(2025,0,13)} resume="resume"/>
      <ArticleSkeleton/>
    </>
  )
}

export default App
