import * as THREE from "three";
import { useRef, useState, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, TrackballControls } from "@react-three/drei";
import { technologies } from "../../constants";

function Word({ children, ...props }) {
	const color = new THREE.Color();
	const fontProps = {
		fontSize: 3.5,
		letterSpacing: -0.05,
		lineHeight: 1,
		"material-toneMapped": false,
	};
	const ref = useRef();
	const [hovered, setHovered] = useState(false);
	const over = (e) => (e.stopPropagation(), setHovered(true));
	const out = () => setHovered(false);
	// Change the mouse cursor on hover
	useEffect(() => {
		if (hovered) document.body.style.cursor = "pointer";
		return () => (document.body.style.cursor = "auto");
	}, [hovered]);
	// Tie component to the render-loop
	useFrame(({ camera }) => {
		// Make text face the camera
		ref.current.quaternion.copy(camera.quaternion);
		// Animate font color
		ref.current.material.color.lerp(
			color.set(hovered ? "#bf61ff" : "#00cea8"),
			0.1
		);
	});
	return (
		<Text
			ref={ref}
			onPointerOver={over}
			onPointerOut={out}
			onClick={() => console.log("clicked")}
			{...props}
			{...fontProps}
			children={children}
		/>
	);
}

function Cloud({ count = 4, radius = 20 }) {
	// Create a count x count array of positions for the technologies
	const positions = useMemo(() => {
		const temp = [];
		const spherical = new THREE.Spherical();
		const phiSpan = Math.PI / (count + 1);
		const thetaSpan = (Math.PI * 2) / count;
		for (let i = 1; i < count + 1; i++) {
			for (let j = 0; j < count; j++) {
				temp.push(
					new THREE.Vector3().setFromSpherical(
						spherical.set(radius, phiSpan * i, thetaSpan * j)
					)
				);
			}
		}
		return temp;
	}, [count, radius]);

	// Pair each position with a technology
	const words = useMemo(() => {
		return positions.map((pos, index) => ({
			position: pos,
			technology: technologies[index % technologies.length].name, // Loop through the technologies array
			icon: technologies[index % technologies.length].icon, // Loop through the technologies array
		}));
	}, [technologies, positions]);

	return words.map(({ position, technology }, index) => (
		<Word key={index} position={position} children={technology} radius={20} />
	));
}

export default function Techs() {
	return (
		<Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 80 }}>
			<fog attach="fog" args={["#202025", 10, 100]} />
			<Cloud count={Math.ceil(Math.sqrt(technologies.length))} radius={20} />
			<TrackballControls />
		</Canvas>
	);
}
