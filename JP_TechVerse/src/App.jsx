import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Rocket, Shield, Cpu, Stars, ArrowRight, Github, Twitter, Linkedin } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div 
    whileHover={{ y: -10, scale: 1.02 }}
    className="glass p-8 flex flex-col items-start gap-4"
  >
    <div className="p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
      <Icon className="w-6 h-6 text-indigo-500" />
    </div>
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-content">
          <div className="logo">
            <Zap className="w-8 h-8 text-indigo-500 fill-indigo-500/20" />
            <span className="gradient-text">JP TechVerse</span>
          </div>
          <div className="nav-links">
            <a href="#features" className="nav-link">Features</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          <button className="btn-primary">Get Started</button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container">
        <section className="hero">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-tag"
          >
            <Stars className="w-4 h-4 mr-2" />
            Empowering the Future of Tech
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hero-title"
          >
            Engineering Tomorrow's <span className="gradient-text">Digital Experiences</span> Today
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-subtitle"
          >
            JP TechVerse is a cutting-edge platform dedicated to building high-performance, 
            scalable, and beautiful web applications for the modern era.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-4"
          >
            <button className="btn-primary flex items-center gap-2">
              Explore Projects <ArrowRight className="w-4 h-4" />
            </button>
            <button className="glass px-6 py-3 font-semibold hover:bg-white/5 transition-colors">
              Read Documentation
            </button>
          </motion.div>

          {/* Cards Grid */}
          <section id="features" className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-32 w-full">
            <FeatureCard 
              icon={Rocket}
              title="Hyper Performance"
              description="Blazing fast load times and optimized performance using the latest Vite and React technologies."
            />
            <FeatureCard 
              icon={Shield}
              title="Secure by Default"
              description="Enterprise-grade security implementations ensuring your data and users are always protected."
            />
            <FeatureCard 
              icon={Cpu}
              title="Scalable Core"
              description="Built with a robust architecture that grows with your business from day one."
            />
          </section>
        </section>

        {/* Footer */}
        <footer className="mt-40 pb-20 border-t border-white/10 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-indigo-500" />
              <span className="font-bold">JP TechVerse</span>
            </div>
            <p className="text-zinc-500 text-sm">
              © 2026 JP TechVerse. All rights reserved. Built with precision.
            </p>
            <div className="flex gap-6">
              <Twitter className="w-5 h-5 text-zinc-400 hover:text-white cursor-pointer" />
              <Github className="w-5 h-5 text-zinc-400 hover:text-white cursor-pointer" />
              <Linkedin className="w-5 h-5 text-zinc-400 hover:text-white cursor-pointer" />
            </div>
          </div>
        </footer>
      </main>

      {/* Decorative elements */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pink-500/10 blur-[120px] rounded-full pointer-events-none" />
    </div>
  );
}

export default App;
