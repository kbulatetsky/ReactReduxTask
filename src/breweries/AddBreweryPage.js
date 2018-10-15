import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class AddBreweryPage extends Component {

  render() {
    return (
      <div>

      </div>
    );
  }
}

AddBreweryPage.propTypes = {
  brewery: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {

  let brewery = {
    id: '',
    name: '',
    brewery_type: '',
    street: '',
    state: '',
    country: '',
    postal_code: '',
    phone: '',
    website_url: ''
  };

  return {
    brewery: brewery
  }
};

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(AddBreweryPage);
