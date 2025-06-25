'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { Mail, Phone, MapPin } from 'lucide-react'

interface HeaderProps {
  onNavigate: (section: string) => void
}

export function Header({ onNavigate }: HeaderProps) {
  const [isContactOpen, setIsContactOpen] = useState(false)

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock contact form submission
    alert('Thank you for your message! We will get back to you soon.')
    setIsContactOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">HP</span>
          </div>
          <h1 className="text-xl font-semibold text-primary">HP Sample</h1>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-6">
          <Button
            variant="ghost"
            onClick={() => onNavigate('learning-programs')}
            className="hover:text-primary"
          >
            Learning Program
          </Button>
          <Button
            variant="ghost"
            onClick={() => onNavigate('pricing')}
            className="hover:text-primary"
          >
            Pricing
          </Button>
          <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost" className="hover:text-primary">
                Contact
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Contact Us</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                {/* Contact Information */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>info@hpsample.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>123 Learning Street, Education City, EC 12345</span>
                  </div>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="contact-name">Name</Label>
                    <Input id="contact-name" required />
                  </div>
                  <div>
                    <Label htmlFor="contact-email">Email</Label>
                    <Input id="contact-email" type="email" required />
                  </div>
                  <div>
                    <Label htmlFor="contact-message">Message</Label>
                    <Textarea id="contact-message" rows={4} required />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </DialogContent>
          </Dialog>
        </nav>
      </div>
    </header>
  )
}