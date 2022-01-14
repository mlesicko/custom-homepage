import React from "react";
import { connect } from "react-redux";
import { Button, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { deleteSite } from "../../redux/apiActions";

class DeleteSiteModal extends React.Component {
	submit = () => {
		this.props.deleteSite();
		this.props.close();
	};

	render() {
		return (
			<div>
				<ModalHeader>
					Are you sure you want to delete {
						this.props.site.name
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

const mapDispatchToProps = (dispatch, {data, categoryIndex, siteIndex}) => ({
    deleteSite: () =>
		dispatch(deleteSite(data, categoryIndex, siteIndex))
});

export default connect(null, mapDispatchToProps)(DeleteSiteModal);
