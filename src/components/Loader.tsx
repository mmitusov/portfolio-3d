// When you are using HTML inside the canvas, just wrap your HTML with Html helper from @react-three/drei
// useProgress чтобы отображать прогрсс подгрузки 3D модели в процентах
import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className='canvas-loader'></span> {/* Анимация крутилки */}
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%  {/* Это будет отображать прогрсс подгрузки 3D модели в процентах */}
      </p>
    </Html>
  );
};

export default CanvasLoader;