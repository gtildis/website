import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
	const defaultOptions = {
		reverse: false, // reverse the tilt direction
		max: 35, // max tilt rotation (degrees)
		perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
		scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
		speed: 1000, // Speed of the enter/exit transition
		transition: true, // Set a transition on enter/exit.
		axis: null, // What axis should be disabled. Can be X or Y.
		reset: true, // If the tilt effect has to be reset on exit.
		easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
	};
	return (
		<Tilt options={defaultOptions} className="xs:w-[250px] w-full">
			<motion.div
				variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
				className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
			>
				<div
					options={{ max: 45, scale: 1, speed: 450 }}
					className="px-12 py-5 rounded-[20px] min-h-[280px] flex justify-evenly items-center flex-col"
				>
					<img src={icon} alt={title} className="object-contain w-20 h-20" />

					<h3 className="text-white text-[20px] font-bold text-center">
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

const About = () => {
	return (
		<div>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview</h2>
			</motion.div>
			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
			>
				I'm Greg, a full stack web developer who enjoys using cutting-edge web
				technologies to build solutions and tackle problems. I have an
				open-minded approach, a thirst for knowledge, and a knack for adapting
				to new challenges. I communicate clearly and effectively, and I
				collaborate well within a team. I follow instructions diligently, while
				seeking continuous learning and self-development opportunities.
			</motion.p>
			<div className="flex flex-wrap gap-10 mt-20">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(About, "about");
