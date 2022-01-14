import React from "react";
import { connect } from "react-redux";
import { Button, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { addTask } from "../../redux/apiActions";
import ModalInput from "../ModalInput";

class AddTaskModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			body: ""
		};
	}

	onChange = (key) => (e) => this.setState({[key]: e.target.value});
	
	valid = () => this.state.title !== "";

	submit = () => {
		this.props.addTask(
			{
				title: this.state.title,
				body: this.state.body
			}
		);
		this.props.close();
	}

	render() {
		return (
			<div>
				<ModalHeader>
					New Task
				</ModalHeader>
				<ModalBody>
					<ModalInput
						placeholder="Title"
						value={this.state.title}
						onChange={this.onChange("title")} />
					<ModalInput
						type="textarea"
						placeholder="Body"
						value={this.state.body}
						onChange={this.onChange("body")}
						rows={4} />
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

const mapDispatchToProps = (dispatch, {data, categoryIndex}) => ({
    addTask: (task) => 
		dispatch(addTask(data, categoryIndex, task))
});

export default connect(null, mapDispatchToProps)(AddTaskModal);

