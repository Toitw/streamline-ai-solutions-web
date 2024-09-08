import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AlignJustify, X, ChevronRight, Zap, BarChart, Cog, Star } from 'lucide-react'
import React from 'react';
import axios from 'axios';

export default function StreamlineAISolutions() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Zap className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">Streamline AI Solutions</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
            <a href="#why-us" className="text-gray-600 hover:text-blue-600 transition-colors">Why Us</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Testimonials</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <AlignJustify className="h-6 w-6" />}
          </Button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-white py-4 px-4">
            <div className="flex flex-col space-y-4">
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Services</a>
              <a href="#why-us" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Why Us</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Testimonials</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Contact</a>
            </div>
          </nav>
        )}
      </header>

      <main className="flex-grow">
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Accelerate Your Business with AI</h1>
            <p className="text-xl mb-8">Streamline AI Solutions helps businesses optimize, automate, and accelerate their processes through personalized AI tools.</p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">Get Started</Button>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <BarChart className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Process Optimization</h3>
                <p className="text-gray-600">Streamline your business processes with cutting-edge AI solutions tailored to your needs.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Cog className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Automation Solutions</h3>
                <p className="text-gray-600">Implement intelligent automation to reduce manual tasks and increase efficiency.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Zap className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">AI-Powered Analytics</h3>
                <p className="text-gray-600">Harness the power of AI to gain deeper insights and make data-driven decisions.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="why-us" className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <ChevronRight className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Tailored Solutions</h3>
                  <p className="text-gray-600">We create customized AI solutions that perfectly fit your business needs and goals.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <ChevronRight className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                  <p className="text-gray-600">Our team of AI specialists brings years of experience and cutting-edge knowledge to every project.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <ChevronRight className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
                  <p className="text-gray-600">We have a track record of delivering measurable improvements and ROI for our clients.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
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
            <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
            <div className="max-w-lg mx-auto">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <Input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} />
                <Input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} />
                <Input type="text" name="company" placeholder="Company Name" value={formData.company} onChange={handleInputChange} />
                <Textarea name="message" placeholder="How can we help you?" value={formData.message} onChange={handleInputChange} />
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
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2023 Streamline AI Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}