'use client'

import { useState, useEffect } from 'react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './ui/button'

const carouselImages = [
  {
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Students in classroom",
    tagline: "Interactive Learning Environment"
  },
  {
    src: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "One-on-one tutoring",
    tagline: "Personalized Attention"
  },
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Group discussion",
    tagline: "Collaborative Learning"
  },
  {
    src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Student presentation",
    tagline: "Build Confidence"
  }
]

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-advance functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000) // Advance every 4 seconds

    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? carouselImages.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === carouselImages.length - 1 ? 0 : currentIndex + 1)
  }

  return (
    <div className="relative w-full h-96 rounded-lg overflow-hidden group">
      {/* Current Image */}
      <div className="relative w-full h-full">
        <ImageWithFallback
          src={carouselImages[currentIndex].src}
          alt={carouselImages[currentIndex].alt}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Tagline */}
        <div className="absolute bottom-6 left-6 text-white">
          <h3 className="text-2xl font-semibold">
            {carouselImages[currentIndex].tagline}
          </h3>
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="sm"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={goToPrevious}
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>
      
      <Button
        variant="ghost"
        size="sm"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={goToNext}
      >
        <ChevronRight className="w-5 h-5" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}