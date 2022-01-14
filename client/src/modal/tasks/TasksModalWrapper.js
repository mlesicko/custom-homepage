import React from "react";
import { connect } from "react-redux";
import {
    ADD_TASK,
    TASK,
    ADD_TASK_CATEGORY,
    EDIT_TASK_CATEGORY,
    DELETE_TASK_CATEGORY
} from '../modalTypes';
import AddTaskModal from "./AddTaskModal";
import TaskModal from "./TaskModal";
import AddCategoryModal from "./AddCategoryModal";
import EditCategoryModal from "./EditCategoryModal";
import DeleteCategoryModal from "./DeleteCategoryModal";

class ModalWrapper extends React.Component {
	getModalContent = () => {
		switch (this.props.type) {
			case ADD_TASK:
				return AddTaskModal;
			case TASK:
				return TaskModal;
			case ADD_TASK_CATEGORY:
				return AddCategoryModal;
			case EDIT_TASK_CATEGORY:
				return EditCategoryModal;
			case DELETE_TASK_CATEGORY:
				return DeleteCategoryModal;
			default:
				return null;
		} 
	}

	render() {
		const ModalContent = this.getModalContent()
		const category = this.props.data.taskCategories[this.props.categoryIndex];
		const task = category?.elements?.[this.props.taskIndex];
		return (
			<ModalContent
				data={this.props.data}
				categoryIndex={this.props.categoryIndex}
				taskIndex={this.props.taskIndex}
				category={category}
				task={task}
				close={this.props.close}
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	data: state.data.content,
	type: state.modalState.type,
	categoryIndex: state.modalState.category,
	taskIndex: state.modalState.element
});

export default connect(mapStateToProps)(ModalWrapper);
