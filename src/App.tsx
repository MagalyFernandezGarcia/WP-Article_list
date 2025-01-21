import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArticleList from "./containers/ArticleList";
import Login from "./components/auth/Login";
import CreateArticle from "./components/article/CreateArticle";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<ArticleList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create/" element={<CreateArticle/>} />
    </Routes>
  </Router>
);

// function App() {
// 	return (
// 		<>
// 			<h1> WP React</h1>
// 			<ArticleList />
// 		</>
// 	);
// }

export default App;
