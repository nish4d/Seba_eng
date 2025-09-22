"use client"

import { ArrowRight, Play } from "lucide-react"
import { useEffect, useRef, useState, useCallback } from "react"
import Link from "next/link"

const heroSlides = [
  {
    id: 1,
    title: "Building Tomorrow's",
    subtitle: "Infrastructure Today",
    description:
      "Leading engineering and construction company delivering innovative solutions for commercial, residential, and infrastructure projects with unmatched quality and expertise.",
    image: "/images/construction-hero.jpg",
    primaryButton: "View Our Projects",
    secondaryButton: "Watch Our Story",
    primaryLink: "/projects",
    secondaryLink: "https://youtube.com/yourvideo",
  },
  {
    id: 2,
    title: "Engineering Excellence",
    subtitle: "Since 1995",
    description:
      "With over 25 years of experience, we've completed 500+ projects across residential, commercial, and industrial sectors, setting new standards in construction quality.",
    image: "/images/construction-hero.jpg",
    primaryButton: "Our Experience",
    secondaryButton: "Project Gallery",
    primaryLink: "/media-gallery",
    secondaryLink: "https://youtube.com/yourvideo",
  },
  {
    id: 3,
    title: "Sustainable Solutions",
    subtitle: "Green Building",
    description:
      "Committed to environmental responsibility, we integrate sustainable practices and green technologies in every project, building for a better tomorrow.",
    image: "/images/construction-hero.jpg",
    primaryButton: "Green Projects",
    secondaryButton: "Learn More",
    primaryLink: "/products",
    secondaryLink: "https://youtube.com/yourvideo",
  },
  {
    id: 4,
    title: "Innovation Meets",
    subtitle: "Craftsmanship",
    description:
      "Combining cutting-edge technology with traditional craftsmanship, we deliver projects that exceed expectations and stand the test of time.",
    image: "/images/construction-hero.jpg",
    primaryButton: "Our Services",
    secondaryButton: "Contact Us",
    primaryLink: "/our-services",
    secondaryLink: "https://youtube.com/yourvideo",
  },
]

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const autoPlayRef = useRef<NodeJS.Timeout>()
  const isAnimatingRef = useRef(false)

  const animateSlide = useCallback(
    (index: number) => {
      if (isAnimatingRef.current || index === currentSlide) return
      isAnimatingRef.current = true

      setTimeout(() => {
        setCurrentSlide(index)
        isAnimatingRef.current = false
      }, 100)
    },
    [currentSlide],
  )

  const nextSlide = useCallback(() => {
    const next = (currentSlide + 1) % heroSlides.length
    animateSlide(next)
  }, [currentSlide, animateSlide])

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearTimeout(autoPlayRef.current)
    autoPlayRef.current = setTimeout(nextSlide, 6000)
  }, [nextSlide])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
      startAutoPlay()
    }, 200)

    return () => {
      clearTimeout(timer)
      if (autoPlayRef.current) clearTimeout(autoPlayRef.current)
    }
  }, [startAutoPlay])

  useEffect(() => {
    if (isLoaded) {
      startAutoPlay()
    }
  }, [currentSlide, startAutoPlay, isLoaded])

  return (
    <>
      {/* Import Google Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Oswald:wght@200;300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        .hero-title {
          font-family: 'Oswald', sans-serif;
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 0.85;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.8), 0 2px 10px rgba(0, 0, 0, 0.9);
        }
        
        .hero-subtitle {
          font-family: 'Playfair Display', serif;
          font-weight: 400;
          font-style: italic;
          letter-spacing: 0.01em;
          line-height: 1.1;
          text-shadow: 0 2px 15px rgba(255, 165, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.7);
        }
        
        .hero-description {
          font-family: 'Inter', sans-serif;
          font-weight: 300;
          letter-spacing: 0.005em;
          line-height: 1.6;
        }
        
        .hero-button-primary {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        
        .hero-button-secondary {
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          letter-spacing: 0.3px;
        }

        .text-stroke {
          -webkit-text-stroke: 2px rgba(255, 255, 255, 0.1);
        }

        .gradient-text {
          background: linear-gradient(135deg, #f59e0b, #f97316, #ea580c);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-glow {
          position: relative;
        }
        
        .hero-glow::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(251, 146, 60, 0.15) 0%, transparent 70%);
          animation: pulse 4s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }

        .floating-animation {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .slide-up {
          animation: slideUp 0.8s ease-out;
        }

        @keyframes slideUp {
          from { 
            opacity: 0; 
            transform: translateY(50px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
      `}</style>

      <section className="relative h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        {!isLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black z-50 flex items-center justify-center">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-orange-500/20 border-t-orange-500 rounded-full animate-spin" />
              <div className="absolute top-2 left-2 w-12 h-12 border-4 border-orange-300/30 border-b-orange-300 rounded-full animate-spin animate-reverse" />
            </div>
          </div>
        )}

        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1500 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-105"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[2000ms] ease-out"
              style={{ 
                backgroundImage: `url('${slide.image}')`,
                transform: index === currentSlide ? 'scale(1)' : 'scale(1.1)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                <div
                  className={`transition-all duration-1200 delay-300 hero-glow ${
                    index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                  }`}
                >
                  {/* Main Title */}
                  <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl xl:text-[6rem] mb-3 text-white relative floating-animation">
                    <span className="relative inline-block">
                      {slide.title}
                      <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/200 to-transparent rounded-lg blur-lg opacity-40"></div>
                    </span>
                  </h1>

                  {/* Subtitle */}
                  <h2 className="hero-subtitle text-2xl md:text-3xl lg:text-4xl xl:text-5xl xl:mb-12 xl:mt-12 relative">
                    <span className="relative inline-block text-slate-400">
                      {slide.subtitle}
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full opacity-60"></div>
                    </span>
                  </h2>

                  {/* Description */}
                  <div className="relative mb-10">
                    <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 md:p-7 mx-auto max-w-3xl border border-white/10 shadow-xl">
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5 rounded-2xl"></div>
                      <p className="hero-description text-base md:text-lg lg:text-xl text-white/90 relative z-10">
                        {slide.description}
                      </p>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                    <Link href={slide.primaryLink}>
                      <button className="hero-button-primary group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3.5 text-base rounded-full transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25 flex items-center overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        <span className="relative z-10">{slide.primaryButton}</span>
                        <ArrowRight className="ml-2 h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </Link>
                    
                    <a href={slide.secondaryLink} target="_blank" rel="noopener noreferrer">
                      <button className="hero-button-secondary group relative bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-3.5 text-base rounded-full transition-all duration-500 hover:scale-105 border-2 border-white/20 hover:border-white/40 flex items-center overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/20 to-orange-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        <Play className="mr-2 h-5 w-5 relative z-10 transition-transform duration-300 group-hover:scale-110" />
                        <span className="relative z-10">{slide.secondaryButton}</span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Enhanced Dots Navigation */}
        {isLoaded && (
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
            <div className="flex space-x-4 bg-black/30 backdrop-blur-md rounded-full p-3 border border-white/10">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => animateSlide(index)}
                  className={`relative w-4 h-4 rounded-full transition-all duration-500 ${
                    index === currentSlide 
                      ? "bg-gradient-to-r from-orange-400 to-orange-500 scale-125 shadow-lg shadow-orange-500/50" 
                      : "bg-white/30 hover:bg-white/50 hover:scale-110"
                  }`}
                >
                  {index === currentSlide && (
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-2 h-32 bg-gradient-to-b from-orange-500/50 to-transparent rounded-full opacity-60"></div>
        <div className="absolute bottom-20 right-10 w-2 h-32 bg-gradient-to-t from-orange-500/50 to-transparent rounded-full opacity-60"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-orange-400/30 rounded-full animate-pulse"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${3 + i * 0.5}s`
              }}
            ></div>
          ))}
        </div>
      </section>
    </>
  )
}