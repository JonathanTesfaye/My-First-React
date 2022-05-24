import { useState } from "react";
import Adobt from "../Adobt";
const Home = () => {
	const [animal, setAnimal] = useState([
		{ title: "Dog", Name: "Max", Age: "5", id: 1 },
		{ title: "Dog", Name: "Tina", Age: "7", id: 2 },
		{ title: "Dog", Name: "Bolt", Age: "13", id: 3 },
	]);

	const handelDelete = (id) => {
		const newAnimal = animal.filter((A) => A.id !== id);
		setAnimal(newAnimal);
	};

	return (
		<div className="Home-container">
			<Adobt animal={animal} title="All Animals" handelDelete={handelDelete} />
		</div>
	);
};

export default Home;
