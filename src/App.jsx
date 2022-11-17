import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";

function App() {
	return (
		<div className="bg-gray-200 min-h-screen">
			<Router>
				<div className="bg-blue-500 w-full h-24 flex items-center justify-center">
					<nav className="px-5 md:px-0 container mx-auto text-white flex items-center justify-between">
						<Link to="/">
							<h1 className="text-lg md:text-3xl font-black">Me.</h1>
						</Link>
						<div className="flex items-center justify-center gap-x-5 md:gap-x-10 text-sm md:text-xl ">
							<Link to="/">Messages</Link>
							<Link to="/create">Create</Link>
						</div>
					</nav>
				</div>
				<div className="px-5 md:px-0 container mx-auto py-10">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/create" element={<Create />} />
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default App;
