import React from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';
import PropTypes from 'prop-types';

const Header = ({loading}) => {
    return (
        <div>
            <nav>
                <IndexLink to="/" activeClassName="active">Home</IndexLink>
                {" | "}
                <Link to="/fy-rates" activeClassName="active">Courses</Link>
                {" | "}
                <Link to="/about" activeClassName="active">About</Link>
            </nav>
            {loading && <LoadingDots interval={100} dots={30}/>}
        </div>
    );
}

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;