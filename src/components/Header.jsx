import { useState } from 'react'
import { Menu, X, Building2 } from 'lucide-react'

export default function Header({ onScheduleClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200 shadow-sm">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Building2 className="w-8 h-8 text-yellow-accent" />
            <span className="text-2xl font-bold text-neutral-900">Beacon Consulting</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-neutral-700 hover:text-yellow-accent transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('outcomes')}
              className="text-neutral-700 hover:text-yellow-accent transition-colors font-medium"
            >
              Case Outcomes
            </button>
            <button
              onClick={() => scrollToSection('resources')}
              className="text-neutral-700 hover:text-yellow-accent transition-colors font-medium"
            >
              Resources
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-neutral-700 hover:text-yellow-accent transition-colors font-medium"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('consultation')}
              className="btn-primary"
            >
              Schedule Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-neutral-900"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-slide-down">
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-neutral-700 hover:text-yellow-accent transition-colors py-2 font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('outcomes')}
              className="block w-full text-left text-neutral-700 hover:text-yellow-accent transition-colors py-2 font-medium"
            >
              Case Outcomes
            </button>
            <button
              onClick={() => scrollToSection('resources')}
              className="block w-full text-left text-neutral-700 hover:text-yellow-accent transition-colors py-2 font-medium"
            >
              Resources
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left text-neutral-700 hover:text-yellow-accent transition-colors py-2 font-medium"
            >
              Testimonials
            </button>
            <button
              onClick={() => {
                scrollToSection('consultation')
                setIsMenuOpen(false)
              }}
              className="btn-primary w-full"
            >
              Schedule Consultation
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}

