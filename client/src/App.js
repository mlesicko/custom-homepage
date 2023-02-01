import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CustomHomepageRoutes from "./CustomHomepageRoutes";
import ModalWrapper from "./modal/ModalWrapper";

import { getData, pushData } from "./api";
import { loadingData, dataLoaded, dataLoadFailed } from "./redux/dataActions";

import './App.css';

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadingData);
		getData()
			.then((data) => dispatch(dataLoaded(data)))
			.catch((e) => dispatch(dataLoadFailed(e)));
	}, [dispatch]);

	const loading = useSelector((state) => state.data.loading);
	const content = useSelector((state) => state.data.content);
	const error = useSelector((state) => state.data.error);

	useEffect(() => { content && pushData(content) }, [content]);

	const innerContent = (() => {
		if (loading || content === null) {
			return (
				<div className="loading-msg">Loading...</div>
			);
		} else if (error) {
			return (
				<>
					<div className="error-msg-1">
						Error: Could not load data.
					</div>
					<div className="error-msg-2">
						Please check that the server is running.
					</div>
				</>
			);
		} else {
			return (
				<CustomHomepageRoutes />
			);
		}
	})();

	return (
		<ModalWrapper>
			{innerContent}
		</ModalWrapper>
	);

}

export default App;
