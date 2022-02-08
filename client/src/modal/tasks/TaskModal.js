import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	Button,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from "reactstrap";
import { updateTask, deleteTask } from "../../redux/apiActions";
import ModalInput from "../ModalInput";

const TaskModal = ({close}) => {
	const dispatch = useDispatch();

	const data = useSelector((state) => state.data.content);
	const previousCategoryIndex = useSelector((state) => state.modalState.category);
	const previousTaskIndex = useSelector((state) => state.modalState.element);

	const task =
		data.taskCategories[previousCategoryIndex]?.elements?.[previousTaskIndex];

	const [title, setTitle] = useState(task.title);
	const [body, setBody] = useState(task.body);
	const [category, setCategory] = useState(previousCategoryIndex);
	const [order, setOrder] = useState(previousTaskIndex + 1);

	const getCategories = () => data.taskCategories.map((category) => category.name);
	const onCategoryChange = (e) => setCategory(
		getCategories().indexOf(e.target.value)
	);
		
	const valid = title !== "" && order !== "";

	const submit = () => {
		dispatch(
			updateTask(
				data, 
				previousCategoryIndex, 
				category,
				previousTaskIndex, 
				order - 1,
				{ title, body }
			)
		);
		close();
	}

	const deleteAndClose = () => {
		dispatch(deleteTask(data, previousCategoryIndex, previousTaskIndex));
		close();
	}
			
	return (
		<div>
			<ModalHeader>
				Task
			</ModalHeader>
			<ModalBody>
				<ModalInput
					placeholder="Title"
					value={title}
					onChange={(e) => setTitle(e.target.value)} />
				<ModalInput
					type="textarea"
					placeholder="Body"
					value={body}
					onChange={(e) => setBody(e.target.value)}
					rows={4}/>
				<ModalInput 
					type="select"
					placeholder="Category"
					value={getCategories()[category]}
					onChange={onCategoryChange}
				>
					{ getCategories().map((category)=>
						<option key={category}>{category}</option>)
					}
				</ModalInput>
				<ModalInput
					type="number"
					placeholder="Order"
					value={order}
					onChange={(e) => setOrder(e.target.value)} />
			</ModalBody>
			<ModalFooter>
				<Button onClick={close}>Cancel</Button>
				<Button onClick={deleteAndClose}>Delete</Button>
				<Button disabled={!valid} onClick={submit}>
					Save
				</Button>
			</ModalFooter>
		</div>
	);
}

export default TaskModal;
