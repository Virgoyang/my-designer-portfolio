import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';

// 3D 核心：增加亮度和明确的容器
const LiquidObject = () => (
  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 1 }}>
    <Canvas camera={{ position: [0, 0, 4] }}>
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} intensity={2.5} color="#00FFF0" />
      <Float speed={3} rotationIntensity={2} floatIntensity={2}>
        <Sphere args={[1, 100, 200]} scale={1.4}>
          <MeshDistortMaterial
            color="#222222"
            emissive="#111111"
            roughness={0.1}
            metalness={1}
            distort={0.5}
            speed={5}
          />
        </Sphere>
      </Float>
    </Canvas>
  </div>
);

export default function App() {
  const containerStyle = {
    backgroundColor: '#050505',
    color: '#FFFFFF',
    minHeight: '100vh',
    width: '100%',
    margin: 0,
    padding: 0,
    fontFamily: 'system-ui, -apple-system, sans-serif',
    position: 'relative',
    overflow: 'hidden'
  };

  const navStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '30px 60px',
    zIndex: 100,
    boxSizing: 'border-box',
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)'
  };

  return (
    <div style={containerStyle}>
      {/* 3D 背景图层 */}
      <LiquidObject />

      {/* 导航栏 */}
      <nav style={navStyle}>
        <div style={{ fontWeight: '900', letterSpacing: '2px', fontSize: '18px' }}>DIGITAL ALCHEMY</div>
        <div style={{ display: 'flex', gap: '40px', fontSize: '11px', letterSpacing: '2px' }}>
          <a href="#work" style={{ color: '#888', textDecoration: 'none' }}>WORK</a>
          <a href="#about" style={{ color: '#888', textDecoration: 'none' }}>ABOUT</a>
          <button style={{ backgroundColor: '#FF0055', border: 'none', color: 'white', padding: '8px 24px', cursor: 'pointer', fontWeight: 'bold' }}>INITIATE</button>
        </div>
      </nav>

      {/* 主标题区 */}
      <main style={{ position: 'relative', zIndex: 10, height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '10%' }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <p style={{ color: '#00FFF0', letterSpacing: '8px', fontSize: '10px', marginBottom: '20px' }}>
            [ ARCHITECT OF DIGITAL REALMS ]
          </p>
          <h1 style={{ fontSize: '10vw', margin: 0, lineHeight: '0.85', fontWeight: '900', letterSpacing: '-4px' }}>
            DESIGNER<br />
            <span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>PORTFOLIO</span>
          </h1>
          <p style={{ maxWidth: '450px', color: '#666', marginTop: '40px', fontSize: '15px', lineHeight: '1.6', fontWeight: '300' }}>
            融合游戏交互美学与奢华视觉体验，<br />诠释不拘一格的数字艺术创作。
          </p>
        </motion.div>
      </main>

      {/* 装饰性背景文字 */}
      <div style={{ position: 'absolute', bottom: '5%', right: '5%', fontSize: '12vw', fontWeight: '900', color: 'rgba(255,255,255,0.03)', pointerEvents: 'none' }}>
        2026
      </div>
    </div>
  );
}