
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft, Calendar, Tag, Layers, ExternalLink } from 'lucide-react';

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();

  const PROJECTS_DATA = [
    { 
      id: 1, 
      title: t('projects.p1_title'), 
      description: t('projects.p1_desc'), 
      image: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=1200&q=80', 
      category: 'Videojuego',
      date: '2025 - Present',
      tech: ['Unreal Engine 5', 'Blueprint/C++', '3ds Max', 'Blender'],
      longDesc: 'Backrooms Origins is a deep dive into the liminal space phenomenon. The project focuses on creating a sense of "uncomfortable familiarity" through procedural generation and advanced lighting techniques. Players must navigate infinite office spaces while managing their sanity and avoiding entities that defy logic.'
    },
    { 
      id: 2, 
      title: t('projects.p2_title'), 
      description: t('projects.p2_desc'), 
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80', 
      category: 'Videojuego',
      date: '2026 - Present',
      tech: ['Unreal Engine 5', 'Blueprint/C++', 'Substance Painter', 'Blender'],
      longDesc: 'Spectral Roulette combines the tension of gambling with supernatural horror. Every bet has a physical consequence in the game world. The visual style is inspired by 1950s noir but with a neon, ghostly twist. The AI for the spectral opponents uses complex decision trees to mimic human bluffing.'
    },
    { 
      id: 3, 
      title: t('projects.p3_title'), 
      description: t('projects.p3_desc'), 
      image: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&w=1200&q=80', 
      category: 'Videojuego',
      date: '2025 - Present',
      tech: ['Unity', 'Shader Graph', 'Blender'],
      longDesc: 'Star Hunt is a meditative journey through a dying universe. The core loop involves navigating a small scout ship through asteroid fields and nebulae to find stars on the brink of supernova. The game features a custom cel-shaded art style and a dynamic soundtrack that reacts to the proximity of celestial bodies.'
    },
    { 
      id: 4, 
      title: t('projects.p4_title'), 
      description: t('projects.p4_desc'), 
      image: '/prota.png', 
      category: 'Serie Anime',
      date: '2024 - Present',
      tech: ['Blender', 'After Effects', 'Premiere Pro'],
      longDesc: 'This animated series project aims to bring a new visual language to the Backrooms mythos. By combining 3D environments with 2D character animation, the series explores the psychological toll of being trapped in an endless, non-Euclidean space. Each episode focuses on a different level and a different survivor\'s story.'
    },
    { 
      id: 5, 
      title: t('projects.p5_title'), 
      description: t('projects.p5_desc'), 
      image: 'https://images.unsplash.com/photo-1613771404721-1f92d799e49f?auto=format&fit=crop&w=1200&q=80', 
      category: 'Videogame',
      date: 'Future',
      tech: ['Unity', 'Photon Fusion', 'C#'],
      longDesc: 'Pokémon Mystery Battle Royale is a reimagining of the classic mystery dungeon formula in a competitive multiplayer setting. 50 players enter a procedurally generated dungeon, collecting items and leveling up in real-time before the final showdown. Features a custom netcode for low-latency tactical combat.'
    },
    { 
      id: 6, 
      title: t('projects.p6_title'), 
      description: t('projects.p6_desc'), 
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80', 
      category: 'Próximamente',
      date: 'Future',
      tech: ['Secret'],
      longDesc: 'This project is currently under tight wraps. It represents the next evolution of my creative workflow, integrating advanced AI systems with traditional game design principles. Stay tuned for a major announcement soon.'
    }
  ];

  const project = PROJECTS_DATA.find(p => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-black mb-6">Proyecto no encontrado</h2>
          <Link to="/proyectos" className="text-primary font-bold hover:underline">Volver a proyectos</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in pb-32">
      {/* Hero Header */}
      <section className="relative h-[60vh] overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-12 md:p-24">
          <div className="max-w-7xl mx-auto">
            <Link to="/proyectos" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 font-bold uppercase tracking-widest text-xs">
              <ArrowLeft size={16} /> Volver a proyectos
            </Link>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase italic">{project.title}</h1>
            <div className="flex flex-wrap gap-6">
              <span className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-full text-xs font-black uppercase tracking-widest">
                <Tag size={14} /> {project.category}
              </span>
              <span className="flex items-center gap-2 px-6 py-2 bg-white/10 backdrop-blur-md text-white rounded-full text-xs font-black uppercase tracking-widest border border-white/10">
                <Calendar size={14} /> {project.date}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-black mb-10 tracking-tighter uppercase italic border-l-8 border-primary pl-8">Sobre el proyecto</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-12 font-medium">
              {project.description}
            </p>
            <div className="prose prose-xl dark:prose-invert max-w-none text-slate-500 dark:text-slate-400">
              <p>{project.longDesc}</p>
            </div>
          </div>

          <div className="space-y-16">
            <div>
              <h3 className="text-xl font-black mb-8 uppercase tracking-widest flex items-center gap-3">
                <Layers size={20} className="text-primary" /> Tecnologías
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-5 py-2 bg-slate-100 dark:bg-slate-900 rounded-xl text-sm font-bold border border-slate-200 dark:border-white/5">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-10 bg-slate-50 dark:bg-slate-900/40 rounded-[3rem] border border-slate-200 dark:border-white/5">
              <h3 className="text-xl font-black mb-6 uppercase tracking-widest">¿Interesado?</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-10 text-sm font-medium">Si quieres saber más sobre este proyecto o colaborar en algo similar, no dudes en contactarme.</p>
              <Link to="/contacto" className="flex items-center justify-center gap-3 w-full bg-slate-900 dark:bg-white text-white dark:text-black py-5 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all">
                Contactar <ExternalLink size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailPage;
