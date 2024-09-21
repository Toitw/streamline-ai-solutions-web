import { useState, useEffect, useRef, useMemo } from 'react'
import { Button } from "./components/ui/button.tsx"
import { Input } from "./components/ui/input.tsx"
import { Textarea } from "./components/ui/textarea.tsx"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "./components/ui/accordion.tsx"
import { AlignJustify, X, ChevronRight, Zap, BarChart, Cog, Star, MessageCircle, ChevronLeft, ChevronUp } from 'lucide-react'

// Add translations
const translations = {
  es: {
    services: "Servicios",
    whyUs: "Por qué nosotros",
    testimonials: "Testimonios",
    faq: "Preguntas frecuentes",
    contact: "Contacto",
    heroTitle: "Acelere su negocio con IA",
    heroSubtitle: "Streamline AI Solutions ayuda a las empresas a optimizar, automatizar y acelerar sus procesos a través de herramientas de IA personalizadas.",
    getStarted: "Comenzar",
    learnMore: "Aprende más",
    ourServices: "Nuestros Servicios",
    customAISolutions: "Soluciones de IA Personalizadas",
    customAIDescription: "Desarrollamos herramientas de IA adaptadas a sus necesidades específicas de negocio.",
    dataAnalytics: "Análisis de Datos",
    dataAnalyticsDescription: "Transformamos sus datos en información procesable para tomar decisiones informadas.",
    processAutomation: "Automatización de Procesos",
    processAutomationDescription: "Optimizamos sus flujos de trabajo con soluciones de IA para aumentar la eficiencia.",
    whyChooseUs: "Por qué elegirnos",
    expertise: "Experiencia",
    expertiseDescription: "Nuestro equipo tiene años de experiencia en IA y aprendizaje automático.",
    customization: "Personalización",
    customizationDescription: "Creamos soluciones a medida que se adaptan perfectamente a su negocio.",
    support: "Soporte",
    supportDescription: "Ofrecemos soporte continuo y mantenimiento para todas nuestras soluciones.",
    ourStats: "Nuestras Estadísticas",
    clientsServed: "Clientes Atendidos",
    projectsCompleted: "Proyectos Completados",
    dataPointsProcessed: "Puntos de Datos Procesados",
    accuracyRate: "Tasa de Precisión",
    switchToEnglish: "Switch to English",
    yourName: "Su Nombre",
    yourEmail: "Su Correo Electrónico",
    companyName: "Nombre de la Empresa",
    howCanWeHelp: "¿Cómo podemos ayudarle?",
    sendMessage: "Enviar Mensaje",
    address: "123 Calle IA, Ciudad Tecnológica, 12345",
    phone: "+1 (555) 123-4567",
    followUs: "Síguenos",
    allRightsReserved: "Todos los derechos reservados.",
    contactUs: "Contáctenos"
  },
  en: {
    services: "Services",
    whyUs: "Why Us",
    testimonials: "Testimonials",
    faq: "FAQ",
    contact: "Contact",
    heroTitle: "Accelerate Your Business with AI",
    heroSubtitle: "Streamline AI Solutions helps businesses optimize, automate, and accelerate their processes through personalized AI tools.",
    getStarted: "Get Started",
    learnMore: "Learn More",
    ourServices: "Our Services",
    customAISolutions: "Custom AI Solutions",
    customAIDescription: "We develop AI tools tailored to your specific business needs.",
    dataAnalytics: "Data Analytics",
    dataAnalyticsDescription: "We transform your data into actionable insights for informed decision-making.",
    processAutomation: "Process Automation",
    processAutomationDescription: "We optimize your workflows with AI solutions to increase efficiency.",
    whyChooseUs: "Why Choose Us",
    expertise: "Expertise",
    expertiseDescription: "Our team has years of experience in AI and machine learning.",
    customization: "Customization",
    customizationDescription: "We create tailor-made solutions that fit your business perfectly.",
    support: "Support",
    supportDescription: "We offer ongoing support and maintenance for all our solutions.",
    ourStats: "Our Stats",
    clientsServed: "Clients Served",
    projectsCompleted: "Projects Completed",
    dataPointsProcessed: "Data Points Processed",
    accuracyRate: "Accuracy Rate",
    switchToSpanish: "Cambiar a Español",
    yourName: "Your Name",
    yourEmail: "Your Email",
    companyName: "Company Name",
    howCanWeHelp: "How can we help you?",
    sendMessage: "Send Message",
    address: "123 AI Street, Tech City, 12345",
    phone: "+1 (555) 123-4567",
    followUs: "Follow Us",
    allRightsReserved: "All rights reserved.",
    contactUs: "Contact Us"
  }
}

