import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
//import MonthListHeader from './MonthListHeader';

const CourseListRow = ({rate}) => {
    return (
        <tr>
            <td><b>{rate.county}</b></td>
            <td>{rate.value}</td>
            <td>{rate.authorId}</td>
            <td>{rate.category}</td>
            <td>{rate.length}</td>
        </tr>
    );
};

CourseListRow.propTypes = {
    rate: PropTypes.object.isRequired
};

export default CourseListRow;