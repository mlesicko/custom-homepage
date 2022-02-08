import { useDispatch, useSelector } from "react-redux";

import CategoryList from "../genericCategories/CategoryList";
import { openAddTaskCategoryModal } from "../redux/modalActions";
import TaskCategory from "./TaskCategory";

const TasksPage = () => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.data.content);
	return (
		<CategoryList
			categories={data.taskCategories}
			CategoryType={TaskCategory}
			onAddCategory={() => dispatch(openAddTaskCategoryModal())}
			data={data}
		/>
	);
};

export default TasksPage;
