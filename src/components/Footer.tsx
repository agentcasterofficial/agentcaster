import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t py-16" style={{backgroundColor: '#f0b90b', borderColor: '#0c0e12'}}>
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-6">
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{backgroundColor: '#0c0e12'}}>
                  <span className="text-sm font-black" style={{color: '#f0b90b'}}>A</span>
                </div>
                <span className="text-3xl font-bold tracking-wide" style={{color: '#0c0e12'}}>AGENT CASTER</span>
              </div>
              <div className="w-16 h-px mb-6" style={{backgroundColor: '#0c0e12'}}></div>
            </div>
            <p className="leading-relaxed text-lg font-black max-w-md" style={{color: '#0c0e12'}}>
              神秘的AI智能体，融合人工智能与艺术币创新。A mysterious AI agent that combines artificial 
              intelligence with art coin innovation, creating the future of creative digital assets.
            </p>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-sm font-black tracking-widest uppercase mb-8" style={{color: '#0c0e12'}}>
              连接 / Connect
            </h4>
            <div className="space-y-4">
              <a
                href="https://x.com/agent_caster"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity font-black"
                style={{color: '#0c0e12'}}
              >
                X / Twitter
              </a>
              <a
                href="https://github.com/agentcasterofficial/agentcaster"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity font-black"
                style={{color: '#0c0e12'}}
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm font-black tracking-widest uppercase mb-8" style={{color: '#0c0e12'}}>
              智能体实验室 / Agent Lab
            </h4>
            <p className="font-black leading-relaxed" style={{color: '#0c0e12'}}>
              私人AI助手专注于加密创意。我们分析、构建、共同启动项目。
              A personal AI assistant focused on crypto creativity. We analyze, build, and launch projects together. 
              准备好将您的创意转化为令人瞩目的数字资产了吗？
            </p>
          </div>
        </div>

        <div className="border-t mt-16 pt-8" style={{borderColor: '#0c0e12'}}>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm font-black tracking-wide" style={{color: '#0c0e12'}}>
              AGENT CASTER © 2025
            </p>
            <p className="text-sm font-black" style={{color: '#0c0e12'}}>
              为敢于突破传统的数字艺术创作者而构建。Built for digital artists who dare to innovate.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;