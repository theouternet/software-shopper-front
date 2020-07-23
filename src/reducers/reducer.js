export default (state = {loading: false, pictures: []}, action) => {
    switch (action.type) {
      case 'FETCH_SOFTWARE':
        return {loading: false, pictures: action.payload};
      case 'LOADING_SOFTWARE':
        return {loading: true, pictures: action.payload};
      default:
        return state;
    }
  };