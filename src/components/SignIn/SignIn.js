import React, { Component } from "react";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: "",
      alert: false
    };
  }

  onEmailChange = event => {
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ signInPassword: event.target.value });
  };

  onSubmitSignIn = e => {
    e.preventDefault();
    fetch("https://facesearchapi.herokuapp.com/signin", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(resp => resp.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
        this.setState({ alert:true});
        setTimeout(()=>{this.setState({alert:false})},3000)
      })
      .catch(err=>{
        console.log('Wrong credentials');       
      });
  };

  render() {
    // const {onRouteChange} = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-md-7 col-lg-6 mx-auto">
            <h2 className="text-center pt-2">Sign In</h2>
            <form onSubmit={this.onSubmitSignIn}>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  className="form-control"
                  required
                  id="email-address"
                  placeholder="use:  leo@info.com"
                  onChange={this.onEmailChange}
                ></input>
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input
                  required
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="use:  123"
                  onChange={this.onPasswordChange}
                ></input>
              </div>
              <div className="form-group">
                {this.state.alert ? (
                  <div className="alert alert-danger" role="alert">
                    Wrong credentials
                  </div>
                ) : null}
                <input
                  className="btn btn-info"
                  type="submit"
                  value="Sign in"
                  onSubmit={this.onSubmitSignIn}
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      // <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center shadow-4">
      //   <main className="pa4 black-80">
      //     <div className="measure">
      //       <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      //         <legend className="f1 fw6 ph0 mh0">Sign In</legend>
      //         <div className="mt3">
      //           <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
      //           <input
      //             className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
      //             type="email"
      //             name="email-address"
      //             id="email-address"
      //             onChange={this.onEmailChange}/>
      //         </div>
      //         <div className="mv3">
      //           <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
      //           <input
      //             className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
      //             type="password"
      //             name="password"
      //             id="password"
      //             onChange={this.onPasswordChange}/>
      //         </div>
      //       </fieldset>
      //       <div className="">
      //         <input
      //           className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
      //           type="submit"
      //           value="Sign in"
      //           onClick={this.onSubmitSignIn}
      //           />
      //       </div>
      //       <div className="lh-copy mt3">
      //         <p
      //         className="f6 link dim black db pointer"
      //         onClick={()=>onRouteChange('register')}
      //         >Register</p>
      //       </div>
      //     </div>
      //   </main>
      // </article>
    );
  }
}
export default SignIn;
