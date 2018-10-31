import CollectionItem from '../dto/collection.item';

export default interface CollectionsInterface {
  /**
   * adds new collection to collections db;
   * @param collection: CollectionItem;
   * @returns CollectionItem - created collection;
   * @throws ExistingMediaException if collection with such name already exists;
   */
  addCollection(collection: CollectionItem): CollectionItem;
  /**
   * edits collection item with given id;
   * @param id 
   * @param collection 
   * @returns edited CollectionItem;
   * @throws NoSuchMediaException if collection with such id does not exists;
   */
  editCollection(id: string, collection: CollectionItem): CollectionItem;
  /**
   * removes collection with given id;
   * @param id 
   * @returns removed CollectionItem;
   * @throws NoSuchMediaException if collection with given id does not exists;
   */
  removeCollection(id: string): CollectionItem;
  /**
   * @return collection with given id;
   * @throws NoSuchMediaException if collection with given id does not exists;
   */
  getCollection(id: string): CollectionItem;
  /**
   * @returns array of all CollectionItem
   * @returns empty array if there is no collections;
   */
  getCollections(): CollectionItem[];
}