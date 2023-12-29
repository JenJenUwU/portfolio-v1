import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";

import CanvasLoader from "../Loader";
import { MMDLoader } from "three/addons/loaders/MMDLoader.js";

const MmdModel = ({ url }) => {
  const nodes = useLoader(MMDLoader, url);
  return (
    <mesh>
      <hemisphereLight intensity={0.5} />
      <spotLight position={[1, 2.5, 1]} castShadow intensity={5} />
      <primitive
        object={nodes}
        dispose={null}
        scale={[0.25, 0.25, 0.25]}
        position={[0, -2.5, 0]}
      />
    </mesh>
  );
};

const FigureCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 60,
        near: 0.1,
        far: 200,
        position: [3, 3, 3],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autorateSpeed={0.5}
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <MmdModel url={"./Keqing/keqing.pmx"} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default FigureCanvas;
