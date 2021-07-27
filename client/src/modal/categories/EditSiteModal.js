import React from "react";
import { connect } from "react-redux";
import {
	Button,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from "reactstrap";
import { updateSite } from "../../redux/apiActions";
import ModalInput from "../ModalInput";

class EditSiteModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: props.site.name,
			url: props.site.url,
			icon: props.site.icon,
			category: props.categoryIndex,
			order: props.siteIndex + 1,
		};
	}

	onChange = (key) => (e) => this.setState({[key]: e.target.value});

	onCategoryChange = (e) => this.setState(
		{ category: this.getCategories().indexOf(e.target.value) }
	);
		

	valid = () => 
		this.state.name !== "" &&
		this.state.url !== "" && 
		this.state.icon !== "" &&
		this.state.order !== "";

	submit = () => {
		this.props.updateSite(
			{
				name: this.state.name,
				url: this.state.url,
				icon: this.state.icon,
				
			},
			this.state.order - 1,
			this.state.category
		);
		this.props.close();
	}

	getCategories = () =>
		this.props.data.categories.map((category) => category.name);

	render() {
		return (
			<div>
				<ModalHeader>
					Editing Site { this.props.site.name }
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
					<Button disabled={!this.valid()} onClick={this.submit}>
						Submit
					</Button>
				</ModalFooter>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch, {data, categoryIndex, siteIndex}) => ({
    updateSite: (site, newSiteIndex, newCategoryIndex) => dispatch(
		updateSite(
			data, 
			categoryIndex, 
			newCategoryIndex,
			siteIndex, 
			newSiteIndex,
			site
		)
	)
});

export default connect(null, mapDispatchToProps)(EditSiteModal);
