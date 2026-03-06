'use client'

import clsx from 'clsx'
import { DrupalHomepage } from '@/lib/types'

interface StatsSectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

const cardColors = ['bg-primary-100 border-primary-200', 'bg-accent-100 border-accent-200', 'bg-blue-100 border-blue-200', 'bg-green-100 border-green-200']
const textColors = ['text-primary-700', 'text-accent-700', 'text-blue-700', 'text-green-700']

export default function StatsSection({ homepageContent }: StatsSectionProps) {
  const stats = (homepageContent as any)?.stats || (homepageContent as any)?.statsItems || []
  if (!stats || stats.length === 0) return null

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat: any, i: number) => (
            <div key={stat.id || i} className={clsx('rounded-2xl border-2 p-6 text-center', cardColors[i % cardColors.length])}>
              <div className={clsx('text-3xl md:text-4xl font-bold mb-2', textColors[i % textColors.length])}>{stat.value || stat.number || stat.statValue}</div>
              <div className="text-gray-700 font-semibold text-sm">{stat.label || stat.statLabel || stat.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
