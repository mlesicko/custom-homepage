import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { connect } from "react-redux";

import { openEditSiteModal, openDeleteSiteModal } from "../redux/modalActions";

const VIDEOS_SUFFIX = "/videos";
const PLAYLISTS_SUFFIX = "/playlists?view=1&sort=lad&flow=grid";

const YOUTUBE_CHANNEL_PATTERN =
	/https?:\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:channel|c|user)\/.+/;

class Site extends React.Component {
	onEditClicked = (event) => {
		this.props.openEditModal();
		event.preventDefault();	
	}

	onDeleteClicked = (event) => {
		this.props.openDeleteModal();
		event.preventDefault();	
	}

	isYouTubeChannel = () => YOUTUBE_CHANNEL_PATTERN.test(this.props.site.url);

	getBaseLink = () =>
		this.props.site.url + (this.isYouTubeChannel() ? VIDEOS_SUFFIX : "");

	render(){
		return(
			<div className="site">
				<NewTabLink url={this.getBaseLink()}>
					<div className="img-container">
						<img
							className="icon"
							src={this.props.site.icon} alt="" />
						<div className="edit-button" onClick={this.onEditClicked}
							alt="Edit Site" title="Edit Site">
							<FontAwesomeIcon icon={faPencilAlt} />
						</div>
						<div className="delete-button" onClick={this.onDeleteClicked}
							alt="Delete Site" title="Delete Site">
							<FontAwesomeIcon icon={faTrash} />
						</div>
					</div>
				</NewTabLink>
				<div className="site-title">
					{this.props.site.name}{" "}
				</div>
				{ this.isYouTubeChannel() &&
					<div className="site-links">
						<NewTabLink url={this.props.site.url + VIDEOS_SUFFIX}>
							Videos
						</NewTabLink>
						<NewTabLink url={this.props.site.url + PLAYLISTS_SUFFIX}>
							Playlists
						</NewTabLink>
					</div>
				}
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
		openEditSiteModal(ownProps.categoryIndex, ownProps.siteIndex)
	),
	openDeleteModal: () => dispatch(
		openDeleteSiteModal(ownProps.categoryIndex, ownProps.siteIndex)
	),
})

export default connect(null, mapDispatchToProps)(Site);
