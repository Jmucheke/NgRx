import { createAction, createReducer, on } from "@ngrx/store";


export const loginReducer = createReducer(
  { showUserName:false},
  on(createAction('[User] Mask User Name'), state=>{
    return{
      ...state,
      showUserName: !state.showUserName

    }

  })
)
