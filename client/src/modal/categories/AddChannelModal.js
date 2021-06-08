import React from "react";
import { connect } from "react-redux";
import { Button, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { addChannel } from "../../redux/apiActions";
import ModalInput from "../ModalInput";

class AddChannelModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			url: "",
			icon: ""
		};
	}

	onChange = (key) => (e) => this.setState({[key]: e.target.value});
	
	valid = () => 
		this.state.name !== "" && this.state.url !== "" && this.state.icon !== "";

	submit = () => {
		this.props.addChannel(
			{
				name: this.state.name,
				url: this.state.url,
				icon: this.state.icon
			}
		);
		this.props.close();
	}

	render() {
		return (
			<div>
				<ModalHeader>
					New Channel
				</ModalHeader>
				<ModalBody>
					<ModalInput
						placeholder="Name"
						value={this.state.name}
						onChange={this.onChange("name")} />
					<ModalInput
						type="url"
						placeholder="URL"
						value={this.state.url}
						onChange={this.onChange("url")} />
					<ModalInput
						type="url"
						placeholder="Icon"
						value={this.state.icon}
						onChange={this.onChange("icon")} />
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
    addChannel: (channel) => 
		dispatch(addChannel(data, categoryIndex, channel))
});

export default connect(null, mapDispatchToProps)(AddChannelModal);

