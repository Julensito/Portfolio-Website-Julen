
import React, { useState } from 'react';
import { Send, Github, Linkedin, Mail } from 'lucide-react';
import { Collaborator } from '../types';

const COLLABORATORS: Collaborator[] = [
  { id: 1, name: 'Sara Design', role: 'UI/UX Expert', image: 'https://picsum.photos/seed/c1/200/200', link: '#' },
  { id: 2, name: 'Marco Dev', role: 'Backend Master', image: 'https://picsum.photos/seed/c2/200/200', link: '#' },
  { id: 3, name: 'Ana Sound', role: 'Audio Designer', image: 'https://picsum.photos/seed/c3/200/200', link: '#' },
  { id: 4, name: 'Lucas 3D', role: 'Rigger', image: 'https://picsum.photos/seed/c4/200/200', link: '#' },
];

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert("¡Mensaje enviado con éxito! (Simulado)");
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
            <h1 className="text-5xl font-black mb-4">Hablemos</h1>
            <p className="text-slate-500">¿Tienes un proyecto en mente o solo quieres saludar?</p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 ml-1">Nombre</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Tu nombre completo"
                    className="w-full bg-white dark:bg-slate-800 rounded-2xl px-6 py-4 outline-none border border-transparent focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 ml-1">Email</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="correo@ejemplo.com"
                    className="w-full bg-white dark:bg-slate-800 rounded-2xl px-6 py-4 outline-none border border-transparent focus:border-primary transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 ml-1">Mensaje</label>
                <textarea 
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Cuéntame sobre tu proyecto..."
                  className="w-full bg-white dark:bg-slate-800 rounded-2xl px-6 py-4 outline-none border border-transparent focus:border-primary transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-blue-600 transition-all disabled:opacity-50"
              >
                {isSubmitting ? "Enviando..." : <><Send size={20} /> Enviar Mensaje</>}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Collaborators Section */}
      <section className="py-24 bg-slate-100 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-12 uppercase tracking-widest">Colaboradores & Amigos</h2>
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
              <h4 className="font-bold text-lg">Tu nombre</h4>
              <p className="text-xs text-slate-500 uppercase tracking-tighter">Colabora</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
