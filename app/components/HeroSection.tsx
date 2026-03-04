'use client'

import Link from 'next/link'
import { DrupalHomepage } from '@/lib/types'

interface HeroSectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function HeroSection({ homepageContent }: HeroSectionProps) {
  const title = (homepageContent as any)?.heroTitle || (homepageContent as any)?.title || 'Welcome'
  const subtitle = (homepageContent as any)?.heroSubtitle || ''

  return (
    <section className="relative bg-primary-600 overflow-hidden pt-32 pb-24">
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary-500 rounded-full opacity-30" />
      <div className="absolute bottom-10 right-20 w-48 h-48 bg-accent-400 rounded-full opacity-20" />
      <div className="absolute top-1/2 right-10 w-32 h-32 bg-primary-400 rounded-full opacity-25" />
      <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&q=80&fit=crop)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block px-4 py-2 bg-accent-400/20 text-accent-200 rounded-full text-sm font-semibold mb-6 border border-accent-400/30">Serving Local Communities</span>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">{title}</h1>
        {subtitle && <p className="text-xl md:text-2xl text-primary-100 mb-6 max-w-3xl mx-auto font-medium">{subtitle}</p>}
        <div className="flex gap-4 justify-center mt-8 flex-wrap">
          <Link href="/services" className="px-8 py-4 bg-accent-400 text-primary-900 rounded-2xl font-bold text-lg hover:bg-accent-300 transition-colors duration-200">Get Started</Link>
          <Link href="/about" className="px-8 py-4 bg-white/20 text-white rounded-2xl font-bold text-lg border-2 border-white/40 hover:bg-white/30 transition-colors duration-200">Learn More</Link>
        </div>
      </div>
    </section>
  )
}
