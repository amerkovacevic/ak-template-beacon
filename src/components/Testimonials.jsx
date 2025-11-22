import { Quote } from 'lucide-react'

export default function Testimonials({ testimonials }) {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Hear from our clients about their experience working with Beacon Consulting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card-elevated">
              <Quote className="w-8 h-8 text-yellow-accent mb-4" />
              <p className="text-neutral-700 text-lg leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-neutral-200 pt-4">
                <div className="font-bold text-neutral-900">{testimonial.author}</div>
                <div className="text-sm text-neutral-600">{testimonial.role}</div>
                <div className="text-sm text-neutral-500">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

