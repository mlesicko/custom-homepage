import React from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";

import { getData } from "../redux/apiActions";
import { openAddCategoryModal } from "../redux/modalActions";
import Category from "./Category";

class CategoryList extends React.Component {
	componentDidMount() {
		this.props.getData();
	}

	render() {
		return (
			<div style={{display: "grid"}}>
				{ this.props.data.categories.map((category, idx) =>
					<Category
						key={idx}
						category={category}
						categoryIndex={idx}
						isFirst={idx === 0}
						isLast={idx === this.props.data.categories.length - 1}
						data={this.props.data}
					/>
				)}
				<Button 
					className="add-category-button"
					onClick={this.props.openAddCategoryModal}
				>
					Add New Category
				</Button>
			</div>
		);
	}

}

const mapStateToProps = (state) => ({
	data: state.data
});

const mapDispatchToProps = (dispatch) => ({
	getData: () => dispatch(getData()),
	openAddCategoryModal: () => dispatch(openAddCategoryModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
