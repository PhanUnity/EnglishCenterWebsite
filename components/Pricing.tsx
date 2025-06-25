import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Check, Star } from 'lucide-react'

const pricingPlans = [
  {
    name: 'Basic',
    price: '$99',
    period: 'per month',
    description: 'Perfect for beginners starting their English journey',
    features: [
      '4 group classes per week',
      'Basic learning materials',
      'Progress tracking',
      'Community forum access',
      'Email support'
    ],
    popular: false,
    buttonText: 'Get Started'
  },
  {
    name: 'Premium',
    price: '$199',
    period: 'per month',
    description: 'Most popular choice for serious learners',
    features: [
      '6 group classes per week',
      '2 one-on-one sessions',
      'All learning materials',
      'Progress tracking & analytics',
      'Priority support',
      'Certificate upon completion',
      'Job placement assistance'
    ],
    popular: true,
    buttonText: 'Most Popular'
  },
  {
    name: 'Professional',
    price: '$299',
    period: 'per month',
    description: 'Comprehensive program for business professionals',
    features: [
      'Unlimited group classes',
      '4 one-on-one sessions',
      'Business English materials',
      'Industry-specific training',
      'Mock interviews',
      'Networking events',
      'Lifetime access to materials',
      '24/7 support'
    ],
    popular: false,
    buttonText: 'Go Professional'
  }
]

interface PricingProps {
  onNavigate: (section: string) => void
}

export function Pricing({ onNavigate }: PricingProps) {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Choose Your Learning Plan</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Flexible pricing options to fit your budget and learning goals. All plans include our satisfaction guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`relative overflow-hidden transition-all hover:shadow-lg ${
                plan.popular ? 'border-primary shadow-lg scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-white text-center py-2">
                  <Badge className="bg-yellow-400 text-black">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className={plan.popular ? 'pt-12' : ''}>
                <CardTitle className="text-2xl text-center">{plan.name}</CardTitle>
                <div className="text-center">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
                <p className="text-center text-muted-foreground">
                  {plan.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-primary hover:bg-primary/90' 
                      : 'variant-outline'
                  }`}
                  onClick={() => onNavigate('contact-form')}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6">All Plans Include:</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Money-Back Guarantee</h4>
                <p className="text-sm text-muted-foreground text-center">
                  30-day satisfaction guarantee on all plans
                </p>
              </div>
              
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Certified Teachers</h4>
                <p className="text-sm text-muted-foreground text-center">
                  Learn from experienced, certified English instructors
                </p>
              </div>
              
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Flexible Schedule</h4>
                <p className="text-sm text-muted-foreground text-center">
                  Classes available 7 days a week, morning to evening
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}