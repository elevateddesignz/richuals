import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-stencil text-4xl font-bold mb-4 text-orange-500">
            CONTACT COMMAND
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Need tactical support? Our team is standing by to assist with orders, 
            product questions, and mission-critical inquiries.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="font-stencil text-2xl font-bold mb-6 text-orange-500">
                GET IN TOUCH
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">support@rich-u-als.com</p>
                    <p className="text-gray-600">orders@rich-u-als.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+1 (555) 123-4568 (Orders)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Headquarters</h3>
                    <p className="text-gray-600">
                      1234 Tactical Blvd<br />
                      Los Angeles, CA 90210<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 8:00 PM PST<br />
                      Saturday: 9:00 AM - 6:00 PM PST<br />
                      Sunday: 10:00 AM - 4:00 PM PST
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-stencil text-lg font-bold mb-4 text-orange-500">
                  QUICK LINKS
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/returns" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
                      Returns & Exchanges
                    </a>
                  </li>
                  <li>
                    <a href="/shipping" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
                      Shipping Information
                    </a>
                  </li>
                  <li>
                    <a href="/size-guide" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
                      Size Guide
                    </a>
                  </li>
                  <li>
                    <a href="/warranty" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
                      Warranty Information
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="font-stencil text-2xl font-bold mb-6 text-orange-500">
                SEND A MESSAGE
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="order">Order Inquiry</option>
                    <option value="product">Product Question</option>
                    <option value="return">Return/Exchange</option>
                    <option value="shipping">Shipping Issue</option>
                    <option value="wholesale">Wholesale Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>SEND MESSAGE</span>
                </button>
              </form>

              <div className="mt-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                <p className="text-sm text-orange-800">
                  <strong>Response Time:</strong> We typically respond to all inquiries within 24 hours during business days. 
                  For urgent matters, please call our support line directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-stencil text-3xl font-bold mb-4 text-orange-500">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-gray-600">
              Quick answers to common questions about RICH-U-ALS gear and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">How long does shipping take?</h3>
              <p className="text-gray-600 mb-4">
                Standard shipping takes 3-5 business days. Express shipping (1-2 days) is available for urgent orders.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">What is your return policy?</h3>
              <p className="text-gray-600 mb-4">
                We offer a 30-day return policy for unworn items in original condition with tags attached.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Do you offer international shipping?</h3>
              <p className="text-gray-600 mb-4">
                Yes, we ship worldwide. International shipping rates and times vary by destination.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Are your products made in the USA?</h3>
              <p className="text-gray-600 mb-4">
                Many of our products are made in the USA. Product origin is listed on each item's detail page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;