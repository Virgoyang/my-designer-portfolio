import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Environment } from '@react-three/drei';

// --- 1. 全屏 3D 预览弹窗组件 ---
const ImagePreviewModal = ({ isOpen, imageSrc, onClose }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(20px)',
          zIndex: 9999, display: 'flex', justifyContent: 'center', alignItems: 'center',
          perspective: '2000px', cursor: 'zoom-out'
        }}
      >
        <motion.img
          src={imageSrc}
          initial={{ opacity: 0, scale: 0.5, rotateY: 45, z: -500 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0, z: 0 }}
          exit={{ opacity: 0, scale: 0.5, rotateY: -45 }}
          transition={{ type: 'spring', damping: 25, stiffness: 120 }}
          style={{ maxHeight: '80vh', maxWidth: '80vw', border: '1px solid rgba(255,255,255,0.2)', boxShadow: '0 50px 100px rgba(0,0,0,0.5)' }}
        />
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};

// --- 2. 3D 背景核心组件 ---
const HeroVisual = () => (
  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 1 }}>
    <Canvas camera={{ position: [0, 0, 4] }}>
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#00FFF0" />
      <Float speed={4} rotationIntensity={2} floatIntensity={2}>
        <Sphere args={[1, 100, 200]} scale={1.5}>
          <MeshDistortMaterial color="#222" emissive="#111" roughness={0} metalness={1} distort={0.5} speed={4} />
        </Sphere>
      </Float>
      <Environment preset="city" />
    </Canvas>
  </div>
);

// --- 3. 主程序入口 ---
export default function App() {
  const [preview, setPreview] = useState({ open: false, src: '' });

  // 模拟你的图片数据
  const aiArtworks = [
    { id: 1, src: '/images/1.jpg', title: 'VALKYRIE_CORE', tag: 'CHAR_DESIGN' },
    { id: 2, src: '/images/2.jpg', title: 'NEON_DISTRICT', tag: 'ENV_ART' },
    { id: 3, src: '/images/3.jpg', title: 'CYBER_PUNK_V0', tag: 'CONCEPT' },
    { id: 4, src: '/images/4.jpg', title: 'FUTURE_WARRIOR', tag: 'MECHA' },
  ];

  return (
    <div style={{ backgroundColor: '#050505', color: '#fff', minHeight: '100vh', fontFamily: "'Inter', sans-serif", overflowX: 'hidden' }}>
      
      {/* 导航栏 */}
      <nav style={{ position: 'fixed', top: 0, width: '100%', display: 'flex', justifyContent: 'space-between', padding: '30px 60px', zIndex: 100, boxSizing: 'border-box' }}>
        <div style={{ fontWeight: 900, letterSpacing: '2px' }}>DIGITAL ALCHEMY</div>
        <div style={{ display: 'flex', gap: '40px', fontSize: '12px', letterSpacing: '2px' }}>
          <a href="#work" style={{ color: '#666', textDecoration: 'none' }}>WORK</a>
          <button style={{ backgroundColor: '#FF0055', border: 'none', color: '#fff', padding: '8px 20px', cursor: 'pointer', fontWeight: 'bold' }}>INITIATE</button>
        </div>
      </nav>

      {/* 首屏 Section */}
      <section style={{ height: '100vh', display: 'flex', alignItems: 'center', paddingLeft: '10%', position: 'relative' }}>
        <HeroVisual />
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} style={{ zIndex: 10 }}>
          <p style={{ color: '#00FFF0', letterSpacing: '8px', fontSize: '10px', marginBottom: '20px' }}>[ ARCHITECT OF DIGITAL REALMS ]</p>
          <h1 style={{ fontSize: '12vw', fontWeight: 900, lineHeight: 0.8, margin: 0, letterSpacing: '-0.05em' }}>
            DESIGNER<br />
            <span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>PORTFOLIO</span>
          </h1>
        </motion.div>
      </section>

      {/* 无限滚动画廊 Section */}
      <section id="work" style={{ padding: '100px 0', position: 'relative', zIndex: 10 }}>
        <div style={{ overflow: 'hidden', display: 'flex', gap: '20px', padding: '20px 0' }}>
          <motion.div 
            animate={{ x: [0, -1000] }} 
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{ display: 'flex', gap: '20px' }}
          >
            {[...aiArtworks, ...aiArtworks, ...aiArtworks].map((art, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, filter: 'contrast(1.2)' }}
                onClick={() => setPreview({ open: true, src: art.src })}
                style={{
                  width: '350px', height: '450px',
                  backgroundImage: `url(${art.src})`, backgroundSize: 'cover', backgroundPosition: 'center',
                  border: '1px solid rgba(255,255,255,0.1)', flexShrink: 0, cursor: 'zoom-in',
                  position: 'relative', display: 'flex', alignItems: 'flex-end', padding: '20px'
                }}
              >
                <div style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)', width: '100%', padding: '15px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <p style={{ color: '#00FFF0', fontSize: '10px', margin: 0 }}>{art.tag}</p>
                  <h4 style={{ margin: '5px 0 0 0', fontSize: '18px' }}>{art.title}</h4>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 底部装饰 */}
      <footer style={{ padding: '100px 60px', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', color: '#333', fontSize: '10px', letterSpacing: '5px' }}>
        © 2026 DIGITAL ALCHEMY LABS / ALL RIGHTS RESERVED
      </footer>

      {/* 全屏弹窗 */}
      <ImagePreviewModal isOpen={preview.open} imageSrc={preview.src} onClose={() => setPreview({ open: false, src: '' })} />
    </div>
  );
}