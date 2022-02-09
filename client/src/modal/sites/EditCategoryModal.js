import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	Button,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from "reactstrap";
import { updateSiteCategory } from "../../redux/dataActions";
import ModalInput from "../ModalInput";

const EditCategoryModal = ({close}) => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.data.content);
	const categoryIndex = useSelector((state) => state.modalState.category);
	const category = data.siteCategories[categoryIndex];
	const [name, setName] = useState(category.name);
	const valid = name !== "";

	const submit = () => {
		dispatch(updateSiteCategory(categoryIndex, {...category, name}));
		close();
	};

	return (
		<div>
			<ModalHeader>
				Editing Category {category.name}
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

export default EditCategoryModal;
