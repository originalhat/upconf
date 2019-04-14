import React, {Component} from 'react';
import './App.css';

import * as firebase from 'firebase/app';
import 'firebase/auth';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {email: ''},
      signedIn: false,
      signup: {email: '', password: ''},
      signin: {email: '', password: ''},
    };

    // TODO: this should happen higher up, ideally before the component is mounted
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(`user: `, user);
        this.setState({signedIn: true, user: {email: user.email}})
      } else {
        this.setState({signedIn: false})
      }
    });
  }

  handleSignupChange({email, password}) {
    this.setState({
      signup: {
        email: email || this.state.signup.email,
        password: password || this.state.signup.password,
      }
    });
  }

  handleSigninChange({email, password}) {
    this.setState({
      signin: {
        email: email || this.state.signin.email,
        password: password || this.state.signin.password,
      }
    });
  }

  handleSignUpSubmit = () => {
    event.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(this.state.signup.email, this.state.signup.password)
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(`${errorCode}: `, errorMessage);
      });

    this.setState({signedUp: true})

  };

  handleSignInSubmit = () => {
    event.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.signin.email, this.state.signin.password)
      .catch(function (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(`${errorCode}: `, errorMessage);
      });

    this.setState({signedUp: true})

  };

  handleSignout = () => {
    firebase.auth().signOut();
  };

  render() {
    return (
      <div className="App">
        <h1>UpConf</h1>

        {
          this.state.signedIn ?
            <div className="App__Signout">
              <span>SIGNED IN AS <strong>{this.state.user.email}</strong></span>
              <span onClick={this.handleSignout}>logout</span>
            </div>
            :
            <div>
              <div className="App__Signup">
                <h2>Sign up</h2>

                <form onSubmit={this.handleSignUpSubmit}>
                  <label>
                    <h3>Email</h3>
                    <input
                      type="email"
                      name="email"
                      onChange={(event) => this.handleSignupChange({email: event.target.value})}
                    />
                  </label>

                  <label>
                    <h3>Password</h3>
                    <input
                      type="password"
                      name="password"
                      onChange={(event) => this.handleSignupChange({password: event.target.value})}
                    />
                  </label>

                  <input type="submit" value="Submit"/>
                </form>

              </div>

              <div className="App_Signin">
                <h2>Sign in</h2>

                <form onSubmit={this.handleSignInSubmit}>
                  <label>
                    <h3>Email</h3>
                    <input
                      type="email"
                      name="email"
                      onChange={(event) => this.handleSigninChange({email: event.target.value})}
                    />
                  </label>

                  <label>
                    <h3>Password</h3>
                    <input
                      type="password"
                      name="password"
                      onChange={(event) => this.handleSigninChange({password: event.target.value})}
                    />
                  </label>

                  <input type="submit" value="Submit"/>
                </form>
              </div>
            </div>
        }
      </div>
    );
  }
}

export default App;
