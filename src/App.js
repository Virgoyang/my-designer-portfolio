import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';

// --- 3D 液态金属装饰组件 ---
const LiquidObject = () => (
  <Canvas className="absolute top-0 right-0 !w-1/2 !h-screen -z-10">
    <ambientLight intensity={0.5} />
    <directionalLight position={[10, 10, 5]} intensity={1} />
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <Sphere args={[1, 100, 200]} scale={1.8}>
        <MeshDistortMaterial
          color="#A0A0A0"
          roughness={0.1}
          metalness={1}
          distort={0.4}
          speed={3}
        />
      </Sphere>
    </Float>
  </Canvas>
);

const DesignerPortfolio = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
  };

  return (
    <div className="bg-[#0A0A0B] text-[#E0E0E0] min-h-screen selection:bg-[#00FFF0] selection:text-black overflow-x-hidden font-sans">
      
      {/* 3D 艺术装置背景 */}
      <LiquidObject />

      {/* 导航栏 */}
      <nav className="flex justify-between items-center px-12 py-8 fixed w-full z-50 backdrop-blur-md">
        <div className="text-xl font-bold tracking-tighter uppercase italic">Digital Alchemy</div>
        <div className="flex gap-12 text-xs tracking-[0.2em] uppercase font-light">
          {['Home', 'Portfolio', 'About', 'Contact'].map(item => (
            <a href={`#${item.toLowerCase()}`} key={item} className="hover:text-[#FF0055] transition-colors cursor-pointer">{item}</a>
          ))}
        </div>
        <button className="bg-[#FF0055] px-6 py-2 text-xs uppercase tracking-widest hover:scale-105 transition-transform active:scale-95">
          Initiate Collaboration
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center px-12 md:px-24">
        <motion.div {...fadeInUp}>
          <p className="text-[#00FFF0] text-sm tracking-[0.5em] mb-4 uppercase">[ Architect of Digital Realms ]</p>
          <h1 className="text-7xl md:text-9xl font-black leading-tight mix-blend-difference uppercase">
            Designer<br />
            <span className="text-transparent border-t-2 border-b-2 border-white/20 px-4">Portfolio</span>
          </h1>
          <p className="max-w-md mt-8 text-gray-400 leading-relaxed font-light">
            融合游戏交互美学与奢华视觉体验，诠释不拘一格的数字艺术创作。
          </p>
        </motion.div>
      </section>

      {/* 作品展示区 (非对称网格) */}
      <section className="px-12 py-24">
        <div className="grid grid-cols-12 gap-6">
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="col-span-8 h-[600px] bg-white/5 border border-white/10 relative overflow-hidden group cursor-crosshair"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF0055]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-8 left-8 text-xs font-mono">/ PROJECT_01 // NEON DRIFT</div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="col-span-4 h-[400px] mt-24 bg-white/5 border border-white/10 relative group"
          >
             <div className="absolute bottom-8 left-8 text-xs font-mono">/ PROJECT_02 // LIQUID CORE</div>
          </motion.div>
        </div>
      </section>

      {/* 底部信息 */}
      <footer className="p-24 border-t border-white/5 text-center">
        <h2 className="text-4xl font-light tracking-widest opacity-30">READY FOR A NEW ADVENTURE?</h2>
      </footer>
    </div>
  );
};

export default DesignerPortfolio;