import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import history from '../app/history';

import * as breweryActions from './BreweriesActions';
import BreweryForm from './BreweryForm';
import * as breweryValidator from './BreweryValidator';

export class AddBreweryPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      brewery: Object.assign({}, this.props.brewery),
      errors: {}
    };

    this.onChanged = this.onChanged.bind(this);
    this.addBrewery = this.addBrewery.bind(this);
  }

  onChanged(brewery){
    const errors = breweryValidator.validate(brewery);

    this.setState({
      brewery: Object.assign({}, brewery),
      errors: errors
    });
  }

  addBrewery(){
    this.props.addBrewery(this.state.brewery);
    history.push("/");
  }

  render() {
    return (
      <div className='container'>
        <h1>Add brewery</h1>
        <BreweryForm
          brewery={this.state.brewery}
          errors={this.state.errors}
          onBreweryChanged={this.onChanged} />
        <input
          className="btn btn-success mrgn-left-20"
          type="button"
          value="Add"
          onClick={this.addBrewery}/>
      </div>
    );
  }
}

AddBreweryPage.propTypes = {
  brewery: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {

  return {
    brewery: {
      id: '',
      name: '',
      brewery_type: '',
      street: '',
      state: '',
      city: '',
      country: '',
      postal_code: '',
      phone: '',
      website_url: ''
    }
  }
};

const mapDispatchToProps = (dispatch) => ({
  addBrewery: (brewery) => dispatch(breweryActions.addBrewery(brewery))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddBreweryPage);
