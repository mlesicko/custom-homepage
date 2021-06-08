import React from "react";
import { Input, Label, Collapse } from "reactstrap";

const ModalInput = ({ placeholder, value, onChange, type="text" }) => (
	<div>
		<Collapse isOpen={value !== ""}>
			<Label for={placeholder}>{placeholder}</Label>
		</Collapse>
		<Input
			type={type}
			id={placeholder}
			placeholder={placeholder}
			value={value}
			onChange={onChange} />
	</div>
)

export default ModalInput;
