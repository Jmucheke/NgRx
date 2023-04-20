import { createAction, createReducer, on } from "@ngrx/store";
import { initialState, UserState } from "./users.state";
import * as AppState from '../../state/app.state'
import * as userActions from './users.actions'


export interface State extends AppState.State {
  user: UserState
}

export const loginReducer = createReducer<UserState>(
  initialState,
  on(userActions.showUserName, (state):UserState=>{
    return{
      ...state,
      showUserName: !state.showUserName

    }

  })
)
