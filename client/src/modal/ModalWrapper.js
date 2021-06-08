import React from "react";
import { connect } from "react-redux";
import { Modal } from "reactstrap";
import { closeModal } from "../redux/modalActions";
import { isCategoryModalType } from './modalTypes';
import CategoryModalWrapper from "./categories/CategoryModalWrapper";

class ModalWrapper extends React.Component {
	getModalType = () => {
		if (isCategoryModalType(this.props.type)) {
			return CategoryModalWrapper;
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
