export default function OutcomeMetrics({ metrics }) {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Our Track Record
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Measurable results that demonstrate our commitment to client success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric) => (
            <div key={metric.id} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-yellow-accent-dark mb-3">
                {metric.value}
              </div>
              <div className="text-xl font-bold text-neutral-900 mb-2">
                {metric.label}
              </div>
              <div className="text-sm text-neutral-600">
                {metric.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

