import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import "../styles/CubeAnimation.css";
const image1 = "https://burtscriptor.github.io/portfolio-images/dave_ai_1.png";

const imageUrls = [
  "https://burtscriptor.github.io/portfolio-images/nodejs.png",
  "https://burtscriptor.github.io/portfolio-images/bootstrap.png",
  "https://burtscriptor.github.io/portfolio-images/js.png",
  "https://burtscriptor.github.io/portfolio-images/html.png",
  `${image1}`,
  "https://burtscriptor.github.io/portfolio-images/css-3.png",
];

const Animation = () => (
  <div className="main-container">
    <Canvas pixelratio={Math.min(window.devicePixelRatio, 1)} style={{ width: "15vmin", height: "15vmin" }}>
      <ambientLight intensity={2} />
      <directionalLight position={[2, 1, 1]} />
      <OrbitControls enableZoom={false} enablePan={false} />
      <Cube />
    </Canvas>
  </div>
);

const Cube = () => {
  const mesh = useRef(null);

  
  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.5;
    mesh.current.rotation.y += delta * 0.5;
    mesh.current.rotation.z += delta * 0.5;
  });

  const textures = useLoader(TextureLoader, imageUrls);

  const memoizedTextures = useMemo(() => textures, [textures]);

  useEffect(() => {
    return () => {
      memoizedTextures.forEach((texture) => texture.dispose());
    };
  }, [memoizedTextures]);

  return (
    <motion.mesh ref={mesh}>
      <boxGeometry args={[3.6, 3.6, 3.6]} />
      {memoizedTextures.map((texture, index) => (
        <meshStandardMaterial key={index} map={texture} attach={`material-${index}`} />
      ))}
    </motion.mesh>
  );
};

export default Animation;
