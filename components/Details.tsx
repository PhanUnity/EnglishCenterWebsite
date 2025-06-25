import { ImageWithFallback } from './figma/ImageWithFallback'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { Users, Award, Globe, BookOpen } from 'lucide-react'

interface DetailsProps {
  onNavigate: (section: string) => void
}

export function Details({ onNavigate }: DetailsProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Main Details Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="HP Sample English Center classroom"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">
              Why Choose HP Sample English Center?
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              At HP Sample, we believe that learning English should be an engaging, practical, and transformative experience. 
              Our innovative teaching methods combine traditional language learning with modern technology and real-world applications.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Founded in 2009, we have helped over 2,500 students achieve their English language goals. Whether you're looking 
              to advance your career, pursue higher education, or simply communicate more effectively in English, our experienced 
              instructors and comprehensive programs will guide you every step of the way.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Our state-of-the-art facilities, small class sizes, and personalized attention ensure that each student receives 
              the support they need to succeed. We're not just teaching English; we're opening doors to new opportunities and 
              helping you connect with the global community.
            </p>

            <Button 
              size="lg"
              onClick={() => onNavigate('contact-form')}
              className="bg-primary hover:bg-primary/90"
            >
              Start Your Journey Today
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Small Class Sizes</h3>
              <p className="text-muted-foreground text-sm">
                Maximum 15 students per class ensures personalized attention and active participation for every student.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Certified Instructors</h3>
              <p className="text-muted-foreground text-sm">
                All our teachers are certified professionals with years of experience in ESL education and proven track records.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Global Recognition</h3>
              <p className="text-muted-foreground text-sm">
                Our certificates are internationally recognized and accepted by universities and employers worldwide.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Comprehensive Curriculum</h3>
              <p className="text-muted-foreground text-sm">
                From basic grammar to advanced business English, our curriculum covers all aspects of language learning.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-primary/5 rounded-lg p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your English Skills?</h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of successful students who have achieved their dreams through our comprehensive English programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => onNavigate('contact-form')}
                className="bg-primary hover:bg-primary/90"
              >
                Enroll Now
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => onNavigate('learning-programs')}
              >
                View All Programs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}