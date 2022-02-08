import { useDispatch } from "react-redux";

import { openTaskModal } from "../redux/modalActions";

import "./task.css";

const Task = ({element, categoryIndex, elementIndex}) => {
	const dispatch = useDispatch();
	const openTask = () => dispatch(openTaskModal(categoryIndex, elementIndex));
	return (
		<button className="task" onClick={openTask}>
			{element.title}
		</button>
	);
};

export default Task;
