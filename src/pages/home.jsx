import React from 'react';
import { useRef, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';// Import your Navbar component


const AnimatedVideoBackground = ({ 
  videoSrc = "/clarity-stream.mp4",
  overlayOpacity = 0.2,
  showGradient = true 
}) => {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadedData = () => {
        setIsLoaded(true);
      };

      video.addEventListener('loadeddata', handleLoadedData);
      video.play().catch(console.error);

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base black background as fallback */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Loading state */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
        </div>
      )}
      
      {/* Video background */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {overlayOpacity > 0 && (
        <div 
          className="absolute inset-0 bg-black"
          style={{ 
            opacity: overlayOpacity,
            mixBlendMode: 'multiply' 
          }}
        ></div>
      )}
      
      {showGradient && (
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.1) 100%)'
          }}
        ></div>
      )}
    </div>
  );
};


const ProductBadge = () => {
    return (
      <div>
        <div 
          className="inline-flex items-center  border rounded-[36px]"
          style={{
            width: '384px',
            height: '33px',
            paddingTop: '8px',
            paddingRight: '14px',
            paddingBottom: '8px',
            paddingLeft: '14px',
            borderRadius: '36px',
            borderWidth: '0.5px',
            borderColor: '#6B7280'
          }}
        >
          <div 
            className="flex items-center justify-center gap-2"
            style={{
              width: '359px',
              height: '17px',
            }}
          >
            <span 
              style={{
                fontFamily: 'Urbanist, system-ui, -apple-system, sans-serif',
                fontWeight: 300,
                fontSize: '14px',
                lineHeight: '121%',
                letterSpacing: '0%',
                textAlign: 'center',
                verticalAlign: 'middle',
                textTransform: 'capitalize',
                color: '#D1D5DB'
              }}
            >
              delivering end to end •
            </span>
            <span 
              style={{
                fontFamily: 'Urbanist, system-ui, -apple-system, sans-serif',
                fontWeight: 700,
                fontSize: '14px',
                lineHeight: '121%',
                letterSpacing: '0%',
                textAlign: 'center',
                verticalAlign: 'middle',
                textTransform: 'capitalize',
                color: '#FFFFFF'
              }}
            >
              B2B | B2C | SAAS | SPA
            </span>
            <span 
              style={{
                fontFamily: 'Urbanist, system-ui, -apple-system, sans-serif',
                fontWeight: 300,
                fontSize: '14px',
                lineHeight: '121%',
                letterSpacing: '0%',
                textAlign: 'center',
                verticalAlign: 'middle',
                textTransform: 'capitalize',
                color: '#D1D5DB'
              }}
            >
              Products
            </span>
          </div>
        </div>
      </div>
    );
};
  
