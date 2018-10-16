import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import history from '../app/history';

import * as breweryActions from './BreweriesActions';
import BreweryForm from './BreweryForm';
import * as breweryValidator from './BreweryValidator';

export class EditBreweryPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      brewery: Object.assign({}, this.props.brewery),
      errors: {}
    };

    this.onChanged = this.onChanged.bind(this);
    this.saveBrewery = this.saveBrewery.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.brewery &&
        nextProps.brewery.id !== prevState.brewery.id) {
      return {
         brewery: nextProps.brewery
        };
    }
    else return null;
  }

  onChanged(brewery) {
    const errors = breweryValidator.validate(brewery);

    this.setState({
      brewery: Object.assign({}, brewery),
      errors: errors
    });
  }

  saveBrewery(){
    this.props.updateBrewery(this.state.brewery);
    history.push("/");
  }

  componentDidMount(){
    this.props.loadBrewery(this.props.breweryId);
  }

  render() {
    return (
      <div className='container'>
        <h1>Edit brewery</h1>
        <BreweryForm
          brewery={this.state.brewery}
          errors={this.state.errors}
          onBreweryChanged={this.onChanged} />
        <input
          className="btn btn-success mrgn-left-20"
          type="button"
          value="Save"
          onClick={this.saveBrewery}/>
      </div>
    );
  }
}

EditBreweryPage.propTypes = {
  breweryId: PropTypes.string.isRequired,
  brewery: PropTypes.object,
  loadBrewery: PropTypes.func.isRequired,
  updateBrewery: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) =>{

  let brewery = {
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
  };

  if (state.editBrewery){
    brewery = state.editBrewery;
  }

  return {
    breweryId: ownProps.match.params.breweryId,
    brewery: brewery
  }
};

const mapDispatchToProps = (dispatch) => ({
  loadBrewery: (breweryId) => breweryActions.loadBrewery({ dispatch, breweryId }),
  updateBrewery: (brewery) => dispatch(breweryActions.updateBrewery(brewery))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditBreweryPage);
