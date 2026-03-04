'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'
import { Menu, X, Sparkles } from 'lucide-react'

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Programs', href: '/services' },
  { name: 'Events', href: '/events' },
  { name: 'About', href: '/about' },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const getActiveTab = () => {
    if (pathname === '/') return 'Home'
    for (const item of navigationItems) {
      if (item.href !== '/' && pathname.startsWith(item.href)) return item.name
    }
    return null
  }

  const activeTab = getActiveTab()

  return (
    <header className="bg-primary-600 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity duration-200">
            <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-accent-300" />
            </div>
            <span className="text-lg font-bold text-white font-display hidden sm:block">Community Hub</span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link key={item.name} href={item.href} className={clsx('px-4 py-2 rounded-2xl text-sm font-semibold transition-all duration-200', activeTab === item.name ? 'bg-white/20 text-white' : 'text-primary-100 hover:text-white hover:bg-white/10')}>
                {item.name}
              </Link>
            ))}
          </nav>

          <button type="button" className="lg:hidden inline-flex items-center justify-center p-2 rounded-2xl text-primary-100 hover:text-white hover:bg-white/10" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span className="sr-only">Open menu</span>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/20 py-4">
            <nav className="flex flex-col space-y-1">
              {navigationItems.map((item) => (
                <Link key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)} className={clsx('px-4 py-3 rounded-2xl text-sm font-semibold transition-colors', activeTab === item.name ? 'bg-white/20 text-white' : 'text-primary-100 hover:text-white hover:bg-white/10')}>
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
