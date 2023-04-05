import { User } from "../user";


export interface UserState {
  showUserName: boolean;
  currentUser: User;
}

export const initialState: UserState = {
  showUserName: false,
  currentUser: null,
}
