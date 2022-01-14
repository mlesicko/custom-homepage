import React from "react";
import { connect } from "react-redux";

import { openTaskModal } from "../redux/modalActions";

import "./task.css";

class Task extends React.Component {
	render() {
		return (
			<div className="task" onClick={this.props.openTaskModal}>
				{this.props.element.title}
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch, ownProps) => ({
	openTaskModal: () => (dispatch(
		openTaskModal(ownProps.categoryIndex, ownProps.elementIndex)
	))
});

export default connect(null, mapDispatchToProps)(Task);
