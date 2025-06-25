import { Button } from './ui/button'
import { ImageWithFallback } from './figma/ImageWithFallback'

interface HeroProps {
  onNavigate: (section: string) => void
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Students learning English"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Master English with
          <span className="block text-yellow-400">HP Sample</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Transform your future with our comprehensive English learning programs. 
          From beginner to advanced, we'll help you achieve fluency.
        </p>
        
        {/* CTA Button */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
          <Button
            size="lg"
            className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-4 text-lg"
            onClick={() => onNavigate('contact-form')}
          >
            Start Your Journey Today
          </Button>
        </div>
      </div>
    </section>
  )
}