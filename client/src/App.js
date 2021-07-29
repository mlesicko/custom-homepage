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

	innerContent = () => {
		if (this.props.loading) {
			return (
				<div className="loading-msg">Loading...</div>
			);
		} else if (this.props.error) {
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
				<>
					<PageTitle />
					<CategoryList />
				</>
			);
		}
	}

	render() {
		console.log(this.props);
		return (
			<ModalWrapper>
				{this.innerContent()}
			</ModalWrapper>
		);
	}

}

const mapDispatchToProps = (dispatch) => ({
	getData: () => dispatch(getData())
});

const mapStateToProps = (state) => ({
	loading: state.data.loading,
	error: state.data.error
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
