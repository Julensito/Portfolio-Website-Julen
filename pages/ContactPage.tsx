
import React, { useState } from 'react';
import { Send, Github, Linkedin, Mail } from 'lucide-react';
import { Collaborator } from '../types';
import { useLanguage } from '../context/LanguageContext';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const COLLABORATORS: Collaborator[] = [
    { id: 1, name: 'Ángel Robles', role: 'Full Stack Developer', image: '/mangologo.jpg', link: 'https://angelrobles.netlify.app/' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert(t('contact.success'));
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="animate-fade-in">
      {/* Contact Form Section */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-black mb-4">{t('contact.title')}</h1>
            <p className="text-slate-500">{t('contact.subtitle')}</p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 ml-1">{t('contact.label_name')}</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder={t('contact.placeholder_name')}
                    className="w-full bg-white dark:bg-slate-800 rounded-2xl px-6 py-4 outline-none border border-transparent focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 ml-1">{t('contact.label_email')}</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder={t('contact.placeholder_email')}
                    className="w-full bg-white dark:bg-slate-800 rounded-2xl px-6 py-4 outline-none border border-transparent focus:border-primary transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 ml-1">{t('contact.label_message')}</label>
                <textarea 
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder={t('contact.placeholder_message')}
                  className="w-full bg-white dark:bg-slate-800 rounded-2xl px-6 py-4 outline-none border border-transparent focus:border-primary transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-blue-600 transition-all disabled:opacity-50"
              >
                {isSubmitting ? t('contact.sending') : <><Send size={20} /> {t('contact.send')}</>}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Collaborators Section */}
      <section className="py-24 bg-slate-100 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-12 uppercase tracking-widest">{t('contact.collabs')}</h2>
          <div className="flex flex-wrap justify-center gap-12">
            {COLLABORATORS.map((collab) => (
              <a 
                key={collab.id} 
                href={collab.link} 
                className="flex flex-col items-center group"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl mb-4 group-hover:scale-110 group-hover:border-primary transition-all duration-300">
                  <img src={collab.image} alt={collab.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold text-lg">{collab.name}</h4>
                <p className="text-xs text-slate-500 uppercase tracking-tighter">{collab.role}</p>
              </a>
            ))}
            {/* Empty circle for adding new ones easily */}
            <div className="flex flex-col items-center group opacity-50 cursor-pointer">
              <div className="w-32 h-32 rounded-full border-4 border-dashed border-slate-400 flex items-center justify-center mb-4 group-hover:border-primary transition-all">
                <span className="text-4xl">+</span>
              </div>
              <h4 className="font-bold text-lg">{t('contact.your_name')}</h4>
              <p className="text-xs text-slate-500 uppercase tracking-tighter">{t('contact.collab_cta')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
