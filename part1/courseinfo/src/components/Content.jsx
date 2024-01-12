import Part from './Part';

const Content = ({ course }) => {
	const parts = course.parts;

	return (
		<>
			{parts.map((part, index) => (
				<Part key={index} name={part.name} exercises={part.exercises} />
			))}
		</>
	);
};

export default Content;
