import React from 'react';
import PropTypes from 'prop-types';
import FyRateListRow from './FyRateListRow';

const FyRateList = ({fyRates}) => {
  debugger;
  return (
	  <div>
		<table className="table striped">
		  <thead>
			<th>County</th>
			{/* Todo: Add month header component and loop thru fyRates.months.month.long and years*/}
			<th>2016<br />Oct</th>
			<th>Nov</th>
			<th>Dec</th>
			<th>2017<br />Jan</th>
			<th>Feb</th>
			<th>Mar</th>
			<th>Apr</th>
			<th>May</th>
			<th>Jun</th>
			<th>July</th>
			<th>Aug</th>
			<th>Sep</th>
		  </thead>
		  <tbody>
		  {fyRates.map(fyRate =>
			  <FyRateListRow fyRate={fyRate}/>
		  )}
		  </tbody>
		</table>
	  </div>
  );
};

FyRateList.propTypes = {
  fyRates: PropTypes.array.isRequired
};

export default FyRateList;
