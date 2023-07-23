import React from "react";
import { SectionWrapper } from "../hoc";
import Techs from "./canvas/Techs";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Techss = () => {
	return (
		<div className="flex justify-center h-[400px] gap-10 flex-col md:flex-row">
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>My tech stack</p>
				<h2 className={styles.sectionHeadText}>Skills</h2>
			</motion.div>
			<Techs className="mt-5" />
		</div>
	);
};

export default SectionWrapper(Techss, "");
