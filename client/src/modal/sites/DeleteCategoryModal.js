import { useSelector, useDispatch } from "react-redux";
import { Button, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { deleteSiteCategory } from "../../redux/dataActions";

const DeleteCategoryModal = ({close}) => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.data.content);
	const categoryIndex = useSelector((state) => state.modalState.category);
	const category = data.siteCategories[categoryIndex];

	const submit = () => {
		dispatch(deleteSiteCategory(categoryIndex));
		close();
	};

	return (
		<div>
			<ModalHeader>
				Are you sure you want to delete {category.name}?
			</ModalHeader>
			<ModalBody>
				This action cannot be undone.
			</ModalBody>
			<ModalFooter>
				<Button onClick={close}>Cancel</Button>
				<Button onClick={submit}>Yes</Button>
			</ModalFooter>
		</div>
	);
};

export default DeleteCategoryModal;

