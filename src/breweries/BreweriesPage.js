import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import * as breweryActions from './BreweriesActions';
import BreweriesList from './BreweriesList';

class BreweriesPage extends Component {
  constructor(props){
    super(props);

    this.addBrewery = this.addBrewery.bind(this);
    this.editBrewery = this.editBrewery.bind(this);
    this.deleteBrewery = this.deleteBrewery.bind(this);
  }

  addBrewery(){

  }

  editBrewery(id){

  }

  deleteBrewery(id){
    this.props.deleteBrewery(id);
  }

  render() {
    return (
      <div>
        <input
          type="submit"
          value="Add brewery"
          className="btn btn-primary btn-sm mrgn-5"
          onClick={this.addBrewery} />
        <BreweriesList
          breweries={this.props.breweries}
          modifyCallback={this.editBrewery}
          deleteCallback={this.deleteBrewery}/>
      </div>
    )
  }
}

BreweriesList.propTypes = {
  breweries: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    breweries: state.breweries
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteBrewery: (breweryId) => dispatch(breweryActions.deleteBrewery(breweryId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BreweriesPage);
