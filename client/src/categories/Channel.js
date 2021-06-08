import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { connect } from "react-redux";

import { openEditChannelModal, openDeleteChannelModal } from "../redux/modalActions";

const VIDEOS_SUFFIX = "/videos";
const PLAYLISTS_SUFFIX = "/playlists?view=1&sort=lad&flow=grid";

class Channel extends React.Component {
	onEditClicked = (event) => {
		this.props.openEditModal();
		event.preventDefault();	
	}

	onDeleteClicked = (event) => {
		this.props.openDeleteModal();
		event.preventDefault();	
	}

	render(){
		return(
			<div className="channel">
				<NewTabLink url={this.props.channel.url + VIDEOS_SUFFIX}>
					<div className="img-container">
						<img
							className="icon"
							src={this.props.channel.icon} alt="" />
						<div className="edit-button" onClick={this.onEditClicked}
							alt="Edit Channel" title="Edit Channel">
							<FontAwesomeIcon icon={faPencilAlt} />
						</div>
						<div className="delete-button" onClick={this.onDeleteClicked}
							alt="Delete Channel" title="Delete Channel">
							<FontAwesomeIcon icon={faTrash} />
						</div>
					</div>
				</NewTabLink>
				<div className="channel-title">
					{this.props.channel.name}{" "}
				</div>
				<div className="channel-links">
					<NewTabLink url={this.props.channel.url + VIDEOS_SUFFIX}>
						Videos
					</NewTabLink>
					<NewTabLink url={this.props.channel.url + PLAYLISTS_SUFFIX}>
						Playlists
					</NewTabLink>
				</div>
			</div>
		);
	}
}

const NewTabLink = ({url, children}) => (
	<a href={url} target="_blank" rel="noopener noreferrer">
		{children}
	</a>
)

const mapDispatchToProps = (dispatch, ownProps) => ({
	openEditModal: () => dispatch(
		openEditChannelModal(ownProps.categoryIndex, ownProps.channelIndex)
	),
	openDeleteModal: () => dispatch(
		openDeleteChannelModal(ownProps.categoryIndex, ownProps.channelIndex)
	),
})

export default connect(null, mapDispatchToProps)(Channel);
