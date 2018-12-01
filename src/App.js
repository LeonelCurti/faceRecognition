import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = {
  input:'',
  imageUrl:'',
  box:{},
  route:'signin',//change to signin in production
  isSignedIn: false,
  user:{
    id:'',
    name: '',
    email: '',
    password: '',
    entries: 0,
    joined: ''
  }
}

class App extends Component {

  state = initialState;

  loadUser = (user) => {
    this.setState({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,        
        entries: user.entries,
        joined: user.joined
      }
    })
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }    
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });    
  }

  onPictureSubmit = () => {
    this.setState({ imageUrl: this.state.input })
      fetch('https://ancient-island-39845.herokuapp.com/imageclarifai',{
        method:'post',
        headers: {'Content-type':'application/json'},
        body: JSON.stringify({
          input: this.state.input           
        })
      })
      .then(response =>response.json())
      .then( response => {
        fetch('https://ancient-island-39845.herokuapp.com/image',{
          method:'post',
          headers: {'Content-type':'application/json'},
          body: JSON.stringify({
            id: this.state.user.id            
          })
        })
        .then(res=>res.json())
        .then(count => {
            this.setState((prevState)=>{
              return {
                ...prevState,
                user:{
                  ...prevState.user,
                  entries: count
                }
              }
            })
          this.displayFaceBox(this.calculateFaceLocation(response)); 
          }
        )
        .catch(console.log)
      })
      .catch(console.log)

  }

  displayFaceBox = (box)=>{
    this.setState({ box: box })
  }

  onRouteChange = (route) => {
    if(route === 'signout'){
      this.setState(initialState);
    }else if (route ==='home'){
      this.setState({isSignedIn: true});
    }
    this.setState({ route: route });
  }

  isSignedIn = () => this.state.route === 'signin' 

  render() {
    return (
      <div className="App">
        <Navigation 
          onRouteChange={this.onRouteChange}
          isSignedIn={this.state.isSignedIn} />
        {
          this.state.route ==='home'
          ?<div>
            <ImageLinkForm
              currentUser={this.state.user} 
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onPictureSubmit} />
            <FaceRecognition 
              imageUrl={this.state.imageUrl}
              box={this.state.box} />
          </div>
          :
          (
            this.state.route === 'signin'
            ?<SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            :<Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>         
          )
          
        }  
      </div>
    );
  }
}

export default App;
