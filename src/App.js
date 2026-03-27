import React from 'react'; // 删除了未使用的 Suspense
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';

const LiquidObject = () => (
  <div className="absolute top-0 right-0 w-full h-screen -z-10 opacity-50">
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <Sphere args={[1, 100, 200]} scale={1.4}>
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
  </div>
);

const DesignerPortfolio = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
  };

  const navItems = ['Home', 'Portfolio', 'About', 'Contact'];

  return (
    <div className="bg-[#0A0A0B] text-[#E0E0E0] min-h-screen selection:bg-[#00FFF0] selection:text-black overflow-x-hidden font-sans">
      <LiquidObject />

      <nav className="flex justify-between items-center px-6 md:px-12 py-8 fixed w-full z-50 backdrop-blur-sm">
        <div className="text-xl font-bold tracking-tighter uppercase italic">Digital Alchemy</div>
        <div className="hidden md:flex gap-12 text-xs tracking-[0.2em] uppercase font-light">
          {navItems.map(item => (
            // 修复了 href 缺失的问题，现在符合无障碍标准
            <a href={`#${item.toLowerCase()}`} key={item} className="hover:text-[#FF0055] transition-colors cursor-pointer">
              {item}
            </a>
          ))}
        </div>
        <button className="bg-[#FF0055] px-6 py-2 text-[10px] uppercase tracking-widest hover:scale-105 transition-transform">
          Initiate
        </button>
      </nav>

      <section className="relative h-screen flex flex-col justify-center px-12 md:px-24">
        <motion.div {...fadeInUp}>
          <p className="text-[#00FFF0] text-[10px] tracking-[0.5em] mb-4 uppercase">[ Architect of Digital Realms ]</p>
          <h1 className="text-5xl md:text-8xl font-black leading-tight uppercase">
            Designer<br />
            <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>Portfolio</span>
          </h1>
          <p className="max-w-md mt-8 text-gray-500 text-sm leading-relaxed font-light">
            融合游戏交互美学与奢华视觉体验，诠释不拘一格的数字艺术创作。
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default DesignerPortfolio;