import React from "react";
import { connect } from "react-redux";

import CategoryList from "../genericCategories/CategoryList";
import { openAddTaskCategoryModal } from "../redux/modalActions";
import TaskCategory from "./TaskCategory";

class TasksPage extends React.Component {
	render() {
		return (
			<CategoryList
				categories={this.props.data.taskCategories}
				CategoryType={TaskCategory}
				onAddCategory={this.props.openAddCategoryModal}
				data={this.props.data}
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	data: state.data.content
});

const mapDispatchToProps = (dispatch) => ({
	openAddCategoryModal: () => dispatch(openAddTaskCategoryModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(TasksPage);
