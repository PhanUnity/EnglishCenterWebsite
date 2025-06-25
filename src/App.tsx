'use client'

import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ImageCarousel } from './components/ImageCarousel'
import { InformationForm } from './components/InformationForm'
import { Details } from './components/Details'
import { LearningPrograms } from './components/LearningPrograms'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { Gallery } from './components/Gallery'
import { Footer } from './components/Footer'

export default function App() {
  // Smooth scrolling function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  // Add smooth scrolling CSS
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header onNavigate={scrollToSection} />

      {/* Hero Section */}
      <Hero onNavigate={scrollToSection} />

      {/* Body Section with Left Panel (Carousel) and Right Panel (Form) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Panel: Visual storytelling with image carousel */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl font-bold mb-4">Experience Excellence in English Learning</h2>
                <p className="text-lg text-muted-foreground">
                  Discover our dynamic learning environment where students thrive and achieve their language goals.
                </p>
              </div>
              <ImageCarousel />
            </div>

            {/* Right Panel: Information form */}
            <div className="flex justify-center lg:justify-start">
              <InformationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <Details onNavigate={scrollToSection} />

      {/* Learning Programs Section */}
      <LearningPrograms onNavigate={scrollToSection} />

      {/* Pricing Section */}
      <Pricing onNavigate={scrollToSection} />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Gallery Section */>
      <Gallery />

      {/* Footer */}
      <Footer />
    </div>
  )
}