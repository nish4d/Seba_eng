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

      // Simple state change with CSS transitions
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
    <section className="relative h-screen overflow-hidden bg-gray-900">
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-900 z-50 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-orange-500/30 border-t-orange-500 rounded-full animate-spin" />
        </div>
      )}

      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-out"
            style={{ backgroundImage: `url('${slide.image}')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
              <div
                className={`transition-all duration-1000 delay-300 ${
                  index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 leading-tight text-white drop-shadow-2xl">
                  {slide.title}
                </h1>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight text-orange-400 drop-shadow-xl">
                  {slide.subtitle}
                </h2>
                <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 mb-8 mx-auto max-w-3xl border border-white/10">
                  <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-white/95">{slide.description}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Link href={slide.primaryLink}>
                  <button className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 text-lg font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center">
                    {slide.primaryButton}
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </button>
                  </Link>
                  <a href={slide.secondaryLink} target="_blank" rel="noopener noreferrer">
                  <button className="bg-orange-500/40 hover:bg-orange-500/60 backdrop-blur-sm text-white px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 border border-orange-300/50 flex items-center">
                    <Play className="mr-3 h-5 w-5" />
                    {slide.secondaryButton}
                  </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {isLoaded && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => animateSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-orange-500 scale-125" : "bg-white/30 hover:bg-orange-300/50"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
