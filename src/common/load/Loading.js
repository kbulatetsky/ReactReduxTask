import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LoadingDots from '../LoadingDots';
import Error from '../Error';

export class Loading extends Component {

  render() {
    return (
      <div>
        {this.props.loading && <LoadingDots interval={100} dots={20}/>}
        {!this.props.loading && this.props.error && <Error error={this.props.error} />}
      </div>
    );
  }
}

Loading.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

const mapStateToProps = (state) => ({
  loading: state.loadState.loading,
  error: state.loadState.error
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
