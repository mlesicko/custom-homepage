import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	Button,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from "reactstrap";
import { updateSite } from "../../redux/apiActions";
import ModalInput from "../ModalInput";

const EditSiteModal = ({close}) => {
	const dispatch = useDispatch();
	
	const data = useSelector((state) => state.data.content);
	const previousCategoryIndex = useSelector((state) => state.modalState.category);
	const previousSiteIndex = useSelector((state) => state.modalState.element);
	const site =
		data.siteCategories[previousCategoryIndex]?.elements?.[previousSiteIndex];

	const [name, setName] = useState(site.name);
	const [url, setUrl] = useState(site.url);
	const [icon, setIcon] = useState(site.icon);
	const [category, setCategory] = useState(previousCategoryIndex);
	const [order, setOrder] = useState(previousSiteIndex + 1);

	const getCategories = () =>
		data.siteCategories.map((category) => category.name);
	const onCategoryChange = (e) =>
		setCategory(getCategories().indexOf(e.target.value));
		

	const valid = 
		name !== "" &&
		url !== "" && 
		icon !== "" &&
		order !== "";

	const submit = () => {
		dispatch(
			updateSite(
				data,
				previousCategoryIndex,
				category,
				previousSiteIndex,
				order - 1,
				{ name, url, icon }
			)
		);
		close();
	};


	return (
		<div>
			<ModalHeader>
				Editing Site { site.name }
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
				<Button disabled={!valid} onClick={submit}>
					Submit
				</Button>
			</ModalFooter>
		</div>
	);
}

export default EditSiteModal;
