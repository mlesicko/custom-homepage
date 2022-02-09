import { useState } from "react";
import { useDispatch } from "react-redux";
import {
	Button,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from "reactstrap";
import { addTaskCategory } from "../../redux/dataActions";
import ModalInput from "../ModalInput";

const AddCategoryModal = ({close}) => {
	const dispatch = useDispatch();


	const [name, setName] = useState("");

	const valid = name !== "";

	const submit = () => {
		dispatch(addTaskCategory({ elements: [], name }));
		close();
	};

	return (
		<div>
			<ModalHeader>
				New Category
			</ModalHeader>
			<ModalBody>
				<ModalInput
					placeholder="Name"
					value={name}
					onChange={(e) => setName(e.target.value)} />
			</ModalBody>
			<ModalFooter>
				<Button onClick={close}>Cancel</Button>
				<Button disabled={!valid} onClick={submit}>
					Submit
				</Button>
			</ModalFooter>
		</div>
	);
};

export default AddCategoryModal;
