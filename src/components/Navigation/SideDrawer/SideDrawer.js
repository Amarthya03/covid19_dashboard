import React from "react";
// import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux/Aux";
import "./SideDrawer.css";

const SideDrawer = (props) => {
	return (
		<Aux>
			<Backdrop show={props.open} clicked={props.closed} />
			<div
				className={props.Open ? "SideDrawer Open" : "SideDrawer Close"}
			>
				<div className="Logo">{/* <Logo /> */}</div>
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</Aux>
	);
};

export default SideDrawer;
