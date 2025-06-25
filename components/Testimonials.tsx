import { Card, CardContent } from './ui/card'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Maria Rodriguez',
    role: 'Marketing Manager',
    company: 'Tech Solutions Inc.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rating: 5,
    text: "HP Sample transformed my career! I went from struggling with basic English to confidently presenting to international clients. The personalized attention and practical approach made all the difference."
  },
  {
    name: 'Ahmed Hassan',
    role: 'University Student',
    company: 'Business Administration',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rating: 5,
    text: "The IELTS preparation course was exceptional. I achieved a band score of 8.5 and got accepted to my dream university. The instructors really understand what it takes to succeed."
  },
  {
    name: 'Sarah Chen',
    role: 'Software Developer',
    company: 'Global Tech Corp',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rating: 5,
    text: "Amazing experience! The small class sizes and interactive teaching methods helped me overcome my fear of speaking English. Now I'm confident in meetings and presentations."
  },
  {
    name: 'Robert Johnson',
    role: 'Business Owner',
    company: 'Johnson Consulting',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rating: 5,
    text: "The Business English program gave me the communication skills I needed to expand my business internationally. The ROI has been incredible - I highly recommend HP Sample!"
  },
  {
    name: 'Lisa Park',
    role: 'Nurse',
    company: 'City General Hospital',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rating: 5,
    text: "I needed to improve my English for patient communication. The medical English vocabulary and role-playing exercises were exactly what I needed. Excellent program!"
  },
  {
    name: 'Carlos Mendez',
    role: 'Engineer',
    company: 'Construction Corp',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rating: 5,
    text: "Started as a complete beginner and now I'm fluent enough to lead international projects. The progression through the levels was smooth and well-structured."
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our successful students have to say about their learning journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">2,500+</div>
            <p className="text-muted-foreground">Students Graduated</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <p className="text-muted-foreground">Success Rate</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">15</div>
            <p className="text-muted-foreground">Years Experience</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
            <p className="text-muted-foreground">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  )
}