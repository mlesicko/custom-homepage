import { Button } from "reactstrap";

const CategoryList = ({categories, CategoryType, onAddCategory}) => (
	<div style={{display: "grid"}}>
		{ categories.map((category, idx) =>
			<CategoryType
				key={idx}
				category={category}
				categoryIndex={idx}
				isFirst={idx === 0}
				isLast={idx === categories.length - 1}
			/>
		)}
		<Button 
			className="add-category-button"
			onClick={onAddCategory}
		>
			Add New Category
		</Button>
	</div>

);

export default CategoryList;
