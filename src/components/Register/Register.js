import React, {Component} from 'react';

class Register extends Component {
  constructor(props){
    super(props); 
    this.state= {  
      email:'',
      password:'',
      name:''
    };
  }

  onNameChange = (event) => {
    this.setState({ name: event.target.value});
  }

  onEmailChange = (event) => {
    this.setState({ email: event.target.value});
  }

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value});
  }

  onSubmitRegister = (e) => {
    e.preventDefault();
    fetch('https://ancient-island-39845.herokuapp.com/register',{
      method:'post',
      headers: {'Content-type':'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
    .then(resp => resp.json())
    .then(user =>{
      if(user.id){
        this.props.onRouteChange('signin');    
      }  
    })
    .catch(console.log)
  }

  render(){
    return (
      <div className="container">
        <div className="row">

          <div className="col-sm-8 col-md-7 col-lg-6 mx-auto">

            <h2 className="text-center pt-2">Register</h2>            
            <form>
              <div className="form-group">
                <label>Name:</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" onChange={this.onNameChange}></input>  
              </div>      
              <div className="form-group">
                <label>Email:</label>
                <input type="email" className="form-control" id="email" placeholder="example@example.com" onChange={this.onEmailChange}></input>  
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input type="password" className="form-control" id="password" placeholder="Enter your password" onChange={this.onPasswordChange}></input>  
                </div>
              <div className="form-group">
                <input 
                  className="btn btn-info" 
                  type="submit"
                  value="Register"
                  onClick={this.onSubmitRegister}
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
      //         <legend className="f1 fw6 ph0 mh0">Register</legend>
      //         <div className="mt3">
      //           <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
      //           <input 
      //             className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
      //             type="text" 
      //             name="name"  
      //             id="name"
      //             onChange={this.onNameChange}/>
      //         </div>
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
      //           value="Register"
      //           onClick={this.onSubmitRegister}
      //           />
      //       </div>
      //     </div>
      //   </main>
      // </article>
    )
  }
}
export default Register;