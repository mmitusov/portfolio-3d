import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber"; //Просто пустой канвас в который мы можем что-то поместить
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"; //Вспомогательные инструменты которыми мы будем "рисовать" на пустом канвасе. "useGLTF" помогает ипортировать 3D модели

// We can not use HTML tags inside the canvas. To solve this, we wraped the CanvasLoader inside "import { Html } from "@react-three/drei";"
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  // Не забываем, что абсолютный путь в Next.js автоматически начинается с папки 'public'. Поэтому путь к файлу выглядет следующим образом
  const basePath = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_GIT_HUB_PAGES_BASE_PATH : '';
  const computer = useGLTF(`${basePath}/desktop_pc/scene.gltf`);
  
  // Работая с ThreeJS вместо <div> мы используем <mesh>. Внутри <mesh> важно создать освещение, иначе мы ничего не будем видеть
  // Чтобы отобразить модельку, далее мы должны поместить ее внутри Canvas. Не обязательно, но создадим ниже отдельный компонентик для этого
  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.75}
        position={isMobile ? [0, -1.5, -1.9] : [0, -1.55, -1.1]}
        rotation={[0, 0, 0]} // To change angle of how model facing us
      />
    </mesh>
  );
};

// Потренеруемся использовать Suspense, чтобы скорость отображения изначальной страницы не зависила от 3D моделек (загружается базовая страница, а модельки уже подгрузятся как будут готовы)
// Быстрее и удобнее было бы подгружать 3D модельки используя SSR, но по приколу потренеруемся с Suspense
// OrbitControls - помогает крутить нашу модельку (делает ее интерактивной)
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // During the first page load check if it's a mobile devise
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    // Add a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='always'
      shadows
      dpr={[1, 2]}
      camera={isMobile ? { position: [10, 0, 0], fov: 25 } : { position: [14, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.2} 
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
