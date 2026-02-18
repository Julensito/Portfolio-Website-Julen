
import React from 'react';
import { Project } from '../types';

const PROJECTS: Project[] = [
  { id: 1, title: 'Cyberpunk Alleyway', description: 'Entorno inmersivo creado en Unreal Engine 5 usando Lumen y Nanite.', image: 'https://picsum.photos/seed/p1/800/600', category: 'Environment' },
  { id: 2, title: 'Mecha Drone V.2', description: 'Modelo Hard Surface texturizado íntegramente en Substance Painter.', image: 'https://picsum.photos/seed/p2/800/600', category: '3D Asset' },
  { id: 3, title: 'Abstract Geometry', description: 'Serie de renders abstractos explorando cáusticas y materiales complejos.', image: 'https://picsum.photos/seed/p3/800/600', category: 'Design' },
  { id: 4, title: 'Ancient Temple', description: 'Reconstrucción histórica para un proyecto de realidad aumentada.', image: 'https://picsum.photos/seed/p4/800/600', category: 'VR/AR' },
  { id: 5, title: 'Sci-Fi UI Kit', description: 'Paquete de interfaz futurista diseñada para Unity 3D.', image: 'https://picsum.photos/seed/p5/800/600', category: 'UI/UX' },
  { id: 6, title: 'Character Rigging', description: 'Sistema de rigging avanzado para personajes bípedos en Blender.', image: 'https://picsum.photos/seed/p6/800/600', category: 'Animation' },
];

const ProjectsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 animate-fade-in">
      <header className="mb-16 text-center">
        <h1 className="text-5xl font-black mb-4">Mis Proyectos</h1>
        <div className="w-24 h-1 bg-primary mx-auto"></div>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {PROJECTS.map((project) => (
          <div key={project.id} className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800 flex flex-col hover:shadow-2xl transition-all group">
            <div className="relative overflow-hidden aspect-video">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 right-4 bg-primary text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-bold">
                {project.category}
              </div>
            </div>
            <div className="p-8 flex-grow">
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">{project.description}</p>
              <button className="border border-slate-200 dark:border-slate-700 px-6 py-2 rounded-full text-sm font-bold hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                Ver más
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
