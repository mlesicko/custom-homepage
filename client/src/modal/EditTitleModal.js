import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, ModalBody, ModalFooter } from "reactstrap";
import { updateTitle } from "../redux/apiActions";
import ModalInput from "./ModalInput";

const EditTitleModal = ({ close }) => {
	const dispatch = useDispatch();

	const data = useSelector((state) => state.data.content);

	const [part_1, setPartOne] = useState(data.title.part_1);
	const [part_2, setPartTwo] = useState(data.title.part_2);
	const [bg_color, setBgColor] = useState(data.title.bg_color);
	const [text_color, setTextColor] = useState(data.title.text_color);
	const [page_title, setPageTitle] = useState(data.title.page_title);
	
	const valid =
		part_1 !== "" &&
		part_2 !== "" &&
		bg_color !== "" &&
		text_color !== "" &&
		page_title !== "";

	const submit = () => {
		dispatch(updateTitle(
			data,
			{
				part_1,
				part_2,
				bg_color,
				text_color,
				page_title
			}
		));
		close();
	}

	const span_style = {
		color: text_color,
		backgroundColor: bg_color
	};

	return (
		<div>
			<div>
				<div className="page-title">
					{part_1}
					<span className="page-title-colored-part" style={span_style}>
						{part_2}
					</span>
				</div>
			</div>
			<ModalBody>
				<ModalInput
					placeholder="Part 1"
					value={part_1}
					onChange={(e) => setPartOne(e.target.value)} />
				<ModalInput
					placeholder="Part 2"
					value={part_2}
					onChange={(e) => setPartTwo(e.target.value)} />
				<ModalInput
					type="color"
					placeholder="Background Color"
					value={bg_color}
					onChange={(e) => setBgColor(e.target.value)} />
				<ModalInput
					type="color"
					placeholder="Text Color"
					value={text_color}
					onChange={(e) => setTextColor(e.target.value)} />
				<ModalInput
					placeholder="Page Title"
					value={page_title}
					onChange={(e) => setPageTitle(e.target.value)} />
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

export default EditTitleModal;

