import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from "react-redux";

import { openEditSiteModal, openDeleteSiteModal } from "../redux/modalActions";

const VIDEOS_SUFFIX = "/videos";
const PLAYLISTS_SUFFIX = "/playlists?view=1&sort=lad&flow=grid";

const YOUTUBE_CHANNEL_PATTERN =
	/https?:\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:channel\/|c\/|user\/|@).+/;

const Site = ({element, categoryIndex, elementIndex}) =>  {
	const dispatch = useDispatch();

	const onEditClicked = (event) => {
		dispatch(openEditSiteModal(categoryIndex, elementIndex));
		event.preventDefault();	
	};

	const onDeleteClicked = (event) => {
		dispatch(openDeleteSiteModal(categoryIndex, elementIndex));
		event.preventDefault();	
	};

	const isYouTubeChannel = YOUTUBE_CHANNEL_PATTERN.test(element.url);

	const baseLink = element.url + (isYouTubeChannel ? VIDEOS_SUFFIX : "");

	const NewTabLink = ({url, children}) => (
		<a href={url} target="_blank" rel="noopener noreferrer">
			{children}
		</a>
	);

	return(
		<div className="site">
			<NewTabLink url={baseLink}>
				<div className="img-container">
					<img
						className="icon"
						src={element.icon} alt="" />
					<div className="edit-button" onClick={onEditClicked}
						alt="Edit Site" title="Edit Site">
						<FontAwesomeIcon icon={faPencilAlt} />
					</div>
					<div className="delete-button" onClick={onDeleteClicked}
						alt="Delete Site" title="Delete Site">
						<FontAwesomeIcon icon={faTrash} />
					</div>
				</div>
			</NewTabLink>
			<div className="site-title">
				{element.name}{" "}
			</div>
			{ isYouTubeChannel &&
				<div className="site-links">
					<NewTabLink url={element.url + VIDEOS_SUFFIX}>
						Videos
					</NewTabLink>
					<NewTabLink url={element.url + PLAYLISTS_SUFFIX}>
						Playlists
					</NewTabLink>
				</div>
			}
		</div>
	);
}

export default Site;
