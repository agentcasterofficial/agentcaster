import React from 'react';

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onSectionChange }) => {
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'chat', label: 'Chat' },
    { id: 'gallery', label: 'FAQ' },
    { id: 'about', label: 'About' },
  ];

  return (
    <header className="bg-white border-b sticky top-0 z-50" style={{backgroundColor: '#0c0e12', borderBottomColor: '#0c0e12'}}>
      <div className="max-w-6xl mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{backgroundColor: '#f0b90b'}}>
              <span className="text-sm font-black" style={{color: '#0c0e12'}}>A</span>
              <span className="text-sm font-black" style={{color: '#0c0e12'}}>C</span>
            </div>
            <span className="text-2xl font-bold tracking-wide" style={{color: '#f0b90b'}}>AGENT CASTER</span>
          </div>
          <nav className="flex items-center space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => onSectionChange(section.id)}
                className={`text-sm font-black tracking-wide transition-colors duration-200 ${
                  activeSection === section.id
                    ? 'border-b-2 pb-1'
                    : 'hover:opacity-80'
                }`}
                style={{
                  color: '#f0b90b',
                  borderColor: activeSection === section.id ? '#f0b90b' : 'transparent'
                }}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;