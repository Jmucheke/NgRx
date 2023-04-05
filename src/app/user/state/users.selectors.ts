import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./users.state";


const getUsersFeatureState = createFeatureSelector<UserState>('users');

export const getCurrentUser = createSelector(
  getUsersFeatureState,
  state => state.currentUser
)

export const getMaskUsername = createSelector(
  getUsersFeatureState,
  state => state.showUserName
)
