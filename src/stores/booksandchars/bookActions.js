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


export function getBooks(books=[],orderBy='release_date')
{
    return dispatch => {
        dispatch(getBooksBegin())
        let ids = books.map((item) => {return item.id}).join(",")

        let apiUrl = 'https://anapioficeandfire.com/api/books?orderBy=${orderBy}'
        
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

export const getCharactersSuccess = (characters) => ({
  type: GET_CHARACTERS_SUCCESS,
  payload: { characters }

})

export const getCharactersFailure = (error) => ({
  type: GET_CHARACTERS_FAILURE,
  payload: {error}
})





// Characters
export function getCharacters(characters=[],sortBy='gender',orderBy='release_date')
{
    return dispatch => {
        dispatch(getCharactersBegin())
        let ids = characters.map((item) => {return item.id}).join(",")

        let apiUrl = 'https://anapioficeandfire.com/api/characters?sort=${sortBy}'
        
        return axios ({
            url: apiUrl,
            method: 'GET',
            header: {
                Accept: "application/json"
            }
        }).then((response) => {
          console.log("GetCharacters")
          console.log(response)
              if (response.status == 200) {
                  // Message data
                  let myCharacters = response.data.map((item) => {
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


