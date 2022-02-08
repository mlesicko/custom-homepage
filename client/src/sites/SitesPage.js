import { useSelector, useDispatch } from "react-redux";

import CategoryList from "../genericCategories/CategoryList";
import { openAddSiteCategoryModal } from "../redux/modalActions";
import SiteCategory from "./SiteCategory";

const SitesPage = () => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.data.content);	

	return (
		<CategoryList
			categories={data.siteCategories}
			CategoryType={SiteCategory}
			onAddCategory={() => dispatch(openAddSiteCategoryModal())}
			data={data}
		/>
	);
};

export default SitesPage;
