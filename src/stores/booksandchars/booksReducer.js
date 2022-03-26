import * as bookActions from "./bookActions";

const initialState = {
    myBooks: [],
    myCharacters: [],
    error: null,
    loading:false
}

const booksReducer = (state = initialState, action) => {
    switch(action.type){
        case bookActions.GET_BOOKS_BEGIN:
          return {
            ...state,
            loading: true
          }
      case bookActions.GET_BOOKS_SUCCESS:
          return {
            ...state,
            myBooks: action.payload.MyBooks
          }
      case bookActions.GET_BOOKS_FAILURE:
          return {
          ...state,
          error: action.payload.error

          }
      case bookActions.GET_CHARACTER_BEGIN:
          return {
            ...state,
            loading:true
          }
      case bookActions.GET_CHARACTER_SUCCESS:
          return {
            ...state,
            myCharacters: action.payload.myCharacters
          }
      case bookActions.GET_CHARACTER_FAILURE:
        return {
          ...state,
          error: action.payload.error
        }
      default:
        return state
    }
}

export default booksReducer;
