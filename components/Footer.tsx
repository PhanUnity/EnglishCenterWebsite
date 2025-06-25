import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Clock } from 'lucide-react'

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/hpsample', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/hpsample', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/hpsample', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/hpsample', label: 'YouTube' }
  ]

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold">HP</span>
              </div>
              <h3 className="text-xl font-semibold">HP Sample</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering students to achieve English fluency through innovative teaching methods 
              and personalized learning experiences since 2009.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-yellow-400" />
                <a href="tel:+15551234567" className="hover:text-yellow-400 transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-yellow-400" />
                <a href="mailto:info@hpsample.com" className="hover:text-yellow-400 transition-colors">
                  info@hpsample.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-yellow-400 mt-0.5" />
                <address className="not-italic text-gray-400">
                  123 Learning Street<br />
                  Education City, EC 12345
                </address>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Operating Hours</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-yellow-400" />
                <span>Monday - Friday</span>
              </div>
              <p className="ml-7">8:00 AM - 9:00 PM</p>
              
              <div className="flex items-center gap-3 mt-3">
                <Clock className="w-4 h-4 text-yellow-400" />
                <span>Saturday - Sunday</span>
              </div>
              <p className="ml-7">9:00 AM - 6:00 PM</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <a href="#learning-programs" className="block text-gray-400 hover:text-yellow-400 transition-colors">
                Learning Programs
              </a>
              <a href="#pricing" className="block text-gray-400 hover:text-yellow-400 transition-colors">
                Pricing
              </a>
              <a href="#testimonials" className="block text-gray-400 hover:text-yellow-400 transition-colors">
                Testimonials
              </a>
              <a href="#gallery" className="block text-gray-400 hover:text-yellow-400 transition-colors">
                Gallery
              </a>
              <a href="#" className="block text-gray-400 hover:text-yellow-400 transition-colors">
                About Us
              </a>
              <a href="#" className="block text-gray-400 hover:text-yellow-400 transition-colors">
                Blog
              </a>
            </nav>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">Follow us:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-400 text-center md:text-right">
              <p>&copy; 2025 HP Sample English Center. All rights reserved.</p>
              <p className="mt-1">
                <a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
                {' • '}
                <a href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}