import React, { useRef, useState } from 'react';

const Demo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-20" style={{backgroundColor: '#0c0e12'}}>
      <div className="max-w-5xl mx-auto px-8">
        <div className="text-center mb-16 p-8 rounded-lg" style={{backgroundColor: '#f0b90b'}}>
          <div className="space-y-2 mb-8">
            <p className="text-sm font-black tracking-widest uppercase" style={{color: '#0c0e12'}}>
              演示 / Demonstration
            </p>
            <div className="w-12 h-px mx-auto" style={{backgroundColor: '#0c0e12'}}></div>
          </div>
          <h2 className="text-5xl font-black mb-6" style={{color: '#0c0e12'}}>
            运行中 / In Action
          </h2>
          <p className="text-xl font-black max-w-2xl mx-auto" style={{color: '#0c0e12'}}>
            观看Agent Caster的实际操作。人工智能驱动的艺术币创新，神秘而精确的数字资产策略。
            Watch Agent Caster in action. AI-powered art coin innovation with mysterious precision.
          </p>
        </div>

        <div className="border rounded-lg overflow-hidden" style={{backgroundColor: '#f0b90b', borderColor: '#0c0e12'}}>
          {/* Header */}
          <div className="border-b px-8 py-4" style={{borderColor: '#0c0e12'}}>
            <div className="flex items-center justify-between">
              <span className="text-sm font-black tracking-wide" style={{color: '#0c0e12'}}>
                实时演示 / Live Demo
              </span>
              <div className="flex items-center space-x-6">
                <button
                  onClick={togglePlay}
                  className="px-4 py-2 text-xs font-bold hover:opacity-80 transition-opacity duration-200 rounded"
                  style={{backgroundColor: '#0c0e12', color: '#f0b90b'}}
                >
                  {isPlaying ? '暂停' : '播放'}
                </button>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{backgroundColor: '#f0b90b'}}></div>
                  <span className="text-xs font-bold" style={{color: '#0c0e12'}}>录制</span>
                </div>
              </div>
            </div>
          </div>

          {/* Video */}
          <div className="relative">
            <video
              ref={videoRef}
              src="https://res.cloudinary.com/dmipavrnm/video/upload/v1758475845/Recording_agentcaster_z8epzp.mp4"
              className="w-full h-auto"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="flex items-center justify-center space-x-12">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#0c0e12'}}></div>
              <span className="text-sm font-black" style={{color: '#0c0e12'}}>艺术智能 / Art Intelligence</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#0c0e12'}}></div>
              <span className="text-sm font-black" style={{color: '#0c0e12'}}>神秘代理 / Mysterious Agent</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#0c0e12'}}></div>
              <span className="text-sm font-black" style={{color: '#0c0e12'}}>数字资产 / Digital Assets</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;