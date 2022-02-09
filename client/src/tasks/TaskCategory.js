import { connect } from "react-redux";

import {
	openEditTaskCategoryModal,
	openDeleteTaskCategoryModal,
	openAddTaskModal,
} from "../redux/modalActions";
import { moveTaskCategory } from "../redux/dataActions";

import Category from "../genericCategories/Category";
import Task from "./Task";

const TaskCategory = (props) => (
	<Category {...props} CategoryElement={Task} />
);

const mapDispatchToProps = (dispatch, {categoryIndex}) => ({
    openEditModal: () => dispatch(openEditTaskCategoryModal(categoryIndex)),
    openDeleteModal: () => dispatch(openDeleteTaskCategoryModal(categoryIndex)),
    openAddElementModal: () => dispatch(openAddTaskModal(categoryIndex)),
    moveCategoryUp: () =>
        dispatch(moveTaskCategory(categoryIndex, categoryIndex - 1)),
    moveCategoryDown: () =>
        dispatch(moveTaskCategory(categoryIndex, categoryIndex + 1))

});

export default connect(null, mapDispatchToProps)(TaskCategory);

