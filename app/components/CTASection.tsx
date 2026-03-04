'use client'

import Link from 'next/link'
import { DrupalHomepage } from '@/lib/types'

interface CTASectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function CTASection({ homepageContent }: CTASectionProps) {
  const title = (homepageContent as any)?.ctaTitle || 'Get in Touch'
  const primaryLabel = (homepageContent as any)?.ctaPrimary || 'Contact Us'
  const secondaryLabel = (homepageContent as any)?.ctaSecondary || 'Learn More'

  return (
    <section className="bg-primary-700 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=1920&q=80&fit=crop)' }} />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">{title}</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="px-8 py-4 bg-accent-400 text-primary-900 rounded-2xl font-bold text-lg hover:bg-accent-300 transition-colors duration-200">{primaryLabel}</Link>
          <Link href="/about" className="px-8 py-4 bg-white/20 text-white rounded-2xl font-bold text-lg border-2 border-white/40 hover:bg-white/30 transition-colors duration-200">{secondaryLabel}</Link>
        </div>
      </div>
    </section>
  )
}
