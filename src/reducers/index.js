import { combineReducers } from 'redux';
import ReducerTestimonial from './reducer_testimonial';
import ReducerActiveTestimo from './reducer_active_testimo';
import AllMessages from './reducer_allmessages';
import NewUser from './reducer_newuser';
import NewMessgae from './reducer_newmsg';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
  testimonials: ReducerTestimonial,
  activeTestimonial: ReducerActiveTestimo,
  allMessages: AllMessages,
  newMessage: NewMessgae,
  form: FormReducer,
  newUser: NewUser,
});

export default rootReducer;
