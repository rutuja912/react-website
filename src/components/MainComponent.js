import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import styles from '../../src/App.css';
import Contact from './ContactComponent';
import Print from './PrintComponent';


class Main extends Component {

  constructor(props){
    super(props);

    this.state={
      
    };

  }
  
  
  render() {
    const HomePage = () => {
      return(
          <Home 
              
          />
      );
    }
    return (

      
      <div>

          <Header />
          <Switch>
              <Route path='/home' component={Home} />
              <Route exact path='/print' component={Print} />
              <Route exact path='/contactus' component={Contact} />
              <Redirect to="/home" />
          </Switch>
         
          
          <Footer />
      </div>
    );
  
    }
  }
export default Main;
