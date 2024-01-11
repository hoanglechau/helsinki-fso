import Part from './Part';

const Content = ({ course }) => {
	let parts = course.parts;

	return (
		<>
			{parts.map((part, index) => (
				<Part key={index} name={part.name} exercises={part.exercises} />
			))}
		</>
	);
};

export default Content;
