export function fetchSoftware() {

    return function(dispatch){
      dispatch({type: 'LOADING_SOFTWARE'})
      return fetch('http://localhost:4000/db')
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