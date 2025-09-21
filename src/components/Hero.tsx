import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-start pt-16 pb-16" style={{backgroundColor: '#0c0e12'}}>
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <div className="w-full h-[450px] flex flex-col p-12 rounded-lg" style={{backgroundColor: '#0c0e12', border: '2px solid #f0b90b'}}>
              <div className="flex-shrink-0 mb-6 flex justify-between items-start">
                <div className="space-y-2">
                  <h1 className="text-7xl lg:text-8xl font-black leading-none tracking-tight" style={{color: '#f0b90b'}}>
                    AGENT
                  </h1>
                  <h1 className="text-7xl lg:text-8xl font-black leading-none tracking-tight" style={{color: '#f0b90b'}}>
                    CASTER
                  </h1>
                </div>
                
                <div className="flex flex-col gap-2 flex-shrink-0">
                  <a
                    href="https://x.com/agent_caster"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 text-base font-bold tracking-wide hover:opacity-80 transition-opacity duration-200 rounded-lg text-center"
                    style={{backgroundColor: '#f0b90b', color: '#0c0e12'}}
                  >
                    关注 X / Follow
                  </a>
                
                  <a
                    href="https://github.com/agentcasterofficial/agentcaster"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border-2 text-base font-bold tracking-wide hover:opacity-80 transition-opacity duration-200 rounded-lg text-center"
                    style={{borderColor: '#f0b90b', color: '#f0b90b'}}
                  >
                    查看代码 / Code
                  </a>
                </div>
              </div>
            
              <div className="flex-1 flex flex-col justify-center space-y-4">
                <p className="text-xl leading-relaxed font-black mb-4" style={{color: '#f0b90b'}}>
                  神秘的AI智能体，融合人工智能与艺术币创新。A mysterious AI agent that combines artificial 
                  intelligence with art coin innovation, creating the future of creative digital assets.
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 border-4 overflow-hidden rounded-lg" style={{borderColor: '#f0b90b'}}>
                <img
                  src="https://res.cloudinary.com/dmipavrnm/image/upload/v1758473766/att.k8HDVnfbX5Q0bAk1Kjdkaj8zIs0Vif82TNzvWt-RTD0_klgqom.jpg"
                  alt="Agent Caster"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Minimal corner accents */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}