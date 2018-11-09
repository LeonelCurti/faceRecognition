import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '914d8d94ddb643ef948a9e12bf19cf7e'
 });

class App extends Component {
  state = {
    input:'',
    imageUrl:'',
    box:{},
    route:'signin',
    isSignedIn: false

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

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input })
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then( response => this.displayFaceBox(this.calculateFaceLocation(response)) )
      .catch( err=> console.log(err) )

  }

  displayFaceBox = (box)=>{
    this.setState({ box: box })
  }

  onRouteChange = (route) => {
    if(route === 'signout'){
      this.setState({isSignedIn: false})
    }else if (route ==='home'){
      this.setState({isSignedIn: true})
    }
    this.setState({ route: route })
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
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit} />
            <FaceRecognition 
              imageUrl={this.state.imageUrl}
              box={this.state.box} />
          </div>
          :
          (
            this.state.route === 'signin'
            ?<SignIn onRouteChange={this.onRouteChange}/>
            :<Register onRouteChange={this.onRouteChange}/>         
          )
          
        }  
      </div>
    );
  }
}

export default App;
