import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import SitesPage from "./sites/SitesPage";
import TasksPage from "./tasks/TasksPage";
import TitleBar from "./title/TitleBar";
import Navigation from "./Navigation";

const CustomHomepageRoutes = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Base />} >
				<Route path="pages" element={<SitesPage />} />
				<Route path="tasks" element={<TasksPage />} />
				<Route path="" element={<SitesPage />} />
			</Route>
		</Routes>
	</BrowserRouter>
);

const Base = () => (
	<>
		<TitleBar />
		<Navigation />
		<Outlet />
	</>
);

export default CustomHomepageRoutes;

