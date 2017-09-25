import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chatscreen from './chatscreen';
import { Field, reduxForm } from 'redux-form';
import { createUser } from '../actions';

class LiveChat extends Component {

    componentDidMount() {
        this.initiateCanvas();
    }

    renderField(field) {
      const { meta: { touched, error } } = field;
      let className = `form-group ${touched && error ? 'has-danger' : ''}`;
      className +=  field.label == "Confirm Pass." ? ' confirmPass confirmTrue' : '';
      // console.log(className);
      
      return (
        <div className={className}>
          <label> {field.label}: </label>
          <input 
            className="form-control"
            placeholder={field.placeholder}
            type="input" {...field.input} />
          <div className="errorText">{touched ? error : ''}</div>
        </div>
      )
    }


    onSubmit(values) {
      console.log();
      if (Object.keys(values) != 0 && values.username.length > 0 && values.password.length > 0 && values.confirmPassword.length > 0) {
        this.props.createUser(values, () => {
          // this.props.history.push('/');
          let item = document.querySelector('.chatScreenLogin');
          item.classList.remove("isVisible"); 
          console.log('done');
  
        }, () => {
          console.log('not done');
        });
      }
      // this.props.createUser(values);
    }


    onSignup() {
      let item = document.querySelector('.confirmPass');
      let signupBtn = document.querySelector('.signUpOption');
      item.className += " confirmTrue";
      document.querySelector('.loginOption').classList.remove("active");
      if(!signupBtn.classList.contains('active'))
        signupBtn.classList.add('active');
    }

    onLogin() {
      let item = document.querySelector('.confirmPass');
      let loginBtn = document.querySelector('.loginOption');
      item.classList.remove("confirmTrue");
      document.querySelector('.signUpOption').classList.remove("active");
      if(!loginBtn.classList.contains('active'))
        loginBtn.classList.add('active');
    }

    render() {

      const { handleSubmit } = this.props;
      
        return (
            <section className="chatScreenContainer">
                <canvas></canvas>
                <Chatscreen />
                {/* If isVisible is applied then there would be a background overlay over the chatroom */}
                <div className="chatScreenLogin"> 
                  <div className="chatScreenLoginSingle loginSignupForm">
                    <div className="formTitle">Let's have a conversation...</div>
                    <div className="signUpLoginOptionContainer">
                      <button className="signUpOption active" onClick={ this.onSignup.bind(this) }>Signup</button>
                      <button className="loginOption" onClick={ this.onLogin.bind(this) }>Login</button>
                    </div>
                    <form className="loginForm" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                      <Field
                        label="UserName"
                        placeholder="Greater than 4 chars"
                        name="username"
                        component={this.renderField}
                      />
                      <Field
                        label="Password"
                        placeholder="Greater than 6 chars"
                        name="password"
                        component={this.renderField}
                      />
                      <Field
                        label="Confirm Pass."
                        placeholder="Greater than 6 chars"
                        name="confirmPassword"
                        component={this.renderField}
                      />
                      <button className="submitMsg" type="submit">SUBMIT</button>
                    </form>
                  </div>
                </div>
            </section>
        );
    }

    initiateCanvas() {

        var canvas = document.querySelector('canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        var c = canvas.getContext('2d');

        var maxRadius = 50;
        var minRadius = 2;
        
        var colorArray = [
            '#86152F',
            '#B22A3E',
            '#374140',
            '#7ac483',
            '#7ac483',
          ];
          

        window.addEventListener('mousemove', function (event) {
            // console.log('asdf');
            mouse.x = event.x;
            mouse.y = event.y;
          });
          
          window.addEventListener('resize', function (event) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
          
            init();
          });

        var mouse = {
            x: undefined,
            y: undefined,
          };

        function getRandom(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min);
          }




        function Circle(x, y, dx, dy, radius) {
            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.radius = radius;
            this.minRadius = radius;
            this.color = colorArray[getRandom(0, 4)];
          
            this.draw = function () {
              c.beginPath();
              c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
              c.strokeStyle = 'blue';
          
              // c.stroke();
              c.fillStyle = this.color;
              c.fill();
            };
          
            this.update = function () {
              if (this.x + this.radius > innerWidth || this.x - radius < 0)
                this.dx = -this.dx;
          
              if (this.y + this.radius > innerHeight || this.y - radius < 0)
                this.dy = -this.dy;
          
              this.x += this.dx;
              this.y += this.dy;
          
              // interactivity
              if (mouse.x - this.x < 50 && mouse.x - this.x > -50
              && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
                if (this.radius < maxRadius) {
                  this.radius += 1;
                }
          
              } else if (this.radius > this.minRadius) {
                this.radius -= 1;
              }
            };
          
          }
        

        var circleArray = [];
        function init() {
          circleArray = [];
          for (var i = 0; i < 1000; i++) {
            var radius = getRandom(0, 10);
            var x = Math.random() * (innerWidth - radius * 2) + radius;
            var dx = 2 * (Math.random() - 0.5);
            var dy = 2 * (Math.random() - 0.5);
            var y = Math.random() * (innerHeight - radius * 2) + radius;
            circleArray.push(new Circle(x, y, dx, dy, radius));
        
          }
        
        }
        
        function animate() {
            requestAnimationFrame(animate);
          
            //refresh the canvas
            c.clearRect(0, 0, innerWidth, innerHeight);
          
            for (var i = 0; i < circleArray.length; i++) {
              circleArray[i].draw();
              circleArray[i].update();
            }
          
          }

          init();
          animate();

    }

}

function validate(values) {
  // console.log(values); -> { title: 'asdf', content: 'asdf', categories='asdf'}
  const errors = {};
  let loginBtn = document.querySelector('.confirmPass');

  //validate  the inputs from 'values'
  if ( values.username != undefined && values.username.length <= 4) {
    errors.username = 'Enter a UserName longer than 4 characters';
  }

  if (values.password != undefined && values.password.length <= 6) {
    errors.password = 'Enter Password longer than 6 characters';
  }

  if (values.confirmPassword != undefined && values.confirmPassword.length <= 6) {
    errors.confirmPassword = 'Enter Your Password longer than 6 characters';
  }

  if(loginBtn != null) {
    if( values.password != values.confirmPassword) {
      // console.log(loginBtn);
      errors.confirmPassword = 'Please Enter The Right Info...';
    }
  }
  

  //if errors is empty
  //if errors has any properties. redux form assumes form is invalid
  return errors;
}



// export default LiveChat;
export default reduxForm({
  form: 'LoginOrSignup', //unique
  validate,
})(
  connect(null, {createUser})(LiveChat)
);
// export default connect(mapStateToProps, mapDispatchToProps)(LiveChat); //producers a container