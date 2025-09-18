"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Mail, MapPin, Factory } from "lucide-react"
import Image from "next/image"

const navigation = [
  { name: "HOME", href: "/" },
  // { name: "ABOUT US", href: "/about-us" },
  { name: "PROJECTS", href: "/projects" },
  { name: "OUR SERVICES", href: "/our-services" },
  { name: "MEDIA GALLERY", href: "/media-gallery" },
  { name: "PRODUCTS", href: "/products" },
  // { name: "NOTICE BOARD", href: "/notice-board" },
  { name: "CONTACT US", href: "/contact-us" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div
        className="text-white py-2 px-4 shadow-sm"
        style={{
          background: "linear-gradient(to right, #f97316, #ea580c)",
          backgroundColor: "#f97316",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
            {/* Contact Information */}
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div
                className="flex items-center gap-2 hover:text-orange-100 transition-colors"
                style={{ color: "white" }}
              >
                <Phone className="h-3.5 w-3.5" style={{ color: "white" }} />
                <span className="font-medium" style={{ color: "white" }}>
                  +88 01716-475689
                </span>
              </div>
              <div
                className="flex items-center gap-2 hover:text-orange-100 transition-colors"
                style={{ color: "white" }}
              >
                <Phone className="h-3.5 w-3.5" style={{ color: "white" }} />
                <span className="font-medium" style={{ color: "white" }}>
                  +88 01616-475689
                </span>
              </div>
              <div
                className="flex items-center gap-2 hover:text-orange-100 transition-colors"
                style={{ color: "white" }}
              >
                <Mail className="h-3.5 w-3.5" style={{ color: "white" }} />
                <span className="font-medium" style={{ color: "white" }}>
                  shebaengineering2021@gmail.com
                </span>
              </div>
            </div>

            {/* Office Locations */}
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <div className="flex items-center gap-1.5" style={{ color: "white" }}>
                <MapPin className="h-3 w-3" style={{ color: "white" }} />
                <span style={{ color: "white" }}>Office: C/52, Soronika Residential Area, Savar, Dhaka-1340</span>
              </div>
              <div className="flex items-center gap-1.5" style={{ color: "white" }}>
                <Factory className="h-3 w-3" style={{ color: "white" }} />
                <span style={{ color: "white" }}>Factory: Kaisa Bari, Batentak, Baipal, Savar, Dhaka-1340</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200/50"
            : "bg-white border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Image
                  src="/images/sheba-logo.jpeg"
                  alt="Sheba Engineering Logo"
                  width={60}
                  height={60}
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -inset-1 bg-orange-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                  SHEBA ENGINEERING
                </span>
                <span className="text-sm text-orange-600 font-medium tracking-wide">আপনার স্বপ্ন নির্মাণ করুন</span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-2 py-2 text-sm font-semibold tracking-wide transition-all duration-300 group ${
                    pathname === item.href ? "text-orange-600" : "text-gray-700 hover:text-orange-600"
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  <div
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-300 ${
                      pathname === item.href
                        ? "w-full opacity-100"
                        : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }`}
                  />
                </Link>
              ))}
            </div>

            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative w-12 h-12 rounded-xl hover:bg-orange-50 border border-gray-200 hover:border-orange-200 transition-all duration-200"
                >
                  <Menu className="h-6 w-6 text-gray-700" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-[350px] bg-white backdrop-blur-xl border-l border-gray-200">
                <div className="flex flex-col space-y-6 mt-8">
                  <div className="flex items-center space-x-3 mb-6 pb-6 border-b border-gray-200">
                    <Image
                      src="/images/sheba-logo.jpeg"
                      alt="Sheba Engineering Logo"
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                    <div className="flex flex-col">
                      <span className="text-xl font-bold text-gray-900">SHEBA ENGINEERING</span>
                      <span className="text-sm text-orange-600 font-medium">Quality Construction</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                    <div className="flex items-center space-x-3 text-sm text-gray-600">
                      <Phone className="h-4 w-4 text-orange-500" />
                      <span>+88 01716-475689</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-gray-600">
                      <Mail className="h-4 w-4 text-orange-500" />
                      <span>shebaengineering2021@gmail.com</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block px-4 py-3 text-base font-semibold rounded-lg transition-all duration-300 ${
                          pathname === item.href
                            ? "text-orange-600 bg-orange-50"
                            : "text-gray-700 hover:text-orange-600 hover:bg-gray-50"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  )
}
