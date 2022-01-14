import React from "react";
import { connect } from "react-redux";
import { Modal } from "reactstrap";
import { closeModal } from "../redux/modalActions";
import { isSitesModalType, isTaskModalType, EDIT_TITLE } from './modalTypes';
import EditTitleModal from "./EditTitleModal";
import SitesModalWrapper from "./sites/SitesModalWrapper";
import TasksModalWrapper from "./tasks/TasksModalWrapper";

class ModalWrapper extends React.Component {
	getModalType = () => {
		if (isSitesModalType(this.props.type)) {
			return SitesModalWrapper;
		} else if (isTaskModalType(this.props.type)) {
			return TasksModalWrapper;
		} else if (this.props.type === EDIT_TITLE) {
			return EditTitleModal;
		} else {
			return null;
		}
	}

	render() {
		const ModalType = this.getModalType()
		return (
			<div>
				{ModalType !== null ? 
					(
						<Modal
							isOpen={true} 
							onClose={this.props.closeModal}
							toggle={this.props.closeModal}
							centered={true}
							backdrop={true}>
							<ModalType
								close={this.props.closeModal}
							/>
						</Modal>
					) : null
				}
				{this.props.children}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	type: state.modalState.type,
});

const mapDispatchToProps = (dispatch) => ({
	closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalWrapper);
