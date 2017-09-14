import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
//import MonthListHeader from './MonthListHeader';

const CourseListRow = ({fyRate}) => {
    return (
        <tr>
            <td><b>{fyRate.county}</b></td>
            <td>{fyRate.value}</td>
            <td>{fyRate.authorId}</td>
            <td>{fyRate.category}</td>
            <td>{fyRate.length}</td>
        </tr>
    );
};

CourseListRow.propTypes = {
    fyRate: PropTypes.object.isRequired
};

export default CourseListRow;