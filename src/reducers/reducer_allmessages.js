// use lodash later
// import _ from 'lodash';


export default function(state = [], action) {
    switch (action.type) {
      case 'ALL_MESSAGES':
        return action.payload;
        break;
      default:
        return state;
    }
  
    return state;
  }