import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

import { openEditTitleModal } from "../redux/modalActions";

const PageTitle = () => {
	const dispatch = useDispatch();
	const title = useSelector((state) => state.data?.content?.title);

	useEffect(() =>
		document.title = title?.page_title ?? "Custom Homepage",
		[title]
	);

	const span_style = {
		color: title?.text_color,
		backgroundColor: title?.bg_color
	};

	return (
		<div className="page-title">
			<Link to="/" style={{textDecoration: "none", color: "unset"}}>
				{title?.part_1}
				<span className="page-title-colored-part" style={span_style}>
					{title?.part_2}
				</span>
			</Link>
			<div className="edit-title-button"
				onClick={() => dispatch(openEditTitleModal())}
				alt="Edit Page Title" title="Edit Page Title">
				<FontAwesomeIcon icon={faPencilAlt} />
			</div>
		</div>
	);
};

export default PageTitle;
