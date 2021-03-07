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
    fetch('https://facesearchapi.herokuapp.com/register',{
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

    )
  }
}
export default Register;