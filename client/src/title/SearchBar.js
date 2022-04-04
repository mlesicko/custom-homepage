import { useState } from "react";
import { Input, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./searchBar.css"

const SearchBar = () => {
	
	const [searchString, setSearchString] = useState("");

	const searchUrl = `https://www.google.com/search?q=${searchString}&tbs=li:1`;

	const onSearch = () => {
		if (searchString !== "") {
			window.open(searchUrl, "_blank");
			setSearchString("");
		}
	}


	return (
		<div className="search-bar-container">
			<Input
				className="search-bar"
				type="text"
				value={searchString}
				onChange={(e) => setSearchString(e.target.value)}
				onKeyPress={(e) => e.code === "Enter" && onSearch()}
			/>
			<Button alt="Search" onClick={onSearch}>
				<FontAwesomeIcon icon={faSearch} />
			</Button>
		</div>
	);
}

export default SearchBar;
