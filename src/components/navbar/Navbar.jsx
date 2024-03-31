import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";

const Menu = () => (
	<>
	<strong><h3 className="title mx-2 ">GeoTagging</h3></strong>
		<p>
			<a href="#home">Home</a>
		</p>
		<p>
			<a href="#possibility">About</a>
		</p>
		<p>
			<a href="#features">Contact</a>
		</p>
	</>
);

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<div className="gpt3__navbar">
			<div className="gpt3_navbar-links">
				<div className="gpt3__navbar-links_container">
					<div className="gpt3__navbar-links_logo">
						{/* <img src={logo} alt="logo" /> */}
					</div>
					<Menu />
				</div>
			</div>
			<div className="gpt3__navbar-menu">
				{toggleMenu ? (
					<RiCloseLine
						color="#fff"
						size={27}
						onClick={() => setToggleMenu(false)}
					/>
				) : (
					<RiMenu3Line
						color="#fff"
						size={27}
						onClick={() => setToggleMenu(true)}
					/>
				)}
				{toggleMenu && (
					<div className="gpt3__navbar-menu_container scale_up-center">
						<div className="gpt3__navbar-menu_container-links">
							<Menu />
							<div className="gpt3__navbar-menu_container-links-sign">
								<button type="button">Sign Up</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
