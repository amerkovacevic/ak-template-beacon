export default function CaseOutcomes({ caseOutcomes }) {
  return (
    <section id="outcomes" className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Proven Case Outcomes
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Real results from our strategic consulting, legal advisory, and financial planning engagements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseOutcomes.map((outcome) => (
            <div key={outcome.id} className="card-elevated">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-yellow-accent/10 text-yellow-accent-dark text-sm font-semibold rounded-full mb-3">
                  {outcome.category}
                </span>
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">{outcome.title}</h3>
                <p className="text-neutral-600 leading-relaxed mb-6">{outcome.description}</p>
              </div>
              
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-200">
                {Object.entries(outcome.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-bold text-yellow-accent-dark mb-1">{value}</div>
                    <div className="text-xs text-neutral-500 uppercase tracking-wide">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

