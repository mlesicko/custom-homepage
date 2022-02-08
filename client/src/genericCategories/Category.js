import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTrash,
	faPencilAlt,
	faPlus,
	faAngleUp,
	faAngleDown
} from '@fortawesome/free-solid-svg-icons';

const Category = ({
	category,
	categoryIndex, 
	openEditModal,
	openDeleteModal,
	openAddElementModal,
	isFirst,
	isLast,
	moveCategoryUp,
	moveCategoryDown,
	elements,
	CategoryElement
}) => (
	<div className="category">
		<div className="category-title-container">
			<div className="category-title">
				{category.name}
			</div>
			<div className="category-button" onClick={openEditModal}
				alt="Edit Category" title="Edit Category">
				<FontAwesomeIcon icon={faPencilAlt} />
			</div>
			<div className="category-button" onClick={openAddElementModal}
				alt="Add Element" title="Add Element">
				<FontAwesomeIcon icon={faPlus} />
			</div>
			<div style={{flexGrow: "1"}} />
			{ isFirst ?
				<div className="category-button disabled">
					<FontAwesomeIcon icon={faAngleUp} />
				</div>
				:
				<div className="category-button" onClick={moveCategoryUp}
					alt="Move Up" title="Move Up">
					<FontAwesomeIcon icon={faAngleUp} />
				</div>
			}
			{ isLast ?
				<div className="category-button disabled">
					<FontAwesomeIcon icon={faAngleDown} />
				</div>
				:
				<div className="category-button" onClick={moveCategoryDown}
					alt="Move Down" title="Move Down">
					<FontAwesomeIcon icon={faAngleDown} />
				</div>
			}
			<div style={{width: "30px" }} />
			<div className="category-button" onClick={openDeleteModal}
				alt="Delete Category" title="Delete Category">
				<FontAwesomeIcon icon={faTrash} />
			</div>
		</div>
		<div className="category-title-line" />
		{ category.elements.map((element, idx) => 
			<CategoryElement
				key={idx}
				element={element}
				categoryIndex={categoryIndex}
				elementIndex={idx}
			/>
		)}
	</div>
)

export default Category;
