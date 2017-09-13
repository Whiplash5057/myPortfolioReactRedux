// State argument is not the APPLICATION State
// only the state this reducer is responsible for
export default function(state = null, action) {
    // never mutate the state
    //something like state.title = book.title; return state
    switch (action.type) {
      case 'TESTIMONIAL_SELECTED':
        return action.payload;
        break;
    }
  
    return state;
  }
  