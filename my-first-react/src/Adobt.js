const Adobt = ({ animal, title, handelDelete }) => {
	return (
		<div>
			<h1>{title}</h1>
			{animal.map((A) => (
				<div className="AC" key={animal.id}>
					<h1>Type: {A.title}</h1>
					<p>Name: {A.Name}</p>
					<p>Age: {A.Age}</p>
					<button className="delete" onClick={() => handelDelete(A.id)}>
						Delete
					</button>
				</div>
			))}
		</div>
	);
};

export default Adobt;
