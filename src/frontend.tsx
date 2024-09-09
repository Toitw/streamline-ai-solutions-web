import React, { useState } from 'react'
import { Button } from "./components/ui/button.tsx"
import { Input } from "./components/ui/input.tsx"
import { Textarea } from "./components/ui/textarea.tsx"
import { AlignJustify, X, ChevronRight, Zap, BarChart, Cog, Star } from 'lucide-react'
import axios from 'axios';

// Add translations
const translations = {
  en: {
    title: "Streamline AI Solutions",
    tagline: "Accelerate Your Business with AI",
    description: "Streamline AI Solutions helps businesses optimize, automate, and accelerate their processes through personalized AI tools.",
    getStarted: "Get Started",
    services: "Services",
    whyUs: "Why Us",
    testimonials: "Testimonials",
    contact: "Contact",
    ourServices: "Our Services",
    processOptimization: "Process Optimization",
    processOptimizationDesc: "Streamline your business processes with cutting-edge AI solutions tailored to your needs.",
    automationSolutions: "Automation Solutions",
    automationSolutionsDesc: "Implement intelligent automation to reduce manual tasks and increase efficiency.",
    aiPoweredAnalytics: "AI-Powered Analytics",
    aiPoweredAnalyticsDesc: "Harness the power of AI to gain deeper insights and make data-driven decisions.",
    whyChooseUs: "Why Choose Us",
    tailoredSolutions: "Tailored Solutions",
    tailoredSolutionsDesc: "We create customized AI solutions that perfectly fit your business needs and goals.",
    expertTeam: "Expert Team",
    expertTeamDesc: "Our team of AI specialists brings years of experience and cutting-edge knowledge to every project.",
    provenResults: "Proven Results",
    provenResultsDesc: "We have a track record of delivering measurable improvements and ROI for our clients.",
    ongoingSupport: "Ongoing Support",
    ongoingSupportDesc: "We provide continuous support and updates to ensure your AI solutions stay effective and up-to-date.",
    whatOurClientsSay: "What Our Clients Say",
    getInTouch: "Get in Touch",
    yourName: "Your Name",
    yourEmail: "Your Email",
    companyName: "Company Name",
    howCanWeHelp: "How can we help you?",
    sendMessage: "Send Message",
    followUs: "Follow Us",
    allRightsReserved: "All rights reserved.",
  },
  es: {
    title: "Streamline AI Solutions",
    tagline: "Acelere su Negocio con IA",
    description: "Soluciones de IA Streamline ayuda a las empresas a optimizar, automatizar y acelerar sus procesos a través de herramientas de IA personalizadas.",
    getStarted: "Comenzar",
    services: "Servicios",
    whyUs: "Por Qué Nosotros",
    testimonials: "Testimonios",
    contact: "Contacto",
    ourServices: "Nuestros Servicios",
    processOptimization: "Optimización de Procesos",
    processOptimizationDesc: "Optimice sus procesos empresariales con soluciones de IA de vanguardia adaptadas a sus necesidades.",
    automationSolutions: "Soluciones de Automatización",
    automationSolutionsDesc: "Implemente automatización inteligente para reducir tareas manuales y aumentar la eficiencia.",
    aiPoweredAnalytics: "Análisis Impulsado por IA",
    aiPoweredAnalyticsDesc: "Aproveche el poder de la IA para obtener conocimientos más profundos y tomar decisiones basadas en datos.",
    whyChooseUs: "Por Qué Elegirnos",
    tailoredSolutions: "Soluciones a Medida",
    tailoredSolutionsDesc: "Creamos soluciones de IA personalizadas que se ajustan perfectamente a las necesidades y objetivos de su negocio.",
    expertTeam: "Equipo Experto",
    expertTeamDesc: "Nuestro equipo de especialistas en IA aporta años de experiencia y conocimientos de vanguardia a cada proyecto.",
    provenResults: "Resultados Probados",
    provenResultsDesc: "Tenemos un historial de entrega de mejoras medibles y retorno de inversión para nuestros clientes.",
    ongoingSupport: "Soporte Continuo",
    ongoingSupportDesc: "Proporcionamos soporte continuo y actualizaciones para garantizar que sus soluciones de IA se mantengan efectivas y actualizadas.",
    whatOurClientsSay: "Lo Que Dicen Nuestros Clientes",
    getInTouch: "Póngase en Contacto",
    yourName: "Su Nombre",
    yourEmail: "Su Correo Electrónico",
    companyName: "Nombre de la Empresa",
    howCanWeHelp: "¿Cómo podemos ayudarle?",
    sendMessage: "Enviar Mensaje",
    followUs: "Síganos",
    allRightsReserved: "Todos los derechos reservados.",
  }
};

