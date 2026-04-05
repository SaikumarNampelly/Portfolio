import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";

const Sphere = () => {
  const meshRef = useRef();

  useFrame(({ mouse }) => {
    meshRef.current.rotation.y += 0.01;

    // mouse interaction
    meshRef.current.rotation.x = mouse.y * 0.5;
    meshRef.current.rotation.y = mouse.x * 0.5;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial color="#3b82f6" wireframe />
    </mesh>
  );
};

const ThreeScene = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />

      <Sphere />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default ThreeScene;