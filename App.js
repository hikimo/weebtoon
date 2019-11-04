import React, { Component } from "react"

// Redux Provider
import { Provider } from 'react-redux'
import store from './src/_redux/store'

// Navigator
import AppNavigator from "./src/routes/AppNavigator";

// Imported screen
import SplashScreen from "./src/screens/SplashScreen"

class App extends Component {
  constructor() {
    super() 
    this.state = {
      isLoading: true
    }
  }
  
  render() {
    const { isLoading } = this.state

    // If is loading
    if(isLoading) {
      return(
        <SplashScreen />
      )
    }
    
    return(
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  }

  onLoading = () => {
    setTimeout(() => {
      this.setState({isLoading: false})
    }, 3500)
  }

  // Life cycle function
  componentDidMount() {
    if(this.state.isLoading) {
      this.onLoading()
    }
    console.disableYellowBox = true
  }
}

export default App