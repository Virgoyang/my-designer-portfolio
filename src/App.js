import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';

// 确保 3D 容器有明确的宽高
const LiquidObject = () => (
  <div style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0 }}>
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} intensity={2} />
      <Float speed={3} rotationIntensity={2} floatIntensity={2}>
        <Sphere args={[1.2, 100, 200]} scale={1.5}>
          <MeshDistortMaterial
            color="#444"
            emissive="#111"
            roughness={0}
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
  return (
    <div style={{ backgroundColor: '#050505', color: 'white', minHeight: '100vh', width: '100%', margin: 0, padding: 0, overflow: 'hidden', fontFamily: 'sans-serif' }}>
      
      <LiquidObject />

      {/* 顶部导航 */}
      <nav style={{ position: 'fixed', top: 0, width: '100%', display: 'flex', justifyContent: 'space-between', padding: '40px 60px', zIndex: 100, boxSizing: 'border-box' }}>
        <div style={{ fontWeight: 900, letterSpacing: '2px' }}>DIGITAL ALCHEMY</div>
        <div style={{ display: 'flex', gap: '40px', fontSize: '12px' }}>
          <a href="#work" style={{ color: 'white', textDecoration: 'none' }}>WORK</a>
          <a href="#about" style={{ color: 'white', textDecoration: 'none' }}>ABOUT</a>
          <button style={{ backgroundColor: '#FF0055', border: 'none', color: 'white', padding: '8px 20px', cursor: 'pointer' }}>INITIATE</button>
        </div>
      </nav>

      {/* 主标题区 */}
      <div style={{ position: 'relative', zIndex: 10, height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '10%' }}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 style={{ fontSize: '10vw', margin: 0, lineHeight: 0.9, fontWeight: 900 }}>
            DESIGNER<br />
            <span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>PORTFOLIO</span>
          </h1>
          <p style={{ color: '#00FFF0', letterSpacing: '8px', marginTop: '20px', fontSize: '12px' }}>
            [ ARCHITECT OF DIGITAL REALMS ]
          </p>
        </motion.div>
      </div>

    </div>
  );
}