import { CheckCircle } from 'lucide-react'

export default function Hero({ onScheduleClick }) {
  const trustPoints = [
    "25+ Years of Combined Experience",
    "500+ Successful Projects",
    "98% Client Satisfaction Rate",
    "Fortune 500 Trusted Partner",
  ]

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-neutral-50 to-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 text-balance">
            Trusted Expertise for Your Business Success
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 mb-8 text-balance">
            Strategic consulting, legal advisory, and financial planning services that deliver measurable results for consultants, legal, and accounting firms.
          </p>
          
          {/* Trust Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto">
            {trustPoints.map((point, index) => (
              <div key={index} className="flex items-center justify-center md:justify-start space-x-2 text-neutral-700">
                <CheckCircle className="w-5 h-5 text-yellow-accent flex-shrink-0" />
                <span className="font-medium">{point}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const element = document.getElementById('consultation')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="btn-primary text-lg px-8 py-4"
            >
              Schedule Consultation
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('services')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="btn-outline text-lg px-8 py-4"
            >
              Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

