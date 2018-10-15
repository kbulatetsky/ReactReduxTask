import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as arrayHelper from '../common/ArrayHelper';

export class EditBreweryPage extends Component {

  render() {
    return (
      <div>

      </div>
    );
  }
}

EditBreweryPage.propTypes = {
  brewery: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  const breweryId = ownProps.match.params.breweryId;

  let brewery = { };

  if (breweryId){
    const breweryCandidate =
      arrayHelper.first(state.breweries, b => b.id == breweryId);

    if (breweryCandidate){
      brewery = breweryCandidate;
    }
  }

  return {
    brewery: brewery
  }
};

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(EditBreweryPage);
