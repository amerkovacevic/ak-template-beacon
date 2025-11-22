import { Download, FileText } from 'lucide-react'

export default function OnePagers({ onePagers }) {
  const handleDownload = (filename) => {
    // In a real application, this would download the actual PDF file
    // For now, we'll create a placeholder PDF download
    const link = document.createElement('a')
    link.href = `#${filename}` // Placeholder - would be actual PDF path
    link.download = filename
    link.click()
    
    // Show a message (in production, this would be handled by actual file download)
    alert(`Downloading ${filename}\n\nNote: This is a demo. In production, this would download the actual PDF file.`)
  }

  return (
    <section id="resources" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Downloadable Resources
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Access our comprehensive one-pagers to learn more about our services and methodologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {onePagers.map((pager) => (
            <div key={pager.id} className="card group hover:border-yellow-accent transition-all">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-accent/20 transition-colors">
                  <FileText className="w-6 h-6 text-yellow-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{pager.title}</h3>
                  <p className="text-neutral-600 mb-4 leading-relaxed">{pager.description}</p>
                  <button
                    onClick={() => handleDownload(pager.filename)}
                    className="flex items-center space-x-2 text-yellow-accent-dark hover:text-yellow-accent font-semibold transition-colors"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download PDF</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

