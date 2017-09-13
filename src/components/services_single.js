import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';


// const ServicesSingle = ({singleConstant}) => {

class ServicesSingle extends Component {
    constructor(props) {
        super(props);

        this.state = { open: false, };

        // this.onOpenModal = this.onOpenModal.bind(this);
        // this.onCloseModal = this.onCloseModal.bind(this);
    }

    // state = {
    //     open: 0,
    //   };

    onOpenModal = () => {
        this.setState({ open: true });
    };
    
      onCloseModal = () => {
        this.setState({ open: false });
    };


    render() {
        let {singleConstant} = this.props;
        let title = singleConstant.title;
        let description = singleConstant.description;
        let innerInformation = singleConstant.innerInformation;
        let innerInfoInfotext = innerInformation.experties;
        const { open } = this.state;

        return (
            <div className="servicesSingle">
                <div className="servicesSingleTitle title"> {title} </div>
                <div className="servicesSingleDesc description"> {description} </div>
                <div className="serviceInner"> <button onClick={this.onOpenModal}>Learn More</button> </div>
                <Modal open={open} onClose={this.onCloseModal} little >
                    
                    <div className="dialogAlertText" >
                        <h2>{title}</h2>
                        <ul className="leftAlignUls">{innerInfoInfotext.map((point, index) => {
                            return <li key={index}>{point}</li>
                            })}</ul>
                    </div>
                </Modal>
            </div>
        );
    }
    

}

// ReactDOM.render(<App />, document.querySelector('.container'));

export default ServicesSingle;

