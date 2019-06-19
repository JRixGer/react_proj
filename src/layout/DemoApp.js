
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';


import DemoRoutes from './DemoRoutes';

export class DemoApp extends Component {
  
  render() {
    
    return (
      <Router><DemoRoutes /></Router>
    );
  }
}

export default DemoApp;
