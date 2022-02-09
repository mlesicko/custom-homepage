import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { addTask } from "../../redux/dataActions";
import ModalInput from "../ModalInput";

const AddTaskModal = ({close}) => {
	const dispatch = useDispatch();
	
	const categoryIndex = useSelector((state) => state.modalState.category);

	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");

	const valid = title !== "";

	const submit = () => {
		dispatch(addTask(categoryIndex, { title, body }));
		close();
	}

	return (
		<div>
			<ModalHeader>
				New Task
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
					rows={4} />
			</ModalBody>
			<ModalFooter>
				<Button onClick={close}>Cancel</Button>
				<Button disabled={!valid} onClick={submit}>
					Submit
				</Button>
			</ModalFooter>
		</div>
	);
}

export default AddTaskModal;

