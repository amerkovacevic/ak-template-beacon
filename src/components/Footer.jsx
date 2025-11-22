import { Building2, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="w-6 h-6 text-yellow-accent" />
              <span className="text-xl font-bold text-white">Beacon Consulting</span>
            </div>
            <p className="text-neutral-400 mb-4 leading-relaxed">
              Trusted expertise for consultants, legal, and accounting firms. Delivering measurable results through strategic consulting, legal advisory, and financial planning.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-yellow-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-yellow-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-neutral-400 hover:text-yellow-accent transition-colors">
                  Strategic Consulting
                </a>
              </li>
              <li>
                <a href="#services" className="text-neutral-400 hover:text-yellow-accent transition-colors">
                  Legal Advisory
                </a>
              </li>
              <li>
                <a href="#services" className="text-neutral-400 hover:text-yellow-accent transition-colors">
                  Financial Planning
                </a>
              </li>
              <li>
                <a href="#services" className="text-neutral-400 hover:text-yellow-accent transition-colors">
                  Risk Management
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#resources" className="text-neutral-400 hover:text-yellow-accent transition-colors">
                  One-Pagers
                </a>
              </li>
              <li>
                <a href="#outcomes" className="text-neutral-400 hover:text-yellow-accent transition-colors">
                  Case Outcomes
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-neutral-400 hover:text-yellow-accent transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-yellow-accent flex-shrink-0 mt-0.5" />
                <span className="text-neutral-400">(555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-yellow-accent flex-shrink-0 mt-0.5" />
                <span className="text-neutral-400">info@beaconconsulting.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-accent flex-shrink-0 mt-0.5" />
                <span className="text-neutral-400">123 Business Ave, Suite 100<br />New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-500 text-sm">
              © {new Date().getFullYear()} Beacon Consulting. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-neutral-500 hover:text-yellow-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-neutral-500 hover:text-yellow-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

