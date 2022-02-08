import { Input, Label, Collapse } from "reactstrap";

const ModalInput = ({
	placeholder,
	value,
	onChange,
	children,
	type="text",
	rows=1
}) => (
	<div>
		<Collapse isOpen={value !== ""}>
			<Label for={placeholder}>{placeholder}</Label>
		</Collapse>
		<Input
			type={type}
			id={placeholder}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			rows={rows}>
			{children}
		</Input>
	</div>
)

export default ModalInput;
