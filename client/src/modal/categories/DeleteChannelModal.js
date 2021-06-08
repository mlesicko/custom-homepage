import React from "react";
import { connect } from "react-redux";
import { Button, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { deleteChannel } from "../../redux/apiActions";

class DeleteChannelModal extends React.Component {
	submit = () => {
		this.props.deleteChannel();
		this.props.close();
	};

	render() {
		return (
			<div>
				<ModalHeader>
					Are you sure you want to delete {
						this.props.channel.name
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

const mapDispatchToProps = (dispatch, {data, categoryIndex, channelIndex}) => ({
    deleteChannel: () =>
		dispatch(deleteChannel(data, categoryIndex, channelIndex))
});

export default connect(null, mapDispatchToProps)(DeleteChannelModal);
