import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
	const computer = useGLTF("./hacker_room_-_stylized/scene.gltf");
	return (
		<mesh>
			<hemisphereLight intensity={0.15} groundColor="black" />
			<pointLight intensity={1} />
			<spotLight
				position={[0, 50, 10]}
				angle={0.12}
				penumbra={1}
				intensity={1}
				castShadow
			/>
			<primitive
				object={computer.scene}
				scale={isMobile ? 0.03 : 0.047}
				position={isMobile ? [-3, -3, -1.2] : [0, -4.8, 0]}
				rotation={[0.3, 4.2, 0.3]}
			/>
		</mesh>
	);
};

const ComputersCanvas = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		// Add event listener for change to the screen size
		const mediaQuery = window.matchMedia("(max-width: 500px)");

		//set the initial value of the is mobile state variable
		setIsMobile(mediaQuery.matches);

		// Define a callBack function to handle changes to the media query
		const handleMediaQueryChange = (event) => {
			setIsMobile(event.matches);
		};

		//add the callback function as a listener for changes to the media query
		mediaQuery.addEventListener("change", handleMediaQueryChange);

		// Remove the listener when the component is unmounted
		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
		};
	}, []);

	return (
		<Canvas
			frameloop="demand"
			shadows
			camera={{ position: [20, 3, 5], fov: 25 }}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Computers isMobile={isMobile} />
			</Suspense>

			<Preload all />
		</Canvas>
	);
};

export default ComputersCanvas;
