import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { useEarthScale } from "../../hooks/useModelScale";

import CanvasLoader from "../Loader";

const Earth = () => {
  const basePath = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_GIT_HUB_PAGES_BASE_PATH : '';
  const earth = useGLTF(`${basePath}/planet/scene.gltf`);
  const earthScale = useEarthScale();

  return (
    <primitive object={earth.scene} scale={earthScale} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='always'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.5} 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
