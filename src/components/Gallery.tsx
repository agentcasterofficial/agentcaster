import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Gallery: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "什么是Agent Caster？/ What is Agent Caster?",
      answer: "Agent Caster是一个神秘的AI智能体，专门运作于人工智能与艺术币创新的交汇点。I am designed to analyze creative markets, identify emerging opportunities, and guide the strategic evolution of digital assets. Unlike conventional systems, I operate with both analytical precision and creative intuition."
    },
    {
      question: "如何帮助艺术币项目？/ How do you help with art coin projects?",
      answer: "I provide sophisticated market analysis, creative concept development, and strategic guidance for digital asset creation. 我分析市场模式，识别创意机会，并制定精确的数字资产策略。My approach combines deep intelligence gathering with artistic vision to create unique positioning in the creative economy."
    },
    {
      question: "为什么选择Agent Caster？/ Why choose Agent Caster?",
      answer: "I operate with a unique combination of market intelligence and creative insight that standard AI systems lack. 我理解艺术币生态系统的微妙之处和市场心理。While others provide generic advice, I offer precise, contextually aware strategies tailored to the evolving landscape of creative digital assets."
    },
    {
      question: "能保证项目成功吗？/ Can you guarantee project success?",
      answer: "Success in creative markets cannot be guaranteed, but strategic positioning can be optimized. 我专注于最大化成功概率通过精确的市场分析和创意策略。I focus on maximizing success probability through precise market analysis and creative strategy, creating assets with genuine value and compelling narratives."
    },
    {
      question: "需要专业背景吗？/ Do I need expertise to work with you?",
      answer: "Technical expertise is not required. I adapt my guidance to your current knowledge level while providing sophisticated strategic insights. 无论您是经验丰富的创作者还是新手，我都会提供适合的指导。Whether you're an experienced creator or newcomer, I provide appropriate guidance for your digital asset journey."
    },
    {
      question: "如何开始？/ How do I get started?",
      answer: "Initiate conversation through the Chat interface. Share your creative vision, market questions, or strategic objectives. 告诉我您的艺术概念或市场目标，我将提供精确的分析和策略建议。I will analyze your inputs and provide precise strategic recommendations for your digital asset development."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="min-h-screen py-20" style={{backgroundColor: '#f0b90b'}}>
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-20 p-8 rounded-lg" style={{backgroundColor: '#0c0e12'}}>
          <div className="space-y-2 mb-8">
            <p className="text-sm font-black tracking-widest uppercase" style={{color: '#f0b90b'}}>
              问题解答 / Questions & Answers
            </p>
            <div className="w-12 h-px mx-auto" style={{backgroundColor: '#f0b90b'}}></div>
          </div>
          <h2 className="text-5xl font-black mb-6" style={{color: '#f0b90b'}}>
            常见问题
          </h2>
          <p className="text-xl font-black" style={{color: '#f0b90b'}}>
            关于Agent Caster智能体的关键问题，详细解答。
            Key questions about Agent Caster intelligence, thoroughly answered.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 rounded-lg overflow-hidden transition-all duration-300"
              style={{
                borderColor: '#f0b90b',
                backgroundColor: '#0c0e12'
              }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left transition-colors duration-300 hover:opacity-80"
                style={{color: '#f0b90b'}}
              >
                <h3 className="text-lg font-black pr-4">
                  {faq.question}
                </h3>
                <div>
                  {openFaq === index ? (
                    <ChevronUp size={24}
                    style={{color: '#f0b90b'}}
                  />
                  ) : (
                    <ChevronDown size={24} style={{color: '#f0b90b'}} />
                  )}
                </div>
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openFaq === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
                style={{backgroundColor: '#0c0e12'}}
              >
                <div className="px-8 pb-6 pt-2 border-t-2" style={{borderColor: '#f0b90b'}}>
                  <p
                    className="leading-relaxed font-black"
                    style={{color: '#f0b90b'}}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
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

export default Gallery;