import MaterialItem from "../dto/material.item";

export default interface Materials {
    addGlobalMaterial(materialItem: MaterialItem): MaterialItem;
    updateGlobalMaterial(materialItem: MaterialItem): MaterialItem;
    deleteGlobalMaterial(materialId: String): MaterialItem;
    getMaterials(first?: number, last?: number): MaterialItem[];
    getMaterialsByCollection(collection: String, first?: number, last?: number): MaterialItem[];
    getPopularMaterials(first?: number, last?: number): MaterialItem[];
    getMaterial(materialId): MaterialItem;
    addUserMaterial(materialId: String): MaterialItem;
    removeUserMaterial(materialId: String): MaterialItem;
    getUserMaterials(first?: number, last?: number): MaterialItem[];
    getUserMaterialsByCollection(collection: String, first?: number, last?: number): MaterialItem[];
    getUserPopularMaterials(first?: number, last?: number): MaterialItem[];
}