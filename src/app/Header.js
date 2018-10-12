import React from 'react';
import { PropTypes } from 'prop-types';
import LoadingDots from '../common/LoadingDots';

const Header = ({loading}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/breweries" activeClassName="active">Breweries</Link>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {" "}{loading && <LoadingDots interval={100} dots={20} />}
      </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
