import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as breweryActions from './BreweriesActions';

import Input from '../common/Input';

export class BreweriesFilter extends Component {
  constructor(props){
    super(props);

    this.state = {
      filter: {
        name: '',
        city: ''
      }
    }

    this.onChange = this.onChange.bind(this);
    this.onFilter = this.onFilter.bind(this);
  }

  onChange(args){
    const filter = Object.assign({}, this.state.filter)

    const field = args.target.name;
    filter[field] = args.target.value;

    this.setState({
      filter: filter
    });
  }

  onFilter(){
    this.props.filterBreweries(this.state.filter);
  }

  render() {
    return (
      <div className="col-sm-10 col-md-8 col-lg-5">
        <h4>Filter:</h4>
        <input
          type="text"
          name="name"
          className="form-control mrgn-5"
          placeholder="filter by name"
          value={this.state.filter.name}
          onChange={this.onChange}/>
        <input
          type="text"
          name="city"
          className="form-control mrgn-5"
          placeholder="filter by city"
          value={this.state.filter.city}
          onChange={this.onChange}/>
        <input
          type="button"
          value="Filter"
          className="btn btn-primary btn-sm mrgn-5"
          onClick={this.onFilter}/>
      </div>
    );
  }
}

BreweriesFilter.propTypes = {
  filterBreweries: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  filterBreweries: (filter) => breweryActions.filterBreweries({ dispatch, filter })
});

export default connect(mapStateToProps, mapDispatchToProps)(BreweriesFilter);
