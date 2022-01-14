import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { openEditTitleModal } from "./redux/modalActions";

const PageTitle = ({title, openEditTitleModal}) => {
	document.title = title?.page_title ?? "Custom Homepage";
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
			<div className="edit-title-button" onClick={openEditTitleModal}
				alt="Edit Page Title" title="Edit Page Title">
				<FontAwesomeIcon icon={faPencilAlt} />
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	title: state.data?.content?.title
});

const mapDispatchToProps = (dispatch) => ({
	openEditTitleModal: () => dispatch(openEditTitleModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(PageTitle);
