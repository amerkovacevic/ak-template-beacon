export default function ClientLogos({ clientLogos }) {
  return (
    <section className="py-12 md:py-16 bg-neutral-50 border-y border-neutral-200">
      <div className="container-custom">
        <div className="text-center mb-8">
          <p className="text-sm uppercase tracking-wider text-neutral-500 font-semibold mb-2">
            Trusted By Industry Leaders
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {clientLogos.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center p-4 bg-white rounded-lg border border-neutral-200 hover:border-yellow-accent transition-colors"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-neutral-400 mb-1">
                  {client.initials}
                </div>
                <div className="text-xs text-neutral-500 font-medium">
                  {client.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

