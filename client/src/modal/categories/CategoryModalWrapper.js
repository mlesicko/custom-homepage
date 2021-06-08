import React from "react";
import { connect } from "react-redux";
import {
    ADD_CHANNEL,
    EDIT_CHANNEL,
    DELETE_CHANNEL,
    ADD_CATEGORY,
    EDIT_CATEGORY,
    DELETE_CATEGORY
} from '../modalTypes';
import AddChannelModal from "./AddChannelModal";
import EditChannelModal from "./EditChannelModal";
import DeleteChannelModal from "./DeleteChannelModal";
import AddCategoryModal from "./AddCategoryModal";
import EditCategoryModal from "./EditCategoryModal";
import DeleteCategoryModal from "./DeleteCategoryModal";

class ModalWrapper extends React.Component {
	getModalContent = () => {
		switch (this.props.type) {
			case ADD_CHANNEL:
				return AddChannelModal;
			case EDIT_CHANNEL:
				return EditChannelModal;
			case DELETE_CHANNEL:
				return DeleteChannelModal;
			case ADD_CATEGORY:
				return AddCategoryModal;
			case EDIT_CATEGORY:
				return EditCategoryModal;
			case DELETE_CATEGORY:
				return DeleteCategoryModal;
			default:
				return null;
		} 
	}

	render() {
		const ModalContent = this.getModalContent()
		const category = this.props.data.categories[this.props.categoryIndex];
		const channel = category?.channels?.[this.props.channelIndex];
		return (
			<ModalContent
				data={this.props.data}
				categoryIndex={this.props.categoryIndex}
				channelIndex={this.props.channelIndex}
				category={category}
				channel={channel}
				close={this.props.close}
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	data: state.data,
	type: state.modalState.type,
	categoryIndex: state.modalState.category,
	channelIndex: state.modalState.channel
});

export default connect(mapStateToProps)(ModalWrapper);
