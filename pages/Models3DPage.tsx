
import React from 'react';
import { Model3D } from '../types';
import { useLanguage } from '../context/LanguageContext';
import ModelViewer from '../components/ModelViewer';

const Models3DPage: React.FC = () => {
  const { t } = useLanguage();

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
    <div className="max-w-7xl mx-auto px-4 py-16 animate-fade-in">
      <header className="mb-16">
        <h1 className="text-5xl font-black mb-4">{t('models_page.title')}</h1>
        <p className="text-slate-500 max-w-xl">{t('models_page.subtitle')}</p>
      </header>

      <div className="space-y-24">
        {MODELS.map((model, idx) => (
          <div key={model.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
            <div className="w-full lg:w-2/3 aspect-video shadow-2xl relative">
               <ModelViewer modelUrl={model.modelUrl} title={model.title} />
            </div>
            <div className="w-full lg:w-1/3">
              <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">{t('models_page.model_label')} {model.id}</span>
              <h3 className="text-3xl font-black mb-4">{model.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                {model.description} {t('models_page.pbr_desc')}
              </p>
              <div className="flex gap-4">
                <div className="px-4 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-bold">{t('models_page.textures')}</div>
                <div className="px-4 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-bold">{t('models_page.game_ready')}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Models3DPage;
