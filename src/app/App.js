import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Header from './Header';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Layout</h1>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children : PropTypes.object.isRequired
};


