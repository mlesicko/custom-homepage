import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTrash,
	faPencilAlt,
	faPlus,
	faAngleUp,
	faAngleDown
} from '@fortawesome/free-solid-svg-icons';

import {
	openEditCategoryModal,
	openDeleteCategoryModal,
	openAddSiteModal
} from "../redux/modalActions";
import { moveCategory } from "../redux/apiActions";
import Site from "./Site";

const Category = ({
	category, categoryIndex, 
	openEditModal, openDeleteModal, openAddSiteModal,
	isFirst, isLast,
	moveCategoryUp, moveCategoryDown,
}) => (
	<div className="category">
		<div className="category-title-container">
			<div className="category-title">
				{category.name}
			</div>
			<div className="category-button" onClick={openEditModal}
				alt="Edit Category" title="Edit Category">
				<FontAwesomeIcon icon={faPencilAlt} />
			</div>
			<div className="category-button" onClick={openAddSiteModal}
				alt="Add Site" title="Add Site">
				<FontAwesomeIcon icon={faPlus} />
			</div>
			<div style={{flexGrow: "1"}} />
			{ isFirst ?
				<div className="category-button disabled">
					<FontAwesomeIcon icon={faAngleUp} />
				</div>
				:
				<div className="category-button" onClick={moveCategoryUp}
					alt="Move Up" title="Move Up">
					<FontAwesomeIcon icon={faAngleUp} />
				</div>
			}
			{ isLast ?
				<div className="category-button disabled">
					<FontAwesomeIcon icon={faAngleDown} />
				</div>
				:
				<div className="category-button" onClick={moveCategoryDown}
					alt="Move Down" title="Move Down">
					<FontAwesomeIcon icon={faAngleDown} />
				</div>
			}
			<div style={{width: "30px" }} />
			<div className="category-button" onClick={openDeleteModal}
				alt="Delete Category" title="Delete Category">
				<FontAwesomeIcon icon={faTrash} />
			</div>
		</div>
		<div className="category-title-line" />
		{ category.sites.map((site, idx) => 
			<Site
				key={idx}
				site={site}
				categoryIndex={categoryIndex}
				siteIndex={idx}
			/>
		)}
	</div>
)

const mapDispatchToProps = (dispatch, {data, categoryIndex}) => ({
	openEditModal: () => dispatch(openEditCategoryModal(categoryIndex)),	
	openDeleteModal: () => dispatch(openDeleteCategoryModal(categoryIndex)),
	openAddSiteModal: () => dispatch(openAddSiteModal(categoryIndex)),
	moveCategoryUp: () =>
		dispatch(moveCategory(data, categoryIndex, categoryIndex - 1)),
	moveCategoryDown: () =>
		dispatch(moveCategory(data, categoryIndex, categoryIndex + 1))
});

export default connect(null, mapDispatchToProps)(Category);
