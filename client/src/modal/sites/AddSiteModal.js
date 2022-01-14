import React from "react";
import { connect } from "react-redux";
import { Button, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { addSite } from "../../redux/apiActions";
import ModalInput from "../ModalInput";

class AddSiteModal extends React.Component {
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
		this.props.addSite(
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
					New Site
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
    addSite: (site) => 
		dispatch(addSite(data, categoryIndex, site))
});

export default connect(null, mapDispatchToProps)(AddSiteModal);

