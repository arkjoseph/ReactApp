import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

const rates = {
  "rate": [
	{
	  "months": {
		"month": [
		  {
			"value": 96,
			"number": 1,
			"short": "Jan",
			"long": "January"
		  },
		  {
			"value": 96,
			"number": 2,
			"short": "Feb",
			"long": "February"
		  },
		  {
			"value": 92,
			"number": 3,
			"short": "Mar",
			"long": "March"
		  },
		]
	  },
	  "meals": 64,
	  "zip": null,
	  "county": "Contra Costa",
	  "city": "Antioch \/ Brentwood \/ Concord",
	  "standardRate": "false"
	},
	{
	  "months": {
		"month": [
		  {
			"value": 96,
			"number": 1,
			"short": "Jan",
			"long": "January"
		  },
		  {
			"value": 96,
			"number": 2,
			"short": "Feb",
			"long": "February"
		  },
		  {
			"value": 92,
			"number": 3,
			"short": "Mar",
			"long": "March"
		  },
		]
	  },
	  "meals": 59,
	  "zip": null,
	  "county": "Kern",
	  "city": "Bakersfield \/ Ridgecrest",
	  "standardRate": "false"
	},
	{
	  "months": {
		"month": [
		  {
			"value": 92,
			"number": 1,
			"short": "Jan",
			"long": "January"
		  },
		  {
			"value": 92,
			"number": 2,
			"short": "Feb",
			"long": "February"
		  },
		  {
			"value": 92,
			"number": 3,
			"short": "Mar",
			"long": "March"
		  },
		]
	  },
	  "meals": 54,
	  "zip": null,
	  "county": "San Bernardino",
	  "city": "Barstow \/ Ontario \/ Victorville",
	  "standardRate": "false"
	}
  ]
};

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
  return replaceAll(course.title, ' ', '-');
};

class CourseApi {
  static getAllCourses() {
	return new Promise((resolve, reject) => {
	  setTimeout(() => {
		resolve(Object.assign([], rates));
	  }, delay);
	});
  }

  static saveCourse(course) {
	course = Object.assign({}, course); // to avoid manipulating object passed in.
	return new Promise((resolve, reject) => {
	  setTimeout(() => {
		// Simulate server-side validation
		const minCourseTitleLength = 1;
		if (course.title.length < minCourseTitleLength) {
		  reject(`Title must be at least ${minCourseTitleLength} characters.`);
		}

		if (course.id) {
		  const existingCourseIndex = rates.findIndex(a => a.id == course.id);
		  rates.splice(existingCourseIndex, 1, course);
		} else {
		  //Just simulating creation here.
		  //The server would generate ids and watchHref's for new courses in a real app.
		  //Cloning so copy returned is passed by value rather than by reference.
		  course.id = generateId(course);
		  course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
		  rates.push(course);
		}

		resolve(course);
	  }, delay);
	});
  }

  static deleteCourse(courseId) {
	return new Promise((resolve, reject) => {
	  setTimeout(() => {
		const indexOfCourseToDelete = rates.findIndex(course => {
		  course.id == courseId;
		});
		rates.splice(indexOfCourseToDelete, 1);
		resolve();
	  }, delay);
	});
  }
}

export default CourseApi;