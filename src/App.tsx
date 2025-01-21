import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArticleList from "./containers/ArticleList";


const App =()=>{
	<Router>
		<Routes>
		<Route path="/" element={<ArticleList />} />
		</Routes>
	</Router>
}

// function App() {
// 	return (
// 		<>
// 			<h1> WP React</h1>
// 			<ArticleList />
// 		</>
// 	);
// }

export default App;
