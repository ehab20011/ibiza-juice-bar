"use client";

import React, { useState } from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
  
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    const formValues = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      department: formData.get('department'),
      message: formData.get('message')
    };
  
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formValues),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }
  
      setSubmitStatus({
        type: 'success',
        message: data.message || 'Message sent successfully! We\'ll get back to you soon.'
      });
  
      formElement.reset();
  
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-[#FFFBE8] to-[#FFF8E0] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600">We'd love to hear from you!</p>
          </div>

          {/* Contact Form (new white box) */}
          <div className="bg-white rounded-xl p-8 shadow-md mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Drop Us A Line</h2>
            
            {/* Status Message */}
            {submitStatus.type && (
              <div className={`mb-6 p-4 rounded-md ${
                submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-black font-semibold mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="block w-full border border-gray-300 rounded-md p-2 focus:border-yellow-600 focus:outline-none text-black"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-black font-semibold mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="block w-full border border-gray-300 rounded-md p-2 focus:border-yellow-600 focus:outline-none text-black"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-black font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="block w-full border border-gray-300 rounded-md p-2 focus:border-yellow-600 focus:outline-none text-black"
                />
              </div>

              {/* Department (dropdown) */}
              <div>
                <label htmlFor="department" className="block text-black font-semibold mb-2">
                  Department
                </label>
                <select
                id="department"
                name="department"
                className="block w-full border border-gray-300 rounded-md p-2 bg-white focus:border-yellow-600 focus:outline-none text-black"
                >
                <option value="">Please select a department</option>
                <option value="General">General Inquiry</option>
                <option value="CustomerService">Customer Service</option>
                <option value="Sales">Sales</option>
                <option value="Marketing">Marketing</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-black font-semibold mb-2">
                  What's on your mind? <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="block w-full border border-gray-300 rounded-md p-2 focus:border-yellow-600 focus:outline-none text-black"
                ></textarea>
              </div>

              {/* Updated Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-yellow-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-yellow-700 focus:bg-yellow-700 transition-colors ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
            </form>
          </div>

          {/* Existing two-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
                  <p className="text-gray-600">32-04 30th Ave,</p>
                  <p className="text-gray-600">Long Island City, NY 11102</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                  <a
                    href="tel:347-829-3130"
                    className="text-yellow-600 hover:text-yellow-700"
                  >
                    (347) 829-3130
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Hours</h3>
                  <div className="space-y-1 text-gray-600">
                    <p className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>8:00 AM - 10:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:00 AM - 10:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Sunday</span>
                      <span>9:00 AM - 9:00 PM</span>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.instagram.com/ibizajuicebar/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-yellow-600 transition-colors"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://www.tiktok.com/@ibizajuicebar.nyc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-yellow-600 transition-colors"
                    >
                      TikTok
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Us</h2>
              <div className="h-[400px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.6917713210427!2d-73.9217xxxx!3d40.7699xxxx!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259xxxyyyzzz%3A0xb0cf081bf7268653!2s32-04%2030th%20Ave%2C%20Astoria%2C%20NY%2011102%2C%20USA!5e0!3m2!1sen!2sus!4v1692302348798!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ContactPage;
