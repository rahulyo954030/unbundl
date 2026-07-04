import Navbar from './components/layout/Navbar'
import Hero from './components/Hero'
import Footer from './components/layout/Footer'
import Banner from './components/layout/Banner'
import LeadForm from './components/LeadForm'
import ClinicBanner from './components/ClinicBanner'
import BenefitCarousel from './components/BenefitCarousel'
import PricingSection from './components/PricingSection'
import ResultsSection from './components/ResultsSection'
import WhyWhistle from './components/WhyWhistle'
import WhistleDifference from './components/WhistleDifference'
import ComparisonTable from './components/ComparisonTable'
import StepsSection from './components/StepsSection'
import DoctorSection from './components/DoctorSection'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import './styles/App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Hero />
      <LeadForm />
      <ClinicBanner />
      <BenefitCarousel />
      <PricingSection />
      <ResultsSection />
      <WhyWhistle />
      <WhistleDifference />
      <ComparisonTable />
      <StepsSection />
      <DoctorSection />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
