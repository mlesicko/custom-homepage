import React from "react";
import { connect } from "react-redux";
import {
	Button,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from "reactstrap";
import { updateTask, deleteTask } from "../../redux/apiActions";
import ModalInput from "../ModalInput";

class TaskModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: props.task.title,
			body: props.task.body,
			category: props.categoryIndex,
			order: props.taskIndex + 1,
		};
	}

	onChange = (key) => (e) => this.setState({[key]: e.target.value});

	onCategoryChange = (e) => this.setState(
		{ category: this.getCategories().indexOf(e.target.value) }
	);
		

	valid = () => 
		this.state.title !== "" &&
		this.state.order !== "";

	submit = () => {
		this.props.updateTask(
			{
				title: this.state.title,
				body: this.state.body,
				
			},
			this.state.order - 1,
			this.state.category
		);
		this.props.close();
	}

	deleteAndClose = () => {
		this.props.deleteTask();
		this.props.close();
	}
			

	getCategories = () =>
		this.props.data.taskCategories.map((category) => category.name);

	render() {
		return (
			<div>
				<ModalHeader>
					Task
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
						rows={4}/>
					<ModalInput 
						type="select"
						placeholder="Category"
						value={this.getCategories()[this.state.category]}
						onChange={this.onCategoryChange}
					>
						{ this.getCategories().map((category)=>
							<option key={category}>{category}</option>)
						}
					</ModalInput>
					<ModalInput
						type="number"
						placeholder="Order"
						value={this.state.order}
						onChange={this.onChange("order")} />
				</ModalBody>
				<ModalFooter>
					<Button onClick={this.props.close}>Cancel</Button>
					<Button onClick={this.deleteAndClose}>Delete</Button>
					<Button disabled={!this.valid()} onClick={this.submit}>
						Save
					</Button>
				</ModalFooter>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch, {data, categoryIndex, taskIndex}) => ({
    updateTask: (task, newTaskIndex, newCategoryIndex) => dispatch(
		updateTask(
			data, 
			categoryIndex, 
			newCategoryIndex,
			taskIndex, 
			newTaskIndex,
			task
		)
	),
	deleteTask: () => dispatch(deleteTask(data, categoryIndex, taskIndex))
});

export default connect(null, mapDispatchToProps)(TaskModal);
