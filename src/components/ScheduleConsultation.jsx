import { useState } from 'react'
import { Calendar, Mail, Phone, Send } from 'lucide-react'

export default function ScheduleConsultation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      })
      
      // Reset status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    }, 1000)
  }

  return (
    <section id="consultation" className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Schedule Your Consultation
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Get in touch with our team to discuss how we can help your business achieve its goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="card">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-yellow-accent/10 rounded-lg flex items-center justify-center mr-3">
                    <Phone className="w-5 h-5 text-yellow-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900">Phone</div>
                    <div className="text-sm text-neutral-600">(555) 123-4567</div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-yellow-accent/10 rounded-lg flex items-center justify-center mr-3">
                    <Mail className="w-5 h-5 text-yellow-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900">Email</div>
                    <div className="text-sm text-neutral-600">info@beaconconsulting.com</div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-yellow-accent/10 rounded-lg flex items-center justify-center mr-3">
                    <Calendar className="w-5 h-5 text-yellow-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900">Office Hours</div>
                    <div className="text-sm text-neutral-600">Mon-Fri: 9am-6pm EST</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="card-elevated">
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-medium">
                      Thank you! Your consultation request has been submitted. We'll be in touch shortly.
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-neutral-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:ring-2 focus:ring-yellow-accent focus:border-yellow-accent outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-neutral-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:ring-2 focus:ring-yellow-accent focus:border-yellow-accent outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-neutral-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:ring-2 focus:ring-yellow-accent focus:border-yellow-accent outline-none transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-neutral-900 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:ring-2 focus:ring-yellow-accent focus:border-yellow-accent outline-none transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="service" className="block text-sm font-semibold text-neutral-900 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:ring-2 focus:ring-yellow-accent focus:border-yellow-accent outline-none transition-colors text-neutral-900"
                  >
                    <option value="">Select a service...</option>
                    <option value="strategic-consulting">Strategic Consulting</option>
                    <option value="legal-advisory">Legal Advisory</option>
                    <option value="financial-planning">Financial Planning</option>
                    <option value="risk-management">Risk Management</option>
                    <option value="compliance-audit">Compliance & Audit</option>
                    <option value="business-transformation">Business Transformation</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-semibold text-neutral-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:ring-2 focus:ring-yellow-accent focus:border-yellow-accent outline-none transition-colors resize-none"
                    placeholder="Tell us about your needs and how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center space-x-2 text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-neutral-900 border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Submit Request</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

