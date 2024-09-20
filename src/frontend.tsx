'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from "./components/ui/button.tsx"
import { Input } from "./components/ui/input.tsx"
import { Textarea } from "./components/ui/textarea.tsx"
import {

  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion.tsx"
import { AlignJustify, X, ChevronRight, Zap, BarChart, Cog, Star, MessageCircle, ChevronLeft, ChevronUp } from 'lucide-react'


export default function StreamlineAISolutions() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const statsRef = useRef(null)
  const [statsVisible, setStatsVisible] = useState(false)

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
    }, [end, duration])
    
    return <span>{count}</span>
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
            <a href="#services" onClick={(e) => smoothScroll(e, '#services')} className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
            <a href="#why-us" onClick={(e) => smoothScroll(e, '#why-us')} className="text-gray-600 hover:text-blue-600 transition-colors">Why Us</a>
            <a href="#testimonials" onClick={(e) => smoothScroll(e, '#testimonials')} className="text-gray-600 hover:text-blue-600 transition-colors">Testimonials</a>
            <a href="#faq" onClick={(e) => smoothScroll(e, '#faq')} className="text-gray-600 hover:text-blue-600 transition-colors">FAQ</a>
            <a href="#contact" onClick={(e) => smoothScroll(e, '#contact')} className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <AlignJustify className="h-6 w-6" />}
          </Button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-white py-4 px-4">
            <div className="flex flex-col space-y-4">
              <a href="#services" onClick={(e) => smoothScroll(e, '#services')} className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
              <a href="#why-us" onClick={(e) => smoothScroll(e, '#why-us')} className="text-gray-600 hover:text-blue-600 transition-colors">Why Us</a>
              <a href="#testimonials" onClick={(e) => smoothScroll(e, '#testimonials')} className="text-gray-600 hover:text-blue-600 transition-colors">Testimonials</a>
              <a href="#faq" onClick={(e) => smoothScroll(e, '#faq')} className="text-gray-600 hover:text-blue-600 transition-colors">FAQ</a>
              <a href="#contact" onClick={(e) => smoothScroll(e, '#contact')} className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </nav>
        )}
      </header>

      <main className="flex-grow pt-16">
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">Accelerate Your Business with AI</h1>
            <p className="text-xl mb-8 animate-fade-in-up animation-delay-200">Streamline AI Solutions helps businesses optimize, automate, and accelerate their processes through personalized AI tools.</p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 animate-fade-in-up animation-delay-400">Get Started</Button>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                <BarChart className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Process Optimization</h3>
                <p className="text-gray-600">Streamline your business processes with cutting-edge AI solutions tailored to your needs.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                <Cog className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Automation Solutions</h3>
                <p className="text-gray-600">Implement intelligent automation to reduce manual tasks and increase efficiency.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                <Zap className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">AI-Powered Analytics</h3>
                <p className="text-gray-600">Harness the power of AI to gain deeper insights and make data-driven decisions.</p>
              </div>
            </div>
          </div>
        </section>

        <section ref={statsRef} className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-4xl font-bold mb-2">
                  <AnimatedCounter end={500} duration={2000} />+
                </h3>
                <p>Clients Served</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">
                  <AnimatedCounter end={95} duration={2000} />%
                </h3>
                <p>Client Satisfaction</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">
                  $<AnimatedCounter end={50} duration={2000} />M+
                </h3>
                <p>Revenue Generated</p>
              </div>
            </div>
          </div>
        </section>

        <section id="why-us" className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4 transform transition duration-500 hover:scale-105">
                <ChevronRight className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Tailored Solutions</h3>
                  <p className="text-gray-600">We create customized AI solutions that perfectly fit your business needs and goals.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 transform transition duration-500 hover:scale-105">
                <ChevronRight className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                  <p className="text-gray-600">Our team of AI specialists brings years of experience and cutting-edge knowledge to every project.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 transform transition duration-500 hover:scale-105">
                <ChevronRight className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
                  <p className="text-gray-600">We have a track record of delivering measurable improvements and ROI for our clients.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 transform transition duration-500 hover:scale-105">
                <ChevronRight className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
                  <p className="text-gray-600">We provide continuous support and updates to ensure your AI solutions stay effective and up-to-date.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
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
              >
                <ChevronLeft className="w-6 h-6 text-blue-600" />
              </button>
              <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
                onClick={() => setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
              >
                <ChevronRight className="w-6 h-6 text-blue-600" />
              </button>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
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
            <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
            <div className="max-w-lg mx-auto">
              <form className="space-y-4">
                <Input type="text" placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
                <Input type="text" placeholder="Company Name" />
                <Textarea placeholder="How can we help you?" />
                <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">Send Message</Button>
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
              <p className="text-gray-400">Empowering businesses through innovative AI solutions.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">123 AI Street, Tech City, 12345</p>
              <p className="text-gray-400">contact@streamlineai.com</p>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2023 Streamline AI Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <button
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 hover:bg-blue-700"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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
          Contact Us
        </Button>
      </div>
    </div>
  )
}