// Main Hero Content Component
const HeroContent = () => {
    return (
      <div className="relative z-10 flex flex-col items-center"
        style={{
          width: '1140px',
          height: '333px',
          gap: '28px',
          opacity: 1
        }}
      >
        <ProductBadge />
        
        <h1 
          style={{
            width: '907px',
            height: '192px',
            fontFamily: 'Urbanist, system-ui, -apple-system, sans-serif',
            fontWeight: 700,
            fontSize: '54px',
            lineHeight: '150%',
            letterSpacing: '-2%',
            textAlign: 'center',
            verticalAlign: 'middle',
            textTransform: 'capitalize',
            color: '#FFFFFF',
            opacity: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 0
          }}
        >
          We Build a Better Digital Future for Your Business
        </h1>
        
        <p 
          style={{
            width: '566px',
            height: '19px',
            fontFamily: 'Roboto, system-ui, -apple-system, sans-serif',
            fontWeight: 500,
            fontSize: '15px',
            lineHeight: '121%',
            letterSpacing: '0%',
            textAlign: 'center',
            verticalAlign: 'middle',
            textTransform: 'capitalize',
            color: '#D6D6D6',
            opacity: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 0
          }}
        >
          High-performance software, apps, and web platforms. Engineered for impact.
        </p>
        
        <div 
        style={{
          width: '393px',
          height: '50px',
          gap: '25px',
          opacity: 1,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <button 
          style={{
            width: '220px',
            height: '50px',
            paddingTop: '10px',
            paddingRight: '14px',
            paddingBottom: '10px',
            paddingLeft: '14px',
            gap: '8px',
            opacity: 1,
            borderRadius: '32px',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: '#FFFFFF',
            backgroundColor: '#0038A0CC',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
           
        >
          <span
            style={{
              width: '192px',
              height: '30px',
              opacity: 1,
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: '16px',
              fontWeight: '600'
            }}
          >
            Schedule a call Today
          </span>
        </button>
        
        <button 
          style={{
            width: '148px',
            height: '44px',
            paddingTop: '10px',
            paddingRight: '14px',
            paddingBottom: '10px',
            paddingLeft: '14px',
            gap: '8px',
            opacity: 1,
            borderRadius: '32px',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: '#FFFFFF',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.borderColor = '#FFFFFF'}
          onMouseLeave={(e) => e.target.style.borderColor = '#FFFFFF'}
        >
          <span
            style={{
              width: '192px',
              height: '30px',
              opacity: 1,
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: '14px',
              fontWeight: '600'
            }}
          >
            Explore Our Work
          </span>
        </button>
      </div>
      </div>
    );
  };


// Hero Section Component
const HeroSection = () => {
  return (
    <section 
      className="relative bg-black flex items-center justify-center overflow-hidden rounded-[32px]" 
      style={{ 
        width: '1440px',
        height: '530px',
        paddingLeft: '150px',
        paddingRight: '150px',
      }}
    >
      <AnimatedVideoBackground />
      <HeroContent />
    </section>
  );
};

// Trusted By Section 
const TrustedBySection = () => {
    return (
      <section 
        style={{
          width: '1440px',
          height: '166px',
          paddingBottom: '25px',
          gap: '30px',
          opacity: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Trusted By Header */}
        <div
          style={{
            width: '1440px',
            height: '36px',
            opacity: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <h2
            style={{
              fontFamily: 'Urbanist, system-ui, -apple-system, sans-serif',
              fontWeight: 700,
              fontSize: '24px',
              lineHeight: '150%',
              letterSpacing: '-2%',
              textAlign: 'center',
              verticalAlign: 'middle',
              color: '#FFFFFF',
              margin: 0
            }}
          >
            Trusted By
          </h2>
        </div>
 
        <div
          style={{
            width: '1440px',
            height: '50px',
            gap: '120px',
            opacity: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
 
          <div
            style={{
              width: '118.777px',
              height: '27.122px',
              opacity: 1,
              color: '#F0F0F0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              fontWeight: 'bold'
            }}
          >
            ◆ logoipsum
          </div>
  
          <div
            style={{
              width: '123.36px',
              height: '28.49px',
              opacity: 1,
              color: '#F0F0F0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              fontWeight: 'bold'
            }}
          >
            ★ logoipsum
          </div>
  
          <div
            style={{
              width: '100.19px',
              height: '47.654px',
              opacity: 1,
              color: '#F0F0F0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              fontWeight: 'bold'
            }}
          >
            ▲ logoipsum
          </div>
  
          <div
            style={{
              width: '117.677px',
              height: '23.615px',
              opacity: 1,
              color: '#F0F0F0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              fontWeight: 'bold'
            }}
          >
            ● logoipsum
          </div>
  
          <div
            style={{
              width: '126.719px',
              height: '29.541px',
              opacity: 1,
              color: '#F0F0F0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              fontWeight: 'bold'
            }}
          >
            ◉ logoipsum
          </div>
        </div>
      </section>
    );
}


 
const CompleteLandingPage = () => {
  return (
    <div className="bg-black ">
        
      <div className="fixed top-0 left-0 right-0 z-50 ">
        <Navbar />
      </div>
      
      <div className="mx-auto flex flex-col pt-20" style={{
          width: '1440px',
          minHeight: '6081px',
          gap: '58px'
        }}
      >
        {/* Hero Section */}
        <div className="flex-shrink-0">
          <HeroSection />
        </div>

        {/* Trusted By Section */}
        <div className="flex-shrink-0">
          <TrustedBySection />
        </div>

      </div>
    </div>
  );
};


export default CompleteLandingPage;