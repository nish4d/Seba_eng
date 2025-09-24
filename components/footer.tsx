"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const socialLinks = [
  { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61581519381304" },
  { Icon: Twitter, href: "https://twitter.com/" },
  { Icon: Linkedin, href: "https://linkedin.com/" },
  { Icon: Instagram, href: "https://instagram.com/" },
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/sheba-logo.jpeg"
                alt="Sheba Engineering Logo"
                width={50}
                height={50}
                className="object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">SHEBA ENGINEERING</span>
                <span className="text-sm text-orange-400">আপনার স্বপ্ন নির্মাণ করুন</span>
              </div>
            </div>
            <p className="text-sm text-gray-200">
              Leading engineering and construction company specializing in quality steel work, aluminium composite
              panels, Thai aluminium, and false ceiling solutions.
            </p>
            <div className="flex space-x-4">
            {socialLinks.map(({ Icon, href }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-200 hover:text-slate-50 hover:bg-amber-500"
          >
            <Icon className="h-5 w-5" />
          </Button>
        </a>
      ))}
    </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-400">Quick Links</h3>
            <div className="space-y-2">
              {[
                { href: "/about-us", text: "About Us" },
                { href: "/notice-board", text: "NOTICE BOARD"},
                { href: "/projects", text: "Our Projects" },
                { href: "/our-services", text: "Services" },
                { href: "/media-gallery", text: "Gallery" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-gray-200 hover:text-orange-400 transition-colors"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-400">Our Services</h3>
            <div className="space-y-2">
              {[
                "Quality Steel Work",
                "Aluminium Composite Panel",
                "All Kinds of Thai Aluminium",
                "False Ceiling & Many More",
              ].map((service) => (
                <p key={service} className="text-sm text-gray-200">
                  {service}
                </p>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-400">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-orange-400 mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-200">
                  <p>Office: C/52, Soronika Residential Area, Savar, Dhaka-1340</p>
                  <p className="mt-1">Factory: Kaisa Bari, Batentak, Baipal, Savar, Dhaka-1340</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-orange-400" />
                <span className="text-sm text-gray-200">+88 01716-475689</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-orange-400" />
                <span className="text-sm text-gray-200">+88 01616-475689</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange-400" />
                <span className="text-sm text-gray-200">shebaengineering2021@gmail.com</span>
              </div>
              
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">© 2024 Sheba Engineering. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
