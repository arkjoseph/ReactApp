import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/CourseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursesPage extends Component {

    // Initialize states and bind functions
    constructor(props, context) {
        super(props, context);

        // Bind states to 'this'
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    redirectToAddCoursePage() {
        browserHistory.push('/course');
    }

    render(){
        //debugger;
        const {rates} = this.props;

        return (
          <div>
              <h1>Courses</h1>
              <input
                  type="submit"
                  value="Add Course"
                  className="btn btn-primary"
                  onClick={this.redirectToAddCoursePage}
                  />
              <CourseList rates={rates} />
          </div>
        );
    }
}

CoursesPage.propTypes = {
    rates: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

// DEFINE CONNECT FUNCTIONS
// Return properties from the root reducers
function mapStateToProps(state, ownProps) {
    //debugger;
    return {
        // Root reducer 'courses'
        rates: state.rates
    };
}

// Return the courses wrapped and dispatched for re-use
function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(courseActions, dispatch)
        //createCourse: course => dispatch(courseActions.createCourse(course))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);