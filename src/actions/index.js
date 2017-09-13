//Action creater
import axios from 'axios';


const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const KEY = '?key=asdfasdf12';


export function selectTestimonial(currentTest) {
    // console.log('A book has been selected', book.title);
  
    //selectBook is an actionCreator, it needs to return an action
    //an object with a type property and a payload
    return {
      type: 'TESTIMONIAL_SELECTED',
      payload: currentTest,
    };
  }
  
  export function getAllMessages(allMessages, callbackSuccess) {

    // uncomment when completing server side...
    // later send request in the payload
    // const request = axios.get(`${ROOT_URL}/posts${KEY}`)
    callbackSuccess(allMessages);

    return {
      type: 'ALL_MESSAGES',
      payload: allMessages
    }
  }

  export function sendNewMessage(message, callbackSuccess) {
    let tempValues = { title: 'asdfasdf', categories: 'asdfasdf', content: 'asdfasdfasdf' }
    const request = axios.post(`${ROOT_URL}/posts${KEY}`, tempValues)
                          .then((end) => {
                            if (end.data.categories) {  // change this to success statement
                              callbackSuccess();
                            }
                          });


    return {
      type: 'NEW_MESSAGE',
      payload: request
    }
  }

  export function createUser(values, callbackSuccess, callbackFailure) {
    let tempValues = { title: 'asdfasdf', categories: 'asdfasdf', content: 'asdfasdfasdf' }
    const request = axios.post(`${ROOT_URL}/posts${KEY}`, tempValues)
                        .then((end) => {
                          // console.log(end, 'end');
                          if (end.data.categories) {  // change this to success statement
                            callbackSuccess();
                          } else {
                            callbackFailure();
                          }
                          
                        });

    return {
      type: 'NEW_USER',
      payload: request,
    }
  }