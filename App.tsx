
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { Sun, Moon, FileText, Menu, X, Music, Volume2, VolumeX } from 'lucide-react';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import Models3DPage from './pages/Models3DPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col font-sans transition-colors duration-300">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link to="/" className="text-2xl font-black tracking-tighter text-primary">JULEN.</Link>
              
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-sm font-bold tracking-widest uppercase hover:text-primary transition-colors">Inicio</Link>
                <Link to="/proyectos" className="text-sm font-bold tracking-widest uppercase hover:text-primary transition-colors">Proyectos</Link>
                <Link to="/modelos-3d" className="text-sm font-bold tracking-widest uppercase hover:text-primary transition-colors">Modelos 3D</Link>
                <Link to="/contacto" className="text-sm font-bold tracking-widest uppercase hover:text-primary transition-colors">Contacto</Link>
                
                <div className="flex items-center gap-4 pl-4 border-l border-slate-200 dark:border-slate-800">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className={`p-2 rounded-full transition-all ${isPlaying ? 'bg-orange-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.5)]' : 'hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500'}`}
                    title="Música de SoundCloud"
                  >
                    {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
                  </button>
                  <a href="#" className="flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-full hover:bg-blue-600 transition-all text-xs font-black uppercase tracking-widest">
                    <FileText size={14} /> CV
                  </a>
                  <button 
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-all"
                  >
                    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                  </button>
                </div>
              </div>

              {/* Mobile Menu Toggle */}
              <div className="md:hidden flex items-center gap-4">
                 <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className={`p-2 rounded-full ${isPlaying ? 'text-orange-500' : 'text-slate-500'}`}
                  >
                    {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
                  </button>
                <button onClick={() => setDarkMode(!darkMode)} className="p-2">
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* SoundCloud Hidden Player */}
          {isPlaying && (
            <div className="hidden">
                <iframe 
                  width="100%" 
                  height="166" 
                  scrolling="no" 
                  frameBorder="no" 
                  allow="autoplay" 
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1141380322&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                ></iframe>
            </div>
          )}

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 animate-fade-in shadow-2xl">
              <div className="flex flex-col p-6 space-y-6">
                <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-xl font-black uppercase tracking-widest border-b border-slate-100 dark:border-slate-900 pb-2">Inicio</Link>
                <Link to="/proyectos" onClick={() => setIsMenuOpen(false)} className="text-xl font-black uppercase tracking-widest border-b border-slate-100 dark:border-slate-900 pb-2">Proyectos</Link>
                <Link to="/modelos-3d" onClick={() => setIsMenuOpen(false)} className="text-xl font-black uppercase tracking-widest border-b border-slate-100 dark:border-slate-900 pb-2">Modelos 3D</Link>
                <Link to="/contacto" onClick={() => setIsMenuOpen(false)} className="text-xl font-black uppercase tracking-widest">Contacto</Link>
                <a href="#" className="bg-primary text-white px-4 py-4 rounded-2xl text-center font-black uppercase tracking-widest">Descargar CV</a>
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/proyectos" element={<ProjectsPage />} />
            <Route path="/modelos-3d" element={<Models3DPage />} />
            <Route path="/contacto" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-black mb-8 tracking-tighter">JULEN VALLECILLOS</h3>
            <div className="flex justify-center space-x-8 mb-10">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-primary transition-all font-bold uppercase text-xs tracking-widest">LinkedIn</a>
              <a href="https://artstation.com" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-primary transition-all font-bold uppercase text-xs tracking-widest">ArtStation</a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-primary transition-all font-bold uppercase text-xs tracking-widest">GitHub</a>
              <a href="https://instagram.com/jvallecillos_" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-primary transition-all font-bold uppercase text-xs tracking-widest">Instagram</a>
            </div>
            <p className="text-slate-500 dark:text-slate-600 text-xs font-bold uppercase tracking-[0.2em]">
              &copy; {new Date().getFullYear()} JULEN VALLECILLOS. ALL RIGHTS RESERVED.
            </p>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;
