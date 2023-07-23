import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { CyberPunkCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
// import CyberPunkCanvas from "./canvas/Earth";

//template_m2159ip
//service_orgplll
// ZQqFOq-4g2gzP1qIu

const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;

		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		emailjs
			.send(
				"service_orgplll",
				"template_m2159ip",
				{
					from_name: form.name,
					to_name: "Greg",
					from_email: form.email,
					to_email: "gretil_15@hotmail.com",
					message: form.message,
				},
				"ZQqFOq-4g2gzP1qIu"
			)
			.then(() => {
				setLoading(false);
				alert("Thank you. I will get back to you as soon as possible");

				setForm({
					name: "",
					email: "",
					message: "",
				});
			})
			.catch((error) => {
				setLoading(false);
				console.log(error);

				alert("Something went wrong");
			});
	};

	return (
		<div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
			>
				<p className={styles.sectionSubText}>Get in touch</p>
				<h3 className={styles.sectionHeadText}>Contact</h3>

				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="flex flex-col gap-8 mt-12"
				>
					<label className="flex flex-col">
						<span className="mb-4 font-medium text-white">Your name</span>
						<input
							type="text"
							name="name"
							onChange={handleChange}
							value={form.name}
							placeholder="What's your name?"
							className="px-6 py-4 text-white border-none rounded-lg bg-tertiary placeholder:text-secondary outlined-none"
						/>
					</label>
					<label className="flex flex-col">
						<span className="mb-4 font-medium text-white">Your email</span>
						<input
							type="email"
							name="email"
							onChange={handleChange}
							value={form.email}
							placeholder="What's your email?"
							className="px-6 py-4 text-white border-none rounded-lg bg-tertiary placeholder:text-secondary outlined-none"
						/>
					</label>
					<label className="flex flex-col">
						<span className="mb-4 font-medium text-white">Your message</span>
						<textarea
							rows="7"
							type="text"
							name="message"
							onChange={handleChange}
							value={form.message}
							placeholder="What do you want to say?"
							className="px-6 py-4 text-white border-none rounded-lg bg-tertiary placeholder:text-secondary outlined-none"
						/>
					</label>
					<button
						type="submit"
						className="px-8 py-3 font-bold text-white outline-none w-fit bg-tertiary shandow-md shadow-primary"
					>
						{loading ? "Sending..." : "Send"}
					</button>
				</form>
			</motion.div>

			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
			>
				<CyberPunkCanvas />
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, "contact");
