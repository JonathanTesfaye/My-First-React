const Navbar = () => {
	return (
		<div className="Nav-container">
			<div className="Title-container">
				<h1 className="Title">Abobt</h1>
			</div>
			<div className="link-container">
				<a className="Home" href="/">
					Home
				</a>
				<a className="NewAnimal" href="/create">
					New Animal
				</a>
				<a className="About" href="/about">
					About
				</a>
			</div>
		</div>
	);
};

export default Navbar;
