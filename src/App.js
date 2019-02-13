import React, { Component } from 'react';
<<<<<<< HEAD
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import { DISHES } from './shared/dishes';

class App extends Component {

  constructor(props) {
    super(props);

    this.state={
      dishes: DISHES
    };

  }
=======
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';

class App extends Component {
>>>>>>> origin/master
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
<<<<<<< HEAD
        <Menu dishes={this.state.dishes}/>
=======
        <Menu />
>>>>>>> origin/master
      </div>
    );
  }
}

export default App;
