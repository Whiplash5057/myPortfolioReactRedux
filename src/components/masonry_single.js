import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';

class MasonrySingle extends Component {
    constructor(props) {
        super(props);

        this.state = { open: false, };
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };
    
    onCloseModal = () => {
        this.setState({ open: false });
    };


    render() {
        let {singleConstant} = this.props;
        // console.log(singleConstant[0]);
        let divStyle = {
            backgroundImage: 'url(' + singleConstant.src + ')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        };

        const { open } = this.state;
        return (
            <div
            className="boxProject"
            key={singleConstant.id}
            style={divStyle} 
            onClick={this.onOpenModal}>
            {/* {singleConstant.title} */}
                <Modal open={open} onClose={this.onCloseModal} little >
                    <div className="conatinerPopup">
                        <div className="popRow">
                            <div className="dialogAlertText" >
                                <h2>{singleConstant.title}</h2>
                                <div><span className="underline">Categories </span>: {singleConstant.category}</div>
                            </div>
                            <div className="dialogAlertText">{singleConstant.description}</div>
                            <div style={{'textAlign': 'center'}} ><a href={singleConstant.link} target="_blank"><button>Learn More</button></a></div>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }


}

export default MasonrySingle;