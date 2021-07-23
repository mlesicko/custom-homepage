import React from "react";
import { connect } from "react-redux";
import { 
	Button,
	ModalHeader, 
	ModalBody,
	ModalFooter,
} from "reactstrap";
import { addCategory } from "../../redux/apiActions";
import ModalInput from "../ModalInput";

class AddCategoryModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: ""
		};
	}

	onChange = (e) => this.setState({name: e.target.value});
	
	valid = () => this.state.name !== "";
	
	submit = () => {
		this.props.addCategory(
			{
				sites: [],
				name: this.state.name
			}
		);
		this.props.close();
	};

	render() {
		return (
			<div>
				<ModalHeader>
					New Category
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
		);
	}
}

const mapDispatchToProps = (dispatch, {data}) => ({
	addCategory: (category) => dispatch(addCategory(data, category))
});

export default connect(null, mapDispatchToProps)(AddCategoryModal);
