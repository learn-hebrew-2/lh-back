import CategoryItem from "../dto/categort.item";

export default interface MaterialCategories {
    addCategory(category: CategoryItem): CategoryItem;
    updateCategory(categoryItem: CategoryItem): CategoryItem;
    deleteCategory(catogoryId: String): CategoryItem;
    getAllCategories(): CategoryItem[];
    getCategory(): CategoryItem;
}