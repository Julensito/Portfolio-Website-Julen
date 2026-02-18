
import React from 'react';
import { Model3D } from '../types';

const MODELS: Model3D[] = [
  { 
    id: 1, 
    title: 'Estación Espacial Modular', 
    description: 'Kitbash modular diseñado para optimización en motores de tiempo real.', 
    embedUrl: 'https://sketchfab.com/models/0f10e4f8d4e542878d6560936f368c26/embed' 
  },
  { 
    id: 2, 
    title: 'Criatura Submarina', 
    description: 'Escultura orgánica con flujo de trabajo de retopología manual.', 
    embedUrl: 'https://sketchfab.com/models/44fdc12f00cc42838a9d1891152a5c4d/embed' 
  },
  { 
    id: 3, 
    title: 'Vehículo Post-Apocalíptico', 
    description: 'Enfoque en desgaste de materiales y micro-detalles en las texturas.', 
    embedUrl: 'https://sketchfab.com/models/78881903e1e2474f8845f060d4b998a4/embed' 
  }
];

const Models3DPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 animate-fade-in">
      <header className="mb-16">
        <h1 className="text-5xl font-black mb-4">Visualizador 3D</h1>
        <p className="text-slate-500 max-w-xl">Interactúa directamente con mis modelos. Puedes rotar, hacer zoom e inspeccionar las mallas.</p>
      </header>

      <div className="space-y-24">
        {MODELS.map((model, idx) => (
          <div key={model.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
            <div className="w-full lg:w-2/3 aspect-video bg-slate-200 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-2xl relative">
               <iframe 
                title={model.title}
                className="w-full h-full"
                frameBorder="0" 
                allowFullScreen 
                allow="autoplay; fullscreen; xr-spatial-tracking" 
                src={model.embedUrl}
              ></iframe>
            </div>
            <div className="w-full lg:w-1/3">
              <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">Modelo {model.id}</span>
              <h3 className="text-3xl font-black mb-4">{model.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                {model.description} Producido utilizando Blender para el modelado y Substance Painter para el texturizado PBR (Physical Based Rendering).
              </p>
              <div className="flex gap-4">
                <div className="px-4 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-bold">4K Texturas</div>
                <div className="px-4 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-bold">Game Ready</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Models3DPage;
