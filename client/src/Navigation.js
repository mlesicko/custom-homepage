import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
	<div style={{display: "flex", justifyContent:"space-around"}}>
		<Link to="/pages">Pages</Link>
		<Link to="/tasks">Tasks</Link>
	</div>
);

export default Navigation;
