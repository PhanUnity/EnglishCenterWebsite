import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Clock, Users, BookOpen, Award } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

const programs = [
  {
    id: 'beginner',
    title: 'Beginner English',
    level: 'Beginner',
    duration: '3 months',
    students: '12-15',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Perfect for students starting their English journey. Learn basic grammar, vocabulary, and conversation skills.',
    features: [
      'Basic grammar fundamentals',
      'Essential vocabulary (500+ words)',
      'Simple conversation practice',
      'Reading and writing basics',
      'Pronunciation training'
    ],
    price: '$199'
  },
  {
    id: 'intermediate',
    title: 'Intermediate English',
    level: 'Intermediate',
    duration: '4 months',
    students: '10-12',
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Build on your existing knowledge with more complex grammar, expanded vocabulary, and fluent conversation.',
    features: [
      'Advanced grammar structures',
      'Vocabulary expansion (1000+ words)',
      'Fluent conversation practice',
      'Business English basics',
      'Writing improvement'
    ],
    price: '$299'
  },
  {
    id: 'advanced',
    title: 'Advanced English',
    level: 'Advanced',
    duration: '6 months',
    students: '8-10',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Master advanced English skills for academic and professional success. Prepare for international exams.',
    features: [
      'Complex grammar mastery',
      'Academic & professional vocabulary',
      'IELTS/TOEFL preparation',
      'Advanced writing skills',
      'Public speaking & presentations'
    ],
    price: '$499'
  },
  {
    id: 'business',
    title: 'Business English',
    level: 'Professional',
    duration: '3 months',
    students: '6-8',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Specialized program for professionals looking to enhance their business communication skills.',
    features: [
      'Business correspondence',
      'Meeting & presentation skills',
      'Negotiation techniques',
      'Industry-specific vocabulary',
      'Professional networking'
    ],
    price: '$399'
  }
]

interface LearningProgramsProps {
  onNavigate: (section: string) => void
}

export function LearningPrograms({ onNavigate }: LearningProgramsProps) {
  return (
    <section id="learning-programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Learning Programs</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our comprehensive range of English courses designed to meet your specific needs and goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {programs.map((program) => (
            <Card key={program.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <ImageWithFallback
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">{program.level}</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-white">{program.price}</Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {program.title}
                </CardTitle>
                <p className="text-muted-foreground">{program.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Course Info */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {program.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {program.students} students
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    What You'll Learn:
                  </h4>
                  <ul className="space-y-1 text-sm">
                    {program.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                    {program.features.length > 3 && (
                      <li className="text-muted-foreground">
                        +{program.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                <Button 
                  className="w-full"
                  onClick={() => onNavigate('contact-form')}
                >
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}