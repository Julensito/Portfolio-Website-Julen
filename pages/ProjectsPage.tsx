
import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';
import { useLanguage } from '../context/LanguageContext';

const ProjectsPage: React.FC = () => {
  const { t } = useLanguage();

  const PROJECTS: Project[] = [
    { id: 1, title: t('projects.p1_title'), description: t('projects.p1_desc'), image: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=800&q=80', category: 'Videogame' },
    { id: 2, title: t('projects.p2_title'), description: t('projects.p2_desc'), image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80', category: 'Videogame' },
    { id: 3, title: t('projects.p3_title'), description: t('projects.p3_desc'), image: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&w=800&q=80', category: 'Videogame' },
    { id: 4, title: t('projects.p4_title'), description: t('projects.p4_desc'), image: '/portadaanimebackrooms.png', category: 'Anime Series' },
    { id: 5, title: t('projects.p5_title'), description: t('projects.p5_desc'), image: 'https://images.unsplash.com/photo-1613771404721-1f92d799e49f?auto=format&fit=crop&w=800&q=80', category: 'Videogame' },
    { id: 6, title: t('projects.p6_title'), description: t('projects.p6_desc'), image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80', category: 'Coming soon...' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-32 animate-fade-in">
      <header className="mb-24 text-center">
        <h1 className="text-7xl font-black mb-6 tracking-tighter uppercase italic">{t('projects_page.title')}</h1>
        <div className="w-32 h-3 bg-primary mx-auto rounded-full"></div>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {PROJECTS.map((project) => (
          <div key={project.id} className="bg-white dark:bg-slate-900 rounded-[3rem] overflow-hidden shadow-xl border border-slate-200 dark:border-white/5 flex flex-col hover:shadow-2xl transition-all group">
            <div className="relative overflow-hidden aspect-video">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" />
              <div className="absolute top-6 right-6 bg-primary text-white text-[10px] uppercase tracking-[0.2em] px-4 py-2 rounded-full font-black">
                {project.category}
              </div>
            </div>
            <div className="p-10 flex-grow flex flex-col">
              <h3 className="text-3xl font-black mb-4 tracking-tighter uppercase italic">{project.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-base mb-8 leading-relaxed flex-grow">{project.description}</p>
              <Link 
                to={`/proyectos/${project.id}`}
                className="inline-block w-fit border-2 border-slate-200 dark:border-white/10 px-8 py-3 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
              >
                {t('projects_page.view_more')}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
