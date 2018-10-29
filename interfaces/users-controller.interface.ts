import UserItem from '../dto/user.item';

export default interface UserControllerInterface {
  createUser(user: UserItem): UserItem;
  getUsers(): UserItem[];
  getUser(id: string): UserItem;
  updateUser(id: string): UserItem;
  
}