export default function StreamlineAISolutions() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState('es') // Default to Spanish

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/contact', formData);
      alert(response.data.message);
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      alert('Error submitting form. Please try again.');
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const t = translations[language];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Zap className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">{t.title}</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">{t.services}</a>
            <a href="#why-us" className="text-gray-600 hover:text-blue-600 transition-colors">{t.whyUs}</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">{t.testimonials}</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">{t.contact}</a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button onClick={toggleLanguage} className="bg-blue-600 text-white hover:bg-blue-700">
              {language === 'es' ? 'English' : 'Español'}
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <AlignJustify className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-white py-4 px-4">
            <div className="flex flex-col space-y-4">
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={toggleMenu}>{t.services}</a>
              <a href="#why-us" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={toggleMenu}>{t.whyUs}</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={toggleMenu}>{t.testimonials}</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={toggleMenu}>{t.contact}</a>
            </div>
          </nav>
        )}
      </header>

      <main className="flex-grow">
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.tagline}</h1>
            <p className="text-xl mb-8">{t.description}</p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">{t.getStarted}</Button>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">{t.ourServices}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <BarChart className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t.processOptimization}</h3>
                <p className="text-gray-600">{t.processOptimizationDesc}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Cog className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t.automationSolutions}</h3>
                <p className="text-gray-600">{t.automationSolutionsDesc}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Zap className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t.aiPoweredAnalytics}</h3>
                <p className="text-gray-600">{t.aiPoweredAnalyticsDesc}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="why-us" className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">{t.whyChooseUs}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <ChevronRight className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t.tailoredSolutions}</h3>
                  <p className="text-gray-600">{t.tailoredSolutionsDesc}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <ChevronRight className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t.expertTeam}</h3>
                  <p className="text-gray-600">{t.expertTeamDesc}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <ChevronRight className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t.provenResults}</h3>
                  <p className="text-gray-600">{t.provenResultsDesc}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <ChevronRight className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t.ongoingSupport}</h3>
                  <p className="text-gray-600">{t.ongoingSupportDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">{t.whatOurClientsSay}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                </div>
                <p className="text-gray-600 mb-4">"Streamline AI Solutions transformed our business processes. Their tailored AI solutions helped us achieve unprecedented efficiency and growth."</p>
                <p className="font-semibold">- John Doe, CEO of TechCorp</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                </div>
                <p className="text-gray-600 mb-4">"The team at Streamline AI Solutions is exceptional. Their expertise in AI and commitment to our success made all the difference."</p>
                <p className="font-semibold">- Jane Smith, CTO of InnovateCo</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">{t.getInTouch}</h2>
            <div className="max-w-lg mx-auto">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <Input type="text" name="name" placeholder={t.yourName} value={formData.name} onChange={handleInputChange} />
                <Input type="email" name="email" placeholder={t.yourEmail} value={formData.email} onChange={handleInputChange} />
                <Input type="text" name="company" placeholder={t.companyName} value={formData.company} onChange={handleInputChange} />
                <Textarea name="message" placeholder={t.howCanWeHelp} value={formData.message} onChange={handleInputChange} />
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
              <h3 className="text-xl font-semibold mb-4">{t.title}</h3>
              <p className="text-gray-400">Empowering businesses through innovative AI solutions.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">{t.contact}</h3>
              <p className="text-gray-400">123 AI Street, Tech City, 12345</p>
              <p className="text-gray-400">contact@streamlineai.com</p>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">{t.followUs}</h3>
              <div className="flex space-x-4">
                <button onClick={() => window.open('https://twitter.com', '_blank')} className="text-gray-400 hover:text-white transition-colors">Twitter</button>
                <button onClick={() => window.open('https://linkedin.com', '_blank')} className="text-gray-400 hover:text-white transition-colors">LinkedIn</button>
                <button onClick={() => window.open('https://facebook.com', '_blank')} className="text-gray-400 hover:text-white transition-colors">Facebook</button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2023 {t.title}. {t.allRightsReserved}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}