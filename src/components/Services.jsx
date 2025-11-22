import { Briefcase, Scale, Calculator, Shield, FileCheck, TrendingUp } from 'lucide-react'

const iconMap = {
  Briefcase,
  Scale,
  Calculator,
  Shield,
  FileCheck,
  TrendingUp,
}

export default function Services({ services }) {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to meet the unique needs of consultants, legal, and accounting firms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon]
            return (
              <div key={service.id} className="card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-yellow-accent/10 rounded-lg flex items-center justify-center mr-4">
                    {Icon && <Icon className="w-6 h-6 text-yellow-accent" />}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900">{service.title}</h3>
                </div>
                <p className="text-neutral-600 leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

