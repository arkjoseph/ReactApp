import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as fyRateActions from '../../actions/FyRateActions';
import CourseForm from './CourseForm';
import toastr from 'toastr';

class ManageFyRatePage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            fyRate: Object.assign({}, this.props.fyRate),
            errors: {},
            loading: false
        };
        // Bind states to 'this'
        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(this.props.fyRate.id != nextProps.fyRate.id){
            // Populate form fields when existing course form is being viewed
            this.setState({fyRate: Object.assign({}, nextProps.fyRate)});
        }
    }

    // Update values with a single function
    updateCourseState(event) {
        const field = event.target.name;
        let fyRate = this.state.course;
        fyRate[field] = event.target.value;
        return this.setState({fyRate: fyRate});
    }

    saveCourse(event){
        event.preventDefault();
        this.setState({loading: true});
        this.props.actions.saveCourse(this.state.course)
            .then(() => this.redirect())
            .catch(error => {
                toastr.error(error);
                this.setState({loading: false});
            });
    }

    redirect() {
        this.setState({loading: false});

        toastr.success('Course Saved!');

        this.context.router.push('/courses');
    }

    render() {
        return (
            <CourseForm
                onSave={this.saveCourse}
                onChange={this.updateCourseState}
                allAuthors={this.props.authors}
                course={this.state.course}
                errors={this.state.errors}
                loading={this.state.loading}
            />
        );
    }
}

ManageFyRatePage.propTypes = {
    fyRate: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired

};

// We need access to React Router context. this.context.router
ManageFyRatePage.contextTypes = {
    router: PropTypes.object
};

function getFyRateById(fyRates, id){
    const fyRate = fyRates.filter(fyRate => fyRate.id == id);

    if (fyRate.length) return fyRate [0];
    return null;
}

function mapStateToProps(state, ownProps) {
    // retrieve url :id
    const courseId = ownProps.params.id; // course path

    let fyRate = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

    // if the course id is available run getCourseById function
    if (courseId && state.fyRate.length > 0){
        fyRate = getFyRateById(state.fyRate, courseId);
    }

    // Return a new object with the properties from the api
    const authorsFormattedForDropdown = state.authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        };
    });

    return {
        fyRate: fyRate,
        authors: authorsFormattedForDropdown
    };
}


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(fyRateActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageFyRatePage);