import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const CyberPunk = () => {
	const cyber = useGLTF("./robot_man_in_ao_dai/scene.gltf");

	return (
		<mesh>
			<hemisphereLight intensity={0.55} groundColor="black" />
			<pointLight intensity={1.2} />
			<spotLight
				position={[-20, 50, 10]}
				angle={0.12}
				penumbra={1}
				intensity={2}
				castShadow
			/>
			<primitive
				object={cyber.scene}
				scale={3}
				position-y={-2.5}
				position-x={0.5}
				rotation-y={0}
			/>
		</mesh>
	);
};

const CyberPunkCanvas = () => {
	return (
		<Canvas
			shadows
			frameloop="demand"
			gl={{ preserveDrawingBuffer: true }}
			camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					autoRotate
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<CyberPunk />
			</Suspense>
		</Canvas>
	);
};

export default CyberPunkCanvas;
