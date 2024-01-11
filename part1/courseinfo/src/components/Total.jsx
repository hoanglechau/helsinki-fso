const Total = ({ course }) => {
	const count = (arr) => {
		let total = 0;
		arr.forEach((item) => {
			total += item.exercises;
		});
		return total;
	};

	return <p>Number of exercises {count(course.parts)}</p>;
};

export default Total;
