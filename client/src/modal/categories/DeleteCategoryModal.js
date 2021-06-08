import React from "react";
import { connect } from "react-redux";
import { Button, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { deleteCategory } from "../../redux/apiActions";

class DeleteCategoryModal extends React.Component {
	submit = () => {
		const deleteIndex = this.props.categoryIndex;
		const newData = {
			...this.props.data,
			categories: [
				...this.props.data.categories.slice(0, deleteIndex),
				...this.props.data.categories.slice(deleteIndex + 1)
			]
		}
		this.props.close();
		this.props.updateData(newData);
	}
	
	submit = () => {
		this.props.deleteCategory();
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
    deleteCategory: () => dispatch(deleteCategory(data, categoryIndex))
});

export default connect(null, mapDispatchToProps)(DeleteCategoryModal);

