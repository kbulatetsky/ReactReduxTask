import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import history from '../app/history';

import * as breweryActions from './BreweriesActions';
import BreweriesList from './BreweriesList';

import Loading from '../common/load/Loading';

class BreweriesPage extends Component {
  constructor(props){
    super(props);

    this.addBrewery = this.addBrewery.bind(this);
    this.editBrewery = this.editBrewery.bind(this);
    this.deleteBrewery = this.deleteBrewery.bind(this);
  }

  addBrewery(){
    history.push('/brewery/add');
  }

  editBrewery(id){
    history.push(`/brewery/edit/${id}`);
  }

  deleteBrewery(id){
    this.props.deleteBrewery(id);
  }

  async componentDidMount(){
    await this.props.loadBreweries();
  }

  render() {
    return (
      <div>
        <input
          type="submit"
          value="Add brewery"
          className="btn btn-success btn-sm mrgn-10 mrgn-left-40"
          onClick={this.addBrewery} />
        <BreweriesList
          breweries={this.props.breweries}
          modifyCallback={this.editBrewery}
          deleteCallback={this.deleteBrewery}/>
        <div className="mrgn-left-40">
          <Loading />
        </div>
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
    deleteBrewery: (breweryId) => dispatch(breweryActions.deleteBrewery(breweryId)),
    loadBreweries: () => breweryActions.loadBreweries(dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BreweriesPage);
