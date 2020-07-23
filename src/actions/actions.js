export const HOST_URL = "http://localhost:3001"


export function fetchSoftware() {

    return function(dispatch){
      dispatch({type: 'LOADING_SOFTWARE'})
      return fetch('${HOST_URL}/software/:id')
        .then(res => {
          return res.json()
        }).then(responseJson => {
          dispatch({type: 'FETCH_SOFTWARE', payload: responseJson.images})
      })
  
    }
  }
  
  export function loadingSoftware(){
    return {
      type: 'LOADING_SOFTWARE',
      payload : []
    };
  };