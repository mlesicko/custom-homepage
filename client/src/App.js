import React from "react";
import CategoryList from "./categories/CategoryList";
import ModalWrapper from "./modal/ModalWrapper";
import './App.css';

class App extends React.Component {
	render() {
		return (
			<ModalWrapper>
				<div className="page-title">
					Home<span className="red-part">Page</span>
				</div>
				<CategoryList />
			</ModalWrapper>
		);
	}

}

export default App;
