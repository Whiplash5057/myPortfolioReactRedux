import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllMessages, sendNewMessag } from '../actions';
import AllExistingMessages from '../constants/allExistingMessages';
import { sendNewMessage } from '../actions';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class Chatscreen extends Component {
    constructor(props) {
        super(props);
    
        this.state = { term: '', allMsg: [] };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }


    componentDidMount() {
        this.props.getAllMessages(AllExistingMessages(), (arrayList)=> {
            this.setState({allMsg: arrayList});
        });
    }

    onInputChange(event) {
        // console.log(event.target.value);
        this.setState({ term: event.target.value });
      }

    onFormSubmit(event) {
        event.preventDefault();
        console.log('asdfasdf');
        let userMsgValue = {message: this.state.term, user: 1};

        if (this.state.term.length > 0) {
            this.props.sendNewMessage(userMsgValue, () => {
                console.log('done sending message');
                this.setState({ allMsg: [...this.state.allMsg, userMsgValue] });
              });
        }
        

        this.setState({ term: '' });
        
    }

    getmsgList() {
        
        let {allMsg} = this.state;
        
        if (allMsg.length == 0) {
            
            return (
            <div className="noMsgYet" className="msgDiv">
                <span className="myMessage">Hello!!!</span>
            </div>
        );
        }
        const msgSingle = allMsg.map((singleObject, index) => {
            
            if (singleObject.user == 1) {
                return (
                    <div key={index} className="msgDiv userDiv">
                        <span
                            className="userMessage">
                            {singleObject.message}
                        </span>
                    </div>
                    
                );
            } else {
                return (
                    <div key={index} className="msgDiv">
                        <span
                            className="myMessage">
                            {singleObject.message}
                        </span>
                    </div>
                    
                );
            }
            
        });
        return msgSingle;
    }

    render() {

        return ( 

            <div className="chatScreenContent wrapper">
                <div className="chatScreenMessages">
                    <CSSTransitionGroup transitionName="fade"  transitionEnterTimeout={1000} transitionLeaveTimeout={500}>
                        { this.getmsgList() }
                    </CSSTransitionGroup>
                </div>
                <div className="chatScreenInput">
                    <form onSubmit={this.onFormSubmit} className='input-group'>
                        <input
                        placeholder='Enter your message here...'
                        value={this.state.term}
                        onChange={this.onInputChange}
                        className='form-control'
                        />
                        <button type='submit' className='btn btn-secondary'></button>
                    </form>
                </div>
            </div>
        );
    }


}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ getAllMessages }, dispatch);
//   }
  function mapStateToProps({ allMessages }) {
    return { allMessages };
  }
// export default Chatscreen;
export default connect(mapStateToProps, { getAllMessages, sendNewMessage })(Chatscreen); //producers a container