import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { addSite } from "../../redux/dataActions";
import ModalInput from "../ModalInput";

const AddSiteModal = ({close}) => {
	const dispatch = useDispatch();

	const categoryIndex = useSelector((state) => state.modalState.category);
	const [name, setName] = useState("");
	const [url, setUrl] = useState("");
	const [icon, setIcon] = useState("");
	
	const valid = name !== "" && url !== "" && icon !== "";

	const submit = () => {
		dispatch(addSite(categoryIndex, {name, url, icon}))
		close();
	}

	return (
		<div>
			<ModalHeader>
				New Site
			</ModalHeader>
			<ModalBody>
				<ModalInput
					placeholder="Name"
					value={name}
					onChange={(e) => setName(e.target.value)} />
				<ModalInput
					type="url"
					placeholder="URL"
					value={url}
					onChange={(e) => setUrl(e.target.value)} />
				<ModalInput
					type="url"
					placeholder="Icon"
					value={icon}
					onChange={(e) => setIcon(e.target.value)} />
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

export default AddSiteModal;

