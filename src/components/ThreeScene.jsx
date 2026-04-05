import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";

const Sphere = () => {
  const meshRef = useRef();

  useFrame(({ mouse }) => {
    meshRef.current.rotation.y += 0.005;

    // smooth mouse interaction
    meshRef.current.rotation.x = (mouse.y * 0.2);
    meshRef.current.rotation.y += (mouse.x * 0.2);
  });

  return (
    <mesh ref={meshRef}>
      {/* Dynamic size based on window width for mobile responsiveness */}
      <sphereGeometry args={[window.innerWidth < 768 ? 1.2 : 1.8, 32, 32]} />
      <meshStandardMaterial 
        color="#22d3ee" 
        wireframe 
        emissive="#0891b2"
        emissiveIntensity={0.5}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
};

const ThreeScene = () => {
  return (
    <div className="w-full h-full min-h-[300px] md:min-h-[500px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />

        <Sphere />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default ThreeScene;