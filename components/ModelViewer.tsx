import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF, PerspectiveCamera, Environment, ContactShadows, Center } from '@react-three/drei';

interface ModelProps {
  url: string;
}

const Model: React.FC<ModelProps> = ({ url }) => {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
};

interface ModelViewerProps {
  modelUrl: string;
  title: string;
}

const ModelViewer: React.FC<ModelViewerProps> = ({ modelUrl, title }) => {
  return (
    <div className="w-full h-full bg-slate-100 dark:bg-slate-900/50 rounded-3xl overflow-hidden relative group">
      <Suspense fallback={
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100 dark:bg-slate-900/50 z-10">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <p className="text-xs font-black uppercase tracking-widest text-slate-500">Cargando Modelo 3D...</p>
          </div>
        </div>
      }>
        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={2048} castShadow />
          
          <Stage environment="city" intensity={0.6}>
            <Center top>
              <Model url={modelUrl} />
            </Center>
          </Stage>

          <Environment preset="city" />
          <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
          
          <OrbitControls 
            makeDefault 
            autoRotate 
            autoRotateSpeed={0.5} 
            enablePan={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.5}
          />
        </Canvas>
      </Suspense>
      
      {/* Overlay Instructions */}
      <div className="absolute bottom-6 left-6 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-3">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-white/40"></div>
            <div className="w-2 h-2 rounded-full bg-white/40"></div>
            <div className="w-2 h-2 rounded-full bg-white/40"></div>
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-white/80">Arrastra para rotar • Scroll para zoom</span>
        </div>
      </div>
    </div>
  );
};

export default ModelViewer;
