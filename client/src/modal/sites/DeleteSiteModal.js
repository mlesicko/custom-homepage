import { useSelector, useDispatch } from "react-redux";
import { Button, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { deleteSite } from "../../redux/apiActions";

const DeleteSiteModal = ({close}) => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.data.content);
	const categoryIndex = useSelector((state) => state.modalState.category);
	const siteIndex = useSelector((state) => state.modalState.element);
	const siteName = data.siteCategories[categoryIndex]?.elements?.[siteIndex].name;

	const submit = () => {
		dispatch(deleteSite(data, categoryIndex, siteIndex))
		close();
	};

	return (
		<div>
			<ModalHeader>
				Are you sure you want to delete {siteName}?
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

export default DeleteSiteModal;
