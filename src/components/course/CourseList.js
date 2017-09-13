import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';

const CourseList = ({rates}) => {
    return (
      <div>
          <table className="table striped">
              <thead>
                <th>County</th>
                {/* Todo: Add month header component and loop thru rate.months.month.long*/}
                <th>Jan</th>
                <th>Feb</th>
                <th>March</th>
                {/* end */}
                <th>Meals</th>
              </thead>
              <tbody>
              {rates.map(rate =>
                  <CourseListRow key={rate.id} rate={rate} />
              )}
              </tbody>
          </table>
      </div>
    );
}

CourseList.propTypes = {
    rates: PropTypes.array.isRequired
};

export default CourseList;
