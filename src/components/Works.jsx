import React, { Profiler } from "react";
// import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
	live_link,
}) => {
	return (
		// <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
		// 	<Tilt
		// 		options={{ max: 45, scale: 1, speed: 450 }}
		// 		className="w-full p-5 md:flex bg-tertiary rounded-2xl"
		// 	>
		// 		<div className="w-full md:w-1/2 h-[330px]">
		// 			<img
		// 				src={image}
		// 				alt={name}
		// 				className="object-cover w-full h-full rounded-2xl"
		// 			/>
		// 		</div>

		// 		<div className="flex flex-col justify-center w-full mt-3 lg:mx-9 md:w-1/2 ">
		// 			<h3 className="text-white font-bold text-[24px]">{name}</h3>
		// 			<p className="mt-2 mb-4 text-secondary text-[14px]">{description}</p>
		// 			<div
		// 				onClick={() => window.open(live_link, "_blank")}
		// 				className="text-white my-3 text-[14px] cursor-pointer"
		// 			>
		// 				<p>{live_link}</p>
		// 			</div>
		// 			<div className="flex flex-wrap gap-2 my-4">
		// 				{tags.map((tag, index) => (
		// 					<div
		// 						key={index}
		// 						className="flex items-center justify-center w-10 h-10 rounded-full"
		// 					>
		// 						<img className="" src={tag.icon} alt={tag.name} />
		// 					</div>
		// 				))}
		// 			</div>
		// 			<div className="flex justify-start md:flex-row card-img_hover">
		// 				<div
		// 					onClick={() => window.open(source_code_link, "_blank")}
		// 					className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer black-gradient"
		// 				>
		// 					<img
		// 						src={github}
		// 						alt="github"
		// 						className="object-contain w-1/2 h-1/2"
		// 					/>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</Tilt>
		// </motion.div>
		<div>
			<div className="w-full p-5 md:flex bg-tertiary rounded-2xl">
				<div className="w-full md:w-1/2 h-[330px]">
					<img
						src={image}
						alt={name}
						className="object-cover w-full h-full rounded-2xl"
					/>
				</div>

				<div className="flex flex-col justify-center w-full mt-3 lg:mx-9 md:w-1/2 ">
					<h3 className="text-white font-bold text-[24px]">{name}</h3>
					<p className="mt-2 mb-4 text-secondary text-[14px]">{description}</p>
					<div
						onClick={() => window.open(live_link, "_blank")}
						className="text-white my-3 text-[14px] cursor-pointer"
					>
						<p>{live_link}</p>
					</div>
					<div className="flex flex-wrap gap-2 my-4">
						{tags.map((tag, index) => (
							<div
								key={index}
								className="flex items-center justify-center w-10 h-10 rounded-full"
							>
								<img className="" src={tag.icon} alt={tag.name} />
							</div>
						))}
					</div>
					<div className="flex justify-start md:flex-row card-img_hover">
						<div
							onClick={() => window.open(source_code_link, "_blank")}
							className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer black-gradient"
						>
							<img
								src={github}
								alt="github"
								className="object-contain w-1/2 h-1/2"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const Projects = () => {
	return (
		<div>
			<div>
				<p className={styles.sectionSubText}>My work</p>
				<h2 className={styles.sectionHeadText}>Projects</h2>
			</div>

			<div className="flex w-full">
				<p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
				>
					The following projects showcase my skills and experience through
					examples of my work. Each project has a brief description with links
					to code repositories and live demos. They reflect my ability to solve
					problems, work with different technologies, and manage projects
					efficiently.
				</p>
			</div>

			<div className="flex flex-col items-center justify-center w-full mt-20 gap-7">
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} {...project} index={index} />
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(Projects, "projects");
