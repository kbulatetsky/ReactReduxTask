import React, { Component, PropTypes } from 'react';

export default class MainLayoutComponent extends Component {
  render() {
    return (
      <div>
        <h1>Main layout</h1>
        {this.props.children}
      </div>
    );
  }
}

MainLayoutComponent.propTypes = {
  children: PropTypes.object.isRequired
};
