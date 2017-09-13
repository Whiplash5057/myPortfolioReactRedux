export default function(state = {}, action) {
    switch (action.type) {
      case 'NEW_USER':
        // return action.payload; change it later
        return state;
        break;
      default:
        return state;
    }
  
    return state;
  }