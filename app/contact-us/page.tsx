"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from "lucide-react"
import emailjs from '@emailjs/browser'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Initialize EmailJS with your public key
  const initEmailJS = () => {
    emailjs.init("ZY-yqh5zxUtlbKque") // Replace with your actual public key from EmailJS
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Initialize EmailJS
    initEmailJS()

    try {
      const result = await emailjs.send(
        'service_eijkdbl',    // Replace with your EmailJS service ID
        'template_1rgviex',   // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          to_email: 'shebaengineering2021@gmail.com', // Your email
        }
      )
      
      console.log('SUCCESS!', result.status, result.text)
      setSubmitStatus('success')
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.log('FAILED...', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: ["Office: C/52,", "Soronika Residential Area, Savar,", "Dhaka-1340"],
      delay: 0.1
    },
    {
      icon: Phone,
      title: "Phone",
      content: ["Main: +88 01716-475689", "Emergency: +88 01616-475689"],
      delay: 0.2
    },
    {
      icon: Mail,
      title: "Email",
      content: ["shebaengineering2021@gmail.com"],
      delay: 0.3
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: ["Saturday - Thursday: 9:00 AM - 6:00 PM", "Friday: Closed"],
      delay: 0.4
    }
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section with Gradient Background */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-24 pb-16 bg-gradient-to-br from-orange-50 to-orange-100/50 dark:from-orange-950/20 dark:to-orange-900/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-6"
            >
              Contact Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            >
              Get in touch with our team to discuss your construction and engineering needs. We're here to help bring
              your vision to life with excellence and precision.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold text-foreground mb-6"
                >
                  Get In Touch
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-muted-foreground leading-relaxed text-lg"
                >
                  Ready to start your next construction project? Our team of experts is here to help. Contact us today
                  to discuss your requirements and get a personalized quote.
                </motion.p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: item.delay }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className="flex items-start space-x-4 p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-lg hover:border-orange-200 transition-all duration-300"
                    >
                      <motion.div 
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full shadow-lg"
                      >
                        <IconComponent className="h-6 w-6 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-2 text-lg">{item.title}</h3>
                        <div className="text-muted-foreground space-y-1">
                          {item.content.map((line, lineIndex) => (
                            <p key={lineIndex} className="leading-relaxed">{line}</p>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-2xl border-0 bg-card/80 backdrop-blur-sm">
                <CardHeader className="pb-8">
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent text-center"
                  >
                    Send Us a Message
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-muted-foreground text-center leading-relaxed"
                  >
                    Fill out the form below and we'll get back to you within 24 hours.
                  </motion.p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <Label htmlFor="name" className="text-sm font-medium text-foreground">Full Name *</Label>
                        <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your full name"
                            disabled={isSubmitting}
                            className="h-12 transition-all duration-300 focus:shadow-lg focus:border-orange-300 focus:ring-2 focus:ring-orange-200"
                          />
                        </motion.div>
                      </motion.div>
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <Label htmlFor="email" className="text-sm font-medium text-foreground">Email Address *</Label>
                        <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="your.email@example.com"
                            disabled={isSubmitting}
                            className="h-12 transition-all duration-300 focus:shadow-lg focus:border-orange-300 focus:ring-2 focus:ring-orange-200"
                          />
                        </motion.div>
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <Label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number</Label>
                        <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+88 01716-475689"
                            disabled={isSubmitting}
                            className="h-12 transition-all duration-300 focus:shadow-lg focus:border-orange-300 focus:ring-2 focus:ring-orange-200"
                          />
                        </motion.div>
                      </motion.div>
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <Label htmlFor="subject" className="text-sm font-medium text-foreground">Subject *</Label>
                        <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            placeholder="Project inquiry"
                            disabled={isSubmitting}
                            className="h-12 transition-all duration-300 focus:shadow-lg focus:border-orange-300 focus:ring-2 focus:ring-orange-200"
                          />
                        </motion.div>
                      </motion.div>
                    </div>

                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <Label htmlFor="message" className="text-sm font-medium text-foreground">Message *</Label>
                      <motion.div whileFocus={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="h-32 transition-all duration-300 focus:shadow-lg focus:border-orange-300 focus:ring-2 focus:ring-orange-200"
                          placeholder="Tell us about your project requirements..."
                          disabled={isSubmitting}
                        />
                      </motion.div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    >
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full h-14 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-3 h-5 w-5" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </motion.div>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center justify-center space-x-3 text-green-700 bg-green-50 p-4 rounded-xl border border-green-200 shadow-sm"
                      >
                        <CheckCircle className="h-5 w-5" />
                        <span className="font-medium">Message sent successfully! We'll get back to you within 24 hours.</span>
                      </motion.div>
                    )}

                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center justify-center space-x-3 text-red-700 bg-red-50 p-4 rounded-xl border border-red-200 shadow-sm"
                      >
                        <AlertCircle className="h-5 w-5" />
                        <span className="font-medium">Failed to send message. Please try again or contact us directly.</span>
                      </motion.div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}