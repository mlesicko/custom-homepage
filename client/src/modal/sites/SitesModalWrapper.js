import React from "react";
import { connect } from "react-redux";
import {
    ADD_SITE,
    EDIT_SITE,
    DELETE_SITE,
    ADD_SITE_CATEGORY,
    EDIT_SITE_CATEGORY,
    DELETE_SITE_CATEGORY
} from '../modalTypes';
import AddSiteModal from "./AddSiteModal";
import EditSiteModal from "./EditSiteModal";
import DeleteSiteModal from "./DeleteSiteModal";
import AddCategoryModal from "./AddCategoryModal";
import EditCategoryModal from "./EditCategoryModal";
import DeleteCategoryModal from "./DeleteCategoryModal";

class ModalWrapper extends React.Component {
	getModalContent = () => {
		switch (this.props.type) {
			case ADD_SITE:
				return AddSiteModal;
			case EDIT_SITE:
				return EditSiteModal;
			case DELETE_SITE:
				return DeleteSiteModal;
			case ADD_SITE_CATEGORY:
				return AddCategoryModal;
			case EDIT_SITE_CATEGORY:
				return EditCategoryModal;
			case DELETE_SITE_CATEGORY:
				return DeleteCategoryModal;
			default:
				return null;
		} 
	}

	render() {
		const ModalContent = this.getModalContent()
		const category = this.props.data.siteCategories[this.props.categoryIndex];
		const site = category?.elements?.[this.props.siteIndex];
		return (
			<ModalContent
				data={this.props.data}
				categoryIndex={this.props.categoryIndex}
				siteIndex={this.props.siteIndex}
				category={category}
				site={site}
				close={this.props.close}
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	data: state.data.content,
	type: state.modalState.type,
	categoryIndex: state.modalState.category,
	siteIndex: state.modalState.element
});

export default connect(mapStateToProps)(ModalWrapper);
