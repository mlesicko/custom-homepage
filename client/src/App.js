import React from "react";
import { connect } from "react-redux";

import PageTitle from "./PageTitle";
import CategoryList from "./categories/CategoryList";
import ModalWrapper from "./modal/ModalWrapper";

import { getData } from "./redux/apiActions";

import './App.css';

class App extends React.Component {
	componentDidMount() {
		this.props.getData();
	}

	render() {
		return (
			<ModalWrapper>
				<PageTitle />
				<CategoryList />
			</ModalWrapper>
		);
	}

}

const mapDispatchToProps = (dispatch) => ({
	getData: () => dispatch(getData())
});

export default connect(null, mapDispatchToProps)(App);
