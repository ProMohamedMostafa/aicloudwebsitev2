"use client";

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MobileScrollTransition() {
  const phoneRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!phoneRef.current || !screenRef.current) return;

    const ctx = gsap.context(() => {
      // Phone animation - moves with scroll
      gsap.to(phoneRef.current, {
        scrollTrigger: {
          trigger: "#services-section",
          start: "top bottom",
          end: "top top",
          scrub: 1,
          markers: false,
        },
        y: -50,
        scale: 0.9,
        rotation: -5,
        duration: 1,
      });

      // Screen content transition
      gsap.to(screenRef.current, {
        scrollTrigger: {
          trigger: "#services-section",
          start: "top bottom",
          end: "top top",
          scrub: 1,
        },
        opacity: 0,
        y: -30,
        duration: 0.8,
      });

      // Background color transition
      gsap.to(phoneRef.current, {
        scrollTrigger: {
          trigger: "#services-section",
          start: "top bottom",
          end: "top top",
          scrub: 1,
        },
        backgroundColor: "#1e40af",
        duration: 1,
      });

    }, phoneRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={phoneRef}
      className="floating-phone"
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '300px',
        height: '600px',
        borderRadius: '40px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        border: '8px solid #1f2937',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        zIndex: 100,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {/* Phone notch */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '120px',
        height: '20px',
        backgroundColor: '#1f2937',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
        zIndex: 10,
      }} />
      
      {/* Phone screen */}
      <div
        ref={screenRef}
        style={{
          width: '100%',
          height: '100%',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: '48px', marginBottom: '20px' }}>📱</div>
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
          Scroll to Explore
        </h3>
        <p style={{ fontSize: '14px', opacity: 0.8 }}>
          Moving to Services...
        </p>
        
        {/* Animated scroll indicator */}
        <div style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '2px',
          height: '30px',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          borderRadius: '1px',
        }}>
          <div style={{
            width: '100%',
            height: '10px',
            backgroundColor: 'white',
            borderRadius: '1px',
            animation: 'scrollIndicator 2s infinite',
          }} />
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollIndicator {
          0% { transform: translateY(0); opacity: 0; }
          50% { transform: translateY(20px); opacity: 1; }
          100% { transform: translateY(20px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}