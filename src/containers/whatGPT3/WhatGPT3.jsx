import React from "react";
import { Feature } from "../../components";
import "./whatGPT3.css";

const WhatGPT3 = () => {
	return (
		<div className="gpt3__whatgpt3 section__margin" id="wgpt3">
			<div className="gpt3__whatgpt3-feature">
				<Feature
					title="What is GeoTagging?"
					text="GeoTagging revolutionizes community safety by seamlessly integrating private camera feeds with machine learning technology. Securely encrypted and user-controlled, it empowers neighborhoods to collaborate in monitoring and deterring suspicious activities, fostering safer communities through advanced geo-tagged surveillance"
				/>
			</div>
			<div className="gpt3__whatgpt3-heading">
				<h1 className="gradient__text">
					Discover the World with Precision: GeoTagging Redefined
				</h1>
			</div>
			<div className="gpt3__whatgpt3-container">
				<Feature
					title="Tags"
					text="The tagging feature of our project allows users to precisely annotate and categorize specific areas or objects within their camera feeds."
				/>
				<Feature
					title="Authentication"
					text="GeoTagging safeguards access to sensitive camera feeds and data. Users are required to authenticate themselves through secure credentials, such as usernames and passwords, before gaining access to the platform"
				/>
				<Feature
					title="Detection system"
					text="GeoTagging is equipped with the capability to automatically detect and identify weapons within camera feeds in real-time. By analyzing visual patterns and characteristics associated with various types of weapons, such as firearms or knives, the system can promptly alert users to potential threats or suspicious activities."
				/>
			</div>
		</div>
	);
};

export default WhatGPT3;
