import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as fyRateActions from '../../actions/FyRateActions';
import FyRateList from './FyRateList';
import {browserHistory} from 'react-router';

class FyRatesPage extends Component {

    // Initialize states and bind functions
    constructor(props, context) {
        super(props, context);

        // Bind states to 'this'
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    redirectToAddCoursePage() {
        browserHistory.push('/fy-rates');
    }

    render(){
        //debugger;
        const {fyRates} = this.props;

        return (
          <div>
              <h1>Courses</h1>
              <input
                  type="submit"
                  value="Add Course"
                  className="btn btn-primary"
                  onClick={this.redirectToAddCoursePage}
                  />
              <FyRateList fyRates={fyRates} />
          </div>
        );
    }
}

FyRatesPage.propTypes = {
    fyRates: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

// DEFINE CONNECT FUNCTIONS
// Return properties from the root reducers
function mapStateToProps(state, ownProps) {
    //debugger;
    return {
        // Root reducer 'courses'
        fyRates: state.fyRates
    };
}

// Return the courses wrapped and dispatched for re-use
function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(fyRateActions, dispatch)
        //createCourse: course => dispatch(fyRateActions.createCourse(course))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(FyRatesPage);