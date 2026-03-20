
import React, { useState } from 'react';
import { Model3D } from '../types';
import { useLanguage } from '../context/LanguageContext';
import ModelViewer from '../components/ModelViewer';
import { Box, Maximize2, Cpu, Layers, MousePointer2 } from 'lucide-react';

const Models3DPage: React.FC = () => {
  const { t } = useLanguage();
  const [activeModel, setActiveModel] = useState(0);

  const MODELS: Model3D[] = [
    { 
      id: 1, 
      title: t('models.m1_title'), 
      description: t('models.m1_desc'), 
      modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb' 
    },
    { 
      id: 2, 
      title: t('models.m2_title'), 
      description: t('models.m2_desc'), 
      modelUrl: 'https://modelviewer.dev/shared-assets/models/DamagedHelmet.glb' 
    },
    { 
      id: 3, 
      title: t('models.m3_title'), 
      description: t('models.m3_desc'), 
      modelUrl: 'https://modelviewer.dev/shared-assets/models/RobotExpressive.glb' 
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 animate-fade-in pb-32">
      {/* Hero Header */}
      <header className="pt-32 pb-20 px-4 border-b border-slate-200 dark:border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-primary"></div>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">{t('models_page.featured')}</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-black mb-8 tracking-tighter uppercase italic leading-none">
            {t('models_page.title')}
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 max-w-3xl font-medium leading-relaxed">
            {t('models_page.subtitle')}
          </p>
        </div>
      </header>

      {/* Main Showcase Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left: Model Viewer (Large) */}
            <div className="lg:col-span-8 space-y-8">
              <div className="aspect-square md:aspect-video rounded-[3rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/20 relative group">
                <ModelViewer modelUrl={MODELS[activeModel].modelUrl} title={MODELS[activeModel].title} />
                
                {/* View Controls Hint */}
                <div className="absolute top-8 left-8 flex gap-3">
                  <div className="bg-black/40 backdrop-blur-md p-3 rounded-2xl border border-white/10 text-white">
                    <MousePointer2 size={18} />
                  </div>
                  <div className="bg-black/40 backdrop-blur-md p-3 rounded-2xl border border-white/10 text-white">
                    <Maximize2 size={18} />
                  </div>
                </div>
              </div>

              {/* Technical Specs Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-6 bg-slate-50 dark:bg-slate-900/40 rounded-3xl border border-slate-200 dark:border-white/5 flex flex-col gap-2">
                  <Box size={20} className="text-primary mb-2" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Topology</span>
                  <span className="text-sm font-bold uppercase">{t('models_page.game_ready')}</span>
                </div>
                <div className="p-6 bg-slate-50 dark:bg-slate-900/40 rounded-3xl border border-slate-200 dark:border-white/5 flex flex-col gap-2">
                  <Layers size={20} className="text-primary mb-2" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Materials</span>
                  <span className="text-sm font-bold uppercase">{t('models_page.textures')}</span>
                </div>
                <div className="p-6 bg-slate-50 dark:bg-slate-900/40 rounded-3xl border border-slate-200 dark:border-white/5 flex flex-col gap-2">
                  <Cpu size={20} className="text-primary mb-2" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Workflow</span>
                  <span className="text-sm font-bold uppercase">PBR Metallic</span>
                </div>
                <div className="p-6 bg-slate-50 dark:bg-slate-900/40 rounded-3xl border border-slate-200 dark:border-white/5 flex flex-col gap-2">
                  <Maximize2 size={20} className="text-primary mb-2" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Engine</span>
                  <span className="text-sm font-bold uppercase">Unity / UE5</span>
                </div>
              </div>
            </div>

            {/* Right: Info & Selection */}
            <div className="lg:col-span-4 space-y-12">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-4 block">
                  {t('models_page.model_label')} 0{MODELS[activeModel].id}
                </span>
                <h2 className="text-5xl font-black mb-6 tracking-tighter uppercase italic leading-tight">
                  {MODELS[activeModel].title}
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 font-medium">
                  {MODELS[activeModel].description}
                </p>
                <div className="p-8 bg-primary/5 rounded-[2.5rem] border border-primary/10">
                  <p className="text-sm font-bold text-slate-700 dark:text-slate-300 leading-relaxed italic">
                    "{t('models_page.pbr_desc')}"
                  </p>
                </div>
              </div>

              {/* Model Selector */}
              <div className="space-y-6">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">
                  {t('models_page.gallery')}
                </h3>
                <div className="space-y-4">
                  {MODELS.map((model, idx) => (
                    <button
                      key={model.id}
                      onClick={() => setActiveModel(idx)}
                      className={`w-full p-6 rounded-3xl border transition-all flex items-center justify-between group ${
                        activeModel === idx
                          ? 'bg-slate-900 dark:bg-white border-transparent shadow-xl'
                          : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-white/5 hover:border-primary'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className={`text-xs font-black ${activeModel === idx ? 'text-primary' : 'text-slate-400'}`}>
                          0{model.id}
                        </span>
                        <span className={`font-black uppercase tracking-tighter italic ${
                          activeModel === idx ? 'text-white dark:text-black' : 'text-slate-600 dark:text-slate-300'
                        }`}>
                          {model.title}
                        </span>
                      </div>
                      <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                        activeModel === idx 
                          ? 'bg-primary border-transparent text-white rotate-90' 
                          : 'border-slate-200 dark:border-white/10 text-slate-400 group-hover:border-primary group-hover:text-primary'
                      }`}>
                        <Maximize2 size={14} />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Models3DPage;
