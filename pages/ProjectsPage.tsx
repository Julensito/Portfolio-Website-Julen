
import React from 'react';
import { Project } from '../types';

const PROJECTS: Project[] = [
  { id: 1, title: 'Backrooms Origins', description: 'Videojuego de Adventure/Horror ambientado y fiel al lore de "Los Backrooms"', image: '/portadabackrooms.png', category: 'Videogame' },
  { id: 2, title: 'Spectral Roulette', description: 'Videojuego de Arcade/Roguelike sobre la ruleta tradicional de casino, ya que has sido castigado por el diablo en el más allá y debes usar los poderes de las máscaras para escapar del control del diablo.', image: 'https://picsum.photos/seed/p2/800/600', category: 'Videogame' },
  { id: 3, title: 'Star Hunt', description: 'Videojuego de Survival/Roguelike sobre un superviviente espacial que tiene que alimentar a la bestia que convive con él, sino perecerá.', image: 'https://picsum.photos/seed/p3/800/600', category: 'Design' },
  { id: 4, title: 'BACKROOMS', description: 'Serie de animación japonesa basada en una historia original sobre el origen de los backrooms.', image: 'https://picsum.photos/seed/p4/800/600', category: 'VR/AR' },
  { id: 5, title: 'Pokémon Mystery Dungeon Battle Royale', description: 'Videojuego de Acción/RPG conviertete en tu pokémon y enfrentate y lucha por sobrevivir y ser el mejor.', image: 'https://picsum.photos/seed/p5/800/600', category: 'UI/UX' },
  { id: 6, title: 'Próximamente', description: '', image: 'https://picsum.photos/seed/p6/800/600', category: 'Animation' },
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
