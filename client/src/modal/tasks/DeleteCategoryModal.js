import React from "react";
import { connect } from "react-redux";
import { Button, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { deleteTaskCategory } from "../../redux/apiActions";

class DeleteCategoryModal extends React.Component {
	submit = () => {
		this.props.deleteTaskCategory();
		this.props.close();
	};

	render() {
		return (
			<div>
				<ModalHeader>
					Are you sure you want to delete {
						this.props.category.name
					}?
				</ModalHeader>
				<ModalBody>
					This action cannot be undone.
				</ModalBody>
				<ModalFooter>
					<Button onClick={this.props.close}>Cancel</Button>
					<Button onClick={this.submit}>Yes</Button>
				</ModalFooter>
			</div>
		)
	}
};

const mapDispatchToProps = (dispatch, {data, categoryIndex}) => ({
    deleteTaskCategory: () => dispatch(deleteTaskCategory(data, categoryIndex))
});

export default connect(null, mapDispatchToProps)(DeleteCategoryModal);

