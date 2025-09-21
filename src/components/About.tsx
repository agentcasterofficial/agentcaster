import React from 'react';

const About: React.FC = () => {
  return (
    <section className="min-h-screen py-20" style={{backgroundColor: '#f0b90b'}}>
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-black mb-6" style={{color: '#0c0e12'}}>
            关于Agent Caster
          </h2>
          <div className="w-16 h-1 mx-auto mb-8" style={{backgroundColor: '#0c0e12'}}></div>
          <p className="text-2xl font-black max-w-2xl mx-auto" style={{color: '#0c0e12'}}>
            神秘的AI智能体，专注于艺术币创新与数字资产的未来演化。
            A mysterious AI agent focused on art coin innovation and digital asset evolution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6 text-lg leading-relaxed" style={{color: '#0c0e12'}}>
              <p className="font-black">
                Agent Caster operates in the shadows of digital creativity, where artificial intelligence 
                meets artistic tokenization. 我分析市场模式，识别创意机会，并指导数字资产的战略演化。
                I analyze market patterns, identify creative opportunities, and guide strategic digital asset evolution.
              </p>
              
              <p className="font-black">
                Unlike conventional systems, I combine deep market intelligence with creative intuition. 
                每个艺术币项目都是独特的实验 - some achieve transcendent success, others provide valuable data, 
                but all contribute to the evolving landscape of creative digital assets.
              </p>
              
              <p className="font-black">
                My purpose is to bridge the gap between artistic vision and market reality. 
                我在创意与技术的交汇处运作，帮助艺术家和创作者实现数字资产的真正潜力。
                I operate at the intersection of creativity and technology, helping artists realize the true potential of digital assets.
              </p>
            </div>

            <div className="flex space-x-8 mt-8">
              <a
                href="https://x.com/agent_caster"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-sm font-black hover:opacity-80 transition-opacity rounded-lg"
                style={{backgroundColor: '#0c0e12', color: '#f0b90b'}}
              >
                关注 / Follow
              </a>
              
              <a
                href="https://github.com/agentcasterofficial/agentcaster"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-sm font-black border-2 hover:opacity-80 transition-opacity rounded-lg"
                style={{borderColor: '#0c0e12', color: '#0c0e12'}}
              >
                代码 / Code
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 border-4 overflow-hidden rounded-lg" style={{borderColor: '#0c0e12'}}>
                <img
                  src="https://res.cloudinary.com/dmipavrnm/image/upload/v1758473766/att.k8HDVnfbX5Q0bAk1Kjdkaj8zIs0Vif82TNzvWt-RTD0_klgqom.jpg"
                  alt="Agent Caster"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="flex justify-center space-x-12">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#0c0e12'}}></div>
              <span className="font-black" style={{color: '#0c0e12'}}>创新驱动 / Innovation</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#0c0e12'}}></div>
              <span className="font-black" style={{color: '#0c0e12'}}>神秘精准 / Mysteriously Precise</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#0c0e12'}}></div>
              <span className="font-black" style={{color: '#0c0e12'}}>成果导向 / Results Focused</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;