import React from "react";
import { connect } from "react-redux";
import { Button, ModalBody, ModalFooter } from "reactstrap";
import { updateTitle } from "../redux/apiActions";
import ModalInput from "./ModalInput";

class EditTitleModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			part_1: props.data.title.part_1,
			part_2: props.data.title.part_2,
			bg_color: props.data.title.bg_color,
			text_color: props.data.title.text_color,
			page_title: props.data.title.page_title
		};
	}

	onChange = (key) => (e) => this.setState({[key]: e.target.value});
	
	valid = () => 
		this.part_1 !== "" &&
		this.part_2 !== "" &&
		this.bg_color !== "" &&
		this.text_color !== "" &&
		this.page_title !== "";

	submit = () => {
		this.props.updateTitle(
			this.props.data,
			{
				part_1: this.state.part_1,
				part_2: this.state.part_2,
				bg_color: this.state.bg_color,
				text_color: this.state.text_color,
				page_title: this.state.page_title
			}
		);
		this.props.close();
	}

	render() {
		const span_style = {
			color: this.state.text_color,
			backgroundColor: this.state.bg_color
		};
		return (
			<div>
				<div>
					<div className="page-title">
						{this.state.part_1}
						<span className="page-title-colored-part" style={span_style}>
							{this.state.part_2}
						</span>
					</div>
				</div>
				<ModalBody>
					<ModalInput
						placeholder="Part 1"
						value={this.state.part_1}
						onChange={this.onChange("part_1")} />
					<ModalInput
						placeholder="Part 2"
						value={this.state.part_2}
						onChange={this.onChange("part_2")} />
					<ModalInput
						type="color"
						placeholder="Background Color"
						value={this.state.bg_color}
						onChange={this.onChange("bg_color")} />
					<ModalInput
						type="color"
						placeholder="Text Color"
						value={this.state.text_color}
						onChange={this.onChange("text_color")} />
					<ModalInput
						placeholder="Page Title"
						value={this.state.page_title}
						onChange={this.onChange("page_title")} />
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

const mapStateToProps = (state) => ({
	data: state.data
})

const mapDispatchToProps = (dispatch) => ({
	updateTitle: (data, title) => dispatch(updateTitle(data, title))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTitleModal);

