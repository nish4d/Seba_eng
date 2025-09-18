"use client"

import Link from "next/link"
import { Building2 } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Building2 className="h-10 w-10 text-accent" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">BuildTech</span>
              <span className="text-sm text-muted-foreground">Engineering Solutions</span>
            </div>
          </Link>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="text-right">
              <p className="text-sm font-medium text-foreground">Call Us Today</p>
              <p className="text-lg font-bold text-accent">+1 (555) 123-4567</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-foreground">Email Us</p>
              <p className="text-sm text-muted-foreground">info@buildtech.com</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
