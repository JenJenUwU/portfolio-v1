import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor={"black"} />
      <pointLight intensity={1} />
      <spotLight position={[-20, 50, 10]} castShadow />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.75}
        position={isMobile ? [0, -3, -1.5] : [0, -3.25, -1.5]}
        rotation={[0, -0.2, 0]}
      />
    </mesh>
  );
};

const Gura = ({ isMobile }) => {
  const object = useGLTF("./gura/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor={"black"} />
      <pointLight intensity={1} />
      <spotLight position={[0, 0, 0]} castShadow />
      <primitive
        object={object.scene}
        scale={isMobile ? 0.5 : 0.75}
        position={isMobile ? [-1, -2.85, 2] : [-1.5, -3, 4]}
        rotation={[0, 1.7, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
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
        <Gura isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
