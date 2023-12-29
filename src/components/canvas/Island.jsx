import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Island = ({ isMobile }) => {
  const island = useGLTF("./island/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.75} />
      <pointLight intensity={3} />
      <spotLight position={[0, 1, 0]} castShadow intensity={10} />
      <primitive
        object={island.scene}
        scale={isMobile ? 0.75 : 1.5}
        position={isMobile ? [0, -3, -0] : [0, -3, 0]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

const Gura = ({ isMobile }) => {
  const object = useGLTF("./gura/scene.gltf");

  return (
    <mesh>
      <primitive
        object={object.scene}
        scale={isMobile ? 0.25 : 0.5}
        position={isMobile ? [-0.25, -2.34, -0.15] : [-0.5, -1.69, -0.3]}
        rotation={[0, Math.PI / 3, 0]}
      />
    </mesh>
  );
};

const IslandCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [5, 15, 5], fov: 40 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
        <Island isMobile={isMobile} />
        <Gura isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default IslandCanvas;
