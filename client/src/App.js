import React from "react";
import { connect } from "react-redux";

import CustomHomepageRoutes from "./CustomHomepageRoutes";
import ModalWrapper from "./modal/ModalWrapper";

import { getData } from "./redux/apiActions";

import './App.css';

class App extends React.Component {
	componentDidMount() {
		this.props.getData();
	}

	innerContent = () => {
		if (this.props.loading || this.props.content === null) {
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
				<CustomHomepageRoutes />
			);
		}
	}

	render() {
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
	error: state.data.error,
	content: state.data.content,
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
