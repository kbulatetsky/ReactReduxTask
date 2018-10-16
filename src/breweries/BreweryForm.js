import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '../common/Input';

class BreweryForm extends Component {
  constructor(props){
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(args){
    const brewery = Object.assign({}, this.props.brewery);

    const field = args.target.name;
    brewery[field] = args.target.value;

    this.props.onBreweryChanged(brewery);
  }

  render() {
    const brewery = this.props.brewery;
    const errors = this.props.errors;

    return (
      <form>
        <Input
          type="text"
          name="name"
          label="Name"
          value={brewery.name}
          onChange={this.onChange}
          error={errors.name}/>
        <Input
          type="text"
          name="brewery_type"
          label="Type"
          value={brewery.brewery_type}
          onChange={this.onChange}
          error={errors.brewery_type}/>
        <Input
          type="text"
          name="street"
          label="Street"
          value={brewery.street}
          onChange={this.onChange}
          error={errors.street}/>
        <Input
          type="text"
          name="city"
          label="City"
          value={brewery.city}
          onChange={this.onChange}
          error={errors.city}/>
        <Input
          type="text"
          name="state"
          label="State"
          value={brewery.state}
          onChange={this.onChange}
          error={errors.state}/>
        <Input
          type="text"
          name="country"
          label="Country"
          value={brewery.country}
          onChange={this.onChange}
          error={errors.country}/>
        <Input
          type="text"
          name="postal_code"
          label="Postal code"
          value={brewery.postal_code}
          onChange={this.onChange}
          error={errors.postal_code}/>
        <Input
          type="text"
          name="phone"
          label="Phone"
          value={brewery.phone}
          onChange={this.onChange}
          error={errors.phone}/>
        <Input
          type="text"
          name="website_url"
          label="Website url"
          value={brewery.website_url}
          onChange={this.onChange}
          error={errors.website_url}/>
      </form>
    );
  }
}

BreweryForm.propTypes = {
  brewery: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onBreweryChanged: PropTypes.func.isRequired
};

export default BreweryForm;