export default function StreamlineAISolutions() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const statsRef = useRef<HTMLElement>(null)
  const [statsVisible, setStatsVisible] = useState(false)
  const [language, setLanguage] = useState('es')

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, target: string) => {
    e.preventDefault()
    const element = document.querySelector(target)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
      
      if (statsRef.current) {
        const rect = statsRef.current.getBoundingClientRect()
        setStatsVisible(rect.top < window.innerHeight && rect.bottom >= 0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const testimonials = [
    {
      text: "Streamline AI Solutions transformed our business processes. Their tailored AI solutions helped us achieve unprecedented efficiency and growth.",
      author: "John Doe, CEO of TechCorp"
    },
    {
      text: "The team at Streamline AI Solutions is exceptional. Their expertise in AI and commitment to our success made all the difference.",
      author: "Jane Smith, CTO of InnovateCo"
    },
    {
      text: "Implementing Streamline AI's solutions resulted in a 40% increase in our operational efficiency. Highly recommended!",
      author: "Mike Johnson, COO of FutureTech"
    }
  ]

  const AnimatedCounter = ({ end, duration }: { end: number, duration: number }) => {
    const [count, setCount] = useState(0)
    
    useEffect(() => {
      if (statsVisible) {
        let start = 0
        const increment = end / (duration / 16)
        const timer = setInterval(() => {
          start += increment
          setCount(Math.floor(start))
          if (start >= end) {
            clearInterval(timer)
            setCount(end)
          }
        }, 16)
        return () => clearInterval(timer)
      }
    }, [end, duration, statsVisible])
    
    return <span>{count}</span>
  }

  const t = translations[language]

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'es' ? 'en' : 'es')
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Add form submission logic here
    console.log("Form submitted")
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <header className="bg-white shadow-sm fixed w-full z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Zap className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">Streamline AI Solutions</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#services" onClick={(e) => smoothScroll(e, '#services')} className="text-gray-600 hover:text-blue-600 transition-colors">{t.services}</a>
            <a href="#why-us" onClick={(e) => smoothScroll(e, '#why-us')} className="text-gray-600 hover:text-blue-600 transition-colors">{t.whyUs}</a>
            <a href="#testimonials" onClick={(e) => smoothScroll(e, '#testimonials')} className="text-gray-600 hover:text-blue-600 transition-colors">{t.testimonials}</a>
            <a href="#faq" onClick={(e) => smoothScroll(e, '#faq')} className="text-gray-600 hover:text-blue-600 transition-colors">{t.faq}</a>
            <a href="#contact" onClick={(e) => smoothScroll(e, '#contact')} className="text-gray-600 hover:text-blue-600 transition-colors">{t.contact}</a>
            <button onClick={toggleLanguage} className="text-blue-600 hover:text-blue-800 transition-colors">
              {language === 'es' ? 'EN' : 'ES'}
            </button>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <AlignJustify className="h-6 w-6" />}
          </Button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-white py-4 px-4">
            <div className="flex flex-col space-y-4">
              <a href="#services" onClick={(e) => smoothScroll(e, '#services')} className="text-gray-600 hover:text-blue-600 transition-colors">{t.services}</a>
              <a href="#why-us" onClick={(e) => smoothScroll(e, '#why-us')} className="text-gray-600 hover:text-blue-600 transition-colors">{t.whyUs}</a>
              <a href="#testimonials" onClick={(e) => smoothScroll(e, '#testimonials')} className="text-gray-600 hover:text-blue-600 transition-colors">{t.testimonials}</a>
              <a href="#faq" onClick={(e) => smoothScroll(e, '#faq')} className="text-gray-600 hover:text-blue-600 transition-colors">{t.faq}</a>
              <a href="#contact" onClick={(e) => smoothScroll(e, '#contact')} className="text-gray-600 hover:text-blue-600 transition-colors">{t.contact}</a>
              <button onClick={toggleLanguage} className="text-blue-600 hover:text-blue-800 transition-colors">
                {language === 'es' ? t.switchToEnglish : t.switchToSpanish}
              </button>
            </div>
          </nav>
        )}
      </header>

      <main className="flex-grow pt-16">
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">{t.heroTitle}</h1>
            <p className="text-xl mb-8 animate-fade-in-up animation-delay-200">{t.heroSubtitle}</p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 animate-fade-in-up animation-delay-400">{t.getStarted}</Button>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">{t.ourServices}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                <BarChart className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t.customAISolutions}</h3>
                <p className="text-gray-600">{t.customAIDescription}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                <Cog className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t.dataAnalytics}</h3>
                <p className="text-gray-600">{t.dataAnalyticsDescription}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                <Zap className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t.processAutomation}</h3>
                <p className="text-gray-600">{t.processAutomationDescription}</p>
              </div>
            </div>
          </div>
        </section>

        <section ref={statsRef} className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">{t.ourStats}</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <h3 className="text-4xl font-bold mb-2">
                  <AnimatedCounter end={500} duration={2000} />+
                </h3>
                <p>{t.clientsServed}</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">
                  <AnimatedCounter end={1000} duration={2000} />+
                </h3>
                <p>{t.projectsCompleted}</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">
                  <AnimatedCounter end={1000000} duration={2000} />+
                </h3>
                <p>{t.dataPointsProcessed}</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">
                  <AnimatedCounter end={99} duration={2000} />%
                </h3>
                <p>{t.accuracyRate}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="why-us" className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">{t.whyChooseUs}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4 transform transition duration-500 hover:scale-105">
                <ChevronRight className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t.expertise}</h3>
                  <p className="text-gray-600">{t.expertiseDescription}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 transform transition duration-500 hover:scale-105">
                <ChevronRight className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t.customization}</h3>
                  <p className="text-gray-600">{t.customizationDescription}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 transform transition duration-500 hover:scale-105">
                <ChevronRight className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t.support}</h3>
                  <p className="text-gray-600">{t.supportDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">{t.testimonials}</h2>
            <div className="relative">
              <div className="overflow-hidden">
                <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}>
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
                        <div className="flex items-center mb-4">
                          <Star className="w-5 h-5 text-yellow-400" />
                          <Star className="w-5 h-5 text-yellow-400" />
                          <Star className="w-5 h-5 text-yellow-400" />
                          <Star className="w-5 h-5 text-yellow-400" />
                          <Star className="w-5 h-5 text-yellow-400" />
                        </div>
                        <p className="text-gray-600 mb-4">{testimonial.text}</p>
                        <p className="font-semibold">- {testimonial.author}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
                onClick={() => setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-blue-600" />
              </button>
              <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
                onClick={() => setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-blue-600" />
              </button>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">{t.faq}</h2>
            <Accordion type="single" collapsible className="max-w-2xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>What industries do you serve?</AccordionTrigger>
                <AccordionContent>
                  We serve a wide range of industries including finance, healthcare, retail, manufacturing, and more. Our AI solutions are adaptable to various business needs across different sectors.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How long does it take to implement an AI solution?</AccordionTrigger>
                <AccordionContent>
                  The implementation time varies depending on the complexity of the solution and your specific needs. Typically, our projects range from a few weeks for simpler solutions to several months for more comprehensive implementations.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What kind of support do you offer after implementation?</AccordionTrigger>
                <AccordionContent>
                  We offer ongoing support and maintenance for all our AI solutions. This includes regular updates, performance monitoring, and technical support to ensure your AI tools continue to deliver value over time.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How do you ensure data security and privacy?</AccordionTrigger>
                <AccordionContent>
                  We take data security and privacy very seriously. We implement industry-standard encryption, access controls, and compliance measures to protect your data. We also work closely with our clients to ensure our solutions meet their specific security requirements and comply with relevant regulations.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">{t.contact}</h2>
            <div className="max-w-lg mx-auto">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <Input type="text" placeholder={t.yourName} required />
                <Input type="email" placeholder={t.yourEmail} required />
                <Input type="text" placeholder={t.companyName} />
                <Textarea placeholder={t.howCanWeHelp} required />
                <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">{t.sendMessage}</Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Streamline AI Solutions</h3>
              <p className="text-gray-400">{t.heroSubtitle}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">{t.contact}</h3>
              <p className="text-gray-400">{t.address}</p>
              <p className="text-gray-400">contact@streamlineai.com</p>
              <p className="text-gray-400">{t.phone}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">{t.followUs}</h3>
              <div className="flex space-x-4">
                <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2023 Streamline AI Solutions. {t.allRightsReserved}</p>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <button
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 hover:bg-blue-700"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}

      <div className="fixed bottom-8 left-8">
        <Button
          size="lg"
          className="bg-blue-600 text-white hover:bg-blue-700 rounded-full shadow-lg"
          onClick={() => {
            const contactSection = document.getElementById('contact')
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' })
            }
          }}
        >
          <MessageCircle className="w-6 h-6 mr-2" />
          {t.contactUs}
        </Button>
      </div>
    </div>
  )
}