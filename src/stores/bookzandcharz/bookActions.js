import axios from "axios";

export const GET_BOOKS_BEGIN = "GET_BOOKS_BEGIN";
export const GET_BOOKS_SUCCESS = "GET_BOOKS_SUCCESS";
export const GET_BOOKS_FAILURE = "GET_BOOKS_FAILURE";
export const GET_CHARACTERS_BEGIN = "GET_CHARACTERS_BEGIN";
export const GET_CHARACTERS_SUCCESS = "GET_CHARACTERS_SUCCESS";
export const GET_CHARACTERS_FAILURE = "GET_CHARACTERS_FAILURE";



export const getBooksBegin = () => ({
  type: GET_BOOKS_BEGIN

})

export const getBooksSuccess = (myBooks) => ({
  type: GET_BOOKS_SUCCESS,
  payload: {myBooks}

})

export const getBooksFailure = (error) => ({
  type: GET_BOOKS_FAILURE,
  payload: {error}

})


export function getBooks(orderBy='release_date')
{
    return dispatch => {
        dispatch(getBooksBegin())
    
        let apiUrl = 'https://powerful-fortress-46661.herokuapp.com/api/books'
        
        return axios ({
            url: apiUrl,
            method: 'GET',
            header: {
                Accept: "application/json"
            }
        }).then((response) => {
          console.log("GetBooks")
          console.log(response)
              if (response.status == 200) {
                  // Message data
                  let myBooks = response.data.map((item) => {
                      return {
                          id: item.id,
                          name: item.name,
                          authors: item.authors,
                          release_date: item.release_date,
                      }
                  })
                  dispatch(getBooksSuccess(myBooks))
              } else {
                  dispatch(getBooksFailure(response.data))
              }
        }).catch ((error) => {
            dispatch(getBooksFailure(error))
        })
    }
}


export const getCharactersBegin = () => ({
  type: GET_CHARACTERS_BEGIN,
})

export const getCharactersSuccess = (myCharacters) => ({
  type: GET_CHARACTERS_SUCCESS,
  payload: { myCharacters }

})

export const getCharactersFailure = (error) => ({
  type: GET_CHARACTERS_FAILURE,
  payload: {error}
})




/*
// Characters
export function getCharacters(sortBy='gender',orderBy='release_date')
{
    return dispatch => {
        dispatch(getCharactersBegin())
        
        let apiUrl = 'https://powerful-fortress-46661.herokuapp.com/api/characters'
        
        return axios ({
            url: apiUrl,
            method: 'GET',
            header: {
                Accept: "application/json"
            },
            params : {
              _limit: 10
            }
        }).then((response) => {
          console.log("GetCharacters")
          console.log(response)
              if (response.status == 200) {
                  // Message data
                  let myCharacters = response["Characters"].data.map((item) => {
                      return {
                          id: item.id,
                          name: item.name,
                          gender: item.gender,
                          age: item.age,
                      }
                  })
                  dispatch(getCharactersSuccess(myCharacters))
              } else {
                  dispatch(getCharactersFailure(response.data))
              }
        }).catch ((error) => {
            dispatch(getCharactersFailure(error))
        })
    }
}

*/

