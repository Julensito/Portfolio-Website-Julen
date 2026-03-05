import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, GraduationCap, Briefcase, Download, CheckCircle, Youtube, Instagram, Video, Sparkles, Layout } from 'lucide-react';
import { Skill } from '../types';
import { useLanguage } from '../context/LanguageContext';

const HomePage: React.FC = () => {
  const { t } = useLanguage();

  const SKILLS: Skill[] = [
    { 
      name: 'Blender', 
      description: t('skills.blender_desc'), 
      iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg' 
    },
    { 
      name: 'Photoshop', 
      description: t('skills.photoshop_desc'), 
      iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg' 
    },
    { 
      name: 'Substance Painter', 
      description: t('skills.substance_desc'), 
      iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9rEVtG7jlArrANOJUt--6qeS5BEWsyf7g4Q&s' 
    },
    { 
      name: 'Unreal Engine', 
      description: t('skills.unreal_desc'), 
      iconUrl: 'https://logos-world.net/wp-content/uploads/2021/06/Unreal-Engine-Emblem.png' 
    },
    { 
      name: 'Unity', 
      description: t('skills.unity_desc'), 
      iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Unity_Technologies_logo.svg' 
    },
    { 
      name: 'Adobe Premiere', 
      description: t('skills.premiere_desc'), 
      iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg' 
    },
    { 
      name: 'Reaper', 
      description: t('skills.reaper_desc'), 
      iconUrl: 'https://upload.wikimedia.org/wikipedia/it/c/cf/REAPER_logo.png' 
    },
  ];

  const SOFT_SKILLS = [
    { name: t('soft_skills.comm'), description: t('soft_skills.comm_desc') },
    { name: t('soft_skills.team'), description: t('soft_skills.team_desc') },
    { name: t('soft_skills.problem'), description: t('soft_skills.problem_desc') },
    { name: t('soft_skills.adapt'), description: t('soft_skills.adapt_desc') },
    { name: t('soft_skills.lead'), description: t('soft_skills.lead_desc') },
    { name: t('soft_skills.time'), description: t('soft_skills.time_desc') },
  ];

  const EXPERIENCE = [
    {
      role: t('exp.docente_role'),
      company: t('exp.docente_company'),
      period: t('exp.docente_period'),
      description: t('exp.docente_desc')
    },
    {
      role: t('exp.creative_role'),
      company: t('exp.creative_company'),
      period: t('exp.creative_period'),
      description: t('exp.creative_desc')
    },
    {
      role: t('exp.freelance_role'),
      company: t('exp.freelance_company'),
      period: t('exp.freelance_period'),
      description: t('exp.freelance_desc')
    }
  ];

  const LANGUAGES = [
    { name: t('lang.spanish'), level: t('lang.native') },
    { name: t('lang.english'), level: t('lang.advanced') },
    { name: t('lang.catalan'), level: t('lang.native') },
  ];

  return (
    <div className="animate-fade-in bg-slate-950 text-white selection:bg-primary selection:text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover brightness-[0.25]"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-flying-over-a-futuristic-digital-city-at-night-42445-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/40 to-slate-950"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center z-10">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-xs font-black uppercase tracking-[0.3em] mb-10 text-blue-400 animate-pulse-slow">
            <Sparkles size={14} /> {t('hero.creative_specialist')}
          </div>
          <h1 className="text-7xl md:text-[10rem] font-black mb-6 tracking-tighter leading-[0.8] bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
            {t('hero.title').split(' ')[0]}<br/>{t('hero.title').split(' ')[1]}
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-16 font-medium tracking-tight opacity-80">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/proyectos" className="px-14 py-6 bg-primary text-white rounded-[2rem] font-black shadow-[0_20px_40px_rgba(59,130,246,0.3)] hover:scale-105 hover:-translate-y-1 transition-all w-full sm:w-auto text-center text-xl uppercase tracking-widest">
              {t('hero.view_projects')}
            </Link>
            <button className="px-14 py-6 border-2 border-white/10 text-white backdrop-blur-xl rounded-[2rem] font-black hover:bg-white/5 transition-all w-full sm:w-auto text-center text-xl uppercase tracking-widest flex items-center justify-center gap-3">
              {t('hero.download_cv')} <Download size={20} />
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-30 animate-bounce">
           <div className="w-px h-16 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* Current Project in Development Section */}
      <section className="py-32 bg-slate-900/30 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4">
           <div className="bg-slate-900 border border-white/5 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center shadow-2xl">
              <div className="w-full md:w-1/2 relative">
                 <div className="absolute top-6 left-6 bg-blue-600 text-white px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest z-20 flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full animate-ping"></span> En Desarrollo
                 </div>
                 <img 
                    src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80" 
                    alt="Proyecto Actual" 
                    className="rounded-[2.5rem] w-full aspect-video object-cover brightness-75 border border-white/10 shadow-inner"
                 />
              </div>
              <div className="w-full md:w-1/2">
                 <h2 className="text-4xl font-black mb-6 flex items-center gap-4">
                    <Layout className="text-primary" /> {t('project.actual')}
                 </h2>
                 <h3 className="text-2xl font-bold text-white mb-4 italic">{t('project.neon_run_name')}</h3>
                 <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                    {t('project.neon_run_desc')}
                 </p>
                 <div className="flex gap-6 items-center">
                    <div className="flex-grow bg-slate-800 h-3 rounded-full overflow-hidden border border-white/5">
                        <div className="bg-primary h-full w-[65%] rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                    </div>
                    <span className="font-black text-primary text-lg">65%</span>
                 </div>
                 <p className="text-xs text-slate-500 mt-4 uppercase tracking-[0.2em] font-bold">{t('project.phase')}</p>
              </div>
           </div>
        </div>
      </section>

      {/* AndaluzIA Section (Lilas, Rosa, Azul) */}
      <section className="py-32 relative overflow-hidden bg-white dark:bg-slate-950">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500/10 via-pink-500/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-20 items-center relative z-10">
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-purple-500/30">
              <Briefcase size={16} /> {t('andaluzia.subtitle')}
            </div>
            <h2 className="text-6xl md:text-7xl font-black mb-10 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
              {t('andaluzia.title')}
            </h2>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed font-medium">
              {t('andaluzia.desc')}
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <span className="px-6 py-3 bg-slate-900 border border-purple-500/20 rounded-2xl text-xs font-black uppercase tracking-widest text-purple-300">#Creative-ADS</span>
              <span className="px-6 py-3 bg-slate-900 border border-pink-500/20 rounded-2xl text-xs font-black uppercase tracking-widest text-pink-300">#IA-Power</span>
              <span className="px-6 py-3 bg-slate-900 border border-blue-500/20 rounded-2xl text-xs font-black uppercase tracking-widest text-blue-300">#Innovation</span>
            </div>
            <a href="https://andaluzia.es" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-4 text-pink-400 font-black text-2xl hover:gap-6 transition-all uppercase tracking-tighter">
              {t('andaluzia.view_agency')} <ExternalLink size={24} className="group-hover:rotate-45 transition-transform" />
            </a>
          </div>
          <div className="order-1 md:order-2">
             <div className="relative p-2 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-[3.5rem] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80" 
                  alt="AndaluzIA Studio" 
                  className="rounded-[3rem] w-full object-cover aspect-video relative z-10"
                />
             </div>
          </div>
        </div>
      </section>

      {/* Escuela de Arte Granada Section (Rojos, Blancos) */}
      <section className="py-32 bg-slate-100 dark:bg-slate-900 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-red-600/10 blur-[150px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-20 items-center">
          <div className="relative group">
             <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80" 
              alt="Escuela de Arte de Granada" 
              className="rounded-[3.5rem] shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-1000 border-4 border-white/5"
            />
            <div className="absolute -bottom-8 -left-8 bg-red-600 text-white p-10 rounded-[2.5rem] shadow-[0_25px_50px_rgba(220,38,38,0.4)]">
                <h4 className="text-5xl font-black italic tracking-tighter">EAG</h4>
                <p className="text-sm uppercase tracking-[0.3em] font-black opacity-80 mt-2">DOCENCIA</p>
            </div>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-red-500/10 text-red-500 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-red-500/30">
              <GraduationCap size={16} /> {t('eag.subtitle')}
            </div>
            <h2 className="text-6xl font-black mb-6 text-white leading-tight">{t('eag.title')}</h2>
            <p className="text-2xl font-black text-red-500 mb-10 uppercase tracking-tighter border-b-4 border-red-600 pb-4 w-fit italic">
               {t('eag.course')}
            </p>
            
            <div className="space-y-8 text-slate-400 text-xl mb-12 font-medium">
              <p>
                {t('eag.desc')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[t('eag.feature1'), t('eag.feature2'), t('eag.feature3'), t('eag.feature4')].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 bg-slate-800/50 p-5 rounded-2xl border border-white/5">
                        <CheckCircle size={24} className="text-red-600" />
                        <span className="text-sm font-black uppercase tracking-widest text-slate-300">{item}</span>
                    </div>
                ))}
              </div>
            </div>
            
            <button 
              className="group inline-flex items-center gap-6 bg-white text-red-600 px-12 py-6 rounded-3xl font-black text-xl hover:scale-105 transition-all shadow-2xl uppercase tracking-widest border-4 border-white active:scale-95"
            >
              <Download size={28} className="group-hover:translate-y-1 transition-transform" /> {t('eag.download_plan')}
            </button>
          </div>
        </div>
      </section>

      {/* Social Media Content Section */}
      <section className="py-32 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-8 tracking-tighter uppercase italic">{t('social.title')}</h2>
            <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">{t('social.desc')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* YouTube */}
            <a href="https://youtube.com/@Julengine" target="_blank" rel="noopener noreferrer" className="group p-12 bg-slate-900 rounded-[3rem] border border-white/5 hover:border-red-600/40 transition-all flex flex-col items-center text-center hover:-translate-y-4">
              <div className="w-24 h-24 bg-red-600/10 text-red-600 rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all shadow-inner">
                <Youtube size={48} />
              </div>
              <h3 className="text-3xl font-black mb-3 uppercase italic tracking-tighter">YouTube</h3>
              <p className="text-red-500 font-black tracking-widest text-xs uppercase mb-6">@Julengine</p>
              <p className="text-slate-400 text-base font-medium">{t('social.youtube_desc')}</p>
            </a>

            {/* TikTok */}
            <a href="https://tiktok.com/@Julengine" target="_blank" rel="noopener noreferrer" className="group p-12 bg-slate-900 rounded-[3rem] border border-white/5 hover:border-cyan-400/40 transition-all flex flex-col items-center text-center hover:-translate-y-4">
              <div className="w-24 h-24 bg-cyan-400/10 text-cyan-400 rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-black transition-all shadow-inner">
                <Video size={48} />
              </div>
              <h3 className="text-3xl font-black mb-3 uppercase italic tracking-tighter">TikTok</h3>
              <p className="text-cyan-400 font-black tracking-widest text-xs uppercase mb-6">@Julengine</p>
              <p className="text-slate-400 text-base font-medium">{t('social.tiktok_desc')}</p>
            </a>

            {/* Instagram */}
            <a href="https://instagram.com/jvallecillos_" target="_blank" rel="noopener noreferrer" className="group p-12 bg-slate-900 rounded-[3rem] border border-white/5 hover:border-pink-500/40 transition-all flex flex-col items-center text-center hover:-translate-y-4">
              <div className="w-24 h-24 bg-pink-500/10 text-pink-500 rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 group-hover:text-white transition-all shadow-inner">
                <Instagram size={48} />
              </div>
              <h3 className="text-3xl font-black mb-3 uppercase italic tracking-tighter">Instagram</h3>
              <p className="text-pink-500 font-black tracking-widest text-xs uppercase mb-6">@jvallecillos_</p>
              <p className="text-slate-400 text-base font-medium">{t('social.instagram_desc')}</p>
            </a>
          </div>
        </div>
      </section>

      {/* Hard Skills Section */}
      <section className="py-32 max-w-7xl mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="text-6xl font-black mb-8 tracking-tighter uppercase italic">{t('skills.hard')}</h2>
          <div className="w-32 h-3 bg-primary mx-auto rounded-full mb-10"></div>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">{t('skills.hard_desc')}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {SKILLS.map((skill, idx) => (
            <div key={idx} className="p-12 bg-slate-900/40 rounded-[3rem] border border-white/5 hover:border-primary hover:bg-slate-900 transition-all duration-700 group text-center flex flex-col items-center">
              <div className="w-24 h-24 mb-10 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 flex items-center justify-center">
                <img src={skill.iconUrl} alt={skill.name} className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_20px_rgba(37,99,235,0.3)]" />
              </div>
              <h3 className="text-3xl font-black mb-4 uppercase italic tracking-tighter group-hover:text-primary transition-colors">{skill.name}</h3>
              <p className="text-base text-slate-400 leading-tight font-medium opacity-80">{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Soft Skills Section */}
      <section className="py-32 bg-slate-900/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-6xl font-black mb-8 tracking-tighter uppercase italic">{t('skills.soft')}</h2>
            <div className="w-32 h-3 bg-purple-500 mx-auto rounded-full mb-10"></div>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">{t('skills.soft_desc')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SOFT_SKILLS.map((skill, idx) => (
              <div key={idx} className="p-10 bg-slate-900/60 rounded-[2.5rem] border border-white/5 hover:border-purple-500/50 transition-all group">
                <h3 className="text-2xl font-black mb-4 uppercase italic tracking-tighter text-purple-400 group-hover:text-white transition-colors">{skill.name}</h3>
                <p className="text-slate-400 font-medium leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 max-w-7xl mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="text-6xl font-black mb-8 tracking-tighter uppercase italic">{t('experience.title')}</h2>
          <div className="w-32 h-3 bg-blue-500 mx-auto rounded-full mb-10"></div>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">{t('experience.desc')}</p>
        </div>
        <div className="space-y-12">
          {EXPERIENCE.map((exp, idx) => (
            <div key={idx} className="relative pl-12 md:pl-0">
              {/* Timeline line for mobile */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-800 md:hidden"></div>
              <div className="absolute left-[-4px] top-0 w-3 h-3 rounded-full bg-blue-500 md:hidden"></div>
              
              <div className={`flex flex-col md:flex-row gap-8 items-start ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="w-full md:w-1/2 md:text-right px-0 md:px-12">
                   {idx % 2 === 0 ? (
                     <>
                        <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter">{exp.role}</h3>
                        <p className="text-blue-500 font-black uppercase tracking-widest text-sm mb-4">{exp.company}</p>
                        <span className="inline-block px-4 py-1 bg-slate-800 rounded-full text-xs font-bold text-slate-400 uppercase tracking-widest">{exp.period}</span>
                     </>
                   ) : (
                     <p className="text-slate-400 text-lg leading-relaxed font-medium">{exp.description}</p>
                   )}
                </div>
                
                {/* Center dot for desktop */}
                <div className="hidden md:flex items-center justify-center relative z-10">
                   <div className="w-6 h-6 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)] border-4 border-slate-950"></div>
                </div>

                <div className="w-full md:w-1/2 px-0 md:px-12">
                   {idx % 2 === 0 ? (
                     <p className="text-slate-400 text-lg leading-relaxed font-medium">{exp.description}</p>
                   ) : (
                     <>
                        <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter">{exp.role}</h3>
                        <p className="text-blue-500 font-black uppercase tracking-widest text-sm mb-4">{exp.company}</p>
                        <span className="inline-block px-4 py-1 bg-slate-800 rounded-full text-xs font-bold text-slate-400 uppercase tracking-widest">{exp.period}</span>
                     </>
                   )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-32 bg-slate-900/40 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-6xl font-black mb-8 tracking-tighter uppercase italic">{t('languages.title')}</h2>
            <div className="w-32 h-3 bg-emerald-500 mx-auto rounded-full mb-10"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {LANGUAGES.map((lang, idx) => (
              <div key={idx} className="p-12 bg-slate-950 rounded-[3rem] border border-white/5 hover:border-emerald-500/40 transition-all text-center group">
                <h3 className="text-4xl font-black mb-4 uppercase italic tracking-tighter text-white group-hover:text-emerald-400 transition-colors">{lang.name}</h3>
                <div className="inline-block px-6 py-2 bg-emerald-500/10 text-emerald-500 rounded-full text-sm font-black uppercase tracking-widest border border-emerald-500/20">
                  {lang.level}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-32 bg-white dark:bg-slate-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-24 text-center md:text-left gap-12">
            <div>
              <h2 className="text-6xl font-black mb-6 tracking-tighter uppercase italic">{t('projects.title')}</h2>
              <p className="text-2xl text-slate-500 font-medium">{t('projects.subtitle')}</p>
            </div>
            <Link to="/proyectos" className="px-12 py-5 bg-slate-900 text-white dark:bg-white dark:text-black rounded-3xl font-black text-xl hover:scale-110 transition-all uppercase tracking-widest">{t('projects.explore_all')}</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[1, 2, 3].map((id) => (
              <div key={id} className="group relative overflow-hidden rounded-[4rem] aspect-[3/4] shadow-2xl border border-white/5">
                <img src={`https://picsum.photos/seed/${id + 88}/900/1200`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" alt="Proyecto" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-12 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-20 group-hover:translate-y-0">
                  <h4 className="text-4xl font-black mb-4 tracking-tighter uppercase italic italic tracking-tighter">{t('projects.environment')} {id}</h4>
                  <p className="text-xl text-slate-300 mb-10 font-bold uppercase tracking-[0.2em] text-xs">Unreal Engine • Lumen</p>
                  <Link to="/proyectos" className="bg-primary text-white py-5 px-10 rounded-2xl font-black text-center text-sm tracking-widest uppercase hover:bg-blue-500 transition-colors shadow-xl">{t('projects.view_details')}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Contact CTA */}
      <section className="py-40 bg-slate-950 relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.15)_0%,_transparent_70%)]"></div>
         <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-7xl md:text-[9rem] font-black mb-16 tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-800">{t('contact.cta_title')}</h2>
            <p className="text-2xl md:text-3xl text-slate-400 mb-20 font-medium leading-relaxed max-w-3xl mx-auto">
              {t('contact.cta_desc')}
            </p>
            <Link 
              to="/contacto" 
              className="inline-flex items-center gap-6 bg-primary text-white px-20 py-8 rounded-full font-black text-3xl shadow-[0_30px_60px_rgba(59,130,246,0.4)] hover:scale-105 hover:bg-blue-500 transition-all group uppercase tracking-widest active:scale-95"
            >
              {t('contact.cta_button')} <ArrowRight className="group-hover:translate-x-4 transition-transform" size={32} />
            </Link>
         </div>
      </section>
    </div>
  );
};

export default HomePage;
