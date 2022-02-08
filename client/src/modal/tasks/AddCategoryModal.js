import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	Button,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from "reactstrap";
import { addTaskCategory } from "../../redux/apiActions";
import ModalInput from "../ModalInput";

const AddCategoryModal = ({close}) => {
	const dispatch = useDispatch();

	const data = useSelector((state) => state.data.content);

	const [name, setName] = useState("");

	const valid = name !== "";

	const submit = () => {
		dispatch(addTaskCategory(data, { elements: [], name }));
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
