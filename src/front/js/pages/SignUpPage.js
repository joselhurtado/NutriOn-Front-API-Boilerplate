import React, { useContext } from "react";
import "../../styles/SignUp.css";
import { Link } from "react-router-dom";
import { SignUpFormUser } from "/src/front/js/component/SignUpFormUser";
import HeroWelcome from "/src/front/img/Food Recipe Hero.png";
import { Context } from "../store/appContext";

export const SignUpPage = () => {
	const { store, actions} =useContext(Context); //Const to call store data from Flux (Actions is not used yet)
	console.log(store.usersignupstats)
	return (
	<div id="welcomePage" className="heroWelcome">
		<div className='row mainHero'>
			<div className="col-sm heroHeadline">
					<h1 className='text-light text-center m-2'>Lets Start your Health Journey.</h1>
					<div className="SignupForm">
						<SignUpFormUser/>
					</div>
			</div>
				<div className="col">
					<img className="heroImage" src={HeroWelcome} />
			</div>
		</div>
	</div>
);
};

export default SignUpPage;