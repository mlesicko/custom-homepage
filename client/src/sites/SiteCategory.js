import React from "react";
import { connect } from "react-redux";

import {
	openEditSiteCategoryModal,
	openDeleteSiteCategoryModal,
	openAddSiteModal
} from "../redux/modalActions";
import { moveSiteCategory } from "../redux/apiActions";

import Category from "../genericCategories/Category";
import Site from "./Site";

const SiteCategory = (props) => (
	<Category {...props} CategoryElement={Site} />
);

const mapDispatchToProps = (dispatch, {data, categoryIndex}) => ({
	openEditModal: () => dispatch(openEditSiteCategoryModal(categoryIndex)),	
	openDeleteModal: () => dispatch(openDeleteSiteCategoryModal(categoryIndex)),
	openAddElementModal: () => dispatch(openAddSiteModal(categoryIndex)),
	moveCategoryUp: () =>
		dispatch(moveSiteCategory(data, categoryIndex, categoryIndex - 1)),
	moveCategoryDown: () =>
		dispatch(moveSiteCategory(data, categoryIndex, categoryIndex + 1))
});

export default connect(null, mapDispatchToProps)(SiteCategory);
