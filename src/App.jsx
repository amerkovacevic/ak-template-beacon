import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import CaseOutcomes from './components/CaseOutcomes'
import OnePagers from './components/OnePagers'
import ClientLogos from './components/ClientLogos'
import Testimonials from './components/Testimonials'
import OutcomeMetrics from './components/OutcomeMetrics'
import ScheduleConsultation from './components/ScheduleConsultation'
import Footer from './components/Footer'
import {
  services,
  caseOutcomes,
  testimonials,
  outcomeMetrics,
  clientLogos,
  onePagers,
} from './data'

function App() {
  const handleScheduleClick = () => {
    const element = document.getElementById('consultation')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header onScheduleClick={handleScheduleClick} />
      <Hero onScheduleClick={handleScheduleClick} />
      <OutcomeMetrics metrics={outcomeMetrics} />
      <Services services={services} />
      <CaseOutcomes caseOutcomes={caseOutcomes} />
      <ClientLogos clientLogos={clientLogos} />
      <Testimonials testimonials={testimonials} />
      <OnePagers onePagers={onePagers} />
      <ScheduleConsultation />
      <Footer />
    </div>
  )
}

export default App

