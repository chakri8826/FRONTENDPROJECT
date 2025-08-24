import React, { useState } from 'react';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const navItems = [
    { name: 'Home', width: 46 },
    { name: 'Services', width: 63 },
    { name: 'Projects', width: 61 },
    { name: 'Our Journey', width: 89 },
    { name: 'About', width: 46 },
    { name: 'Contact', width: 61 }
  ];

 
  const navLinkBaseStyle = {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: '16px',
    lineHeight: '150%',
    letterSpacing: '-3%',
    verticalAlign: 'middle',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '24px',
    fontWeight: 600,
    textDecoration: 'none'
  };

  const getNavLinkStyle = (width, isActive = false) => ({
    ...navLinkBaseStyle,
    color: isActive ? '#F0F0F0':'#FFFFFF',
    width: `${width}px`,
    opacity: isActive ? 1 : 0.9
  });

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <nav className="w-full px-8 py-5">  
      <div className="max-w-[1120px] bg-black/40 backdrop-blur-md border border-gray-600 rounded-full mx-auto">
        <div 
          className="relative  rounded-[32px] h-[78px] w-[1120px]" 
          style={{
            background: `
              linear-gradient(black,black) padding-box,
              linear-gradient(97.64deg,rgb(49, 26, 26) -7.61%, #0038A0 41.06%, #8083A5 73.51%, #FFFFFF 103.75%, #000814 104.86%) border-box
            `,
            border: '1px solid transparent',
            borderRadius: '32px'
          }}
        >
          <div 
            className="flex items-center justify-between"
            style={{
              width: '948px',
              height: '48px',
              marginTop: '15px',
              marginLeft: '86px'
            }}
          >
            {/* Logo */}
            <div 
              className="flex items-center"
              style={{
                width: '262.5px',
                height: '22.13px',
                gap: '10px'
              }}
            >
              <img 
                src="/Vector.svg" 
                alt="Logo" 
                style={{
                  width: '41.29px',
                  height: '22.13px'
                }}
              />
              <span 
                style={{
                  width: '96px',
                  height: '22px',
                  fontFamily: 'Urbanist',
                  fontWeight: 600,
                  fontSize: '22px',
                  lineHeight: '100%',
                  letterSpacing: '-3%',
                  verticalAlign: 'middle',
                  color: '#FFFFFF'
                }}
              >
                InfiniMove
              </span>
            </div>
                     
            {/* Nav Menu */}
            <div className="flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = activeTab === item.name;
                return (
                  <a 
                    key={item.name}
                    href="#" 
                    className="relative hover:text-white transition-colors" 
                    style={getNavLinkStyle(item.width, isActive)}
                    onClick={(e) => {
                      e.preventDefault();
                      handleTabClick(item.name);
                    }}
                  >
                    {item.name}
                    {isActive && (
                      <div 
                        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2"
                        style={{
                          width: '13px',
                          height: '0px',
                          border: '2px solid #FFFFFF'
                        }}
                      />
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;