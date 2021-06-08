import React from "react";
import { connect } from "react-redux";
import {
	Button,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from "reactstrap";
import { updateCategory } from "../../redux/apiActions";
import ModalInput from "../ModalInput";

class EditCategoryModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: props.category.name
		};
	}

	onChange = (e) => this.setState({name: e.target.value});

	valid = () => this.state.name !== "";

	submit = () => {
		this.props.updateCategory(
			{
				...this.props.category,
				name: this.state.name
			}
		);
		this.props.close();
	};

	render() {
		return (
			<div>
				<ModalHeader>
					Editing Category {
						this.props.category.name
					}
				</ModalHeader>
				<ModalBody>
					<ModalInput
						placeholder="Name"
						value={this.state.name}
						onChange={this.onChange} />
				</ModalBody>
				<ModalFooter>
					<Button onClick={this.props.close}>Cancel</Button>
					<Button disabled={!this.valid()} onClick={this.submit}>
						Submit
					</Button>
				</ModalFooter>
			</div>
		)
	}
};

const mapDispatchToProps = (dispatch, {data, categoryIndex}) => ({
    updateCategory: (category) => 
		dispatch(updateCategory(data, categoryIndex, category))
});

export default connect(null, mapDispatchToProps)(EditCategoryModal);
