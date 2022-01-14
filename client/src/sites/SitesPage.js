import React from "react";
import { connect } from "react-redux";

import CategoryList from "../genericCategories/CategoryList";
import { openAddSiteCategoryModal } from "../redux/modalActions";
import SiteCategory from "./SiteCategory";

class SitesPage extends React.Component {
	render() {
		return (
			<CategoryList
				categories={this.props.data.siteCategories}
				CategoryType={SiteCategory}
				onAddCategory={this.props.openAddCategoryModal}
				data={this.props.data}
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	data: state.data.content
});

const mapDispatchToProps = (dispatch) => ({
	openAddCategoryModal: () => dispatch(openAddSiteCategoryModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(SitesPage);
