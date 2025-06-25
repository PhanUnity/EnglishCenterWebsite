'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export function InformationForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Mock Google Sheets submission
    // In a real implementation, you would send this data to your Google Sheets API
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock successful submission
      console.log('Submitting to Google Sheets:', formData)
      alert('Thank you! Your information has been submitted successfully.')
      
      // Reset form
      setFormData({ name: '', phone: '' })
    } catch (error) {
      alert('There was an error submitting your information. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '') // Remove non-digits
    if (value.length <= 10) {
      setFormData({ ...formData, phone: value })
    }
  }

  return (
    <Card className="w-full max-w-md" id="contact-form">
      <CardHeader>
        <CardTitle>Get Started Today</CardTitle>
        <p className="text-muted-foreground">
          Leave your information and we'll contact you with course details.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              placeholder="Enter your full name"
            />
          </div>
          
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={handlePhoneChange}
              required
              placeholder="Enter 10-digit phone number"
              pattern="[0-9]{10}"
              title="Please enter a 10-digit phone number"
            />
            <p className="text-sm text-muted-foreground mt-1">
              {formData.phone.length}/10 digits
            </p>
          </div>

          <Button 
            type="submit" 
            className="w-full"
            disabled={isSubmitting || formData.phone.length !== 10}
          >
            {isSubmitting ? 'Submitting...' : 'Send Information'}
          </Button>
        </form>
        
        <div className="mt-4 text-sm text-muted-foreground">
          <p>📊 Information will be sent to our Google Sheets database</p>
          <p>🔒 Your information is secure and will not be shared</p>
        </div>
      </CardContent>
    </Card>
  )
}